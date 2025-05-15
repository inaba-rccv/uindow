<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const routeName = computed((): string => {
  if (typeof route.name !== "string") {
    return '--'
  } else {
    return route.name.toLocaleUpperCase()
  }
})
</script>

<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="header-container">{{ routeName }}</div>
    </div>
  </header>
  <router-view />
  <!-- <footer>
    <div class="wrapper">
      <nav>
        <div class="icon-btn" @click="navigatorTo('/')">
          <ui-icon size="default" clickable>
            <IPlay />
          </ui-icon>
        </div>
        <div class="icon-btn" @click="navigatorTo('/home')">
          <ui-icon clickable>
            <IMusic />
          </ui-icon>
        </div>

        <div class="icon-btn" @click="navigatorTo('/uindow')">
          <ui-icon clickable>
            <IFile />
          </ui-icon>
        </div>

        <div class="icon-btn">
          <ui-icon clickable @click="navigatorTo('/dialog')">
            <IMessage />
          </ui-icon>
        </div>
      </nav>
    </div>
  </footer> -->
</template>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--ui-bg-color);
  z-index: 1000;
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4rem;
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

.wrapper {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    max-height: 12rem;
    padding: 2rem 0;
    margin: 0 4rem;

    .icon-btn {
      text-align: center;
      padding: 0 1rem;
    }
  }
}
</style>