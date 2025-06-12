<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref('hh')
</script>

<template>
  <div class="page-content">
    <h2>普通输入框</h2>
    <Exhibition>
      <ui-input v-model="inputValue" style="width: 320px;" placeholder="Please input" />
    </Exhibition>

    <h2>密码输入框</h2>
    <Exhibition>
      <ui-input style="width: 320px;" type="password" placeholder="Please input password" />
    </Exhibition>

    <h2>禁用状态</h2>
    <Exhibition>
      <ui-input style="width: 320px;" disabled placeholder="Please input" />
    </Exhibition>
  </div>
</template>
