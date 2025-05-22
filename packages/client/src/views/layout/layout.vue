<template>
  <div class="page-content">

    <div class="border-box">

      <div class="flex-container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.border-box {
  background: repeating-linear-gradient(
    45deg,
    var(--ui-color-primary) 0px,
    var(--ui-color-primary) 10px,
    transparent 10px,
    transparent 20px,
    var(--ui-color-warning) 20px,
    var(--ui-color-warning) 30px,
    transparent 30px,
    transparent 40px
  ) -20px 0px/200% 200%;
  padding: 5px;
  display: inline-block;
  transition: .5s;
  // clip-path: path('M0,0 h400 v250 h-400 v-250ZM5,5 v240 h390 v-240 Z');
  &:hover {
    background-position: 0px -20px;
  }
  .flex-container {
    display: flex;
    background-color: var(--ui-color-info);
    width: 400px;
    height: 250px;
    flex-direction: column-reverse;
    
    .item {
      width: 50px;
      height: 50px;
      border: 2px solid #fff;
      box-sizing: border-box;
      background-color: var(--ui-color-primary);
      // flex: 1;
      flex-grow: 0;
    }
  }
}

</style>

