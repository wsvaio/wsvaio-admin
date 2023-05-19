<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";

// import routes from "../../routes";
import useAdminStore from "../../stores/useAdminStore";
import useRouteStore from "../../stores/useRouteStore";

import Item from "./components/item/index.vue";

const props = defineProps<{
  mode: string;
}>();

const admin = useAdminStore();
const router = useRouter();
const route = useRoute();
function handleSelect(name: string) {
  router.push({ name });
}

const { routes, findRouteByName, getTopLevelRoute } = $(useRouteStore());

const filterRoutes = computed<RouteRecordRaw[]>(() => {
  if (admin.layout == "top-mix") {
    if (props.mode == "left") {
      const finded = findRouteByName(route.name)!;
      return getTopLevelRoute(route.name)?.children || [finded];
    }
  }
  if (admin.layout == "left-mix") {
    if (props.mode == "left-mix") {
      const name = admin.mix.active || route.name;
      const finded = findRouteByName(name)!;
      return getTopLevelRoute(name)?.children || [finded];
      // const finded = findRouteByName(route.name)!;
      // return getTopLevelRoute(route.name)?.children || [finded];
    }
  }

  return routes;
});
const isCollapse = computed(() => {
  if (props.mode == "top") return false;
  return admin.layoutHas("left-mix", "mini") ? false : admin.isCollapse;
});
const isMixCollapse = computed(() => {
  return !admin.mix.fixed && admin.mix.collapse;
});

const menuClass = computed(() => {
  if (["left-mix", "left"].includes(props.mode)) return "theme-left";
  if (["top"].includes(props.mode)) return "theme-top";
});
</script>

<template>
  <el-menu
    :default-active="String($route.name)"
    class="administrator-menu"
    :class="[menuClass, mode, isMixCollapse && 'mix-collapse']"
    :mode="mode == 'top' ? 'horizontal' : 'vertical'"
    :collapse="isCollapse"
    :unique-opened="admin.isAccordion"
    @select="handleSelect"
  >
    <item
      v-for="item in filterRoutes"
      :mode="mode"
      :routes="[item]"
      #="{ route }"
      :popper-class="menuClass"
    >
      <el-icon v-if="route.meta?.icon">
        <component :is="route.meta?.icon"></component>
      </el-icon>
      <span class="title">{{ route.meta?.title }}</span>
    </item>
  </el-menu>
</template>

<style lang="less">
.administrator-menu.left-mix {
  width: var(--menu-width);
  overflow: hidden;
  transition: width 0.3s;
  border: none;

  &.mix-collapse {
    width: 0;
  }
}

.administrator-menu {
  width: var(--menu-width);
  border: none;

  &.el-menu--collapse {
    width: var(--menu-min-width, 64px);

  }
}

.administrator-menu.top, .administrator-menu.top-mix {
  justify-content: var(--menu-top-justify-content);
}

// 折叠时文字渐隐
.el-menu.theme-left.left {
  .title {
    transition: all .3s;
  }
}

.el-menu.theme-top {
  --el-menu-item-height: calc(var(--header-height) - 2px);
}

.el-menu--horizontal {
  --el-menu-bg-color: var(--header-bg-color);
}

.el-menu.theme-left,
.theme-left > .el-menu {
  --el-menu-text-color: black;
  --el-menu-item-height: 50px;

  opacity: 1;

  .el-menu-item,
  .el-sub-menu > .el-sub-menu__title {
    & > * {
      z-index: 1;
    }

    &:hover {
      color: var(--el-menu-hover-text-color);
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
  }

  .el-menu-item.is-active {
    color: white;

    &::before {
      background-color: var(--primary-color);
    }
  }

  .el-sub-menu.is-active > .el-sub-menu__title {
    color: var(--primary-color);
  }
}

.el-menu.theme-left.el-menu--collapse .el-sub-menu.is-active > .el-sub-menu__title::before {
  background-color: var(--primary-color);
}

.el-menu.left-mix {
  filter: contrast(90%);

  &.el-menu--collapse {
    width: 0;
    overflow: hidden;
  }
}

.el-menu--vertical {
  --el-menu-hover-bg-color: var(--el-menu-bg-color);
}

// 折叠特殊处理
[collapse] .el-menu.theme-left.left {
  .title {
    opacity: 0;
  }

  .el-sub-menu.is-active > .el-sub-menu__title {
    color: white;
  }
}

[theme="light"] .el-menu--vertical {
  --el-menu-bg-color: var(--aside-bg-color, #001428);
}

[theme="dark"] .el-menu--vertical {
  --el-menu-bg-color: var(--aside-bg-color, #212121);
}

[aside-theme="dark"] {
  .theme-left,
  .theme-left > .el-menu {
    --el-menu-text-color: #bbb;
    --el-menu-hover-text-color: #fff;
    --el-menu-active-color: white;
  }
}

[aside-theme="light"] {
  .theme-left,
  .theme-left > .el-menu {
    --el-menu-text-color: black;
  }
}

[header-theme="dark"] {
  .theme-top {
    --el-menu-text-color: #ffffffb3;
  }
}

[header-theme="light"] {
  .theme-top {
    --el-menu-text-color: black;
  }
}
</style>
