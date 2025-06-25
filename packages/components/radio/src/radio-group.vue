<script lang="ts" setup>
import { provide, toRef } from 'vue'

import { RadioKey, useRadio } from './radio'
import './index.scss'

const props = withDefaults(defineProps<{
  modelValue?: string | number
}>(), {
  modelValue: '',
})
const emit = defineEmits(['update:modelValue'])
const RadioGroupInstance = useRadio(toRef(props, 'modelValue'), emit)
provide(RadioKey, RadioGroupInstance)
</script>

<template>
  <div class="ui-radio-group">
    <slot />
  </div>
</template>
