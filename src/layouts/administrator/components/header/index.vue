<script setup lang="ts">
import BreadCrumb from "./components/bread-crumb/index.vue";
import SettingView from "./components/setting/index.vue";

const tab = useTabStore();
const setting = useSettingStore();
</script>

<template>
  <header class="admin-header">
    <n-icon @click="setting.collapsed = !setting.collapsed">
      <i-line-md:menu-fold-left v-if="!setting.collapsed" />
      <i-line-md:menu-unfold-right v-else />
    </n-icon>
    <n-icon @click="tab.refresh($route.name)">
      <i-iconoir:refresh />
    </n-icon>
    <bread-crumb></bread-crumb>
    <div m="l-auto"></div>
    <setting-view></setting-view>
  </header>
</template>

<style lang="less">
header.admin-header {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 10px;

	& > * {
		margin-right: 10px;

		&:last-child {
			margin-right: 0;
		}
	}

	.n-icon {
		min-width: 32px;
		font-size: 18px;
		cursor: pointer;
	}
}
</style>
