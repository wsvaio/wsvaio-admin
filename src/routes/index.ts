import type { RouteRecordRaw } from "vue-router";

export const components = import.meta.glob("@/views/**/index.vue");

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "Home",
    meta: { title: "主页", icon: "ci-circle-twotone", sort: -10 },
    component: import("@/views/home/index.vue"),
  },
  {
    path: "/error",
    name: "error",
    meta: { title: "错误页面", icon: "ci-circle-twotone" },
    children: [
      {
        path: "403",
        name: "403",
        meta: { title: "403" },
        component: () => import("@/views/error/403/index.vue"),
      },
      {
        path: "404",
        name: "404",
        meta: { title: "404" },
        component: () => import("@/views/error/404/index.vue"),
      },
      {
        path: "500",
        name: "500",
        meta: { title: "500" },
        component: () => import("@/views/error/500/index.vue"),
      },
    ],
  },
];

export default [
  {
    path: "/",
    name: "administrator",
    component: () => import("@/layouts/administrator/index.vue"),
    redirect: "/home",
    children: [],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
] as RouteRecordRaw[];
