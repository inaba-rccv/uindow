<script lang="ts" setup>
import { ref } from 'vue'

const sliderValue = ref<number>(50)
</script>

<template>
  <div class="page-content">
    <ui-slider v-model="sliderValue" :max="100" />
    <ui-slider v-model="sliderValue" :max="100" type="warning" />
    <ui-slider v-model="sliderValue" :max="100" type="danger" />
    <ui-slider v-model="sliderValue" :max="100" type="info" track-color="var(--ui-color-tooltip)" />
  </div>
</template>
