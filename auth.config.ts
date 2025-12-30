import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // `authorized` 回呼函數用於驗證請求是否有權限通過 Next.js 中介軟體存取頁面。
    // 它在請求完成之前被呼叫，並接收一個帶有 `auth` 和 `request` 屬性的物件。`auth` 屬性包含使用者的會話，而 `request` 屬性包含傳入的請求。
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        // 將未驗證的使用者重新導向到登入頁面
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  // `providers` 選項是您列出不同登入選項的陣列。目前，它是一個空陣列以滿足 NextAuth 的配置。
  providers: [],
} satisfies NextAuthConfig;
