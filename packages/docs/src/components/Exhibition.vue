<script></script>

<template>
  <div class="exhibition">
    <div class="content-wrapper">
      <slot name="default" />
    </div>
    <div v-if="$slots.footer" class="footer-wrapper">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exhibition {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  .content-wrapper {
    padding: 20px;
  }
  .footer-wrapper {
    border-top: 1px solid var(--border-color);
    padding: 20px;
  }
}
</style>
