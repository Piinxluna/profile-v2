import Image from 'next/image'
import LinkComponent from 'next/link'
import { Link } from 'lucide-react'

export default function UnderConstruction({ isThai }: { isThai: boolean }) {
  return (
    <div className='w-full min-h-[36rem] text-black dark:text-white flex justify-center items-center space-x-6 space-y-0 flex-wrap'>
      <Image
        src='/UnderConstruction.png'
        alt='Under construction'
        width={500}
        height={500}
        objectFit='contain'
        className='w-72 h-60 md:w-96 md:h-80'
      />
      <div>
        <p className='text-2xl font-semibold'>
          {isThai
            ? 'เว็บไซต์นี้กำลังอยู่ในช่วงพัฒนา'
            : 'This website is under construction!'}
        </p>
        <div className='flex space-x-3 my-2 text-lg'>
          <p>
            {isThai
              ? 'สามารถดู profile เก่าได้ที่'
              : 'You can view previous profile at'}
          </p>
          <div className='flex space-x-2 items-center hover:text-my-blue'>
            <Link size={20} />
            <LinkComponent href='https://piinxluna.github.io/profile/'>
              piinxluna.github.io/profile/
            </LinkComponent>
          </div>
        </div>
      </div>
    </div>
  )
}
