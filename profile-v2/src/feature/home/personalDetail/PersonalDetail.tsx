import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { contacts } from '@/feature/home/personalDetail/_contactData'
import ContactIcon from './_ContactIcon'

export default async function PersonalDetail() {
  const t = await getTranslations('feature.personalDetail')

  return (
    <section className="flex min-h-80 w-fit flex-col items-center sm:p-12 sm:pt-6 lg:flex-row-reverse lg:items-end">
      {/* Image */}
      <div className="relative top-10 -z-20 h-80 w-64 rotate-3 overflow-hidden rounded-2xl shadow-lg sm:h-128 sm:w-96 lg:-left-8 lg:rotate-[4.5deg]">
        <Image
          src="/my-picture-1.jpg"
          alt="my-picture"
          fill
          sizes="(min-width: 640px) 24rem, 16rem"
          className="object-cover"
          priority
        />
      </div>

      {/* Detail */}
      <div className="flex w-fit flex-col items-center gap-1 sm:gap-4 dark:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
        <p className="min-w-[70%] text-xl font-medium sm:text-2xl">{t('greeting')}</p>

        <div className="flex w-full max-w-72 flex-col gap-3 sm:max-w-full sm:min-w-120">
          <h1 className="text-4xl font-bold sm:text-6xl">{t('firstName')}</h1>
          <h1 className="text-end text-4xl font-bold sm:text-6xl">{t('lastName')}</h1>
        </div>

        <div className="flex w-full items-start justify-between gap-28">
          <p className="text-center text-xl font-medium sm:text-start sm:text-2xl">{t('role')}</p>
          {/* Decorate circle */}
          <div className="relative">
            <div className="absolute right-5 -bottom-11 -z-10 size-16 rounded-full bg-primary/60 backdrop-blur sm:-bottom-7 sm:size-18" />
          </div>
        </div>

        {/* Contact icons */}
        <div className="hidden flex-row gap-3 py-4 sm:flex">
          {contacts.map((contact) => (
            <ContactIcon key={contact.type} contact={contact} isRounded />
          ))}
        </div>

        <div className="flex flex-row gap-3 py-3 sm:hidden">
          {contacts.map((contact) => (
            <ContactIcon key={contact.type} contact={contact} isRounded size="sm" />
          ))}
        </div>
      </div>
    </section>
  )
}
