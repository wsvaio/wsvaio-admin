<script setup lang="ts">
import Logo from "../logo/index.vue";
import VMenu from "../menu/index.vue";
import useAdminStore from "../../stores/useAdminStore";
import Mix from "./components/mix/index.vue";
import Collapse from "./components/collapse/index.vue";

const admin = useAdminStore();
const isShowMask = computed(() => {
  if (admin.layoutHas("mini")) return !admin.isCollapse;
});
</script>

<template>
  <aside @mousedown.stop @pointerdown.stop>
    <logo v-if="admin.layoutHas('left', 'left-mix', 'mini')" mode="left"></logo>
    <!-- <v-menu v-if="admin.layoutHas('left-mix')" collapse mode="left-mix-trigger" class="theme-left"></v-menu> -->
    <mix v-if="admin.layoutHas('left-mix')"></mix>
    <v-menu :mode="admin.layoutHas('left-mix') ? 'left-mix' : 'left'"></v-menu>
    <collapse v-show="admin.isBottomCollapse"></collapse>
  </aside>

  <transition name="fade">
    <div
      v-if="isShowMask"
      class="administrator-aside-mask"
      @click="admin.isCollapse = !admin.isCollapse"
    >
    </div>
  </transition>
</template>

<style lang="less">
article.administrator > aside {
  display: grid;
  z-index: 1002;
  grid-row: -1 / 1;
  grid-template-columns: max-content;
  grid-template-rows: max-content 1fr max-content;
  overflow: auto;
}

.administrator-aside-mask {
  position: fixed;
  z-index: 1001;
  background-color: rgb(0 0 0 / 50%);
  inset: 0;
}
</style>
