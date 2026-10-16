import { getTranslations } from 'next-intl/server'
import Divider from '@/components/basic/Divider'
import ProjectGallery from './_ProjectGallery'

export default async function Projects() {
  const t = await getTranslations('feature.projects')

  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      <Divider text={t('title')} align="end" />
      <ProjectGallery />
    </section>
  )
}
