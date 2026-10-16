'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IconArrowRight } from '@tabler/icons-react'
import { Link } from '@/i18n/navigation'
import { projects, type Project } from '@/feature/share/projects/_projectData'
import { ProjectCard } from '@/feature/share/projects/ProjectCard'
import { ProjectCardViewModal } from '@/feature/share/projects/ProjectCardViewModal'
import { Card } from '@/components/basic/Card'

// Number of projects previewed on the home page; the rest are on /projects
const PREVIEW_COUNT = 3

export function ProjectGallery() {
  const t = useTranslations('feature.projects')
  const [selected, setSelected] = useState<Project | null>(null)
  const moreCount = projects.length - PREVIEW_COUNT

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, PREVIEW_COUNT).map((project, index) => (
          <ProjectCard key={project.key} project={project} onOpen={() => setSelected(project)} className={index !== 0 ? "lg:col-span-2" : ""} />
        ))}

        {/* View more: a card next to the others on md, a full-width banner on lg */}
        <Link href="/projects" className="group rounded-2xl">
          <Card
            interactive
            className="bg-surface-0 border-primary/40 flex h-full flex-col items-center justify-center gap-4 overflow-hidden border-dashed text-center lg:flex-row lg:justify-between lg:text-start"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-primary">{t('viewMore')}</h3>
              {moreCount > 0 && (
                <p className="typo-caption text-secondary-text">
                  {t('moreCount', { count: moreCount })}
                </p>
              )}
            </div>

            <span className="bg-primary group-hover:bg-primary-hover text-quarterly-text flex size-12 shrink-0 items-center justify-center rounded-full shadow-sm transition-all group-hover:translate-x-1">
              <IconArrowRight className="icon-md" />
            </span>
          </Card>
        </Link>
      </div>

      <ProjectCardViewModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
