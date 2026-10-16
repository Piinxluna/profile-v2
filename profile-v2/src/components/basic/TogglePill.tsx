import { cn } from '@/style/utils'

interface Props {
  selectedItem: string
  items: { value: string; label: string }[]
  onSelect: (value: string) => void
  size?: 'sm' | 'md'
  className?: string
}

export default function TogglePill({
  selectedItem,
  items,
  onSelect,
  size = 'md',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex w-fit items-center gap-1 rounded-2xl bg-surface-2 p-2 text-sm',
        size === 'sm' && 'gap-0 px-1.5 py-1 text-xs',
        className
      )}
    >
      {items.map((item) => {
        const isSelected = item.value === selectedItem
        return (
          <button
            key={item.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(item.value)}
            className={cn(
              'rounded-lg px-2 py-1 transition-colors hover:cursor-pointer',
              size === 'sm' && 'rounded-xl py-1.5',
              isSelected
                ? 'bg-surface-0 text-primary-text shadow-sm'
                : 'text-secondary-text hover:text-primary-text'
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
