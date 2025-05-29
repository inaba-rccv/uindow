<script lang="ts" setup>
import messageBox from '@uindow/components/message-box/message-box'
import IButton from '@uindow/components/svg/IButton.vue'

function open() {
  messageBox.confirm({
    type: 'warning',
    message: 'Warning!\nSYSTEM ERROR#490UIA:A',
  })
  messageBox.confirm({
    type: 'danger',
    message: 'Error!\nSYSTEM ERROR#490UIA:A',
  })
  messageBox.confirm({
    type: 'success',
    message: 'Error!\nSYSTEM ERROR#490UIA:A',
  })
  messageBox.confirm({
    type: 'primary',
    title: 'Hashtag',
    message: '#うい校内放送',
    showConfirmButton: false,
  })
  // warningAnimation(5)
}

// function warningAnimation(count: number, start = 0) {
//   if (start < count) {
//     messageBox.confirm({
//       type: 'warning',
//       message: 'Warning!\nSYSTEM ERROR#490UIA:A',
//     })
//   }
//   setTimeout(() => {
//     warningAnimation(count, ++start)
//   }, 1500)
// }
</script>

<template>
  <div class="page-content">
    <ui-icon clickable @click="open">
      <IButton />
    </ui-icon>
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
