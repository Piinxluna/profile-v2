import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#000',
        white: '#FFF',
        'pink-20': '#FFD8E0',
        'pink-70': '#E54F6D',
        'coral-pink': '#EB9486',
        'blue-70': '#1F39AD',
        'blue-50': '#4361EE',
        'blue-20': '#F4F9FD',
        'purple-20': '#D8DCFF',
        'purple-70': '#574AE2',
      },
    },
  },
  plugins: [],
}
export default config
