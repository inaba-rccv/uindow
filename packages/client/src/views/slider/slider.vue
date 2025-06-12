<script lang="ts" setup>
import { ref } from 'vue'

const sliderValue = ref<number>(50)
</script>

<template>
  <div class="page-content">
    <h2>基础滑块</h2>
    <Exhibition>
      <ui-slider v-model="sliderValue" :max="100" />
      <ui-slider v-model="sliderValue" :max="100" type="warning" />
      <ui-slider v-model="sliderValue" :max="100" type="danger" />
      <ui-slider v-model="sliderValue" :max="100" type="tooltip" />
    </Exhibition>
    <!-- <ui-slider v-model="sliderValue" :max="100" type="info" track-color="var(--ui-color-tooltip)" /> -->

    <h2>纵向滑块</h2>
    <Exhibition>
      <ui-slider v-model="sliderValue" vertical height="200px" :max="100" />
      <ui-slider v-model="sliderValue" vertical height="200px" :max="100" type="warning" />
      <ui-slider v-model="sliderValue" vertical height="200px" :max="100" type="danger" />
      <ui-slider v-model="sliderValue" vertical height="200px" :max="100" type="tooltip" />
    </Exhibition>
  </div>
</template>
