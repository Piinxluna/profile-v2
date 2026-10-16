import type { RoleKey } from '@/feature/share/roles/_roleData'
import type { Project } from './_projectData'

/**
 * Job title to show for one of a project's roles.
 * - undefined when the project doesn't override it, so RoleChip falls back to the role's default name
 */
export function formatOverrideRole(project: Project, roleKey: RoleKey) {
  return project.overrideRoles?.find((r) => r.role === roleKey)?.text
}
