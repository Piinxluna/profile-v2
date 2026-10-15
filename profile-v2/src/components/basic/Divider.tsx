import { cn } from '@/style/utils'

type DividerAlign = 'start' | 'center' | 'end'

/**
 * Bold horizontal line, optionally with a heading on it.
 * - text: heading shown on the line; omit for a plain line
 * - align: where the text sits on the line (default: center)
 * NOTE: Takes the full width of its parent; inside a `flex items-center` parent, give the parent `w-full`
 */
export function Divider({
  text,
  align = 'center',
  className,
}: {
  text?: string
  align?: DividerAlign
  className?: string
}) {
  const lineClass = 'bg-primary-border h-2 rounded-full'

  if (!text) {
    return <div role="separator" className={cn(lineClass, 'w-full', className)} />
  }

  const line = <div aria-hidden className={cn(lineClass, 'flex-1')} />

  return (
    <div className={cn('flex w-full items-center gap-4 md:gap-6', className)}>
      {align !== 'start' && line}
      <h1 className="shrink-0 text-secondary-text">{text}</h1>
      {align !== 'end' && line}
    </div>
  )
}
