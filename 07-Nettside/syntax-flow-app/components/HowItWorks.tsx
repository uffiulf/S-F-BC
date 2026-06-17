"use client";

import { motion } from "framer-motion";
import { FileSignature, Lightbulb, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSignature,
    title: "Avklaring & Avtalesignering",
    description:
      "Vi definerer prosjektets omfang og kunden signerer en Win-Win-avtale. Kunden forplikter seg til å delta i møter og gi tilbakemeldinger — uten å betale en krone.",
    tag: "Juridisk trygt",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Innsikt & Design",
    description:
      "Økonomistudentene kartlegger bedriftens behov og flaskehalser. Designerne lager brukerreiser og klikkbare prototyper i Figma basert på funnene.",
    tag: "Økonomi + Design",
  },
  {
    number: "03",
    icon: Code2,
    title: "Utvikling & Implementering",
    description:
      "IT-studentene koder løsningen basert på godkjent design. Kan være en nettside, en MVP-app eller en automatisert arbeidsflyt.",
    tag: "IT + Dev",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Kvalitetssikring (QA)",
    description:
      "En faglig mentor fra HiØ gjennomgår leveransen. Ingen kode eller design overleveres kunden før det er godkjent på et faglig nivå.",
    tag: "Mentorstøtte",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Overlevering & Porteføljepublisering",
    description:
      "Kunden får løsningen gratis. Prosjektet dokumenteres og publiseres i Syntax & Flow-portalen som en case-studie til inspirasjon for fremtidige kunder.",
    tag: "Synlig resultat",
  },
];

export default function HowItWorks() {
  return (
    <section id="prosess" className="section-padding relative">
      <div className="sf-container" style={{ maxWidth: "56rem" }}>
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
            background: "rgba(16,185,129,0.1)", color: "#34D399", border: "1px solid rgba(16,185,129,0.2)",
            marginBottom: "1rem",
          }}>
            Prosjektmodellen
          </span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
            Slik fungerer det
          </h2>
          <p style={{ maxWidth: "32rem", margin: "0 auto", color: "#94A3B8", fontSize: "1.125rem" }}>
            Hvert prosjekt følger en strukturert 5-fase modell designet for maksimal læring og forutsigbarhet.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "1.5rem",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3) 10%, rgba(59,130,246,0.3) 90%, transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", position: "relative" }}
                >
                  {/* Step indicator */}
                  <div style={{
                    width: "3rem", height: "3rem", borderRadius: "0.75rem",
                    background: "#050A14", border: "1px solid rgba(59,130,246,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, zIndex: 10, color: "#60A5FA",
                  }}>
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="sf-step-content" style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#334155" }}>{step.number}</span>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white" }}>{step.title}</h3>
                      <span style={{
                        marginLeft: "auto", padding: "0.25rem 0.625rem", borderRadius: "9999px",
                        fontSize: "0.75rem", fontWeight: 600,
                        background: "rgba(59,130,246,0.1)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.2)",
                      }}>
                        {step.tag}
                      </span>
                    </div>
                    <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
