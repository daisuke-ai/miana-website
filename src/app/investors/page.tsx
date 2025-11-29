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

// Investment Focus Data
const investmentFocus = [
  {
    title: "Single-Family Residential",
    description: "Value-add opportunities in growing California markets",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4L4 10V24H10V18H18V24H24V10L14 4Z" />
      </svg>
    ),
  },
  {
    title: "Multi-Family Properties",
    description: "Duplexes to small apartment buildings with strong cash flow",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="20" height="16" rx="1" />
        <path d="M4 14H24M12 8V24M20 8V24" />
      </svg>
    ),
  },
  {
    title: "Distressed Assets",
    description: "Foreclosures and short sales with significant upside potential",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4L4 10V24H24V10L14 4Z" />
        <path d="M10 18L14 14L18 18L22 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// Track Record Stats
const stats = [
  { value: "500+", label: "Properties Acquired" },
  { value: "$50M+", label: "Total Invested" },
  { value: "100%", label: "Closing Rate" },
  { value: "15%+", label: "Average ROI" },
];

// Why Partner Data
const whyPartner = [
  {
    title: "Data-Driven Approach",
    description: "Every acquisition decision backed by comprehensive market analysis and comparable sales data.",
  },
  {
    title: "Local Market Expertise",
    description: "Deep knowledge of California real estate markets, trends, and opportunities.",
  },
  {
    title: "Transparent Reporting",
    description: "Regular updates on portfolio performance, market conditions, and investment returns.",
  },
  {
    title: "Risk Management",
    description: "Conservative underwriting and diversified portfolio strategy to protect capital.",
  },
];

// Hero Section
function InvestorsHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <StaggerContainer className="max-w-3xl mx-auto text-center">
          <MotionItem>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#7c3aed" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "#7c3aed" }}>
                For Investors
              </span>
            </div>
          </MotionItem>

          <MotionItem>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6">
              Partner With Us for{" "}
              <span style={{ color: "#7c3aed" }}>Strategic Returns</span>
            </h1>
          </MotionItem>

          <MotionItem>
            <p className="text-lg md:text-xl font-light text-foreground-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              Join us in acquiring undervalued properties across California.
              Data-driven decisions, transparent reporting, and sustainable growth.
            </p>
          </MotionItem>

          <MotionItem>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-white px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
                style={{ backgroundColor: "#7c3aed" }}
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </MotionItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

// Investment Focus Section
function InvestmentFocusSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Investment Focus
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            Strategic acquisitions in high-growth California markets
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {investmentFocus.map((item) => (
            <MotionItem key={item.title} variants={fadeInUp}>
              <motion.div
                className="rounded-xl p-6 md:p-8 h-full text-center"
                style={{
                  backgroundColor: "#f4efea",
                  border: "1px solid #eeeeee",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  borderColor: "#7c3aed",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(124, 58, 237, 0.1)", color: "#7c3aed" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </MotionItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Track Record Section
function TrackRecordSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Our Track Record
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            Proven performance across market cycles
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl"
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
              whileHover={{ y: -4 }}
            >
              <p className="font-serif text-3xl md:text-4xl font-normal mb-1" style={{ color: "#7c3aed" }}>
                {stat.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Partner Section
function WhyPartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Why Partner With Miana
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            What sets our investment approach apart
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyPartner.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-lg"
              style={{
                backgroundColor: "#f4efea",
                border: "1px solid #eeeeee",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                borderColor: "#7c3aed",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              }}
            >
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: "#7c3aed" }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function InvestorsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section style={{ backgroundColor: "#383838" }}>
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: "#7c3aed" }}
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

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to Invest?
          </motion.h2>
          <motion.p
            className="font-mono text-sm md:text-base uppercase tracking-[0.5px] mb-10 max-w-xl mx-auto"
            style={{ color: "#9ca3af" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Schedule a consultation to discuss partnership opportunities
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(124, 58, 237, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-block text-white px-8 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors"
                style={{ backgroundColor: "#7c3aed" }}
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <InvestorsHero />
        <InvestmentFocusSection />
        <TrackRecordSection />
        <WhyPartnerSection />
        <InvestorsCTA />
      </main>
      <Footer />
    </div>
  );
}
