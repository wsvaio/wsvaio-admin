<script setup lang="ts">
import { NIcon } from "naive-ui";
import { DropdownMixedOption } from "naive-ui/es/dropdown/src/interface";
import IRefresh from "~icons/iconoir/refresh";
const modelValue = defineModel<string>();
const tabsRef = $ref<HTMLDivElement>();
const { tabs = reactive(["主控台", "500", "403"]) } = defineProps<{
	tabs?: string[];
}>();
const tabsScrollTo = (num: number) =>
	tabsRef?.scrollTo({
		behavior: "smooth",
		left: tabsRef?.scrollLeft + num,
	});
const tabsScrollIntoView = (index: number) =>
	tabsRef?.children[index]?.scrollIntoView({
		behavior: "smooth",
	});

let dragItem = "";
const dragenter = item => {
	if (!dragItem || dragItem == item) return;
	const dragIndex = tabs.indexOf(dragItem);
	const index = tabs.indexOf(item);
	tabs.splice(dragIndex, 1);
	tabs.splice(index, 0, dragItem);
	let temp = dragItem;
	dragItem = "";
	setTimeout(() => (dragItem = temp), 333);
};
const close = item => {
	tabs.splice(tabs.indexOf(item), 1);
	if (modelValue.value == item) modelValue.value = [...tabs].reverse()[0];
};
const log = console.log;


const renderIcon = (icon: Component) => {
	return () => {
		return h(NIcon, null, {
			default: () => h(icon),
		});
	};
};
</script>

<template>
	<nav class="admin-tab">
		<n-icon @click="tabsScrollTo(-100)">
			<i-ion:ios-arrow-right class="rotate-[180deg]" />
		</n-icon>
		<section
			class="tabs"
			ref="tabsRef"
			@mousewheel="tabsScrollTo($event.deltaY)"
			@dragenter.prevent=""
			@dragover.prevent=""
		>
			<transition-group name="tab">
				<n-tag
					v-for="(item, index) in tabs"
					:key="item"
					draggable="true"
					@dragstart="dragItem = item"
					@dragenter.prevent="dragenter(item)"
					@dragover.prevent=""
					@dragend="dragItem = ''"
					@click="(modelValue = item), tabsScrollIntoView(index)"
					@close="close(item)"
					size="large"
					:closable="tabs.length > 1"
					:bordered="false"
					:type="modelValue == item ? 'primary' : 'default'"
					:style="{ '--n-color': 'var(--body-color)' }"
					>{{ item }}</n-tag
				>
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
