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
          className="text-center mb-24 md:mb-28"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Om konseptet
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Studenten er{" "}
            <span className="gradient-text">produktet</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-lg leading-relaxed">
            Syntax & Flow skaper verdi for tre parter samtidig —
            på en måte ingen tradisjonell praksisordning klarer.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="gradient-border glass-hover p-8 flex flex-col gap-6 cursor-default"
                style={{
                  background: card.gradBg,
                  borderColor: card.borderColor,
                }}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ background: card.iconGrad }}
                >
                  <Icon size={22} color="white" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{card.subtitle}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{card.description}</p>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mt-auto list-none p-0">
                  {card.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-slate-200">
                      <span 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                        style={{ background: card.dotColor }} 
                      />
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
