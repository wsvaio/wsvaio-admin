import { createAPI } from "@wsvaio/api";

const { DEV, VITE_BASE_API } = import.meta.env;
export const { post, get, put, patch, del, request, use } = createAPI<{
  success?: string;
  switchable?: boolean;
}>({
  baseURL: DEV ? "/api" : VITE_BASE_API,
  log: DEV,
});

// use("before")(async () => Progress.start());

// use("before")(async (ctx) => {
//   const auth = useAuthStore();
//   ctx.headers.Authorization = `Bearer ${auth.accessToken}`;
// });

// use("after")(async (ctx) => {
//   if (ctx.data?.code != 200) throw new Error(ctx.message);
// });

// use("after")(async ctx => (ctx.data = ctx.data.data));

// use("error")(async (ctx) => {
//   if (ctx.message === "Failed to fetch")
//     ctx.message = "网络错误";
// });

// use("final")(async ctx => Progress.done(!ctx.error));
// use("final")(async (ctx) => {
//   (ctx.message = ctx.data?.msg || ctx.data?.message || ctx.message);
//   if (ctx.data?.code == 500 || ctx.data?.status == 500 || ctx.status == 500) ctx.message = "服务器正忙，请稍后再试";
// });
// use("final")(async (ctx) => {
//   if (ctx.data?.code != 401 && ctx.data?.status != 401 && ctx.status != 401) return;
//   if (ctx.url.startsWith("/authorize/token")) return;
//   ctx.message = "登录超时，请重新登录";
//   const auth = useAuthStore();
//   auth.logout();
// });
// use("final")(async ctx =>
//   ctx.error
//     ? (ctx.message && ElNotification.error(ctx.message))
//     : (ctx.success && ElNotification.success(ctx.success)),
// );

// use("final")(async ctx =>
//   ctx.switchable && ElNotification({ type: ctx.data ? "success" : "error", message: ctx.data ? "操作成功" : "操作失败" }));
