import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-accent/15 to-accent/5 border-t border-zinc-800 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to boost counter sales?</h3>
            <p className="text-muted">
              Partner with SoCal Shades for products, displays, and a storefront that sells.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/retailer-signup" className="btn-primary">
              Open an Account
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}