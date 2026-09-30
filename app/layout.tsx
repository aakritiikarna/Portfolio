import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aakriti Karna — Backend & ML Developer | Portfolio',
  description:
    'CS Graduate (B.Tech 2026) — Java backend & Python ML engineer building scalable, production-ready systems. Explore projects in fintech, real-time systems, and a flagship Donation & Charity Management platform built in Next.js.',
  keywords:
    'Aakriti Karna, Portfolio, Backend Developer, Java, Spring Boot, Python ML, Next.js, Donation Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-[#070617] text-white selection:bg-fuchsia-500/40 selection:text-white font-sans">
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  )
}
