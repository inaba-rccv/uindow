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

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})

const classes = computed(() => ({
  disabled: props.disabled,
}))
</script>

<template>
  <div class="ui-input" :class="classes">
    <div class="ui-input--wrapper">
      <input
        v-model="value"
        :type="type"
        :placeholder="placeholder"
        :minlength="minlength"
        :maxlength="maxlength"
        :disabled="disabled"
        :class="{
          'hidden-caret': hiddenCaret,
        }"
      >
    </div>
  </div>
</template>
