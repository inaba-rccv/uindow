<script lang="ts" setup>
import { constantRoutes } from '@/router'
</script>

<template>
  <div class="sidebar">
    <ul>
      <li
        v-for="(constantRoute, key) in constantRoutes"
        :key
      >
        <router-link :to="constantRoute.path">
          {{ constantRoute.meta.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";

.sidebar {
  padding: 40px 0;
  box-sizing: border-box;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      a {
        color: var(--ui-color-text);
        padding: 10px 20px;
        border-radius: 6px;
        font-weight: 500;
        display: block;
        text-decoration: none;
        transition: all 0.1s;
        user-select: none;
        &:visited, &:focus {
          color: var(--ui-color-text);
          text-decoration: none;
          outline: none;
        }
        &:hover, &:active {
          color: var(--ui-color-primary);
          text-decoration: none;
          outline: none;
          background-color: unset;
        }
        &.router-link-active {
          color: var(--ui-color-primary);
          background-color: #ff7c8822;
        }
      }
    }
  }
}
</style>
