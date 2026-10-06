"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ExternalLink, Youtube, Newspaper, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

const mediaItems = [
  {
    type: "article",
    title: "Cape Times — PFC Event Coverage",
    subtitle: "Kamba stuns Van Damme with brutal first-round KO",
    url: "https://iol.co.za/capetimes/sport/2024-07-02-kamba-stuns-van-damme-with-brutal-first-round-ko/",
    icon: Newspaper,
  },
];

const galleryImages = [
  { src: "/media-1.jpg", label: "Fight night" },
  { src: "/media-2.jpg", label: "Training" },
  { src: "/media-3.jpg", label: "Gym work" },
  { src: "/media-4.jpg", label: "Competition" },
];

export default function Media() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section id="media" className="relative py-24 sm:py-32">
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
            Media
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-900 text-3xl sm:text-4xl lg:text-5xl text-white leading-[0.95] tracking-tight uppercase mb-4">
            Footage
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Fight nights and gym work.
          </p>
        </motion.div>

        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative rounded-xl overflow-hidden group gradient-border">
            <video
              ref={videoRef}
              src="/mkp-promo.mp4"
              muted
              loop
              playsInline
              poster="/hero-portrait.jpg"
              className="w-full aspect-video object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Play/Pause button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
              aria-label={playing ? "Pause video" : "Play video"}
            >
              <motion.div
                initial={false}
                animate={{
                  scale: playing ? 0 : 1,
                  opacity: playing ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center glow-red-sm group-hover:bg-primary transition-all"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" />
              </motion.div>
            </button>

            {/* Controls bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                {playing && (
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Pause"
                  >
                    <Pause className="w-4 h-4 text-white" />
                  </button>
                )}
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>

              {/* YouTube link */}
              <a
                href="https://youtube.com/watch?v=vsDo6ESU_Tc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
                <span className="text-xs text-white font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured media links */}
        <div className="grid sm:grid-cols-1 gap-4 sm:gap-6 mb-12">
          {mediaItems.map((item) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-xl p-6 sm:p-8 flex items-start gap-4 group transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.subtitle}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  Read the report
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Gallery Grid with real images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
