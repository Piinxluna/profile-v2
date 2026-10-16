import { cn } from '@/style/utils'

/**
 * Bordered surface that groups related content.
 * - interactive: hover lift + primary border, for cards placed inside a button or link
 */
export function Card({
  children,
  interactive,
  className,
}: {
  children: React.ReactNode
  interactive?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'bg-surface-0 border-primary-border rounded-2xl border p-5 shadow-xs sm:p-6',
        interactive &&
          'hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}
