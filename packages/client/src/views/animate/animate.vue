<script lang="ts" setup>
import IMusic from '@uindow/components/svg/IMusic.vue'
import { ref } from 'vue'
import StrokeAnimate from '@/components/StrokeAnimate.vue'
import TempView from '../text/temp.vue'
import './index.scss'

const animationBtn1 = ref(false)
const animationBtn2 = ref(false)
const animationBtn3 = ref(false)

const menuList = [
  {
    src: '../../assets/ui.png',
    name: 'Uiscord',
  },
  {
    src: '../../assets/game.png',
    name: 'Game',
  },
  {
    src: '../../assets/stream.png',
    name: 'Studio',
  },
  {
    src: '../../assets/youtube.png',
    name: 'YT',
  },
  {
    src: '../../assets/uine.png',
    name: 'UINE',
  },
]

function getImageUrl(src: string) {
  return new URL(src, import.meta.url).href
}
</script>

<template>
  <div class="page-content">
    <TempView />

    <h2>页面切换</h2>
    <Exhibition>
      <template #default>
        <div class="pageview-animate" style="min-height: 250px;">
          <Transition name="scaleSlide">
            <div v-show="animationBtn1" class="animate-box" />
          </Transition>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="animationBtn1 = !animationBtn1">
          开关
        </ui-button>
      </template>
    </Exhibition>

    <h2>菜单进入动画</h2>
    <Exhibition>
      <template #default>
        <div class="pageview-animate" style="min-height: 360px;">
          <div v-if="animationBtn2" class="menu-container">
            <div v-for="i in 12" :key="i" class="menu-item">
              <ui-button
                type="info" square class="fadeUpIn-enter-active" :style="{
                  animationDuration: `${i * 0.1 + 1}s`,
                  height: '40px',
                  width: '40px',
                }"
              >
                <IMusic />
              </ui-button>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="animationBtn2 = !animationBtn2">
          开关
        </ui-button>
      </template>
    </Exhibition>

    <h2>菜单进入动画2</h2>
    <Exhibition>
      <template #default>
        <div class="pageview-animate" style="min-height: 250px;">
          <div v-if="animationBtn3" style="height: 250px; width: 400px; background-color: #fdf0e9;">
            <ul>
              <li v-for="(item, key) in menuList" :key>
                <div
                  class="ui--animated rotate-enter-active"
                  :style="{
                    animationDelay: `${key * .2}s`,
                  }"
                >
                  <img :src="getImageUrl(item.src)" width="40px" alt="">
                </div>
                <div
                  class="ui--animated scale-enter-active"
                  :style="{
                    animationDelay: `${key * .2}s`,
                  }"
                >
                  {{ item.name }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="animationBtn3 = !animationBtn3">
          开关
        </ui-button>
      </template>
    </Exhibition>

    <div class="mb-20">
      <StrokeAnimate>
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="40" stroke="#ffffff" stroke-width="4" fill="none" />
        </svg>
      </StrokeAnimate>
    </div>
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

.menu-container {
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  flex-direction: row-reverse;
  justify-content: space-between;
  .menu-item {
    padding: 10px 0;
    // flex: 1 0 50%;
  }
}

ul {
  padding: 20px 0 0;
  display: flex;
  margin: 0;
  li {
    list-style: none;
    flex: 1;
    text-align: center;
    font-size: 11px;
    color: #8d8177
  }
}
</style>
