import { createAPI } from "@wsvaio/api";
import { Progress } from "@wsvaio/utils";

const { DEV, VITE_BASE_API } = import.meta.env;
export const { post, get, put, patch, del, request, use } = createAPI<{
  success?: string;
}>({
  baseURL: DEV ? "/api" : VITE_BASE_API,
  log: DEV,
});

use("before")(async () => Progress.start());

use("before")(async (ctx) => {
  const auth = useAuthStore();
  ctx.headers.Authorization = `Bearer ${auth.accessToken}`;
});

use("after")(async (ctx) => {
  if (ctx.data?.code != 200) throw new Error(ctx.message);
});

use("after")(async ctx => (ctx.data = ctx.data.data));

use("error")(async (ctx) => {
  if (ctx.message === "Failed to fetch")
    ctx.message = "网络错误";
});

use("final")(async ctx => Progress.done(!ctx.error));
use("final")(async (ctx) => {
  (ctx.message = ctx.data?.msg || ctx.data?.message || ctx.message);
});
// use("final")(async (ctx) => {
//   const notification = useNotification();
//   ctx.error
//     ? (ctx.message && notification.error({ content: ctx.message }))
//     : (ctx.success && notification.success({ content: ctx.success }));
// });
