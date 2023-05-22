<script setup lang='ts'>
import { antDesignIconNameToUrl } from "@/utils/ant-design-icons";
</script>

<template>
  <div>
    <h1>lv2-1</h1>
    <img :src="antDesignIconNameToUrl('account-book-filled')" />
    <ant-design-icon name="alipay-circle-outlined"></ant-design-icon>
    <button @click="$router.push({ path: '/lv1-1/lv2-2', query: { id: 1 } })">
      lv2-2
    </button>
    <button @click="$router.push({ path: '/lv1-1/lv2-2', query: { id: 2 } })">
      lv2-2
    </button>
  </div>
</template>

<style lang='less'>

</style>
