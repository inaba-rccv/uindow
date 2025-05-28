<script lang="ts" setup>
import { computed } from 'vue'
import './index.scss'
import { UindowColorType } from '@uindow/types';
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
    activeShrink: false
  },
)
const classes = computed(() => [
  `ui-button--${props.type}`,
  {
    'circle': props.circle,
    'square': props.square,
    'plain': props.plain,
    'active-shrink': props.activeShrink,
  },
])
</script>

<template>
  <button class="ui-button" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>
