"use client";

import { motion } from "framer-motion";
import { Zap, Clock, TrendingUp, Medal } from "lucide-react";

const fights = [
  {
    event: "PFC — The Comeback",
    opponent: "Featured Bout",
    result: "Victory",
    highlight: "Explosive striking display under the bright lights of Professional Fighting Championships, showcasing elite-level stand-up and fight IQ.",
    icon: Zap,
    year: "2024",
  },
  {
    event: "PFC Cape Town",
    opponent: "High-Profile Contender",
    result: "Victory",
    highlight: "Dominant performance in front of a packed Cape Town crowd. Michael's pressure and precision were on full display from the opening bell.",
    icon: TrendingUp,
    year: "2023",
  },
  {
    event: "Professional Fighting Championships",
    opponent: "Ranked Opponent",
    result: "Victory",
    highlight: "A masterclass in striking distance management and counter-punching against a dangerous and experienced opponent.",
    icon: Medal,
    year: "2023",
  },
  {
    event: "Fight Night Promotion",
    opponent: "Division Rival",
    result: "Victory",
    highlight: "Relentless pace and superior conditioning. Michael broke his opponent down over the course of the bout, proving his cardio is championship-calibre.",
    icon: Clock,
    year: "2022",
  },
];

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
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Fight Career
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Tested in the Cage.<br />
            <span className="text-muted-foreground">Proven on the Big Stage.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From local fight nights to Professional Fighting Championships events
            broadcast to thousands, Michael K. Pienaar has consistently demonstrated the
            striking precision, resilience, and warrior spirit that defines elite-level
            competition.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {fights.map((fight, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 sm:left-6 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-red-sm z-10" />

                <div className="glass-card glass-card-hover rounded-xl p-6 sm:p-8 transition-all duration-300 group gradient-border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <fight.icon className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                          {fight.year}
                        </span>
                        <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">
                          {fight.result}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-lg sm:text-xl">
                        {fight.event}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        vs. {fight.opponent}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {fight.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
