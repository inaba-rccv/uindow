<script lang="ts" setup>
import type { Component } from 'vue';
import IRight from '@uindow/components/svg/IRight.vue'
import IMusic from "@uindow/components/svg/IMusic.vue"
import { ref } from 'vue'
import { shallowRef } from 'vue';
interface MenuIcon {
  component: Component,
  title: string
  navigate: string
}
const sliderValue = ref<number>(10)
const textShow = ref<boolean>(false)

const sidebarMenu = shallowRef<MenuIcon[]>([
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  },
  {
    component: IMusic,
    title: "Music",
    navigate: ""
  }
])

const percentage = ref<number>(0)
const interval = setInterval(() => {
  if (percentage.value < 80) {
    percentage.value += 20
  } else if (percentage.value < 100) {
    percentage.value += 5
  } else {
    clearInterval(interval)
  }
  return
}, 600)
</script>
<template>
  <div class="flex-center margin-auto">
    <div style="width: 800px;">
      <div style="display: flex; justify-content: center; flex-wrap: wrap">
      </div>

      <div class="flex-center margin-auto" style="margin-bottom: 20px">
        <ui-button circle disabled plain style="margin-right:10px">
          <IRight></IRight>
        </ui-button>
        <ui-input style="width: 240px" type="password" ></ui-input></div>
      <div style="margin-bottom: 20px"><ui-input placeholder="placeholder"></ui-input></div>
        
      <div>
        <ui-button>Primary</ui-button>
        <ui-button type="warning">Warning</ui-button>
        <ui-button type="danger">Danger</ui-button>
        <ui-button type="success">Success</ui-button>
        <ui-button type="info">Info</ui-button>
      </div>
      <div style="margin-top: 20px">
        <ui-button plain>Primary</ui-button>
        <ui-button plain type="warning">Warning</ui-button>
        <ui-button plain type="danger">Danger</ui-button>
        <ui-button plain type="success">Success</ui-button>
        <ui-button plain type="info">Info</ui-button>
      </div>
      <div style="margin-top: 20px">
        <ui-button disabled>Primary</ui-button>
        <ui-button disabled type="warning">Warning</ui-button>
        <ui-button disabled type="danger">Danger</ui-button>
        <ui-button disabled type="success">Success</ui-button>
        <ui-button disabled type="info">Info</ui-button>
      </div>
      <!-- <div style="width: 300px; margin: auto">
        <ui-progress :percentage status="primary"></ui-progress>
        <ui-slider v-model="sliderValue" :max="100" type="warning"></ui-slider>
        <div>{{ sliderValue }}</div>
      </div> -->

      <div>
        <ui-text animate="eraser">
          <span>
            Press F2 to run Setup(CTRL+E on Searial Console)
            <span>hh</span>
          </span>
        </ui-text>
        <ui-text animate="bounce">Uindow</ui-text>
        <ui-text typewriter animate="bounce">Uindow</ui-text>
        <ui-text typewriter animate="blurIn">Uindow</ui-text>
      </div>

      
      <!-- <Transition name="rightOpen">
        <div v-show="textShow" style="font-size: 4rem; font-weight: bold;">Uindow</div>
      </Transition> -->

      <!-- <Transition name="bounce">
        <div v-show="textShow" style="font-size: 4rem; font-weight: bold;">Uindow</div>
      </Transition> -->

      <!-- <Transition name="blur">
        <div v-show="textShow" style="font-size: 4rem; font-weight: bold; display: inline-block;">Uindow</div>
      </Transition> -->
      
    </div>

    <!-- <div class="sidebar">
      <div v-for="(item, key) in sidebarMenu" class="icon-btn" :style="[{animation: 'fadeInUp ' + (key* 0.2 + 1) + 's cubic-bezier(0.2, 0, 0, 1)'}]">
        <ui-icon clickable>
          <component :is="item.component"></component>
        </ui-icon>
      </div>
    </div> -->

  </div>
</template>

<style lang="scss">
.sidebar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  padding: 80px;
  flex-direction: row-reverse;
  .icon-btn {
    margin: 12.5px;
  }
}
</style>