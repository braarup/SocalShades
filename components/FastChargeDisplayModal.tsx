"use client"

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Sku = {
  name: string
  image: string
}

type Category = {
  label: string
  skus: [Sku, Sku]
}

const categories: Category[] = [
  {
    label: 'Cables',
    skus: [
      { name: '4-In-1 Cable - Super Fast', image: '/FastCell-4in1.png' },
      { name: 'USB To C Cable - Super Fast', image: '/FastCell-UsbToC.png' }
    ]
  },
  {
    label: 'Car Chargers',
    skus: [
      { name: 'Dual Car Charger - Super Fast', image: '/FastCell-DualCar.png' },
      { name: 'Wall Charger - Super Fast', image: '/FastCell-Wall.png' }
    ]
  },
  {
    label: 'Earbuds',
    skus: [
      { name: 'Earbuds - Lightning', image: '/FastCell-EarbudsLightning.png' },
      { name: 'Earbuds - Type C', image: '/FastCell-EarbudsTypeC.png' }
    ]
  },
  {
    label: 'Premium Cables',
    skus: [
      { name: 'USB to Lightning - Super Fast', image: '/FastCell-UsbToLightning.png' },
      { name: 'C To C Cable - Super Fast', image: '/FastCell-CToC.png' }
    ]
  }
]

export default function FastChargeDisplayModal({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [isVisible, setIsVisible] = useState(defaultOpen)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [activeSkuIndex, setActiveSkuIndex] = useState<0 | 1>(0)
  const hasTriggeredRef = useRef(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const target = document.getElementById('beyond')
    if (!target || hasTriggeredRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true
            setIsVisible(true)
            if (observerRef.current) {
              observerRef.current.disconnect()
            }
          }
        })
      },
      { threshold: 0.4 }
    )

    observerRef.current.observe(target)

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveSkuIndex((prevSku) => {
        const nextSku = prevSku === 0 ? 1 : 0
        if (nextSku === 0) {
          setActiveCategoryIndex((prevCat) => (prevCat + 1) % categories.length)
        }
        return nextSku
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [isVisible])

  const close = () => setIsVisible(false)

  if (!isVisible) return null

  const activeCategory = categories[activeCategoryIndex]
  const activeSku = activeCategory.skus[activeSkuIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-3">
      <div className="bg-bg border border-accent/40 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div>
            <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-accent mb-1">New Program</p>
            <h2 className="text-lg sm:text-2xl font-bold text-text">
              {activeSku.name}
            </h2>
          </div>
          <button
            onClick={close}
            className="text-muted hover:text-text transition-colors ml-3 sm:ml-4 text-lg sm:text-xl"
            aria-label="Close pop-up"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-0 flex-1 overflow-y-auto">
          {/* Left: main rotating SKU image */}
          <div className="relative h-56 sm:h-72 md:h-full bg-zinc-900">
            <Image
              src={activeSku.image}
              alt={activeSku.name}
              fill
              className="object-contain object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <span
                className={`h-1.5 w-6 rounded-full ${
                  activeSkuIndex === 0 ? 'bg-accent' : 'bg-zinc-600'
                }`}
              />
              <span
                className={`h-1.5 w-6 rounded-full ${
                  activeSkuIndex === 1 ? 'bg-accent' : 'bg-zinc-600'
                }`}
              />
            </div>
          </div>

          {/* Right: grid of categories (4 sections, 2 SKUs each) */}
          <div className="p-4 sm:p-6 flex flex-col h-full bg-zinc-950/70">
            <p className="text-xs sm:text-sm font-semibold text-accent mb-1.5 sm:mb-2">
              Super-Fast Mobile Accessories Program
            </p>
            <h3 className="text-lg sm:text-2xl font-bold mb-1.5 sm:mb-2 text-text">
              30W Wall & 55W Car Chargers
            </h3>
            <p className="text-xs sm:text-sm text-muted mb-3 sm:mb-4">
              Draw attention to your fastest-charging accessories with a dedicated, high-impact countertop display.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {categories.map((category, index) => {
                const isActive = index === activeCategoryIndex
                return (
                  <div
                    key={category.label}
                    className={`aspect-video rounded-lg border flex flex-col items-center justify-center text-[0.65rem] sm:text-xs font-semibold transition-colors ${
                      isActive
                        ? 'border-accent bg-accent/10 text-text'
                        : 'border-zinc-800 bg-zinc-900/70 text-muted'
                    }`}
                  >
                    <span className="mb-1">{category.label}</span>
                    <span className="text-[0.6rem] sm:text-[0.65rem] font-normal text-muted-foreground">
                      {category.skus[0].name.split(' - ')[0]} &amp;{' '}
                      {category.skus[1].name.split(' - ')[0]}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/retailer-signup"
                className="btn-primary w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Order Your Display!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
