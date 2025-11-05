'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={closeModal}
      >
        {/* Modal */}
        <div 
          className="relative bg-zinc-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-zinc-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Banner Image Section */}
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900">
            {/* Background overlay pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            
            {/* Overlay Text */}
            <div className="relative h-full flex items-center justify-center text-center px-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
                  The One Man Band
                </h2>
                <p className="text-xl md:text-2xl text-white font-bold drop-shadow-lg">
                  Turnkey Retail Display Program
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-10 text-center">
            <div className="mb-6">
              <p className="text-2xl md:text-3xl font-bold text-accent mb-4">
                80% of Stores Pick Up Our &quot;One Man Band&quot;!
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white">
                Includes <span className="text-accent">$1,200+ Worth</span> of Displays
              </p>
              <p className="text-2xl font-bold text-white mt-2">
                — Absolutely Free.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <Link 
                href="/retailer-signup"
                onClick={closeModal}
                className="btn-primary inline-block w-full sm:w-auto px-8 py-4 text-lg font-bold"
              >
                Get Started Today
              </Link>
              <p className="text-sm text-muted">
                Join hundreds of successful retailers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
