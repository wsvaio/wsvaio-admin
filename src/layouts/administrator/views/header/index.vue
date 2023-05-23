<script setup lang="ts">
import Collapse from "./components/collapse/index.vue";
import Refresh from "./components/refresh/index.vue";
import BreadCrumb from "./components/bread-crumb/index.vue";
import SettingView from "./components/setting/index.vue";
</script>

<template>
  <header class="administrator-header">
    <collapse></collapse>
    <refresh></refresh>
    <bread-crumb></bread-crumb>
    <div m="l-auto"></div>
    <setting-view></setting-view>
  </header>
</template>

<style lang="less">
header.administrator-header {
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
}
</style>
