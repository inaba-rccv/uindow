<script lang="ts">
import type { IPosition } from '@uindow/types'
import type { PropType } from 'vue'
import type { MessageBoxType } from './message-box.type'
import UiButton from '@uindow/components/button/index.vue'
import IClose from '@uindow/components/svg/IClose.vue'
import IEnlarge from '@uindow/components/svg/IEnlarge.vue'
import IError from '@uindow/components/svg/IError.vue'
import INarrow from '@uindow/components/svg/INarrow.vue'
import ISuccess from '@uindow/components/svg/ISuccess.vue'
import IWarning from '@uindow/components/svg/IWarning.vue'
import { useDrag } from '@uindow/hooks/use-drag/index'
import { useGlobalConfig } from '@uindow/utils/config/index'

import { useTimeoutFn } from '@vueuse/core'

import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from 'vue'
import './index.scss'

export default defineComponent({
  name: 'UiMessageBox',
  components: {
    UiButton,
    IClose,
    IEnlarge,
    INarrow,
    IWarning,
    ISuccess,
    IError,
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<MessageBoxType>,
      default: 'primary',
    },
    draggable: {
      type: Boolean,
      default: true,
    },
    overflow: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    x: {
      type: Number || undefined,
      default: undefined,
    },
    y: {
      type: Number || undefined,
      default: undefined,
    },
    showConfirmButton: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['vanish'],
  setup(props, { emit }) {
    const uindowRef = ref<HTMLElement>()
    const headerRef = ref<HTMLElement>()
    const uindowDraggable = computed(() => props.draggable)
    const overflow = computed(() => props.overflow)
    const defaultTitleMap = {
      primary: {
        text: '',
        icon: false,
      },
      warning: {
        text: 'Warning',
        icon: IWarning,
      },
      success: {
        text: 'Success',
        icon: ISuccess,
      },
      info: {
        text: 'Tips',
        icon: false,
      },
      danger: {
        text: 'Error',
        icon: IError,
      },
    }
    const messageBoxTitle = computed(() =>
      props.title
        ? props.title
        : defaultTitleMap[props.type as keyof typeof defaultTitleMap].text,
    )
    const visible = ref<boolean>(false)
    const dialogAnimationFadeIn = ref<boolean>(false)
    const $UINDOW = useGlobalConfig()
    const animationDuration = ref<number>($UINDOW.fadeAnimationDuration)
    const icon = computed(
      () => defaultTitleMap[props.type as keyof typeof defaultTitleMap].icon,
    )
    let clearDialogAnimationFadeInTimer: (() => void) | undefined
    let initialPosition: IPosition | null = null
    if (props.x !== undefined && props.y !== undefined) {
      initialPosition = {
        offsetX: props.x,
        offsetY: props.y,
      }
    }
    useDrag(uindowRef, headerRef, uindowDraggable, overflow, initialPosition)

    function clearAnimation() {
      dialogAnimationFadeIn.value = false
      clearDialogAnimationFadeInTimer?.()
    }
    function doOpen() {
      visible.value = true
      dialogAnimationFadeIn.value = true
      ;({ stop: clearDialogAnimationFadeInTimer } = useTimeoutFn(
        clearAnimation,
        animationDuration.value,
      ))
    }
    function handleClose() {
      doClose()
    }
    function doClose() {
      visible.value = false
      clearAnimation()
      emit('vanish')
    }

    onMounted(() => {
      doOpen()
    })

    return {
      visible,
      uindowDraggable,
      messageBoxTitle,
      handleClose,
      icon,
      uindowRef,
      headerRef,
    }
  },
})
</script>

<template>
  <div
    v-show="visible"
    ref="uindowRef"
    class="ui-message-box"
    :class="{
      draggable: uindowDraggable,
    }"
  >
    <div class="ui-message-box__wrapper ui-message-box-fade-in">
      <div
        ref="headerRef"
        class="ui-message-box__header"
        :style="{
          backgroundColor: `var(--ui-color-${type})`,
        }"
      >
        <div class="ui-message-box__action-wrapper">
          <button class="ui-message-box__actionBtn" @click="handleClose">
            <IClose />
          </button>
          <button class="ui-message-box__actionBtn">
            <IEnlarge />
          </button>
          <button class="ui-message-box__actionBtn">
            <INarrow />
          </button>
        </div>
        <div class="ui-message-box__title">
          {{ messageBoxTitle }}
        </div>
      </div>
      <div class="ui-message-box__body">
        <div class="ui-message-box__container">
          <div
            v-if="icon"
            class="ui-message-box__typeIcon"
            :style="{ color: `var(--ui-color-${type})` }"
          >
            <component :is="icon" />
          </div>
          <div class="ui-message-box__message" v-text="message" />
        </div>

        <div v-if="showConfirmButton" class="ui-message-box__confirmBtn">
          <UiButton :type="type" @click="handleClose">
            OK
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>
