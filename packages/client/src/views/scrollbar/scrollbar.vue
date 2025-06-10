<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(10)
function increment() {
  count.value++
}
function decrement() {
  count.value--
}
</script>

<template>
  <div class="page-content">
    <div class="mb-20">
      <ui-button @click="increment">
        Increment Count
      </ui-button>
      <ui-button @click="decrement">
        Decrement Count
      </ui-button>
    </div>
    <ui-scrollbar height="400px">
      <div class="filler-wrapper">
        <div v-for="i in count" :key="i" class="filler">
          {{ i }}
        </div>
      </div>
    </ui-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.filler-wrapper {
  // display: flex;
  .filler {
    height: 60px;
    background-color: var(--ui-color-warning);
    box-sizing: border-box;
    margin: 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 60px;
  }
}
</style>
