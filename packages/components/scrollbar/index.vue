<script lang="ts" setup>
import { useScrollbar } from './use-scrollbar'
import { useThumb } from './use-thumb'
import './index.scss'

const props = withDefaults(
  defineProps<{
    height?: string
    maxHeight?: string
  }>(),
  {
    height: '100%',
    maxHeight: '100%',
  },
)
const emit = defineEmits(['reachBottom'])

const {
  thumbStyle,
  thumbTranslateY,
  handleScroll,
  container,
} = useScrollbar(props, emit)
const { thumb } = useThumb(thumbTranslateY)
</script>

<template>
  <div class="ui-scrollbar">
    <div ref="container" class="ui-scrollbar__container" :style="{ height, maxHeight }" @scroll="handleScroll">
      <slot />
    </div>
    <div class="ui-scrollbar__bar">
      <div ref="thumb" class="ui-scrollbar__thumb" :style="thumbStyle" />
    </div>
  </div>
</template>
