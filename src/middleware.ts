import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

import { routing } from './i18n/routing';

export default function middleware(request: NextRequest) {
  const middleware = createMiddleware(routing);
  return middleware(request);
}

export const config = {
  matcher: ['/', '/(ko|en)/:path*', '/((?!_next|.*\\..*).*)'],
};
