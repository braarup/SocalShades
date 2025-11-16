import Link from 'next/link'

export default function Services() {
  return (
    <section id="services" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              Custom Storefronts, Built to <span className="text-accent">Sell</span>
            </h2>
            <p className="section-sub mt-4">
              We design displays and shelving layouts that pull attention, guide traffic, and turn browsers into buyers.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="text-muted font-bold">1</span>
                <div>
                  <h3 className="font-bold mb-1">Displays & Shelving</h3>
                  <p className="text-muted">Branded racks and counter layouts optimized for visibility and reach.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-muted font-bold">2</span>
                <div>
                  <h3 className="font-bold mb-1">Merchandising Expertise</h3>
                  <p className="text-muted">Decades of retail know‑how on placement, signage, and planograms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-muted font-bold">3</span>
                <div>
                  <h3 className="font-bold mb-1">Profit‑First Design</h3>
                  <p className="text-muted">We track what moves product and engineer for higher margins.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/retailer-signup" className="btn-primary">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="btn-outline">
                See Before & After
              </Link>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div 
                  className="h-48 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400')" }}
                />
                <p className="text-muted text-sm mt-2">Before: cluttered, low‑visibility counter</p>
              </div>
              <div>
                <div 
                  className="h-48 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=400')" }}
                />
                <p className="text-muted text-sm mt-2">After: organized display with focused sightlines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}