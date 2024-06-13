import Link from 'next/link'

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

  return (
    <Link href={'/' + pageData.href} className={fontStyling.join(' ')}>
      {pageData.title}
    </Link>
  )
}
