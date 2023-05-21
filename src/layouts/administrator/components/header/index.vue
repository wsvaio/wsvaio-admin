<script setup lang="ts">
const setting = useSettingStore();
</script>
<template>
	<header class="admin-header">
		<n-icon @click="setting.collapsed = !setting.collapsed">
			<i-line-md:menu-fold-left v-if="!setting.collapsed" />
			<i-line-md:menu-unfold-right v-else />
		</n-icon>
		<n-icon>
			<i-iconoir:refresh />
		</n-icon>
		<n-breadcrumb>
			<n-breadcrumb-item>北京总行</n-breadcrumb-item>
			<n-breadcrumb-item>天津分行</n-breadcrumb-item>
			<n-breadcrumb-item>平山道支行</n-breadcrumb-item>
		</n-breadcrumb>

		<div m="l-auto"></div>
		<n-icon>
			<i-fluent:settings-24-regular />
		</n-icon>
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
