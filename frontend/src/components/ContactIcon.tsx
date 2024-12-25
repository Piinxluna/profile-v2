'ues client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Mail, Linkedin, Phone, Instagram } from 'lucide-react'
import ToolTip from './ToolTip'

export default function ContactIcon({
  contact,
  isRounded,
  size,
  className,
}: {
  contact: Contact
  isRounded?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const [isClicked, setIsClicked] = useState(false)
  let IconComponent
  switch (contact.type) {
    case 'github':
      IconComponent = Github
      break
    case 'mail':
      IconComponent = Mail
      break
    case 'linkedin':
      IconComponent = Linkedin
      break
    case 'phone':
      IconComponent = Phone
      break
    case 'instagram':
      IconComponent = Instagram
      break
  }
  if (!IconComponent) {
    return
  }

  let sizeIcon = 30
  let sizeClass = 'w-14 h-14'
  if (size === 'sm') {
    sizeClass = 'w-10 h-10'
    sizeIcon = 22
  } else if (size === 'lg') {
    sizeClass = 'w-20 h-20'
    sizeIcon = 44
  }
  const classes = `bg-my-pink dark:bg-my-pink-20 flex items-center justify-center hover:cursor-pointer ${sizeClass} ${
    isRounded ? 'rounded-full' : 'rounded-lg'
  } ${className}`

  return (
    <div className='group relative flex flex-col items-center'>
      {contact.url ? (
        <Link href={contact.url} className={classes} target='_blank'>
          <IconComponent
            color='white'
            className='block dark:hidden'
            size={sizeIcon}
          />
          <IconComponent
            color='black'
            className='hidden dark:block'
            size={sizeIcon}
          />
        </Link>
      ) : (
        <div
          className={classes}
          onClick={() => {
            setIsClicked(true)
            navigator.clipboard.writeText(contact.value)
          }}
        >
          <IconComponent
            color='white'
            className='block dark:hidden'
            size={sizeIcon}
          />
          <IconComponent
            color='black'
            className='hidden dark:block'
            size={sizeIcon}
          />
        </div>
      )}
      <ToolTip text={isClicked ? 'Copied' : contact.value} />
    </div>
  )
}
