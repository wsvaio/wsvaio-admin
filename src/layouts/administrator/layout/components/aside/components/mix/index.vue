<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";
import useAdminStore from "../../../../stores/useAdminStore";
import useRouteStore from "../../../../stores/useRouteStore";

const { getTopLevelRoute, routes } = $(useRouteStore());
const admin = useAdminStore();
const route = useRoute();
const handleClick = (route: RouteRecordRaw) => {
  admin.mix.active = String(route.name);
  admin.mix.collapse = false;
};

const handler = useElementEvent(window);
handler.on(["pointerdown", "mousedown"], () => {
  admin.mix.collapse = true;
  setTimeout(() => {
    admin.mix.active = String(getTopLevelRoute(route.name)?.name || route.name);
  }, 300);
});
</script>

<template
  tag="ul"
  class="administrator-menu-mix theme-left"
  :class="[admin.isCollapse && 'collapse']"
>
  <li
    v-for="item in routes"
    :class="[item.name == admin.mix.active && 'active']"
    @click="handleClick(item)"
  >
    <el-icon>
      <component :is="item.meta?.icon"></component>
    </el-icon>
    <span z="1">{{ item.meta?.title }}</span>
  </li>
</template>

<style lang="less">
.administrator-menu-mix {
  width: var(--aside-left-mix-width);
  margin: 0;
  padding: 0;
  overflow: auto;
  transition: width .3s;
  background-color: var(--aside-bg-color);
  white-space: nowrap;

  & > li {
    display: grid;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    padding: 12px;
    color: var(--el-menu-text-color);
    font-size: 12px;
    place-items: center;
    place-content: center;
    gap: 8px;

    & > .el-icon {
      color: inherit;
      font-size: 18px;
    }

    &:hover {
      color: var(--el-menu-hover-text-color);
      cursor: pointer;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 4px 8px;
      transition: background-color 0.3s;
      border-radius: 3px;
      background-color: rgb(0 0 0 / 0%);
      pointer-events: none;
    }

    &.active {
      color: white;

      &::before {
        background-color: var(--primary-color);
      }
    }
  }

  &.collapse {
    & > li {
      grid-template-rows: 1fr;
      height: 50px;

      & > span {
        display: none;
      }
    }
  }
}
</style>
