import Link from 'next/link'
import Image from 'next/image'

const standardStyles = [
  { name: 'Ace', image: '/Standard/Ace.jpg' },
  { name: 'Drift', image: '/Standard/Drift.jpg' },
  { name: 'Titan', image: '/Standard/Titan.jpg' }
]

const premiumStyles = [
  { name: 'Aurora', image: '/Premium/Aurora.JPG' },
  { name: 'RushPro', image: '/Premium/RushPro.JPG' },
  { name: 'Velocity X Black', image: '/Premium/Velocity X Black.JPG' }
]

const mobileAccessories = [
  { name: '4-In-1 Cable – Super Fast', image: '/4-In-1 Cable - Super Fast.JPG' },
  { name: 'Dual Car Charger – Super Fast', image: '/Dual Car Charger - Super Fast.JPG' },
  { name: 'Earbuds – Lightning', image: '/Earbuds - Lightning.JPG' }
]

const beyondProducts = [
  { name: 'Beyond Clean Collection', image: '/beyondshades-01.png' },
  { name: 'Headwear & Caps', image: '/hats-01.png' },
  { name: 'Lighters & Impulse', image: '/lighters-01.png' }
]

const STANDARD_SHOP_URL =
  'https://socalshadeswholesale.myshopify.com/collections/standard-sunglasses-collection'
const PREMIUM_SHOP_URL =
  'https://socalshadeswholesale.myshopify.com/collections/premium-sunglasses-collection-elevated-style-superior-quality'
const MOBILE_SHOP_URL =
  'https://socalshadeswholesale.myshopify.com/collections/supercell-super-fast-charging-premium-mobile-accessories'
const BEYOND_SHOP_URL =
  'https://socalshadeswholesale.myshopify.com/collections/beyond-shades-collection-description'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Wholesale Sunglasses
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8">
              Our 10-Piece Sunglasses Rack — Designed to Maximize Your Profits
            </p>
            <div className="mt-4 flex justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Standard Sunglasses */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Standard Sunglasses
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Everyday best-sellers at easy price points. Classic shapes and colors that move quickly off the rack.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardStyles.map((style) => (
                <div
                  key={style.name}
                  className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-black">
                    <Image
                      src={style.image}
                      alt={`${style.name} standard sunglasses`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold">{style.name}</h3>
                    <p className="text-sm text-muted">
                      Reliable, easy-to-wear frames your customers recognize and trust.
                    </p>
                    <div className="mt-auto">
                      <a
                        href={STANDARD_SHOP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Sunglasses */}
      <section className="py-16 md:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Premium Sunglasses
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Elevated materials, polarized options, and bolder style stories for shoppers who want an upgrade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumStyles.map((style) => (
                <div
                  key={style.name}
                  className="bg-zinc-900/80 rounded-xl border border-zinc-700 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-black">
                    <Image
                      src={style.image}
                      alt={`${style.name} premium sunglasses`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold">{style.name}</h3>
                    <p className="text-sm text-muted">
                      Designer-inspired looks that justify higher ticket prices and capture attention.
                    </p>
                    <div className="mt-auto">
                      <a
                        href={PREMIUM_SHOP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Super-Fast Mobile Accessories */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Super-Fast Mobile Accessories
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                High-margin chargers, cables, and earbuds that customers grab when their phone is at 2%.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileAccessories.map((item) => (
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
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-muted">
                      Part of our Super-Fast charging program built for repeat add-on sales.
                    </p>
                    <div className="mt-auto">
                      <a
                        href={MOBILE_SHOP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Shades Products */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Beyond Shades Products
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Cleanliness, convenience, and impulse essentials that build bigger baskets around your counter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {beyondProducts.map((item) => (
                <div
                  key={item.name}
                  className="bg-zinc-800/60 rounded-xl border border-zinc-700 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-black">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-muted">
                      Plug these into your front-end to capture last-minute add-on purchases.
                    </p>
                    <div className="mt-auto">
                      <a
                        href={BEYOND_SHOP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Sunglasses */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Retailers Choose SoCal Shades
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">High Profit Margins</h3>
                <p className="text-muted">
                  200-300% markup potential on every pair
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Regular Rotation</h3>
                <p className="text-muted">
                  Fresh styles every 3 weeks keep customers coming back
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-muted">
                  UV400 protection and durable construction on every pair
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Impulse Sales</h3>
                <p className="text-muted">
                  Eye-catching displays drive quick purchase decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Selling?
            </h2>
            <p className="text-xl text-muted mb-8">
              Join hundreds of retailers already profiting from our 10-piece sunglasses rack program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Become a Retailer
              </Link>
              <Link href="/storefront-services" className="btn-outline text-lg px-8 py-3">
                Learn About Our Program
              </Link>
            </div>
            <p className="text-sm text-muted mt-6">
              Questions? <Link href="/contact" className="text-accent hover:underline">Contact us</Link> or call us today.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
