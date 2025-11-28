"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Sellers", href: "/sellers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-[70px] md:h-[90px]">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] font-normal text-foreground uppercase tracking-[0.5px] hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-3 font-mono text-[13px] font-normal uppercase tracking-[0.5px] rounded transition-colors"
          >
            Get Cash Offer
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="max-w-7xl mx-auto flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[13px] font-normal text-foreground uppercase tracking-[0.5px] py-3 hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-primary hover:bg-primary-hover text-white px-5 py-3 font-mono text-[13px] font-normal uppercase tracking-[0.5px] rounded transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Cash Offer
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
