import { Link } from '@/i18n/navigation'
import { cn } from '@/style/utils'

export function NavBarItem({
  url,
  label,
  isActive,
  onClick,
}: {
  url: string
  label: string
  isActive: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={url}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors',
        isActive
          ? 'text-primary font-bold'
          : 'text-secondary-text hover:text-primary-text font-medium'
      )}
    >
      {label}
    </Link>
  )
}
