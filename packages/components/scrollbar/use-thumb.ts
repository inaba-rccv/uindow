import type { WritableComputedRef } from 'vue'
import { onMounted, ref } from 'vue'

export function useThumb(
  thumbTranslateY: WritableComputedRef<number, number>,
) {
  const thumb = ref<HTMLElement | null>(null)

  const mousedownEvent = function (e: MouseEvent) {
    // const downX = e.clientX
    const downY = e.clientY
    const startThumbTranslateY = thumbTranslateY.value
    const mousemoveEvent = function (e: MouseEvent) {
      thumbTranslateY.value = startThumbTranslateY + e.clientY - downY
    }

    const mouseupEvent = () => {
      document.removeEventListener('mousemove', mousemoveEvent)
      document.removeEventListener('mouseup', mouseupEvent)
    }

    document.addEventListener('mousemove', mousemoveEvent)
    document.addEventListener('mouseup', mouseupEvent)
  }

  onMounted(() => {
    thumb.value?.addEventListener('mousedown', mousedownEvent)
  })

  return {
    thumb,
  }
}
