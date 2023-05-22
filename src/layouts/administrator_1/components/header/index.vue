<script lang="ts" setup>
import type { AdministratorProvide } from "../..";

const { tabs } = inject<AdministratorProvide>("administrator-provide")!;

function dragstart(event: DragEvent) {
  const el: any = event.target;
  event.dataTransfer?.setData("dragIndex", el?.dataset?.index);
}
function drop(event: DragEvent, dropIndex: number) {
  const dragIndex: any = event.dataTransfer?.getData("dragIndex");

  let temp = tabs[dragIndex];

  tabs.splice(dragIndex, 1);
  tabs.splice(dropIndex, 0, temp);
}
</script>

<template>
  <n-tag v-for="(item, index) in tabs" closable @close="tabs.delete(index, 1)">
    {{ item.meta?.title }}
  </n-tag>
</template>

<style lang="less">

</style>
