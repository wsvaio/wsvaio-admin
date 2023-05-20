import type { RouteRecordRaw } from "vue-router";

export const components = import.meta.glob("@/views/**/index.vue");

export default [
  {
    path: "/",
    name: "administrator",
    component: () => import("@/layouts/administrator/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
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

] as RouteRecordRaw[];
