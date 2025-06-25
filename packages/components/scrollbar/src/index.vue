<script lang="ts" setup>
import { inject, nextTick, ref, watch } from 'vue'
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
  container,
  bar,
  updateContainerHeight,
  handleScroll,
} = useScrollbar(props, emit)
const { thumb } = useThumb(thumbTranslateY)

// 处理父组件显隐时 主动触发计算容器尺寸
const parentShow = inject('parentShow', ref(false))
watch(
  parentShow,
  (newVal) => {
    if (newVal) {
      nextTick(() => {
        updateContainerHeight()
      })
    }
  },
)
</script>

<template>
  <div class="ui-scrollbar">
    <div ref="container" class="ui-scrollbar__container" :style="{ height, maxHeight }" @scroll="handleScroll">
      <slot />
    </div>
    <div ref="bar" class="ui-scrollbar__bar">
      <div ref="thumb" class="ui-scrollbar__thumb" :style="thumbStyle" />
    </div>
  </div>
</template>
