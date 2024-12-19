export default function TogglePill({
  selectedItem,
  items,
  onSelect,
  size,
}: {
  selectedItem: string
  items: string[]
  onSelect: Function
  size?: string
}) {
  let additionalClass = ''
  let additionalPillClass = ''
  if (size === 'sm') {
    additionalClass = '!text-xs !px-[0.3rem] !py-1 !space-x-0'
    additionalPillClass = '!rounded-xl !py-1.5'
  }

  return (
    <div
      className={
        'bg-my-indigo-10 dark:bg-my-indigo-20 rounded-2xl flex items-center space-x-1 p-2 text-sm ' +
        additionalClass
      }
    >
      {items.map((obj) => {
        if (obj === selectedItem) {
          return (
            <div
              key={obj}
              onClick={() => {
                onSelect(obj)
              }}
              className={'bg-white rounded-lg px-2 py-1 ' + additionalPillClass}
            >
              {obj}
            </div>
          )
        } else {
          return (
            <div
              key={obj}
              onClick={() => {
                onSelect(obj)
              }}
              className='px-2'
            >
              {obj}
            </div>
          )
        }
      })}
    </div>
  )
}
