<script lang="ts" setup>
import { computed, ref, toRefs, watch, watchEffect } from 'vue'
import { useSlider } from './use-slider'
import './index.scss'
import type { SliderType } from './slider.type'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    // min?: number
    type?: SliderType
    max?: number
    disabled?: boolean
    vertical?: boolean
    height?: string
  }>(),
  {
    modelValue: 0,
    // min: 0,
    type: 'primary',
    max: 100,
    disabled: false,
    vertical: false,
    height: '10px',
  },
)

const emit = defineEmits(['update:modelValue'])
const trackRef = ref<HTMLElement>()
const dragRef = ref<HTMLElement>()
const traceRef = ref<HTMLElement>()
// TODO 跟着value走的话有step的问题
const { modelValue } = toRefs(props)

useSlider(trackRef, dragRef, traceRef, modelValue, props.max, emit)
</script>
<template>
  <div class="ui-slider">
    <div ref="trackRef" class="ui-slider--track"></div>
    <div
      ref="traceRef"
      class="ui-slider--trace"
      :style="{ backgroundColor: `var(--ui-color-${type})` }"
    ></div>
    <div ref="dragRef" class="ui-slider--button-container">
      <div class="ui-slider--button-default"></div>
    </div>
  </div>
</template>