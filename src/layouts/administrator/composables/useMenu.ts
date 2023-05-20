import type { RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordRaw } from "vue-router";

export default () => {
  const currentActiveMenu = ref<RouteRecordName | undefined | null>("");
  const route = useRoute();
  const auth = useAuthStore();

  const handleUpdate = (route: RouteLocationNormalizedLoaded | RouteRecordRaw) => {
    currentActiveMenu.value
			= deepFind(auth.routes, item => item.path == route?.meta?.data?.currentActiveMenu)?.name
			|| route.name;
    console.log(currentActiveMenu.value, route.meta?.data?.currentActiveMenu, deepFind(auth.routes, item => item.path == route?.meta?.data?.currentActiveMenu));
  };
  onBeforeRouteUpdate(to => handleUpdate(to));
  handleUpdate(route);

  return {
    currentActiveMenu,
  };
};
