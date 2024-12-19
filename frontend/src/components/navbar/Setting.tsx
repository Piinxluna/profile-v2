import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import TogglePill from '../TogglePill'

export default function Setting() {
  const colors = resolveConfig(tailwindConfig).theme.colors

  const [isThai, setIsThai] = useState(
    localStorage.getItem('language') === 'TH'
  )
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    if (isThai) {
      document.documentElement.classList.add('TH')
      localStorage.setItem('language', 'TH')
    } else {
      document.documentElement.classList.remove('TH')
      localStorage.setItem('language', 'EN')
    }
  }, [isThai])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <div className='flex justify-between items-center space-x-4'>
      <TogglePill
        selectedItem={isThai ? 'TH' : 'EN'}
        items={['TH', 'EN']}
        onSelect={(item: string) => {
          setIsThai(item === 'TH')
          location.reload()
        }}
        size='sm'
      />
      <div
        className='text-my-pink fill-my-pink dark:text-my-indigo-20'
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        <Moon fill={colors['my-indigo'][20]} className='hidden dark:block' />
        <Sun fill={colors['my-pink']} className='block dark:hidden' />
      </div>
    </div>
  )
}
