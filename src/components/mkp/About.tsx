"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Users } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Shield,
    title: "Technical first",
    num: "01",
    desc: "Nothing gets added until the base holds up. Stance, balance, and the shift between them — then the weapon.",
  },
  {
    icon: Brain,
    title: "Composure",
    num: "02",
    desc: "Panic costs more rounds than any gap in technique. Sessions are built to keep you thinking when the pace climbs.",
  },
  {
    icon: Users,
    title: "Gym culture",
    num: "03",
    desc: "Real Muay Thai in the Mother City. Hard rounds, honest feedback, and a floor where beginners are looked after.",
  },
];

const limbs = [
  { name: "Fists", desc: "Straight, hook, uppercut — the range-finders", index: "01" },
  { name: "Elbows", desc: "Slicing close-range weapon, clinch entries", index: "02" },
  { name: "Knees", desc: "Clinch dominance and mid-range power", index: "03" },
  { name: "Shins", desc: "Low, mid, high — the long-range artillery", index: "04" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const limbContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const limbCardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text + Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-xs font-mono tracking-[0.28em] uppercase mb-4 block">
              Who you&apos;re training with
            </span>
            <h2 className="font-[family-name:var(--font-montserrat)] font-900 text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight uppercase mb-6">
              Michael Keegan<br />
              <span className="text-primary">Pienaar</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              A competitor and coach out of Iron Tiger, Cape Town. Seven bouts in, he coaches muay thai · kickboxing · hiit — the same technical, unhurried approach he fights with.
            </p>

            {/* Values */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={itemVariants}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="font-mono text-primary text-xs font-bold">{v.num}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-base sm:text-lg mb-1">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Eight limbs + Corner image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-xl p-6 sm:p-8 mb-6 gradient-border"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-[family-name:var(--font-montserrat)] font-800 text-white text-xl sm:text-2xl uppercase mb-2"
              >
                The art of eight limbs
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm text-muted-foreground leading-relaxed mb-6"
              >
                Boxing has two weapons. Muay Thai has eight. Every session works one of them into the rest.
              </motion.p>

              {/* Animated limb cards */}
              <motion.div
                variants={limbContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-2 gap-3"
              >
                {limbs.map((limb) => (
                  <motion.div
                    key={limb.name}
                    variants={limbCardVariants}
                    whileHover={{
                      scale: 1.04,
                      borderColor: "rgba(220, 38, 38, 0.4)",
                      boxShadow: "0 0 20px rgba(220, 38, 38, 0.15)",
                    }}
                    className="bg-white/[0.03] rounded-lg p-3 border border-white/5 cursor-default transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <span className="text-primary text-xs font-mono font-bold uppercase tracking-wider">
                        {limb.name}
                      </span>
                      <span className="text-white/20 text-[10px] font-mono ml-auto">
                        {limb.index}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                      {limb.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated pulse ring */}
              <div className="relative mt-6 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-8 h-8 rounded-full border border-primary/30"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="absolute w-6 h-6 rounded-full border border-primary/40"
                />
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
            </motion.div>

            {/* Corner image */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/corner.jpg"
                alt="Michael Keegan Pienaar in the corner between rounds"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
