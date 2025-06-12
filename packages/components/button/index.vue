<script lang="ts" setup>
import type { UindowColorType } from '@uindow/types'
import { computed } from 'vue'
import './index.scss'

const props = withDefaults(
  defineProps<{
    type?: UindowColorType
    disabled?: boolean
    circle?: boolean
    square?: boolean
    plain?: boolean
    activeShrink?: boolean
  }>(),
  {
    type: 'primary',
    disabled: false,
    circle: false,
    square: false,
    plain: false,
    activeShrink: false,
  },
)
const classes = computed(() => [
  `ui-button--${props.type}`,
  {
    'circle': props.circle,
    'square': props.square,
    'plain': props.plain,
    'disabled': props.disabled,
    'active-shrink': props.activeShrink,
  },
])
</script>

<template>
  <button
    :disabled="disabled"
    :aria-disabled="disabled"
    class="ui-button"
    :class="classes"
  >
    <slot />
  </button>
</template>
