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

// Core Values Data
const coreValues = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" />
        <path d="M16 28V16M4 10L16 16L28 10" />
      </svg>
    ),
    title: "Integrity",
    description: "We do what we say. Every offer is fair, every promise kept. Our reputation is built on trust.",
    color: "#2563eb",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8V16L22 19" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    ),
    title: "Transparency",
    description: "No hidden fees, no surprises. We show you exactly how we calculate every offer.",
    color: "#14b8a6",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16H28M28 16L20 8M28 16L20 24" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Speed",
    description: "Time matters. We respond in 24 hours and can close in as little as 7 days.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8C8 8 12 4 16 4C20 4 24 8 24 8" strokeLinecap="round" />
        <path d="M8 24C8 24 12 28 16 28C20 28 24 24 24 24" strokeLinecap="round" />
        <path d="M4 16H8M24 16H28" strokeLinecap="round" />
        <circle cx="16" cy="16" r="6" />
      </svg>
    ),
    title: "Flexibility",
    description: "Your situation is unique. We tailor solutions to fit your timeline and needs.",
    color: "#f59e0b",
  },
];

// Why Choose Us Data
const whyChooseUs = [
  {
    title: "No Fees or Commissions",
    description: "Keep more of your money. We cover all closing costs.",
  },
  {
    title: "Any Condition Properties",
    description: "Damaged, outdated, or pristine - we buy them all.",
  },
  {
    title: "Flexible Closing Dates",
    description: "Close in 7 days or 60 days. You decide.",
  },
  {
    title: "Local Market Expertise",
    description: "Deep knowledge of California real estate markets.",
  },
  {
    title: "Guaranteed Closing",
    description: "No financing contingencies. When we commit, we close.",
  },
  {
    title: "Cash or Financing Options",
    description: "Choose lump sum cash or create passive income.",
  },
];

// Hero Section
function AboutHero() {
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
                About Us
              </span>
            </div>
          </MotionItem>

          <MotionItem>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6">
              Building Value Through{" "}
              <span className="text-primary">Strategic Acquisition</span>
            </h1>
          </MotionItem>

          <MotionItem>
            <p className="text-lg md:text-xl font-light text-foreground-muted leading-relaxed max-w-2xl mx-auto mb-6">
              Miana is the consumer-facing brand of Vanguard Horizon REIT LLC, a real estate
              investment trust registered in Wyoming. We specialize in purchasing residential
              properties directly from homeowners through cash offers and flexible seller
              financing options.
            </p>
          </MotionItem>

          <MotionItem>
            <div
              className="inline-block rounded-lg px-6 py-4 text-left"
              style={{ backgroundColor: "rgba(37, 99, 235, 0.05)", border: "1px solid rgba(37, 99, 235, 0.1)" }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
                Company Information
              </p>
              <div className="space-y-1 text-sm text-foreground-muted">
                <p><strong className="text-foreground">Legal Entity:</strong> Vanguard Horizon REIT LLC</p>
                <p><strong className="text-foreground">Brand Name:</strong> Miana</p>
                <p><strong className="text-foreground">Location:</strong> 30 N Gould St Ste R, Sheridan, WY 82801</p>
              </div>
            </div>
          </MotionItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

// Our Story Section
function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
                alt="Team meeting discussing real estate strategy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent */}
            <motion.div
              className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl"
              style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-[2px] uppercase text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-foreground-muted font-light leading-relaxed">
              <p>
                Miana Real Estate was founded with a simple belief: selling your
                home shouldn't be stressful. Too many homeowners face complicated
                situations - foreclosure, divorce, inheritance, relocation - and
                the traditional real estate process only adds to their burden.
              </p>
              <p>
                We saw an opportunity to do things differently. By offering fair
                cash prices, flexible terms, and a streamlined process, we help
                homeowners move forward on their timeline, not ours.
              </p>
              <p>
                Today, we've helped hundreds of California families turn their
                properties into opportunities. Whether that means fast cash to
                start fresh or seller financing for passive income, we find the
                solution that fits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Our Approach Section
function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-[2px] uppercase text-foreground mb-6">
              Our Approach
            </h2>
            <div className="space-y-4 text-foreground-muted font-light leading-relaxed mb-8">
              <p>
                We take a data-driven approach to real estate acquisition. Every
                offer we make is backed by comprehensive market analysis,
                comparable sales data, and local expertise.
              </p>
              <p>
                This isn't about getting the lowest price - it's about finding
                fair value that works for everyone. When sellers succeed, we
                succeed. That philosophy has driven our growth and reputation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Homes Purchased" },
                { value: "7", label: "Day Avg Close" },
                { value: "100%", label: "Closing Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <p className="font-serif text-2xl md:text-3xl font-normal text-primary">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
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
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h3 className="font-mono text-sm uppercase tracking-wider text-foreground-muted mb-6">
                How We Evaluate Properties
              </h3>
              <div className="space-y-4">
                {[
                  { step: "01", text: "Analyze local market conditions" },
                  { step: "02", text: "Review comparable recent sales" },
                  { step: "03", text: "Assess property condition" },
                  { step: "04", text: "Calculate fair market value" },
                  { step: "05", text: "Present transparent offer" },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <span
                      className="font-mono text-sm font-medium px-3 py-1 rounded"
                      style={{ backgroundColor: "rgba(37, 99, 235, 0.1)", color: "#2563eb" }}
                    >
                      {item.step}
                    </span>
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Core Values Section
function ValuesSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Core Values
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            The principles that guide everything we do
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <MotionItem key={value.title} variants={fadeInUp}>
              <motion.div
                className="rounded-xl p-6 h-full text-center"
                style={{
                  backgroundColor: "#f4efea",
                  border: "1px solid #eeeeee",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  borderColor: value.color,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${value.color}15`, color: value.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm font-light text-foreground-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </MotionItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Why Choose Miana
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            What sets us apart from the rest
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-lg"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: "#2563eb" }}
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
                <p className="text-sm font-light text-foreground-muted">
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
function AboutCTA() {
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
            Partner With Us
          </motion.h2>
          <motion.p
            className="font-mono text-sm md:text-base uppercase tracking-[0.5px] mb-10 max-w-xl mx-auto"
            style={{ color: "#9ca3af" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Whether you're selling or investing, we'd love to hear from you
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
                Contact Us
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
                I Want to Sell
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <AboutHero />
        <StorySection />
        <ApproachSection />
        <ValuesSection />
        <WhyChooseSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
