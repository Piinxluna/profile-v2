import type { Metadata } from 'next'
import './globals.css'

import NavBar from '@/components/navbar/NavBar'

export const metadata: Metadata = {
  title: "Chanya's Port",
  description: "Chanya's portfolio website",
  icons: ['/logo.png'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='th'>
      <body className={`antialiased bg-my-indigo-10`}>
        <NavBar />
        <main className='w-full h-full px-10 py-8'>{children}</main>
      </body>
    </html>
  )
}
