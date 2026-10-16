import type { Metadata } from 'next'
import { Sarabun } from 'next/font/google'
import '../globals.css'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { themeInitScript } from '@/lib/theme'
import NavBar from '@/components/navigation/navbar/NavBar'
import InlineScript from '@/components/basic/InlineScript'
import Toast from '@/components/basic/Toast'

// Fonts: Sarabun isn't a variable font, so only the weights the site uses are loaded
// (typography.css and the font-medium / font-semibold / font-bold classes)
const sarabun = Sarabun({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'thai'],
  variable: '--font-sarabun',
  display: 'swap',
})

// Metadata
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Chanya's Portfolio",
      template: `%s | Chanya's Portfolio`,
    },
    description:
      "Welcome to Chanya's Portfolio, a showcase of my software developing experiences and projects.",
    // openGraph: {
    //   images: [`/image/og-image.png`],
    // },
  }
}

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function Layout({ children, params }: Props) {
  // Localization
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${sarabun.variable} h-full antialiased`}
      // data-theme is set by themeInitScript before React hydrates
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeInitScript} />
      </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          <main className="w-full px-10 py-8">{children}</main>
          <Toast />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
