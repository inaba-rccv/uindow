<script lang="ts" setup>
</script>

<template>
  <div class="page-content">
    <div class="border-box">
      <div class="flex-container">
        <div v-for="i in 20" :key="i" class="item">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.border-box {
  background: repeating-linear-gradient(
    45deg,
    var(--ui-color-primary) 0px,
    var(--ui-color-primary) 10px,
    transparent 10px,
    transparent 20px,
    var(--ui-color-warning) 20px,
    var(--ui-color-warning) 30px,
    transparent 30px,
    transparent 40px
  ) -20px 0px/200% 200%;
  padding: 5px;
  display: inline-block;
  transition: .5s;
  &:hover {
    background-position: 0px -20px;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--ui-color-info);
    width: 400px;
    height: 250px;
    flex-direction: row;
    align-content: baseline;
    align-items: center;

    .item {
      width: 50px;
      height: 50px;
      border: 2px solid #fff;
      box-sizing: border-box;
      background-color: var(--ui-color-primary);
      // flex: 1;
      flex-grow: 0;
    }
  }
}
</style>
