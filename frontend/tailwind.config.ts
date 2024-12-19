import type { Config } from 'tailwindcss'
const defaultColors = require('tailwindcss/colors')

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Default Tailwind colors
        ...defaultColors,
        // Custom colors
        'my-pink': {
          20: '#FFD8E0',
          40: '#EF798A',
          DEFAULT: '#E54F6D',
        },
        'my-coral': {
          DEFAULT: '#EB9486',
        },
        'my-indigo': {
          10: '#F4F9FD',
          20: '#D8DCFF',
          DEFAULT: '#574AE2',
          80: '#35395A',
          90: '#171827',
        },
        'my-blue': {
          DEFAULT: '#4361EE',
          70: '#1F39AD',
        },
        'my-gray': {
          20: '#D9D9D9',
          DEFAULT: '#7B7B7B',
          70: '#5C5C5C',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
