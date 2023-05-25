<script setup lang="ts">
import { NIcon } from "naive-ui";
import type { RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordRaw } from "vue-router";
import IRefresh from "~icons/iconoir/refresh";

const setting = useSettingStore();
const tab = useTabStore();
const auth = useAuthStore();
const route = useRoute();
const { tabs } = tab;
const router = useRouter();

const handleUpdate = (route: RouteLocationNormalizedLoaded | RouteRecordRaw) => {
  deepFind(auth.routes, item => item.name == route.name) && tab.appendOrReplace(route);
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
  <nav class="administrator-tab" :style="{ height: `${setting.tabHeight}px` }">
    <n-button text @click="tabsScrollTo(-100)">
      <template #icon>
        <n-icon>
          <i-ion:ios-arrow-right class="rotate-[180deg]" />
        </n-icon>
      </template>
    </n-button>
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

    <n-button text @click="tabsScrollTo(100)">
      <template #icon>
        <n-icon>
          <i-ion:ios-arrow-right />
        </n-icon>
      </template>
    </n-button>

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
      <n-button text>
        <template #icon>
          <n-icon>
            <i-ion:ios-arrow-right class="rotate-[90deg]" />
          </n-icon>
        </template>
      </n-button>
    </n-dropdown>
  </nav>
</template>

<style lang="less">
nav.administrator-tab {
	display: flex;
	align-items: center;
	padding: 6px 10px;
	user-select: none;

	& > * {
		margin-right: 10px;

		&:last-child {
			margin-right: 0;
		}
	}

	& > section.tabs {
		display: flex;
		flex: 1;
		height: 100%;
		// overflow: hidden;
		overflow: auto;

		&::-webkit-scrollbar {
			display: none;
		}

		& > .n-tag {
			position: relative;
			height: 100%;
			margin-right: 6px;
			padding: 0 12px;
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
