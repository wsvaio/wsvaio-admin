<script lang="ts" setup>
import { darkTheme } from "naive-ui";

const setting = useSettingStore();
</script>

<template>
	<n-config-provider abstract :theme="setting.darked ? darkTheme : undefined">
		<n-notification-provider>
			<n-el class="h-full">
				<router-view />
			</n-el>
		</n-notification-provider>
	</n-config-provider>
</template>
