'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

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
            <Link href="/10-piece-rack" className="text-muted hover:text-text transition-colors">
              10-Piece Rack
            </Link>
            <Link href="/premium-rack" className="text-muted hover:text-text transition-colors">
              Premium Rack
            </Link>
            <Link href="/one-man-band" className="text-muted hover:text-text transition-colors">
              One Man Band
            </Link>
            <Link href="/beyond-shades" className="text-muted hover:text-text transition-colors">
              Fast Cell
            </Link>
            <Link href="/storefront-services" className="text-muted hover:text-text transition-colors">
              Storefront Services
            </Link>
            <Link href="/products" className="text-muted hover:text-text transition-colors">
              Products
            </Link>
            {/* <Link href="/store-locator" className="text-muted hover:text-text transition-colors">
              Store Locator
            </Link> */}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/retailer-signup" className="btn-learn-more">
              Open an Account
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
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
              {/* <Link href="/products" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                Sunglasses
              </Link> */}
              <Link href="/10-piece-rack" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                10-Piece Rack
              </Link>
              <Link href="/premium-rack" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                Premium Rack
              </Link>
              <Link href="/beyond-shades" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                Fast Cell
              </Link>
              <Link href="/one-man-band" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                One Man Band
              </Link>
              <Link href="/storefront-services" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                Storefront Services
              </Link>
              <Link href="/products" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                Products
              </Link>
              {/* <Link href="/store-locator" className="text-muted hover:text-text transition-colors" onClick={closeMenu}>
                Store Locator
              </Link> */}
              <div className="flex flex-col space-y-2 pt-3">
                <Link href="/retailer-signup" className="btn-learn-more text-center" onClick={closeMenu}>
                  Open an Account
                </Link>
                <Link href="/contact" className="btn-outline text-center" onClick={closeMenu}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}