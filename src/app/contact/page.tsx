"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  motion,
  AnimateOnScroll,
  StaggerContainer,
  MotionItem,
  fadeInUp,
} from "@/lib/animations";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

// Contact Info Data
const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    label: "Email",
    value: "mian@miana.com.co",
    href: "mailto:mian@miana.com.co",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "Headquarters",
    value: "California, USA",
    href: null,
  },
];

// FAQ Data
const faqs = [
  {
    question: "How quickly will I receive an offer?",
    answer: "We typically provide a cash offer within 24-48 hours of receiving your property information. In many cases, we can give you a preliminary estimate on the same day.",
  },
  {
    question: "Is there any cost or obligation?",
    answer: "Absolutely not. Our offers are 100% free with no obligation. You're never pressured to accept, and there are no fees if you decide not to proceed.",
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve California, with a focus on the Sacramento, Bay Area, Central Valley, and Southern California regions. Contact us to see if we cover your area.",
  },
  {
    question: "Do I need to clean or repair my property?",
    answer: "No! We buy properties in any condition - no cleaning, repairs, or renovations needed. Leave everything as-is and we'll handle the rest.",
  },
];

// Property Types
const propertyTypes = [
  "Single Family Home",
  "Condo/Townhouse",
  "Multi-Family",
  "Mobile Home",
  "Vacant Land",
  "Other",
];

// Timeframes
const timeframes = [
  "ASAP (Within 7 days)",
  "2-4 Weeks",
  "1-2 Months",
  "Just Exploring Options",
];

// Hero Section
function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
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
                Get In Touch
              </span>
            </div>
          </MotionItem>

          <MotionItem>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[2px] md:tracking-[4px] uppercase text-foreground mb-6">
              Let's <span className="text-primary">Talk</span>
            </h1>
          </MotionItem>

          <MotionItem>
            <p className="text-lg md:text-xl font-light text-foreground-muted leading-relaxed max-w-2xl mx-auto">
              Get a free, no-obligation cash offer for your property. Fill out the
              form below and we'll respond within 24 hours.
            </p>
          </MotionItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    timeframe: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-8 md:py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-xl p-6 md:p-8"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-[2px] uppercase text-foreground mb-2">
                Get Your Cash Offer
              </h2>
              <p className="text-sm text-foreground-muted mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{
                        backgroundColor: "#f4efea",
                        border: "1px solid #eeeeee",
                        color: "#383838",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{
                        backgroundColor: "#f4efea",
                        border: "1px solid #eeeeee",
                        color: "#383838",
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Property Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{
                        backgroundColor: "#f4efea",
                        border: "1px solid #eeeeee",
                        color: "#383838",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="123 Main St, Sacramento, CA"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{
                        backgroundColor: "#f4efea",
                        border: "1px solid #eeeeee",
                        color: "#383838",
                      }}
                    />
                  </div>
                </div>

                {/* Property Type & Timeframe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "#f4efea",
                        border: "1px solid #eeeeee",
                        color: formData.propertyType ? "#383838" : "#888888",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M3 4.5L6 7.5L9 4.5'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2">
                      Timeframe to Sell
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "#f4efea",
                        border: "1px solid #eeeeee",
                        color: formData.timeframe ? "#383838" : "#888888",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M3 4.5L6 7.5L9 4.5'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Select timeframe</option>
                      {timeframes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your property or situation..."
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    style={{
                      backgroundColor: "#f4efea",
                      border: "1px solid #eeeeee",
                      color: "#383838",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full text-white px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider rounded transition-colors"
                  style={{ backgroundColor: "#2563eb" }}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get My Free Cash Offer
                </motion.button>

                <p className="text-xs text-center text-foreground-muted">
                  By submitting, you agree to our privacy policy. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg transition-all hover:shadow-md"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(37, 99, 235, 0.1)", color: "#2563eb" }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(37, 99, 235, 0.1)", color: "#2563eb" }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Service Area */}
            <motion.div
              className="rounded-xl p-6"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-3">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Sacramento", "Bay Area", "Central Valley", "Los Angeles", "San Diego", "Inland Empire"].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#f4efea", color: "#383838" }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div ref={ref} className="max-w-3xl mx-auto px-5 md:px-10">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-[4px] uppercase text-foreground mb-4">
            Quick Answers
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.5px] text-foreground-muted">
            Common questions about getting started
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
                className="w-full flex items-center justify-between p-5 text-left"
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
                  className="px-5 pb-5"
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

// Main Page Component
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ContactHero />
        <ContactFormSection />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
}
