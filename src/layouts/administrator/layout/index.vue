<script setup lang="ts">
import VAside from "./components/aside/index.vue";
import VHeader from "./components/header/index.vue";
import VTab from "./components/tab/index.vue";
import VFooter from "./components/footer/index.vue";
import VMain from "./components/main/index.vue";

import "./styles/theme.less";
import "./styles/fixed.less";
import "./styles/layout.less";

import useAdminInitial from "./composables/useAdminInitial";
import useRouteInitial from "./composables/useRouteInitial";
import useAdminStore from "./stores/useAdminStore";

const admin = useAdminStore();
useAdminInitial();
useRouteInitial();
</script>

<template tag="article" class="administrator">
  <v-aside v-if="admin.layoutHas('left', 'top-mix', 'left-mix', 'mini')"></v-aside>
  <v-header>
    <slot name="header"></slot>
  </v-header>
  <v-tab></v-tab>
  <v-main></v-main>
  <v-footer>
    <slot name="footer"></slot>
  </v-footer>
</template>

<style lang="less">
article.administrator {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content max-content 1fr max-content;
  // height: 100vh;
  min-height: 100vh;

}
</style>
