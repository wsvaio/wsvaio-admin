<script setup lang="ts">
import useRouteStore from "../../../../stores/useRouteStore";
import irefresh from "~icons/prime/refresh";
import iclose from "~icons/material-symbols/close-rounded";
import iarrowleft from "~icons/ph/arrow-line-left-thin";
import iarrowright from "~icons/ph/arrow-line-right-thin";
import isubtract from "~icons/carbon/subtract";

const { keep } = $(useRouteStore());
const route = useRoute();
const router = useRouter();
const handleCommand = (command: string) => {
  const index = keep.includes.findIndex(item => route.name == item.name);
  if (command == "reload") {
    router.go(0);
  }
  else if (command == "close") {
    keep.includes.splice(index, 1);
    router.push([...keep.includes].reverse()[0]);
  }
  else if (command == "close-left") {
    for (let i = 0; i < index; i++) keep.includes.shift();
  }
  else if (command == "close-right") {
    const length = keep.includes.length;
    for (let i = 0; i < length - index - 1; i++) keep.includes.pop();
  }
  else if (command == "close-other") {
    handleCommand("close-left");
    handleCommand("close-right");
  }
};
</script>

<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <el-icon class="setting">
      <i-ic:outline-keyboard-arrow-down />
    </el-icon>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="irefresh" command="reload">
          重新加载
        </el-dropdown-item>
        <el-dropdown-item :icon="iclose" :disabled="keep.includes.length == 1" command="close">
          关闭标签页
        </el-dropdown-item>
        <el-dropdown-item
          :icon="iarrowleft"
          :disabled="keep.includes.findIndex((item) => item.name == route.name) == 0"
          command="close-left"
          divided
        >
          关闭左侧标签页
        </el-dropdown-item>
        <el-dropdown-item
          :icon="iarrowright"
          :disabled="keep.includes.findIndex((item) => item.name == route.name) == keep.includes.length - 1"
          command="close-right"
        >
          关闭右侧标签页
        </el-dropdown-item>
        <el-dropdown-item
          :icon="isubtract"
          divided
          command="close-other"
          :disabled="keep.includes.length == 1"
        >
          关闭其它标签页
        </el-dropdown-item>
        <!-- <el-dropdown-item :icon="irefresh" command="close-all">关闭全部标签页</el-dropdown-item> -->
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
