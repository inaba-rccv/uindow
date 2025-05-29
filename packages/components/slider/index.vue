<script lang="ts" setup>
import type { SliderType } from './slider.type'
import { ref, toRefs } from 'vue'
import { useSlider } from './use-slider'
import './index.scss'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    // min?: number
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
const trackRef = ref<HTMLElement>()
const dragRef = ref<HTMLElement>()
const traceRef = ref<HTMLElement>()
// TODO 跟着value走的话有step的问题
const { modelValue } = toRefs(props)

useSlider(trackRef, dragRef, traceRef, modelValue, props.max, emit)
</script>

<template>
  <div class="ui-slider">
    <div ref="trackRef" class="ui-slider--track" :style="{ backgroundColor: trackColor }" />
    <div
      ref="traceRef"
      class="ui-slider--trace"
      :style="{ backgroundColor: `var(--ui-color-${type})` }"
    />
    <div ref="dragRef" class="ui-slider--button-container">
      <div class="ui-slider--button-default" />
    </div>
  </div>
</template>
