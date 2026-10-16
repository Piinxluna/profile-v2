'use client'

import { useState } from 'react'
import { projects, type Project } from '@/feature/share/projects/_projectData'
import ProjectCard from '@/feature/share/projects/ProjectCard'
import ProjectCardViewModal from '@/feature/share/projects/ProjectCardViewModal'
import Divider from '@/components/basic/Divider'
import { useTranslations } from 'next-intl'

export default function ProjectList() {
  const t = useTranslations('feature.projects')
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <Divider className="mb-4" text={t('subtitle.ongoing')} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {projects.filter((project) => project.isOngoing).map((project) => (
          <ProjectCard key={project.key} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>

      <Divider className="mb-4" text={t('subtitle.completed')} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {projects.filter((project) => !project.isOngoing).map((project) => (
          <ProjectCard key={project.key} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>

      <ProjectCardViewModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
