"use client";

import { Flame, Instagram, Youtube, ArrowUp, Facebook } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Record", href: "#career" },
  { label: "Training", href: "#coaching" },
  { label: "Iron Tiger", href: "#gym" },
  { label: "Media", href: "#media" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-white.svg"
                alt="MKP Training"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-[family-name:var(--font-montserrat)] font-800 text-sm tracking-[0.15em] text-white uppercase">
                MKP <span className="text-primary">Training</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Muay Thai coaching with Michael Keegan Pienaar at Iron Tiger, Cape Town.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-[0.2em] uppercase">
              Sections
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-[0.2em] uppercase">
              Training
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#coaching"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Private sessions
                </a>
              </li>
              <li>
                <a
                  href="#coaching"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Group classes
                </a>
              </li>
              <li>
                <a
                  href="#coaching"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  HIIT & Conditioning
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Badge */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-[0.2em] uppercase">
              Follow
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://youtube.com/watch?v=vsDo6ESU_Tc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5">
              <Flame className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary font-medium tracking-wide">
                Built for the Ring
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 MKP Training · Michael Keegan Pienaar
          </p>
          <a
            href="#hero"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
