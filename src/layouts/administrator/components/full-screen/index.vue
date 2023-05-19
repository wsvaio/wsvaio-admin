<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen(document.documentElement);
</script>

<template>
  <el-icon size="16" class="hover" @click="toggle">
    <i-akar-icons:full-screen v-if="!isFullscreen" />
    <i-akar-icons:normal-screen v-else />
  </el-icon>
</template>
