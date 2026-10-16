import type { RoleKey } from '@/feature/share/roles/_roleData'

export interface Project {
  // Key into `feature.projects.items` messages
  key: string
  techStack: string[]

  // Role types, shown as colored chips on the card
  roleTypes: RoleKey[]
  // Override the default job titles, listed in the modal
  overrideRoles?: {
    role: RoleKey
    text: string
  }[]

  // No url: the "View" link is hidden
  url?: string
}

export const projects: Project[] = [
  {
    key: 'DIPROM',
    roleTypes: ['frontEnd'],
    url: 'https://incredit.diprom.go.th/',
    techStack: ['Next.js'],
  },
  {
    key: 'TalentJourney',
    url: 'https://talent.cedt.community/',
    overrideRoles: [
      {
        role: 'fullStack',
        text: 'Lead Full-stack Developer',
      },
    ],
    roleTypes: ['fullStack', 'systemAnalyst', 'projectManager', 'coordinator'],
    techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Redis'],
  },
  {
    key: 'PrineClass',
    url: 'https://prineclass.com/',
    roleTypes: ['fullStack', 'systemAnalyst'],
    techStack: [
      'Next.js',
      'Express.js',
      'PostgreSQL',
      'DigitalOcean Spaces',
      'Redis',
    ],
  },
  {
    key: 'SummyShare',
    url: 'https://summyshare.com/',
    roleTypes: ['fullStack', 'systemAnalyst'],
    techStack: [
      'Next.js',
      'Express.js',
      'PostgreSQL',
      'DigitalOcean Spaces',
      'Redis',
    ],
  },
  {
    key: 'DIWLAB',
    roleTypes: ['frontEnd'],
    url: 'https://lab-platform.diw.go.th/',
    techStack: ['Next.js'],
  },
]
