<script lang="ts" setup>
import useRouteStore from "../../../../stores/useRouteStore";

const { isRouteActive, keep } = $(useRouteStore());
function dragstart(event: DragEvent) {
  const el: any = event.target;
  event.dataTransfer?.setData("dragIndex", el?.dataset?.index);
}
function drop(event: DragEvent, dropIndex: number) {
  const dragIndex: any = event.dataTransfer?.getData("dragIndex");

  let temp = keep.includes[dragIndex];

  keep.includes.splice(dragIndex, 1);
  keep.includes.splice(dropIndex, 0, temp);
}

const route = useRoute();
const router = useRouter();
function handleClose(item, index) {
  keep.includes.splice(index, 1);
  if (isRouteActive(item, route.name)) router.push([...keep.includes].reverse()[0]);
}
</script>

<template>
  <div class="administrator-tab">
    <transition-group name="tab">
      <el-tag
        v-for="(item, index) in keep.includes"
        :key="item.name || item.path"
        :data-index="index"
        draggable="true"
        cursor="pointer"
        :closable="keep.includes.length > 1"
        :type="isRouteActive(item, $route.name) ? '' : 'info'"
        :effect="isRouteActive(item, $route.name) ? 'dark' : 'plain'"
        @dragstart="dragstart"
        @drop="drop($event, index)"
        @dragover.prevent=""
        @click="$router.push(item)"
        @close="handleClose(item, index)"
      >
        {{ item.meta?.title || item.name }}
      </el-tag>
    </transition-group>
  </div>
</template>

<style lang="less">
.administrator-tab {
  --el-text-color-primary: var(--color);
  --el-text-color-regular: var(--color-regular);

  display: flex;
  margin-right: auto;
  padding: 0 0 0 6px;

  .el-tag {
    position: relative;
    top: 2px;
    flex: 1 1 0;
    height: 28px;
    margin-right: 6px;
    transition: all 0.333s ease;
    border-radius: 1px 1px 0 0;
  }

  .tab-enter-from,
  .tab-leave-to {
    transform: translateY(25%);
    opacity: 0;
  }

  .el-tag--info {
    --el-tag-bg-color: var(--tab-bg-color);
    --el-tag-border-color: var(--border-color);
    --el-tag-text-color: var(--color-regular);
  }
}
</style>
