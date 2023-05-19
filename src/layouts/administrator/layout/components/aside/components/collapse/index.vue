<script setup lang="ts">
import useAdminStore from "../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <el-icon class="administrator-aside-collapse" @click.stop="admin.isCollapse = !admin.isCollapse">
    <i-ic:twotone-keyboard-double-arrow-left v-if="!admin.isCollapse" />
    <i-ic:twotone-keyboard-double-arrow-right v-else />
  </el-icon>
</template>

<style lang="less">
.administrator-aside-collapse {
  display: flex;
  position: sticky;
  z-index: 10;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  height: 36px !important;
  transition: filter .3s;
  background: var(--aside-bg-color);
  color: inherit;
  font-size: 18px;
  filter: contrast(80%);

  &:hover {
    filter: contrast(50%);
    cursor: pointer;
  }

}
</style>
