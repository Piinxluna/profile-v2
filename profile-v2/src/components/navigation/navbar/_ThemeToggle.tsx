'use client'

import { useLayoutEffect, useSyncExternalStore } from 'react'
import { useTranslations } from 'next-intl'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { cn } from '@/style/utils'
import { applyTheme, getPreferredTheme, saveTheme, type Theme } from '@/lib/theme'

// Reads the theme from <html data-theme>, which the inline script in the root layout sets
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

const getSnapshot = () =>
  document.documentElement.getAttribute('data-theme') as Theme | null
const getServerSnapshot = () => null

export function ThemeToggle({ className }: { className?: string }) {
  const t = useTranslations('components.themeToggle')
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  // React's dev-only Strict Mode remount clears attributes on <html>; re-apply them
  useLayoutEffect(() => applyTheme(getPreferredTheme()), [])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => saveTheme(next)}
      aria-label={t(next === 'dark' ? 'toDark' : 'toLight')}
      title={t(next === 'dark' ? 'toDark' : 'toLight')}
      className={cn(
        'text-secondary-text hover:bg-surface-2 hover:text-primary-text inline-flex size-9 items-center justify-center rounded-full transition-colors',
        className
      )}
    >
      {/* Theme is unknown on the server; render the icon only after hydration */}
      {theme === 'dark' && <IconSun className="size-5" />}
      {theme === 'light' && <IconMoon className="size-5" />}
    </button>
  )
}
