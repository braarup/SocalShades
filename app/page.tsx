import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import RetailerStrip from '@/components/RetailerStrip'
import Products from '@/components/Products'
import BeyondShades from '@/components/BeyondShades'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import SocialInstagram from '@/components/SocialInstagram'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wholesale Sunglasses & Retail Displays',
  description:
    'So‑Cal Shades Wholesale supplies high‑margin sunglasses, mobile accessories, and custom storefront displays designed to boost impulse sales at your counter.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <RetailerStrip />
      <Services />
      <Products />
      <BeyondShades />
      <SocialInstagram />
      <Testimonials />
      <CTABanner />
    </>
  )
}