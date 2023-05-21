<script setup lang="ts">
import { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";

const menuOptions: MenuOption[] = [
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						name: "home",
						params: {
							lang: "zh-CN",
						},
					},
				},
				{ default: () => "回家" },
			),
		key: "go-back-home",
	},
	{
		key: "divider-1",
		type: "divider",
		props: {
			style: {
				marginLeft: "32px",
			},
		},
	},
	{
		label: () =>
			h(
				"a",
				{
					href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
					target: "_blank",
					rel: "noopenner noreferrer",
				},
				"且听风吟",
			),
		key: "hear-the-wind-sing",
	},
	{
		label: "1973年的弹珠玩具",
		key: "pinball-1973",

		disabled: true,
		children: [
			{
				label: "鼠",
				key: "rat",
			},
		],
	},
	{
		label: "寻羊冒险记",
		key: "a-wild-sheep-chase",

		disabled: true,
	},
	{
		label: "舞，舞，舞",
		key: "dance-dance-dance",

		children: [
			{
				type: "group",
				label: "人物",
				key: "people",
				children: [
					{
						label: "叙事者",
						key: "narrator",
					},
					{
						label: "羊男",
						key: "sheep-man",
					},
				],
			},
			{
				label: "饮品",
				key: "beverage",

				children: [
					{
						label: "威士忌",
						key: "whisky",
					},
				],
			},
			{
				label: "食物",
				key: "food",
				children: [
					{
						label: "三明治",
						key: "sandwich",
					},
				],
			},
			{
				label: "过去增多，未来减少",
				key: "the-past-increases-the-future-recedes",
			},
		],
	},
];
</script>

<template>
	<n-menu :options="menuOptions" />
</template>

<style lang="less"></style>
