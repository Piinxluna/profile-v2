'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { localeNames, locales, type Locale } from '@/i18n/config'
import { TogglePill } from '../../basic/TogglePill'
import { ThemeToggle } from './_ThemeToggle'

const localeItems = locales.map((locale) => ({
  value: locale,
  label: localeNames[locale].shortName,
}))

export function Setting() {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex items-center justify-between gap-1 lg:gap-2">
      <TogglePill
        size="sm"
        selectedItem={locale}
        items={localeItems}
        // Same page in the other locale, e.g. /th/project -> /en/project
        onSelect={(next) => router.replace(pathname, { locale: next })}
      />
      <ThemeToggle />
    </div>
  )
}
