import { Color } from '@/interface'
import {
  IconCode,
  IconDatabaseCog,
  IconLayoutBoardFilled,
  IconTools,
  TablerIcon,
} from '@tabler/icons-react'

export interface Language {
  // Key into `feature.skill.languages` messages
  key: string
  color: Color
  // No url: the "Verify Credential" link is hidden
  url?: string
}

export const languages: Language[] = [
  {
    key: 'th',
    color: 'indigo',
  },
  {
    key: 'en',
    color: 'emerald',
  },
  {
    key: 'cn',
    color: 'amber',
  },
]

export interface Certification {
  // Key into `feature.skill.certifications` messages
  key: string
  // No url: the "Verify Credential" link is hidden
  url?: string
}

export const certifications: Certification[] = [
  {
    key: 'isc2Cc',
    url: 'https://www.credly.com/badges/566d95df-39c0-4e87-a133-6b178dc96af7/public_url',
  },
]

export interface TechnicalSkillGroup {
  // Key into `feature.skill.technical.groups` messages
  key: string
  items: string[]
  icon?: TablerIcon
  color?: {
    text?: string
  }
}

export const technicalSkills: TechnicalSkillGroup[] = [
  {
    key: 'languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java', 'SQL'],
    icon: IconCode,
    color: {
      text: 'text-purple-600 dark:text-purple-300',
    },
  },
  {
    key: 'frameworks',
    items: ['Next.js', 'Express.js', 'Nest.js'],
    icon: IconLayoutBoardFilled,
    color: {
      text: 'text-sky-600 dark:text-sky-300',
    },
  },
  {
    key: 'databasesCloud',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'CI/CD', 'DigitalOcean Spaces'],
    icon: IconDatabaseCog,
    color: {
      text: 'text-green-600 dark:text-green-300',
    },
  },
  {
    key: 'toolsPlatforms',
    items: ['Git', 'Figma', 'Notion', 'Postman', 'Jira', 'ClickUp'],
    icon: IconTools,
    color: {
      text: 'text-amber-600 dark:text-amber-300',
    },
  },
]
