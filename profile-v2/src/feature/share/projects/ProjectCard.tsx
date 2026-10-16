'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/basic/Card'
import { Chip } from '@/components/basic/Chip'
import { RoleChip } from '@/feature/share/roles/RoleChip'
import type { Project } from './_projectData'
import { cn } from '@/style/utils'
import { Link } from '@/components/basic/Link'

interface Props {
  project: Project
  onOpen: () => void
  className?: string
}

export function ProjectCard({ project, onOpen, className }: Props) {
  const t = useTranslations('feature.projects')
  const projectName = t(`items.${project.key}.name`)

  return (
    <Card interactive className={cn("relative flex h-full flex-col gap-3", className)}>
      {/* Covers the whole card to open the modal; links below sit above it with z-10
          (a link can't be nested inside a button) */}
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={t('openDetail', { projectName })}
        onClick={onOpen}
        className="absolute inset-0 rounded-2xl hover:cursor-pointer"
      />

      <div className="flex flex-col gap-1">
        <p className="typo-caption text-tertiary-text">{t(`items.${project.key}.period`)}</p>
        <h3>{projectName}</h3>
        <p className="typo-caption text-secondary-text font-semibold">
          {t(`items.${project.key}.organization`)}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.roleTypes.map((roleKey) => (
          <RoleChip
            key={roleKey}
            roleKey={roleKey}
            size="sm"
            overrideText={project.overrideRoles?.find((r) => r.role === roleKey)?.text || ''}
          />
        ))}
      </div>

      {/* One line, scrolls sideways when it overflows. Sits above the cover button (z-10)
          so it can receive scroll; clicking it still opens the modal */}
      <div
        onClick={onOpen}
        className="relative z-10 mt-auto flex gap-2 overflow-x-auto pt-1 scrollbar-hide hover:cursor-pointer"
      >
        {project.techStack.map((tech) => (
          <Chip
            key={tech}
            text={tech}
            color="neutral"
            size="sm"
            className="shrink-0 whitespace-nowrap"
          />
        ))}
      </div>

      {project.url && (
        <Link
          url={project.url}
          text={t('view')}
        />
      )}
    </Card>
  )
}
