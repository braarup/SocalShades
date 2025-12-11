"use client";

import Link from 'next/link'
import Image from 'next/image'

const heroImages = [
  {
    src: '/FastCell-01.png',
    alt: 'Super Super fast charging'
  },
  {
    src: '/FastCell-02.png',
    alt: 'Super Super fast charging'
  },
]

const services = [
  {
    title: 'Mobile Accessories',
    description: 'Chargers, cables, car mounts — the essentials customers forget and buy on impulse.',
    image: '/mobile-01.png',
    href: '/beyond-shades',
    shopUrl: 'https://socalshadeswholesale.myshopify.com/collections/supercell-super-fast-charging-premium-mobile-accessories'
  },
  {
    title: 'Beyond Clean Collection',
    description: 'Essential hygiene and freshness products designed for daily convenience and peace of mind.',
    image: '/beyondshades-01.png',
    href: '/products'
  },
    {
    title: 'Headwear & Caps',
    description: 'Branded and trend-forward hats that pair perfectly with sunglasses.',
    image: '/hats-01.png',
    href: '/products'
  },
  {
    title: 'Lighters & Impulse',
    description: 'High‑turn items placed for visibility to increase add‑on sales.',
    image: '/lighters-01.png',
    href: '/products'
  }
]

export default function BeyondShades() {
  return (
    <section id="beyond" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="section-title">
              Beyond <span className="text-accent">Shades</span>
            </h2>
            <p className="section-sub mt-4">
              Boost basket size with counter‑ready accessories and daily‑demand add‑ons.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr,1.9fr] gap-4 md:gap-6 items-stretch">
          {/* Left: main Beyond Shades rotating display */}
          <div className="relative w-full aspect-[16/9] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                className={`hero-slide beyond-hero-slide beyond-hero-slide-${index}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain object-center bg-black"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-end">
              <Link
                href="/beyond-shades"
                className="btn-learn-more text-xs sm:text-sm px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: 4 Beyond Shades tiles (compact cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="product-card flex flex-col h-full px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm"
              >
                <Link href={service.href} className="block">
                  <div
                    className="w-full aspect-[5/4] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-2.5 sm:mb-3"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={320}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center pr-1.5 sm:pr-3 flex-1">
                    <h3 className="font-semibold text-[0.75rem] sm:text-sm mb-0.5">
                      {service.title}
                    </h3>
                    <p className="text-muted text-[0.7rem] sm:text-[0.8rem] leading-snug line-clamp-2 mt-0.5">
                      {service.description}
                    </p>
                  </div>
                </Link>
                <div className="mt-2 sm:mt-2.5 flex justify-center">
                  <Link
                    href={service.href}
                    className="btn-learn-more inline-flex items-center justify-center text-[0.7rem] sm:text-xs px-3 py-1.5"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}