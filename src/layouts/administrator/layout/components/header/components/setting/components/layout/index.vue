<script setup lang="ts">
import useAdminStore from "../../../../../../stores/useAdminStore";

const admin = useAdminStore();
const tip = {
  "left": "左侧菜单模式",
  "top-mix": "顶部菜单混合模式",
  "top": "顶部菜单模式",
  "left-mix": "左侧菜单混合模式",
};
</script>

<template tag="section" class="layout">
  <el-tooltip v-for="item in ['left', 'top-mix', 'top', 'left-mix']" :content="tip[item]">
    <div
      :class="[item, admin.layout == item && 'active']"
      @click="(admin.layout as string) = item"
    ></div>
  </el-tooltip>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  justify-content: space-between;

  & > div {
    width: 56px;
    height: 48px;
    transition: border-color 0.3s;
    border-radius: 5px;
    border-color: transparent;
    box-shadow: 1px 1px 4px rgb(127 127 127 / 50%);

    &:hover,
    &.active {
      border: 2px solid var(--primary-color);
      cursor: pointer;
    }
  }

  .left {
    background: linear-gradient(#273352, #273352) no-repeat left center / 33% 100%,
      linear-gradient(white, white) no-repeat top center / 100% 25%, #f0f2f5;
  }

  .top-mix {
    background: linear-gradient(#273352, #273352) no-repeat top center / 100% 25%,
      linear-gradient(white, white) no-repeat left center / 25% 100%, #f0f2f5;
  }

  .top {
    background: linear-gradient(#273352, #273352) no-repeat top center / 100% 25%, #f0f2f5;
  }

  .left-mix {
    background: linear-gradient(#273352, #273352) no-repeat left center / 25% 100%,
      linear-gradient(white, white) no-repeat top center / 100% 25%,
      linear-gradient(white, white) no-repeat left center / 40% 100%, #f0f2f5;
  }
}
</style>
