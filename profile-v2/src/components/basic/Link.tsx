import { cn } from '@/style/utils'
import { IconExternalLink } from '@tabler/icons-react'

interface Props {
  url: string
  text: string
  openNewTab?: boolean
  className?: string
}

/**
 * Text link with an external-link icon.
 * - openNewTab: open in a new tab (default: true)
 */
export default function Link({ url, text, openNewTab = true, className }: Props) {
  return (
    <a
      href={url}
      target={openNewTab ? '_blank' : undefined}
      rel={openNewTab ? 'noopener noreferrer' : undefined}
      className={cn('flex w-fit items-center gap-1 typo-link', className)}
    >
      {text}
      <IconExternalLink className="icon-xs" />
    </a>
  )
}
