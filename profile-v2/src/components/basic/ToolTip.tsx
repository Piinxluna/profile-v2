// NOTE: The parent must have the className 'group relative flex flex-col items-center'
export function ToolTip({ text }: { text: string }) {
  return (
    <div
      role="tooltip"
      className="bg-primary-text text-surface-0 invisible absolute -top-12 z-10 flex w-fit flex-col items-center rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap shadow-sm group-hover:visible"
    >
      {text}
      <div className="border-t-primary-text absolute -bottom-2 h-0 w-0 border-t-8 border-r-6 border-l-6 border-r-transparent border-l-transparent" />
    </div>
  )
}
