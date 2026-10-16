import { getTranslations } from 'next-intl/server'
import Card from '@/components/basic/Card'
import Chip from '@/components/basic/Chip'
import Divider from '@/components/basic/Divider'
import TimelineLogo from '@/feature/share/timeline/TimelineLogo'
import { richTags } from '@/lib/richText'
import { cn } from '@/style/utils'
import { educations } from './_educationData'

export default async function Education() {
  const t = await getTranslations('feature.education')

  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      <Divider text={t('title')} align="end" />

      {/* Timeline: logos are the nodes, cards sit to their right */}
      <ol className="flex flex-col gap-6">
        {educations.map((education, index) => {
          const school = t(`items.${education.key}.school`)
          const highlights: string[] = t.raw(`items.${education.key}.highlights`)

          return (
            <li key={education.key} className="relative flex gap-4 sm:gap-6">
              {/* Line connecting this node to the next one */}
              {index < educations.length - 1 && (
                <div
                  aria-hidden
                  className="absolute top-12 -bottom-6 left-6 hidden w-1 -translate-x-1/2 bg-primary-border sm:top-16 sm:left-8 sm:block"
                />
              )}

              <TimelineLogo
                logo={education.logo}
                logoText={education.logoText}
                bgColor={education.color.bg}
                alt={t('logoAlt', { school })}
              />

              <Card className="flex min-w-0 flex-1 flex-col gap-3">
                {/* Header: details on the left, GPAX pinned to the top-right */}
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="typo-caption text-secondary-text">
                      {t(`items.${education.key}.period`)}
                    </p>
                    <h3 className={cn('font-medium', education.color.text)}>
                      {t(`items.${education.key}.degree`)}
                    </h3>
                    <p className="typo-caption font-semibold text-secondary-text">{school}</p>
                  </div>

                  <Chip
                    text={t('gpax', { gpax: education.gpax.toFixed(2) })}
                    color="neutral"
                    className="shrink-0 whitespace-nowrap"
                  />
                </div>

                {highlights.length > 0 && (
                  <ul className="flex list-disc flex-col gap-1 pl-5 text-secondary-text">
                    {highlights.map((highlight, i) => (
                      <li key={highlight}>
                        {t.rich(`items.${education.key}.highlights.${i}`, richTags)}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
