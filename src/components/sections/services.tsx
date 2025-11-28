"use client";

import Link from "next/link";
import {
  motion,
  AnimateOnScroll,
  StaggerContainer,
  MotionItem,
  fadeInUp,
  scaleIn,
  buttonHover,
  buttonTap,
} from "@/lib/animations";

const services = [
  {
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="12"
          width="32"
          height="24"
          rx="2"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
        />
        <path d="M4 18H36" stroke="#2563eb" strokeWidth="2" />
        <rect x="8" y="24" width="8" height="4" fill="#2563eb" />
      </svg>
    ),
    title: "Cash Purchase",
    description:
      "Get a fair, no-obligation cash offer within 24-48 hours. Close on your timeline - as fast as 7 days.",
    href: "/services#cash",
    color: "#2563eb",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4L4 14V36H16V26H24V36H36V14L20 4Z"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="20"
          cy="18"
          r="4"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    title: "Seller Financing",
    description:
      "Flexible payment terms designed around your financial goals. Create passive income from your property.",
    href: "/services#financing",
    color: "#14b8a6",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#7c3aed"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 10V20L26 26"
          stroke="#7c3aed"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Quick Closing",
    description:
      "Skip the lengthy traditional sale process. We handle paperwork, title, and closing - you just show up.",
    href: "/how-it-works",
    color: "#7c3aed",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            How We Help
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            Flexible solutions tailored to your situation
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <MotionItem key={service.title} variants={fadeInUp}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={service.href}
                  className="group block rounded-lg p-6 md:p-8 h-full"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <motion.div
                    className="mb-5"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light text-foreground-muted leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: service.color }}
                  >
                    <span>Learn more</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.div>
                </Link>
              </motion.div>
            </MotionItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimateOnScroll className="text-center mt-12">
          <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-block">
            <Link
              href="/services"
              className="font-mono text-sm font-normal uppercase tracking-[0.5px] text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              View All Services
            </Link>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
