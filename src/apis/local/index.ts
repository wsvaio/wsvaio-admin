import { get, post } from "./request";

// 登录认证
export const authorizeToken = post("/authorize/token");
// 获取商户树
export const sysPermissionGetMenuList = get("/sys/permission/get-menu-list");

export const sysPermissionGetMenuTree = get("/sys/permission/getMenuTree");

export const sysPermissionTreeList = get("/sys/permission/tree-list");
