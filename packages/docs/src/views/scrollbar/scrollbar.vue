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
    <h2>固定高度</h2>
    <Exhibition>
      <template #default>
        <ui-scrollbar height="400px">
          <div class="filler-wrapper">
            <div v-for="i in count" :key="i" class="filler">
              {{ i }}
            </div>
          </div>
        </ui-scrollbar>
      </template>
      <template #footer>
        <div>
          <ui-button @click="increment">
            Increment Count
          </ui-button>
          <ui-button @click="decrement">
            Decrement Count
          </ui-button>
        </div>
      </template>
    </Exhibition>

    <h2>最大高度</h2>
    <Exhibition>
      <template #default>
        <ui-scrollbar max-height="400px">
          <div class="filler-wrapper">
            <div v-for="i in count" :key="i" class="filler">
              {{ i }}
            </div>
          </div>
        </ui-scrollbar>
      </template>
      <template #footer>
        <div>
          <ui-button @click="increment">
            Increment Count
          </ui-button>
          <ui-button @click="decrement">
            Decrement Count
          </ui-button>
        </div>
      </template>
    </Exhibition>
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
