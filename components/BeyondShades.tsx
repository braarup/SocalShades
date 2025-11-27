import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Mobile Accessories',
    description: 'Chargers, cables, car mounts — the essentials customers forget and buy on impulse.',
    image: '/mobile-01.png',
    href: '/mobile'
  },
  {
    title: 'Supplements',
    description: 'Energy shots and wellness packs that move quickly at the counter.',
    image: '/wellness-01.png',
    href: '/beyond'
  },
  {
    title: 'Lighters & Impulse',
    description: 'High‑turn items placed for visibility to increase add‑on sales.',
    image: '/lighters-01.png',
    href: '/beyond'
  },
  {
    title: 'Headwear & Caps',
    description: 'Branded and trend-forward hats that pair perfectly with sunglasses.',
    image: '/hats-01.png',
    href: '/beyond'
  },
  {
    title: 'Wellness & Energy',
    description: 'Grab-and-go wellness items that keep customers fueled on the go.',
    image: '/wellness-01.png',
    href: '/beyond'
  },
  {
    title: 'Impulse Essentials',
    description: 'Must-have everyday items positioned for quick, last-minute grabs.',
    image: '/impulse-01.png',
    href: '/beyond'
  }
]

export default function BeyondShades() {
  const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || 'https://your-shop-name.myshopify.com'

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
          {/* Left: main Beyond Shades display */}
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image
              src="/FastCell-02.png"
              alt="Beyond Shades impulse display"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-end">
              <Link
                href="/beyond-shades"
                className="btn-learn-more text-xs sm:text-sm px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: 6 Beyond Shades tiles (3 across, 2 high, extra compact on mobile) */}
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 xl:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="product-card flex flex-col h-full px-2.5 py-2.5 sm:px-3 sm:py-3 text-[0.7rem] sm:text-xs"
              >
                <Link href={service.href} className="block">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-2 sm:mb-2.5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center pr-0.5 sm:pr-1.5 flex-1">
                    <h3 className="font-semibold text-[0.7rem] sm:text-xs mb-0.5">
                      {service.title}
                    </h3>
                    <p className="text-muted text-[0.65rem] sm:text-[0.7rem] leading-snug line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </Link>
                <div className="mt-1.5 sm:mt-2">
                  <a
                    href={shopifyUrl}
                    className="btn-outline w-full text-center text-[0.65rem] sm:text-[0.7rem] inline-flex items-center justify-center px-3 py-1.5"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}