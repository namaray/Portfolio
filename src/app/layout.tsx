import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/Navbar/Navbar'
import ChatWidget from '@/components/UI/ChatWidget'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
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
