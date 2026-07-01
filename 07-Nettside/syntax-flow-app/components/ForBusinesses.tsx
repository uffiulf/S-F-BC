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
             <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
              For næringslivet
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ferdig levert. <br />
              <span className="gradient-text">Helt gratis.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-12 md:mb-16">
              Syntax & Flow tilbyr gratis IT-, design- og økonomibistand til lokale bedrifter i Østfold.
              Bedriften betaler ingen krone — men investerer sin tid som en engasjert kunde.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={18} color="#34D399" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 text-sm">{benefit.title}</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <a href="#soknader" className="btn-primary inline-flex items-center gap-2 cursor-pointer">
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
            <div className="gradient-border p-8 bg-green-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-500 font-mono">win-win-avtale.md</span>
              </div>
              <div className="flex flex-col gap-6 font-mono text-xs md:text-sm">
                <div>
                  <p className="text-slate-500 font-semibold"># Betingelser</p>
                  <p className="text-slate-300 mt-1">Kunde betaler: <span className="text-green-400 font-bold">0 kr</span></p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-slate-500 font-semibold"># Kundens forpliktelser</p>
                  <div className="mt-2 flex flex-col gap-1">
                    {["Ukentlige statusmøter ✓", "Raske tilbakemeldinger ✓", "Tilgjengelig for spørsmål ✓"].map(t => (
                      <p key={t} className="text-green-300 text-xs">→ {t}</p>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-slate-500 font-semibold"># Syntax & Flow leverer</p>
                  <div className="mt-2 flex flex-col gap-1">
                    {["Tverrfaglig team ✓", "Faglig mentorstøtte ✓", "Porteføljepublisering ✓"].map(t => (
                      <p key={t} className="text-blue-300 text-xs">→ {t}</p>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-slate-500 font-semibold"># Leveransegaranti</p>
                  <p className="text-yellow-300 text-xs mt-1">Standard: Ingen formell leveransegaranti (best-effort)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
