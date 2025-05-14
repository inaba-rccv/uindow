<script lang="ts" setup>
import "./index.scss"
import { ref, watchEffect, onMounted, useSlots, h, Fragment, computed, onUnmounted } from "vue";
import type { StyleValue, VNode, Ref } from "vue";
import type { EnterAnimate } from "./text.type"
import { getParentBackgroundColor } from "@uindow/utils";
import { Interval } from "@uindow/types";
const props = withDefaults(
  defineProps<{
    animate: EnterAnimate
    style?: StyleValue
    typewriter?: boolean
    duration?: string | number
    delay?: string | number
  }>(), {
    animate: '',
    bounce: false,
    typewriter: false,
    duration: 1,
    delay: 0,
  }
)

const slots = useSlots()
const text = ref<HTMLElement | null>(null)
const animatedSlots: Ref<VNode[]> = ref([])
const processDefaultSlot = () => {
  return slots.default!().map((vnode) => {
    let newVnode: VNode

    const vnodeProps = vnode.props || {}
    vnodeProps.style = {
      ...(vnodeProps.style || {}),
      animationName: props.animate,
      animationDuration: `${props.duration}s`,
      animationDelay: `${props.delay}s`,
    }
    newVnode = h('p', vnodeProps, vnode.children || undefined)
    
    if (props.animate === 'eraser') {
      const eraserSpanVnode = h('span', { class: 'ui-text--eraser-content', style: {
        animationDuration: `${props.duration}s`,
        animationDelay: `${props.delay}s`,
      } }, vnode.children || undefined)
      const eraserPVNode = h('p', { class: 'ui-text--eraser' }, eraserSpanVnode)

      newVnode = h(Fragment, {}, [
        newVnode,
        eraserPVNode
      ])
    }
    return newVnode
  })
}
const processTypewriterSlot = () => {
  const text = slots.default!()[0].children
  if (typeof text !== 'string') return []
  const charArray = text.split('')
  const charVnodes = charArray.map((char, index) => {
    return h('span', { class: 'ui-text--typewriter', style: {
      animationName: props.animate,
      animationDuration: `${props.duration}s`,
      animationDelay: `${index * 30}ms`,
      display: props.animate === 'bounce' ? 'inline-block' : 'inline',
    } }, char)
  })
  console.log('charVnodes', charVnodes)
  return charVnodes
}

watchEffect(() => {
  if (!slots.default) return []
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
  } else {
    animatedSlots.value = processDefaultSlot()
  }
})
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
  <div ref="text" class="ui-text" :style="style">
    <component 
      v-for="(vnode, index) in animatedSlots" 
      :key="index"
      :is="vnode"
    />
  </div>
</template>

