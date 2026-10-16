'use client'

import { useTranslations } from 'next-intl'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  type TablerIcon,
} from '@tabler/icons-react'
import { cn } from '@/style/utils'
import type { Contact } from '@/feature/home/personalDetail/_contactData'
import ToolTip from '@/components/basic/ToolTip'
import { toast } from '@/components/basic/Toast'

const icons: Record<Contact['type'], TablerIcon> = {
  mail: IconMail,
  phone: IconPhone,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  instagram: IconBrandInstagram,
}

const sizes = {
  sm: { box: 'size-10', icon: 22 },
  md: { box: 'size-14', icon: 30 },
  lg: { box: 'size-20', icon: 44 },
}

interface Props {
  contact: Contact
  isRounded?: boolean
  size?: keyof typeof sizes
  className?: string
}

export default function ContactIcon({ contact, isRounded, size = 'md', className }: Props) {
  const t = useTranslations('feature.contactIcon')

  const Icon = icons[contact.type]
  const classes = cn(
    'flex items-center justify-center bg-primary text-quarterly-text transition-colors hover:cursor-pointer hover:bg-primary-hover',
    sizes[size].box,
    isRounded ? 'rounded-full' : 'rounded-lg',
    className
  )

  return (
    <div className="group relative flex flex-col items-center">
      {contact.url ? (
        <a
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contact.value}
          className={classes}
        >
          <Icon size={sizes[size].icon} />
        </a>
      ) : (
        <button
          type="button"
          aria-label={t('copy', { value: contact.value })}
          className={classes}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(contact.value)
              toast(t('copied', { value: contact.value }))
            } catch {
              // e.g. clipboard permission denied, or the page isn't served over https
              toast(t('copyFailed', { value: contact.value }), 'error')
            }
          }}
        >
          <Icon size={sizes[size].icon} />
        </button>
      )}
      <ToolTip text={contact.value} />
    </div>
  )
}
