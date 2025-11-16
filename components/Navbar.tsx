'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/85 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative flex-shrink-0">
              <Image
                src="/icon.png"
                alt="SocalShades Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="font-bold text-accent text-base sm:text-lg md:text-xl">SoCal Shades</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/products" className="text-muted hover:text-text transition-colors">
              Sunglasses
            </Link>
            <Link href="/beyond-shades" className="text-muted hover:text-text transition-colors">
              Beyond Shades
            </Link>
            <Link href="/storefront-services" className="text-muted hover:text-text transition-colors">
              Storefront Services
            </Link>
            <Link href="/store-locator" className="text-muted hover:text-text transition-colors">
              Store Locator
            </Link>
            <Link href="/contact" className="text-muted hover:text-text transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/retailer-signup" className="btn-outline">
              Open an Account
            </Link>
            <Link href="/wholesale-account" className="btn-primary">
              Wholesale Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-zinc-800 mt-4">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/products" className="text-muted hover:text-text transition-colors">
                Sunglasses
              </Link>
              <Link href="/beyond-shades" className="text-muted hover:text-text transition-colors">
                Beyond Shades
              </Link>
              <Link href="/storefront-services" className="text-muted hover:text-text transition-colors">
                Storefront Services
              </Link>
              <Link href="/store-locator" className="text-muted hover:text-text transition-colors">
                Store Locator
              </Link>
              <Link href="/contact" className="text-muted hover:text-text transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-3">
                <Link href="/retailer-signup" className="btn-outline text-center">
                  Become a Retailer
                </Link>
                <Link href="/wholesale-account" className="btn-primary text-center">
                  Wholesale Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}