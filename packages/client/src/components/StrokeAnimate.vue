<script lang="ts" setup>
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

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

  animatableElements.forEach((element) => {
    element.classList.add('line-animate')
    element.style.setProperty('--l', (element.getTotalLength() + 1).toString())
  })
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
  animation: stroke-slide 3s forwards;
  animation-timing-function: linear;
  stroke-linecap: round;
}

@keyframes stroke-slide {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
