<script setup lang="ts">
import useAdminStore from "../../../../stores/useAdminStore";
import Layout from "./components/layout/index.vue";
import Palette from "./components/palette/index.vue";
import VFilter from "./components/filter/index.vue";
import Animation from "./components/animation/index.vue";
import Display from "./components/display/index.vue";
import Function from "./components/function/index.vue";
import ThemeSwitch from "./components/theme-switch/index.vue";

const admin = useAdminStore();
let show = $ref(false);
function reset() {
  admin.$reset();
}
</script>

<template>
  <el-icon class="hover" @click="show = !show">
    <i-mdi-light:settings />
  </el-icon>

  <el-drawer
    v-model="show"
    title="项目配置"
    size="333px"
    modal-class="administrator-setting-model"
    append-to-body
  >
    <el-divider><span text="16px">主题</span></el-divider>
    <theme-switch m="x-auto"></theme-switch>
    <el-divider>
      <span text="16px">导航栏模式</span>
    </el-divider>
    <layout></layout>
    <palette></palette>
    <function></function>
    <display></display>
    <v-filter></v-filter>
    <animation></animation>
    <el-divider></el-divider>

    <el-button w="full" type="warning" rounded="!2px" display="block" @click="reset">
      重置
    </el-button>
    <!-- <el-button w="full" type="danger" rounded="!2px" display="block" m="!0 !t-12px">
      清空缓存并返回登录页
    </el-button> -->
  </el-drawer>
</template>

<style lang="less">
.administrator-setting-model {
  z-index: 100;
  text-align: center;

  ul {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;

    & > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
