const services = [
  {
    title: 'Mobile Accessories',
    description: 'Chargers, cables, car mounts — the essentials customers forget and buy on impulse.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=400'
  },
  {
    title: 'Supplements',
    description: 'Energy shots and wellness packs that move quickly at the counter.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400'
  },
  {
    title: 'Lighters & Impulse',
    description: 'High‑turn items placed for visibility to increase add‑on sales.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400'
  }
]

export default function BeyondShades() {
  return (
    <section id="beyond" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Beyond <span className="text-accent">Shades</span>
          </h2>
          <p className="section-sub mx-auto mt-4">
            Boost basket size with counter‑ready accessories and daily‑demand add‑ons.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="icon-tile">
              <div 
                className="w-16 h-16 mb-6 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}