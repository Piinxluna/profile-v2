import { cn } from '@/style/utils'

interface Props {
  children: React.ReactNode
  interactive?: boolean
  className?: string
}

/**
 * Bordered surface that groups related content.
 * - interactive: hover lift + primary border, for cards placed inside a button or link
 */
export default function Card({ children, interactive, className }: Props) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-primary-border bg-surface-0 p-5 shadow-xs sm:p-6',
        interactive &&
          'transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}
