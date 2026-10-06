"use client";

import { motion } from "framer-motion";
import { MapPin, Swords, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Hard rounds, honest feedback",
    desc: "A gym is only as good as the rounds you get in it. Iron Tiger fields competitors across weight classes — whatever you are working on, there is someone on the floor who can give you the look you need.",
  },
  {
    icon: Shield,
    title: "Supervised from day one",
    desc: "New members are not thrown in. First sessions are technical, paced, and supervised — you spar when you are ready to spar, not before.",
  },
  {
    icon: Users,
    title: "Partners who make you better",
    desc: "Iron Tiger fields competitors across weight classes. Whatever you are working on, there is someone on the floor who can give you the look you need.",
  },
  {
    icon: MapPin,
    title: "Shop 1, 17 Jamieson Street",
    desc: "Cape Town. The floor Michael trains and coaches on. Muay Thai the way it should be in the Mother City.",
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
            <span className="text-primary text-xs font-mono tracking-[0.28em] uppercase mb-4 block">
              Home gym
            </span>
            <h2 className="font-[family-name:var(--font-montserrat)] font-900 text-3xl sm:text-4xl lg:text-5xl text-white leading-[0.95] tracking-tight uppercase mb-6">
              Iron Tiger
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              The floor Michael trains and coaches on. Cape Town Muay Thai the way it should be — hard rounds, honest feedback, and partners who make you better.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              A gym is only as good as the rounds you get in it. Iron Tiger fields competitors across weight classes, which means whatever you are working on, there is someone on the floor who can give you the look you need. New members are not thrown in — first sessions are technical, paced, and supervised.
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
                <f.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-sm sm:text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}

            {/* Map link */}
            <a
              href="https://maps.google.com/?q=17+Jamieson+Street+Cape+Town"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 glass-card glass-card-hover rounded-xl p-5 flex items-center gap-4 group transition-all duration-300"
            >
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div>
                <span className="text-white text-sm font-medium group-hover:text-primary transition-colors">
                  Open in maps
                </span>
                <p className="text-xs text-muted-foreground">
                  Shop 1, 17 Jamieson Street, Cape Town
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
