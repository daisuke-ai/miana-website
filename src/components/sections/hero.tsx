import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                America&apos;s Trusted Home Buyers
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6 md:mb-8">
              We Buy Houses.
              <br />
              <span className="text-primary">Fast. Fair.</span>
              <br />
              Flexible.
            </h1>

            <p className="text-lg md:text-xl font-light text-foreground-muted leading-relaxed mb-8 md:mb-10 max-w-lg">
              Get a competitive cash offer for your home in 24 hours. No repairs, no fees, no hassle. Close on your timeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
              >
                Get Your Cash Offer
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors text-foreground"
                style={{ border: '2px solid #383838' }}
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-6" style={{ borderTop: '1px solid #dddddd' }}>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-normal text-foreground">500+</p>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">Homes Purchased</p>
              </div>
              <div className="w-px h-12 hidden sm:block" style={{ backgroundColor: '#dddddd' }} />
              <div>
                <p className="font-serif text-3xl md:text-4xl font-normal text-foreground">7 Days</p>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">Average Close</p>
              </div>
              <div className="w-px h-12 hidden sm:block" style={{ backgroundColor: '#dddddd' }} />
              <div>
                <p className="font-serif text-3xl md:text-4xl font-normal text-foreground">$0</p>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">Fees or Commission</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block">
            {/* Main Image Container */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '4/3',
              }}
            >
              {/* Stock photo of a house */}
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Beautiful modern home exterior"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Floating Card - Cash Offer */}
              <div
                className="absolute -bottom-4 -left-4 p-5 rounded-xl"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                  >
                    <svg className="w-6 h-6" style={{ color: '#14b8a6' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">Cash Offer In</p>
                    <p className="font-serif text-2xl font-normal text-foreground">24 Hours</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - No Repairs */}
              <div
                className="absolute -top-4 -right-4 p-4 rounded-xl"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: '#2563eb' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">No Repairs Needed</p>
                    <p className="text-xs text-foreground-muted">We buy as-is</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Accent */}
            <div
              className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl"
              style={{ backgroundColor: 'rgba(37, 99, 235, 0.08)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
