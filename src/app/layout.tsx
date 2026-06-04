import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/Navbar/Navbar'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

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
    siteName: 'John Doe Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="swift-spring">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
