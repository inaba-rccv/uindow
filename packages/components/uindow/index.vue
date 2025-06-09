<script lang="ts" setup>
import type { UindowColorType } from '@uindow/types'
import IClose from '@uindow/components/svg/IClose.vue'
import IEnlarge from '@uindow/components/svg/IEnlarge.vue'
import INarrow from '@uindow/components/svg/INarrow.vue'
import { useDrag } from '@uindow/hooks/use-drag'
import { useGlobalConfig } from '@uindow/utils'
import { useTimeoutFn } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import './index.scss'

const props = withDefaults(
  defineProps<{
    type?: UindowColorType
    modelValue?: boolean
    draggable?: boolean
    overflow?: boolean
    headerBackgroundColor?: string
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
const $UINDOW = useGlobalConfig()
const animationDuration = ref<number>($UINDOW.fadeAnimationDuration)
const draggable = computed(() => props.draggable)
const overflow = computed(() => props.overflow)
const visible = ref<boolean>(false)
const uindowAnimationFadeIn = ref<boolean>(false)
const uindowAnimationFadeOut = ref<boolean>(false)

let clearUindowAnimationFadeInTimer: (() => void) | undefined
useDrag(uindowRef, headerRef, draggable, overflow, null)

watch(
  () => props.modelValue,
  (val) => {
    if (val)
      open()
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
</script>

<template>
  <div
    v-show="visible"
    ref="uindowRef"
    class="ui-uindow"
    :class="{
      draggable,
    }"
  >
    <div
      class="ui-uindow__wrapper"
      :class="{
        'ui-uindow-fade-in': uindowAnimationFadeIn,
        'ui-uindow-fade-out': uindowAnimationFadeOut,
      }"
    >
      <div ref="headerRef" class="ui-uindow__header" :style="headerStyles">
        <div class="ui-uindow__action-wrapper">
          <button class="ui-uindow__actionBtn" @click="handleClose">
            <IClose />
          </button>
          <button class="ui-uindow__actionBtn">
            <IEnlarge />
          </button>
          <button class="ui-uindow__actionBtn">
            <INarrow />
          </button>
        </div>
        <div class="ui-uindow__title">
          <slot name="header">
            TITLE
          </slot>
        </div>
      </div>
      <div class="ui-uindow__menu">
        <slot name="menu" />
      </div>
      <div class="ui-uindow__body">
        <slot />
      </div>
    </div>
  </div>
</template>
