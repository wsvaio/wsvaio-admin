import { createRouter, createWebHistory } from "vue-router";
import { Progress } from "@wsvaio/utils";
import type { App } from "vue";
import routes from "@/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});

router.beforeEach(() => Progress.start());

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();
  if (auth.routes.length) return next();
  await auth.Routes();
  auth.routes.forEach(item => router.addRoute("administrator", item));
  next({ ...to, replace: true });
});

router.afterEach(() => Progress.clear());

export const install = (app: App) => app.use(router);

export default router;
