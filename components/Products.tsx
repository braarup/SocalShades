"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import RedirectConfirmModal from './RedirectConfirmModal'

const heroImages = [
  {
    src: '/10Piece-01.png',
    alt: 'SoCal Shades 10-piece display',
    caption: 'Standard Rack Collection'
  },
  {
    src: '/10Piece-02.png',
    alt: 'SoCal Shades 10-piece display alternate',
    caption: '10-piece Rack Collection'
  },
  {
    src: '/Premium-01.png',
    alt: 'SoCal Shades premium collection display',
    caption: 'Premium Rack Collection.'
  }
]

const products = [
  {
    name: 'Standard Collection',
    description: 'Everyday best-sellers at easy price points your customers love.',
    badge: 'Standard',
    image: '/standardcollage-01.jpg',
    shopUrl:
      'https://brandons-store-123472.myshopify.com/collections/standard-sunglasses-collection'
  },
  {
    name: 'Premium Collection',
    description: 'Upgraded lenses and finishes for shoppers who want more.',
    badge: 'Premium',
    image: '/premiumcollage-01.jpg',
    shopUrl:
      'https://brandons-store-123472.myshopify.com/collections/premium-sunglasses-collection-elevated-style-superior-quality'
  },
  {
    name: '10-Piece Rack Program',
    description: 'Compact, high-impact rack that keeps your top movers front and center.',
    image: '/10Piece-02.png'
  }
]

export default function Products() {
  const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || 'https://your-shop-name.myshopify.com'
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)

  return (
    <section id="products" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="section-title accent-underline">Flagship Sunglasses</h2>
            <p className="section-sub mt-4">
              Top movers, proven at the counter. Polarized, trendy, and everyday styles your customers pick up fast.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr,1.9fr] gap-8 items-stretch">
          {/* Left: main display with three images */}
          <div className="relative w-full aspect-[4/3] max-w-3xl mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                className={`hero-slide hero-slide-${index}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 800px, (min-width: 1024px) 640px, (min-width: 640px) 480px, 100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-12 pt-8 flex items-end">
                  <p className="text-[0.7rem] sm:text-xs text-zinc-200 max-w-xs">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-end">
              <Link
                href="/products"
                className="btn-learn-more text-xs sm:text-sm px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: 3 product tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="product-card flex flex-col h-full px-4 py-4 sm:px-5 sm:py-5"
              >
                <Link href="/products" className="block">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-3 sm:mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={640}
                      height={480}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center pr-1 sm:pr-3 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">
                        {product.name}
                      </h3>
                      {product.name !== '10-Piece Rack Program' && (
                        <span className="badge-pill text-[0.6rem] sm:text-[0.65rem] px-2 py-0.5 whitespace-nowrap">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-muted text-xs sm:text-sm line-clamp-2 leading-snug mt-0.5">
                      {product.description}
                    </p>
                  </div>
                </Link>
                <div className="mt-3 flex justify-center">
                  {product.name === '10-Piece Rack Program' ? (
                    <Link
                      href="/10-piece-rack"
                      className="btn-learn-more text-xs sm:text-sm px-4 py-2"
                    >
                      Learn More
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRedirectUrl(product.shopUrl || shopifyUrl)}
                      className="btn-outline w-full text-center text-xs sm:text-sm inline-flex items-center justify-center px-4 py-2"
                    >
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RedirectConfirmModal
        shopUrl={redirectUrl}
        open={redirectUrl !== null}
        onClose={() => setRedirectUrl(null)}
      />
    </section>
  )
}