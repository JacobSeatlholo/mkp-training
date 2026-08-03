"use client";

import { motion } from "framer-motion";
import { Shield, Target, Brain, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Discipline",
    desc: "Every session is built on unbreakable discipline — the foundation of every champion. Consistency over motivation, every single day.",
  },
  {
    icon: Target,
    title: "Technical Precision",
    desc: "Every strike, every angle, every movement is deliberate. Michael's coaching obsesses over the details that separate good from great.",
  },
  {
    icon: Brain,
    title: "Mental Toughness",
    desc: "The fight is won before you step in the cage. MKP Training builds the unshakable mindset required to perform under extreme pressure.",
  },
  {
    icon: Heart,
    title: "Authentic Culture",
    desc: "Rooted in Cape Town's martial arts heritage, MKP Training is about real fighting, real community, and real results.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            About Michael
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Forged in the Ring.<br />
            <span className="text-muted-foreground">Built to Coach.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>
              Michael K. Pienaar is a professional fighter and elite-level coach
              based in Cape Town, South Africa. Known inside the cage for his
              explosive striking, high fight IQ, and unrelenting pressure, Michael
              has competed at the highest levels of the sport under banners like
              the Professional Fighting Championships (PFC).
            </p>
            <p>
              As a head coach at Iron Tiger Gym, Michael channels the same
              intensity and technical mastery that defines his fighting style into
              every athlete he works with. From first-timers stepping onto the mats
              for the first time to professional fighters preparing for their next
              bout, MKP Training delivers an experience that is deeply personal,
              technically precise, and fiercely results-driven.
            </p>
            <p>
              His philosophy is simple: master the fundamentals, condition the body
              and mind for war, and never stop evolving. Whether you want to compete,
              get fight-fit, or simply learn the art of striking from someone who
              lives it — MKP Training is where you start.
            </p>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={itemVariants}
              className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-lg mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
