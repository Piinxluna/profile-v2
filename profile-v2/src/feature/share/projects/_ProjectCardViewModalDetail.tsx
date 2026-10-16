'use client'

import { useTranslations } from 'next-intl'
import { Chip } from '@/components/basic/Chip'
import { richTags } from '@/lib/richText'
import { RoleChip } from '@/feature/share/roles/RoleChip'
import type { Project } from './_projectData'
import { Link } from '@/components/basic/Link'

export function ProjectCardViewModalDetail({ project }: { project: Project }) {
  const t = useTranslations('feature.projects')
  const details: string[] = t.raw(`items.${project.key}.detail`)

  return (
    <div className="flex flex-col gap-5">
      <p className="text-secondary-text font-semibold">{t(`items.${project.key}.organization`)}</p>

      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr] sm:gap-x-6">
        <dt className="typo-caption text-tertiary-text self-center">{t('period')}</dt>
        <dd>{t(`items.${project.key}.period`)}</dd>

        <dt className="typo-caption text-tertiary-text self-center">{t('roles')}</dt>
        <dd className="flex flex-wrap items-center gap-1.5">
          {project.roleTypes.map((roleKey) => (
            <RoleChip
              key={roleKey}
              roleKey={roleKey}
              overrideText={project.overrideRoles?.find((r) => r.role === roleKey)?.text || ''}
            />
          ))}
        </dd>

        <dt className="typo-caption text-tertiary-text self-center">{t('techStack')}</dt>
        <dd className="flex flex-wrap items-center gap-1.5">
          {project.techStack.map((tech) => (
            <Chip key={tech} text={tech} color="neutral" />
          ))}
        </dd>
      </dl>

      <ul className="text-secondary-text flex list-disc flex-col gap-1 pl-5">
        {details.map((detail, i) => (
          <li key={detail}>
            {t.rich(`items.${project.key}.detail.${i}`, richTags)}
          </li>
        ))}
      </ul>

      {project.url && (
        <Link
          url={project.url}
          text={t('view')}
        />
      )}
    </div>
  )
}
