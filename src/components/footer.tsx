import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Cash Purchase", href: "/services#cash" },
    { label: "Seller Financing", href: "/services#financing" },
  ],
  resources: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Sellers", href: "/sellers" },
    { label: "Investors", href: "/investors" },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#383838' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path d="M16 4L4 14V28H12V20H20V28H28V14L16 4Z" fill="#2563eb" />
                <path d="M16 4L4 14H28L16 4Z" fill="#1d4ed8" />
                <rect x="13" y="20" width="6" height="8" fill="#383838" />
                <rect x="18" y="15" width="4" height="3" fill="#383838" rx="0.5" />
              </svg>
              <span className="font-semibold text-xl text-white tracking-tight">
                Miana
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              Strategic real estate acquisition with fast cash offers and flexible seller financing.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-mono text-[13px] uppercase tracking-[0.5px] mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#9ca3af' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-mono text-[13px] uppercase tracking-[0.5px] mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#9ca3af' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-mono text-[13px] uppercase tracking-[0.5px] mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#9ca3af' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #4b5563' }} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-sm" style={{ color: '#6b7280' }}>
            © {new Date().getFullYear()} Miana Real Estate Acquisition. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#6b7280' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#6b7280' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
