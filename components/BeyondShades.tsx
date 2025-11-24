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
    image: '/supplements-01.png',
    href: '/beyond'
  },
  {
    title: 'Lighters & Impulse',
    description: 'High‑turn items placed for visibility to increase add‑on sales.',
    image: '/lighters-01.png',
    href: '/beyond'
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
          {/* Left: main Beyond Shades display */}
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image
              src="/beyond-display-01.png"
              alt="Beyond Shades impulse display"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 opacity-0 animate-fadeSlide">
              <Image
                src="/beyond-display-02.png"
                alt="Beyond Shades impulse display alternate"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Right: 3 Beyond Shades tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-5">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="product-card flex flex-col h-full px-4 py-4 sm:px-5 sm:py-5"
              >
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-3 sm:mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center pr-1 sm:pr-3">
                  <h3 className="font-semibold text-sm sm:text-base mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-snug">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}