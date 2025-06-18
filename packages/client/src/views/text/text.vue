<script setup lang="ts">
import { ref } from 'vue'

const bounceSwitch = ref(true)
const blurSwitch = ref(true)
const eraserSwitch = ref(false)
const rotateSwitch = ref(true)
const fadeUpSwitch = ref(false)
const flipSwitch = ref(false)
</script>

<template>
  <div class="page-content">
    <!-- <h1>Text动画文字</h1> -->

    <h2>弹跳进入</h2>
    <exhibition>
      <template #default>
        <div class="mh-5">
          <ui-text :is-visible="bounceSwitch" animate="bounceIn" typewriter>
            这是一段依次弹跳进入的动画文字
          </ui-text>
          <ui-text :is-visible="bounceSwitch" animate="bounceIn" :delay="1">
            这是一段依次弹跳进入的动画文字
          </ui-text>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="bounceSwitch = !bounceSwitch">
          切换动画
        </ui-button>
      </template>
    </exhibition>

    <h2>翻转进入</h2>
    <exhibition>
      <template #default>
        <div class="mh-5">
          <ui-text :is-visible="flipSwitch" animate="flipIn" typewriter>
            Just
          </ui-text>
          <!-- <ui-text :is-visible="flipSwitch" animate="flipIn" :delay="1">
            Moment
          </ui-text> -->
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="flipSwitch = !flipSwitch">
          切换动画
        </ui-button>
      </template>
    </exhibition>

    <h2>模糊进入</h2>
    <exhibition>
      <template #default>
        <div class="mh-5">
          <ui-text :is-visible="blurSwitch" animate="blurIn" typewriter>
            这是一段依次模糊进入的动画文字
          </ui-text>
          <ui-text :is-visible="blurSwitch" animate="blurIn" :delay="1">
            <span>这是一段依次模糊进入的动画文字</span>
          </ui-text>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="blurSwitch = !blurSwitch">
          切换动画
        </ui-button>
      </template>
    </exhibition>

    <h2>旋转进入</h2>
    <exhibition>
      <template #default>
        <div class="mh-5">
          <ui-text :is-visible="rotateSwitch" animate="rotateIn" typewriter>
            这是一段旋转进入的动画文字
          </ui-text>
          <ui-text :is-visible="rotateSwitch" animate="rotateIn" style="display: inline-block;" :delay="1">
            这是一段旋转进入的动画文字
          </ui-text>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="rotateSwitch = !rotateSwitch">
          切换动画
        </ui-button>
      </template>
    </exhibition>

    <h2>从下方进入</h2>
    <exhibition>
      <template #default>
        <div class="mh-5">
          <ui-text :is-visible="fadeUpSwitch" animate="fadeUpIn" typewriter :duration="2">
            林深时见鹿
          </ui-text>
          <ui-text :is-visible="fadeUpSwitch" animate="fadeUpIn" typewriter :delay="1">
            海蓝时见鲸
          </ui-text>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="fadeUpSwitch = !fadeUpSwitch">
          切换动画
        </ui-button>
      </template>
    </exhibition>

    <h2>打字机</h2>
    <exhibition>
      <template #default>
        <div class="mh-5">
          <ui-text :is-visible="eraserSwitch" animate="eraser" :duration="1">
            <p>
              <span>这段文字将会按照打字机的方式依次显示</span>
              <br>
              <span>支持换行</span>
            </p>
          </ui-text>
        </div>
      </template>
      <template #footer>
        <ui-button plain @click="eraserSwitch = !eraserSwitch">
          切换动画
        </ui-button>
      </template>
    </exhibition>
  </div>
</template>
