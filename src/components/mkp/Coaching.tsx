"use client";

import { motion } from "framer-motion";
import { Crosshair, Users, Dumbbell, ArrowRight } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    icon: Crosshair,
    title: "1-on-1 Private sessions",
    tag: "Private",
    desc: "One hour, one focus. Technique broken down to its parts, put back together on the pads, then pressure-tested.",
    features: [
      "Stance, balance and the shift between them",
      "Pad rounds built around your gaps, not a stock circuit",
      "Ring IQ — reading distance, timing and tells",
      "Muay Thai or kickboxing, whichever you're chasing",
    ],
    cta: "Enquire",
  },
  {
    icon: Users,
    title: "At Iron Tiger — Group classes",
    tag: "Group",
    desc: "Full sessions on the gym floor. Beginners welcome — everyone starts on the same first day.",
    features: [
      "Warm-up, technique, pads, rounds",
      "Scaled for first-timers through to competitors",
      "Clinch work every week",
      "No prior experience needed",
    ],
    cta: "Enquire",
  },
  {
    icon: Dumbbell,
    title: "HIIT & Conditioning",
    tag: "Fitness",
    desc: "The engine behind the technique. Striking-based conditioning that gets you fit without needing a fight.",
    features: [
      "Rounds-based intervals, not random circuits",
      "Bag and pad work as the conditioning",
      "Core, hips and grip — where strikers actually fatigue",
      "Come for the fitness, keep the skills",
    ],
    cta: "Enquire",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Coaching() {
  return (
    <section id="coaching" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Header + Gym class image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-xs font-mono tracking-[0.28em] uppercase mb-4 block">
              Coaching
            </span>
            <h2 className="font-[family-name:var(--font-montserrat)] font-900 text-3xl sm:text-4xl lg:text-5xl text-white leading-[0.95] tracking-tight uppercase mb-4">
              What training<br />looks like
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Three ways in. All of them start with a conversation about where you are now.
            </p>

            {/* Gym class image */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/gym-class.jpg"
                alt="Group training session at Iron Tiger Gym"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right - Program cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            {programs.map((prog) => (
              <motion.div
                key={prog.title}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 sm:p-7 flex flex-col transition-all duration-300 group gradient-border hover:border-primary/20"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <prog.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] bg-white/5 text-muted-foreground px-3 py-1 rounded-full font-medium tracking-wide uppercase font-mono">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-base sm:text-lg mb-2">
                  {prog.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {prog.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {prog.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                >
                  {prog.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
