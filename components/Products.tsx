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
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-end">
              <Link
                href="/products"
                className="btn-primary text-xs sm:text-sm px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: 3 product tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-5">
            {products.map((product, index) => (
              <Link
                key={index}
                href="/sunglasses"
                className="product-card flex flex-col h-full px-4 py-4 sm:px-5 sm:py-5"
              >
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-3 sm:mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center pr-1 sm:pr-3 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm sm:text-base truncate">
                      {product.name}
                    </h3>
                    <span className="badge-pill text-[0.6rem] sm:text-[0.65rem] px-2 py-0.5 whitespace-nowrap">
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm line-clamp-2 leading-snug mt-0.5">
                    {product.description}
                  </p>
                </div>
                <div className="mt-3">
                  <Link
                    href="/store" // future online store
                    className="btn-outline w-full text-center text-xs sm:text-sm"
                  >
                    Buy Now
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}