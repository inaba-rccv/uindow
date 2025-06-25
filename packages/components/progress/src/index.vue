<script lang="ts" setup>
import type { ProgressType } from './progress.type'
import { computed } from 'vue'
import './index.scss'

const props = withDefaults(defineProps<{
  percentage?: number
  type?: ProgressType
}>(), {
  percentage: 20,
  type: 'primary',
})

const innerStyle = computed(() => {
  return {
    width: `${Math.min(props.percentage, 100)}%`,
    backgroundColor: `var(--ui-color-${props.type})`,
  }
})
</script>

<template>
  <div class="ui-progress">
    <div class="ui-progress--outer">
      <div class="ui-progress--inner" :style="innerStyle" />
    </div>
  </div>
</template>
