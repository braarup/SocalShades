import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Products from '@/components/Products'
import BeyondShades from '@/components/BeyondShades'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Products />
      <BeyondShades />
      <Services />
      <Testimonials />
      <CTABanner />
    </>
  )
}