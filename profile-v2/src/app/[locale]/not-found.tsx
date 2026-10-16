import { Link } from '@/components/basic/Link';
import { IconAlertTriangle } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('navigation.notFound');

  return (
    <section className="flex flex-col gap-4 items-center justify-center h-[80vh] p-6">
      <IconAlertTriangle className='size-16 text-primary' stroke={2} />
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link
        url="/"
        text={t('goHome')}
        className='text-base'
      />
    </section>
  );
}
