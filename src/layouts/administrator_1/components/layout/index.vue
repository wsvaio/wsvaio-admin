<script setup lang="ts">
// defineSlots<{
//   default?: (props: { msg: string }) => any;
// 	header?:
// }>();

const router = useRouter();
console.log(router.getRoutes());
</script>

<template>
  <n-layout class="h-full flex-1">
    <n-layout-header bordered>
      <slot name="header"></slot>
    </n-layout-header>
    <n-layout class="h-full" has-sider>
      <n-layout-sider
        bordered
        show-trigger="bar"
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
      >
        <slot name="aside"></slot>
      </n-layout-sider>
      <n-layout-content embedded content-style="padding: 24px">
        <slot name="content"></slot>
      </n-layout-content>
    </n-layout>
    <n-layout-footer bordered>
      <slot name="footer"></slot>
    </n-layout-footer>
  </n-layout>
</template>

<style lang="less"></style>
