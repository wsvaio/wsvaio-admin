import { Progress } from "@wsvaio/utils";
import { createAPI } from "@wsvaio/api";

const { get, use } = createAPI<{
  success?: string;
}>({
  baseURL: "https://restapi.amap.com",
  log: import.meta.env.DEV, // 控制台是否打印日志
});

// 请求发出前
use("before")(async () => Progress.start());
use("before")(async (ctx) => {
  ctx.q.key = import.meta.env.VITE_GAODE_WEBAPI_KEY;
});
use("after")(async (ctx) => {
  if (ctx.data?.status == 0) throw new Error(ctx.data?.info || "请求出错");
});
use("final")(async ctx => Progress.done(!ctx.error));

// export const ipPosition = get("/ip");

// export const inputtips = get("/assistant/inputtips");
// // 行政区域查询
// export const district = get({
//   url: "/config/district",
//   q: {
//     subdistrict: 4,

//     page: 1,
//     offset: 100,
//   },
// });

// 搜索POI 2.0
export const placeText = get("/v5/place/text");
// 输入提示
export const inputtips = get("/v3/assistant/inputtips");
// 逆地理编码
export const geocodeRegeo = get({
  url: "/v3/geocode/regeo",
  config: true,
  afters: [
    async (ctx) => {
      if (!ctx.data.regeocode.formatted_address) return;
      ctx.data.regeocode.formatted_address.length <= 0 && (ctx.data.regeocode.formatted_address = "");
    },
  ],
});
// 地理编码
export const geocodeGeo = get("/v3/geocode/geo");
