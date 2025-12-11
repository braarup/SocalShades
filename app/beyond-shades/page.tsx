"use client"

import Link from 'next/link'
import Image from 'next/image'

const superFastItems = [
  {
    name: '4-In-1 Cable – Super Fast',
    image: '/SuperFast/4-In-1 Cable - Super Fast.JPG',
    description: 'Universal 4-in-1 cable that covers the most common devices at the counter.'
  },
  {
    name: 'C To C Cable – Super Fast',
    image: '/SuperFast/C To C Cable - Super Fast.JPG',
    description: 'USB-C to USB-C Super-Fast cable for modern phones and tablets.'
  },
  {
    name: 'Dual Car Charger – Super Fast',
    image: '/SuperFast/Dual Car Charger - Super Fast.JPG',
    description: 'High-output dual-port car charger that saves the day on the road.'
  },
  {
    name: 'Earbuds – Lightning',
    image: '/SuperFast/Earbuds - Lightning.JPG',
    description: 'Wired Lightning earbuds for iPhone users who forgot theirs at home.'
  },
  {
    name: 'Earbuds – Type C',
    image: '/SuperFast/Earbuds - Type C.JPG',
    description: 'Reliable Type-C earbuds that pair perfectly with Android shoppers.'
  },
  {
    name: 'USB To C Cable – Super Fast',
    image: '/SuperFast/USB To C Cable - Super Fast.JPG',
    description: 'USB-A to USB-C Super-Fast cable for quick top-off charging.'
  },
  {
    name: 'USB to Lightning – Super Fast',
    image: '/SuperFast/USB to Lightning - Super Fast.JPG',
    description: 'USB-A to Lightning cable for fast, dependable charging on the go.'
  },
  {
    name: 'Wall Charger – Super Fast',
    image: '/SuperFast/Wall Charger - Super Fast.JPG',
    description: 'Compact wall charger that turns any outlet into a Super-Fast charge point.'
  }
]

export default function BeyondShadesPage() {

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Beyond Shades
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8">
              Super-Fast Mobile Accessories &amp; Impulse Add-Ons
            </p>
            <p className="text-lg text-muted mb-8 max-w-3xl mx-auto">
              Plug in a high-margin, high-demand FastCell display that keeps customers powered up and your counter working harder.
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

      {/* FastCell Display Overview (rack-style layout) */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                FastCell Super-Fast Display
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                A dedicated front-end mobile accessories program designed to capture last-minute “my phone is at 2%” purchases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12">
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 h-full">
                <div className="relative w-full h-full min-h-[260px]">
                  <Image
                    src="/FastCell-02.png"
                    alt="FastCell Super-Fast mobile accessories display"
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
                      <span>Branded FastCell display packed with Super-Fast chargers, cables, and earbuds.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mix of 8 core SKUs covering Lightning, USB-C, and multi-tip needs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Eye-catching packaging that makes it easy for customers to self-serve.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Designed for front-counter, endcap, or near-register placement.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700">
                  <h4 className="font-bold text-xl mb-3 text-accent">High-Margin, High-Need</h4>
                  <p className="text-muted mb-3">
                    Customers will pay a premium to solve an urgent charging problem. FastCell is built to capture that moment.
                  </p>
                  <div className="text-3xl font-bold">150–250% Markup</div>
                  <div className="text-muted">Typical margins on Super-Fast cables, chargers, and earbuds.</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <p className="text-lg">
                <span className="font-bold text-accent">Perfect Add-On Program:</span> Drop the FastCell display next to your sunglasses to grow every ticket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Super-Fast Mobile Accessories Lineup (with product images) */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Super-Fast Mobile Accessories
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Product Lineup
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Eight proven SKUs that cover the most common “I need this now” charging and audio emergencies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {superFastItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-black">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-muted">
                      {item.description}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      Ideal as a fast add-on when customers realize they left their charger or cable at home.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Add FastCell to Your Counter?
            </h2>
            <p className="text-xl text-muted mb-8">
              Turn dead batteries into extra revenue with a dedicated mobile accessories display that customers can&apos;t miss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Become a Retailer
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
