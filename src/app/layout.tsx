import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/Navbar/Navbar'
import ChatWidget from '@/components/UI/ChatWidget'
import { Caveat, Fraunces, IBM_Plex_Mono, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Notebook theme fonts, exposed as CSS variables for globals.css
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
})

const title = 'Namare Shakib Angkon | CSE Portfolio'

const description =
  'A dedicated Computer Science and Engineering student at United International University, with focus on Machine Learning, Computer Vision, Blockchain and Cryptography.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Namare Shakib Angkon Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@namare_shakib',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${fraunces.variable} ${plexMono.variable}`}>
      <body className={`${inter.className} bg-background text-foreground`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
