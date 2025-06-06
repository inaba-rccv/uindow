<script lang="ts" setup>
import type { SliderType } from './slider.type'
import { computed, toRefs } from 'vue'
import { useSlider } from './use-slider'
import './index.scss'

// type SliderType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    type?: SliderType
    max?: number
    disabled?: boolean
    vertical?: boolean
    height?: string
    trackColor?: string
  }>(),
  {
    modelValue: 0,
    // min: 0,
    type: 'primary',
    max: 100,
    disabled: false,
    vertical: false,
    height: '10px',
    trackColor: 'var(--ui-color-info)',
  },
)

const emit = defineEmits(['update:modelValue'])
const classes = computed(() => ({
  vertical: props.vertical,
}))
// TODO 跟着value走的话有step的问题
const { trackRef, buttonRef, traceRef } = useSlider(props, emit)
</script>

<template>
  <div
    class="ui-slider" :class="classes" :style="{
      height: vertical ? height : 'auto',
    }"
  >
    <div ref="trackRef" class="ui-slider--track" :style="{ backgroundColor: trackColor }" />
    <div
      ref="traceRef"
      class="ui-slider--trace"
      :style="{ backgroundColor: `var(--ui-color-${type})` }"
    />
    <div ref="buttonRef" class="ui-slider--button-container">
      <div class="ui-slider--button-default" />
    </div>
  </div>
</template>
