/**
 * This file contains the configuration for internationalization (i18n) in the project.
 * - Defines the supported locales and their corresponding names, native names, and flags.
 */
export type Locale = (typeof locales)[number]
export type LocaleNames = Record<
  Locale,
  { name: string; nativeName: string; flag: React.ReactNode }
>

export const locales = ['th', 'en'] as const
export const defaultLocale: Locale = 'th'

export const localeNames: Record<
  Locale,
  { name: string; nativeName: string; shortName: string }
> = {
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
    shortName: 'TH',
  },
  en: {
    name: 'English',
    nativeName: 'English',
    shortName: 'EN',
  },
}
