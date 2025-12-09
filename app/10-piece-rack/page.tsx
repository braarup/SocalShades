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
                    <span>Display rack at no cost.</span>
                  </li>
                </ul>
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

      {/* Standard Collection Popular Styles */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Standard Collection Popular Styles
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                A snapshot of some of our best-selling standard collection frames that keep customers coming back.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ace */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Ace.jpg"
                    alt="Ace standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Ace</h3>
                  <p className="text-sm text-muted">
                    Clean, everyday frames that work for almost any face shape. Ace is the go-to grab for customers who want simple, easy style without overthinking it.
                  </p>
                </div>
              </div>

              {/* Drift */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Drift.jpg"
                    alt="Drift standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Drift</h3>
                  <p className="text-sm text-muted">
                    A relaxed, laid-back silhouette with just enough edge to stand out. Perfect for beach days, road trips, and casual everyday wear.
                  </p>
                </div>
              </div>

              {/* Icon Gloss */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Icon Gloss.jpg"
                    alt="Icon Gloss standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Icon Gloss</h3>
                  <p className="text-sm text-muted">
                    A polished, glossy finish that looks premium without the premium price tag. Shoppers love the way Icon Gloss dresses up any outfit in seconds.
                  </p>
                </div>
              </div>

              {/* Icon Soft */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Icon Soft.jpg"
                    alt="Icon Soft standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Icon Soft</h3>
                  <p className="text-sm text-muted">
                    A softer, more matte take on the classic icon profile. Ideal for customers who want a modern look that still feels understated and easy to wear.
                  </p>
                </div>
              </div>

              {/* Legacy */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Legacy.jpg"
                    alt="Legacy standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Legacy</h3>
                  <p className="text-sm text-muted">
                    A timeless, heritage-inspired frame that feels familiar and trustworthy. Legacy appeals to shoppers who want a classic look that never goes out of style.
                  </p>
                </div>
              </div>

              {/* Radiant Black */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Radiant Black.jpg"
                    alt="Radiant Black standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Radiant Black</h3>
                  <p className="text-sm text-muted">
                    Deep black frames with a bold presence that pops on the rack. Radiant Black is a natural choice for customers who love a sharp, all-black look.
                  </p>
                </div>
              </div>

              {/* Riff */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Riff.jpg"
                    alt="Riff standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Riff</h3>
                  <p className="text-sm text-muted">
                    A music-festival-ready shape with a fun, laid-back vibe. Riff grabs attention from younger shoppers looking for something fresh and playful.
                  </p>
                </div>
              </div>

              {/* Titan RV */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Titan RV.jpg"
                    alt="Titan RV standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Titan RV</h3>
                  <p className="text-sm text-muted">
                    A wrap-style profile built for drivers and outdoor work. Titan RV offers wide coverage and a secure fit that customers instantly feel.
                  </p>
                </div>
              </div>

              {/* Titan */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Titan.jpg"
                    alt="Titan standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Titan</h3>
                  <p className="text-sm text-muted">
                    Strong, confident lines with a lightweight feel. Titan is a great everyday option for customers who want something tough but comfortable.
                  </p>
                </div>
              </div>

              {/* Vortex */}
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/Standard/Vortex.JPG"
                    alt="Vortex standard sunglasses"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold">Vortex</h3>
                  <p className="text-sm text-muted">
                    A bold, angular frame that looks fast even standing still. Vortex is made for shoppers who want a statement piece that still sells at everyday prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
