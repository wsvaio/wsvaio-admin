<script setup lang="ts">
import HeaderView from "@/layouts/administrator/views/header/index.vue";
import ContentView from "@/layouts/administrator/views/content/index.vue";
import FooterView from "@/layouts/administrator/views/footer/index.vue";

import Logo from "@/layouts/administrator/components/logo/index.vue";
import type { AdministratorProvide } from "@/layouts/administrator";

const setting = useSettingStore();

const { currentActiveMenu } = inject<AdministratorProvide>("administrator-provide")!;
</script>

<template>
	<n-layout class="h-full administrator-top">
		<n-layout-header
			class="z-10 relative"
			:style="{
				height: `${setting.headerHeight}px`,
			}"
		>
			<header-view>
				<logo m="!r-0" />
				<n-scrollbar x-scrollable class="administrator-top-menu" :style="{ '--header-height': `${setting.headerHeight}px` }">
					<n-menu mode="horizontal" :value="String(currentActiveMenu)" :options="useAuthStore().menus" />
				</n-scrollbar>
			</header-view>
		</n-layout-header>
		<n-layout-content :style="{ height: `calc(100% - ${setting.headerHeight + setting.footerHeight}px)` }" embedded>
			<content-view />
		</n-layout-content>
		<n-layout-footer :style="{ height: `${setting.footerHeight}px` }">
			<footer-view />
		</n-layout-footer>
	</n-layout>
</template>

<style lang="less">
.n-scrollbar.administrator-top-menu {
	.n-scrollbar-content {
		display: flex;
		align-items: center;
		height: var(--header-height);

		.n-menu {
			width: max-content;
		}
	}

}
</style>
