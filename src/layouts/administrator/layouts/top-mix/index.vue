<script setup lang="ts">
import Logo from "@/layouts/administrator/components/logo/index.vue";

import AsideView from "@/layouts/administrator/views/aside/index.vue";
import HeaderView from "@/layouts/administrator/views/header/index.vue";
import ContentView from "@/layouts/administrator/views/content/index.vue";
import FooterView from "@/layouts/administrator/views/footer/index.vue";

import type { AdministratorProvide } from "@/layouts/administrator";

const { currentActiveMenu } = inject<AdministratorProvide>("administrator-provide")!;
const setting = useSettingStore();
</script>

<template>
	<n-layout class="h-full">
		<n-layout-header
			class="z-100 relative"
			:style="{
				height: `${setting.headerHeight}px`,
			}"
		>
			<header-view>
				<logo :style="{ height: `${setting.headerHeight}px` }" />
				<n-scrollbar x-scrollable class="administrator-top-menu" :style="{ '--header-height': `${setting.headerHeight}px` }">
					<n-menu mode="horizontal" :value="String(currentActiveMenu)" :options="useAuthStore().menus" />
				</n-scrollbar>
			</header-view>
		</n-layout-header>
		<n-layout :style="{ height: `calc(100% - ${setting.headerHeight}px)` }" has-sider>
			<n-layout-sider
				class="z-20"
				show-trigger="bar"
				collapse-mode="width"
				:collapsed="setting.collapsed"
				@collapse="setting.collapsed = true"
				@expand="setting.collapsed = false"
			>
				<aside-view />
			</n-layout-sider>
			<n-layout class="h-full">
				<n-layout-content :style="{ height: `calc(100% - ${setting.footerHeight}px)` }" embedded>
					<content-view />
				</n-layout-content>
				<n-layout-footer :style="{ height: `${setting.footerHeight}px` }">
					<footer-view />
				</n-layout-footer>
			</n-layout>
		</n-layout>
	</n-layout>
</template>
