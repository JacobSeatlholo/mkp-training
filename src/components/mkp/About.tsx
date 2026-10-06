"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Users } from "lucide-react";
import Image from "next/image";
import EightLimbs from "./EightLimbs";

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
              A competitor and coach out of Iron Tiger, Cape Town. Seven bouts in, he coaches muay thai · kickboxing · HIIT — the same technical, unhurried approach he fights with.
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

          {/* Right - Eight limbs interactive + Corner image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Interactive Eight Limbs diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <EightLimbs />
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
