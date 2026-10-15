import { getRequestConfig } from 'next-intl/server'
import { locale as rootLocale } from 'next/root-params'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async ({ locale: requested }) => {
  // An explicit locale (e.g. getTranslations({ locale: 'en' })) wins,
  // otherwise use the [locale] segment of the current route
  const candidate = requested ?? (await rootLocale())
  const locale = hasLocale(routing.locales, candidate)
    ? candidate
    : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}`)).default,
  }
})
