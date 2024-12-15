import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Setting() {
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
    <div className='flex justify-between'>
      <div onClick={() => setIsThai((prev) => !prev)}>
        {isThai ? <p>TH</p> : <p>EN</p>}
      </div>
      <div onClick={() => setIsDarkMode((prev) => !prev)}>
        {isDarkMode ? <Sun /> : <Moon />}
      </div>
    </div>
  )
}
