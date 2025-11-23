import Link from 'next/link'
import Image from 'next/image'

export default function SunglassesPage() {
  return (
    <main className="min-h-screen bg-bg pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Sunglasses
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-6">
            This is a future landing page for our full sunglasses collection.
          </p>
          <p className="text-sm text-muted">
            Content will be expanded with detailed products, categories, and merchandising information.
          </p>
        </div>
      </section>
    </main>
  )
}