import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="32" height="24" rx="2" stroke="#2563eb" strokeWidth="2" fill="none" />
        <path d="M4 18H36" stroke="#2563eb" strokeWidth="2" />
        <rect x="8" y="24" width="8" height="4" fill="#2563eb" />
      </svg>
    ),
    title: "Cash Purchase",
    description:
      "Get a fair, no-obligation cash offer within 24-48 hours. Close on your timeline - as fast as 7 days.",
    href: "/services#cash",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L4 14V36H16V26H24V36H36V14L20 4Z" stroke="#14b8a6" strokeWidth="2" fill="none" />
        <circle cx="20" cy="18" r="4" stroke="#14b8a6" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Seller Financing",
    description:
      "Flexible payment terms designed around your financial goals. Create passive income from your property.",
    href: "/services#financing",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" stroke="#7c3aed" strokeWidth="2" fill="none" />
        <path d="M20 10V20L26 26" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Quick Closing",
    description:
      "Skip the lengthy traditional sale process. We handle paperwork, title, and closing - you just show up.",
    href: "/how-it-works",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            How We Help
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            Flexible solutions tailored to your situation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-lg p-6 md:p-8 transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm font-light text-foreground-muted leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="font-mono text-sm font-normal uppercase tracking-[0.5px] text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
