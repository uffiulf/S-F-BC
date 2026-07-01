"use client";

import { Zap, GitBranch, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="sf-container py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="gradient-text-blue">Syntax</span>
                <span className="text-slate-300"> & </span>
                <span className="text-white">Flow</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Selvstendig prosjektorgan tilknyttet Høgskolen i Østfold.
              Vi bygger morgendagens arbeidstakere — gjennom reelle oppdrag i dag.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Hurtiglenker</h4>
            <ul className="flex flex-col gap-2">
              {[
                ["Om oss", "#om-oss"],
                ["Tjenester", "#tjenester"],
                ["Slik fungerer det", "#prosess"],
                ["For bedrifter", "#bedrifter"],
                ["Portefølje", "#portefolje"],
                ["Søk / Kontakt", "#soknader"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontakt</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:hei@syntaxflow.no" className="hover:text-white transition-colors">
                  hei@syntaxflow.no
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={14} className="text-blue-400 flex-shrink-0" />
                <span>Halden & Fredrikstad, Østfold</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <GitBranch size={14} className="text-blue-400 flex-shrink-0" />
                <a href="#" className="hover:text-white transition-colors">
                  github.com/syntaxflow
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-xs text-slate-600">
                Tilknyttet{" "}
                <a href="https://www.hiof.no" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                  Høgskolen i Østfold
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Syntax & Flow. Alle rettigheter reservert.
          </p>
          <p className="text-slate-700 text-xs">
            Bygget av Syntax & Flow · Tverrfaglig studentteam
          </p>
        </div>
      </div>
    </footer>
  );
}
