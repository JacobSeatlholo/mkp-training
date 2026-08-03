"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Swords, Shield } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Elite Sparring Partners",
    desc: "Train alongside active professional and amateur fighters who push each other to improve every single session.",
  },
  {
    icon: Users,
    title: "Real Fight Community",
    desc: "Iron Tiger isn't a commercial gym — it's a fight team. The culture is built on respect, hard work, and shared ambition.",
  },
  {
    icon: Shield,
    title: "Authentic Gym Culture",
    desc: "No egos, no shortcuts. Just honest training in a space that has produced some of Cape Town's toughest competitors.",
  },
  {
    icon: MapPin,
    title: "Heart of Cape Town",
    desc: "Conveniently located in the Mother City, Iron Tiger Gym is the home base for MKP Training and its athletes.",
  },
];

export default function IronTigerGym() {
  return (
    <section id="gym" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      {/* Atmospheric glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              The Training Home
            </span>
            <h2 className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Iron Tiger Gym.
              <br />
              <span className="text-muted-foreground">Where Warriors Are Made.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Iron Tiger Gym is more than a training facility — it's the heart of
              Cape Town's combat sports community. This is where Michael K.
              Pienaar trains, coaches, and prepares his athletes for battle. With a
              no-nonsense approach to training and a culture built on mutual respect
              and shared ambition, Iron Tiger has earned its reputation as one of
              the most authentic fight gyms in the Mother City.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              The gym hosts a roster of active professional and amateur fighters,
              creating an environment where everyone — from first-timers to
              seasoned competitors — is pushed to level up. When you train at Iron
              Tiger through MKP Training, you're not just joining a gym. You're
              joining a family.
            </p>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card glass-card-hover rounded-xl p-5 transition-all duration-300 group"
              >
                <f.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
