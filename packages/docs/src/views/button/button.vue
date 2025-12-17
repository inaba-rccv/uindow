<script lang="ts" setup>
import IRight from '@uindow/components/svg/IRight.vue'
</script>

<template>
  <div class="page-content">
    <h2>常规按钮</h2>
    <Exhibition>
      <template #default>
        <div class="mb-20">
          <ui-button>
            Primary
          </ui-button>
          <ui-button type="warning">
            Warning
          </ui-button>
          <ui-button type="danger">
            Danger
          </ui-button>
          <ui-button type="success">
            Success
          </ui-button>
          <ui-button type="info">
            Info
          </ui-button>
        </div>

        <div>
          <ui-button plain>
            Primary
          </ui-button>
          <ui-button plain type="warning">
            Warning
          </ui-button>
          <ui-button plain type="danger">
            Danger
          </ui-button>
          <ui-button plain type="success">
            Success
          </ui-button>
          <ui-button plain type="info">
            Info
          </ui-button>
        </div>
      </template>
    </Exhibition>

    <h2>禁用状态</h2>
    <Exhibition>
      <template #default>
        <div class="mb-20">
          <ui-button disabled>
            Primary
          </ui-button>
          <ui-button disabled type="warning">
            Warning
          </ui-button>
          <ui-button disabled type="danger">
            Danger
          </ui-button>
          <ui-button disabled type="success">
            Success
          </ui-button>
          <ui-button disabled type="info">
            Info
          </ui-button>
        </div>

        <div>
          <ui-button disabled plain>
            Primary
          </ui-button>
          <ui-button disabled plain type="warning">
            Warning
          </ui-button>
          <ui-button disabled plain type="danger">
            Danger
          </ui-button>
          <ui-button disabled plain type="success">
            Success
          </ui-button>
          <ui-button disabled plain type="info">
            Info
          </ui-button>
        </div>
      </template>
    </Exhibition>

    <h2>图标按钮</h2>
    <Exhibition>
      <template #default>
        <div class="mb-20">
          <ui-button circle plain>
            <IRight />
          </ui-button>
          <ui-button circle plain type="warning">
            <IRight />
          </ui-button>
          <ui-button circle plain type="danger">
            <IRight />
          </ui-button>
          <ui-button circle plain type="success">
            <IRight />
          </ui-button>
          <ui-button circle plain type="info">
            <IRight />
          </ui-button>
        </div>

        <div>
          <ui-button square active-shrink>
            <IRight />
          </ui-button>
          <ui-button square type="warning">
            <IRight />
          </ui-button>
          <ui-button square type="danger">
            <IRight />
          </ui-button>
          <ui-button square type="success">
            <IRight />
          </ui-button>
          <ui-button square type="info">
            <IRight />
          </ui-button>
        </div>
      </template>
    </Exhibition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  padding: 80px;
  flex-direction: row-reverse;
  .icon-btn {
    margin: 12.5px;
  }
}
</style>
