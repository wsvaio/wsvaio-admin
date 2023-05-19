<script lang="ts" setup>
import useRouteStore from "../../../../stores/useRouteStore";

const { refresh } = $(useRouteStore());
let count = $ref(0);
const route = useRoute();
const handleClick = () => {
  count++;
  refresh(String(route.name));
};
</script>

<template>
  <el-icon
    class="setting"
    :style="{ '--rotate': `${count * 360}deg` }"
    @click="handleClick"
  >
    <i-prime:refresh class="icon" />
  </el-icon>
</template>

<style lang="less" scoped>
.icon {
  transform: rotate(var(--rotate));
  transition: all 0.3s;
}
</style>
