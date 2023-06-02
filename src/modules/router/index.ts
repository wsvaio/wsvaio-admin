import { createRouter, createWebHistory } from "vue-router";
import { Progress } from "@wsvaio/utils";
import type { App } from "vue";
import routes from "@/routes";

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE),
	routes,
});

router.beforeEach(() => Progress.start());

// 注册路由
router.beforeEach(async (to, _from, next) => {
	const auth = useAuthStore();
	if (auth.routes.length) return next();
	await auth.addOrReplaceRoute().then(() => {
		next({ ...to, replace: true });
	}).catch(() => {
		next({ path: "/500", replace: true });
	});
});

// router.beforeEach(async (to, _from, next) => {
//   const auth = useAuthStore();
//   const routeStore = useRouteStore();
//   if (routeStore.routes.length <= 0 && auth.isLogin) {
//     await routeStore.syncRoutes().then(() => {
//       next({ ...to, replace: true });
//     }).catch(() => {
//       next({ path: "/500", replace: true });
//     });
//   }
//   else { next(); }
// });

router.afterEach(() => Progress.clear());

export const install = (app: App) => app.use(router);

export default router;
