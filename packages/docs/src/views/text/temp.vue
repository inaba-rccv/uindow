<script lang="ts" setup>
import { ref } from 'vue'

const tempSwtich = ref(false)
const animateText = '旋转进入'
</script>

<template>
  <Exhibition>
    <template #default>
      <div style="min-height: 250px;">
        <TransitionGroup name="rotate" tag="p">
          <span
            v-for="(char, key) in animateText.split('')"
            v-show="tempSwtich"
            :key
            class="ui--animated"
            :style="{
              display: 'inline-block',
              animationDelay: `${key * .2}s`,
            }"
          >
            {{ char }}
          </span>
        </TransitionGroup>
      </div>
    </template>
    <template #footer>
      <ui-button type="warning" plain @click="tempSwtich = !tempSwtich">
        开关
      </ui-button>
    </template>
  </Exhibition>
</template>
