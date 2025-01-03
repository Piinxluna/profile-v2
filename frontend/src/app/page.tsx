'use client'

import { useEffect, useState } from 'react'
import UnderConstruction from '@/components/UnderConstruction'
import PersonalDetail from '@/components/home/PersonalDetail'

export default function Home() {
  const [isThai, setIsThai] = useState(true)

  useEffect(() => {
    setIsThai(localStorage.getItem('language') === 'TH')
  }, [isThai])

  return (
    <div className='w-full h-full flex flex-col space-y-24 justify-center items-center'>
      <PersonalDetail isThai={isThai} />
      <div className='w-full'>
        <hr />
      </div>
      <UnderConstruction isThai={isThai} />
    </div>
  )
}
