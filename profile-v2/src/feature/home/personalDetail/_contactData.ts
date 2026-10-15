export interface Contact {
  type: 'mail' | 'phone' | 'github' | 'linkedin' | 'instagram'
  value: string
  // No url: clicking copies `value` to the clipboard instead
  url?: string
}

export const contacts: Contact[] = [
  { type: 'mail', value: 'chanya.sittinun@gmail.com' },
  {
    type: 'instagram',
    value: 'P1ngpingg',
    url: 'https://www.instagram.com/p1ngpingg/',
  },
  {
    type: 'github',
    value: 'Piinxluna',
    url: 'https://github.com/Piinxluna',
  },
  {
    type: 'linkedin',
    value: 'Chanya Sittinuntawit',
    url: 'https://www.linkedin.com/in/chanya-sittinuntawit-431b05319/',
  },
]
