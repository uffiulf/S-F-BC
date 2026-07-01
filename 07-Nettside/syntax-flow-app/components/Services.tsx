"use client";

import { motion } from "framer-motion";
import { Code2, Palette, LineChart, Globe, Pen, BarChart3, ShoppingCart, Cpu, PieChart } from "lucide-react";

const categories = [
  {
    color: "blue",
    icon: Code2,
    iconGrad: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    iconColor: "#60A5FA",
    title: "IT & Utvikling",
    services: [
      { icon: Globe, name: "Webutvikling", desc: "Moderne nettsider i React, Next.js eller WordPress" },
      { icon: Cpu, name: "MVP-utvikling", desc: "Prototyping og utvikling av enkle applikasjoner" },
      { icon: ShoppingCart, name: "Digitalisering", desc: "CRM-oppsett, sky-integrasjoner og automatisering" },
    ],
  },
  {
    color: "violet",
    icon: Palette,
    iconGrad: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    iconColor: "#A78BFA",
    title: "Design & UX",
    services: [
      { icon: Pen, name: "UI/UX-Design", desc: "Wireframes og klikkbare prototyper i Figma" },
      { icon: Palette, name: "Visuell identitet", desc: "Logo, fargepalett og grafisk profilering" },
      { icon: Globe, name: "Brukervennlighetstesting", desc: "Analyse av eksisterende digitale flater" },
    ],
  },
  {
    color: "emerald",
    icon: LineChart,
    iconGrad: "linear-gradient(135deg, #10B981, #047857)",
    iconColor: "#34D399",
    title: "Økonomi & Forretning",
    services: [
      { icon: BarChart3, name: "Forretningsmodell-kartlegging", desc: "Lokalisere flaskehalser og ineffektive prosesser" },
      { icon: PieChart, name: "Regnskap & bokføring", desc: "Enkel regnskapsbistand for oppstartsbedrifter" },
      { icon: LineChart, name: "Markedsanalyse", desc: "Målgrupper, konkurrenter og markedsmuligheter" },
    ],
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="section-padding relative">
      <div className="sf-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-28"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
            Tjenestekatalog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hva vi leverer
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-lg leading-relaxed">
            Tverrfaglige team som dekker hele spekteret — fra idé til ferdig produkt.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass glass-hover p-8 flex flex-col gap-8 rounded-2xl"
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: cat.iconGrad }}
                  >
                    <CatIcon size={18} color="white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                {/* Services list */}
                <div className="flex flex-col gap-6">
                  {cat.services.map((service) => {
                    const SIcon = service.icon;
                    return (
                      <div key={service.name} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0" style={{ color: cat.iconColor }}>
                          <SIcon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white mb-0.5">{service.name}</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leveransegaranti note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass mt-8 p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between rounded-2xl"
        >
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1 text-base">Ingen formell leveransegaranti</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tjenestene leveres gratis på en best-effort-modell som et ledd i studentenes utdanning. Vi stiller høye krav til kvaliteten, men kunden har ingen juridiske krav eller garantier.
            </p>
          </div>
          <a href="#soknader" className="btn-primary text-sm whitespace-nowrap cursor-pointer">
            Start et prosjekt
          </a>
        </motion.div>
      </div>
    </section>
  );
}
