<script setup lang="ts">
import ThemeSwitch from "./components/theme-switch/index.vue";

const setting = useSettingStore();
const active = ref(false);
</script>

<template>
  <n-button text @click="active = true">
    <template #icon>
      <n-icon>
        <i-fluent:settings-24-regular />
      </n-icon>
    </template>
  </n-button>

  <n-drawer v-model:show="active">
    <n-drawer-content title="项目配置">
      <n-divider>主题</n-divider>
      <theme-switch class="mx-auto"></theme-switch>
      <n-divider>头部高度</n-divider>
      <n-input-number v-model:value="setting.headerHeight" clearable />
    </n-drawer-content>
  </n-drawer>
</template>

<style lang="less"></style>
