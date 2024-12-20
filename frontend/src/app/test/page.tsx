'use client'

import { useEffect, useState } from 'react'

export default function Test() {
  const [isThai, setIsThai] = useState(true)

  useEffect(() => {
    setIsThai(localStorage.getItem('language') === 'TH')
  }, [])

  return (
    <div className='w-full h-full'>
      <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
        <h1 className='text-2xl font-bold'>Hello, World!</h1>
        <p>This text changes color based on the theme.</p>
        <p>{isThai ? 'ภาษาไทย' : 'English'}</p>
      </div>
    </div>
  )
}
