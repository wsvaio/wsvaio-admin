<script setup lang='ts'>
import useAdminStore from "../../../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <el-divider><span text="16px">滤镜</span></el-divider>
  <ul>
    <li>
      <span>亮度</span>
      <el-slider
        :max="200"
        w="!200px"
        :model-value="+admin.cssVars['--global-brightness']?.replace('%', '')"
        :format-tooltip="val => `${val}%`"
        @update:model-value="val => (admin.cssVars['--global-brightness'] = `${val}%`)"
      ></el-slider>
    </li>
    <li>
      <span>对比度</span>
      <el-slider
        :max="200"
        w="!200px"
        :model-value="+admin.cssVars['--global-contrast']?.replace('%', '')"
        :format-tooltip="val => `${val}%`"
        @update:model-value="val => (admin.cssVars['--global-contrast'] = `${val}%`)"
      ></el-slider>
    </li>
    <li>
      <span>饱和度</span>
      <el-slider
        w="!200px"
        :max="200"
        :model-value="+admin.cssVars['--global-saturation']?.replace('%', '')"
        :format-tooltip="val => `${val}%`"
        @update:model-value="val => (admin.cssVars['--global-saturation'] = `${val}%`)"
      ></el-slider>
    </li>
    <li>
      <span>透明度</span>
      <el-slider
        w="!200px"
        :model-value="+admin.cssVars['--global-opacity']?.replace('%', '')"
        :format-tooltip="val => `${val}%`"
        @update:model-value="val => (admin.cssVars['--global-opacity'] = `${val}%`)"
      ></el-slider>
    </li>
    <li>
      <span>反色</span>
      <el-slider
        w="!200px"
        :model-value="+admin.cssVars['--global-invert']?.replace('%', '')"
        :format-tooltip="val => `${val}%`"
        @update:model-value="val => (admin.cssVars['--global-invert'] = `${val}%`)"
      ></el-slider>
    </li>
    <li>
      <span>褐色</span>
      <el-slider
        w="!200px"
        :model-value="+admin.cssVars['--global-sepia']?.replace('%', '')"
        :format-tooltip="val => `${val}%`"
        @update:model-value="val => (admin.cssVars['--global-sepia'] = `${val}%`)"
      ></el-slider>
    </li>
    <li>
      <span>色相旋转</span>
      <el-slider
        w="!200px"
        :max="360"
        :model-value="+admin.cssVars['--global-hue-rotate']?.replace('deg', '')"
        :format-tooltip="val => `${val}deg`"
        @update:model-value="val => (admin.cssVars['--global-hue-rotate'] = `${val}deg`)"
      ></el-slider>
    </li>
    <li>
      <span>灰度</span>
      <el-slider
        w="!200px"
        :model-value="+admin.cssVars['--global-grayscale']?.replace('%', '')"
        :format-tooltip="val => `${val}%`"
        @update:model-value="val => (admin.cssVars['--global-grayscale'] = `${val}%`)"
      ></el-slider>
    </li>
    <li>
      <span>模糊</span>
      <el-slider
        w="!200px"
        :model-value="+admin.cssVars['--global-blur']?.replace('px', '')"
        :format-tooltip="val => `${val}px`"
        @update:model-value="val => (admin.cssVars['--global-blur'] = `${val}px`)"
      ></el-slider>
    </li>
  </ul>
</template>

<style lang='less' scoped>

</style>
