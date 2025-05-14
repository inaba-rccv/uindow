<script lang="ts" setup>
import type { StyleValue } from 'vue'
import './index.scss'

const props = withDefaults(
  defineProps<{
    modalValue?: string | number
    type?: string
    disabled?: boolean
    maxlength?: string | number
    minlength?: string | number
    style?: StyleValue
    placeholder?: string
  }>(),
  {
    modalValue: '',
    type: 'text',
    disabled: false,
  },
)
</script>

<template>
  <div class="ui-input" :style="style">
    <div class="ui-input--wrapper">
      <input
        :type="type"
        :placeholder="placeholder"
        :minlength="minlength"
        :maxlength="maxlength"
        :disabled="disabled"
        :value="modalValue"
      />
      <!-- <span class="custom-cursor"></span> -->
    </div>
  </div>
</template>
