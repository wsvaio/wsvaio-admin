<script setup lang='ts'>
import Layout from "./layout/index.vue";
import User from "./components/user/index.vue";
import FullScreen from "./components/full-screen/index.vue";
</script>

<template>
  <layout>
    <template #header>
      <full-screen></full-screen>
      <user></user>
    </template>
    <template #footer>
      绍兴智充客软件开发有限公司倾情提供
    </template>
  </layout>
</template>

<style lang='less' scoped>

</style>
