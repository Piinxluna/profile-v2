import Image from 'next/image'
import { cn } from '@/style/utils'

interface Props {
  // Image path under /public; a colored placeholder with `logoText` is shown until it's set
  logo?: string
  logoText: string
  // Placeholder background, written as a full class so Tailwind picks it up
  bgColor?: string
  alt: string
}

/**
 * Logo box used as a node on the Experience / Education timelines.
 * - z-10 keeps it above the line connecting the nodes
 * - Hidden below `sm`, where the cards take the full width; hide the connecting line there too
 */
export default function TimelineLogo({ logo, logoText, bgColor, alt }: Props) {
  const box =
    'relative z-10 hidden sm:flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-sm sm:size-16 sm:rounded-2xl'

  if (logo) {
    return (
      <div className={cn(box, 'bg-white')}>
        <Image src={logo} alt={alt} fill sizes="2rem" className="object-contain p-2.5" />
      </div>
    )
  }

  // Placeholder until the real logo is added
  return (
    <div
      aria-hidden
      className={cn(box, bgColor || 'bg-slate-900', 'text-md font-bold text-white sm:text-base')}
    >
      {logoText}
    </div>
  )
}
