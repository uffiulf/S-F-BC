"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 border border-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Tilknyttet Høgskolen i Østfold
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6 max-w-5xl"
      >
        <span className="text-white">Morgendagens talent.</span>
        <br />
        <span className="gradient-text">Dagens løsninger.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
      >
        Syntax & Flow er et selvstendig prosjektorgan in-house på Høgskolen i Østfold (HiØ) som drives av en stabil kjerne, mens studentene får
        reell arbeidserfaring innen <strong className="text-white">IT, design og økonomi</strong> — og
        næringslivet en risikofri mulighet til å teste morgendagens ansatte.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 mb-16"
      >
        <a href="#soknader" className="btn-primary flex items-center gap-2 justify-center">
          Søk som student
          <ArrowRight size={18} />
        </a>
        <a href="#bedrifter" className="btn-secondary flex items-center gap-2 justify-center">
          Samarbeid med oss (gratis)
        </a>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
      >
        {[
          { value: "3", label: "Fagdisipliner", sub: "IT · Design · Økonomi" },
          { value: "0 kr", label: "Kostnad for bedrifter", sub: "Pro-bono med Win-Win-avtale" },
          { value: "HiØ", label: "Faglig forankring", sub: "Mentorer og studiepoeng" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text-blue mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
            <div className="text-xs text-slate-500">{stat.sub}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#om-oss"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Utforsk</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
