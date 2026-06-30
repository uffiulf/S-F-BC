"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Clock, Handshake, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Ingen betaling. Ingen risiko.",
    description:
      "Tjenestene er gratis. Det eneste vi ber om er at du stiller som en aktiv kunde — ukentlige møter og raske tilbakemeldinger.",
  },
  {
    icon: Clock,
    title: "Test-run av kandidatene.",
    description:
      "Se studentene i aksjon over tid på ditt eget prosjekt. Du vet nøyaktig hva du får lenge før du vurderer fast ansettelse.",
  },
  {
    icon: Handshake,
    title: "Win-Win-avtalen.",
    description:
      "Kontrakten spesifiserer at vi ikke har en juridisk leveranseplikt. Hvis vi leverer, får du det gratis. Alltid.",
  },
  {
    icon: TrendingUp,
    title: "Samfunnsansvar som markedsføring.",
    description:
      "Din deltakelse synliggjøres på Syntax & Flow-portalen. Du profileres som en bedrift som investerer i unge talenter.",
  },
];

export default function ForBusinesses() {
  return (
    <section id="bedrifter" className="section-padding relative">
      <div className="sf-container">
        <div className="sf-grid-2">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              display: "inline-block", padding: "0.375rem 1rem", borderRadius: "9999px",
              fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              background: "rgba(16,185,129,0.1)", color: "#34D399", border: "1px solid rgba(16,185,129,0.2)",
              marginBottom: "1.5rem",
            }}>
              For næringslivet
            </span>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "white", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Ferdig levert. <br />
              <span className="gradient-text">Helt gratis.</span>
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Syntax & Flow tilbyr gratis IT-, design- og økonomibistand til lokale bedrifter i Østfold.
              Bedriften betaler ingen krone — men investerer sin tid som en engasjert kunde.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                  >
                    <div style={{
                      width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem",
                      background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={18} color="#34D399" />
                    </div>
                    <div>
                      <h4 style={{ color: "white", fontWeight: 600, marginBottom: "0.25rem" }}>{benefit.title}</h4>
                      <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <a href="#soknader" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Send inn prosjektforespørsel
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right side — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="gradient-border" style={{ padding: "2rem", background: "rgba(16,185,129,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "50%", background: "#EF4444" }} />
                <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "50%", background: "#EAB308" }} />
                <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ marginLeft: "0.5rem", fontSize: "0.75rem", color: "#475569", fontFamily: "monospace" }}>win-win-avtale.md</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontFamily: "monospace", fontSize: "0.875rem" }}>
                <div>
                  <p style={{ color: "#64748B" }}># Betingelser</p>
                  <p style={{ color: "#CBD5E1", marginTop: "0.25rem" }}>Kunde betaler: <span style={{ color: "#34D399", fontWeight: 700 }}>0 kr</span></p>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
                  <p style={{ color: "#64748B" }}># Kundens forpliktelser</p>
                  <div style={{ marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {["Ukentlige statusmøter ✓", "Raske tilbakemeldinger ✓", "Tilgjengelig for spørsmål ✓"].map(t => (
                      <p key={t} style={{ color: "#6EE7B7", fontSize: "0.75rem" }}>→ {t}</p>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
                  <p style={{ color: "#64748B" }}># Syntax & Flow leverer</p>
                  <div style={{ marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {["Tverrfaglig team ✓", "Faglig mentorstøtte ✓", "Porteføljepublisering ✓"].map(t => (
                      <p key={t} style={{ color: "#93C5FD", fontSize: "0.75rem" }}>→ {t}</p>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
                  <p style={{ color: "#64748B" }}># Leveransegaranti</p>
                  <p style={{ color: "#FDE047", fontSize: "0.75rem", marginTop: "0.25rem" }}>Standard: Ingen formell leveransegaranti (best-effort)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
