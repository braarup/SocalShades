'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-48 md:w-64 lg:w-72 h-24 md:h-32 lg:h-36 mx-auto mb-6 relative">
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          More Than Shades.{' '}
          <span className="text-accent">We Build Storefronts That Sell.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
          Affordable, high‑quality sunglasses are our flagship — and we pair them with custom displays, 
          shelving, and merchandising expertise to maximize your margins at the counter.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/products" className="btn-primary">
            Shop Sunglasses Wholesale
          </Link>
          <Link href="/services" className="btn-outline">
            See Storefront Solutions
          </Link>
        </div>
      </div>
    </header>
  )
}