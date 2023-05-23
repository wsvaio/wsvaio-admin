<script setup lang="ts">
const tab = useTabStore();
</script>

<template>
  <n-button text @click="tab.refresh($route.name)">
    <template #icon>
      <n-icon>
        <i-iconoir:refresh />
      </n-icon>
    </template>
  </n-button>
</template>
