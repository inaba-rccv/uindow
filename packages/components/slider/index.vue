<script lang="ts" setup>
import type { SliderType } from './slider.type'
import { computed } from 'vue'
import { useSlider } from './use-slider'
import './index.scss'

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
      height: vertical ? height : 'var(--ui-inline-height)',
    }"
  >
    <div ref="trackRef" class="ui-slider__track" :style="{ backgroundColor: trackColor }" />
    <div
      ref="traceRef"
      class="ui-slider__trace"
      :style="{ backgroundColor: `var(--ui-color-${type})` }"
    />
    <div ref="buttonRef" class="ui-slider__button-wrapper" :title="modelValue.toString()">
      <div class="ui-slider__button-inner" />
    </div>
  </div>
</template>
