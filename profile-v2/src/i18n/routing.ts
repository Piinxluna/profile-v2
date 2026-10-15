import { defineRouting } from 'next-intl/routing'
import { locales, defaultLocale } from './config'

export const routing = defineRouting({
  locales,
  // Used when a first-time visitor's browser language is neither th nor en
  defaultLocale,
  localePrefix: 'always',
})
