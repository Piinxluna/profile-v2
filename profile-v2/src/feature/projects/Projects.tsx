import { getTranslations } from 'next-intl/server'
import { Divider } from '@/components/basic/Divider'
import { ProjectList } from './_ProjectList'

export async function Projects() {
  const t = await getTranslations('feature.projects')

  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      {/* //TODO: Add a filter / search functionality */}
      <ProjectList />
    </section>
  )
}
