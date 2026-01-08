"use client";

import Link from "next/link";
import { motion } from "@/lib/animations";
import { useRef } from "react";
import { useInView } from "framer-motion";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Cash Purchase", href: "/services#cash" },
    { label: "Seller Financing", href: "/services#financing" },
  ],
  resources: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Sellers", href: "/sellers" },
    { label: "Investors", href: "/investors" },
  ],
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <footer style={{ backgroundColor: "#383838" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Logo & Description */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <motion.svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M16 4L4 14V28H12V20H20V28H28V14L16 4Z"
                  fill="#2563eb"
                />
                <path d="M16 4L4 14H28L16 4Z" fill="#1d4ed8" />
                <rect x="13" y="20" width="6" height="8" fill="#383838" />
                <rect
                  x="18"
                  y="15"
                  width="4"
                  height="3"
                  fill="#383838"
                  rx="0.5"
                />
              </motion.svg>
              <span className="font-semibold text-xl text-white tracking-tight group-hover:text-primary transition-colors">
                Miana
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              Strategic real estate acquisition with fast cash offers and
              flexible seller financing.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-[13px] uppercase tracking-[0.5px] mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white inline-block"
                    style={{ color: "#9ca3af" }}
                  >
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-[13px] uppercase tracking-[0.5px] mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white inline-block"
                    style={{ color: "#9ca3af" }}
                  >
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-[13px] uppercase tracking-[0.5px] mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white inline-block"
                    style={{ color: "#9ca3af" }}
                  >
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          style={{ borderTop: "1px solid #4b5563" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-center md:text-left">
            <p className="text-sm mb-1" style={{ color: "#9ca3af" }}>
              Miana is a brand operated by Vanguard Horizon REIT LLC.
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              © {new Date().getFullYear()} Miana Real Estate Acquisition. All
              rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm transition-colors hover:text-white"
              style={{ color: "#6b7280" }}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                Privacy Policy
              </motion.span>
            </Link>
            <Link
              href="/terms"
              className="text-sm transition-colors hover:text-white"
              style={{ color: "#6b7280" }}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                Terms of Service
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
