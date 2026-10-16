import { getTranslations } from 'next-intl/server'
import { Card } from '@/components/basic/Card'
import { Divider } from '@/components/basic/Divider'
import { richTags } from '@/lib/richText'
import { roles } from '@/feature/share/roles/_roleData'
import { RoleChip } from '@/feature/share/roles/RoleChip'

export async function AboutMe() {
  const t = await getTranslations('feature.aboutMe')

  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      <Divider text={t('title')} align="end" />

      {/* Roles: spread across the full width */}
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {roles.filter((role) => !role.isHide).map((role) => (
          <RoleChip key={role.key} roleKey={role.key} size="lg" />
        ))}
      </div>

      <Card>
        <p className="text-secondary-text indent-4 leading-7 sm:leading-8">{t.rich('summary', richTags)}</p>
      </Card>
    </section>
  )
}
