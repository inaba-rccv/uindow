import type {
  Reactive,
} from 'vue'
import type { SliderEmit } from './slider.type'
import {
  onBeforeUnmount,
  ref,
  toRefs,
  watchEffect,
} from 'vue'
import { addPx } from '../../utils/tools'

export function useSlider(
  props: Reactive<{
    modelValue: number
    max: number
    vertical: boolean
    disabled: boolean
  }>,
  emit: (event: SliderEmit, arg: number) => void,
) {
  let maxLength: number
  let offset: number
  let dragBtnRadius: number
  let currentValue: number
  const { modelValue, max, vertical, disabled } = toRefs(props)
  const trackRef = ref<HTMLElement>()
  const traceRef = ref<HTMLElement>()
  const buttonRef = ref<HTMLElement>()
  const offsetStyle = vertical.value ? 'top' : 'left'
  const lengthStyle = vertical.value ? 'height' : 'width'
  const clientType = vertical.value ? 'clientY' : 'clientX'
  const clientOffsetType = vertical.value ? 'offsetY' : 'offsetX'

  const r = () => {
    buttonRef.value!.style[offsetStyle] = `${addPx(offset)}`
    traceRef.value!.style[lengthStyle] = `${addPx(offset + dragBtnRadius)}`
  }

  const callback = () => {
    const value = Math.round((offset / maxLength) * max.value)
    if (value !== currentValue) {
      currentValue = value
      emit('update:modelValue', currentValue)
    }
  }

  const mouseEvents = (downX: number, startX: number) => {
    const mousemoveEvent = function (e: MouseEvent) {
      offset = Math.min(Math.max(e[clientType] - downX + startX, 0), maxLength)
      buttonRef.value!.style[offsetStyle] = `${addPx(offset)}`
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

  const containerMousedownEvent = (e: MouseEvent) => {
    offset = Math.min(Math.max(e[clientOffsetType] - dragBtnRadius, 0), maxLength)
    buttonRef.value!.style[offsetStyle] = `${addPx(offset)}`
    r()
    callback()
    mouseEvents(e[clientType], offset)
  }

  const mousedownEvent = (e: MouseEvent) => {
    const downX = e[clientType]
    const startX = offset
    mouseEvents(downX, startX)
  }

  const onDraggable = () => {
    if (trackRef.value && buttonRef.value && traceRef.value) {
      const buttonRefRect = buttonRef.value.getBoundingClientRect()
      maxLength
        = trackRef.value.getBoundingClientRect()[lengthStyle] - buttonRefRect[lengthStyle]
      dragBtnRadius = buttonRefRect[lengthStyle] / 2
      watchEffect(() => {
        if (modelValue.value !== currentValue) {
          currentValue = modelValue.value
          offset = Math.min(Math.max((currentValue / max.value) * maxLength, 0), maxLength)
          r()
        }
      })
      buttonRef.value.addEventListener('mousedown', mousedownEvent)
      traceRef.value.addEventListener('mousedown', containerMousedownEvent)
      trackRef.value.addEventListener('mousedown', containerMousedownEvent)
    }
  }

  const offDraggable = () => {
    if (trackRef.value && buttonRef.value) {
      buttonRef.value.removeEventListener('mousedown', mousedownEvent)
      trackRef.value.removeEventListener(
        'mousedown',
        containerMousedownEvent,
      )
    }
  }

  watchEffect(() => {
    if (disabled.value) {
      offDraggable()
    }
    else {
      onDraggable()
    }
  })

  onBeforeUnmount(() => {
    offDraggable()
  })

  return {
    trackRef,
    buttonRef,
    traceRef,
  }
}
