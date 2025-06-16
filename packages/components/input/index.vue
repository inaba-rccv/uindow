<script lang="ts" setup>
import { computed } from 'vue'
import './index.scss'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    type?: string
    disabled?: boolean
    maxlength?: string | number
    minlength?: string | number
    placeholder?: string
    hiddenCaret?: boolean
  }>(),
  {
    modelValue: '',
    type: 'text',
    disabled: false,
    placeholder: '',
    hiddenCaret: false,
  },
)

const classes = computed(() => ({
  disabled: props.disabled,
}))
</script>

<template>
  <div class="ui-input" :class="classes">
    <div class="ui-input--wrapper">
      <input
        :type="type"
        :placeholder="placeholder"
        :minlength="minlength"
        :maxlength="maxlength"
        :disabled="disabled"
        :value="modelValue"
        :class="{
          'hidden-caret': hiddenCaret,
        }"
      >
    </div>
  </div>
</template>
