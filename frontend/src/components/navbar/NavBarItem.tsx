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
      <Link
        href={page.url}
        className='font-bold text-my-pink dark:text-my-indigo-20'
      >
        {page.label}
      </Link>
    )
  } else {
    return (
      <Link
        href={page.url}
        className='font-medium text-my-gray dark:text-my-gray-20'
      >
        {page.label}
      </Link>
    )
  }
}
