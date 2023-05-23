<script setup lang="ts">
import useTabStore from "@/stores/useTabStore";

const tab = useTabStore();
</script>

<template>
  <n-scrollbar>
    <router-view #="{ Component }">
      <transition mode="out-in" name="main-fade">
        <keep-alive :include="tab.include" :exclude="tab.exclude">
          <component :is="Component" v-if="tab.isRouteView" :key="$route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </n-scrollbar>
</template>

<style lang="less">
main {
	--power: var(--switch-power, 1000) / 100;

	padding: var(--gap);
	overflow: hidden;

	.main-fade-enter-active,
	.main-fade-leave-active {
		transition: all var(--switch-duration, 0.333s);
	}

	.main-fade-enter-from,
	.main-fade-leave-to {
		opacity: 0;
	}

	.main-fade-slide-leave-active,
	.main-fade-slide-enter-active {
		transition: all var(--switch-duration, 0.333s);
	}

	// main-fade-scale
	.main-fade-scale-leave-active,
	.main-fade-scale-enter-active {
		transition: all var(--switch-duration, 0.333s);
	}

	.main-fade-scale-enter-from {
		transform: scale(calc(1 + var(--power,1)));
		opacity: 0;
	}

	.main-fade-scale-leave-to {
		transform: scale(calc(1 - var(--power,1)));
		opacity: 0;
	}

	// main-fade-zoom
	.main-fade-zoom-leave-active,
	.main-fade-zoom-enter-active {
		transition: all var(--switch-duration, 0.333s);
	}

	.main-fade-zoom-enter-from {
		transform: scale(calc(1 - var(--power,1)));
		opacity: 0;
	}

	.main-fade-zoom-leave-to {
		transform: scale(calc(1 + var(--power,1)));
		opacity: 0;
	}

	// main-fade-bottom
	.main-fade-bottom-enter-active,
	.main-fade-bottom-leave-active {
		transition: all var(--switch-duration, 0.333s);
	}

	.main-fade-bottom-enter-from {
		transform: translateY(calc(-100% * var(--power,1)));
		opacity: 0;
	}

	.main-fade-bottom-leave-to {
		transform: translateY(calc(100% * var(--power,1)));
		opacity: 0;
	}

	// main-fade-top
	.main-fade-top-enter-active,
	.main-fade-top-leave-active {
		transition: all var(--switch-duration, 0.333s);
	}

	.main-fade-top-enter-from {
		transform: translateY(calc(100% * var(--power,1)));
		opacity: 0;
	}

	.main-fade-top-leave-to {
		transform: translateY(calc(-100% * var(--power,1)));
		opacity: 0;
	}

	// main-fade-left
	.main-fade-left-enter-active,
	.main-fade-left-leave-active {
		transition: all var(--switch-duration, 0.333s);
	}

	.main-fade-left-enter-from {
		transform: translateX(calc(100% * var(--power,1)));
		opacity: 0;
	}

	.main-fade-left-leave-to {
		transform: translateX(calc(-100% * var(--power,1)));
		opacity: 0;
	}

	// main-fade-right
	.main-fade-right-enter-active,
	.main-fade-right-leave-active {
		transition: all var(--switch-duration, 0.333s);
	}

	.main-fade-right-enter-from {
		transform: translateX(calc(-100% * var(--power,1)));
		opacity: 0;
	}

	.main-fade-right-leave-to {
		transform: translateX(calc(100% * var(--power,1)));
		opacity: 0;
	}

	// none
	.main-none-enter-active,
	.main-none-leave-active {
		transition: initial;
	}
}
</style>
