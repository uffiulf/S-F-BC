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
      <div className="sf-container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-28"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
            Prosjektmodellen
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Slik fungerer det
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-lg leading-relaxed">
            Hvert prosjekt følger en strukturert 5-fase modell designet for maksimal læring og forutsigbarhet.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 items-start relative"
                >
                  {/* Step indicator */}
                  <div className="w-12 h-12 rounded-xl bg-bg-primary border border-blue-500/20 flex items-center justify-center flex-shrink-0 z-10 text-blue-400 shadow-md">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="sf-step-content flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-2xl font-black text-slate-700">{step.number}</span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <span className="md:ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {step.tag}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
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
