<script lang="ts" setup>
import useAdminStore from "../../stores/useAdminStore";
import Tabs from "./components/tabs/index.vue";
import Dropdown from "./components/dropdown/index.vue";
import Fullscreen from "./components/fullscreen/index.vue";
import Refresh from "./components/refresh/index.vue";

const admin = useAdminStore();
const sectionRef = $ref<HTMLElement>();
function handleMouseWheel(ev) {
  if (!sectionRef) return;
  sectionRef.scrollTo({ left: sectionRef.scrollLeft + ev.deltaY, behavior: "smooth" });
}
</script>

<template>
  <section v-show="admin.isTab" ref="sectionRef" :class="[admin.isTabBorder && 'border']" @mousewheel.stop.prevent="handleMouseWheel">
    <tabs></tabs>
    <refresh v-show="admin.isTabRefresh"></refresh>
    <dropdown v-show="admin.isTabDropdown"></dropdown>
    <fullscreen v-show="admin.isTabFullscreen"></fullscreen>
  </section>
  <div v-show="!admin.isTab"></div>
</template>

<style lang="less">
article.administrator > section {
  display: flex;
  z-index: 1000;
  padding: 1px 0;
  overflow-x: auto;
  overflow-y: hidden;

  &.border {
    border-top: solid 1px var(--border-color);
    border-bottom: solid 1px var(--border-color);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .el-icon.setting {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 100%;
    transition: filter 0.3s;
    border-left: solid 1px var(--border-color);
    background-color: var(--tab-bg-color);
    color: var(--color);
    cursor: pointer;

    &:hover {
      filter: contrast(80%);
    }
  }

  & > * {
    position: sticky;
    flex: none;

    &:nth-last-child(1) {
      right: 0;
    }

    &:nth-last-child(2) {
      right: 36px;
    }

    &:nth-last-child(3) {
      right: 72px;
    }
  }
}
</style>
