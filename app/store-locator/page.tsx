'use client'

import React, { useState } from 'react'

// Sample store data - in a real app, this would come from an API
const stores = [
  {
    id: 1,
    name: 'Beach City Convenience',
    address: '123 Ocean Blvd, Santa Monica, CA 90401',
    phone: '(310) 555-0123',
    hours: 'Mon-Sun: 6AM-11PM',
    lat: 34.0195,
    lng: -118.4912,
    city: 'Santa Monica',
    state: 'CA'
  },
  {
    id: 2,
    name: 'Sunset Gas & Go',
    address: '456 Sunset Strip, West Hollywood, CA 90069',
    phone: '(323) 555-0456',
    hours: 'Mon-Sun: 24 Hours',
    lat: 34.0901,
    lng: -118.3850,
    city: 'West Hollywood',
    state: 'CA'
  },
  {
    id: 3,
    name: 'Highway 101 Market',
    address: '789 Ventura Blvd, Sherman Oaks, CA 91403',
    phone: '(818) 555-0789',
    hours: 'Mon-Sun: 5AM-12AM',
    lat: 34.1549,
    lng: -118.4494,
    city: 'Sherman Oaks',
    state: 'CA'
  },
  {
    id: 4,
    name: 'Pacific Coast Corner Store',
    address: '321 PCH, Malibu, CA 90265',
    phone: '(310) 555-0321',
    hours: 'Mon-Sun: 7AM-10PM',
    lat: 34.0259,
    lng: -118.7798,
    city: 'Malibu',
    state: 'CA'
  },
  {
    id: 5,
    name: 'Downtown Quick Stop',
    address: '654 Spring St, Los Angeles, CA 90013',
    phone: '(213) 555-0654',
    hours: 'Mon-Fri: 6AM-9PM, Sat-Sun: 8AM-8PM',
    lat: 34.0522,
    lng: -118.2437,
    city: 'Los Angeles',
    state: 'CA'
  }
]

export default function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStore, setSelectedStore] = useState(null)
  
  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.city.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-20 pb-16 bg-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Find <span className="text-accent">SocalShades</span> Retailers
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Locate stores near you that carry our premium sunglasses and accessories. 
            Visit these trusted retailers to see our products in person.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by store name, address, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted">
            Found {filteredStores.length} store{filteredStores.length !== 1 ? 's' : ''} 
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Store List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-accent transition-colors cursor-pointer"
              onClick={() => setSelectedStore(store)}
            >
              <h3 className="text-xl font-bold mb-3">{store.name}</h3>
              <div className="space-y-2 text-muted">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {store.address}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {store.phone}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {store.hours}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredStores.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No stores found matching your search.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-accent hover:text-accent-2 transition-colors"
            >
              Clear search to see all stores
            </button>
          </div>
        )}

        {/* Store Details Modal */}
        {selectedStore && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-md w-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedStore.name}</h3>
                <button
                  onClick={() => setSelectedStore(null)}
                  className="text-muted hover:text-text transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-3 text-muted mb-6">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedStore.address}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${selectedStore.phone}`} className="hover:text-accent transition-colors">
                    {selectedStore.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedStore.hours}
                </p>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedStore.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${selectedStore.phone}`}
                  className="btn-outline flex-1 text-center"
                >
                  Call Store
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}