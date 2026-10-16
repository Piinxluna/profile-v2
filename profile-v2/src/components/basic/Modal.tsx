'use client'

import { useEffect, useId, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { IconX } from '@tabler/icons-react'
import { cn } from '@/style/utils'

interface Props {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

/**
 * Centered dialog built on the native <dialog> (focus trap + Escape to close for free).
 * - Controlled: the parent owns `open` and resets it in `onClose`
 * - Closes on Escape, the close button, or a click on the backdrop
 */
export default function Modal({ open, onClose, title, children, className }: Props) {
  const t = useTranslations('components.modal')
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()

    if (!open) return
    // Lock page scroll while the modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={title ? titleId : undefined}
      onClose={onClose}
      // The dialog element itself is only hit outside the inner panel, i.e. on the backdrop
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className={cn(
        'm-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl rounded-2xl border border-primary-border bg-surface-0 text-primary-text shadow-xl',
        'backdrop:bg-black/40 backdrop:backdrop-blur-sm',
        'open:animate-in open:fade-in open:zoom-in-95',
        className
      )}
    >
      <div className="relative flex flex-col gap-4 p-4 sm:p-8">
        {/* Always pinned to the top-right corner, with or without a title */}
        <button
          type="button"
          aria-label={t('close')}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-lg p-1 text-secondary-text transition-colors hover:cursor-pointer hover:bg-surface-2 hover:text-primary-text sm:top-5 sm:right-5"
        >
          <IconX className="icon-md" />
        </button>

        {title && (
          // Right padding keeps long titles clear of the close button
          <h2 id={titleId} className="pr-8 typo-heading-3 sm:typo-heading-2">
            {title}
          </h2>
        )}

        {children}
      </div>
    </dialog>
  )
}
