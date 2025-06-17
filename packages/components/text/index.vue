<script lang="ts" setup>
import type { Ref, StyleValue, VNode } from 'vue'
import type { AnimateType } from './text.type'
import { getParentBackgroundColor } from '@uindow/utils'
import { computed, Fragment, h, onMounted, ref, useSlots, watchEffect } from 'vue'
import { animateDefaultStyleMap, TYPEWRITER_ANIMATION_DELAY } from './text'
import './index.scss'

const props = withDefaults(
  defineProps<{
    animate?: AnimateType
    typewriter?: boolean
    duration?: number
    delay?: number
    isVisible?: boolean
    // charStyle?: StyleValue // TODO 暂时不支持 typewriter 字符样式
  }>(),
  {
    animate: '',
    typewriter: false,
    duration: 0,
    delay: 0,
    isVisible: true,
  },
)

// TODO 使用requestAnimationFrame控制延时动画

const slots = useSlots()
const text = ref<HTMLElement | null>(null)
const animatedSlots: Ref<VNode[]> = ref([])
const animateCustomStyle = computed(() => {
  const style: StyleValue = {}
  if (props.duration !== 0) {
    style.animationDuration = `${props.duration}s`
  }
  if (props.delay !== 0) {
    style.animationDelay = `${props.delay}s`
  }
  return style
})
const animateDefaultStyle = computed(() => {
  return {
    animationName: props.animate,
    animationFillMode: 'both',
    ...animateDefaultStyleMap[props.animate],
  }
})
const animateStyle = computed(() => ({
  ...animateDefaultStyle.value,
  ...animateCustomStyle.value,
}))

function processDefaultSlot() {
  return slots.default!().map((vnode) => {
    let newVnode: VNode

    const vnodeProps = vnode.props || {}
    vnodeProps.style = {
      ...(vnodeProps.style || {}),
      ...animateStyle.value,
    }

    newVnode = h('p', vnodeProps, vnode.children || undefined)

    if (props.animate === 'eraser') {
      const eraserSpanVnode = h('span', {
        class: 'ui-text--eraser-content',
        style: animateStyle.value,
      }, vnode.children || undefined)
      const eraserPVNode = h('p', { class: 'ui-text--eraser' }, eraserSpanVnode)

      newVnode = h(Fragment, {}, [
        newVnode,
        eraserPVNode,
      ])
    }
    return newVnode
  })
}
function processTypewriterSlot() {
  const text = slots.default!()[0].children
  if (typeof text !== 'string')
    return []
  const charArray = text.trim().split('')
  const charVnodes = charArray.map((char, index) => {
    return h('span', { class: 'ui-text--typewriter', style: {
      ...animateStyle.value,
      animationDelay: `${props.delay * 1000 + index * TYPEWRITER_ANIMATION_DELAY}ms`,
      display: 'inline-block',
    } }, char)
  })
  return charVnodes
}

watchEffect(() => {
  if (!slots.default)
    return []
  if (slots.default && slots.default().length > 1) {
    console.warn('text 组件只支持单个子节点')
    return
  }
  if (props.typewriter) {
    if (props.animate === 'eraser') {
      console.warn('text 组件 typewriter 动画与eraser 动画冲突')
      return
    }
    if (typeof slots.default()[0].children !== 'string') {
      console.warn('text 组件 typewriter 动画只支持子节点为字符串')
      return
    }
    animatedSlots.value = processTypewriterSlot()
  }
  else {
    animatedSlots.value = processDefaultSlot()
  }
})

// TODO 使用isVisible控制显隐
// watchEffect(() => {
//   console.log(props.isVisible)
// })
onMounted(() => {
  // TODO 优化性能
  if (props.animate === 'eraser') {
    const element = text.value
    const bgColor = getParentBackgroundColor(element!)
    element!.style.setProperty('--ui-bg-color', bgColor)
  }
})
</script>

<template>
  <div ref="text" class="ui-text">
    <component
      :is="vnode"
      v-for="(vnode, index) in animatedSlots"
      :key="index"
    />
  </div>
</template>
