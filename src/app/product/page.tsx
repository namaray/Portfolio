import type { Metadata } from 'next'
import ProductWork from '@/components/ProductWork'

const title = 'Product & Web Work | Namare Shakib Angkon'

const description =
  'Case studies in finding user pain points, writing requirements, designing user flows, building web apps and testing them: ReplayCS, Oushudh Bondhu, Heaven Furniture Mart and ShareStrength.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/product',
  },
  openGraph: {
    title,
    description,
    url: '/product',
    type: 'website',
  },
}

export default function ProductPage() {
  return <ProductWork />
}
