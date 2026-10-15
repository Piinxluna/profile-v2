'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { NavBarItem } from './_NavBarItem'
import { Setting } from './_Setting'

const pages = [
  { url: '/', key: 'home' },
  { url: '/projects', key: 'projects' },
] as const

export function NavBar() {
  const t = useTranslations('components.navBar')
  // Pathname without the locale, e.g. /th/projects/abc -> /projects/abc
  const pathname = usePathname()
  const activeUrl = '/' + pathname.split('/')[1]

  return (
    // Floating bar: centered by container-auto, stays at the top while scrolling
    <header className="container-auto sticky top-4 z-40 mt-4">
      <nav
        className="bg-surface-0/80 rounded-2xl border border-primary-border shadow-xs backdrop-blur"
      >
        {/* Main part: pages are always visible */}
        <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-4 lg:gap-6">
            {pages.map((page) => (
              <NavBarItem
                key={page.url}
                url={page.url}
                label={t(`pages.${page.key}`)}
                isActive={page.url === activeUrl}
              />
            ))}
          </div>

          <Setting />
        </div>

      </nav>
    </header>
  )
}
