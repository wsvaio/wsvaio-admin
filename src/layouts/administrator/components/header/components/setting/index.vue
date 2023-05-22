<script setup lang="ts">
import ThemeSwitch from "./components/theme-switch/index.vue";

const active = ref(false);
</script>

<template>
  <n-icon @click="active = true">
    <i-fluent:settings-24-regular />
  </n-icon>

  <n-drawer v-model:show="active">
    <n-drawer-content title="项目配置">
      <n-divider>主题</n-divider>
      <theme-switch class="mx-auto"></theme-switch>
    </n-drawer-content>
  </n-drawer>
</template>

<style lang="less"></style>
