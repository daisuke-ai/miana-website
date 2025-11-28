import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Share your property details through our simple form or give us a call. No obligation, no pressure.",
  },
  {
    number: "02",
    title: "Get an Offer",
    description: "Receive a fair, competitive cash offer within 24-48 hours. Transparent pricing with no hidden fees.",
  },
  {
    number: "03",
    title: "Close Fast",
    description: "Choose your closing date - as fast as 7 days. We handle all the paperwork and logistics.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            A simple 3-step process to sell your property
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center md:text-left">
              {/* Connector Line - Desktop */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px]"
                  style={{ backgroundColor: '#dddddd' }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center md:items-start">
                {/* Step Number */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#2563eb' }}
                >
                  <span className="font-mono text-lg font-normal text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-foreground-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/how-it-works"
            className="inline-block text-white px-7 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors"
            style={{ backgroundColor: '#2563eb' }}
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
