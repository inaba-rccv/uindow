<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, reactive, ref } from 'vue'

type SwitchType = 'bounceSwitch' | 'blurSwitch' | 'eraserSwitch' | 'rotateSwitch' | 'fadeUpSwitch' | 'flipSwitch'

const totalSwitch = reactive({
  bounceSwitch: false,
  blurSwitch: false,
  eraserSwitch: false,
  rotateSwitch: false,
  fadeUpSwitch: false,
  flipSwitch: false,
})
const containerRefs: Ref<Element[]> = ref([])
const textDomMap: Map<Element, SwitchType> = new Map()
function setContainerRef(el: Element, textSwitch: SwitchType) {
  textDomMap.set(el, textSwitch)
  containerRefs.value.push(el)
  return ''
}

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const textSwitch = textDomMap.get(entry.target)
      if (textSwitch !== undefined) {
        totalSwitch[textSwitch] = true
      }
      observe.unobserve(entry.target)
    }
  })
})

onMounted(() => {
  containerRefs.value.forEach((containerRef) => {
    observe.observe(containerRef)
  })
})
</script>

<template>
  <div class="page-content">
    <h2>弹跳进入</h2>
    <div :ref="(el: Element) => setContainerRef(el, 'bounceSwitch')">
      <exhibition>
        <template #default>
          <div class="mh-5">
            <ui-text :is-visible="totalSwitch.bounceSwitch" animate="bounce" typewriter>
              这是一段依次弹跳进入的动画文字
            </ui-text>
            <ui-text :is-visible="totalSwitch.bounceSwitch" animate="bounce" :delay="1.6">
              这是一段依次弹跳进入的动画文字
            </ui-text>
          </div>
        </template>
        <template #footer>
          <ui-button plain @click="totalSwitch.bounceSwitch = !totalSwitch.bounceSwitch">
            切换动画
          </ui-button>
        </template>
      </exhibition>
    </div>

    <h2>翻转进入</h2>
    <div :ref="(el: Element) => setContainerRef(el, 'flipSwitch')">
      <exhibition>
        <template #default>
          <div class="mh-5">
            <ui-text :is-visible="totalSwitch.flipSwitch" animate="flip" typewriter>
              Just
            </ui-text>
          <!-- <ui-text :is-visible="totalSwitch.flipSwitch" animate="flip" :delay="1">
            Moment
          </ui-text> -->
          </div>
        </template>
        <template #footer>
          <ui-button plain @click="totalSwitch.flipSwitch = !totalSwitch.flipSwitch">
            切换动画
          </ui-button>
        </template>
      </exhibition>
    </div>

    <h2>模糊进入</h2>
    <div :ref="(el: Element) => setContainerRef(el, 'blurSwitch')">
      <exhibition>
        <template #default>
          <div class="mh-5">
            <ui-text :is-visible="totalSwitch.blurSwitch" animate="blur" typewriter>
              这是一段依次模糊进入的动画文字
            </ui-text>
            <ui-text :is-visible="totalSwitch.blurSwitch" animate="blur" :delay="1.6">
              <span>这是一段依次模糊进入的动画文字</span>
            </ui-text>
          </div>
        </template>
        <template #footer>
          <ui-button plain @click="totalSwitch.blurSwitch = !totalSwitch.blurSwitch">
            切换动画
          </ui-button>
        </template>
      </exhibition>
    </div>

    <h2>旋转进入</h2>
    <div :ref="(el: Element) => setContainerRef(el, 'rotateSwitch')">
      <exhibition>
        <template #default>
          <div class="mh-5">
            <ui-text :is-visible="totalSwitch.rotateSwitch" animate="rotate" typewriter>
              这是一段旋转进入的动画文字
            </ui-text>
            <ui-text :is-visible="totalSwitch.rotateSwitch" animate="rotate" :delay="1.6">
              这是一段旋转进入的动画文字
            </ui-text>
          </div>
        </template>
        <template #footer>
          <ui-button plain @click="totalSwitch.rotateSwitch = !totalSwitch.rotateSwitch">
            切换动画
          </ui-button>
        </template>
      </exhibition>
    </div>
    <h2>从下方进入</h2>
    <div :ref="(el: Element) => setContainerRef(el, 'fadeUpSwitch')">
      <exhibition>
        <template #default>
          <div class="mh-5">
            <ui-text :is-visible="totalSwitch.fadeUpSwitch" animate="fadeUp" typewriter>
              林深时见鹿
            </ui-text>
            <ui-text :is-visible="totalSwitch.fadeUpSwitch" animate="fadeUp" typewriter :delay="1.6">
              海蓝时见鲸
            </ui-text>
          </div>
        </template>
        <template #footer>
          <ui-button plain @click="totalSwitch.fadeUpSwitch = !totalSwitch.fadeUpSwitch">
            切换动画
          </ui-button>
        </template>
      </exhibition>
    </div>

    <h2>打字机</h2>
    <div :ref="(el: Element) => setContainerRef(el, 'eraserSwitch')">
      <exhibition>
        <template #default>
          <div class="mh-5">
            <ui-text :is-visible="totalSwitch.eraserSwitch" animate="eraser" :duration="2">
              <p>
                <span>这段文字将会按照打字机的方式依次显示</span>
                <br>
                <span>支持换行</span>
              </p>
            </ui-text>
          </div>
        </template>
        <template #footer>
          <ui-button plain @click="totalSwitch.eraserSwitch = !totalSwitch.eraserSwitch">
            切换动画
          </ui-button>
        </template>
      </exhibition>
    </div>
  </div>
</template>
