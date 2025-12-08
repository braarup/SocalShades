import Link from 'next/link'
import Image from 'next/image'

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

      {/* 10-Piece Rack Overview */}
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
                    <span>10 pairs of trend-forward sunglasses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Mix of premium and standard styles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Professional countertop display rack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Seasonal style rotation every 3 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>UV400 protection on all styles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Free display rack (yours to keep)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-lg p-8">
                  <div className="text-4xl font-bold text-accent mb-2">$120-$180</div>
                  <div className="text-muted mb-4">Suggested Retail Price Range</div>
                  <div className="text-2xl font-bold mb-2">$40-$60</div>
                  <div className="text-muted">Your Wholesale Cost (per rack)</div>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
                  <h4 className="font-bold text-xl mb-3 text-accent">Profit Potential</h4>
                  <p className="text-muted mb-3">
                    Sell at $12-$18 per pair with wholesale cost of $4-$6 each.
                  </p>
                  <div className="text-3xl font-bold">$80-$120</div>
                  <div className="text-muted">Profit per rack sold out</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <p className="text-lg">
                <span className="font-bold text-accent">Free Display Rack:</span> The professional countertop rack is included at no charge — valued at $150!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Premium Rack Overview */}
      <section className="py-16 md:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Premium Rack Overview
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Highlight your best shoppers with our upgraded premium rack mix designed for higher tickets and repeat purchases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              <div className="bg-zinc-900/70 rounded-lg p-8 border border-zinc-700">
                <h3 className="text-2xl font-bold mb-6 text-accent">What&apos;s Different with Premium</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Higher-end frames, polarized options, and upgraded finishes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Curated styles built to support $15–$18 retail price points.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Great for upscale locations or stores wanting a “step-up” option.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Pairs well with standard racks so shoppers can trade up.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-lg p-8">
                  <div className="text-4xl font-bold text-accent mb-2">$150–$220</div>
                  <div className="text-muted mb-4">Suggested Premium Rack Retail Range</div>
                  <div className="text-2xl font-bold mb-2">$60–$80</div>
                  <div className="text-muted">Your Wholesale Cost (per premium rack)</div>
                </div>

                <div className="bg-zinc-900/60 rounded-lg p-6 border border-zinc-700">
                  <h4 className="font-bold text-xl mb-3 text-accent">Premium Profit Potential</h4>
                  <p className="text-muted mb-3">
                    At $6 per pair and $15–$18 retail, premium racks deliver even stronger dollars per sale.
                  </p>
                  <div className="text-3xl font-bold">$90–$140</div>
                  <div className="text-muted">Estimated profit per premium rack sold out</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <p className="text-lg">
                <span className="font-bold text-accent">Upgrade Option:</span> Use premium racks alongside standard racks to give shoppers an easy “good, better, best” choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium vs Standard */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Premium & Standard Collections
              </h2>
              <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                Choose the mix that works best for your customers. Both collections deliver style, quality, and profit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Premium Collection */}
              <Link href="/sunglasses" className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-8 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="text-accent text-sm font-bold uppercase tracking-wider mb-3">Premium Collection</div>
                <h3 className="text-3xl font-bold mb-4">High-End Styles</h3>
                <div className="text-4xl font-bold text-accent mb-6">$6/pair</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Designer-Inspired Frames</div>
                      <div className="text-sm text-muted">Trend-forward styles that command premium prices</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Polarized Lenses Available</div>
                      <div className="text-sm text-muted">Superior glare reduction and clarity</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Metal & Acetate Options</div>
                      <div className="text-sm text-muted">Premium materials for upscale appeal</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">UV400 Protection</div>
                      <div className="text-sm text-muted">100% UVA and UVB blocking</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Premium Packaging</div>
                      <div className="text-sm text-muted">Protective case and cleaning cloth included</div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700 mb-6">
                  <div className="text-sm text-muted mb-1">Suggested Retail Price</div>
                  <div className="text-2xl font-bold">$15-$18</div>
                  <div className="text-sm text-accent mt-2">= $9-$12 profit per pair</div>
                </div>

                <div className="text-sm text-muted">
                  Perfect for fashion-forward shoppers and upscale retail environments
                </div>
              </Link>

              {/* Standard Collection */}
              <Link href="/sunglasses" className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-8 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="text-accent text-sm font-bold uppercase tracking-wider mb-3">Standard Collection</div>
                <h3 className="text-3xl font-bold mb-4">Classic Styles</h3>
                <div className="text-4xl font-bold text-accent mb-6">$4/pair</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Timeless Designs</div>
                      <div className="text-sm text-muted">Aviators, wayfarers, and classic shapes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Durable Construction</div>
                      <div className="text-sm text-muted">Quality materials built to last</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Multiple Color Options</div>
                      <div className="text-sm text-muted">Variety to appeal to all customers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">UV400 Protection</div>
                      <div className="text-sm text-muted">100% UVA and UVB blocking</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Fast Movers</div>
                      <div className="text-sm text-muted">High turnover styles for quick profits</div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700 mb-6">
                  <div className="text-sm text-muted mb-1">Suggested Retail Price</div>
                  <div className="text-2xl font-bold">$12-$15</div>
                  <div className="text-sm text-accent mt-2">= $8-$11 profit per pair</div>
                </div>

                <div className="text-sm text-muted">
                  Ideal for high-volume sales and impulse purchases
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Style Categories */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Popular Style Categories
              </h2>
              <p className="text-lg text-muted">
                We rotate seasonal styles to keep your inventory fresh and on-trend
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Aviators */}
              <Link href="/sunglasses" className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Aviators</h3>
                <p className="text-muted">
                  Timeless teardrop design. Available in classic metal and modern variations.
                </p>
              </Link>

              {/* Wayfarers */}
              <Link href="/sunglasses" className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Wayfarers</h3>
                <p className="text-muted">
                  Bold, iconic shape that never goes out of style. Popular with all ages.
                </p>
              </Link>

              {/* Round */}
              <Link href="/sunglasses" className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Round Frames</h3>
                <p className="text-muted">
                  Vintage-inspired circles and ovals. Perfect for boho and retro looks.
                </p>
              </Link>

              {/* Cat Eye */}
              <Link href="/sunglasses" className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cat Eye</h3>
                <p className="text-muted">
                  Fashion-forward upswept frames. A favorite among style-conscious women.
                </p>
              </Link>

              {/* Sport/Wrap */}
              <Link href="/sunglasses" className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sport & Wrap</h3>
                <p className="text-muted">
                  Athletic performance styles. Lightweight with maximum coverage.
                </p>
              </Link>

              {/* Oversized */}
              <Link href="/sunglasses" className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-accent/50 transition-all block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Oversized</h3>
                <p className="text-muted">
                  Bold statement pieces. Maximum sun protection and glamorous appeal.
                </p>
              </Link>
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
