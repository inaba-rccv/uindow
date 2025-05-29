<script lang="ts" setup>
import type { RadioGroup } from './radio.type'
import { inject } from 'vue'
import { RadioKey } from './radio'
import './index.scss'

const props = withDefaults(defineProps<{
  label?: string
}>(), {
  label: '',
})
// const emit = defineEmits(['updateCurrentValue'])

const { currentValue, options } = inject(RadioKey) as RadioGroup
options.push({
  label: props.label,
})
function handleRadioSelect() {
  currentValue.value = props.label
}
</script>

<template>
  <div
    class="ui-radio--option"
    :class="{ 'ui-radio--option__selected': currentValue === props.label }"
    @click="handleRadioSelect"
  >
    <slot />
  </div>
</template>
