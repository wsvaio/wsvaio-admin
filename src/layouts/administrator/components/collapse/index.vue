<script setup lang="ts">
const setting = useSettingStore();
</script>

<template>
  <n-button text @click="setting.collapsed = !setting.collapsed">
    <template #icon>
      <n-icon>
        <i-line-md:menu-fold-left v-if="!setting.collapsed" />
        <i-line-md:menu-unfold-right v-else />
      </n-icon>
    </template>
  </n-button>
</template>
