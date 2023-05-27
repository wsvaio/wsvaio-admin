<script setup lang="ts">
import Collapse from "@/layouts/administrator/components/collapse/index.vue";
import BreadCrumb from "@/layouts/administrator/components/bread-crumb/index.vue";
import Refresh from "@/layouts/administrator/components/refresh/index.vue";
import Logo from "@/layouts/administrator/components/logo/index.vue";

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
			show-trigger="bar"
			collapse-mode="width"
			:collapsed="setting.collapsed"
			@collapse="setting.collapsed = true"
			@expand="setting.collapsed = false"
		>
			<aside-view>
				<logo :collapse="setting.collapsed" :style="{ height: `${setting.headerHeight}px` }" />
			</aside-view>
		</n-layout-sider>
		<n-layout>
			<n-layout-header
				class="z-10 relative"
				:style="{
					height: `${setting.headerHeight}px`,
				}"
			>
				<header-view>
					<collapse />
					<refresh />
					<bread-crumb />
				</header-view>
			</n-layout-header>
			<n-layout-content :style="{ height: `calc(100% - ${setting.headerHeight + setting.footerHeight}px)` }" embedded>
				<content-view />
			</n-layout-content>
			<n-layout-footer :style="{ height: `${setting.footerHeight}px` }">
				<footer-view />
			</n-layout-footer>
		</n-layout>
	</n-layout>
</template>
