<script lang="ts" setup>
import { ref } from 'vue'
import './index.scss'

const menuShow = ref<boolean>(false)
let startMouseDown = false

function handleFocusin() {
  menuShow.value = true
}
function handleFocusout() {
  menuShow.value = false
}
function handleDown(e: MouseEvent) {
  if (menuShow.value) {
    startMouseDown = true
  }
  else if (document.activeElement === e.target) {
    menuShow.value = true
  }
}
function handleUp() {
  if (startMouseDown) {
    menuShow.value = false
    startMouseDown = false
  }
}
function handleMenuDown(e: MouseEvent) {
  e.preventDefault()
}
function handleClose() {
  menuShow.value = false
}
</script>

<template>
  <div class="ui-menu__subMenu">
    <button
      class="ui-menu__item reset-button"
      :class="{
        focus: menuShow,
      }"
      @focusin="handleFocusin"
      @focusout="handleFocusout"
      @mousedown="handleDown"
      @mouseup="handleUp"
    >
      <slot name="title" />
    </button>
    <div v-show="menuShow" class="ui-menu__dropdownMenu" @mousedown="handleMenuDown" @click="handleClose">
      <slot />
    </div>
  </div>
</template>
