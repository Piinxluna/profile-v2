'use client'

import { useEffect, useState } from 'react'
import UnderConstruction from '@/components/UnderConstruction'

export default function Project() {
  const [isThai, setIsThai] = useState(true)

  useEffect(() => {
    setIsThai(localStorage.getItem('language') === 'TH')
  }, [isThai])

  return (
    <div className='w-full h-full flex flex-col space-y-24 justify-center items-center'>
      <UnderConstruction isThai={isThai} />
    </div>
  )
}
