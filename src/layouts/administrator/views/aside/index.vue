<script setup lang='ts'>
import type { AdministratorProvide } from "@/layouts/administrator";

const { currentActiveMenu } = inject<AdministratorProvide>("administrator-provide")!;
const setting = useSettingStore();
</script>

<template>
	<slot />
	<n-scrollbar :style="{ height: `calc(100% - ${setting.headerHeight}px)` }">
		<n-menu
			:value="String(currentActiveMenu)"
			:options="useAuthStore().menus"
		/>
	</n-scrollbar>
</template>

<style lang='less'>

</style>
