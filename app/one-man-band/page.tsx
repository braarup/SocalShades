'use client';

import React from 'react';
import Link from 'next/link';

export default function OneManBandPage() {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-16 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            <span className="text-accent">The One Man Band</span>
            <br />
            Turnkey Retail Display Program
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-6">
            Everything you need to boost counter sales — displays, products, and merchandising expertise — all in one complete package.
          </p>
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-xl px-6 py-4 mb-8">
            <p className="text-2xl md:text-3xl font-bold text-accent">
              $1,200+ Worth of Displays — Absolutely Free
            </p>
            <p className="text-sm text-muted mt-2">80% of stores choose this program</p>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Premium Displays & Racks */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-accent/50 transition-colors">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium Displays &amp; Racks</h3>
            <p className="text-muted mb-4">
              Custom-designed, professional-grade displays that maximize your counter space and product visibility. Our 10-piece sunglasses rack showcases your best sellers while keeping impulse buys within easy reach.
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Professional rotating displays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Counter-optimized footprint</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Built to last with premium materials</span>
              </li>
            </ul>
          </div>

          {/* Impulse Sections */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-accent/50 transition-colors">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Strategic Impulse Sections</h3>
            <p className="text-muted mb-4">
              We create high-conversion impulse buy sections at your counter with products customers can&apos;t resist — lighters, mobile accessories, supplements, and more. Every item is selected for maximum margin and turnover.
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>High-margin impulse products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Fast-moving inventory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Proven customer favorites</span>
              </li>
            </ul>
          </div>

          {/* Merchandising Expertise */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-accent/50 transition-colors">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Expert Merchandising</h3>
            <p className="text-muted mb-4">
              Our team brings years of retail expertise to optimize your counter layout. We analyze traffic patterns, test product placement, and continuously refine your display for maximum conversions.
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Professional planogram design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Data-driven product placement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Seasonal optimization strategies</span>
              </li>
            </ul>
          </div>

          {/* Profit-First Design */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-accent/50 transition-colors">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Profit-First Design</h3>
            <p className="text-muted mb-4">
              Every decision we make is focused on increasing your bottom line. We help you identify where to save money on items you already carry and introduce new products that command higher margins with great pricing.
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Cost reduction on existing inventory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>High-margin product selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Competitive wholesale pricing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Complete Package */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            The Complete <span className="text-accent">One Man Band</span> Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🕶️</div>
              <h3 className="font-bold mb-2">10-Piece Sunglasses Rack</h3>
              <p className="text-sm text-muted">Premium rotating display with best-selling styles</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold mb-2">Mobile Accessories</h3>
              <p className="text-sm text-muted">High-margin phone cases, chargers, and cables</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="font-bold mb-2">Lighters &amp; Impulse Items</h3>
              <p className="text-sm text-muted">Fast-moving everyday essentials</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="font-bold mb-2">Supplements</h3>
              <p className="text-sm text-muted">Popular health and wellness products</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Custom Merchandising</h3>
              <p className="text-sm text-muted">Tailored planogram for your space</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-bold mb-2">Ongoing Service</h3>
              <p className="text-sm text-muted">Every 3 weeks, like clockwork</p>
            </div>
          </div>
        </div>

        {/* Bottom Line Impact */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Impact on Your <span className="text-accent">Bottom Line</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-3">Multiple Revenue Streams</h3>
              <p className="text-muted">
                Don&apos;t rely on just one product category. Our diverse product mix gives you multiple ways to capture sales and increase average transaction values.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-3">Competitive Pricing Advantage</h3>
              <p className="text-muted">
                Our wholesale pricing beats what you&apos;re currently paying, letting you save money on products you already carry or increase margins on items you sell.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-3">Zero Display Investment</h3>
              <p className="text-muted">
                Over $1,200 worth of professional displays and racks provided completely free. Start generating revenue from day one without capital expenditure.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-3">Optimized Inventory Turnover</h3>
              <p className="text-muted">
                We select fast-moving products and service your displays every 3 weeks, ensuring fresh inventory that sells before it sits.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Launch The One Man Band?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the 80% of stores who chose The One Man Band program and are seeing real results at their counter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/retailer-signup" className="btn-learn-more text-lg px-8 py-4">
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
