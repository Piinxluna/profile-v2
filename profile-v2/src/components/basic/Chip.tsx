import type { Color } from '@/interface'
import { cn } from '@/style/utils'

// Tailwind palette colors: 100 background + 600 text (light), 500/15 background + 300 text (dark).
// Written as full class strings so Tailwind can find them
const colors = {
  // Theme colors (follow light/dark mode)
  primary: 'bg-surface-primary text-primary',
  neutral: 'bg-surface-2 text-secondary-text',
  // Tailwind palette
  red: 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-300',
  orange: 'bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-300',
  amber: 'bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300',
  yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-500/15 dark:text-yellow-300',
  lime: 'bg-lime-100 text-lime-600 dark:bg-lime-500/15 dark:text-lime-300',
  green: 'bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-300',
  emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300',
  teal: 'bg-teal-100 text-teal-600 dark:bg-teal-500/15 dark:text-teal-300',
  cyan: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300',
  sky: 'bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300',
  blue: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300',
  indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300',
  violet: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300',
  purple: 'bg-purple-100 text-purple-600 dark:bg-purple-500/15 dark:text-purple-300',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/15 dark:text-fuchsia-300',
  pink: 'bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-300',
  rose: 'bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300',
  slate: 'bg-slate-100 text-slate-600 dark:bg-slate-500/15 dark:text-slate-300',
}

const sizes = {
  sm: 'px-2.5 py-0.5 text-xs font-medium',
  md: 'px-3.5 py-1 text-sm font-medium',
  lg: 'px-5 py-2.5 text-base font-semibold sm:text-lg',
}

interface Props {
  text: string
  color?: Color
  size?: keyof typeof sizes
  className?: string
}

/**
 * Small rounded label, e.g. a tag or a tech stack item.
 * - color: a theme color (primary/neutral) or a Tailwind palette color, e.g. 'blue'
 */
export default function Chip({ text, color = 'primary', size = 'md', className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full text-center',
        colors[color],
        sizes[size],
        className
      )}
    >
      {text}
    </span>
  )
}
