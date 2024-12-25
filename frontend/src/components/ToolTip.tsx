export default function ToolTip({ text }: { text: string }) {
  // NOTE: The outer div must contain the className 'group relative flex flex-col items-center'

  return (
    <div className='invisible group-hover:visible absolute -top-12 flex flex-col items-center w-fit whitespace-nowrap z-10 px-3 py-2 text-sm font-medium rounded-lg shadow-sm text-white bg-black/70 dark:bg-my-indigo-20 dark:text-black'>
      {text}
      <div
        className='w-0 h-0 absolute -bottom-2
            border-l-[6px] border-l-transparent
            border-t-[8px] border-t-black/70 dark:border-t-my-indigo-20
            border-r-[6px] border-r-transparent'
      ></div>
    </div>
  )
}
