import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

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
          <div className="flex flex-wrap gap-6 text-sm md:justify-end items-center">
            <Link href="/contact" className="text-muted hover:text-text transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-muted hover:text-text transition-colors">
              Privacy
            </Link>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors inline-flex items-center"
              aria-label="SoCal Shades Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/socalshades.co/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors inline-flex items-center"
              aria-label="SoCal Shades Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}