<script setup lang="ts">
import AsideView from "../../views/aside/index.vue";
import HeaderView from "../../views/header/index.vue";
import ContentView from "../../views/content/index.vue";

const setting = useSettingStore();
</script>

<template>
  <n-layout class="h-full" has-sider>
    <n-layout-sider
      class="z-20"
      :style="{ boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)' }"
      show-trigger="bar"
      collapse-mode="width"
      :collapsed="setting.collapsed"
      @collapse="setting.collapsed = true"
      @expand="setting.collapsed = false"
    >
      <aside-view></aside-view>
    </n-layout-sider>
    <n-layout>
      <n-layout-header
        class="relative z-10"
        :style="{
          height: `${setting.headerHeight}px`,
          boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
        }"
      >
        <header-view></header-view>
      </n-layout-header>
      <n-layout-content :style="{ height: `calc(100% - ${setting.headerHeight}px)` }" embedded>
        <content-view></content-view>
      </n-layout-content>
      <!-- <n-layout-footer>Copyright ©2021 Soybean Admin</n-layout-footer> -->
    </n-layout>
  </n-layout>
</template>
