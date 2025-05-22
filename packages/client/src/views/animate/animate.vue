<script lang="ts" setup>
import { ref } from "vue"
import "./index.scss"

const boxShow = ref(false)
</script>

<template>
  <div class="pageview-animate page-content">
    <div class="mb-20">
      <ui-button plain @click="boxShow = !boxShow">开关</ui-button>
    </div>
    <transition name="scale-slide">
      <div class="animate-box" v-show="boxShow"></div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.pageview-animate {
  perspective: 1000px;
}
.animate-box {
  width: 400px;
  height: 250px;
  background-color: var(--ui-color-primary);
}
</style>