'use client'

export default function Home() {
  const isThai = localStorage.getItem('language') === 'TH'

  return (
    <div className='w-full h-full'>
      <div>
        {isThai
          ? 'เว็บไซต์นี้กำลังอยู่ในช่วงพัฒนา'
          : 'This website is under construction!'}
      </div>
    </div>
  )
}
