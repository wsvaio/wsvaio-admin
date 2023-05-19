<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";

// import useAdminStore from "../../../../stores/useAdminStore";
import useRouteStore from "../../../../stores/useRouteStore";
import Self from "./index.vue";

defineProps<{
  mode?: string;
  routes: RouteRecordRaw[];
  popperClass?: string;
}>();

const { isRouteActive, isMenu, isMenuItem } = $(useRouteStore());

// const admin = useAdminStore();

// const isFlat = computed(() => (admin.layoutHas("top-mix") && props.mode == "top") || (admin.layoutHas("left-mix") && props.mode == "left-mix-trigger"));
</script>

<template>
  <template v-for="item in routes.filter(item => !item?.meta?.parent)">
    <el-sub-menu
      v-if="isMenu(item.name)"
      :class="[isRouteActive(item, $route.name) && 'is-active']"
      :index="String(item.name)"
      :popper-class="popperClass"
    >
      <template #title>
        <slot :route="item"></slot>
      </template>
      <self :popper-class="popperClass" :routes="item.children!" #="{route}">
        <slot :route="route"></slot>
      </self>
    </el-sub-menu>
    <el-menu-item v-else-if="isMenuItem(item.name)" :index="String(item.name)" :class="[isRouteActive(item, $route.name) && 'is-active']">
      <slot :route="item"></slot>
    </el-menu-item>
  </template>
</template>

<style lang="less" scoped></style>
