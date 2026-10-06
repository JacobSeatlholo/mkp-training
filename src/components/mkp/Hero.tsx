"use client";

import { motion } from "framer-motion";
import { ArrowDown, Flame, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0a0a] hero-grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Portrait image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/hero-portrait.jpg"
            alt="Michael Keegan Pienaar — Muay Thai coach and competitor"
            fill
            className="object-cover object-top opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 lg:py-0 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-primary font-medium tracking-wide uppercase font-mono">
                Iron Tiger · Cape Town
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-[family-name:var(--font-montserrat)] font-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-6 uppercase"
          >
            Eight limbs.{" "}
            <span className="text-primary text-glow">One plan.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Michael Keegan Pienaar coaches out of Iron Tiger in Cape Town —{" "}
            <span className="text-white font-medium">muay thai · kickboxing · HIIT</span>. Private sessions and classes on the gym floor, technique first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#contact"
              className="glow-red bg-primary hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <Flame className="w-5 h-5" />
              Train with Michael
            </a>
            <a
              href="#media"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <Play className="w-5 h-5" />
              Watch the footage
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-10"
          >
            {[
              { value: "7", label: "Bouts" },
              { value: "3", label: "Wins" },
              { value: "Cape Town", label: "Based in" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-montserrat)] font-800 text-2xl sm:text-3xl text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
