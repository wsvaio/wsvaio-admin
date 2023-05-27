<script setup lang="ts">
import Left from "./layouts/left/index.vue";
import Top from "./layouts/top/index.vue";
import TopMix from "./layouts/top-mix/index.vue";
import useMenu from "./composables/useMenu";

const { currentActiveMenu } = useMenu();
provide("administrator-provide", {
	currentActiveMenu,
});
const setting = useSettingStore();
</script>

<template>
	<left v-if="setting.layout == 'left'" />
	<top v-else-if="setting.layout == 'top'" />
	<top-mix v-else-if="setting.layout == 'top-mix'" />
</template>

<style lang="less"></style>
