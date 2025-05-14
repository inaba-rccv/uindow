import {
  onBeforeUnmount,
  onMounted,
  watchEffect,
  type Ref,
  type ComputedRef,
} from 'vue'
import { addPx } from '../../utils/tools'
import type { SliderEmit } from './slider.type'

export const useSlider = (
  containerRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<HTMLElement | undefined>,
  traceRef: Ref<HTMLElement | undefined>,
  initialValue: number,
  max: number,
  emit: (event: SliderEmit, arg: number) => void,
) => {
  let maxWidth: number
  let offsetX: number
  let dragBtnRadius: number
  let currentValue = initialValue

  const containerMousedownEvent = (e: MouseEvent) => {
    offsetX = Math.min(Math.max(e.offsetX - dragBtnRadius, 0), maxWidth)
    dragRef.value!.style.left = `${addPx(offsetX)}`
    r()
    callback()
    mouseEvents(e.clientX, offsetX)
  }

  const mousedownEvent = (e: MouseEvent) => {
    const donwX = e.clientX
    const startX = offsetX
    mouseEvents(donwX, startX)
  }

  const mouseEvents = (donwX: number, startX: number) => {
    const mousemoveEvent = function (e: MouseEvent) {
      offsetX = Math.min(Math.max(e.clientX - donwX + startX, 0), maxWidth)
      dragRef.value!.style.left = `${addPx(offsetX)}`
      r()
      callback()
    }

    const mouseupEvent = () => {
      document.removeEventListener('mousemove', mousemoveEvent)
      document.removeEventListener('mouseup', mouseupEvent)
    }

    document.addEventListener('mousemove', mousemoveEvent)
    document.addEventListener('mouseup', mouseupEvent)
  }

  const onDraggable = () => {
    if (containerRef.value && dragRef.value && traceRef.value) {
      const dragRefRect = dragRef.value.getBoundingClientRect()
      maxWidth =
        containerRef.value.getBoundingClientRect().width - dragRefRect.width
      dragBtnRadius = dragRefRect.width / 2
      offsetX = Math.min(Math.max((initialValue / max) * maxWidth, 0), maxWidth)
      r()
      dragRef.value.addEventListener('mousedown', mousedownEvent)
      traceRef.value.addEventListener('mousedown', containerMousedownEvent)
      containerRef.value.addEventListener('mousedown', containerMousedownEvent)
    }
  }

  const r = () => {
    dragRef.value!.style.left = `${addPx(offsetX)}`
    traceRef.value!.style.width = `${addPx(offsetX + dragBtnRadius)}`
  }

  const callback = () => {
    const value = Math.round((offsetX / maxWidth) * max)
    if (value !== currentValue) {
      currentValue = value
      emit('update:modelValue', currentValue)
    }
  }

  const offDraggable = () => {
    if (containerRef.value && dragRef.value) {
      dragRef.value.removeEventListener('mousedown', mousedownEvent)
      containerRef.value.removeEventListener(
        'mousedown',
        containerMousedownEvent,
      )
    }
  }

  onMounted(() => {
    onDraggable()
  })

  onBeforeUnmount(() => {
    offDraggable()
  })
}
