import { getTranslations } from 'next-intl/server'
import Card from '@/components/basic/Card'
import Chip from '@/components/basic/Chip'
import Divider from '@/components/basic/Divider'
import { richTags } from '@/lib/richText'
import { experiences } from './_experienceData'
import CompanyLogo from './_CompanyLogo'
import { cn } from '@/style/utils'

export default async function Experience() {
  const t = await getTranslations('feature.experience')

  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      <Divider text={t('title')} align="start" />

      {/* Timeline: logos are the nodes, cards sit to their right */}
      <ol className="flex flex-col gap-6">
        {experiences.map((experience, index) => {
          const company = t(`items.${experience.key}.company`)
          const highlights: string[] = t.raw(`items.${experience.key}.highlights`)

          return (
            <li key={experience.key} className="relative flex gap-4 sm:gap-6">
              {/* Line connecting this node to the next one */}
              {index < experiences.length - 1 && (
                <div
                  aria-hidden
                  className="absolute top-12 -bottom-6 left-6 w-1 -translate-x-1/2 bg-primary-border sm:top-16 sm:left-8"
                />
              )}

              <CompanyLogo experience={experience} alt={t('logoAlt', { company })} />

              <Card className={'flex min-w-0 flex-1 flex-col gap-3'}>
                <div className="flex flex-col gap-1">
                  <p className="typo-caption text-secondary-text">
                    {t(`items.${experience.key}.period`)}
                  </p>
                  <h3 className={cn('font-medium', experience.color.text)}>
                    {t(`items.${experience.key}.role`)}
                  </h3>
                  <p className="typo-caption font-semibold text-secondary-text">{company}</p>
                </div>

                <ul className="flex list-disc flex-col gap-1 pl-5 text-secondary-text">
                  {highlights.map((highlight, i) => (
                    <li key={highlight}>
                      {t.rich(`items.${experience.key}.highlights.${i}`, richTags)}
                    </li>
                  ))}
                </ul>

                {experience.techStack && (
                  <div className="flex flex-wrap items-center gap-1 pt-1">
                    <span className="typo-caption text-secondary-text">{t('techStack')}: </span>
                    {experience.techStack.map((tech) => (
                      <Chip key={tech} text={tech} color="neutral" size="sm" />
                    ))}
                  </div>
                )}
              </Card>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
