<script setup lang='ts'>
const options = [
  {
    label: "个人设置",
    key: "marina bay sands",
  },
  {
    label: "退出登录",
    key: "brown's hotel, london",
  },

];
</script>

<template>
  <n-dropdown trigger="hover" :options="options">
    <n-avatar
      size="small"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
  </n-dropdown>
</template>

<style lang='less'>

</style>
