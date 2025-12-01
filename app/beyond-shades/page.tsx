"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
// import FastChargeDisplayModal from '@/components/FastChargeDisplayModal'

export default function BeyondShadesPage() {
  // const [showModal, setShowModal] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(true)
  //   }, 2000) // 2 second delay

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <main className="min-h-screen bg-bg">
      {/* FastChargeDisplayModal temporarily disabled but kept for future use */}
      {/* {showModal && <FastChargeDisplayModal defaultOpen />} */}
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Beyond Shades
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8">
              Expand Your Profits with High-Demand Impulse Products
            </p>
            <p className="text-lg text-muted mb-8 max-w-3xl mx-auto">
              From super-fast mobile charging solutions to everyday essentials, we provide the products your customers need right when they need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Start Selling Today
              </Link>
              <Link href="/contact" className="btn-outline text-lg px-8 py-3">
                Request Product Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Accessories - Featured Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Featured Category
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Super-Fast Mobile Accessories
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Meet today&apos;s demand for speed with premium charging solutions that customers actively seek out.
              </p>
            </div>

            {/* Mobile Accessories Grid - Hero Products */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* 30W Wall Charger */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-8 border border-zinc-700 hover:border-accent/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">30W Wall Charger</h3>
                    <div className="text-accent font-bold text-lg">Fast Charging Technology</div>
                  </div>
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>30W Power Delivery for rapid charging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Includes USB-C cable with fast charging support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Compatible with iPhone, Samsung, Google & more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Compact, travel-friendly design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Built-in safety protections (overcharge, overheat)</span>
                  </li>
                </ul>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted">Wholesale Price</div>
                      <div className="text-xl font-bold">Starting at $5</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted">Suggested Retail</div>
                      <div className="text-xl font-bold text-accent">$15-$20</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 55W Car Charger */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-8 border border-zinc-700 hover:border-accent/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">55W Car Charger</h3>
                    <div className="text-accent font-bold text-lg">Ultra-Fast On-The-Go Charging</div>
                  </div>
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>55W super-fast charging capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Dual ports: Charge two devices simultaneously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Includes USB-C cable with fast charging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>LED indicator light for charging status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Universal fit for all 12V car outlets</span>
                  </li>
                </ul>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted">Wholesale Price</div>
                      <div className="text-xl font-bold">Starting at $6</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted">Suggested Retail</div>
                      <div className="text-xl font-bold text-accent">$18-$25</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Mobile Accessories */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Why Mobile Accessories Are Essential</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">High Demand</div>
                  <p className="text-muted">Everyone needs to charge their devices — it&apos;s a universal need</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">Quick Sales</div>
                  <p className="text-muted">Perfect impulse buy at the checkout counter</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">High Margins</div>
                  <p className="text-muted">200-300% markup on every unit sold</p>
                </div>
              </div>
            </div>

            {/* Super-Fast Mobile Accessories Tiles */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  Super-Fast Mobile Accessories Lineup
                </h3>
                <p className="text-muted max-w-3xl mx-auto">
                  Highlight your fastest-charging cables, chargers, and earbuds with a clear, easy-to-browse layout.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 4-In-1 Cable - Super Fast */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">4-In-1 Cable</h4>
                    <p className="text-xs text-accent font-semibold mb-2">Super Fast</p>
                    <p className="text-sm text-muted">
                      One cable, four connectors. Perfect for customers with multiple devices.
                    </p>
                  </div>
                  <p className="text-xs text-muted">Great add-on at the counter.</p>
                </div>

                {/* C To C Cable - Super Fast */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">C To C Cable</h4>
                    <p className="text-xs text-accent font-semibold mb-2">Super Fast</p>
                    <p className="text-sm text-muted">
                      High-speed USB-C to USB-C cable built for modern phones and tablets.
                    </p>
                  </div>
                  <p className="text-xs text-muted">Ideal for Android and newer devices.</p>
                </div>

                {/* Dual Car Charger - Super Fast */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Dual Car Charger</h4>
                    <p className="text-xs text-accent font-semibold mb-2">Super Fast</p>
                    <p className="text-sm text-muted">
                      Charge two devices at once with ultra-fast power delivery on the go.
                    </p>
                  </div>
                  <p className="text-xs text-muted">Perfect for commuters and rideshare drivers.</p>
                </div>

                {/* Wall Charger - Super Fast */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Wall Charger</h4>
                    <p className="text-xs text-accent font-semibold mb-2">Super Fast</p>
                    <p className="text-sm text-muted">
                      Compact, powerful wall adapter that gets customers back to 100% quickly.
                    </p>
                  </div>
                  <p className="text-xs text-muted">A must-have replacement or spare charger.</p>
                </div>

                {/* Earbuds - Lightning */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Earbuds</h4>
                    <p className="text-xs text-accent font-semibold mb-1">Lightning</p>
                    <p className="text-sm text-muted">
                      Wired earbuds with Lightning connector for iPhone users who forgot theirs.
                    </p>
                  </div>
                  <p className="text-xs text-muted">Strong everyday impulse purchase.</p>
                </div>

                {/* Earbuds - Type C */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Earbuds</h4>
                    <p className="text-xs text-accent font-semibold mb-1">Type C</p>
                    <p className="text-sm text-muted">
                      Clear, reliable audio with USB-C connection for modern Android devices.
                    </p>
                  </div>
                  <p className="text-xs text-muted">Great next-to-register placement.</p>
                </div>

                {/* USB To C Cable - Super Fast */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">USB To C Cable</h4>
                    <p className="text-xs text-accent font-semibold mb-2">Super Fast</p>
                    <p className="text-sm text-muted">
                      Standard USB to USB-C cable that works with countless devices.
                    </p>
                  </div>
                  <p className="text-xs text-muted">Easy add-on with chargers and power banks.</p>
                </div>

                {/* USB to Lightning - Super Fast */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">USB to Lightning Cable</h4>
                    <p className="text-xs text-accent font-semibold mb-2">Super Fast</p>
                    <p className="text-sm text-muted">
                      High-speed cable for iPhone and iPad, built for everyday use.
                    </p>
                  </div>
                  <p className="text-xs text-muted">Always in demand, especially for travelers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                More High-Margin Products
              </h2>
              <p className="text-lg text-muted">
                Diversify your impulse section with these proven sellers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hats */}
              <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 hover:border-accent/50 transition-all">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Hats & Caps</h3>
                <p className="text-muted mb-6">
                  Trendy snapbacks, classic baseball caps, and beanies. Fashion-forward styles that complement your sunglasses selection.
                </p>
                
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Multiple styles & colors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Adjustable sizing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Quality embroidery & prints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Seasonal collections</span>
                  </li>
                </ul>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
                  <div className="text-sm text-muted">Wholesale from</div>
                  <div className="text-2xl font-bold">$8-$12</div>
                  <div className="text-sm text-accent mt-1">Retail at $20-$30</div>
                </div>
              </div>

              {/* Supplements */}
              <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 hover:border-accent/50 transition-all">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Health Supplements</h3>
                <p className="text-muted mb-6">
                  Energy boosters, vitamins, and wellness products. High-demand items that customers actively seek out for health and performance.
                </p>
                
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Energy & focus formulas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Vitamins & minerals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Pre-workout options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Single-serve packets</span>
                  </li>
                </ul>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
                  <div className="text-sm text-muted">Wholesale from</div>
                  <div className="text-2xl font-bold">$3-$6</div>
                  <div className="text-sm text-accent mt-1">Retail at $10-$15</div>
                </div>
              </div>

              {/* Lighters */}
              <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 hover:border-accent/50 transition-all">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium Lighters</h3>
                <p className="text-muted mb-6">
                  Windproof, refillable, and novelty designs. An essential convenience item that customers always need and often buy on impulse.
                </p>
                
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Torch & windproof styles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Refillable & rechargeable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Unique designs & colors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Display-ready packaging</span>
                  </li>
                </ul>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
                  <div className="text-sm text-muted">Wholesale from</div>
                  <div className="text-2xl font-bold">$2-$5</div>
                  <div className="text-sm text-accent mt-1">Retail at $8-$15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Add These Products?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Maximize Revenue</h3>
                <p className="text-muted">
                  Multiple high-margin categories in one compact display
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Add-On Sales</h3>
                <p className="text-muted">
                  Customers buying sunglasses often pick up accessories too
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Low Maintenance</h3>
                <p className="text-muted">
                  We handle restocking and rotation every 3 weeks
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Sellers</h3>
                <p className="text-muted">
                  Every product selected for high turnover and demand
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
              Ready to Expand Your Profits?
            </h2>
            <p className="text-xl text-muted mb-8">
              Add these high-demand impulse products to your store and watch your revenue grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Become a Retailer
              </Link>
              <Link href="/storefront-services" className="btn-outline text-lg px-8 py-3">
                View Full Program
              </Link>
            </div>
            <p className="text-sm text-muted mt-6">
              Questions? <Link href="/contact" className="text-accent hover:underline">Contact us</Link> for more details.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
