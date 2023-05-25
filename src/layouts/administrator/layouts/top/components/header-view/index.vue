<script setup lang="ts">
// import Logo from "@/layouts/administrator/components/logo/index.vue";
import type { AdministratorProvide } from "@/layouts/administrator";

// import Setable from "@/layouts/administrator/components/setable/index.vue";

const { currentActiveMenu } = inject<AdministratorProvide>("administrator-provide")!;
</script>

<template>
  <header class="administrator-header">
    <n-scrollbar x-scrollable>
      <logo class="sticky left-0 overflow-hidden"></logo>
      <n-menu
        :value="String(currentActiveMenu)"
        :options="useAuthStore().menus"
        mode="horizontal"
        class="z-[0]"
      />
      <slot></slot>
    </n-scrollbar>
  </header>
</template>

<style lang="less">
header.administrator-header {
	height: 100%;

	.n-scrollbar-content {
		display: flex;
		align-items: center;
		height: 100%;

	}

	.n-scrollbar-rail {
		z-index: 10;
	}

	.n-menu-item {
		width: max-content;
	}
}
</style>
