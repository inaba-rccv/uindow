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
])


</script>

<template>
  <div class="dialog-page">
    <div style="width: 100%; text-align: center; margin-bottom: 20px;">
      <ui-icon clickable @click="open" size="small">
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
        <IClose style="width: 1.8rem; height: 1.8rem"></IClose>
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
          <div class="screen-body"></div>
        </div>
        <div style="display: flex; padding: 20px;background-color: var(--ui-color-info);">
          <ui-folding-window>
            <div style="height: 100px; background-color: var(--ui-color-light)">
              <ui-radio-group>
                <ui-radio label="talk">Talk</ui-radio>
                <ui-radio label="game">Game</ui-radio>
                <ui-radio label="collabe">Collabe</ui-radio>
                <ui-radio label="paint">Paint</ui-radio>
              </ui-radio-group>
            </div>
            <template #footer>
              <div style="display: flex;height: 100%; padding: 2px 4px;">
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
.dialog-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.screen-body {
  width: 100%;
  height: 100%;
  background-color: var(--ui-color-primary);
  border-radius: 12px;
}
</style>
