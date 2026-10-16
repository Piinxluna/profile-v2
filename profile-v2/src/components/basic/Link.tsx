import { cn } from '@/style/utils'
import { IconExternalLink } from '@tabler/icons-react'

/**
 * Bordered surface that groups related content.
 * - interactive: hover lift + primary border, for cards placed inside a button or link
 */
export function Link({
  url,
  text,
  className
}: {
  url: string
  text: string
  className?: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("typo-link flex w-fit items-center gap-1", className)}
    >
      {text}
      <IconExternalLink className="icon-xs" />
    </a>
  )
}
