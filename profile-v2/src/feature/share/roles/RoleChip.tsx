import { useTranslations } from 'next-intl'
import { Chip } from '@/components/basic/Chip'
import { roles, type RoleKey } from './_roleData'

/**
 * Chip for one of my roles, in that role's color, so About me and project cards match.
 * Works in both Server and Client Components.
 */
export function RoleChip({
  roleKey,
  overrideText,
  size,
  className,
}: {
  roleKey: RoleKey
  overrideText?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const t = useTranslations('feature.roles')
  const role = roles.find((r) => r.key === roleKey)

  return <Chip text={overrideText || t(roleKey)} color={role?.color} size={size} className={className} />
}
