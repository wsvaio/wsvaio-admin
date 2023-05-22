import { defineStore } from "pinia";
import type { RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordRaw } from "vue-router";

export default defineStore("tab", {
  state: () => ({
    tabs: [] as (RouteLocationNormalizedLoaded | RouteRecordRaw)[],
    excludes: [] as (RouteRecordName | undefined | null)[],
    includes: [] as (RouteRecordName | undefined | null)[],
    isRouteView: true,
  }),
  actions: {
    findByName(name?: RouteRecordName | null) {
      return this.tabs.find(item => item.name == name);
    },
    findIndexByName(name?: RouteRecordName | null) {
      return this.tabs.findIndex(item => item.name == name);
    },
    insert(index: number, route: RouteLocationNormalizedLoaded | RouteRecordRaw) {
      this.tabs.splice(index, 0, route);
    },
    append(route: RouteLocationNormalizedLoaded | RouteRecordRaw) {
      if (!this.findByName(route.name)) this.tabs.push(route);
    },
    replace(route: RouteLocationNormalizedLoaded | RouteRecordRaw) {
      const index = this.findIndexByName(route.name);
      if (index != -1) {
        this.insert(index, route);
        this.deleteByName(route.name);
      }
    },
    appendOrReplace(route?: RouteLocationNormalizedLoaded | RouteRecordRaw) {
      if (!route) return;
      const index = this.findIndexByName(route.name);
      if (index != -1) this.replace(route);
      else this.append(route);
    },
    deleteByName(name?: RouteRecordName | null) {
      const index = this.findIndexByName(name);
      if (index != -1) this.tabs.splice(index, 1);
    },

    async refresh(name?: RouteRecordName | null) {
      if (!name) return;
      this.excludes.push(name);
      await nextTick();
      this.isRouteView = false;
      await nextTick();
      this.isRouteView = true;
      this.excludes.pop();
    },
  },
  getters: {
    include(): string[] {
      return [
        ...this.includes.map(item => String(item)),
        ...this.tabs
          .map(item => item.name)
          .filter(item => !!item)
          .map(item => String(item)),
      ];
    },
    exclude(): string[] {
      return this.excludes.filter(item => !!item).map(item => String(item));
    },
  },
});
