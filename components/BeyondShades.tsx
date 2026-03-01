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
    href: '/products#super-fast-mobile',
    shopUrl: 'https://socalshadeswholesale.myshopify.com/collections/supercell-super-fast-charging-premium-mobile-accessories'
  },
  {
    title: 'Beyond Clean Collection',
    description: 'Essential hygiene and freshness products designed for daily convenience and peace of mind.',
    image: '/beyondshades-01.png',
    href: '/products#beyond-scents-sanitizers'
  },
    {
    title: 'Headwear & Caps',
    description: 'Branded and trend-forward hats that pair perfectly with sunglasses.',
    image: '/hats-01.png',
    href: '/products#beyond-caps'
  },
  {
    title: 'Lighters & Impulse',
    description: 'High‑turn items placed for visibility to increase add‑on sales.',
    image: '/lighters-01.png',
    href: '/products#beyond-lighters-more'
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

        <div className="grid lg:grid-cols-[1.1fr,1.9fr] gap-8 items-stretch">
          {/* Left: main Beyond Shades rotating display (match flagship sizing) */}
          <div className="relative w-full aspect-[4/3] max-w-3xl mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                className={`hero-slide beyond-hero-slide beyond-hero-slide-${index}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 800px, (min-width: 1024px) 640px, (min-width: 640px) 480px, 100vw"
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

          {/* Right: 4 Beyond Shades tiles (same format as Flagship small tiles) */}
          <div className="beyond-grid-2x2">
            {services.map((service, index) => (
              <div
                key={index}
                className="product-card flex flex-col h-full px-4 py-4 sm:px-5 sm:py-5"
              >
                <Link href={service.href} className="block">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-3 sm:mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={640}
                      height={480}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center pr-1 sm:pr-3 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base mb-0.5">
                      {service.title}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm leading-snug line-clamp-2 mt-0.5">
                      {service.description}
                    </p>
                  </div>
                </Link>
                <div className="mt-3 flex justify-center">
                  <Link
                    href={service.href}
                    className="btn-learn-more text-xs sm:text-sm px-4 py-2"
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