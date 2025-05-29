<script setup lang="ts">
import { ref } from 'vue'

const id = ref<string>(Math.random().toString(36).substring(2, 9))
</script>

<template>
  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <circle cx="50" cy="50" r="40" :mask="`url(#${id})`" />
    <defs>
      <mask :id="id">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        <rect x="27" y="45" width="46" height="10" fill="black" />
      </mask>
    </defs>
  </svg>
</template>
