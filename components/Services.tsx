"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  return (
    <section id="services" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              Custom Storefronts, Built to <span className="text-accent">Sell</span>
            </h2>
            <p className="section-sub mt-4">
              We design displays and shelving layouts that pull attention, guide traffic, and turn browsers into buyers.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="text-muted font-bold">1</span>
                <div>
                  <h3 className="font-bold mb-1">Displays & Shelving</h3>
                  <p className="text-muted">Branded racks and counter layouts optimized for visibility and reach.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-muted font-bold">2</span>
                <div>
                  <h3 className="font-bold mb-1">Merchandising Expertise</h3>
                  <p className="text-muted">Decades of retail know‑how on placement, signage, and planograms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-muted font-bold">3</span>
                <div>
                  <h3 className="font-bold mb-1">Profit‑First Design</h3>
                  <p className="text-muted">We track what moves product and engineer for higher margins.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/retailer-signup" className="btn-learn-more">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="btn-outline">
                See Before & After
              </Link>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="space-y-6">
              <div>
                <button
                  type="button"
                  onClick={() => setModalImage('/Unorganized.png')}
                  className="block w-full focus:outline-none"
                >
                  <div
                    className="h-72 md:h-80 bg-cover bg-center rounded-lg border border-zinc-700 cursor-pointer"
                    style={{ backgroundImage: "url('/Unorganized.png')" }}
                  />
                </button>
                <p className="text-muted text-sm mt-2">Before: Unutilized counter opportunity</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setModalImage('/Organized.png')}
                  className="block w-full focus:outline-none"
                >
                  <div
                    className="h-72 md:h-80 bg-cover bg-center rounded-lg border border-zinc-700 cursor-pointer"
                    style={{ backgroundImage: "url('/Organized.png')" }}
                  />
                </button>
                <p className="text-muted text-sm mt-2">After: Revenue-generating sunglass rack display</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-zinc-900 border border-zinc-700 text-sm text-white flex items-center justify-center hover:bg-zinc-800"
            >
              ×
            </button>
            <img
              src={modalImage}
              alt={modalImage === '/Unorganized.png' ? 'Before: Unutilized counter opportunity' : 'After: Revenue-generating sunglass rack display'}
              className="w-full h-auto rounded-xl border border-zinc-700 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}