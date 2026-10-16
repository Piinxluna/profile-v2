import { Link } from '@/i18n/navigation'
import { cn } from '@/style/utils'

interface Props {
  url: string
  label: string
  isActive: boolean
  onClick?: () => void
}

export default function NavBarItem({ url, label, isActive, onClick }: Props) {
  return (
    <Link
      href={url}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors',
        isActive
          ? 'font-bold text-primary'
          : 'font-medium text-secondary-text hover:text-primary-text'
      )}
    >
      {label}
    </Link>
  )
}
