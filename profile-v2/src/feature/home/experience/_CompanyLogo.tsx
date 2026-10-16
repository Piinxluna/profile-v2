import Image from 'next/image'
import { cn } from '@/style/utils'
import type { Experience as ExperienceItem } from './_experienceData'

interface Props {
  experience: ExperienceItem
  alt: string
}

export default function CompanyLogo({ experience, alt }: Props) {
  const box =
    'relative z-10 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-sm sm:size-16 sm:rounded-2xl'

  if (experience.logo) {
    return (
      <div className={cn(box, 'bg-white')}>
        <Image src={experience.logo} alt={alt} fill sizes="2rem" className="object-contain p-2.5" />
      </div>
    )
  }

  // Placeholder until the real logo is added
  return (
    <div
      aria-hidden
      className={cn(
        box,
        experience.color.bg || 'bg-slate-900',
        'text-md font-bold text-white sm:text-base'
      )}
    >
      {experience.logoText}
    </div>
  )
}
