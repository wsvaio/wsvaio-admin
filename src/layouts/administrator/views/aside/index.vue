<script setup lang='ts'>
import type { AdministratorProvide } from "@/layouts/administrator";
import Logo from "@/layouts/administrator/components/logo/index.vue";

const { currentActiveMenu } = inject<AdministratorProvide>("administrator-provide")!;
const setting = useSettingStore();
</script>

<template>
  <logo :collapse="setting.collapsed" :style="{ height: `${setting.headerHeight}px` }"></logo>
  <n-scrollbar :style="{ height: `calc(100% - ${setting.headerHeight}px)` }">
    <n-menu
      :value="String(currentActiveMenu)"
      :options="useAuthStore().menus"
    />
  </n-scrollbar>
</template>

<style lang='less'>

</style>
