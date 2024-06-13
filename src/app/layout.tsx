import type { Metadata } from 'next'
import { Noto_Sans_Thai_Looped } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'

const notoSansThaiLooped = Noto_Sans_Thai_Looped({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'thai'],
})

export const metadata: Metadata = {
  title: "Chanya's Port",
  description: "Chanya Sittinuntawit's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={notoSansThaiLooped.className + ' bg-blue-20'}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
