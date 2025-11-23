import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    name: 'Matte Wayfarer',
    description: 'Our #1 seller. Universal fit.',
    badge: 'Polarized',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400'
  },
  {
    name: 'Classic Aviator',
    description: 'All‑day comfort. High turnover.',
    badge: "Men's",
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400'
  },
  {
    name: 'Round Trend',
    description: 'Fashion‑forward. Great impulse buy.',
    badge: 'Trendy',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=400'
  },
  {
    name: 'Sport Wrap',
    description: 'Outdoor favorite. High margin.',
    badge: 'Polarized',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=400'
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

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: main display with two images */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image
              src={products[0].image}
              alt={products[0].name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 opacity-0 animate-fadeSlide">
              <Image
                src={products[1].image}
                alt={products[1].name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Right: 6 product tiles (3 across, 2 high) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {products.concat(products).slice(0, 6).map((product, index) => (
              <Link
                key={index}
                href="/sunglasses"
                className="product-card flex h-full"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-center py-2 pr-2">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm sm:text-base truncate">{product.name}</h3>
                    <span className="badge-pill text-[0.65rem] px-2 py-0.5 whitespace-nowrap">{product.badge}</span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm line-clamp-2">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}