<script lang="ts" setup>
import IFold from '@uindow/components/svg/IFold.vue'
import { addPx } from '@uindow/utils'
import { computed, ref } from 'vue'
import './index.scss'

const props = withDefaults(defineProps<{
  title?: string
  width?: number | string
  bodyHeight?: string
}>(), {
  title: 'Scenes',
  width: '200px',
  bodyHeight: '70px',
})

const foldingWindowWidth = computed(() => {
  return typeof props.width === 'number' ? +addPx(props.width) : props.width
})
const windowBodyHeight = ref<string>(props.bodyHeight)

function fold() {
  if (windowBodyHeight.value === '0px') {
    windowBodyHeight.value = props.bodyHeight
  }
  else {
    windowBodyHeight.value = '0px'
  }
}
</script>

<template>
  <div class="ui-fdwindow" :style="{ width: foldingWindowWidth }">
    <div class="ui-fdwindow__header">
      <div class="ui-fdwindow__title">
        {{ title }}
      </div>
      <div class="ui-fdwindow__action">
        <ui-icon clickable size="auto" @click="fold">
          <IFold />
        </ui-icon>
      </div>
    </div>
    <!-- <div class="ui-fdwindow__body hidden-scrollbar"> -->
    <ui-scrollbar
      :height="bodyHeight"
      class="ui-fdwindow__body"
      :style="{
        height: windowBodyHeight,
      }"
    >
      <slot />
    </ui-scrollbar>
    <!-- </div> -->
    <div class="ui-fdwindow__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
