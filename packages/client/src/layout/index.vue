<script lang="ts" setup>
import Header from './components/Header/index.vue'
import SideBar from './components/SideBar/index.vue'
</script>

<template>
  <Header />
  <div class="main-container">
    <div class="nav">
      <SideBar />
    </div>
    <div class="content hidden-scrollbar">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  width: 1080px;
  margin: 0 auto;
  .nav {
    width: 200px;
    display: inline-block;
    vertical-align: top;
  }
  .content {
    width: 880px;
    height: calc(100vh - var(--header-height));
    display: inline-block;
    overflow-y: scroll;
  }
}
</style>