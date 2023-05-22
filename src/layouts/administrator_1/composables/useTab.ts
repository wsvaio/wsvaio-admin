import type { RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordRaw } from "vue-router";

export default () => {
  const tabs = reactive<(RouteLocationNormalizedLoaded | RouteRecordRaw)[]>([]);
  const names = computed(() => [...tabs].map(item => item.name));
  const route = useRoute();
  const auth = useAuthStore();
  const handleUpdate = (route: RouteLocationNormalizedLoaded | RouteRecordRaw) => {
    const finded = deepFind(auth.routes, item => item.name == route.name);
    finded && tabs.push(finded);
  };
  onBeforeRouteUpdate(to => handleUpdate(to));
  handleUpdate(route);

  const has = (name?: RouteRecordName | null) => !!tabs.find(item => item.name == name);

  const add = (route: RouteLocationNormalizedLoaded | RouteRecordRaw) => {
    const index = tabs.findIndex(item => item.name == route.name);
    if (index != -1) tabs.push(route);
  };
  const del = (name?: RouteRecordName | null) => {
    const index = tabs.findIndex(item => item.name == name);
    if (index != -1) tabs.splice(index, 1);
  };
  const toggle = (route: RouteLocationNormalizedLoaded | RouteRecordRaw) =>
    has(route.name) ? del(route.name) : add(route);

  return {
    tabs,
    names,
    has,
    del,
    add,
    toggle,
  };
};
