import type { ComponentOptions } from "vue";

export { default as useAdminStore } from "./stores/useAdminStore";
export { default as useRouteStore } from "./stores/useRouteStore";
export type { Layout, Size } from "./stores/useAdminStore";

declare module "vue-router" {
  interface RouteMeta {
    parent?: string;
    title?: string;
    icon?: ComponentOptions;
  }
}
