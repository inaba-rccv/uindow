<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

import './index.scss'

const systemInfo = [
  '(C)Shigure Ui.inc.',
  'STREAM Date: 05/18/19 First Stream',
  '',
  'Product Serial Number:490UIOILLSTV',
  'CPU:UIntel(R) Core i16 CPU @149.OGHz',
  '',
  'Press F2 to run Setup(CTRL+E on Searial Console)',
  'Press F12 if you want to boot from the network(CTRL+N on Searial Console)',
  'Press F8 for SU SET|UP(CTRL+P on Searial Console)',
  '',
  'Pen Controllers ..Done.',
  'Check Date 530490MB OK',
]
const memeryInfo = [
  'Check Date 0MB',
  'Check Date 490MB',
  'Check Date 12345MB',
  'Check Date 530490MB',
]
const footerInfo = [
  '(C)Shigure Ui.inc.',
  'https://www.youtube.com/channel/UCt30jJgChL8qeT9VPadidSw',
]

function renderTextArrayToHtml(textArray: string[]) {
  return textArray.map((text) => {
    return `<span>${text}</span>`
  }).join('<br/>')
}

// function scrollToBottom() {
//   const app = document.getElementById('app')
//   window.scrollTo({
//     top: app?.scrollHeight,
//     behavior: 'smooth',
//   })
// }
// let interval: Interval
onMounted(() => {
})
onUnmounted(() => {
})
</script>

<template>
  <div class="dashboard page-content">
    <div class="screen">
      <ui-text animate="eraser" duration="5">
        <p>
          <span v-html="renderTextArrayToHtml(systemInfo)" />
        </p>
      </ui-text>

      <ui-text animate="eraser" delay="5" duration="2" style="margin-left: calc(50% - 7rem)">
        <p>
          <span v-html="renderTextArrayToHtml(memeryInfo)" />
        </p>
      </ui-text>

      <ui-text animate="eraser" delay="7" duration="2">
        <p>
          <span v-html="renderTextArrayToHtml(footerInfo)" />
        </p>
      </ui-text>
    </div>
  </div>
</template>
