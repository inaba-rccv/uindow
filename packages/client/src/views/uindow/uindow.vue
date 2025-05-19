<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import IButton from '@uindow/components/svg/IButton.vue'
import IAdd from '@uindow/components/svg/IAdd.vue'
import IReduce from '@uindow/components/svg/IReduce.vue'
import IClose from '@uindow/components/svg/IClose.vue'
import type { radioOptions } from '@uindow/components/radio/radio.type'

const uindowShow = ref<boolean>(false)
function open() {
  uindowShow.value = !uindowShow.value
}

const SceneradioOptions: Ref<radioOptions[]> = ref([
  { value: 'Talk', label: 'Talk' },
  { value: 'Game', label: 'Game' },
  { value: 'Collabe', label: 'Collabe' },
  { value: 'Paint', label: 'Paint' },
  { value: 'Music', label: 'Music' },
  { value: 'Movie', label: 'Movie' },
  { value: 'News', label: 'News' },
  { value: 'Sport', label: 'Sport' },
  { value: 'Other', label: 'Other' },
])

const SceneradioValue = ref<string>('Talk')


</script>

<template>
  <div class="page-content">
    <div>
      <ui-icon clickable @click="open">
        <IButton></IButton>
      </ui-icon>
    </div>

    <ui-uindow
      draggable
      v-model="uindowShow"
      type="info"
      header-background-color="#827870"
    >
      <template #header>
        <!-- <IClose style="width: 1.8rem; height: 1.8rem"></IClose> -->
        Stream Studio(64-bit, Uindow)
      </template>
      <template #menu>
        <ui-menu>
          <ui-sub-menu>
            <template #title>File</template>
            <ui-menu-item>New File</ui-menu-item>
          </ui-sub-menu>
          <ui-sub-menu>
            <template #title>Edit</template>
            <ui-menu-item>Undo</ui-menu-item>
            <ui-menu-item>Redo</ui-menu-item>
          </ui-sub-menu>
          <ui-sub-menu>
            <template #title>View</template>
            <ui-menu-item>Command Palette...</ui-menu-item>
            <ui-menu-item>Terminal</ui-menu-item>
            <ui-menu-item>Word Wrap</ui-menu-item>
          </ui-sub-menu>
          <ui-sub-menu>
            <template #title>Profile</template>
            <ui-menu-item>Command Palette...</ui-menu-item>
          </ui-sub-menu>
          <ui-sub-menu>
            <template #title>Scene Collection</template>
            <ui-menu-item>Command Palette...</ui-menu-item>
          </ui-sub-menu>
          <ui-sub-menu>
            <template #title>Tools</template>
            <ui-menu-item>View Lisence</ui-menu-item>
          </ui-sub-menu>
          <ui-sub-menu>
            <template #title>Help</template>
            <ui-menu-item>Welcome</ui-menu-item>
            <ui-menu-item>Show All Command</ui-menu-item>
            <ui-menu-item>Documention</ui-menu-item>
            <ui-menu-item>About</ui-menu-item>
          </ui-sub-menu>
        </ui-menu>
      </template>

      <div style="width: 900px;">
        <div style="height: 400px; padding: 20px 60px;">
          <div class="screen-body">
            <div class="screen-body-text">Just a <br/> moment<br/>please!</div>
          </div>
        </div>
        <div style="display: flex; padding: 20px; background-color: #a39e96">
          <ui-folding-window style="background-color: #837971;">
            <ui-radio-group v-model="SceneradioValue">
              <ui-radio v-for="item in SceneradioOptions" :key="item.label" :label="item.label">
                {{ item.label }}
              </ui-radio>
            </ui-radio-group>
            <template #footer>
              <div style="display: flex;height: 100%; padding: 2px 4px;box-sizing: border-box;">
                <ui-icon clickable size="auto"><IAdd /></ui-icon>
                <ui-icon clickable size="auto"><IReduce /></ui-icon>
              </div>
            </template>
          </ui-folding-window>
        </div>
      </div>
    </ui-uindow>

  </div>
</template>

<style lang="scss" scoped>
.screen-body {
  width: 100%;
  height: 100%;
  background-color: var(--ui-color-primary);
  border-radius: 12px;
  display: flex;
  box-sizing: border-box;
  padding:10px;
  &-text {
    margin: auto;
    text-align: left;
    font-size: 84px;
  }
}

</style>
