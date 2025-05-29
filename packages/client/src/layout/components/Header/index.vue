<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = computed((): string => {
  if (typeof route.name !== 'string') {
    return '--'
  }
  else {
    return route.name.toLocaleUpperCase()
  }
})
</script>

<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="header-container">
        {{ routeName }}
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--ui-bg-color);
  z-index: 1000;
  height: var(--header-height);
  &-wrapper {
    box-sizing: border-box;
    height: 100%;
    width: 1080px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-bottom: 2px solid var(--ui-color-primary);
    .header-container {
      text-align: center;
      font-size: 32px;
      cursor: default;
      -webkit-user-select: none;
      user-select: none;
    }
  }
}
</style>
