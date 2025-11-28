"use client";

import Link from "next/link";
import {
  motion,
  AnimateOnScroll,
  slideInLeft,
  slideInRight,
  fadeInUp,
  buttonHover,
  buttonTap,
} from "@/lib/animations";
import { useRef } from "react";
import { useInView } from "framer-motion";

const sellerFeatures = [
  "No repairs needed",
  "No agent commissions",
  "Close on your timeline",
  "Any condition accepted",
];

const investorFeatures = [
  "Data-driven decisions",
  "Transparent reporting",
  "Portfolio diversification",
  "Active management",
];

export function WhoWeHelpSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Who We Help
          </h2>
        </AnimateOnScroll>

        {/* Two Column Layout */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Sellers Column */}
          <motion.div
            className="rounded-lg p-8 md:p-10"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -4,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            >
              <svg
                className="w-6 h-6"
                style={{ color: "#14b8a6" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 9V22H9V16H15V22H22V9L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>
            <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-[2px] uppercase text-foreground mb-4">
              For Sellers
            </h3>
            <p className="text-base font-light text-foreground-muted leading-relaxed mb-6">
              Sell your property fast without repairs, fees, or hassle. Whether
              you&apos;re facing foreclosure, inherited a property, or simply
              need to move quickly - we provide solutions.
            </p>
            <ul className="space-y-3 mb-8">
              {sellerFeatures.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: "#14b8a6" }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href="/sellers"
                className="inline-block text-white px-6 py-3 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors hover:opacity-90"
                style={{ backgroundColor: "#14b8a6" }}
              >
                I Want to Sell
              </Link>
            </motion.div>
          </motion.div>

          {/* Investors Column */}
          <motion.div
            className="rounded-lg p-8 md:p-10"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -4,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            >
              <svg
                className="w-6 h-6"
                style={{ color: "#7c3aed" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>
            <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-[2px] uppercase text-foreground mb-4">
              For Investors
            </h3>
            <p className="text-base font-light text-foreground-muted leading-relaxed mb-6">
              Partner with us for sustainable real estate returns. Our
              data-driven approach identifies high-potential assets in growing
              markets across the country.
            </p>
            <ul className="space-y-3 mb-8">
              {investorFeatures.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: "#7c3aed" }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href="/investors"
                className="inline-block text-white px-6 py-3 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#7c3aed" }}
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
