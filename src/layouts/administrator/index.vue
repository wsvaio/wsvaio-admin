<script setup lang="ts">
import Logo from "./components/logo/index.vue";
import MenuView from "./components/menu/index.vue";
import HeaderView from "./components/header/index.vue";
import TabView from "./components/tab/index.vue";
import MainView from "./components/main/index.vue";
import useMenu from "./composables/useMenu";

const { headerHeight = 64 } = defineProps<{
  headerHeight?: number;
}>();

const { currentActiveMenu } = useMenu();
provide("administrator-provide", {
  currentActiveMenu,
});

const setting = useSettingStore();
const active = ref("");
</script>

<template>
  <n-layout class="h-full" has-sider>
    <n-layout-sider
      :style="{ boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)', zIndex: 20 }"
      show-trigger="bar"
      collapse-mode="width"
      :collapsed="setting.collapsed"
      @collapse="setting.collapsed = true"
      @expand="setting.collapsed = false"
    >
      <n-layout-header :style="{ height: `${headerHeight}px` }">
        <logo></logo>
      </n-layout-header>
      <menu-view></menu-view>
    </n-layout-sider>
    <n-layout>
      <n-layout-header
        :style="{
          height: `${headerHeight}px`,
          boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
          zIndex: '10',
          position: 'relative',
        }"
      >
        <header-view></header-view>
      </n-layout-header>
      <n-layout-content :style="{ height: `calc(100% - ${headerHeight}px)` }" embedded>
        <tab-view v-model="active"></tab-view>
        <main-view></main-view>
      </n-layout-content>
      <n-layout-footer></n-layout-footer>
    </n-layout>
  </n-layout>
</template>
