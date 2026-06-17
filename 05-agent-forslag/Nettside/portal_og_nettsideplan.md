# Portal- og Nettsideplan - Syntax & Flow
> Strategisk plan og funksjonsspesifikasjon for Syntax & Flows digitale portal og dashbord.

For å sikre effektiv prosjektledelse, transparent kommunikasjon og god markedsføring, trenger Syntax & Flow en sentral nettportal. Portalen skal ha ulike visningsnivåer (roller) tilpasset lederteamet, studentene, bedriftene og allmennheten.

---

## 👥 1. Brukerroller & Tilgangsnivåer

```
                            [ SYNTAX & FLOW PORTAL ]
                                       │
        ┌──────────────────┬───────────┴───────────┬──────────────────┐
        ▼                  ▼                       ▼                  ▼
 [ Offentlig (Besøk) ] [ Student ]           [ Bedrift ]         [ Lederteam ]
 Portefølje & søknad.  Tidsregistrering.     Prosjektstatus.     Fullt dashbord.
```

### A. Lederteamet (Admin-dashboard)
*   **Mål:** Få full oversikt over driften av Syntax & Flow på ett sted.
*   **Funksjoner:**
    *   *Prosjektoversikt:* Status på alle aktive tverrfaglige team og fremdrift (Kanban-tavle).
    *   *Kandidat-pipeline:* Oversikt over søknader fra studenter (Spor 1 & 2) og NAV-kandidater (Spor 3). Status på intervjuer og tildeling av prosjekter.
    *   *Interessent-radar:* Status på relasjoner til HiØ-mentorer, dekaner og næringsforeninger (støtte/motstands-indikatorer).
    *   *Risikomonitor:* Rask tilgang til risikomatrisen, med varsler dersom f.eks. et prosjekt mangler design-ressurser eller opplever frafall.

### B. Studentene (Prosjektportal)
*   **Mål:** Utføre det daglige arbeidet og dokumentere innsatsen.
*   **Funksjoner:**
    *   *Tidsregistrering:* Loggføring av timer (kritisk som dokumentasjon for Lånekassen og NAV-tiltak).
    *   *Fildeling og dokumenter:* Tilgang til prosjekt-wikier, kontraktsmaler og retningslinjer.
    *   *Oppgavehåndtering:* Se tildelte oppgaver innenfor eget team (IT, Design, Økonomi).

### C. Bedriftene (Kundeportal)
*   **Mål:** Følge prosjektets fremdrift og gi tilbakemeldinger uten administrative omveier.
*   **Funksjoner:**
    *   *Forespørselsskjema:* Sende inn prosjektbeskrivelse og bekrefte tidsmessige forpliktelser (møtedeltakelse).
    *   *Statuslinje:* Se hvilken fase prosjektet befinner seg i (Avklaring -> Design -> Utvikling -> QA -> Overlevering).
    *   *Godkjenning:* Mulighet for å gi digitale tilbakemeldinger og godkjenne prototyper direkte i portalen.

### D. Offentligheten (Den åpne landingssiden)
*   **Mål:** Tiltrekke nye studenter og bedrifter gjennom gratis markedsføring.
*   **Funksjoner:**
    *   *Portefølje:* Flott presentasjon av tidligere leverte nettsider, MVP-er og forretningsanalyser (med lenker til kildekode og Figma-filer).
    *   *Søknadsskjema for studenter:* Integrert med HiØ-systemer.
    *   *Søknadsskjema for NAV-kandidater:* Eget skjema for individuell innsending.

---

## 💻 2. Teknisk Arkitektur (Foreslått)

Vi velger en moderne, robust og lett hosting-vennlig teknologistakk som gjør at IT-studentene i prosjektet enkelt kan drifte og videreutvikle portalen selv:

*   **Frontend-rammeverk:** **Next.js (React)** med TailwindCSS for et premium, moderne og responsivt utseende (glassmorfisme, harmonisk fargepalett og animasjoner).
*   **Backend & Database:** **Supabase** (PostgreSQL-database). Gir oss:
    *   Innebygd e-post- og passordautentisering med rollebasert tilgangskontroll (RLS).
    *   Sanntids-oppdatering av databaser (f.eks. for Kanban-tavler).
    *   Enkel fil-hosting for dokumenter, Figma-eksport og designfiler.
*   **Hosting:** **Vercel** eller **Netlify** for rask og stabil global distribusjon.

---

## 📅 3. Implementeringsplan for Nettsiden
1.  **Fase 1: MVP Landing Page:** Utarbeide den offentlige landingssiden med portefølje-mockups og enkle søknadsskjemaer.
2.  **Fase 2: Admin- & Kunde-dashbord:** Bygge Supabase-integrasjon for prosjekter og kandidat-pipeliner.
3.  **Fase 3: Tidsregistrering & Sikkerhet:** Fullføre student-autentisering og tidslogger.
4.  **Fase 4: Pilot-lansering:** Teste systemet på det første pilot-prosjektet.
