<script setup lang='ts'>
import type { AdministratorProvide } from "../..";

const { currentActiveMenu } = inject<AdministratorProvide>("administrator-provide")!;
</script>

<template>
  <n-menu
    :value="String(currentActiveMenu)"
    :options="useAuthStore().menus"
    @update:value="val => (currentActiveMenu = val)"
  />
</template>

<style lang='less'>

</style>
