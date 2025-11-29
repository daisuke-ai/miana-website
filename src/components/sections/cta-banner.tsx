"use client";

import Link from "next/link";
import {
  motion,
  AnimateOnScroll,
  fadeInUp,
  scaleIn,
  buttonHover,
  buttonTap,
} from "@/lib/animations";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function CTABanner() {
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
          style={{ backgroundColor: "#2563eb" }}
          initial={{ scale: 0, x: 100, y: 100 }}
          animate={isInView ? { scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[4px] uppercase text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to Sell?
          </motion.h2>
          <motion.p
            className="font-mono text-sm md:text-base uppercase tracking-[0.5px] mb-10 max-w-xl mx-auto"
            style={{ color: "#9ca3af" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Get a no-obligation cash offer for your property today
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
                Get Your Cash Offer
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
                Learn How It Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
