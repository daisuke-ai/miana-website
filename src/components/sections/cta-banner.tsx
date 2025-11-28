import Link from "next/link";

export function CTABanner() {
  return (
    <section style={{ backgroundColor: '#383838' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-white mb-6">
            Ready to Sell?
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] mb-10 max-w-xl mx-auto" style={{ color: '#9ca3af' }}>
            Get a no-obligation cash offer for your property today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block text-white px-8 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors"
              style={{ backgroundColor: '#2563eb' }}
            >
              Get Your Cash Offer
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-block bg-transparent text-white px-8 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors"
              style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
