import useAdminStore from "../stores/useAdminStore";
import useRouteStore from "../stores/useRouteStore";

export default () => {
  const admin = useAdminStore();
  const { findRouteByName, keep } = $(useRouteStore());

  // 监听路由

  const handleRouteUpdate = (name: string) => {
    name = name.replace("-index", "");
    let route = findRouteByName(name);
    if (route?.meta?.parent) route = findRouteByName(route?.meta?.parent);
    const finded = keep.includes.find(item => item.name == route?.name);
    if (finded) return;
    if (route) keep.includes.push(route);
  };
  const route = useRoute();
  handleRouteUpdate(String(route.name));

  onBeforeRouteUpdate((to) => {
    if (admin.layoutHas("mini")) admin.isCollapse = true;
    handleRouteUpdate(String(to.name));
  });
};
