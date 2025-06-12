<script lang="ts" setup>
import messageBox from '@uindow/components/message-box/message-box'
import IButton from '@uindow/components/svg/IButton.vue'
import { UindowColorType } from '@uindow/types'

const colorType: UindowColorType[] = ['warning', 'danger', 'info', 'success']
let currentTypeIndex = 0
function open() {
  messageBox.confirm({
    type: colorType[currentTypeIndex],
    message: 'Warning!\nSYSTEM ERROR#490UIA:A',
  })
  currentTypeIndex = currentTypeIndex < colorType.length - 1 ? currentTypeIndex + 1 : 0
  // messageBox.confirm({
  //   type: 'primary',
  //   title: 'Hashtag',
  //   message: '#うい校内放送',
  //   showConfirmButton: false,
  // })
  // warningAnimation(5)
}
</script>

<template>
  <div class="page-content">
    <Exhibition>
      <ui-button @click="open">Click to Open Dialog</ui-button>
    </Exhibition>
  </div>
</template>

<style lang="scss" scoped>
.dialog-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
