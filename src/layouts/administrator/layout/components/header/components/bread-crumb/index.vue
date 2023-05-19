<script lang="ts" setup>
import useAdminStore from "../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <el-breadcrumb class="administrator-bread-crumb">
    <el-breadcrumb-item v-for="item in $route.matched.filter((item) => item.meta.title)" :to="{ name: item.name }">
      <section grid="~ flow-col gap-4px" items="center">
        <component :is="item.meta.icon" v-if="admin.isBreadCrumbIcon"></component>
        <span>{{ item.meta.title }}</span>
      </section>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="less">
.administrator-bread-crumb {
  // * {
  //   color: inherit !important;
  // }
  --el-text-color-primary: var(--color);
  --el-text-color-regular: var(--color-regular);

  padding: 0 8px;
}
</style>
