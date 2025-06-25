<script lang="ts" setup>
import type { IconSize } from './icon.type'
import './index.scss'

withDefaults(defineProps<{
  size?: IconSize
  clickable?: boolean
}>(), {
  size: 'default',
  clickable: false,
})
</script>

<template>
  <div class="uindow-icon" :class="[{ clickable }, `uindow-icon-${size}`]">
    <slot />
  </div>
</template>
