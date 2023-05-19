<script setup lang="ts">
import useAdminStore from "../../stores/useAdminStore";
import useRouteStore from "../../stores/useRouteStore";

const { isRouteView, keep } = $(useRouteStore());
const admin = useAdminStore();
const include = computed(() => {
  return keep.includes.map(item => String(item.name));
});
const exclude = computed(() => {
  return keep.excludes.map(item => String(item.name));
});
const name = computed(() => {
  if (!admin.isSwitchAnimation) return undefined;
  else return admin.switchAnimation;
});
</script>

<template tag="main">
  <router-view #="{ Component }">
    <transition mode="out-in" :name="`main-${name || 'none'}`">
      <keep-alive :include="include" :exclude="exclude">
        <component :is="Component" v-if="isRouteView" :key="$route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="less">
article.administrator > main {
  --power: var(--switch-power) / 100;

  padding: var(--gap);
  overflow: hidden;

  .main-fade-enter-active,
  .main-fade-leave-active {
    transition: all var(--switch-duration);
  }

  .main-fade-enter-from,
  .main-fade-leave-to {
    opacity: 0;
  }

  .main-fade-slide-leave-active,
  .main-fade-slide-enter-active {
    transition: all var(--switch-duration);
  }

  // main-fade-scale
  .main-fade-scale-leave-active,
  .main-fade-scale-enter-active {
    transition: all var(--switch-duration);
  }

  .main-fade-scale-enter-from {
    transform: scale(calc(1 + var(--power)));
    opacity: 0;
  }

  .main-fade-scale-leave-to {
    transform: scale(calc(1 - var(--power)));
    opacity: 0;
  }

  // main-fade-zoom
  .main-fade-zoom-leave-active,
  .main-fade-zoom-enter-active {
    transition: all var(--switch-duration);
  }

  .main-fade-zoom-enter-from {
    transform: scale(calc(1 - var(--power)));
    opacity: 0;
  }

  .main-fade-zoom-leave-to {
    transform: scale(calc(1 + var(--power)));
    opacity: 0;
  }

  // main-fade-bottom
  .main-fade-bottom-enter-active,
  .main-fade-bottom-leave-active {
    transition: all var(--switch-duration);
  }

  .main-fade-bottom-enter-from {
    transform: translateY(calc(-100% * var(--power)));
    opacity: 0;
  }

  .main-fade-bottom-leave-to {
    transform: translateY(calc(100% * var(--power)));
    opacity: 0;
  }

  // main-fade-top
  .main-fade-top-enter-active,
  .main-fade-top-leave-active {
    transition: all var(--switch-duration);
  }

  .main-fade-top-enter-from {
    transform: translateY(calc(100% * var(--power)));
    opacity: 0;
  }

  .main-fade-top-leave-to {
    transform: translateY(calc(-100% * var(--power)));
    opacity: 0;
  }

  // main-fade-left
  .main-fade-left-enter-active,
  .main-fade-left-leave-active {
    transition: all var(--switch-duration);
  }

  .main-fade-left-enter-from {
    transform: translateX(calc(100% * var(--power)));
    opacity: 0;
  }

  .main-fade-left-leave-to {
    transform: translateX(calc(-100% * var(--power)));
    opacity: 0;
  }

  // main-fade-right
  .main-fade-right-enter-active,
  .main-fade-right-leave-active {
    transition: all var(--switch-duration);
  }

  .main-fade-right-enter-from {
    transform: translateX(calc(-100% * var(--power)));
    opacity: 0;
  }

  .main-fade-right-leave-to {
    transform: translateX(calc(100% * var(--power)));
    opacity: 0;
  }

  // none
  .main-none-enter-active,
  .main-none-leave-active {
    transition: initial;
  }
}
</style>
