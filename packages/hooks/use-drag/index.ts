import {
  onBeforeUnmount,
  onMounted,
  watchEffect,
  type Ref,
  type ComputedRef,
} from 'vue'
import messageBox from '@uindow/components/message-box/message-box'
import { addPx } from "@uindow/utils"
import type { IPosition } from '@uindow/types'
import { uindowManager } from '@uindow/utils'

export const useDrag = (
  containerRef: Ref<HTMLElement | undefined>,
  headerRef: Ref<HTMLElement | undefined>,
  draggable: ComputedRef<boolean>,
  overflow: ComputedRef<boolean>,
  initialPosition: IPosition | undefined,
): void => {
  let transform: IPosition
  // TODO 有没有更好的写法？
  if (initialPosition !== undefined) {
    transform = { ...initialPosition }
  } else {
    transform = uindowManager.getNextUindowPosition()
  }

  let zIndex = messageBox.nextIndex()

  const containerMousedownEvent = function (e: MouseEvent) {
    if (zIndex !== messageBox.currentIndex()) {
      zIndex = messageBox.nextIndex()
      containerRef.value!.style.zIndex = String(zIndex)
    }
  }

  const mousedownEvent = function (e: MouseEvent) {
    // document.body.classList.add('no-select')
    const donwX = e.clientX
    const downY = e.clientY

    const boxRect = containerRef.value!.getBoundingClientRect()
    const { offsetX, offsetY } = transform
    const boxLeft = boxRect.left
    const boxTop = boxRect.top
    const boxWidth = boxRect.width
    const boxHeight = boxRect.height

    const maxWidth = document.documentElement.clientWidth
    const maxHeight = document.documentElement.clientHeight
    const minLeft = -boxLeft + offsetX
    const minTop = -boxTop + offsetY
    const maxLeft = maxWidth - boxLeft - boxWidth + offsetX
    const maxTop = maxHeight - boxTop - boxHeight + offsetY

    const mousemoveEvent = function (e: MouseEvent) {
      let distanceX = e.clientX - donwX + offsetX
      let distanceY = e.clientY - downY + offsetY

      if (!overflow.value) {
        distanceX = Math.min(Math.max(distanceX, minLeft), maxLeft)
        distanceY = Math.min(Math.max(distanceY, minTop), maxTop)
      }
      transform = {
        offsetX: distanceX,
        offsetY: distanceY,
      }
      containerRef.value!.style.transform = `translate(${addPx(distanceX)}, ${addPx(distanceY)})`
    }

    const mouseupEvent = () => {
      // document.body.classList.remove('no-select')
      document.removeEventListener('mousemove', mousemoveEvent)
      document.removeEventListener('mouseup', mouseupEvent)
    }

    document.addEventListener('mousemove', mousemoveEvent)
    document.addEventListener('mouseup', mouseupEvent)
  }

  const onDraggable = () => {
    if (containerRef.value && headerRef.value) {
      containerRef.value.style.zIndex = String(zIndex)
      containerRef.value.style.transform = `translate(${addPx(transform.offsetX)}, ${addPx(transform.offsetY)})`
      headerRef.value.addEventListener('mousedown', mousedownEvent)
      containerRef.value.addEventListener('mousedown', containerMousedownEvent)
    }
  }

  const offDraggable = () => {
    if (containerRef.value && headerRef.value) {
      headerRef.value.removeEventListener('mousedown', mousedownEvent)
      containerRef.value.removeEventListener(
        'mousedown',
        containerMousedownEvent,
      )
    }
  }

  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable()
      } else {
        offDraggable()
      }
    })
  })

  onBeforeUnmount(() => {
    offDraggable()
  })
}
