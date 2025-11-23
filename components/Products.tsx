import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    name: 'Regular Collection',
    description: 'Everyday best-sellers at easy price points your customers love.',
    badge: 'Regular',
    image: '/sunglasses-regular.png'
  },
  {
    name: 'Premium Collection',
    description: 'Upgraded lenses and finishes for shoppers who want more.',
    badge: 'Premium',
    image: '/sunglasses-premium.png'
  },
  {
    name: '10-Piece Rack Program',
    description: 'Compact, high-impact rack that keeps your top movers front and center.',
    badge: '10-Piece Rack',
    image: '/sunglasses-rack.png'
  }
]

export default function Products() {
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
          {/* Left: main display with two images */}
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image
              src="/rack-display-01.png"
              alt="SoCal Shades sunglass display"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 opacity-0 animate-fadeSlide">
              <Image
                src="/rack-display-02.png"
                alt="SoCal Shades sunglass display alternate"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Right: 3 product tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-5">
            {products.map((product, index) => (
              <Link
                key={index}
                href="/sunglasses"
                className="product-card flex h-full items-center px-4 py-3 sm:px-5 sm:py-4"
              >
                <div className="w-18 h-18 sm:w-22 sm:h-22 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 sm:ml-4 flex flex-col justify-center pr-1 sm:pr-3">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3 className="font-semibold text-sm sm:text-base truncate max-w-[7.5rem] sm:max-w-[9rem] md:max-w-[10rem]">
                      {product.name}
                    </h3>
                    <span className="badge-pill text-[0.6rem] sm:text-[0.65rem] px-2 py-0.5 whitespace-nowrap">
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm line-clamp-2 leading-snug">
                    {product.description}
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