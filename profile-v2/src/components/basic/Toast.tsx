'use client'

import { useSyncExternalStore } from 'react'
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-react'
import { cn } from '@/style/utils'

/**
 * Simple toast notifications.
 * - Render <Toaster /> once (in the root layout)
 * - Call toast('Saved') from any Client Component or event handler
 */
type ToastVariant = 'success' | 'error'

interface ToastItem {
  id: number
  message: string
  variant: ToastVariant
}

const DURATION_MS = 3000
const MAX_TOASTS = 3

let toasts: ToastItem[] = []
let nextId = 0
const listeners = new Set<() => void>()

function setToasts(next: ToastItem[]) {
  toasts = next
  listeners.forEach((listener) => listener())
}

// Create function to add a toast, which can be called from anywhere in the app
export function toast(message: string, variant: ToastVariant = 'success') {
  const id = nextId++
  // Re-render to show toast: Keep only the newest MAX_TOASTS; older ones are dropped right away
  setToasts([...toasts, { id, message, variant }].slice(-MAX_TOASTS))
  setTimeout(() => {
    // Remove the toast after some time: Skip if it was already dropped by the cap, to avoid a needless re-render
    if (toasts.some((t) => t.id === id)) {
      setToasts(toasts.filter((t) => t.id !== id))
    }
  }, DURATION_MS)
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
const getSnapshot = () => toasts
const getServerSnapshot = (): ToastItem[] => []

const icons = {
  success: IconCircleCheck,
  error: IconAlertCircle,
}

export function Toaster() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (
    // Always rendered, so screen readers announce toasts as they're added
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed right-0 bottom-6 z-50 flex flex-col items-end gap-2 px-4 sm:px-6"
    >
      {items.map((item) => {
        const Icon = icons[item.variant]
        return (
          <div
            key={item.id}
            className="bg-primary-text text-surface-0 animate-in fade-in slide-in-from-right-4 flex max-w-sm items-center gap-2.5 rounded-lg px-4 py-3 text-base font-medium shadow-lg"
          >
            <Icon
              className={cn(
                'icon-sm shrink-0',
                item.variant === 'success' ? 'text-primary' : 'text-destructive'
              )}
            />
            {item.message}
          </div>
        )
      })}
    </div>
  )
}
