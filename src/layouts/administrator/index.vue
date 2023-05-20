<script setup lang="ts">
import Layout from "./components/layout/index.vue";
import VHeader from "./components/header/index.vue";
import VFooter from "./components/footer/index.vue";
import VAside from "./components/aside/index.vue";
import Content from "./components/content/index.vue";
import useMenu from "./composables/useMenu";
import useTab from "./composables/useTab";

const { currentActiveMenu } = useMenu();
const { names, tabs } = useTab();
provide("administrator-provide", {
  currentActiveMenu,
  names,
  tabs,
});
</script>

<template>
  <layout>
    <template #header>
      <v-header></v-header>
    </template>
    <template #aside>
      <v-aside></v-aside>
    </template>
    <template #content>
      <content></content>
    </template>
    <template #footer>
      <v-footer></v-footer>
    </template>
  </layout>
</template>

<style lang="less"></style>
