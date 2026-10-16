'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { projects, type Project } from '@/feature/share/projects/_projectData'
import { ProjectCard } from '@/feature/share/projects/ProjectCard'
import { ProjectCardViewModal } from '@/feature/share/projects/ProjectCardViewModal'

export function ProjectList() {
  const t = useTranslations('feature.projects')
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>

      <ProjectCardViewModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
