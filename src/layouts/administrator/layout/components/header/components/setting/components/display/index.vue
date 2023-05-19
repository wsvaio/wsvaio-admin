<script setup lang='ts'>
import useAdminStore from "../../../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <el-divider><span text="16px">界面显示</span></el-divider>
  <ul>
    <li>
      <span>面包屑</span>
      <el-switch
        v-model="admin.isBreadCrumb"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>面包屑图标</span>
      <el-switch
        v-model="admin.isBreadCrumbIcon"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>

    <li>
      <span>顶部折叠按钮</span>
      <el-switch
        v-model="admin.isTopCollapse"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>底部折叠按钮</span>
      <el-switch
        v-model="admin.isBottomCollapse"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>

    <li>
      <span>标签页</span>
      <el-switch
        v-model="admin.isTab"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>

    <li>
      <span>标签页边框</span>
      <el-switch
        v-model="admin.isTabBorder"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>

    <li>
      <span>标签页刷新按钮</span>
      <el-switch
        v-model="admin.isTabRefresh"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>

    <li>
      <span>标签页下拉按钮</span>
      <el-switch
        v-model="admin.isTabDropdown"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>

    <li>
      <span>标签页全屏按钮</span>
      <el-switch
        v-model="admin.isTabFullscreen"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>Logo</span>
      <el-switch
        v-model="admin.isLogo"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>页脚</span>
      <el-switch
        v-model="admin.isFooter"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>全屏内容</span>
      <el-switch
        v-model="admin.isTabFull"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
  </ul>
</template>

<style lang='less' scoped>

</style>
