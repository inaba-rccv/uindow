<script lang="ts" setup>
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  isStep?: boolean
  duration?: number
}>(), {
  isStep: false,
  duration: 1,
})

const animatableElementType = [
  'path',
  'circle',
  'rect',
  'line',
  'polygon',
  'polyline',
]

const strokeAnimate: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  // 获取strokeAnimate元素下的svg元素
  const animatableElements = Object.values(strokeAnimate.value?.children[0].children || {}).filter(element => animatableElementType.includes(element.nodeName)) as SVGPathElement[]
  // TODO 如果不是svg元素 提示错误

  if (props.isStep) {
    const singleDuration = Math.round(props.duration / animatableElements.length * 1000) / 1000

    animatableElements.forEach((element, index) => {
      element.classList.add('line-animate')
      element.style.setProperty('--l', (element.getTotalLength() + 1).toString())
      element.style.animationDuration = `${singleDuration}s`
      element.style.animationDelay = `${index * singleDuration}s`
    })
  }
  else {
    animatableElements.forEach((element) => {
      element.classList.add('line-animate')
      element.style.setProperty('--l', (element.getTotalLength() + 1).toString())
      element.style.animationDuration = `${props.duration}s`
    })
  }
})
</script>

<template>
  <div ref="strokeAnimate">
    <slot />
  </div>
</template>

<style lang="scss">
.line-animate {
  stroke-dasharray: var(--l);
  stroke-dashoffset: var(--l);
  animation-name: stroke-slide;
  animation-timing-function: linear;
  animation-fill-mode: both;
}

@keyframes stroke-slide {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
