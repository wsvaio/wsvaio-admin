<script setup lang="ts">
import ThemeSwitch from "./components/theme-switch/index.vue";

const setting = useSettingStore();
const active = ref(false);
</script>

<template>
	<n-button text class="!mr-0" @click="active = true">
		<template #icon>
			<n-icon>
				<i-fluent:settings-24-regular />
			</n-icon>
		</template>
	</n-button>

	<n-drawer v-model:show="active">
		<n-drawer-content title="项目配置">
			<n-divider>主题</n-divider>
			<theme-switch class="mx-auto" />
			<n-divider>头部高度</n-divider>
			<n-input-number v-model:value="setting.headerHeight" clearable />
			<n-divider>多页栏高度</n-divider>
			<n-input-number v-model:value="setting.tabHeight" clearable />
			<n-divider>页脚高度</n-divider>
			<n-input-number v-model:value="setting.footerHeight" clearable />
			<n-divider>布局</n-divider>
			<n-select
				v-model:value="setting.layout" :options="[
					{ label: 'left', value: 'left' },
					{ label: 'top', value: 'top' },
					{ label: 'top-mix', value: 'top-mix' },
				]"
			/>
		</n-drawer-content>
	</n-drawer>
</template>

<style lang="less"></style>
