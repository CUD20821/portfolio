import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    /*
     * 1. Bỏ qua các file tĩnh trong public (ví dụ: /cv.pdf, /favicon.ico)
     * 2. Bỏ qua các file nội bộ của Next.js (_next/static, _next/image)
     * 3. Bỏ qua các route API (/api)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",

    // Luôn áp dụng cho trang chủ và các trang ngôn ngữ
    "/",
    "/(vi|ja)/:path*",
  ],
};
