const testimonials = [
  {
    quote: "We added their sunglasses rack and doubled add‑on sales in eight weeks.",
    author: "Jay, Liquor Store Owner"
  },
  {
    quote: "The display planogram made restocks faster and kept the look premium.",
    author: "Maria, C‑Store Manager"
  },
  {
    quote: "Better margins and better presentation. It's a no‑brainer.",
    author: "Omar, Gas Station Retailer"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Proven Results</h2>
          <p className="section-sub mx-auto mt-4">
            Real stores, real uplifts. Merchandising wins that stick.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full">
              <p className="text-text mb-4 text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="text-muted text-sm">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}