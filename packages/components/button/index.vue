<script lang="ts" setup>
import { computed } from 'vue'
import './index.scss'
import { UindowColorType } from '@uindow/types';
const props = withDefaults(
  defineProps<{
    type?: UindowColorType
    disabled?: boolean
    circle?: boolean
    plain?: boolean
  }>(),
  {
    type: 'primary',
    disabled: false,
    circle: false,
    plain: false,
  },
)
const classes = computed(() => [
  `ui-button--${props.type}`,
  {
    'circle': props.circle,
    'plain': props.plain,
  },
])
</script>

<template>
  <button class="ui-button" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>
