"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import RedirectConfirmModal from '@/components/RedirectConfirmModal'
import PromoModal from '@/components/PromoModal'

const standardStyles = [
  {
    name: 'Ace',
    image: '/Standard/Ace.jpg',
    description: 'Easy-wear classic frame that fits almost every face.'
  },
  {
    name: 'Drift',
    image: '/Standard/Drift.jpg',
    description: 'Laid-back, surf-inspired shape built for all-day wear.'
  },
  {
    name: 'Icon Gloss',
    image: '/Standard/Icon Gloss.jpg',
    description: 'Timeless glossy finish with a proven, high-turnover silhouette.'
  },
  {
    name: 'Icon Soft',
    image: '/Standard/Icon Soft.jpg',
    description: 'Matte soft-touch finish that feels premium at value pricing.'
  },
  {
    name: 'Legacy',
    image: '/Standard/Legacy.jpg',
    description: 'Everyday staple style that anchors your standard rack selection.'
  },
  {
    name: 'Radiant Black',
    image: '/Standard/Radiant Black.jpg',
    description: 'Bold black frames with just the right amount of shine.'
  },
  {
    name: 'Riff',
    image: '/Standard/Riff.jpg',
    description: 'Music-festival energy in a lightweight, easy-to-merch style.'
  },
  {
    name: 'Titan',
    image: '/Standard/Titan.jpg',
    description: 'Stronger, squared-off look that stands out on the rack.'
  },
  {
    name: 'Titan RV',
    image: '/Standard/Titan RV.jpg',
    description: 'Mirror-finish variation of Titan that grabs instant attention.'
  },
  {
    name: 'Vortex',
    image: '/Standard/Vortex.JPG',
    description: 'Edgier frame for customers who want something a little different.'
  }
]

const premiumStyles = [
  {
    name: 'Aurora',
    image: '/Premium/Aurora.JPG',
    description: 'Soft gradient lenses and smooth curves for a modern premium look.'
  },
  {
    name: 'FreeStride',
    image: '/Premium/FreeStride.JPG',
    description: 'Lightweight, sport-forward frame built for all-day comfort.'
  },
  {
    name: 'GlideForce',
    image: '/Premium/GlideForce.JPG',
    description: 'Aerodynamic styling with bold lines that stand out instantly.'
  },
  {
    name: 'RushPro',
    image: '/Premium/RushPro.JPG',
    description: 'High-energy wrap design that screams performance and speed.'
  },
  {
    name: 'Stormline',
    image: '/Premium/Stormline.JPG',
    description: 'Striking frame and lens combo for shoppers who want a statement piece.'
  },
  {
    name: 'Trailblaze',
    image: '/Premium/Trailblaze.JPG',
    description: 'Outdoor-ready style that looks great on the road or the trail.'
  },
  {
    name: 'Velocity X Black',
    image: '/Premium/Velocity X Black.JPG',
    description: 'Sleek, dark profile with a premium fit and finish.'
  },
  {
    name: 'Vortex Sport',
    image: '/Premium/Vortex Sport.JPG',
    description: 'Sport version of Vortex with extra edge and attitude.'
  }
]

const mobileAccessories = [
  {
    name: '4-In-1 Cable  Super Fast',
    image: '/SuperFast/4-In-1 Cable - Super Fast.JPG',
    description: 'Universal 4-in-1 cable that covers the most common devices at the counter.'
  },
  {
    name: 'C To C Cable  Super Fast',
    image: '/SuperFast/C To C Cable - Super Fast.JPG',
    description: 'USB-C to USB-C Super-Fast cable for modern phones and tablets.'
  },
  {
    name: 'Dual Car Charger  Super Fast',
    image: '/SuperFast/Dual Car Charger - Super Fast.JPG',
    description: 'High-output dual-port car charger that saves the day on the road.'
  },
  {
    name: 'Earbuds  Lightning',
    image: '/SuperFast/Earbuds - Lightning.JPG',
    description: 'Wired Lightning earbuds for iPhone users who forgot theirs at home.'
  },
  {
    name: 'Earbuds  Type C',
    image: '/SuperFast/Earbuds - Type C.JPG',
    description: 'Reliable Type-C earbuds that pair perfectly with Android shoppers.'
  },
  {
    name: 'USB To C Cable  Super Fast',
    image: '/SuperFast/USB To C Cable - Super Fast.JPG',
    description: 'USB-A to USB-C Super-Fast cable for quick top-off charging.'
  },
  {
    name: 'USB to Lightning  Super Fast',
    image: '/SuperFast/USB to Lightning - Super Fast.JPG',
    description: 'USB-A to Lightning cable for fast, dependable charging on the go.'
  },
  {
    name: 'Wall Charger  Super Fast',
    image: '/SuperFast/Wall Charger - Super Fast.JPG',
    description: 'Compact wall charger that turns any outlet into a Super-Fast charge point.'
  }
]

type BeyondCategory =
  | 'Caps'
  | 'Beanies'
  | 'Brim Hats'
  | 'Mobile Accessories'
  | 'Scents & Sanitizers'
  | 'Lighters & More'

type BeyondProduct = {
  name: string
  image: string
  description: string
  category: BeyondCategory
}

const beyondProducts: BeyondProduct[] = [
  // Caps
  {
    name: 'Backwoods Cap',
    image: '/BeyondShades/Backwoods-Cap.JPG',
    description: 'Backwoods graphic cap that brings street-style energy to your front counter.',
    category: 'Caps'
  },
  {
    name: 'Backwoods Multi Cap',
    image: '/BeyondShades/Backwoods-Multi-Cap.JPG',
    description: 'Multi-graphic Backwoods cap assortment that creates a bold, eye-catching display.',
    category: 'Caps'
  },
  {
    name: 'Blessed Cap',
    image: '/BeyondShades/Blessed-Cap.JPG',
    description: 'Faith-forward Blessed cap that customers instantly recognize and reach for.',
    category: 'Caps'
  },
  {
    name: 'Cash Cap',
    image: '/BeyondShades/Cash-Cap.JPG',
    description: 'Cash-themed cap that feels like a fun little flex at the counter.',
    category: 'Caps'
  },
  {
    name: 'Cookie Cap',
    image: '/BeyondShades/Cookie-Ca[.JPG',
    description: 'Cookie-inspired cap design that draws attention and sparks impulse smiles.',
    category: 'Caps'
  },
  {
    name: 'Guns & Roses Cap',
    image: '/BeyondShades/GunsNRoses-Cap.JPG',
    description: 'Rock-and-roll Guns & Roses cap for customers who love bold graphics.',
    category: 'Caps'
  },
  {
    name: 'Just Hit It Cap',
    image: '/BeyondShades/JustHitIt-Cap.JPG',
    description: 'Playful Just Hit It cap that always gets a second look.',
    category: 'Caps'
  },
  {
    name: 'Skull Cap',
    image: '/BeyondShades/Skull-Cap.JPG',
    description: 'Edgy skull cap that fits perfectly with customers who like a bolder style.',
    category: 'Caps'
  },
  {
    name: 'Smiley Cap',
    image: '/BeyondShades/Smiley-Cap.JPG',
    description: 'Bright smiley cap that feels fun, friendly, and easy to grab on impulse.',
    category: 'Caps'
  },
  {
    name: 'Super Dad Cap',
    image: '/BeyondShades/SuperDad-Cap.JPG',
    description: 'Super Dad cap that moves fast around Father’s Day and beyond.',
    category: 'Caps'
  },
  {
    name: 'Super Mom Cap',
    image: '/BeyondShades/SuperMom-Cap.JPG',
    description: 'Super Mom cap that sells itself near the register year-round.',
    category: 'Caps'
  },
  {
    name: 'TikTok Cap',
    image: '/BeyondShades/TikTok-Cap.JPG',
    description: 'TikTok-inspired cap that taps into what your younger shoppers recognize.',
    category: 'Caps'
  },

  // Beanies
  {
    name: 'Backwoods Beanie',
    image: '/BeyondShades/Backwoods-Beannie.JPG',
    description: 'Cozy Backwoods beanie that pairs perfectly with cooler-weather traffic.',
    category: 'Beanies'
  },
  {
    name: 'Backwoods Multi Beanie',
    image: '/BeyondShades/Backwoods-Multi-Beannie.JPG',
    description: 'Multi-style Backwoods beanie mix that makes a high-impact beanie display.',
    category: 'Beanies'
  },
  {
    name: 'Blessed Beanie',
    image: '/BeyondShades/Blessed-Beannie.JPG',
    description: 'Blessed beanie that adds a faith-forward touch to your winter assortment.',
    category: 'Beanies'
  },
  {
    name: 'Cash Beanie',
    image: '/BeyondShades/Cash-Beannie.JPG',
    description: 'Cash-themed beanie that stands out and invites impulse grabs.',
    category: 'Beanies'
  },
  {
    name: 'Cookie Beanie',
    image: '/BeyondShades/Cookie-Beannie.JPG',
    description: 'Cookie-inspired beanie that shoppers can’t help but pick up.',
    category: 'Beanies'
  },
  {
    name: 'Guns & Roses Beanie',
    image: '/BeyondShades/GunsNRoses-Beannie.JPG',
    description: 'Guns & Roses beanie with rock-and-roll attitude built in.',
    category: 'Beanies'
  },
  {
    name: 'Just Hit It Beanie',
    image: '/BeyondShades/JustHitIt-Beannie.JPG',
    description: 'Just Hit It beanie that brings a playful wink to your beanie rack.',
    category: 'Beanies'
  },
  {
    name: 'Skull Beanie',
    image: '/BeyondShades/Skull-Beannie.JPG',
    description: 'Skull beanie for customers who live in bold, graphic styles.',
    category: 'Beanies'
  },
  {
    name: 'Smiley Beanie',
    image: '/BeyondShades/Smiley-Beannie.JPG',
    description: 'Smiley beanie that keeps things warm, bright, and upbeat.',
    category: 'Beanies'
  },
  {
    name: 'Super Dad Beanie',
    image: '/BeyondShades/SuperDad-Beannie.JPG',
    description: 'Super Dad beanie that makes an easy gift add-on at checkout.',
    category: 'Beanies'
  },
  {
    name: 'Super Mom Beanie',
    image: '/BeyondShades/SuperMom-Beannie.JPG',
    description: 'Super Mom beanie that moves quickly year-round as a grab-and-go gift.',
    category: 'Beanies'
  },
  {
    name: 'TikTok Beanie',
    image: '/BeyondShades/TikTok-Beannie.JPG',
    description: 'TikTok-inspired beanie that connects with trend-focused shoppers.',
    category: 'Beanies'
  },

  // Brim hats
  {
    name: 'Camo Straw Hats',
    image: '/BeyondShades/CamoHats.png',
    description: 'Camo-print straw hats that add personality and sun protection in one grab.',
    category: 'Brim Hats'
  },
  {
    name: 'Logo Straw Hat',
    image: '/BeyondShades/LogoStrawHat.png',
    description: 'Brand-forward straw hat designed to stand tall on your front counter.',
    category: 'Brim Hats'
  },
  {
    name: 'Regular Straw Hat',
    image: '/BeyondShades/RegStrawHat.png',
    description: 'Classic straw hat style that works from beach runs to backyard BBQs.',
    category: 'Brim Hats'
  },

  // Scents & sanitizers
  {
    name: 'Backwoods Air Fresheners',
    image: '/BeyondShades/Backwoods-Beannie.JPG',
    description: 'Backwoods-branded scent story that keeps cars and small spaces smelling fresh.',
    category: 'Scents & Sanitizers'
  },
  {
    name: 'Scent Bomb',
    image: '/BeyondShades/ScentBomb.JPG',
    description: 'Powerful air freshener that keeps customers coming back for refills.',
    category: 'Scents & Sanitizers'
  },
  {
    name: 'Hand Sanitizer',
    image: '/BeyondShades/HandSanitizer.JPG',
    description: 'Convenient sanitizer that keeps hands clean and baskets a little bigger.',
    category: 'Scents & Sanitizers'
  },
  {
    name: 'Hand Wipes',
    image: '/BeyondShades/HandWipes.JPG',
    description: 'Travel-size wipes perfect for glove boxes, purses, and quick cleanups.',
    category: 'Scents & Sanitizers'
  },

  // Lighters & more / impulse protection
  {
    name: 'Stun & Pepper Combo',
    image: '/BeyondShades/StunPepperCombo.png',
    description: 'Practical self-defense combo that adds real utility to your front-end mix.',
    category: 'Lighters & More'
  }
]

const beyondCategories: { key: BeyondCategory; label: string }[] = [
  { key: 'Caps', label: 'Caps' },
  { key: 'Beanies', label: 'Beanies' },
  { key: 'Brim Hats', label: 'Brim Hats' },
  { key: 'Mobile Accessories', label: 'Mobile Accessories' },
  { key: 'Scents & Sanitizers', label: 'Scents & Sanitizers' },
  { key: 'Lighters & More', label: 'Lighters & More' }
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
  const [redirectOpen, setRedirectOpen] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)

  const handleStandardBuyNow = () => {
    setRedirectUrl(STANDARD_SHOP_URL)
    setRedirectOpen(true)
  }

  const handlePremiumBuyNow = () => {
    setRedirectUrl(PREMIUM_SHOP_URL)
    setRedirectOpen(true)
  }

  const handleMobileBuyNow = () => {
    setRedirectUrl(MOBILE_SHOP_URL)
    setRedirectOpen(true)
  }

  const handleBeyondBuyNow = () => {
    setRedirectUrl(BEYOND_SHOP_URL)
    setRedirectOpen(true)
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-zinc-900 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Socal Shades Products
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8">
              Our Sunglasses and Beyond Shades Products — Designed to Maximize Your Profits
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
                      {style.description}
                    </p>
                    <div className="mt-auto flex justify-center">
                      <button
                        type="button"
                        onClick={handleStandardBuyNow}
                        className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                      >
                        Buy Now
                      </button>
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
                      {style.description}
                    </p>
                    <div className="mt-auto flex justify-center">
                      <button
                        type="button"
                        onClick={handlePremiumBuyNow}
                        className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                      >
                        Buy Now
                      </button>
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
                      {item.description}
                    </p>
                    <div className="mt-auto flex justify-center">
                      <button
                        type="button"
                        onClick={handleMobileBuyNow}
                        className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                      >
                        Buy Now
                      </button>
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

            <div className="space-y-12">
              {beyondCategories.map((category) => {
                const items = beyondProducts.filter((item) => item.category === category.key)
                if (items.length === 0) return null

                return (
                  <div key={category.key}>
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                        {category.label}
                      </h3>
                      <p className="text-sm sm:text-base text-muted">
                        Explore our Beyond Shades {category.label.toLowerCase()} collection.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((item) => (
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
                            <h4 className="text-xl font-bold">{item.name}</h4>
                            <p className="text-sm text-muted">
                              {item.description}
                            </p>
                            <div className="mt-auto flex justify-center">
                              <button
                                type="button"
                                onClick={handleBeyondBuyNow}
                                className="btn-learn-more text-sm px-4 py-2 inline-flex items-center justify-center"
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
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
      <RedirectConfirmModal
        shopUrl={redirectUrl}
        open={redirectOpen}
        onClose={() => {
          setRedirectOpen(false)
          setRedirectUrl(null)
        }}
      />
      <PromoModal />
    </main>
  )
}
