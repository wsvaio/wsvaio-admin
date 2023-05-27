<script setup lang="ts">
import FullScreen from "./components/full-screen/index.vue";
import User from "./components/user/index.vue";
import Setting from "./components/setting/index.vue";
</script>

<template>
	<header class="administrator-header">
		<slot />
		<full-screen m="l-auto" />
		<user />
		<setting />
	</header>
</template>

<style lang="less">
.administrator-header {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 10px;

	&>* {
		margin-right: 16px;

		&:last-child {
			margin-right: 0;
		}
	}
}
</style>
