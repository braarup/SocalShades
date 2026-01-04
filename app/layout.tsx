import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'So‑Cal Shades Wholesale - More Than Shades',
    template: '%s | So‑Cal Shades Wholesale',
  },
  description:
    'Affordable, high‑quality sunglasses and custom displays, shelving, and merchandising expertise to maximize your margins at the counter.',
  openGraph: {
    title: 'So‑Cal Shades Wholesale - More Than Shades',
    description:
      'Affordable, high‑quality sunglasses and custom displays, shelving, and merchandising expertise to maximize your margins at the counter.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-poppins`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}