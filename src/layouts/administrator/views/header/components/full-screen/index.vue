<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen(document.documentElement);
</script>

<template>
  <n-button text @click="toggle">
    <template #icon>
      <n-icon size="20" class="hover">
        <i-majesticons:arrows-expand-full-line v-if="!isFullscreen" />
        <i-majesticons:arrows-collapse-full-line v-else />
      </n-icon>
    </template>
  </n-button>
</template>
