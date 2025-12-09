"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function TenPieceRackPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              10-Piece Sunglasses Rack
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8">
              A compact, curated sunglasses program designed to maximize visibility and turn everyday customers into buyers.
            </p>
            <div className="mt-4 flex justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Piece Rack Overview (no pricing) */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Overview
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                A carefully curated selection of styles that sell. Each rack is designed for maximum visual impact and optimized for impulse purchases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12">
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 h-full">
                <div className="relative w-full h-full min-h-[260px]">
                  <Image
                    src="/10Piece-01.png"
                    alt="10-piece sunglasses rack display"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 h-full">
                <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700">
                  <h3 className="text-2xl font-bold mb-6 text-accent">What&apos;s Included</h3>
                  <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>10 pairs of trend-forward sunglasses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Mix of premium and standard styles to fit every shopper.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Professional countertop display rack.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Seasonal style rotation every 3 weeks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>UV400 protection on all styles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Display rack at no cost.</span>
                  </li>
                  </ul>
                </div>

                <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700">
                  <h4 className="font-bold text-xl mb-3 text-accent">Profit Margin Potential</h4>
                  <p className="text-muted mb-3">
                    Our 10-piece rack program is designed to give retailers a healthy return on every sale.
                  </p>
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-muted">Estimated profit margin potential on the program.</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <p className="text-lg">
                <span className="font-bold text-accent">Display Rack at no cost:</span> The professional countertop rack is included at no charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Collection Popular Styles */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Standard Collection
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Popular Styles
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                A snapshot of some of our best-selling standard collection frames that keep customers coming back.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ace */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Ace.jpg', alt: 'Ace standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Ace.jpg"
                    alt="Ace standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Ace</h3>
                  <p className="text-sm text-muted">
                    Clean, everyday frames that work for almost any face shape. Ace is the go-to grab for customers who want simple, easy style without overthinking it.
                  </p>
                </div>
              </div>

              {/* Drift */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Drift.jpg', alt: 'Drift standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Drift.jpg"
                    alt="Drift standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Drift</h3>
                  <p className="text-sm text-muted">
                    A relaxed, laid-back silhouette with just enough edge to stand out. Perfect for beach days, road trips, and casual everyday wear.
                  </p>
                </div>
              </div>

              {/* Icon Gloss */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Icon Gloss.jpg', alt: 'Icon Gloss standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Icon Gloss.jpg"
                    alt="Icon Gloss standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Icon Gloss</h3>
                  <p className="text-sm text-muted">
                    A polished, glossy finish that looks premium without the premium price tag. Shoppers love the way Icon Gloss dresses up any outfit in seconds.
                  </p>
                </div>
              </div>

              {/* Icon Soft */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Icon Soft.jpg', alt: 'Icon Soft standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Icon Soft.jpg"
                    alt="Icon Soft standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Icon Soft</h3>
                  <p className="text-sm text-muted">
                    A softer, more matte take on the classic icon profile. Ideal for customers who want a modern look that still feels understated and easy to wear.
                  </p>
                </div>
              </div>

              {/* Legacy */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Legacy.jpg', alt: 'Legacy standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Legacy.jpg"
                    alt="Legacy standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Legacy</h3>
                  <p className="text-sm text-muted">
                    A timeless, heritage-inspired frame that feels familiar and trustworthy. Legacy appeals to shoppers who want a classic look that never goes out of style.
                  </p>
                </div>
              </div>

              {/* Radiant Black */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Radiant Black.jpg', alt: 'Radiant Black standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Radiant Black.jpg"
                    alt="Radiant Black standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Radiant Black</h3>
                  <p className="text-sm text-muted">
                    Deep black frames with a bold presence that pops on the rack. Radiant Black is a natural choice for customers who love a sharp, all-black look.
                  </p>
                </div>
              </div>

              {/* Riff */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Riff.jpg', alt: 'Riff standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Riff.jpg"
                    alt="Riff standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Riff</h3>
                  <p className="text-sm text-muted">
                    A music-festival-ready shape with a fun, laid-back vibe. Riff grabs attention from younger shoppers looking for something fresh and playful.
                  </p>
                </div>
              </div>

              {/* Titan RV */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Titan RV.jpg', alt: 'Titan RV standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Titan RV.jpg"
                    alt="Titan RV standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Titan RV</h3>
                  <p className="text-sm text-muted">
                    A wrap-style profile built for drivers and outdoor work. Titan RV offers wide coverage and a secure fit that customers instantly feel.
                  </p>
                </div>
              </div>

              {/* Titan */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Titan.jpg', alt: 'Titan standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Titan.jpg"
                    alt="Titan standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Titan</h3>
                  <p className="text-sm text-muted">
                    Strong, confident lines with a lightweight feel. Titan is a great everyday option for customers who want something tough but comfortable.
                  </p>
                </div>
              </div>

              {/* Vortex */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Standard/Vortex.JPG', alt: 'Vortex standard sunglasses' })}
                >
                  <Image
                    src="/Standard/Vortex.JPG"
                    alt="Vortex standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Vortex</h3>
                  <p className="text-sm text-muted">
                    A bold, angular frame that looks fast even standing still. Vortex is made for shoppers who want a statement piece that still sells at everyday prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-zinc-300 hover:text-white text-sm"
              onClick={() => setLightboxImage(null)}
            >
              Close
            </button>
            <div className="relative w-full aspect-[4/3] bg-black rounded-lg overflow-hidden border border-zinc-700">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Our Sunglasses */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Retailers Choose SoCal Shades
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">High Profit Margins</h3>
                <p className="text-muted">
                  200-300% markup potential on every pair
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Regular Rotation</h3>
                <p className="text-muted">
                  Fresh styles every 3 weeks keep customers coming back
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-muted">
                  UV400 protection and durable construction on every pair
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Impulse Sales</h3>
                <p className="text-muted">
                  Eye-catching displays drive quick purchase decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Selling?
            </h2>
            <p className="text-xl text-muted mb-8">
              Join hundreds of retailers already profiting from our 10-piece sunglasses rack program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Become a Retailer
              </Link>
              <Link href="/storefront-services" className="btn-outline text-lg px-8 py-3">
                Learn About Our Program
              </Link>
            </div>
            <p className="text-sm text-muted mt-6">
              Questions? <Link href="/contact" className="text-accent hover:underline">Contact us</Link> or call us today.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
