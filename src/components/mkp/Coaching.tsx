"use client";

import { motion } from "framer-motion";
import { Crosshair, Dumbbell, Users, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Crosshair,
    title: "1-on-1 Private Striking & MMA",
    tag: "Most Popular",
    desc: "Personalised coaching sessions focused on technique refinement, pad work, fight IQ development, and combat strategy. Every session is tailored to your skill level and goals — whether you're a complete beginner or a seasoned competitor looking to sharpen your arsenal.",
    features: [
      "Customised striking technique drills",
      "Pad work & mitt work with pro feedback",
      "Fight IQ & situational sparring strategy",
      "Video analysis of your combinations",
    ],
    cta: "Book Private Session",
  },
  {
    icon: Dumbbell,
    title: "Fight Camp Preparation",
    tag: "For Competitors",
    desc: "A comprehensive, periodised training programme designed for fighters preparing for amateur or professional bouts. Covering conditioning, sparring strategy, weight management, and the mental preparation required to perform under extreme pressure on fight night.",
    features: [
      "Periodised strength & conditioning",
      "Sparring strategy & game planning",
      "Weight-cut management & nutrition guidance",
      "Fight-week mental preparation protocols",
    ],
    cta: "Start Fight Camp",
  },
  {
    icon: Users,
    title: "Group Classes at Iron Tiger",
    tag: "Community",
    desc: "High-energy group training sessions at Iron Tiger Gym. A mix of striking fundamentals, conditioning circuits, and controlled sparring in a supportive, team-oriented environment. Perfect for building fitness, learning self-defence, and connecting with Cape Town's fight community.",
    features: [
      "Striking fundamentals & combinations",
      "High-intensity conditioning circuits",
      "Partner drills & controlled sparring",
      "Access to Iron Tiger Gym community",
    ],
    cta: "Join a Class",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Coaching & Programmes
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Train Like a Pro.<br />
            <span className="text-muted-foreground">No Shortcuts.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Whether you're stepping onto the mats for the first time or preparing
            for a professional bout, MKP Training has a programme built for you.
            Every session is delivered with the same intensity and attention to
            detail that Michael brings to his own fight camps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 sm:p-8 flex flex-col transition-all duration-300 group gradient-border hover:border-primary/20"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <prog.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] bg-white/5 text-muted-foreground px-3 py-1 rounded-full font-medium tracking-wide uppercase">
                  {prog.tag}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-lg sm:text-xl mb-3">
                {prog.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {prog.desc}
              </p>

              <ul className="space-y-2 mb-8">
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
    </section>
  );
}
