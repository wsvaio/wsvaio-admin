import type { MenuOption } from "naive-ui";
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { RouterLink } from "vue-router";
import { merge } from "@wsvaio/utils";
import router from "@/modules/router";
import { components, staticRoutes } from "@/routes";
import AntDesignicon from "@/components/ant-design-icon/index.vue";

const label = (item: RouteRecordRaw) => item?.component
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
      const routeList = await sysPermissionTreeList();
      this.routes = deepMap(routeList as any[], (item) => {
        item.children = item?.children?.filter(item => item.type != "F");
        return {
          path: item.path,
          name: item.name,
          meta: {
            title: item.name,
            icon: item.icon,
            show: item.isDisplay != 0,
            sort: item.sort,
            data: { ...item },
          },
          component:
						item.type == "M" ? components[`/src/views${item.component}/index.vue`] : undefined,
        } as RouteRecordRaw;
      });
      this.routes.push(...staticRoutes);
      this.routes.sort((a, b) => (a.meta?.sort || 0) - (b.meta?.sort || 0));
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
          label: label(item),
          icon:
						item.meta?.icon
						  ? () => h(AntDesignicon, { name: String(item.meta?.icon) })
						  : undefined,
          key: String(item.name),
          show: item.meta?.show,
          disabled: item.meta?.disabled,

        }),
      );
    },
  },
});
