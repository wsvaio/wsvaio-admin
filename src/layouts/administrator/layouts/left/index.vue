<script setup lang="ts">
import Collapse from "../../components/collapse/index.vue";
import BreadCrumb from "../../components/bread-crumb/index.vue";
import Refresh from "../../components/refresh/index.vue";

import AsideView from "@/layouts/administrator/views/aside/index.vue";
import HeaderView from "@/layouts/administrator/views/header/index.vue";
import ContentView from "@/layouts/administrator/views/content/index.vue";
import FooterView from "@/layouts/administrator/views/footer/index.vue";

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
        class="relative z-10 flex items-center px-10px children:mr-16px"
        :style="{
          height: `${setting.headerHeight}px`,
          boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
        }"
      >
        <collapse></collapse>
        <refresh></refresh>
        <bread-crumb class="mr-auto"></bread-crumb>
        <header-view></header-view>
      </n-layout-header>
      <n-layout-content :style="{ height: `calc(100% - ${setting.headerHeight + setting.footerHeight}px)` }" embedded>
        <content-view></content-view>
      </n-layout-content>
      <n-layout-footer :style="{ height: `${setting.footerHeight}px` }">
        <footer-view></footer-view>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>
