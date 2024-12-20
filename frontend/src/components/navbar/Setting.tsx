import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'

import { Moon, Sun } from 'lucide-react'
import TogglePill from '../TogglePill'

export default function Setting({
  isThai,
  setIsThai,
  isDarkMode,
  setIsDarkMode,
}: {
  isThai: boolean | undefined
  setIsThai: Function
  isDarkMode: boolean | undefined
  setIsDarkMode: Function
}) {
  const colors = resolveConfig(tailwindConfig).theme.colors

  return (
    <div className='flex justify-between items-center space-x-4'>
      <TogglePill
        selectedItem={isThai ? 'TH' : 'EN'}
        items={['TH', 'EN']}
        onSelect={(item: string) => {
          setIsThai(item === 'TH')
          location.reload()
        }}
        size='sm'
      />
      <div
        className='text-my-pink fill-my-pink dark:text-my-indigo-20'
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <Moon fill={colors['my-indigo'][20]} className='hidden dark:block' />
        <Sun fill={colors['my-pink']} className='block dark:hidden' />
      </div>
    </div>
  )
}
