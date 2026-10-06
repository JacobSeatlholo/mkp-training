"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const limbs = [
  { id: 0, num: "01", category: "FISTS", title: "JAB", desc: "Sets range and measures the opponent.", group: "fist-l" },
  { id: 1, num: "02", category: "FISTS", title: "MAT", desc: "Lead hand controls distance and sets the trap.", group: "fist-r" },
  { id: 2, num: "03", category: "ELBOWS", title: "SLICE", desc: "Cuts through guards and creates openings.", group: "elbow-l" },
  { id: 3, num: "04", category: "ELBOWS", title: "SMASH", desc: "Devastating close-range power strike.", group: "elbow-r" },
  { id: 4, num: "05", category: "KNEES", title: "POST", desc: "Controls space and checks forward pressure.", group: "knee-l" },
  { id: 5, num: "06", category: "KNEES", title: "SPIKE", desc: "Drives upward to devastate the body or head.", group: "knee-r" },
  { id: 6, num: "07", category: "SHINS", title: "CHECK", desc: "Defensive foundation and short-range jamming tool.", group: "shin-l" },
  { id: 7, num: "08", category: "SHINS", title: "CUT", desc: "Long-range power that cuts down the opponent's base.", group: "shin-r" },
];

/* SVG coordinates for the stick figure (viewBox 0 0 200 320) */
const figureParts = {
  spine: "M100,55 L100,180",
  shoulders: "M60,90 L140,90",
  leftArm: "M60,90 L45,135 L30,165",
  rightArm: "M140,90 L155,135 L170,165",
  hips: "M80,180 L120,180",
  leftLeg: "M80,180 L70,245 L60,300",
  rightLeg: "M120,180 L130,245 L140,300",
  head: { cx: 100, cy: 40, r: 16 },
};

const limbPoints: Record<string, { cx: number; cy: number }> = {
  "fist-l": { cx: 30, cy: 165 },
  "fist-r": { cx: 170, cy: 165 },
  "elbow-l": { cx: 45, cy: 135 },
  "elbow-r": { cx: 155, cy: 135 },
  "knee-l": { cx: 70, cy: 245 },
  "knee-r": { cx: 130, cy: 245 },
  "shin-l": { cx: 60, cy: 300 },
  "shin-r": { cx: 140, cy: 300 },
};

export default function EightLimbs() {
  const [active, setActive] = useState(1); // Start with "02 FISTS - MAT"
  const selected = limbs[active];

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-0">
        <h3 className="font-[family-name:var(--font-montserrat)] font-800 text-white text-xl sm:text-2xl uppercase tracking-wide mb-2">
          The art of eight limbs
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          Boxing has two weapons. Muay Thai has eight. Every session works one of them into the rest.
        </p>
      </div>

      {/* Interactive area */}
      <div className="p-6 sm:p-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left - Stick figure */}
          <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[340px]">
            {/* Subtle grid lines (pointer-events-none so SVG dots stay clickable) */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-white"
                  style={{ top: `${(i + 1) * 12.5}%` }}
                />
              ))}
            </div>

            <svg
              viewBox="0 0 200 320"
              className="w-full max-w-[220px] sm:max-w-[260px] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Figure lines */}
              <path d={figureParts.spine} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
              <path d={figureParts.shoulders} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
              <path d={figureParts.leftArm} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
              <path d={figureParts.rightArm} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
              <path d={figureParts.hips} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
              <path d={figureParts.leftLeg} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
              <path d={figureParts.rightLeg} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />

              {/* Head */}
              <circle
                cx={figureParts.head.cx}
                cy={figureParts.head.cy}
                r={figureParts.head.r}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
              />

              {/* 8 Limb points */}
              {limbs.map((limb) => {
                const point = limbPoints[limb.group];
                const isActive = active === limb.id;
                return (
                  <g key={limb.group}>
                    {/* Outer ring (active glow) */}
                    <motion.circle
                      cx={point.cx}
                      cy={point.cy}
                      r={isActive ? 14 : 0}
                      fill="rgba(220,38,38,0.1)"
                      stroke="rgba(220,38,38,0.3)"
                      strokeWidth="1"
                      animate={{
                        r: isActive ? 14 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    {/* Inner dot */}
                    <motion.circle
                      cx={point.cx}
                      cy={point.cy}
                      r={6}
                      animate={{
                        fill: isActive ? "#dc2626" : "rgba(255,255,255,0.15)",
                        r: isActive ? 7 : 5,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActive(limb.id)}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right - Info panel */}
          <div className="flex items-center min-h-[280px] sm:min-h-[340px]">
            <div className="relative pl-5">
              {/* Red accent bar */}
              <motion.div
                layoutId="accent-bar"
                className="absolute left-0 top-0 w-[3px] rounded-full bg-primary"
                style={{ height: "100%" }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span className="text-primary text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-2">
                    {selected.category}
                  </span>
                  <h4 className="font-[family-name:var(--font-montserrat)] font-900 text-white text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-3">
                    {selected.title}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xs">
                    {selected.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 8 Buttons grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-4 gap-2 sm:gap-3">
          {limbs.map((limb) => {
            const isActive = active === limb.id;
            return (
              <motion.button
                key={limb.id}
                onClick={() => setActive(limb.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-lg px-2 sm:px-3 py-2.5 sm:py-3 border text-left transition-all duration-200 ${
                  isActive
                    ? "border-primary/60 bg-primary/5"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                }`}
              >
                <span
                  className={`block text-[10px] sm:text-xs font-mono font-bold tracking-wider ${
                    isActive ? "text-primary" : "text-muted-foreground/60"
                  }`}
                >
                  {limb.num}
                </span>
                <span
                  className={`block text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-0.5 ${
                    isActive ? "text-primary" : "text-muted-foreground/40"
                  }`}
                >
                  {limb.category}
                </span>
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
