import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} SoCal Shades Wholesale. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm md:justify-end">
            <Link href="/products" className="text-muted hover:text-text transition-colors">
              Sunglasses
            </Link>
            <Link href="/beyond-shades" className="text-muted hover:text-text transition-colors">
              Beyond Shades
            </Link>
            <Link href="/services" className="text-muted hover:text-text transition-colors">
              Storefront Services
            </Link>
            <Link href="/store-locator" className="text-muted hover:text-text transition-colors">
              Store Locator
            </Link>
            <Link href="/contact" className="text-muted hover:text-text transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-muted hover:text-text transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}