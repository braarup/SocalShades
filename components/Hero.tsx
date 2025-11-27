'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542326237-94b1c5a538d9?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/25 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4">
        {/* Logo */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-48 sm:h-60 md:h-72 lg:h-80 mx-auto relative">
            <Image
              src="/logo.png"
              alt="SocalShades Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-2">
          More Than Shades.{' '}
          <span className="text-accent">We Build Storefronts That Sell.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
          Affordable, high‑quality sunglasses are our flagship — and we pair them with custom displays, 
          shelving, and merchandising expertise to maximize your margins at the counter.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link href="/products" className="btn-learn-more w-full sm:w-auto text-center">
            Shop Sunglasses Wholesale
          </Link>
          <Link href="/storefront-services" className="btn-outline w-full sm:w-auto text-center">
            See Storefront Solutions
          </Link>
        </div>
      </div>
    </header>
  )
}