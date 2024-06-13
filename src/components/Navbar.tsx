'use client'

import { usePathname } from 'next/navigation'

import NavbarItem from '@/components/NavbarItem'
import LanguageSelector from '@/components/LanguageSelector'

export default function Navbar() {
  const pathname = usePathname().split('/')[1]

  const pages = require('@/data/page.json')
  return (
    <div className='fixed top-0 w-full h-14 bg-white px-14 flex flex-row items-center justify-between'>
      <div className='flex flex-row space-x-8'>
        {pages.map((element: any) => (
          <NavbarItem
            pageData={element}
            active={pathname === element.href}
            key={element.href}
          />
        ))}
      </div>

      <div>hi</div>
    </div>
  )
}
