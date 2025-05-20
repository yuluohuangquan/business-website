import createMiddleware from 'next-intl/middleware';
import { locales, pathnames, defaultLocale } from './navigation';

const intlMiddleware = createMiddleware({
  defaultLocale,
  pathnames,
  locales,
  localeDetection: true
});

// 创建一个中间件函数，它会跳过对 /api/ 的请求
export default function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/api/')) {
    return; // 直接传递给下一个中间件或路由处理器
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/((?!api|_next|.*\\..*).*)", '/(en|zh)/:path*'],
};