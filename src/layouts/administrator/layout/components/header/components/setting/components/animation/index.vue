<script setup lang="ts">
import useAdminStore from "../../../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <el-divider><span text="16px">动画</span></el-divider>
  <ul>
    <li>
      <span>切换动画</span>
      <el-switch
        v-model="admin.isSwitchAnimation"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>动画类型</span>
      <el-select
        v-model="admin.switchAnimation"
        :disabled="!admin.isSwitchAnimation"
        class="!w-100px"
      >
        <el-option value="fade" label="渐变"></el-option>
        <el-option value="fade-zoom" label="放大"></el-option>
        <el-option value="fade-scale" label="缩小"></el-option>
        <el-option value="fade-top" label="上滑"></el-option>
        <el-option value="fade-right" label="右滑"></el-option>
        <el-option value="fade-bottom" label="下滑"></el-option>
        <el-option value="fade-left" label="左滑"></el-option>

        <!-- <el-option value="zoom-out" label="缩放"></el-option>
        <el-option value="fade-slide" label="右滑"></el-option>
        <el-option value="fade-bottom" label="下滑"></el-option>
        <el-option value="fade-scale" label="缩小"></el-option> -->
      </el-select>
    </li>
    <li>
      <span>切换速度</span>
      <el-input-number
        w="!100px"
        :model-value="Number(admin.cssVars['--switch-duration'].replace('ms', ''))"
        controls-position="right"
        :disabled="!admin.isSwitchAnimation"
        @update:model-value="val => (admin.cssVars['--switch-duration'] = `${val}ms`)"
      ></el-input-number>
    </li>
    <li>
      <span>动画力度</span>
      <el-slider
        v-model="admin.cssVars['--switch-power']"
        w="!200px"
        :max="100"
        :disabled="!admin.isSwitchAnimation"
        :format-tooltip="val => `${val}%`"
      ></el-slider>
    </li>
  </ul>
</template>

<style lang="less" scoped></style>
