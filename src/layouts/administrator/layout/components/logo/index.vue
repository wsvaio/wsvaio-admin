<script setup lang="ts">
import useAdminStore from "../../stores/useAdminStore";

const props = defineProps<{
  mode?: "left" | "top";
}>();
const admin = useAdminStore();
const title = import.meta.env.VITE_DOCUMENT_SHORT_TITLE;

const isCollpase = computed(() => {
  if (admin.layout == "left-mix")
    return !admin.mix.fixed && admin.mix.collapse;
  if (admin.layout == "mini" && props.mode == "top")
    return true;
  return admin.layoutHas("left") && admin.isCollapse;
});
const handleClick = () => {
  admin.mix.collapse = false;
  admin.mix.fixed = !admin.mix.fixed;
};
</script>

<template>
  <div v-show="admin.isLogo || admin.layoutHas('left-mix')" class="administrator-logo" :class="[mode]">
    <img w="32px" h="32px" object="contain" src="/logo.png" />
    <transition name="logo-fade">
      <h3 v-show="!isCollpase" m="0 l-12px" flex="1">
        {{ title }}
      </h3>
    </transition>
    <el-icon v-if="admin.layoutHas('left-mix') && !isCollpase" @click="handleClick">
      <i-material-symbols:push-pin v-if="admin.mix.fixed" />
      <i-material-symbols:push-pin-outline v-else />
    </el-icon>
  </div>
</template>

<style lang="less">
.administrator-logo {
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  padding: 10px;
  overflow: hidden;
  transition: filter 0.3s;
  background-color: var(--header-bg-color);
  white-space: nowrap;

  &:hover {
    filter: contrast(80%);
  }

  &.left {
    position: sticky;
    top: 0;
    left: 0;
  }

  &>.el-icon {
    color: inherit;
  }
}

html.light .administrator-logo.left {
  background-color: var(--aside-bg-color, #001428);
}

html.dark .administrator-logo.left {
  background-color: var(--aside-bg-color, #212121);
}

.logo-fade-enter-active,
.logo-fade-leave-active {
  width: 0;
  transition: opacity 0.3s;
}

.logo-fade-enter-from,
.logo-fade-leave-to {
  opacity: 0;
}
</style>
