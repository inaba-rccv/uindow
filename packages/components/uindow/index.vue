<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { useGlobalConfig } from '@uindow/utils'
import { useDrag } from '@uindow/hooks/use-drag'
import { type UindowType } from './uindow.type'
import './index.scss'
import IClose from '@uindow/components/svg/IClose.vue'
import IEnlarge from '@uindow/components/svg/IEnlarge.vue'
import INarrow from '@uindow/components/svg/INarrow.vue'

const props = withDefaults(
  defineProps<{
    type: UindowType
    modelValue: boolean
    draggable?: boolean
    overflow?: boolean
    headerBackgroundColor: string
  }>(),
  {
    type: 'primary',
    modelValue: false,
    draggable: false,
    overflow: false,
    headerBackgroundColor: '',
  },
)
const emit = defineEmits(['update:modelValue'])

const uindowRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()

const draggable = computed(() => props.draggable)
const overflow = computed(() => props.overflow)
const visible = ref<boolean>(false)
const uindowAnimationFadeIn = ref<boolean>(false)
const uindowAnimationFadeOut = ref<boolean>(false)
let clearUindowAnimationFadeInTimer: (() => void) | undefined = undefined
useDrag(uindowRef, headerRef, draggable, overflow, undefined)

watch(
  () => props.modelValue,
  val => {
    if (val) open()
    else close()
  },
)

function open() {
  doOpen()
}

function clearAnimation() {
  uindowAnimationFadeIn.value = false
  clearUindowAnimationFadeInTimer?.()
}
function doOpen() {
  visible.value = true
  uindowAnimationFadeIn.value = true
  ;({ stop: clearUindowAnimationFadeInTimer } = useTimeoutFn(
    clearAnimation,
    animationDuration.value,
  ))
}
function handleClose() {
  close()
}
function close() {
  // update v-model
  emit('update:modelValue')
  doClose()
}
function doClose() {
  visible.value = false
  clearAnimation()
}

const headerStyles = computed(() => {
  return {
    backgroundColor:
      props.headerBackgroundColor ?? `var(--ui-color-${props.type})`,
  }
})

const $UINDOW = useGlobalConfig()
const animationDuration = ref<number>($UINDOW.fadeAnimationDuration)
</script>

<template>
  <div
    class="ui-uindow"
    :class="{
      draggable: draggable,
    }"
    ref="uindowRef"
    v-show="visible"
  >
    <div
      class="ui-uindow--wrapper"
      :class="{
        'ui-uindow-fade-in': uindowAnimationFadeIn,
        'ui-uindow-fade-out': uindowAnimationFadeOut,
      }"
    >
      <div class="ui-uindow--header" :style="headerStyles" ref="headerRef">
        <div class="ui-uindow--action">
          <button class="ui-uindow--actionBtn" @click="handleClose">
            <IClose></IClose>
          </button>
          <button class="ui-uindow--actionBtn">
            <IEnlarge></IEnlarge>
          </button>
          <button class="ui-uindow--actionBtn">
            <INarrow></INarrow>
          </button>
        </div>
        <div class="ui-uindow--title">
          <slot name="header">TITLE</slot>
        </div>
      </div>
      <div class="ui-uindow--menu">
        <slot name="menu" />
      </div>
      <div class="ui-uindow--body">
        <slot />
      </div>
    </div>
  </div>
</template>