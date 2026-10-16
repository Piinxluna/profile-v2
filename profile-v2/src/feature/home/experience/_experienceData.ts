export interface Experience {
  // Key into `feature.experience.items` messages
  key: 'ttb' | 'scAsset' | 'scb'
  // Image path under /public; a colored placeholder with `logoText` is shown until it's set
  logo?: string
  logoText: string
  // Placeholder background, written as a full class so Tailwind picks it up
  color: {
    bg?: string
    text?: string
  }
  techStack?: string[]
}

export const experiences: Experience[] = [
  {
    key: 'ttb',
    logo: '/experience/ttb-logo.svg',
    logoText: 'TTB',
    color: {
      bg: 'bg-indigo-500',
      text: 'text-indigo-700 dark:text-indigo-300',
    },
    techStack: [
      'Nest.js',
      'Next.js',
      'Jest',
      'Python',
      'MongoDB',
      'Mongoose',
      'Docker',
      'Jenkins',
      'Databricks',
    ],
  },
  {
    key: 'scAsset',
    logo: '/experience/sc-asset-logo.svg',
    logoText: 'SC',
    color: {
      bg: 'bg-orange-500',
      text: 'text-orange-700 dark:text-orange-300',
    },
  },
  {
    key: 'scb',
    logo: '/experience/scb-logo.svg',
    logoText: 'SCB',
    color: {
      bg: 'bg-purple-500',
      text: 'text-purple-700 dark:text-purple-300',
    },
  },
]
