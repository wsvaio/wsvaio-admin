import { post } from "./request";

// 登录认证
export const authorizeToken = post("/authorize/token");
