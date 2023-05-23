<script setup lang="ts">
import Left from "./layouts/left/index.vue";
import useMenu from "./composables/useMenu";

const { currentActiveMenu } = useMenu();
provide("administrator-provide", {
  currentActiveMenu,
});
</script>

<template>
  <left></left>
</template>
