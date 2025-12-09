import Link from 'next/link'
import Image from 'next/image'

export default function TenPieceRackPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              10-Piece Sunglasses Rack
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8">
              A compact, curated sunglasses program designed to maximize visibility and turn everyday customers into buyers.
            </p>
            <div className="mt-4 flex justify-center">
              <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-3">
                Open a Rack Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Piece Rack Overview (no pricing) */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                The 10-Piece Sunglasses Rack
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                A carefully curated selection of styles that sell. Each rack is designed for maximum visual impact and optimized for impulse purchases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700">
                <h3 className="text-2xl font-bold mb-6 text-accent">What&apos;s Included</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>10 pairs of trend-forward sunglasses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Mix of premium and standard styles to fit every shopper.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Professional countertop display rack.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Seasonal style rotation every 3 weeks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>UV400 protection on all styles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Free display rack included with the program.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/10Piece-01.png"
                      alt="10-piece sunglasses rack display"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700">
                  <h4 className="font-bold text-xl mb-3 text-accent">Profit Margin Potential</h4>
                  <p className="text-muted mb-3">
                    Our 10-piece rack program is designed to give retailers a healthy return on every sale.
                  </p>
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-muted">Estimated profit margin potential on the program.</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <p className="text-lg">
                <span className="font-bold text-accent">Set it and let it work:</span> Place the rack near checkout and let seasonal styles and high visibility do the selling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
