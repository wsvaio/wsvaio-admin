<script setup lang="ts">
import useAdminStore from "../../../../../../stores/useAdminStore";

const admin = useAdminStore();
</script>

<template>
  <el-divider><span text="16px">界面功能</span></el-divider>
  <ul>
    <li>
      <span>折叠菜单</span>
      <el-switch
        v-model="admin.isCollapse"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>侧边菜单手风琴模式</span>
      <el-switch
        v-model="admin.isAccordion"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>固定菜单</span>
      <el-switch
        v-model="admin.fixed.aside"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>固定菜单弹出层（左侧菜单混合模式）</span>
      <el-switch
        v-model="admin.mix.fixed"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>固定页眉</span>
      <el-switch
        v-model="admin.fixed.header"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>固定标签页</span>
      <el-switch
        v-model="admin.fixed.tab"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>固定内容</span>
      <el-switch
        v-model="admin.fixed.main"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>
    <li>
      <span>固定页脚</span>
      <el-switch
        v-model="admin.fixed.footer"
        inline-prompt
        active-text="开"
        inactive-text="关"
      ></el-switch>
    </li>

    <li>
      <span>顶部菜单布局</span>
      <el-select v-model="admin.cssVars['--menu-top-justify-content']" class="!w-100px">
        <el-option value="flex-start" label="居左"></el-option>
        <el-option value="center" label="居中"></el-option>
        <el-option value="flex-end" label="居右"></el-option>
      </el-select>
    </li>
    <li>
      <span>菜单展开宽度</span>
      <el-input-number
        w="!100px"
        :min="200"
        :model-value="Number(admin.cssVars['--menu-width'].replace('px', ''))"
        controls-position="right"
        @update:model-value="val => (admin.cssVars['--menu-width'] = `${val}px`)"
      ></el-input-number>
    </li>
  </ul>
</template>

<style lang="less" scoped></style>
