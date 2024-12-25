import Image from 'next/image'
import ContactIcon from '../ContactIcon'

export default function PersonalDetail({ isThai }: { isThai: boolean }) {
  let contacts = require('@/data/contact.json')
  return (
    <div className='w-fit min-h-80 flex items-end p-12 pt-6 text-black dark:text-white'>
      <div className='w-fit flex flex-col items-center space-y-4 text-2xl font-medium'>
        <p className='min-w-[70%]'>
          {isThai ? 'ยินดีต้อนรับเข้าสู่ Profile ของ' : "Hi! I'm"}
        </p>
        <div className='w-full min-w-[30rem] flex flex-col space-y-3 text-6xl font-bold dark:drop-shadow'>
          <h1>{isThai ? 'ชัญญา' : 'Chanya'}</h1>
          <h1 className='text-end'>
            {isThai ? 'สิทธินันทวิทย์' : 'Sittinuntawit'}
          </h1>
        </div>
        <div className='w-full flex justify-between space-x-28'>
          <p>
            {isThai
              ? 'นิสิตวิศวกรรมคอมพิวเตอร์'
              : 'Computer Engineering Student'}
          </p>
          <div className='relative'>
            <div className='absolute right-5 -bottom-1 h-[4.5rem] w-[4.5rem] rounded-full backdrop-blur bg-my-pink/60 dark:bg-my-pink-40/60 -z-10'></div>
          </div>
        </div>
        <div className='py-4 flex flex-row space-x-3'>
          {contacts.map((obj: Contact) => (
            <ContactIcon key={obj.type} contact={obj} isRounded />
          ))}
        </div>
      </div>
      <div className='relative -left-8 top-10 rounded-2xl shadow-lg rotate-[4.5deg] w-[24rem] h-[32rem] overflow-hidden -z-20'>
        <Image
          src='/MyPicture1.jpg'
          alt='My picture'
          fill
          objectFit='cover'
          quality={100}
        />
      </div>
    </div>
  )
}
