<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(0)
</script>

<template>
  <div class="page-content">
    <h2>基础进度条</h2>

    <Exhibition>
      <template #default>
        <ui-progress :percentage style="width: 200px;" type="warning" />
      </template>
      <template #footer>
        <ui-button plain @click="percentage -= 100">
          -100
        </ui-button>
        <ui-button @click="percentage += 100">
          +100
        </ui-button>
      </template>
    </Exhibition>
  </div>
</template>
