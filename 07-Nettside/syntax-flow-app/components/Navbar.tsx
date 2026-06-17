"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Tjenester", href: "#tjenester" },
  { label: "Slik fungerer det", href: "#prosess" },
  { label: "For bedrifter", href: "#bedrifter" },
  { label: "Portefølje", href: "#portefolje" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`w-full rounded-2xl transition-all duration-300`}
        style={{
          maxWidth: "72rem",
          padding: "0.75rem 1.5rem",
          background: scrolled ? "rgba(255,255,255,0.04)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center glow-blue">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="gradient-text-blue">Syntax</span>
              <span className="text-slate-300"> & </span>
              <span className="text-white">Flow</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#soknader" className="btn-secondary text-sm py-2 px-5">
              Søk som student
            </a>
            <a href="#soknader" className="btn-primary text-sm py-2 px-5">
              Samarbeid med oss
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="nav-link"
                    style={{ display: "block", padding: "0.75rem 1rem" }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-3 flex flex-col gap-2">
                  <a href="#soknader" className="btn-secondary text-sm text-center">
                    Søk som student
                  </a>
                  <a href="#soknader" className="btn-primary text-sm text-center">
                    Samarbeid med oss
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
