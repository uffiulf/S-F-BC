"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Send, CheckCircle } from "lucide-react";

type Tab = "student" | "bedrift";

export default function ApplicationForms() {
  const [activeTab, setActiveTab] = useState<Tab>("student");
  const [studentSent, setStudentSent] = useState(false);
  const [bedriftSent, setBedriftSent] = useState(false);

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentSent(true);
  };

  const handleBedriftSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBedriftSent(true);
  };

  return (
    <section id="soknader" className="section-padding relative">
      <div className="sf-container-sm">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4">
            Kom i gang
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Søk i dag
          </h2>
          <p className="text-slate-400 text-lg">
            Enten du er student, NAV-kandidat eller en bedrift som trenger hjelp — her starter du.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="glass rounded-2xl p-1.5 flex gap-1.5 mb-8">
          {[
            { id: "student" as Tab, label: "Søk som student / NAV", icon: GraduationCap },
            { id: "bedrift" as Tab, label: "Bedrift — start et prosjekt", icon: Briefcase },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:block">{tab.label}</span>
                <span className="sm:hidden">{tab.id === "student" ? "Student" : "Bedrift"}</span>
              </button>
            );
          })}
        </div>

        {/* Forms */}
        <AnimatePresence mode="wait">
          {activeTab === "student" ? (
            <motion.div
              key="student"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {studentSent ? (
                <SuccessMessage message="Søknaden din er mottatt! Vi tar kontakt innen 5 arbeidsdager." />
              ) : (
                <form onSubmit={handleStudentSubmit} className="gradient-border p-8 flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Fornavn *
                      </label>
                      <input required className="sf-input" placeholder="Ola" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Etternavn *
                      </label>
                      <input required className="sf-input" placeholder="Nordmann" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      E-post *
                    </label>
                    <input required type="email" className="sf-input" placeholder="ola@student.hiof.no" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      Fagfelt *
                    </label>
                    <select required className="sf-input" style={{ colorScheme: "dark" }}>
                      <option value="">Velg fagfelt...</option>
                      <option>IT / Programmering</option>
                      <option>Design / UX</option>
                      <option>Økonomi / Forretning</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      Spor *
                    </label>
                    <select required className="sf-input" style={{ colorScheme: "dark" }}>
                      <option value="">Velg deltakelsesform...</option>
                      <option>Spor 1 — Fulltids Bedriftspraksis (60 stp/år)</option>
                      <option>Spor 2 — Enkeltemne (10 stp/semester)</option>
                      <option>Spor 3 — NAV-praksisplass</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      Kort motivasjon *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="sf-input resize-none"
                      placeholder="Fortell oss litt om deg selv og hva du ønsker å oppnå hos Syntax & Flow..."
                    />
                  </div>
                  <button type="submit" className="btn-primary flex items-center justify-center gap-2 mt-2">
                    Send søknad
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="bedrift"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {bedriftSent ? (
                <SuccessMessage message="Forespørselen er mottatt! Vi tar kontakt for å avtale et innledende møte." />
              ) : (
                <form onSubmit={handleBedriftSubmit} className="gradient-border p-8 flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Bedriftsnavn *
                      </label>
                      <input required className="sf-input" placeholder="Bedriften AS" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Kontaktperson *
                      </label>
                      <input required className="sf-input" placeholder="Kari Nordmann" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      E-post *
                    </label>
                    <input required type="email" className="sf-input" placeholder="kontakt@bedrift.no" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      Hva slags hjelp trenger dere? *
                    </label>
                    <select required className="sf-input" style={{ colorScheme: "dark" }}>
                      <option value="">Velg tjenestetype...</option>
                      <option>Nettside / Webutvikling</option>
                      <option>Design / Merkevarebygging</option>
                      <option>Forretningsmodell-kartlegging</option>
                      <option>Regnskap / Økonomibistand</option>
                      <option>MVP / App-prototyping</option>
                      <option>Annet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      Prosjektbeskrivelse *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="sf-input resize-none"
                      placeholder="Beskriv kort hva du ønsker hjelp til, og hva resultatet bør være..."
                    />
                  </div>
                  <div className="glass rounded-xl p-4 border border-yellow-500/20 bg-yellow-500/5">
                    <p className="text-xs text-yellow-400 leading-relaxed">
                      ⚡ <strong>Husk:</strong> Tjenesten er gratis. Vi ber om at du deltar aktivt som kunde (ukentlige møter og tilbakemeldinger). Ingen kontraktsmessig leveranseplikt, men vi strekker oss langt.
                    </p>
                  </div>
                  <button type="submit" className="btn-primary flex items-center justify-center gap-2 mt-2">
                    Send forespørsel
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function SuccessMessage({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="gradient-border p-12 flex flex-col items-center text-center gap-4"
      style={{ background: "rgba(16, 185, 129, 0.04)" }}
    >
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
        <CheckCircle className="text-emerald-400" size={32} />
      </div>
      <h3 className="text-xl font-bold text-white">Takk!</h3>
      <p className="text-slate-400 text-sm">{message}</p>
    </motion.div>
  );
}
