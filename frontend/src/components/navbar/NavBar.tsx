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
    <div className='bg-white dark:bg-my-indigo-90'>
      <div className='h-14 relative w-full flex flex-row justify-end space-x-8 px-10 py-2'>
        <div className='hidden md:flex justify-between w-full'>
          <div className='flex flex-row items-center space-x-8'>
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
        <div className='block md:hidden w-fit my-auto dark:text-white'>
          <Menu
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden w-full border-t border-my-gray-20 dark:border-my-gray-70 px-6 py-4'>
          {pages.map((obj) => (
            <div className='w-full px-4 py-2 rounded-xl hover:bg-my-indigo-10 dark:hover:bg-my-indigo'>
              <NavBarItem
                page={obj}
                isActive={obj.url === '/' + pathname.split('/')[1]}
                key={obj.url}
              />
            </div>
          ))}
          <hr className='my-3 dark:border-my-gray-70' />
          <Setting />
        </div>
      )}
    </div>
  )
}
