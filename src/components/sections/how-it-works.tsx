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
import { useRef } from "react";
import { useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Share your property details through our simple form or give us a call. No obligation, no pressure.",
  },
  {
    number: "02",
    title: "Get an Offer",
    description:
      "Receive a fair, competitive cash offer within 24-48 hours. Transparent pricing with no hidden fees.",
  },
  {
    number: "03",
    title: "Close Fast",
    description:
      "Choose your closing date - as fast as 7 days. We handle all the paperwork and logistics.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.5px] text-foreground-muted max-w-xl mx-auto">
            A simple 3-step process to sell your property
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Connector Line - Desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px]"
                  style={{ backgroundColor: "#dddddd" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center md:items-start">
                {/* Step Number */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#2563eb" }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 30px rgba(37, 99, 235, 0.4)",
                  }}
                >
                  <span className="font-mono text-lg font-normal text-white">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-xl font-semibold text-foreground mb-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-sm font-light text-foreground-muted leading-relaxed max-w-xs"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll className="text-center">
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
              href="/how-it-works"
              className="inline-block text-white px-7 py-4 font-mono text-sm font-normal uppercase tracking-[0.5px] rounded transition-colors hover:opacity-90"
              style={{ backgroundColor: "#2563eb" }}
            >
              Learn More About Our Process
            </Link>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
