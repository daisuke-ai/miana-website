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
  buttonHover,
  buttonTap,
} from "@/lib/animations";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Benefits Data
const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Close in 7 Days",
    description: "Need to sell fast? We can close in as little as 7 days.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "No Repairs Needed",
    description: "Sell as-is. We buy properties in any condition.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Zero Fees",
    description: "No agent commissions, no closing costs, no hidden fees.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "No Showings",
    description: "Skip the open houses and constant interruptions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      </svg>
    ),
    title: "You Pick the Date",
    description: "Close on your timeline - 7 days or 60 days, your choice.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: "Guaranteed Offer",
    description: "No financing contingencies. When we make an offer, we close.",
  },
];

// Situations Data
const situations = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4L4 10V24H10V18H18V24H24V10L14 4Z" />
        <path d="M4 24L24 4" strokeLinecap="round" />
      </svg>
    ),
    title: "Foreclosure",
    description: "Facing foreclosure? We can help you avoid it and protect your credit.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="10" r="5" />
        <circle cx="19" cy="10" r="5" />
        <path d="M4 24c0-4 3-7 7-7h6c4 0 7 3 7 7" />
        <path d="M14 3v22" strokeLinecap="round" />
      </svg>
    ),
    title: "Divorce",
    description: "Simplify the process during a difficult time. Quick, fair cash split.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4L4 10V24H24V10L14 4Z" />
        <path d="M10 24V16H18V24" />
        <path d="M4 10L14 4L24 10" />
        <circle cx="14" cy="12" r="2" />
      </svg>
    ),
    title: "Inherited Property",
    description: "Inherited a house you don't want? We handle everything.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="8" height="12" rx="1" />
        <rect x="16" y="4" width="8" height="20" rx="1" />
        <path d="M12 14H16" strokeLinecap="round" />
      </svg>
    ),
    title: "Relocation",
    description: "Moving for work? Sell quickly without the stress of two mortgages.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 4L8 4L4 24H24L20 4Z" />
        <path d="M8 4L10 24M20 4L18 24" strokeLinecap="round" />
      </svg>
    ),
    title: "Downsizing",
    description: "Ready for something smaller? Skip the hassle of listing.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4L4 10V24H24V10L14 4Z" />
        <circle cx="14" cy="16" r="4" />
        <path d="M14 14V18M12 16H16" strokeLinecap="round" />
      </svg>
    ),
    title: "Problem Tenants",
    description: "Tired of dealing with difficult renters? We'll take it off your hands.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4L4 10V24H24V10L14 4Z" />
        <path d="M8 16L12 20L20 12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 8L18 16M18 8L10 16" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Major Repairs Needed",
    description: "Foundation issues? Roof damage? We buy as-is, no repairs needed.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4L4 10V24H24V10L14 4Z" />
        <path d="M10 24V16H18V24" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Vacant Property",
    description: "Stop paying for an empty house. Convert it to cash today.",
  },
];

// Comparison Data
const comparisonData = [
  { factor: "Timeline", traditional: "3-6 months", miana: "7-21 days", winner: "miana" },
  { factor: "Repairs Required", traditional: "Yes, often $10k+", miana: "None", winner: "miana" },
  { factor: "Agent Commissions", traditional: "5-6%", miana: "$0", winner: "miana" },
  { factor: "Closing Costs", traditional: "2-4%", miana: "$0", winner: "miana" },
  { factor: "Showings", traditional: "Multiple", miana: "None", winner: "miana" },
  { factor: "Closing Certainty", traditional: "~85%", miana: "100%", winner: "miana" },
  { factor: "Inspections", traditional: "Required", miana: "None", winner: "miana" },
];

// Testimonials Data
const testimonials = [
  {
    quote: "I needed to sell my mother's house after she passed. Miana made the process so easy during a difficult time. Cash in hand in 10 days.",
    name: "Sarah M.",
    location: "Sacramento, CA",
    situation: "Inherited Property",
  },
  {
    quote: "Facing foreclosure with no options. Miana gave me a fair offer and helped me walk away with money in my pocket instead of a ruined credit score.",
    name: "Robert J.",
    location: "Fresno, CA",
    situation: "Foreclosure",
  },
  {
    quote: "My rental property was a nightmare with problem tenants. Sold it to Miana as-is with tenants in place. Such a relief!",
    name: "Linda T.",
    location: "Oakland, CA",
    situation: "Problem Tenants",
  },
];

// Hero Section
function SellersHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <StaggerContainer className="relative z-10">
            <MotionItem>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#14b8a6" }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "#14b8a6" }}>
                  For Homeowners
                </span>
              </div>
            </MotionItem>

            <MotionItem>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6">
                Sell Your House{" "}
                <span className="text-primary">Fast for Cash</span>
              </h1>
            </MotionItem>

            <MotionItem>
              <p className="text-2xl md:text-3xl font-light text-foreground-muted leading-relaxed mb-4">
                No repairs. No fees. No hassle.
              </p>
            </MotionItem>

            <MotionItem>
              <p className="text-base font-light text-foreground-muted leading-relaxed mb-8 max-w-lg">
                Get a fair cash offer for your home in any condition. Close on your
                timeline and skip the traditional selling headaches.
              </p>
            </MotionItem>

            <MotionItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center text-white px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
                    style={{ backgroundColor: "#14b8a6" }}
                  >
                    Get My Cash Offer
                  </Link>
                </motion.div>
                <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors text-foreground"
                    style={{ border: "2px solid #383838" }}
                  >
                    See How It Works
                  </Link>
                </motion.div>
              </div>
            </MotionItem>
          </StaggerContainer>

          {/* Visual */}
          <AnimateOnScroll className="relative hidden lg:block">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Happy homeowners with sold sign"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-4 -right-4 p-5 rounded-xl"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, y: 40, x: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0],
                  x: 0,
                }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.6 },
                  x: { delay: 0.5, duration: 0.6 },
                  y: { delay: 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#14b8a6" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                      Average Savings
                    </p>
                    <p className="font-serif text-2xl font-normal text-foreground">
                      $15,000+
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Background Accent */}
            <motion.div
              className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl"
              style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// Benefits Section
function BenefitsSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Why Sell to Miana
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            The smarter way to sell your home
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <MotionItem key={benefit.title} variants={fadeInUp}>
              <motion.div
                className="rounded-lg p-6 h-full"
                style={{
                  backgroundColor: "#f4efea",
                  border: "1px solid #eeeeee",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                  borderColor: "#14b8a6",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(20, 184, 166, 0.1)", color: "#14b8a6" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm font-light text-foreground-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </MotionItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Situations Section
function SituationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Situations We Help With
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            No matter your situation, we have a solution
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {situations.map((situation, index) => (
            <motion.div
              key={situation.title}
              className="rounded-lg p-5"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: "rgba(124, 58, 237, 0.1)", color: "#7c3aed" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {situation.icon}
              </motion.div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                {situation.title}
              </h3>
              <p className="text-xs font-light text-foreground-muted leading-relaxed">
                {situation.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Comparison Section
function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div ref={ref} className="max-w-5xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Traditional Sale vs. Miana
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            See why more homeowners choose us
          </p>
        </AnimateOnScroll>

        {/* Table Container */}
        <motion.div
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: "#f4efea",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Table Header */}
          <div
            className="grid grid-cols-3 gap-4 p-4 md:p-6"
            style={{ backgroundColor: "#383838" }}
          >
            <div className="font-mono text-xs md:text-sm uppercase tracking-wider text-white">
              Factor
            </div>
            <div className="font-mono text-xs md:text-sm uppercase tracking-wider text-white text-center">
              Traditional Sale
            </div>
            <div className="font-mono text-xs md:text-sm uppercase tracking-wider text-center" style={{ color: "#14b8a6" }}>
              Sell to Miana
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={row.factor}
              className="grid grid-cols-3 gap-4 p-4 md:p-6 items-center"
              style={{
                borderBottom: index < comparisonData.length - 1 ? "1px solid #eeeeee" : "none",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="font-medium text-sm text-foreground">
                {row.factor}
              </div>
              <div className="text-center text-sm text-foreground-muted">
                {row.traditional}
              </div>
              <div className="text-center">
                <motion.span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(20, 184, 166, 0.1)",
                    color: "#14b8a6",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {row.miana}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-foreground-muted mb-6">
            On a <span className="font-semibold text-foreground">$300,000 home</span>, selling to Miana saves you approximately{" "}
            <span className="font-semibold" style={{ color: "#14b8a6" }}>$25,000+</span> in fees and repairs.
          </p>
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-white px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
              style={{ backgroundColor: "#14b8a6" }}
            >
              See How Much You Could Save
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Seller Success Stories
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            Real stories from real homeowners
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="rounded-xl p-6 md:p-8"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Quote Icon */}
              <svg
                className="w-8 h-8 mb-4"
                style={{ color: "#2563eb", opacity: 0.3 }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #eeeeee" }}>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-foreground-muted">{testimonial.location}</p>
                </div>
                <span
                  className="text-xs font-mono uppercase tracking-wider px-2 py-1 rounded"
                  style={{ backgroundColor: "rgba(124, 58, 237, 0.1)", color: "#7c3aed" }}
                >
                  {testimonial.situation}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section with Form
function SellersCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section style={{ backgroundColor: "#383838" }}>
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: "#14b8a6" }}
          initial={{ scale: 0, x: -100, y: -100 }}
          animate={isInView ? { scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: "#2563eb" }}
          initial={{ scale: 0, x: 100, y: 100 }}
          animate={isInView ? { scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-white mb-6">
              Ready to Sell?
            </h2>
            <p
              className="font-mono text-sm md:text-base uppercase tracking-[0.5px] mb-6"
              style={{ color: "#9ca3af" }}
            >
              Get your free, no-obligation cash offer today
            </p>
            <ul className="space-y-3">
              {["No repairs needed", "Close in as little as 7 days", "Zero fees or commissions", "Get paid in cash"].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(20, 184, 166, 0.2)" }}
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
                  </div>
                  <span className="text-white text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Form */}
          <motion.div
            className="rounded-xl p-6 md:p-8"
            style={{ backgroundColor: "#ffffff" }}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-serif text-xl md:text-2xl font-normal tracking-[1px] uppercase text-foreground mb-6">
              Get Your Cash Offer
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Property Address"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{
                    backgroundColor: "#f4efea",
                    border: "1px solid #eeeeee",
                    color: "#383838",
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{
                    backgroundColor: "#f4efea",
                    border: "1px solid #eeeeee",
                    color: "#383838",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{
                    backgroundColor: "#f4efea",
                    border: "1px solid #eeeeee",
                    color: "#383838",
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{
                    backgroundColor: "#f4efea",
                    border: "1px solid #eeeeee",
                    color: "#383838",
                  }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full text-white px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
                style={{ backgroundColor: "#14b8a6" }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(20, 184, 166, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get My Free Offer
              </motion.button>
            </form>
            <p className="text-xs text-foreground-muted text-center mt-4">
              No obligation. We'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function SellersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <SellersHero />
        <BenefitsSection />
        <SituationsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <SellersCTA />
      </main>
      <Footer />
    </div>
  );
}
