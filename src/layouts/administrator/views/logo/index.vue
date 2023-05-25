<script setup lang='ts'>
import Logo from "@/assets/vue.svg";

defineProps<{
  collapse?: boolean;
}>();
</script>

<template>
  <div class="administrator-logo">
    <transition name="fade" mode="out-in">
      <div v-if="!collapse" class="uncollapsed">
        <n-image :src="Logo" alt="logo" object-fit="contain"></n-image>
        <n-ellipsis m="l-4px" class="text-16px">
          开箱即用的后台管理平台
        </n-ellipsis>
      </div>
      <div v-else class="collapsed">
        <n-image :src="Logo" alt="logo" object-fit="contain"></n-image>
      </div>
    </transition>
  </div>
</template>

<style lang='less'>
.administrator-logo {
	height: 100%;
	overflow: hidden;

	&>div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;

	}

	&>div.uncollapsed {
		padding: 8px 16px;
	}

	&>div.collapsed {
		padding: 4px;
	}
}
</style>
