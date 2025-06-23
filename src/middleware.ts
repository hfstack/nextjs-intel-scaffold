import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/dictionaries';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 如果路径中没有语言前缀，重定向到默认语言
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // 匹配所有路径，除了 api、静态文件等
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}; 