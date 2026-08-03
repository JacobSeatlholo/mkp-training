"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

const trainingOptions = [
  "Private 1-on-1 Striking",
  "MMA Coaching",
  "Fight Camp Preparation",
  "Group Classes",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest) {
      toast.error("Please fill in your name, email, and training interest.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! Michael will be in touch soon.");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      {/* Atmospheric glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Get Started
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Ready to Train?
            <br />
            <span className="text-muted-foreground">Let's Make It Happen.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Fill in the form below or reach out directly. Whether you want to book
            a private session, join a group class, or start a full fight camp —
            Michael is ready to help you level up.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-card rounded-xl p-8 sm:p-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-[family-name:var(--font-montserrat)] font-700 text-white text-2xl mb-2">
                  Message Sent
                </h3>
                <p className="text-muted-foreground">
                  Thanks, {formData.name || "fighter"}. Michael will get back to you
                  within 24 hours. In the meantime, stay sharp.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 ..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Training Interest <span className="text-primary">*</span>
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm appearance-none"
                    >
                      <option value="" className="bg-[#141414]">
                        Select programme...
                      </option>
                      {trainingOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#141414]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell Michael about your goals, experience level, and what you're looking for..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full glow-red bg-primary hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
 <div className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-primary/20 transition-all">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Iron Tiger Gym, Cape Town, South Africa
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/27"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-green-500/20 transition-all block"
            >
              <MessageCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm mb-1">WhatsApp</h4>
                <p className="text-sm text-muted-foreground group-hover:text-green-400 transition-colors">
                  Message directly on WhatsApp
                </p>
              </div>
            </a>
            <a
              href="mailto:info@mkptraining.co.za"
              className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-primary/20 transition-all block"
            >
              <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Email</h4>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  info@mkptraining.co.za
                </p>
              </div>
            </a>
            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">
                  Available on request
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
