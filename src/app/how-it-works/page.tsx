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
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

// Process Steps Data
const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Property",
    description:
      "Fill out our simple online form or give us a call. Share basic details about your property - no preparation needed. We'll respond within 24 hours.",
    details: [
      "No obligation to proceed",
      "Takes less than 2 minutes",
      "Response within 24 hours",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="M10 10H22M10 16H22M10 22H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Property Evaluation",
    description:
      "We analyze your property using local market data and comparable sales. No inspections or appraisals needed upfront - we do the homework.",
    details: [
      "Data-driven market analysis",
      "No home inspections required",
      "We buy in any condition",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="14" r="10" />
        <path d="M22 22L28 28" strokeLinecap="round" />
        <path d="M10 14H18M14 10V18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receive Your Offer",
    description:
      "Get a fair, competitive cash offer within 24-48 hours. We'll walk you through exactly how we arrived at our number - complete transparency.",
    details: [
      "Fair cash offer in 24-48 hours",
      "Transparent pricing breakdown",
      "No hidden fees or surprises",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <path d="M4 14H28" />
        <rect x="8" y="18" width="6" height="4" rx="1" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Choose Your Terms",
    description:
      "Accept our offer and pick your closing date - as fast as 7 days or up to 60 days. You can also choose between cash or seller financing options.",
    details: [
      "Close in as few as 7 days",
      "Or take up to 60 days",
      "Cash or seller financing",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="24" height="22" rx="2" />
        <path d="M4 12H28M10 4V8M22 4V8" strokeLinecap="round" />
        <path d="M12 18L15 21L21 15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Close & Get Paid",
    description:
      "We handle all the paperwork and logistics. Close at a reputable local title company and receive your funds immediately - often same day.",
    details: [
      "We handle all paperwork",
      "Close at local title company",
      "Get paid immediately",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8V16L22 22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16L14 20L22 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// Timeline Data
const timelineSteps = [
  { day: "Day 1", label: "Submit Info", color: "#2563eb" },
  { day: "Day 2", label: "Get Offer", color: "#14b8a6" },
  { day: "Day 3-5", label: "Review Terms", color: "#7c3aed" },
  { day: "Day 7-21", label: "Close & Get Paid", color: "#f59e0b" },
];

// FAQ Data
const faqs = [
  {
    question: "How do you determine your offer price?",
    answer:
      "We analyze recent comparable sales in your area, current market conditions, and the condition of your property. We then factor in our costs and a fair profit margin. We're happy to walk you through our calculations - we believe in complete transparency.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer:
      "Absolutely not. We buy properties in any condition - whether it needs minor touch-ups or major renovations. Sell as-is and skip the hassle and expense of repairs.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "None. Unlike traditional sales where you pay 5-6% in agent commissions plus closing costs, we cover everything. The offer we make is the amount you receive.",
  },
  {
    question: "How fast can you actually close?",
    answer:
      "We can close in as little as 7 days if you need to move quickly. However, we're flexible - if you need more time to relocate or handle other matters, we can close on your timeline, up to 60 days or more.",
  },
  {
    question: "What types of properties do you buy?",
    answer:
      "We purchase single-family homes, multi-family properties, condos, townhouses, vacant land, and even commercial properties. We buy in any condition - occupied, vacant, tenant-occupied, or inherited.",
  },
  {
    question: "What is seller financing?",
    answer:
      "Seller financing is an alternative to a lump-sum cash payment. Instead, you receive monthly payments over time, essentially acting as the bank. This can result in a higher total sale price and provides passive income while offering tax advantages.",
  },
];

// Hero Section
function HowItWorksHero() {
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
                Our Process
              </span>
            </div>
          </MotionItem>

          <MotionItem>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6">
              Simple. Fast.{" "}
              <span className="text-primary">Transparent.</span>
            </h1>
          </MotionItem>

          <MotionItem>
            <p className="text-lg md:text-xl font-light text-foreground-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              Our process is designed to make selling your property effortless.
              From first contact to closing, we handle everything so you can
              focus on what matters most.
            </p>
          </MotionItem>

          <MotionItem>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
                >
                  Start Your Free Consultation
                </Link>
              </motion.div>
            </div>
          </MotionItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

// Expanded Process Section
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            The 5-Step Process
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            From first contact to closing in as little as 7 days
          </p>
        </AnimateOnScroll>

        <div ref={ref} className="space-y-6 md:space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: "#f4efea",
                border: "1px solid #eeeeee",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8">
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#2563eb" }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="font-mono text-lg font-normal text-white">
                      {step.number}
                    </span>
                  </motion.div>
                  <div
                    className="hidden lg:block w-full h-1 lg:w-1 lg:h-full lg:min-h-[60px] rounded-full"
                    style={{ backgroundColor: index < processSteps.length - 1 ? "#dddddd" : "transparent" }}
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(37, 99, 235, 0.1)", color: "#2563eb" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="font-serif text-xl md:text-2xl font-normal tracking-[1px] uppercase text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base font-light text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Details */}
                <div className="lg:col-span-4">
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + 0.3 + detailIndex * 0.08,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "#2563eb" }}
                        />
                        <span className="text-sm text-foreground">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Timeline Section
function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Typical Timeline
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            From first contact to cash in hand
          </p>
        </AnimateOnScroll>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Progress Line */}
          <motion.div
            className="absolute top-8 left-0 right-0 h-1 rounded-full"
            style={{ backgroundColor: "#eeeeee" }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute top-8 left-0 h-1 rounded-full"
            style={{ backgroundColor: "#2563eb", width: "100%" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Timeline Steps */}
          <div className="grid grid-cols-4 gap-4 relative">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.day}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Dot */}
                <motion.div
                  className="w-4 h-4 rounded-full mx-auto mb-4 relative z-10"
                  style={{ backgroundColor: step.color }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content */}
                <motion.div
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="font-mono text-sm uppercase tracking-wider mb-2"
                    style={{ color: step.color }}
                  >
                    {step.day}
                  </p>
                  <p className="font-semibold text-foreground">{step.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-4">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.day}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: step.color }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
              />
              <div
                className="flex-1 rounded-lg p-4"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-wider mb-1"
                  style={{ color: step.color }}
                >
                  {step.day}
                </p>
                <p className="font-semibold text-foreground text-sm">{step.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          className="mt-12 rounded-xl p-6 md:p-8 text-center"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <p className="font-serif text-3xl md:text-4xl font-normal text-primary mb-1">
                7-21 Days
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                Typical Timeline
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-1">
                24-48 Hours
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                To Get Your Offer
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-normal" style={{ color: "#14b8a6" }}>
                Same Day
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                Funding at Close
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div ref={ref} className="max-w-4xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Common Questions
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            Everything you need to know about our process
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden"
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
            >
              <motion.button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.03)" }}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0"
                >
                  <svg
                    className="w-5 h-5 text-foreground-muted"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="px-5 md:px-6 pb-5 md:pb-6"
                  style={{ borderTop: "1px solid #eeeeee" }}
                >
                  <p className="pt-4 text-sm font-light text-foreground-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function HowItWorksCTA() {
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
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: "#14b8a6" }}
          initial={{ scale: 0, x: 100, y: -100 }}
          animate={isInView ? { scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: "#2563eb" }}
          initial={{ scale: 0, x: -100, y: 100 }}
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="font-mono text-sm md:text-base uppercase tracking-[0.5px] mb-10 max-w-xl mx-auto"
            style={{ color: "#9ca3af" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Get your free, no-obligation cash offer in 24-48 hours
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
                Start Your Free Consultation
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/sellers"
                className="inline-block bg-transparent text-white px-8 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors"
                style={{ border: "1px solid rgba(255, 255, 255, 0.3)" }}
              >
                Learn About Selling
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HowItWorksHero />
        <ProcessSection />
        <TimelineSection />
        <FAQSection />
        <HowItWorksCTA />
      </main>
      <Footer />
    </div>
  );
}
