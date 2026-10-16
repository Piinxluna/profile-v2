import { getTranslations } from 'next-intl/server'
import { IconExternalLink } from '@tabler/icons-react'
import { Card } from '@/components/basic/Card'
import { Chip } from '@/components/basic/Chip'
import { Divider } from '@/components/basic/Divider'
import { certifications, languages, technicalSkills } from './_skillData'
import { cn } from '@/style/utils'

export async function Skill() {
  const t = await getTranslations('feature.skill')

  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      <Divider text={t('title')} align="start" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Language & Certification */}
        <Card className="flex flex-col gap-5">
          <h3>{t('languageCert.title')}</h3>

          {/* Language */}
          <div className="flex flex-col gap-2">
            <h4 className="text-secondary-text">{t('languageCert.languages')}</h4>

            <ul className="flex flex-col gap-2">
              {languages.map((language) => (
                <li key={language.key} className="flex items-center justify-between gap-4">
                  <span className="typo-body">{t(`languages.${language.key}.name`)}</span>
                  <Chip text={t(`languages.${language.key}.level`)} color={language.color} />
                </li>
              ))}
            </ul>
          </div>

          {/* Certification */}
          <div className="flex flex-col gap-2">
            <h4 className="text-secondary-text">{t('languageCert.certification')}</h4>

            <ul className="flex flex-col gap-2">
              {certifications.map((cert) => (
                <li key={cert.key} className="flex flex-wrap items-center justify-between gap-2">
                  <span className="typo-body">
                    {t(`certifications.${cert.key}.name`)}

                    <span className="text-tertiary-text">
                      {' - '}
                      {t(`certifications.${cert.key}.issuer`)}
                    </span>
                  </span>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover typo-caption flex items-center gap-1 font-semibold transition-colors"
                    >
                      {t('verify')}
                      <IconExternalLink className="icon-xs" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Technical skills */}
        <Card className="flex flex-col gap-5">
          <h3>{t('technical.title')}</h3>
          {technicalSkills.map(({ icon: Icon, ...group }) => (
            <div key={group.key} className="flex flex-col gap-2">
              <h4 className={cn("flex items-center gap-2 text-secondary-text", group.color?.text)}>
                {Icon && <Icon className="icon-sm shrink-0" />}
                {t(`technical.groups.${group.key}`)}
              </h4>

              <div className="flex flex-wrap gap-1">
                {group.items.map((item) => (
                  <Chip key={item} text={item} color="neutral" />
                ))}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  )
}
