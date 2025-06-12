<script lang="ts" setup>
import { computed } from 'vue'
import './index.scss'

const props = withDefaults(
  defineProps<{
    modalValue?: string | number
    type?: string
    disabled?: boolean
    maxlength?: string | number
    minlength?: string | number
    placeholder?: string
  }>(),
  {
    modalValue: '',
    type: 'text',
    disabled: false,
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
        :value="modalValue"
      >
    </div>
  </div>
</template>
