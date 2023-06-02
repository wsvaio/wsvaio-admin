import type { MenuOption } from "naive-ui";
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { RouterLink } from "vue-router";
import { ergodic, merge } from "@wsvaio/utils";
import router from "@/modules/router";
import { getDynamicRoutes, getStaticRoutes } from "@/routes";
import Icones from "@/components/icones/index.vue";

const label = (item: RouteRecordRaw) =>
	item?.component
		? () =>
			h(
				RouterLink,
				{
					to: {
						name: item.name,
					},
				},
				{ default: () => item.meta?.title },
			)
		: item.meta?.title;

export default defineStore("auth", {
	state: () => ({
		accessToken: "1",
		refreshToken: "1",
		persist: false,
		routes: [] as RouteRecordRaw[],
	}),
	actions: {
		async login(body: Record<any, any>) {
			const data = await authorizeToken({ body });
			merge(this.$state, data);
		},
		// async refresh() {
		//   const data = await authorizeRefreshToken({ body: { refreshToken: this.refreshToken } });
		//   merge(this.$state, data);
		// },
		logout() {
			this.$reset();
			router.push({ name: "login" });
		},
		// 组合动态路由和静态路由
		async Routes() {
			this.routes = [];
			await getDynamicRoutes()
				.then(routeList => {
					this.routes.push(...routeList);
				})
				.finally(() => {
					this.routes.push(...getStaticRoutes());
					this.routes.sort((a, b) => (a.meta?.sort || 0) - (b.meta?.sort || 0));
				});
		},

		// 添加或替换路由到vue-router
		async addOrReplaceRoute() {
			router.hasRoute("administrator") && router.removeRoute("administrator");
			await this.Routes().finally(() => {
				const children = [] as any[];
				ergodic(this.routes, item => {
					if (item.path && item.component) children.push(item);
				});
				router.addRoute({
					path: "/",
					name: "administrator",
					redirect: () => children[0],
					component: () => import("@/layouts/administrator/index.vue"),
					children,
				});
			});
		},

	},
	getters: {
		isLogin(): boolean {
			return !!this.accessToken;
		},

		menus(): MenuOption[] {
			return deepMap(this.routes, (item): MenuOption => {
				item.children = item.children?.filter(sub => sub.meta?.show != false);
				return {
					label: label(item),
					icon: item.meta?.icon ? () => h(Icones, { name: String(item.meta?.icon) }) : undefined,
					key: String(item.name),
					show: item.meta?.show,
					disabled: item.meta?.disabled,
				};
			});
		},

	},
});
