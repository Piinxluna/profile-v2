'use client'

import { useTranslations } from 'next-intl'
import { Modal } from '@/components/basic/Modal'
import type { Project } from './_projectData'
import { ProjectCardViewModalDetail } from './_ProjectCardViewModalDetail'

interface Props {
  project: Project | null
  onClose: () => void
}

export function ProjectCardViewModal({
  project,
  onClose,
}: Props) {
  const t = useTranslations('feature.projects')

  return (
    <Modal
      open={project !== null}
      onClose={onClose}
      title={project ? t(`items.${project.key}.name`) : undefined}
    >
      {project && <ProjectCardViewModalDetail project={project} />}
    </Modal>
  )
}
