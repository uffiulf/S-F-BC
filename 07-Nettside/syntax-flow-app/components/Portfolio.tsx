"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Palette, LineChart } from "lucide-react";

const projects = [
  {
    title: "Nettside for Østfold Gründer AS",
    category: "IT + Design",
    tags: ["Next.js", "Figma", "Vercel"],
    description:
      "Moderne landingsside og produktportefølje for en nystartet gründerbedrift i Fredrikstad. Levert på 6 uker.",
    icon: Code2,
    accent: "#3B82F6",
    iconGrad: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    tagStyle: { background: "rgba(59,130,246,0.1)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.2)" },
    statusStyle: { background: "rgba(59,130,246,0.1)", color: "#60A5FA" },
  },
  {
    title: "Merkevarebygging — Kaféen Halden",
    category: "Design + Økonomi",
    tags: ["Illustrator", "Figma", "Markedsanalyse"],
    description:
      "Ny visuell identitet inkludert logo, meny-design og en markedsanalyse for å lokalisere nye kundesegmenter.",
    icon: Palette,
    accent: "#8B5CF6",
    iconGrad: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    tagStyle: { background: "rgba(139,92,246,0.1)", color: "#A78BFA", border: "1px solid rgba(139,92,246,0.2)" },
    statusStyle: { background: "rgba(139,92,246,0.1)", color: "#A78BFA" },
  },
  {
    title: "Forretningsmodell-kartlegging",
    category: "Økonomi",
    tags: ["Business Model Canvas", "Lean Canvas"],
    description:
      "Grundig kartlegging og effektiviseringsplan for en lokal håndverksbedrift — med konkrete anbefalinger.",
    icon: LineChart,
    accent: "#10B981",
    iconGrad: "linear-gradient(135deg, #10B981, #047857)",
    tagStyle: { background: "rgba(16,185,129,0.1)", color: "#34D399", border: "1px solid rgba(16,185,129,0.2)" },
    statusStyle: { background: "rgba(16,185,129,0.1)", color: "#34D399" },
  },
];

export default function Portfolio() {
  return (
    <section id="portefolje" className="section-padding relative">
      <div className="sf-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            display: "inline-block", padding: "0.375rem 1rem", borderRadius: "9999px",
            fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
            background: "rgba(59,130,246,0.1)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.2)",
            marginBottom: "1rem",
          }}>
            Portefølje
          </span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
            Hva vi har levert
          </h2>
          <p style={{ maxWidth: "36rem", margin: "0 auto", color: "var(--color-text-secondary)", fontSize: "1.125rem" }}>
            Eksempelprosjekter som illustrerer hva tverrfaglige team hos Syntax & Flow kan levere.
          </p>
          <p style={{ fontSize: "0.75rem", color: "#475569", marginTop: "0.75rem" }}>
            * Mockup-eksempler. Faktiske caser publiseres etter pilotprosjekt.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="sf-grid-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass glass-hover"
                style={{ borderRadius: "1rem", overflow: "hidden", cursor: "pointer" }}
              >
                {/* Card top */}
                <div style={{
                  height: "10rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                  background: "linear-gradient(135deg, rgba(10,22,40,0.8), rgba(5,10,20,0.95))",
                }}>
                  <div style={{
                    position: "absolute", inset: 0, opacity: 0.2,
                    background: `radial-gradient(circle at 50% 50%, ${project.accent}80 0%, transparent 70%)`,
                  }} />
                  <div style={{
                    width: "4rem", height: "4rem", borderRadius: "1rem",
                    background: project.iconGrad, display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                  }}>
                    <Icon size={28} color="white" />
                  </div>
                  <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}>
                    <span style={{ ...project.statusStyle, padding: "0.125rem 0.5rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600 }}>
                      Levert
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "0.75rem" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{ ...project.tagStyle, padding: "0.125rem 0.5rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "0.5rem", lineHeight: 1.4 }}>{project.title}</h3>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>{project.description}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.75rem", color: "#475569" }}>{project.category}</span>
                    <ExternalLink size={14} color="#475569" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
