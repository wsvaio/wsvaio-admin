<script setup lang="ts">
import VMenu from "../menu/index.vue";
import useAdminStore from "../../stores/useAdminStore";
import Logo from "../logo/index.vue";
import Setting from "./components/setting/index.vue";
import BreadCrumb from "./components/bread-crumb/index.vue";

const admin = useAdminStore();
</script>

<template tag="header">
  <logo v-if="admin.layoutHas('top', 'top-mix', 'mini')" mode="top"></logo>
  <el-icon
    v-show="admin.isTopCollapse"
    v-if="admin.layoutHas('left', 'left-mix', 'mini')"
    class="hover collapse-top hover"
    @click.stop="admin.isCollapse = !admin.isCollapse"
  >
    <i-ant-design:menu-unfold-outlined v-if="admin.isCollapse" />
    <i-ant-design:menu-fold-outlined v-else />
  </el-icon>
  <bread-crumb v-if="admin.layoutHas('left', 'left-mix') && admin.isBreadCrumb"></bread-crumb>
  <v-menu v-if="admin.layoutHas('top', 'top-mix')" mode="top" flex="1"></v-menu>
  <div m="l-auto"></div>
  <slot></slot>
  <setting></setting>
</template>

<style lang="less">
article.administrator>header {
  display: flex;
  z-index: 1000;
  align-items: center;
  height: var(--header-height);
  background-color: var(--header-bg-color);

  & > .hover {
    width: calc(var(--header-height) * 0.75);
    height: var(--header-height);
    transition: filter .3s;
    background-color: var(--header-bg-color);
    color: inherit;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      filter: contrast(80%);
    }
  }
}
</style>
