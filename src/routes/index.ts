import type { RouteRecordRaw } from "vue-router";

export const components = {
	"/system/user": () => import("@/views/system/user/index.vue"),
	"/system/role": () => import("@/views/system/role/index.vue"),
};
export const getComponent = key =>
	components[key] || (() => import("@/layouts/error/404/index.vue"));

// 获取动态路由
export const getDynamicRoutes = async () => {
	const data = await sysPermissionTreeList();
	return deepMap(data as any[], item => {
		item.children = item?.children?.filter(item => item.type != "F");
		return {
			path: item.path,
			name: item.component || item.name,
			meta: {
				title: item.name,
				icon: item.icon,
				show: item.isDisplay != 0,
				sort: item.sort,
				data: { ...item },
			},
			component: item.type == "M" ? getComponent(item.component) : undefined,
		} as RouteRecordRaw;
	});
};
// 获取静态路由
export const getStaticRoutes = () => [
	{
		path: "/home",
		name: "Home",
		meta: { title: "主页", icon: "ci-circle-twotone", sort: -10 },
		component: import("@/views/home/index.vue"),
	},
	{
		path: "/403",
		name: "403",
		meta: { title: "403", show: false },
		component: () => import("@/layouts/error/403/index.vue"),
	},
	{
		path: "/404",
		name: "404",
		meta: { title: "404", show: false },
		component: () => import("@/layouts/error/404/index.vue"),
	},
	{
		path: "/500",
		name: "500",
		meta: { title: "500", show: false },
		component: () => import("@/layouts/error/500/index.vue"),
	},
];

export default [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},
	{ path: "/:pathMatch(.*)", component: () => import("@/layouts/error/404/index.vue") },
] as RouteRecordRaw[];
