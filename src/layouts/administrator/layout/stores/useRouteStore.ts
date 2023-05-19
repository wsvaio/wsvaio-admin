import { defineStore } from "pinia";
import type { RouteRecordName, RouteRecordRaw } from "vue-router";
import { adminRoutes } from "@/routes";
import { router } from "@/modules/router";

function ergodic<T>(
  array: T[],
  handle: (e: T) => void,
  options?: {
    childrenKey?: string;
    mode?: "DFS" | "BFS";
  },
) {
  const { childrenKey = "children", mode = "DFS" } = options || {};
  const childrens: T[] = [];
  for (const item of array) {
    handle(item);
    Array.isArray(item[childrenKey])
      && (mode == "DFS"
        ? ergodic(item[childrenKey], handle, { childrenKey, mode })
        : childrens.push(...item[childrenKey]));
  }
  mode == "BFS" && ergodic(childrens, handle, { childrenKey, mode });
}

export default defineStore("route", {
  state: () => ({
    routes: shallowRef([] as RouteRecordRaw[]),

    isRouteView: true,
    keep: {
      includes: [] as RouteRecordRaw[],
      excludes: [] as RouteRecordRaw[],
    },
  }),
  actions: {
    async syncRoutes() {
      // this.routes.forEach(route => router.removeRoute(route.name!));
      router.hasRoute("administrator") && router.removeRoute("administrator");
      // const list = await sysPermissionTreeList();
      // const routeList: any[] = await sysPermissionGetMenuList();
      // ergodic(routeList, (ev) => {
      //   console.log(ev);
      // });
      // deep(list, console.log);
      this.routes = adminRoutes;
      router.addRoute(this.layout);

      // this.routes.forEach(route => router.addRoute("administrator", route));
    },

    findRouteByName(name: RouteRecordName | null | undefined): RouteRecordRaw | undefined {
      if (!name) return;
      const deep = (children: RouteRecordRaw[]) => {
        if (children.length <= 0) return;
        const nexts: RouteRecordRaw[] = [];
        for (const item of children) {
          if (item.name == name) return item;
          if (item.children) nexts.push(...item.children);
        }
        return deep(nexts);
      };
      return deep(this.routes);
    },
    isMenuItem(name: RouteRecordName | null | undefined) {
      const route = this.findRouteByName(name);
      if (!route) return;
      return (
        !route.meta?.parent
        && !String(route.name).endsWith("-index")
        && (route.children?.some(item => String(item.name).endsWith("-index")) || route.component)
      );
    },
    isMenu(name: RouteRecordName | null | undefined) {
      const route = this.findRouteByName(name);
      if (!route) return;
      return (
        !route.meta?.parent
        && route.children
        && route.children.filter(item => this.isMenuItem(item.name) || this.isMenu(item.name)).length
          > 0
      );
    },

    isRouteActive(
      routes: RouteRecordRaw[] | RouteRecordRaw | undefined,
      name: RouteRecordName | null | undefined,
    ): boolean {
      const route = this.findRouteByName(name);
      if (!route || !routes) return false;
      Array.isArray(routes) || (routes = [routes]);

      return routes.some(
        item =>
          [route.name, route.meta?.parent].includes(item.name)
          || this.isRouteActive(item.children, name),
      );
    },

    getTopLevelRoute(name: RouteRecordName | null | undefined) {
      if (!name) return;
      for (const item of this.routes) if (this.isRouteActive(item, name)) return item;
    },

    async refresh(name: string) {
      const route = this.findRouteByName(name);
      if (!route) return;
      this.keep.excludes.push(route);
      await nextTick();
      this.isRouteView = false;
      await nextTick();
      this.isRouteView = true;
      this.keep.excludes.splice(this.keep.excludes.indexOf(route), 1);
    },
  },
  getters: {
    layout(): RouteRecordRaw {
      return {
        path: "/",
        name: "administrator",
        redirect: () => {
          return { name: this.routes[0].name };
        },
        component: () => import("@/layouts/administrator/index.vue"),
        children: this.routes,
      };
    },
  },
});
