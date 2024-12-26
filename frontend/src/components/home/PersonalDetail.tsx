import Image from 'next/image'
import ContactIcon from '../ContactIcon'

export default function PersonalDetail({ isThai }: { isThai: boolean }) {
  let contacts = require('@/data/contact.json')
  return (
    <div className='w-fit min-h-80 flex flex-col items-center lg:flex-row-reverse lg:items-end sm:p-12 sm:pt-6 text-black dark:text-white'>
      <div className='relative lg:-left-8 top-10 rounded-2xl shadow-lg rotate-3 lg:rotate-[4.5deg] w-[16rem] h-[20rem] sm:w-[24rem] sm:h-[32rem] overflow-hidden -z-20'>
        <Image
          src='/MyPicture1.jpg'
          alt='My picture'
          fill
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='w-fit flex flex-col items-center space-y-1 sm:space-y-4 text-xl sm:text-2xl font-medium dark:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]'>
        <p className='min-w-[70%]'>{isThai ? 'สวัสดีค่ะ! ดิฉัน' : "Hi! I'm"}</p>
        <div className='w-full max-w-72 sm:max-w-full sm:min-w-[30rem] flex flex-col space-y-3 text-4xl sm:text-6xl font-bold'>
          <h1>{isThai ? 'ชัญญา' : 'Chanya'}</h1>
          <h1 className='text-end'>
            {isThai ? 'สิทธินันทวิทย์' : 'Sittinuntawit'}
          </h1>
        </div>
        <div className='w-full flex items-start justify-between space-x-28'>
          <p className='text-center sm:text-start'>
            {isThai
              ? 'นิสิตวิศวกรรมคอมพิวเตอร์'
              : 'Computer Engineering Student'}
          </p>
          <div className='relative'>
            <div className='absolute right-5 -bottom-11 sm:-bottom-7 h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] rounded-full backdrop-blur bg-my-pink/60 dark:bg-my-pink-40/60 -z-10'></div>
          </div>
        </div>
        <div className='hidden py-4 sm:flex flex-row space-x-3'>
          {contacts.map((obj: Contact) => (
            <ContactIcon key={obj.type} contact={obj} isRounded />
          ))}
        </div>
        <div className='sm:hidden py-3 flex flex-row space-x-3'>
          {contacts.map((obj: Contact) => (
            <ContactIcon key={obj.type} contact={obj} isRounded size='sm' />
          ))}
        </div>
      </div>
    </div>
  )
}
