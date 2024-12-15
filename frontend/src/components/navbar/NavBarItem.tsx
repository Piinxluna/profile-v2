import Link from 'next/link'

export default function NavBarItem({
  page,
  isActive,
}: {
  page: { url: string; label: string }
  isActive: boolean
}) {
  if (isActive) {
    return (
      <Link href={page.url} className='font-bold text-my-pink'>
        {page.label}
      </Link>
    )
  } else {
    return (
      <Link href={page.url} className='font-medium text-my-gray'>
        {page.label}
      </Link>
    )
  }
}
