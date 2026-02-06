import Image from 'next/image'

const retailers = [
  {
    name: 'Chevron',
    logo: '/Retailers/chevron.png',
  },
  {
    name: '76',
    logo: '/Retailers/76.png',
  },
  {
    name: '7-Eleven',
    logo: '/Retailers/7-eleven.png',
  },
  {
    name: 'Shell',
    logo: '/Retailers/shell.png',
  },
  {
    name: 'Sinclair',
    logo: '/Retailers/sinclair.png',
  },
]

export default function RetailerStrip() {
  return (
    <section className="bg-zinc-950 border-b border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-zinc-400 text-center sm:text-left">
            Participating retailers (partial list)
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4">
            {retailers.map((retailer) => (
              <div
                key={retailer.name}
                className="h-8 sm:h-10 flex items-center grayscale opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={retailer.logo}
                  alt={retailer.name}
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
