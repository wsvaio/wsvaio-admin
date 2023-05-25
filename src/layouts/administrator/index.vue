<script setup lang="ts">
import Left from "./layouts/left/index.vue";

import Top from "./layouts/top/index.vue";
import useMenu from "./composables/useMenu";

const { currentActiveMenu } = useMenu();
provide("administrator-provide", {
  currentActiveMenu,
});
const setting = useSettingStore();
</script>

<template>
  <left v-if="setting.layout == 'left'"></left>
  <top v-else-if="setting.layout == 'top'"></top>
</template>

<style lang="less"></style>
