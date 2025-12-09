"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function PremiumRackPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Premium Sunglasses Rack
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8">
              An upgraded rack program featuring designer-inspired frames, polarized options, and higher ticket sales.
            </p>
            <div className="mt-4 flex justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Rack Overview */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Overview
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Highlight your best shoppers with our upgraded premium rack mix designed for higher tickets and repeat purchases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12">
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 h-full">
                <div className="relative w-full h-full min-h-[260px]">
                  <Image
                    src="/Premium-01.png"
                    alt="Premium sunglasses rack display"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 h-full">
                <div className="bg-zinc-900/70 rounded-lg p-8 border border-zinc-700">
                  <h3 className="text-2xl font-bold mb-6 text-accent">What&apos;s Different with Premium</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Higher-end frames, polarized options, and upgraded finishes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Comes with a lifetime warranty on every pair.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Includes a premium microfiber pouch with each pair.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Pairs perfectly with your standard rack so shoppers can trade up.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/60 rounded-lg p-6 border border-zinc-700">
                  <h4 className="font-bold text-xl mb-3 text-accent">Premium Profit Potential</h4>
                  <p className="text-muted mb-3">
                    Premium racks are designed to deliver stronger dollars per sale while still moving quickly at the counter.
                  </p>
                  <div className="text-3xl font-bold">Higher Ticket, Healthy Margin</div>
                  <div className="text-muted">Ideal for locations where customers are comfortable paying more for style and quality.</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <p className="text-lg">
                <span className="font-bold text-accent">Upgrade Option:</span> Use premium racks alongside standard racks to give shoppers an easy “good, better, best” choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Collection Popular Styles */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Premium Collection
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Popular Styles
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                A closer look at premium frames that help you stand out and justify higher price points.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Aurora */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/Aurora.JPG', alt: 'Aurora premium sunglasses' })}
                >
                  <Image
                    src="/Premium/Aurora.JPG"
                    alt="Aurora premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Aurora</h3>
                  <p className="text-sm text-muted">
                    Soft gradients and elevated finishes give Aurora a boutique feel. Perfect for shoppers who want something feminine, modern, and photo-ready.
                  </p>
                </div>
              </div>

              {/* FreeStride */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/FreeStride.JPG', alt: 'FreeStride premium sunglasses' })}
                >
                  <Image
                    src="/Premium/FreeStride.JPG"
                    alt="FreeStride premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">FreeStride</h3>
                  <p className="text-sm text-muted">
                    An athletic, everyday frame that works from errands to outdoor adventures. FreeStride blends performance styling with a polished, premium look.
                  </p>
                </div>
              </div>

              {/* GlideForce */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/GlideForce.JPG', alt: 'GlideForce premium sunglasses' })}
                >
                  <Image
                    src="/Premium/GlideForce.JPG"
                    alt="GlideForce premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">GlideForce</h3>
                  <p className="text-sm text-muted">
                    A sleek, wrap-inspired profile built for speed and motion. GlideForce is a favorite for drivers, cyclists, and anyone on the move.
                  </p>
                </div>
              </div>

              {/* RushPro */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/RushPro.JPG', alt: 'RushPro premium sunglasses' })}
                >
                  <Image
                    src="/Premium/RushPro.JPG"
                    alt="RushPro premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">RushPro</h3>
                  <p className="text-sm text-muted">
                    Bold angles and mirrored lenses make RushPro stand out instantly. Great for customers who want a high-energy, performance-forward look.
                  </p>
                </div>
              </div>

              {/* Stormline */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/Stormline.JPG', alt: 'Stormline premium sunglasses' })}
                >
                  <Image
                    src="/Premium/Stormline.JPG"
                    alt="Stormline premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Stormline</h3>
                  <p className="text-sm text-muted">
                    Clean, confident lines with a darker, moody lens story. Stormline is ideal for customers who want understated cool with a premium edge.
                  </p>
                </div>
              </div>

              {/* Trailblaze */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/Trailblaze.JPG', alt: 'Trailblaze premium sunglasses' })}
                >
                  <Image
                    src="/Premium/Trailblaze.JPG"
                    alt="Trailblaze premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Trailblaze</h3>
                  <p className="text-sm text-muted">
                    Rugged details and outdoor-driven styling make Trailblaze a natural for road trips, hiking, and weekend getaways.
                  </p>
                </div>
              </div>

              {/* Velocity X Black */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/Velocity X Black.JPG', alt: 'Velocity X Black premium sunglasses' })}
                >
                  <Image
                    src="/Premium/Velocity X Black.JPG"
                    alt="Velocity X Black premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Velocity X Black</h3>
                  <p className="text-sm text-muted">
                    A fast-looking, performance silhouette in an all-black story. Velocity X Black is a top choice for customers who like bold, technical design.
                  </p>
                </div>
              </div>

              {/* Vortex Sport */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => setLightboxImage({ src: '/Premium/Vortex Sport.JPG', alt: 'Vortex Sport premium sunglasses' })}
                >
                  <Image
                    src="/Premium/Vortex Sport.JPG"
                    alt="Vortex Sport premium sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Vortex Sport</h3>
                  <p className="text-sm text-muted">
                    A sport-forward take on our Vortex profile with brighter lens options. Vortex Sport catches the eye from across the counter.
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
              Join hundreds of retailers already profiting from our 10-piece and premium sunglasses rack programs.
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
