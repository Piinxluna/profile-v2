'use client'

import { useTranslations } from 'next-intl'
import { IconExternalLink } from '@tabler/icons-react'
import { Chip } from '@/components/basic/Chip'
import { richTags } from '@/lib/richText'
import { RoleChip } from '@/feature/share/roles/RoleChip'
import type { Project } from './_projectData'

export function ProjectCardViewModalDetail({ project }: { project: Project }) {
  const t = useTranslations('feature.projects')
  const details: string[] = t.raw(`items.${project.key}.detail`)

  return (
    <div className="flex flex-col gap-5">
      <p className="text-secondary-text font-semibold">{t(`items.${project.key}.organization`)}</p>

      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr] sm:gap-x-6">
        <dt className="typo-caption text-tertiary-text">{t('roles')}</dt>
        <dd className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.roleTypes.map((roleKey) => (
              <RoleChip
                key={roleKey}
                roleKey={roleKey}
                overrideText={project.overrideRoles?.find((r) => r.role === roleKey)?.text || ''}
              />
            ))}
          </div>
        </dd>

        <dt className="typo-caption text-tertiary-text">{t('period')}</dt>
        <dd>{t(`items.${project.key}.period`)}</dd>

        <dt className="typo-caption text-tertiary-text self-center">{t('techStack')}</dt>
        <dd className="flex flex-wrap items-center gap-2">
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
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="typo-link flex w-fit items-center gap-1"
        >
          {t('view')}
          <IconExternalLink className="icon-xs" />
        </a>
      )}
    </div>
  )
}
