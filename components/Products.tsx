import Link from 'next/link'

const products = [
  {
    name: 'Matte Wayfarer',
    description: 'Our #1 seller. Universal fit.',
    badge: 'Polarized',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400'
  },
  {
    name: 'Classic Aviator',
    description: 'All‑day comfort. High turnover.',
    badge: "Men's",
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400'
  },
  {
    name: 'Round Trend',
    description: 'Fashion‑forward. Great impulse buy.',
    badge: 'Trendy',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=400'
  },
  {
    name: 'Sport Wrap',
    description: 'Outdoor favorite. High margin.',
    badge: 'Polarized',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=400'
  }
]

export default function Products() {
  return (
    <section id="products" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="section-title accent-underline">Flagship Sunglasses</h2>
            <p className="section-sub mt-4">
              Top movers, proven at the counter. Polarized, trendy, and everyday styles your customers pick up fast.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="badge-pill">Men's</span>
            <span className="badge-pill">Women's</span>
            <span className="badge-pill">Polarized</span>
            <span className="badge-pill">Trendy</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="product-card h-full">
              <div 
                className="w-full aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <span className="badge-pill">{product.badge}</span>
                </div>
                <p className="text-muted text-sm mb-4">{product.description}</p>
                <Link href="/wholesale-account" className="btn-primary w-full text-center block">
                  Order in Bulk
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}