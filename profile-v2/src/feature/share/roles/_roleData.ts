import { Color } from '@/interface'

export type RoleKey =
  | 'fullStack'
  | 'frontEnd'
  | 'backEnd'
  | 'systemAnalyst'
  | 'projectManager'
  | 'coordinator'

export interface Role {
  // Key into `feature.roles` messages
  key: RoleKey
  color: Color
  isHide?: boolean
}

export const roles: Role[] = [
  { key: 'fullStack', color: 'amber' },
  { key: 'frontEnd', color: 'lime', isHide: true },
  { key: 'backEnd', color: 'emerald', isHide: true },
  { key: 'systemAnalyst', color: 'sky' },
  { key: 'projectManager', color: 'fuchsia' },
  { key: 'coordinator', color: 'pink', isHide: true },
]
