import { computed, onMounted, onUnmounted, ref } from 'vue'

const MIN_THUMB_HEIGHT = 30

export function useScrollbar(
  props: {
    height: string
    maxHeight: string
  },
  emit: (event: 'reachBottom', ...args: any[]) => void,
) {
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const containerHeight = ref(0)
  const container = ref<HTMLElement | null>(null)
  const bar = ref<HTMLElement | null>(null)
  let observe: MutationObserver

  const thumbHeight = computed(() => {
    // console.log('change', scrollHeight.value, containerHeight.value)
    if (scrollHeight.value === 0 || containerHeight.value === 0) {
      return 0
    }
    const ratio = containerHeight.value / scrollHeight.value
    return Math.max(MIN_THUMB_HEIGHT, ratio * containerHeight.value)
  })
  const thumbTranslateY = computed({
    get() {
      return scrollTop.value / (scrollHeight.value - containerHeight.value) * (containerHeight.value - thumbHeight.value)
    },
    set(newValue) {
      if (container.value) {
        const scrollTop = newValue / (containerHeight.value - thumbHeight.value) * (scrollHeight.value - containerHeight.value)
        container.value.scrollTop = Math.max(0, Math.min(scrollHeight.value - containerHeight.value, scrollTop))
      }
    },
  })
  const thumbStyle = computed(() => ({
    transform: `translateY(${thumbTranslateY.value}px)`,
    height: `${thumbHeight.value}px`,
  }))
  // 处理滚动事件
  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement
    scrollTop.value = target.scrollTop
    const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 1
    if (isAtBottom) {
      emit('reachBottom')
    }
  }

  const updateContainerHeight = () => {
    if (container.value) {
      scrollHeight.value = container.value.scrollHeight
      containerHeight.value = container.value.clientHeight
      if (containerHeight.value < scrollHeight.value) {
        bar.value!.style.display = 'block'
      }
      else {
        bar.value!.style.display = 'none'
      }
    }
  }

  onMounted(() => {
    observe = new MutationObserver(updateContainerHeight)
    observe.observe(container.value as HTMLElement, {
      childList: true,
      subtree: true,
      // attributes: true,
      characterData: true,
    })
    updateContainerHeight()
  })
  onUnmounted(() => {
    if (observe) {
      observe.disconnect()
    }
  })

  return {
    thumbStyle,
    thumbTranslateY,
    container,
    bar,
    updateContainerHeight,
    handleScroll,
  }
}
