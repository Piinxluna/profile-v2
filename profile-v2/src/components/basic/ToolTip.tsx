// NOTE: The parent must have the className 'group relative flex flex-col items-center'
interface Props {
  text: string
}

export default function ToolTip({ text }: Props) {
  return (
    <div
      role="tooltip"
      className="invisible absolute -top-12 z-10 flex w-fit flex-col items-center rounded-lg bg-primary-text px-3 py-2 text-sm font-medium whitespace-nowrap text-surface-0 shadow-sm group-hover:visible"
    >
      {text}
      <div className="absolute -bottom-2 h-0 w-0 border-t-8 border-r-6 border-l-6 border-t-primary-text border-r-transparent border-l-transparent" />
    </div>
  )
}
