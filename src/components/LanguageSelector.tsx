export default function Navbar({
  pageData,
  active,
}: {
  pageData: any
  active: boolean
}) {
  let fontStyling = ['text-md']
  if (active) {
    fontStyling.push('font-extrabold')
    fontStyling.push('text-pink-70')
  }

  return <div className={fontStyling.join(' ')}>{pageData.title}</div>
}
