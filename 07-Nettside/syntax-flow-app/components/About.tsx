"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Briefcase } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    color: "blue",
    title: "For studentene",
    subtitle: "Fra teorikunnskap til reell erfaring",
    description:
      "Du er produktet vi skaper. Gjennom faget Bedriftspraksis i løpet av studietiden hos Syntax & Flow bygger du en portefølje og et nettverk — mens du beholder din Lånekassen-støtte.",
    highlights: ["Finansiert av Lånekassen", "Tverrfaglige team", "Reelle kundeoppdrag", "Faglig mentorstøtte fra HiØ"],
    gradBg: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(255,255,255,0.02))",
    borderColor: "rgba(59,130,246,0.25)",
    iconGrad: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    dotColor: "#60A5FA",
    badgeStyle: { background: "rgba(59,130,246,0.1)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.2)" },
  },
  {
    icon: Building2,
    color: "purple",
    title: "For Høgskolen",
    subtitle: "Kandidater som er etterspurt",
    description:
      "HiØ-kandidatene som deltar i Syntax & Flow er mer attraktive på arbeidsmarkedet. Flere fullfører graden for å kvalifisere seg — noe som gir HiØ økt kandidatproduksjon og finansiering.",
    highlights: ["Økt gjennomstrømming", "Gratis markedsføring via NAV", "Sterkere næringslivskobling", "Attraktivt studietilbud"],
    gradBg: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(255,255,255,0.02))",
    borderColor: "rgba(139,92,246,0.25)",
    iconGrad: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    dotColor: "#A78BFA",
    badgeStyle: { background: "rgba(139,92,246,0.1)", color: "#A78BFA", border: "1px solid rgba(139,92,246,0.2)" },
  },
  {
    icon: Briefcase,
    color: "green",
    title: "For næringslivet",
    subtitle: "Test-run uten risiko",
    description:
      "Studenten er produktet. Du får jobbe tett med kandidaten på et reelt prosjekt over tid — og ser nøyaktig hva du får — lenge før du vurderer en fast ansettelse.",
    highlights: ["Gratis tjenester", "Ingen formell leveransegaranti", "Risikofri rekruttering", "Ferdigstilte leveranser i portalen"],
    gradBg: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(255,255,255,0.02))",
    borderColor: "rgba(16,185,129,0.25)",
    iconGrad: "linear-gradient(135deg, #10B981, #047857)",
    dotColor: "#34D399",
    badgeStyle: { background: "rgba(16,185,129,0.1)", color: "#34D399", border: "1px solid rgba(16,185,129,0.2)" },
  },
];

export default function About() {
  return (
    <section id="om-oss" className="section-padding relative">
      <div className="sf-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            display: "inline-block",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "rgba(59,130,246,0.1)",
            color: "#60A5FA",
            border: "1px solid rgba(59,130,246,0.2)",
            marginBottom: "1rem",
          }}>
            Om konseptet
          </span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "white", marginBottom: "1rem", lineHeight: 1.2 }}>
            Studenten er{" "}
            <span className="gradient-text">produktet</span>
          </h2>
          <p style={{ maxWidth: "36rem", margin: "0 auto", color: "var(--color-text-secondary)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            Syntax & Flow skaper verdi for tre parter samtidig —
            på en måte ingen tradisjonell praksisordning klarer.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="sf-grid-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="gradient-border glass-hover"
                style={{
                  background: card.gradBg,
                  borderColor: card.borderColor,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  cursor: "default",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.75rem",
                  background: card.iconGrad,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}>
                  <Icon size={22} color="white" />
                </div>

                {/* Text */}
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "white", marginBottom: "0.25rem" }}>{card.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "0.75rem" }}>{card.subtitle}</p>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>{card.description}</p>
                </div>

                {/* Highlights */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "auto", listStyle: "none", padding: 0 }}>
                  {card.highlights.map((h) => (
                    <li key={h} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#CBD5E1" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: card.dotColor, flexShrink: 0 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
