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
          className="text-center mb-24 md:mb-28"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Portefølje
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hva vi har levert
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-lg leading-relaxed">
            Eksempelprosjekter som illustrerer hva tverrfaglige team hos Syntax & Flow kan levere.
          </p>
          <p className="text-xs text-slate-500 mt-3">
            * Mockup-eksempler. Faktiske caser publiseres etter pilotprosjekt.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-blue-500 outline-none"
              >
                {/* Card top */}
                <div 
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.8), rgba(5,10,20,0.95))" }}
                >
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}80 0%, transparent 70%)` }}
                  />
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: project.iconGrad }}
                  >
                    <Icon size={28} color="white" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span 
                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: project.statusStyle.background, color: project.statusStyle.color }}
                    >
                      Levert
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                        style={{ background: project.tagStyle.background, color: project.tagStyle.color, borderColor: project.tagStyle.border }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{project.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-slate-500">{project.category}</span>
                    <ExternalLink size={14} className="text-slate-500" />
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
