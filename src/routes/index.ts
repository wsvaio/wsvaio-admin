import type { RouteRecordRaw } from "vue-router";

export default [
	// {
	//   path: "/",
	//   name: "administrator",
	//   component: () => import("@/layouts/administrator/index.vue"),
	//   redirect: { name: "home" },
	//   children: [
	//     {
	//       path: "home",
	//       name: "home",
	//       meta: { title: "首页总览" },
	//       component: () => import("@/views/home/index.vue"),
	//     },
	//   ],
	// },
	{
		path: "/",
		name: "administrator",
		component: () => import("@/layouts/administrator/index.vue"),
		children: [
			{
				path: "home",
				name: "home",
				component: () => import("@/views/home/index.vue"),
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},

	// { path: "/:pathMatch(.*)", redirect: { name: "administrator" } },
] as RouteRecordRaw[];
