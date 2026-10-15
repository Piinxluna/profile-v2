import { Divider } from '@/components/basic/Divider'
import { getTranslations } from 'next-intl/server'

export async function AboutMe() {
  const t = await getTranslations('feature.aboutMe')

  return (
    <section className="w-full">
      <Divider text={t('title')} align='end' />
    </section>
  )
}
