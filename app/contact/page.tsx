export default function Contact() {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-16 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-text">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-muted mb-8">
          We&apos;re here to help with orders, wholesale inquiries, support needs, and partnerships. Reach out anytime.
        </p>

        <div className="space-y-8 text-sm sm:text-base">
          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Owner Contact</h2>
            <p className="font-medium">Lewis Strayer</p>
            <p className="mt-1">📱 Cell: <a href="tel:19515314640" className="text-accent hover:underline">951-531-4640</a></p>
            <p className="mt-1">
              📧 Email:{' '}
              <a href="mailto:lstrayer@socalshadeswholesale.com" className="text-accent hover:underline">
                lstrayer@socalshadeswholesale.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Wholesale &amp; General Inquiries</h2>
            <p className="text-muted mb-1">
              Have questions about becoming a retailer, placing wholesale orders, or stocking SoCal Shades in your store?
            </p>
            <p>
              📧 Email:{' '}
              <a href="mailto:info@socalshadeswholesale.com" className="text-accent hover:underline">
                info@socalshadeswholesale.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Customer &amp; Retailer Support</h2>
            <p className="text-muted mb-1">
              Need help with products, displays, shipping, or account issues?
            </p>
            <p>
              📧 Support:{' '}
              <a href="mailto:support@socalshadeswholesale.com" className="text-accent hover:underline">
                support@socalshadeswholesale.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Business Address</h2>
            <p>SoCal Shades Wholesale</p>
            <p>2001 3rd Street</p>
            <p>Suite A</p>
            <p>Riverside, CA 92507</p>
          </section>
        </div>
      </div>
    </div>
  )
}
