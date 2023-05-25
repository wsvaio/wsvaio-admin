<script setup lang="ts">
import HeaderView from "./components/header-view/index.vue";

const setting = useSettingStore();
</script>

<template>
  <n-layout class="h-full">
    <n-layout-header
      class="relative z-10"
      :style="{
        height: `${setting.headerHeight}px`,
        boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
      }"
    >
      <header-view>
        <slot name="header"></slot>
      </header-view>
    </n-layout-header>
    <n-layout-content :style="{ height: `calc(100% - ${setting.headerHeight + setting.footerHeight}px)` }" embedded>
      <slot name="content"></slot>
    </n-layout-content>
    <n-layout-footer :style="{ height: `${setting.footerHeight}px` }">
      <slot name="footer"></slot>
    </n-layout-footer>
  </n-layout>
</template>
