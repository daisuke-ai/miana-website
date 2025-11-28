"use client";

import Link from "next/link";
import {
  motion,
  AnimateOnScroll,
  StaggerContainer,
  MotionItem,
  scaleIn,
  buttonHover,
  buttonTap,
} from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <StaggerContainer className="relative z-10">
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
                  America&apos;s Trusted Home Buyers
                </span>
              </div>
            </MotionItem>

            <MotionItem>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6 md:mb-8">
                We Buy Houses.
                <br />
                <span className="text-primary">Fast. Fair.</span>
                <br />
                Flexible.
              </h1>
            </MotionItem>

            <MotionItem>
              <p className="text-lg md:text-xl font-light text-foreground-muted leading-relaxed mb-8 md:mb-10 max-w-lg">
                Get a competitive cash offer for your home in 24 hours. No
                repairs, no fees, no hassle. Close on your timeline.
              </p>
            </MotionItem>

            <MotionItem>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
                  >
                    Get Your Cash Offer
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

            {/* Trust Indicators */}
            <MotionItem>
              <div
                className="flex flex-wrap items-center gap-6 md:gap-10 pt-6"
                style={{ borderTop: "1px solid #dddddd" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="font-serif text-3xl md:text-4xl font-normal text-foreground">
                    500+
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                    Homes Purchased
                  </p>
                </motion.div>
                <div
                  className="w-px h-12 hidden sm:block"
                  style={{ backgroundColor: "#dddddd" }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <p className="font-serif text-3xl md:text-4xl font-normal text-foreground">
                    7 Days
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                    Average Close
                  </p>
                </motion.div>
                <div
                  className="w-px h-12 hidden sm:block"
                  style={{ backgroundColor: "#dddddd" }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <p className="font-serif text-3xl md:text-4xl font-normal text-foreground">
                    $0
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                    Fees or Commission
                  </p>
                </motion.div>
              </div>
            </MotionItem>
          </StaggerContainer>

          {/* Right Column - Visual */}
          <AnimateOnScroll
            variants={scaleIn}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Stock photo of a house */}
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Beautiful modern home exterior"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Floating Card - Cash Offer */}
              <motion.div
                className="absolute -bottom-4 -left-4 p-5 rounded-xl"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, y: 40, x: -20 }}
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
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                      Cash Offer In
                    </p>
                    <p className="font-serif text-2xl font-normal text-foreground">
                      24 Hours
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - No Repairs */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, y: -40, x: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  x: 0,
                }}
                transition={{
                  opacity: { delay: 0.7, duration: 0.6 },
                  x: { delay: 0.7, duration: 0.6 },
                  y: { delay: 1.2, duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: "#2563eb" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      No Repairs Needed
                    </p>
                    <p className="text-xs text-foreground-muted">We buy as-is</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Background Accent */}
            <motion.div
              className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl"
              style={{ backgroundColor: "rgba(37, 99, 235, 0.08)" }}
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
