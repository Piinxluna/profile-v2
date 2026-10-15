import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('navigation.notFound');

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </section>
  );
}
