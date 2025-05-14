<script lang="ts" setup>
import './index.scss'
import { provide } from 'vue';
import { RadioKey, useRadio } from './radio';
import { toRef } from 'vue';

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
  <div class="ui-radio--group">
    <slot />
  </div>
</template>