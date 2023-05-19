import { createRouter, createWebHistory } from "vue-router";
import { Progress } from "@wsvaio/utils";
import type { App } from "vue";
import routes from "@/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});

router.beforeEach(() => Progress.start());

router.afterEach(() => Progress.clear());

export const install = (app: App) => app.use(router);

export default router;
