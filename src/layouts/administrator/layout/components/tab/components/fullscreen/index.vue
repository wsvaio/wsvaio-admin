<script setup lang="ts">
import useAdminStore from "../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <el-icon class="setting" @click="admin.isTabFull = !admin.isTabFull">
    <i-octicon:screen-full v-if="!admin.isTabFull" />
    <i-octicon:screen-normal v-else />
  </el-icon>
</template>
