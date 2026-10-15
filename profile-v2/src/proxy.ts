import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

/**
 * Adds the locale to paths that don't have one, e.g. / -> /th, /projects -> /en/projects
 * 1. Locale the visitor picked before (NEXT_LOCALE cookie)
 * 2. Browser language (Accept-Language), if it's th or en
 * 3. Otherwise `defaultLocale` from i18n/config.ts
 */
export default createMiddleware(routing)

export const config = {
  // Skip Next.js internals and files with an extension (icon.png, favicon.ico, ...)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
