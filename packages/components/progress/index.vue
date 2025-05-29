<script lang="ts" setup>
import { computed } from 'vue'
import './index.scss'

const props = withDefaults(defineProps<{
  percentage?: number
  status?: string
}>(), {
  percentage: 20,
  status: 'normal',
})

const innerStyle = computed(() => {
  return {
    width: `${Math.min(props.percentage, 100)}%`,
    backgroundColor: `var(--ui-color-${props.status})`,
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
