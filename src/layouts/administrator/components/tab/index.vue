<script setup lang="ts">
import { NIcon } from "naive-ui";
import type { RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordRaw } from "vue-router";
import IRefresh from "~icons/iconoir/refresh";

const tab = useTabStore();
const auth = useAuthStore();
const route = useRoute();
const { tabs } = tab;
const router = useRouter();

const handleUpdate = (route: RouteLocationNormalizedLoaded | RouteRecordRaw) => {
  const finded = deepFind(auth.routes, item => item.name == route.name);
  finded && tab.appendOrReplace(route);
};
onBeforeRouteUpdate(to => handleUpdate(to));
handleUpdate(route);

const tabsRef = $ref<HTMLDivElement>();
const tabsScrollTo = (num: number) =>
  tabsRef?.scrollTo({
    behavior: "smooth",
    left: tabsRef?.scrollLeft + num,
  });
const tabsScrollIntoView = (index: number) =>
  tabsRef?.children[index]?.scrollIntoView({
    behavior: "smooth",
  });

let currentDragName: RouteRecordName | null | undefined = "";
const dragenter = (item: RouteLocationNormalizedLoaded | RouteRecordRaw) => {
  if (!currentDragName || currentDragName == item.name) return;
  const index = tab.findIndexByName(item.name);
  const t = tab.findByName(currentDragName);
  if (!t) return;
  tab.deleteByName(currentDragName);
  tab.insert(index, t);
  currentDragName = "";
  setTimeout(() => (currentDragName = t.name), 333);
};
const close = (item: RouteLocationNormalizedLoaded | RouteRecordRaw) => {
  tabs.splice(tab.findIndexByName(item.name), 1);
  if (route.name == item.name) router.push([...tabs].reverse()[0]);
};
const log = console.log;
</script>

<template>
  <nav class="admin-tab">
    <n-icon @click="tabsScrollTo(-100)">
      <i-ion:ios-arrow-right class="rotate-[180deg]" />
    </n-icon>
    <section
      ref="tabsRef"
      class="tabs"
      @mousewheel="tabsScrollTo($event.deltaY)"
      @dragenter.prevent=""
      @dragover.prevent=""
    >
      <transition-group name="tab">
        <n-tag
          v-for="(item, index) in tabs"
          :key="item.name!"
          draggable="true"
          size="large"
          :closable="tabs.length > 1"
          :bordered="false"
          :type="route.name == item.name ? 'primary' : 'default'"
          :style="{ '--n-color': 'var(--body-color)' }"
          @dragstart="currentDragName = item.name"
          @dragenter.prevent="dragenter(item)"
          @dragover.prevent="dragenter(item)"
          @drop="dragenter(item)"
          @dragend="currentDragName = ''"
          @click="tabsScrollIntoView(index), router.push(item)"
          @close="close(item)"
        >
          {{ item.meta?.title }}
        </n-tag>
      </transition-group>
    </section>
    <n-icon @click="tabsScrollTo(100)">
      <i-ion:ios-arrow-right />
    </n-icon>

    <n-dropdown
      :options="[
        {
          label: '刷新当前',
          key: '1',

          icon: () => h(IRefresh),
        },
        {
          label: '关闭当前',
          key: '2',
          disabled: tabs.length > 1,
          icon: () => h(IRefresh),
        },
        {
          label: '关闭其他',
          key: '3',
          disabled: tabs.length > 1,
          icon: () => h(IRefresh),
        },
        {
          label: '关闭全部',
          key: '4',
          disabled: tabs.length > 1,
          icon: () => h(IRefresh),
        },
      ]"
      @select="log"
    >
      <n-icon>
        <i-ion:ios-arrow-right class="rotate-[90deg]" />
      </n-icon>
    </n-dropdown>
  </nav>
</template>

<style lang="less">
nav.admin-tab {
	display: flex;
	align-items: center;
	padding: 6px 10px;
	user-select: none;

	.n-icon {
		min-width: 32px;
		font-size: 18px;
		cursor: pointer;
	}

	& > section.tabs {
		display: flex;
		flex: 1;
		// overflow: hidden;
		overflow: auto;

		&::-webkit-scrollbar {
			display: none;
		}

		& > .n-tag {
			position: relative;
			margin-right: 6px;
			transition: all 0.333s ease;
			cursor: pointer;

			&:last-child {
				margin-right: 0;
			}
		}
	}

	.tab-enter-from,
	.tab-leave-to {
		transform: translateY(25%);
		opacity: 0;
	}
}
</style>
