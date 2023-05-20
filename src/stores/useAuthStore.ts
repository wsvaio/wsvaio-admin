import type { MenuOption } from "naive-ui";
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { RouterLink } from "vue-router";
import { merge } from "@wsvaio/utils";
import router from "@/modules/router";
import { components } from "@/routes";

export default defineStore("auth", {
  state: () => ({
    accessToken: "1",
    refreshToken: "1",
    persist: false,
    routes: [] as RouteRecordRaw[],
    tabs: [] as RouteRecordRaw[],
  }),
  actions: {
    async login(body: Record<any, any>) {
      console.log(body, "fjsdkaljf;alskdfjalsdkjf");
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
    async Routes() {
      // sysPermissionGetMenuList();
      console.log(components);
      // const routeList = await sysPermissionGetMenuTree();
      const routeList = await sysPermissionTreeList();
      this.routes = deepMap(routeList as any[], (item) => {
        item.children = item?.children?.filter(item => item.type != "F");

        return {
          path: item.path,
          name: item.name,
          meta: {
            title: item.name,
            // icon: item.meta.icon,
            show: item.isDisplay != 0,
            data: { ...item },
          },
          component:
						item.type == "M" ? components[`/src/views${item.component}/index.vue`] : undefined,
        } as RouteRecordRaw;
      });
    },

    async getRouteByName() {},
  },
  getters: {
    isLogin(): boolean {
      return !!this.accessToken;
    },
    menus(): MenuOption[] {
      return deepMap(
        this.routes,
        (item): MenuOption => ({
          label:
						item?.meta?.data?.type == "M"
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
						  : item.meta?.title,
          // icon: item.meta?.icon,
          key: String(item.name),
          show: item.meta?.show,
          disabled: item.meta?.disabled,
        }),
      );
    },
  },
});
