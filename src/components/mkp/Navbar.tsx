"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Record", href: "#career" },
  { label: "Training", href: "#coaching" },
  { label: "Iron Tiger", href: "#gym" },
  { label: "Media", href: "#media" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/logo-white.svg"
            alt="MKP Training Logo"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
          <div className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-montserrat)] font-800 text-sm sm:text-base tracking-[0.15em] text-white uppercase">
              MKP <span className="text-primary">Training</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-[0.25em] uppercase font-mono">
              Cape Town
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="glow-red-sm bg-primary hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Flame className="w-4 h-4" />
            Book a Session
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-muted-foreground hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="glow-red-sm bg-primary text-white font-semibold px-5 py-3 rounded-lg text-center mt-2 flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4" />
                Book a Session
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
