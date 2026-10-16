import { IconAlertTriangle } from '@tabler/icons-react'
import { getTranslations } from 'next-intl/server'
import Link from '@/components/basic/Link'

export default async function NotFound() {
  const t = await getTranslations('navigation.notFound')

  return (
    <section className="flex h-[80vh] flex-col items-center justify-center gap-4 p-6">
      <IconAlertTriangle className="size-16 text-primary" stroke={2} />
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link url="/" text={t('goHome')} openNewTab={false} className="text-base" />
    </section>
  )
}
