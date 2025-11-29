"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import {
  motion,
  AnimateOnScroll,
  StaggerContainer,
  MotionItem,
  fadeInUp,
  slideInLeft,
  slideInRight,
  buttonHover,
  buttonTap,
} from "@/lib/animations";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Cash Purchase Benefits
const cashBenefits = [
  "Receive your cash offer within 24-48 hours",
  "Close in as little as 7 days",
  "No repairs or renovations required",
  "No agent commissions or hidden fees",
  "We handle all closing costs",
  "Guaranteed closing - no financing contingencies",
];

// Seller Financing Benefits
const financingBenefits = [
  "Create passive monthly income",
  "Potentially higher total sale price",
  "Tax advantages through installment sale",
  "Flexible terms tailored to your needs",
  "Secured by the property",
  "Avoid capital gains hit in single year",
];

// Property Types
const propertyTypes = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L4 12V28H12V20H20V28H28V12L16 4Z" />
      </svg>
    ),
    title: "Single-Family Homes",
    description: "Houses of any age, size, or condition",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="24" height="20" rx="1" />
        <path d="M4 14H28M12 8V28M20 8V28" />
      </svg>
    ),
    title: "Multi-Family Units",
    description: "Duplexes, triplexes, and apartment buildings",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L4 12V28H28V12L16 4Z" />
        <path d="M10 20L14 16L18 20L22 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Distressed Properties",
    description: "Foreclosures, short sales, and fixer-uppers",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L4 12V28H28V12L16 4Z" />
        <circle cx="16" cy="18" r="4" />
        <path d="M16 14V18L18 20" strokeLinecap="round" />
      </svg>
    ),
    title: "Inherited Properties",
    description: "Estates and probate properties",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L4 12V28H28V12L16 4Z" />
        <path d="M12 28V20H20V28" />
        <circle cx="22" cy="10" r="4" />
        <path d="M20 8L24 12M24 8L20 12" strokeLinecap="round" />
      </svg>
    ),
    title: "Rental Properties",
    description: "With or without tenants in place",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="12" width="24" height="16" rx="1" />
        <path d="M8 20H12M20 20H24M14 16V24" strokeLinecap="round" />
      </svg>
    ),
    title: "Vacant Land",
    description: "Buildable lots and undeveloped parcels",
  },
];

// What Sets Us Apart
const differentiators = [
  {
    title: "No Obligation Offers",
    description: "Get a fair cash offer with zero pressure. Take your time to decide.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description: "We show you exactly how we calculate our offers. No hidden agendas.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    description: "Deep knowledge of local markets means better offers for you.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Flexible Closing",
    description: "Close in 7 days or 60 days. You pick the timeline that works for you.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Hero Section
function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <StaggerContainer className="max-w-3xl mx-auto text-center">
          <MotionItem>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                Our Services
              </span>
            </div>
          </MotionItem>

          <MotionItem>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6">
              Flexible Solutions for{" "}
              <span className="text-primary">Every Situation</span>
            </h1>
          </MotionItem>

          <MotionItem>
            <p className="text-lg md:text-xl font-light text-foreground-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you need fast cash or prefer ongoing income, we offer
              tailored solutions to meet your unique needs. No repairs, no fees,
              no hassle.
            </p>
          </MotionItem>

          <MotionItem>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
                >
                  Get Your Free Offer
                </Link>
              </motion.div>
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors text-foreground"
                  style={{ border: "2px solid #383838" }}
                >
                  See Our Process
                </Link>
              </motion.div>
            </div>
          </MotionItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

// Cash Purchases Section
function CashPurchasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="cash" className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                Option 1
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-[2px] uppercase text-foreground mb-4">
              Cash Purchases
            </h2>
            <p className="text-base font-light text-foreground-muted leading-relaxed mb-6">
              Get a competitive cash offer and close on your timeline. Our
              streamlined process eliminates the uncertainty of traditional sales,
              giving you the freedom to move forward with confidence.
            </p>

            <h4 className="font-mono text-sm uppercase tracking-wider text-foreground mb-4">
              Benefits
            </h4>
            <ul className="space-y-3 mb-8">
              {cashBenefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                  >
                    <svg
                      className="w-3 h-3"
                      style={{ color: "#2563eb" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href="/contact"
                className="inline-block text-white px-6 py-3 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors hover:opacity-90"
                style={{ backgroundColor: "#2563eb" }}
              >
                Get Cash Offer
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "#f4efea",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    className="w-10 h-10"
                    style={{ color: "#2563eb" }}
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="4" y="12" width="32" height="24" rx="2" />
                    <path d="M4 18H36" />
                    <rect x="8" y="24" width="8" height="4" fill="currentColor" stroke="none" />
                    <rect x="8" y="30" width="12" height="2" fill="currentColor" stroke="none" />
                  </svg>
                </motion.div>
                <p className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-2">
                  24-48 hrs
                </p>
                <p className="font-mono text-sm uppercase tracking-wider text-foreground-muted mb-6">
                  To Receive Your Offer
                </p>
                <div className="pt-6" style={{ borderTop: "1px solid #dddddd" }}>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="font-serif text-2xl font-normal text-foreground">7 Days</p>
                      <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                        Fastest Close
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-normal text-foreground">$0</p>
                      <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                        Fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Seller Financing Section
function SellerFinancingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="financing" className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual - Left on desktop */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <svg
                    className="w-10 h-10"
                    style={{ color: "#14b8a6" }}
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="20" cy="20" r="16" />
                    <path d="M20 10V20L26 26" strokeLinecap="round" />
                  </svg>
                </motion.div>
                <p className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-2">
                  Monthly
                </p>
                <p className="font-mono text-sm uppercase tracking-wider text-foreground-muted mb-6">
                  Passive Income
                </p>
                <div className="pt-6" style={{ borderTop: "1px solid #eeeeee" }}>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="font-serif text-2xl font-normal text-foreground">5-30 yrs</p>
                      <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                        Flexible Terms
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-normal text-foreground">Secured</p>
                      <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                        By Property
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - Right on desktop */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
            >
              <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "#14b8a6" }}>
                Option 2
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-[2px] uppercase text-foreground mb-4">
              Seller Financing
            </h2>
            <p className="text-base font-light text-foreground-muted leading-relaxed mb-6">
              Turn your property into a steady income stream. With seller financing,
              you become the bank - receiving monthly payments while potentially
              earning more than a traditional cash sale.
            </p>

            <h4 className="font-mono text-sm uppercase tracking-wider text-foreground mb-4">
              Benefits
            </h4>
            <ul className="space-y-3 mb-8">
              {financingBenefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                  >
                    <svg
                      className="w-3 h-3"
                      style={{ color: "#14b8a6" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href="/contact"
                className="inline-block text-white px-6 py-3 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors hover:opacity-90"
                style={{ backgroundColor: "#14b8a6" }}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Property Types Section
function PropertyTypesSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Property Types We Buy
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            We purchase all types of residential properties in any condition
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((property, index) => (
            <MotionItem key={property.title} variants={fadeInUp}>
              <motion.div
                className="rounded-lg p-6 h-full"
                style={{
                  backgroundColor: "#f4efea",
                  border: "1px solid #eeeeee",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                  borderColor: "#2563eb",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(37, 99, 235, 0.1)", color: "#2563eb" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {property.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {property.title}
                </h3>
                <p className="text-sm font-light text-foreground-muted">
                  {property.description}
                </p>
              </motion.div>
            </MotionItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// What Sets Us Apart Section
function DifferentiatorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            What Sets Us Apart
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            Why homeowners choose Miana
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-lg p-6 md:p-8"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(124, 58, 237, 0.1)", color: "#7c3aed" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function ServicesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section style={{ backgroundColor: "#383838" }}>
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: "#2563eb" }}
          initial={{ scale: 0, x: -100, y: -100 }}
          animate={isInView ? { scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: "#14b8a6" }}
          initial={{ scale: 0, x: 100, y: 100 }}
          animate={isInView ? { scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Get Started Today
          </motion.h2>
          <motion.p
            className="font-mono text-sm md:text-base uppercase tracking-[0.5px] mb-10 max-w-xl mx-auto"
            style={{ color: "#9ca3af" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Request your free, no-obligation offer in minutes
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-block text-white px-8 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors"
                style={{ backgroundColor: "#2563eb" }}
              >
                Get Your Free Offer
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/how-it-works"
                className="inline-block bg-transparent text-white px-8 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors"
                style={{ border: "1px solid rgba(255, 255, 255, 0.3)" }}
              >
                See How It Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ServicesHero />
        <CashPurchasesSection />
        <SellerFinancingSection />
        <PropertyTypesSection />
        <DifferentiatorsSection />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
