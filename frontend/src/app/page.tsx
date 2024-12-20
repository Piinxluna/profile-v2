'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isThai, setIsThai] = useState(true)

  useEffect(() => {
    setIsThai(localStorage.getItem('language') === 'TH')
  }, [isThai])

  return (
    <div className='w-full h-full text-black dark:text-white flex justify-center items-center'>
      <div>
        {isThai
          ? 'เว็บไซต์นี้กำลังอยู่ในช่วงพัฒนา'
          : 'This website is under construction!'}
      </div>
    </div>
  )
}
