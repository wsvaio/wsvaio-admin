<script setup lang="ts">
import useAdminStore from "../../../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <!-- <el-divider><span text="16px">系统主题</span></el-divider>
  <el-color-picker v-model="admin.cssVars['--primary-color']" />
  <el-divider><span text="16px">菜单主题</span></el-divider>
  <el-color-picker v-model="admin.cssVars['--aside-bg-color']" />
  <el-divider><span text="16px">顶栏主题</span></el-divider>
  <el-color-picker v-model="admin.cssVars['--header-bg-color']" />
  <el-divider><span text="16px">页签主题</span></el-divider>
  <el-color-picker v-model="admin.cssVars['--tab-bg-color']" />
  <el-divider><span text="16px">页脚主题</span></el-divider>
  <el-color-picker v-model="admin.cssVars['--footer-bg-color']" />
  <el-divider><span text="16px">背景主题</span></el-divider>
  <el-color-picker v-model="admin.cssVars['--main-bg-color']" /> -->
  <el-divider><span text="16px">调色板</span></el-divider>
  <!-- <section class="palette-colors">
    <div class="color">
    </div>
    <div class="color">
    </div>
    <div class="color">
    </div>
    <div class="color">
    </div>
    <div class="color">
    </div>
    <div class="color">
    </div>
    <div class="color">
    </div>
    <div class="color">
    </div>
  </section> -->
  <ul>
    <li>
      <span>系统主题</span>
      <el-color-picker v-model="admin.cssVars['--primary-color']" />
    </li>
    <li>
      <span>菜单主题</span>
      <el-color-picker v-model="admin.cssVars['--aside-bg-color']" />
    </li>
    <li>
      <span>顶栏主题</span>
      <el-color-picker v-model="admin.cssVars['--header-bg-color']" />
    </li>
    <li>
      <span>页签主题</span>
      <el-color-picker v-model="admin.cssVars['--tab-bg-color']" />
    </li>
    <li>
      <span>背景主题</span>
      <el-color-picker v-model="admin.cssVars['--main-bg-color']" />
    </li>
    <li>
      <span>页脚主题</span>
      <el-color-picker v-model="admin.cssVars['--footer-bg-color']" />
    </li>
  </ul>
</template>

<style lang="less">
// .palette-colors {
//   display: grid;
//   grid-auto-rows: 21px;
//   grid-template-columns: repeat(9, 21px);
//   justify-content: space-between;

//   & > .color {
//     background-color: red;
//   }
// }
</style>
