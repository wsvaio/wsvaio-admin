<script setup lang="ts">
import useAdminStore from "../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <footer v-show="admin.isFooter">
    <slot></slot>
  </footer>
</template>

<style lang="less">
article.administrator > footer {
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-top: 1px solid var(--border-color);
  color: var(--color-regular);
}
</style>
