'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { Menu } from 'lucide-react'

import NavBarItem from './NavBarItem'
import Setting from './Setting'

const pages = [
  { url: '/', label: 'Home' },
  { url: '/about-me', label: 'About me' },
  { url: '/experience', label: 'Experience' },
  { url: '/project', label: 'Project' },
  { url: '/activity', label: 'Activity' },
]
export default function NavBar() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='relative w-full flex flex-row justify-between items-center space-x-8 px-10 py-2 bg-white'>
        <Link href='/' className='relative w-12 h-11'>
          <Image
            src={'/logo.png'}
            alt='logo'
            fill
            objectFit='contain'
            quality={100}
            priority={true}
          />
        </Link>
        <div className='hidden md:flex justify-between w-full'>
          <div className='flex flex-row space-x-8'>
            {pages.map((obj) => (
              <NavBarItem
                page={obj}
                isActive={obj.url === '/' + pathname.split('/')[1]}
                key={obj.url}
              />
            ))}
          </div>
          <Setting />
        </div>
        <Menu
          className='block md:hidden w-fit'
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
      </div>
      {isOpen && (
        <div className='md:hidden w-full border-t border-my-gray-20 bg-white px-6 py-4'>
          {pages.map((obj) => (
            <div className='w-full px-4 py-2 rounded-xl hover:bg-my-indigo-10'>
              <NavBarItem
                page={obj}
                isActive={obj.url === '/' + pathname.split('/')[1]}
                key={obj.url}
              />
            </div>
          ))}
          <hr className='my-3' />
          <Setting />
        </div>
      )}
    </>
  )
}
