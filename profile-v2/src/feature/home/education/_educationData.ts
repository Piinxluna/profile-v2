export interface Education {
  // Key into `feature.education.items` messages
  key: string
  gpax: number
  // Image path under /public; a colored placeholder with `logoText` is shown until it's set
  logo?: string
  logoText: string
  // Placeholder background, written as a full class so Tailwind picks it up
  color: {
    bg?: string
    text?: string
  }
}

export const educations: Education[] = [
  {
    key: 'university',
    logo: '/education/cu-logo.png',
    logoText: 'CU',
    gpax: 3.91,
    color: {
      bg: 'bg-pink-500',
      text: 'text-pink-700 dark:text-pink-300',
    },
  },
  {
    key: 'highSchool',
    logo: '/education/psm-logo.png',
    logoText: 'PSM',
    gpax: 4.0,
    color: {
      bg: 'bg-red-500',
      text: 'text-red-700 dark:text-red-300',
    },
  },
]
