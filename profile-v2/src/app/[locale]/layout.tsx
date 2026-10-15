import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { themeInitScript } from "@/lib/theme";
import { NavBar } from "@/components/navigation/navbar/NavBar";
import { Toaster } from "@/components/basic/Toast";

// ========================================================================
// Font Configuration
// ========================================================================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ========================================================================
// Metadata Configuration
// ========================================================================
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Chanya's Portfolio",
      template: `%s | Chanya's Portfolio`,
    },
    description: "Welcome to Chanya's Portfolio, a showcase of my software developing experiences and projects.",
    // openGraph: {
    //   images: [`/image/og-image.png`],
    // },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Localizaton
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // data-theme is set by themeInitScript before React hydrates
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          <main className="w-full px-10 py-8">{children}</main>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
