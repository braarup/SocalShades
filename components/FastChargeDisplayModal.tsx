"use client"

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FastChargeDisplayModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeImage, setActiveImage] = useState<0 | 1>(0)
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
      setActiveImage((prev) => (prev === 0 ? 1 : 0))
    }, 12000) // 12 seconds between swaps

    return () => clearInterval(interval)
  }, [isVisible])

  const close = () => setIsVisible(false)

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-bg border border-accent/40 rounded-2xl shadow-2xl max-w-5xl w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">New Program</p>
            <h2 className="text-xl sm:text-2xl font-bold text-text">
              Super Super Fast Charging Display
            </h2>
          </div>
          <button
            onClick={close}
            className="text-muted hover:text-text transition-colors ml-4"
            aria-label="Close pop-up"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: main rotating image */}
          <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[380px] bg-zinc-900">
            <Image
              src={activeImage === 0 ? '/fastcharging-01.png' : '/fastcharging-02.png'}
              alt="Super fast charging display"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <span
                className={`h-1.5 w-6 rounded-full ${
                  activeImage === 0 ? 'bg-accent' : 'bg-zinc-600'
                }`}
              />
              <span
                className={`h-1.5 w-6 rounded-full ${
                  activeImage === 1 ? 'bg-accent' : 'bg-zinc-600'
                }`}
              />
            </div>
          </div>

          {/* Right: grid of categories */}
          <div className="p-6 sm:p-8 flex flex-col h-full bg-zinc-950/70">
            <p className="text-sm font-semibold text-accent mb-2">
              Super-Fast Mobile Accessories Program
            </p>
            <h3 className="text-2xl font-bold mb-2 text-text">
              30W Wall & 55W Car Chargers
            </h3>
            <p className="text-sm text-muted mb-5">
              Draw attention to your fastest-charging accessories with a dedicated, high-impact countertop display.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((label) => (
                <div
                  key={label}
                  className="aspect-video rounded-lg border border-zinc-800 bg-zinc-900/70 flex items-center justify-center text-xs sm:text-sm font-semibold text-muted"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/retailer-signup"
                className="btn-primary w-full sm:w-auto text-center"
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
