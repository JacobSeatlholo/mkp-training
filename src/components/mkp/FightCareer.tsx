"use client";

import { motion } from "framer-motion";
import { Trophy, XCircle, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FightCareer() {
  return (
    <section id="career" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-xs font-mono tracking-[0.28em] uppercase mb-4 block">
            Competition record
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-900 text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight uppercase mb-6">
            3 – 4
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
            Seven times through the ropes. The wins and the losses both taught something, and both of them show up in how Michael coaches — nothing here is theory.
          </p>
        </motion.div>

        {/* Record stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-lg"
        >
          <div className="glass-card rounded-xl p-5 text-center">
            <div className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl text-white">7</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Total bouts</div>
          </div>
          <div className="glass-card rounded-xl p-5 text-center border-primary/20">
            <div className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl text-primary">3</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Wins</div>
          </div>
          <div className="glass-card rounded-xl p-5 text-center">
            <div className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl text-muted-foreground">4</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Losses</div>
          </div>
        </motion.div>

        {/* Why it matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-xl p-6 sm:p-8 mb-12 max-w-2xl"
        >
          <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-lg sm:text-xl mb-3">
            Why it matters to you
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A coach who has only won has never had to fix anything under pressure. Michael has been on both sides of a decision, made the walk seven times, and knows what falls apart first when the nerves arrive. That is what gets coached — not a highlight reel.
          </p>
        </motion.div>

        {/* Featured bout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-xl sm:text-2xl uppercase mb-6">
            Selected bout
          </h3>

          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-6">
            {/* Bout details */}
            <div className="glass-card rounded-xl p-6 sm:p-8 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                  Win
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-montserrat)] font-800 text-white text-xl sm:text-2xl mb-2">
                vs Tristan Reddy Nakaeng
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Clinical and composed. Unpredictable use of all eight limbs, stopped in the second.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground w-20 shrink-0">Method</span>
                  <span className="text-white font-medium">TKO · Round 2</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground w-20 shrink-0">Division</span>
                  <span className="text-white font-medium">Super lightweight · 61.1–63.5 kg</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground w-20 shrink-0">Event</span>
                  <span className="text-white font-medium">Elite MMA — Muay Thai Fight Night II</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground w-20 shrink-0">Where</span>
                  <span className="text-white font-medium">Melkbosstrand, Cape Town · June 2024</span>
                </div>
              </div>

              <a
                href="https://iol.co.za/capetimes/sport/2024-07-02-kamba-stuns-van-damme-with-brutal-first-round-ko/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:gap-3 transition-all"
              >
                Read the report
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Fight image */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/record-win.jpg"
                alt="Michael Keegan Pienaar's competition win"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
