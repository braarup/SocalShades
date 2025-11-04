export default function TrustBar() {
  return (
    <div className="bg-zinc-900 border-t border-zinc-800 border-b border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent-2 mb-1">20+ yrs</div>
            <div className="text-muted text-sm">Retail merchandising experience</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent-2 mb-1">Up to 50%</div>
            <div className="text-muted text-sm">Typical sunglasses margins</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent-2 mb-1">1800+ stores</div>
            <div className="text-muted text-sm">Partnered across the West</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent-2 mb-1">Full setups</div>
            <div className="text-muted text-sm">Displays • Shelving • Training</div>
          </div>
        </div>
      </div>
    </div>
  )
}