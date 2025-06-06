<script lang="ts" setup>
import IFold from '@uindow/components/svg/IFold.vue'
import IMusic from '@uindow/components/svg/IMusic.vue'
import { ref } from 'vue'
import StrokeAnimate from '@/components/StrokeAnimate.vue'
import './index.scss'

const animationBtn1 = ref(false)
const animationBtn2 = ref(false)
const animationBtn3 = ref(false)
</script>

<template>
  <div class="page-content">
    <div class="mb-20 pageview-animate">
      <div class="mb-20">
        <ui-button plain @click="animationBtn1 = !animationBtn1">
          开关
        </ui-button>
      </div>
      <Transition name="scaleSlide">
        <div v-show="animationBtn1" class="animate-box" />
      </Transition>
    </div>

    <div class="mb-20">
      <div class="mb-20">
        <ui-button plain @click="animationBtn2 = !animationBtn2">
          开关
        </ui-button>
      </div>

      <div v-if="animationBtn2" class="menu-container">
        <div v-for="i in 12" :key="i" class="menu-item">
          <ui-button
            type="info" square class="fadeInUp-enter-active" :style="{
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

    <div class="mb-20 pageview-animate">
      <div class="mb-20">
        <ui-button plain @click="animationBtn3 = !animationBtn3">
          开关
        </ui-button>
      </div>
      <div v-if="animationBtn3" style="height: 250px; width: 400px; background-color: #fdf0e9;">
        <ul>
          <li>
            <div class="rotate-enter-active">
              <img src="../../assets/ui.png" width="40px" alt="">
            </div>
            <div class="scale-enter-active">
              Uiscord
            </div>
          </li>
          <li>
            <div class="rotate-enter-active" style="animation-delay: .2s; opacity: 0;">
              <img src="../../assets/game.png" width="40px" alt="">
            </div>
            <div class="scale-enter-active" style="animation-delay: .2s; opacity: 0;">
              Game
            </div>
          </li>
          <li>
            <div class="rotate-enter-active" style="animation-delay: .4s; opacity: 0;">
              <img src="../../assets/stream.png" width="40px" alt="">
            </div>
            <div class="scale-enter-active" style="animation-delay: .4s; opacity: 0;">
              SStudio
            </div>
          </li>
          <li>
            <div class="rotate-enter-active" style="animation-delay: .6s; opacity: 0;">
              <img src="../../assets/youtube.png" width="40px" alt="">
            </div>
            <div class="scale-enter-active" style="animation-delay: .6s; opacity: 0;">
              YT
            </div>
          </li>
          <li>
            <div class="rotate-enter-active" style="animation-delay: .8s; opacity: 0;">
              <img src="../../assets/uine.png" width="40px" alt="">
            </div>
            <div class="scale-enter-active" style="animation-delay: .8s; opacity: 0;">
              UINE
            </div>
          </li>
        </ul>
      </div>
    </div>

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
  li {
    list-style: none;
    flex: 1;
    text-align: center;
    font-size: 11px;
    color: #8d8177
  }
}
</style>
