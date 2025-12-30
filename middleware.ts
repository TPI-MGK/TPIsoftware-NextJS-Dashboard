import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

/*
使用 `authConfig` 物件初始化 NextAuth.js 並導出 `auth` 屬性。您還使用了來自中介軟體的 `matcher` 選項來指定它應該在特定的路徑上運行。
受保護的路由甚至在中介軟體驗證身份之前不會開始渲染，從而增強了您應用程式的安全性和效能。
*/

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*.png$).*)"],
};
