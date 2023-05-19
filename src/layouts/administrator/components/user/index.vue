<script setup lang="ts">
// import ilock from "~icons/material-symbols/lock-outline";
import { useAdminStore } from "@/layouts/administrator";
import avatar from "@/assets/admin.svg";
import ishutdown from "~icons/icons8/shutdown";

const admin = useAdminStore();
const auth = useAuthStore();
const handleCommand = (item) => {
  if (item === "lock") {
    //
  }
  else if (item === "logout") {
    auth.logout();
  }
};
const user = useUserStore();
</script>

<template>
  <el-dropdown class="user" @command="handleCommand">
    <div grid="~ flow-col gap-4px" p="x-6px" items="center" outline="none">
      <!-- <img :src="user.avatarUrl || avatar" w="32px" h="32px" object="cover" rounded="50%" /> -->
      <img :src="avatar" w="32px" h="32px" object="cover" rounded="50%" />
      <span v-if="admin.layout != 'mini'" min="w-32px">{{ user.name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <!-- <el-dropdown-item :icon="ilock" command="lock">锁定屏幕</el-dropdown-item> -->
        <el-dropdown-item :icon="ishutdown" command="logout">
          退出系统
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="less" scoped>
.user {
  height: var(--header-height);
  transition: filter 0.3s;
  background-color: var(--header-bg-color);

  &:hover {
    cursor: pointer;
    filter: contrast(80%);
  }
}
</style>
