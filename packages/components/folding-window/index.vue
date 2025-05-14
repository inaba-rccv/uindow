<script lang="ts" setup>
import IFold from '@uindow/components/svg/IFold.vue'
import "./index.scss"
import { computed, ref } from 'vue'
import { addPx } from '@uindow/utils'

const props = withDefaults(defineProps<{
  title?: string
  width?: number | string
}>(), {
  title: 'Scenes',
  width: '200px'
})

const fold = () => {
  if (windowBodyHeight.value === '0px') {
    windowBodyHeight.value = '70px'
  } else {
    windowBodyHeight.value = '0px'
  }
}

const foldingWindowWidth = computed(() => {
  return typeof props.width === 'number' ?  + addPx(props.width) : props.width
})
const windowBodyHeight = ref<string>('70px')
</script>

<template>
  <div class="ui-fdwindow" :style="{ width: foldingWindowWidth }">
    <div class="ui-fdwindow--header">
      <div class="ui-fdwindow--title">{{ title }}</div>
      <div class="ui-fdwindow--action">
        <ui-icon clickable @click="fold" size="auto"><IFold /></ui-icon>
      </div>
    </div>
    <div class="ui-fdwindow--body" :style="{ height: windowBodyHeight }">
      <slot></slot>
    </div>
    <div class="ui-fdwindow--footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>