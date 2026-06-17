"use client";

import { motion } from "framer-motion";
import { Code2, Palette, LineChart, Globe, Pen, BarChart3, ShoppingCart, Cpu, PieChart } from "lucide-react";

const sectionHeader = {
  textAlign: "center" as const,
  marginBottom: "4rem",
};

const badge = (color: string) => ({
  display: "inline-block",
  padding: "0.375rem 1rem",
  borderRadius: "9999px",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  marginBottom: "1rem",
  ...{
    blue: { background: "rgba(59,130,246,0.1)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.2)" },
    violet: { background: "rgba(139,92,246,0.1)", color: "#A78BFA", border: "1px solid rgba(139,92,246,0.2)" },
    emerald: { background: "rgba(16,185,129,0.1)", color: "#34D399", border: "1px solid rgba(16,185,129,0.2)" },
  }[color],
});

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
          style={sectionHeader}
        >
          <span style={badge("violet")}>Tjenestekatalog</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
            Hva vi leverer
          </h2>
          <p style={{ maxWidth: "36rem", margin: "0 auto", color: "#94A3B8", fontSize: "1.125rem" }}>
            Tverrfaglige team som dekker hele spekteret — fra idé til ferdig produkt.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="sf-grid-3">
          {categories.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass glass-hover"
                style={{ borderRadius: "1rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem",
                    background: cat.iconGrad, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <CatIcon size={18} color="white" />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white" }}>{cat.title}</h3>
                </div>

                {/* Services list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {cat.services.map((service) => {
                    const SIcon = service.icon;
                    return (
                      <div key={service.name} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <div style={{ marginTop: "2px", color: cat.iconColor, flexShrink: 0 }}>
                          <SIcon size={16} />
                        </div>
                        <div>
                          <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>{service.name}</p>
                          <p style={{ fontSize: "0.75rem", color: "#64748B", lineHeight: 1.5 }}>{service.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SLA note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass"
          style={{
            marginTop: "2rem", borderRadius: "1rem", padding: "1.5rem",
            display: "flex", flexDirection: "column", gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4 style={{ color: "white", fontWeight: 600, marginBottom: "0.25rem" }}>Ingen SLA som standard — men vi er ambisiøse.</h4>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem" }}>
              Tjenestene leveres gratis og uten leveransegaranti. Dersom vi har erfarne team tilgjengelig, tilbyr vi
              en <strong style={{ color: "white" }}>Betinget SLA</strong> med konkrete frister og krav.
            </p>
          </div>
          <a href="#soknader" className="btn-primary" style={{ fontSize: "0.875rem", whiteSpace: "nowrap" }}>
            Start et prosjekt
          </a>
        </motion.div>
      </div>
    </section>
  );
}
