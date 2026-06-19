# OPPDATERINGER — Instrukser for Gemini
> Denne filen brukes av DEEP og andre agenter for å gi Gemini instrukser om hva som skal oppdateres på infosiden.
> Gemini leser denne filen og oppdaterer `07-Nettside/info-side-app/` tilsvarende.

---

## Slik skriver du en instruks

```
## [DATO] — [KORT TITTEL]
Prioritet: Høy / Middels / Lav
Kilde: [filbane til relevant dokument]
Hva: Konkret hva som skal oppdateres
Hvor: Hvilken seksjon på infosiden
```

---

## Instrukser

### 19.06.2026 — Legg til Scope-side med ITD35014 som utgangspunkt
Prioritet: Høy
Kilde: `06-Business-case/Scope/scope_minst_motstand.md`
Hva: Opprett ny side "Scope" i wikiData.js under kategorien "Dokumenter" med ikon "Crosshair". Innhold: kopier innholdet fra scope_minst_motstand.md — særlig tabellen over ITD35014, kravene til kunder, hva dere IKKE gjør, og suksesskriterier for piloten.
Hvor: Ny side i navigasjonen under "Dokumenter & Referanser"

### 19.06.2026 — Legg til Gjennomføringsplan (4 faser)
Prioritet: Høy
Kilde: `05-agent-forslag/Forslag/gjennomforingsplan_4_faser.md`
Hva: Opprett ny side "Gjennomføringsplan" i wikiData.js under "GTM & Utførelse" med ikon "Milestone". Innhold: Fase 1–4 med tabeller for hver fase (Hva, Hvorfor, Hvem, Kostnad, Avhengigheter). Inkluder de kritiske forutsetningene og "Hva gjør dere hvis..."-tabellen på slutten.
Hvor: Ny side i navigasjonen under "GTM & Utførelse"

### 19.06.2026 — Legg til Tilpasningsforslag (9 områder med begrunnelser)
Prioritet: Høy
Kilde: `05-agent-forslag/Forslag/tilpasningsforslag_modell.md`
Hva: Oppdater eksisterende side "Forslag på utførelse" eller opprett ny. Innholdet må inneholde de 9 tilpasningsområdene (org.form, Lånekassen, statsstøtte, arbeidstaker, kunder, konkurranse, NAV, ansvar, personvern). Hvert område skal ha: konkret tilpasning + hvorfor det vil fungere + mulig motstand. Inkluder prioritert tiltaksliste på slutten.
Hvor: Seksjonen "Tilpasningsforslag" — kan erstatte eller utvide eksisterende proposalfunksjonalitet

### 19.06.2026 — Oppdater Spor 2 fra 10 stp til 15 stp i Organisasjon & Drift
Prioritet: Høy
Kilde: `06-Business-case/Scope/scope_minst_motstand.md`
Hva: I tabellen over deltakerordninger på siden "Organisasjon & Drift", endre Spor 2 fra "10 studiepoeng per semester" til "15 studiepoeng per semester (minimum for Lånekassen)". Legg til en fotnote: "ITD35014 gir i dag 10 stp. Syntax & Flow jobber for å øke dette til 15 stp."
Hvor: Eksisterende side "Organisasjon & Drift" — tabellen "De Tre Deltakerordningene"

### 19.06.2026 — Legg til portalens verdi som referansebase
Prioritet: Middels
Kilde: `05-agent-forslag/Forslag/mal-og-utkast/portal_referansebase_verdi_og_jus.md`
Hva: Opprett ny side "Portal som referansebase" under "Dokumenter" med ikon "UserCheck". Innhold: Del 1 (Verdien for bedrifter — problemet med tradisjonelle ansettelser vs Syntax & Flow-modellen) og juridiske anbefalinger for portalen (samtykke, rubric, tilgangskontroll).
Hvor: Ny side under "Dokumenter & Referanser"

### 19.06.2026 — Legg til ITD35014 som utgangspunkt (ikke nytt emne)
Prioritet: Høy
Kilde: `06-Business-case/Scope/scope_minst_motstand.md`
Hva: På Dashboard-siden og Mål & Visjon-siden: oppdater teksten slik at det fremgår at Syntax & Flow bygger på det EKSISTERENDE emnet ITD35014 Bedriftspraksis (10 stp) ved HiØ, Institutt for IT og kommunikasjon (ITK). Syntax & Flows rolle er å skaffe praksisplassene og organisere teamene — noe studentene i dag må gjøre selv. Legg til en boks: "Utgangspunkt: ITD35014 — 10 stp — emneansvarlig Stig Henning Johansen"
Hvor: Dashboard-siden og/eller Mål & Visjon-siden

### 19.06.2026 — Oppdater Forretningsmodell & VPC med utdypende verdiskapningstekst
Prioritet: Høy
Kilde: `05-agent-forslag/Forslag/mal-og-utkast/verdiskapning_vpc_oppsummering.md`
Hva: På siden "Forretningsmodell & VPC", over eller ved siden av hver VPC-visning (student/HiØ/bedrifter), legg til en utdypende tekstboks som forklarer verdien for den aktuelle målgruppen. Teksten skal være fyldig (ikke stikkord) og forklare HVA verdien er, HVORFOR den er viktig, og HVORDAN Syntax & Flow leverer den. For studenter: fokus på erfaringsparadokset og portefølje. For HiØ: fokus på kandidatproduksjon, markedsføring og administrativ avlastning. For bedrifter: fokus på rekrutteringskanal og risikofri testperiode.
Hvor: Eksisterende side "Forretningsmodell & VPC" — integreres i VPC-visningen

### 19.06.2026 — Oppdater scope-siden med ny evighetsprosjekt-modell og portalen som referansebase
Prioritet: Høy
Kilde: `06-Business-case/Scope/scope_tabell.md` og `06-Business-case/Scope/scope_minst_motstand.md`
Hva: Oppdater eksisterende scope-side eller opprett ny på infosiden. Innholdet må gjenspeile den oppdaterte modellen: (1) eksterne oppdrag + interne evighetsprosjekter som to spor, (2) evighetsprosjekter som går over flere semestre med forelesere som kvalitetssikrere, (3) portalen som verifisert referansebase for rekruttering. In/out-scope-tabellene fra scope_tabell.md skal være hovedinnholdet.
Hvor: Eksisterende eller ny side under kategorien "GTM & Utførelse" eller "Dokumenter"

### 19.06.2026 — Legg til forklaring av VP sin rolle i business casen på Dashboard
Prioritet: Høy
Kilde: Ingen spesifikk fil — nytt innhold
Hva: Nederst på Dashboard-siden, etter eksisterende seksjoner, legg til en forklarende boks med tittel "Hvordan henger business casen sammen?" som viser at Value Proposition (VP) er en integrert del av business casen, ikke noe separat. Vis rekkefølgen: Forretningsidé → Value Proposition → Forretningsmodell → Marked og konkurranse → Scope → Risiko og juss. Forklar kort at VPC-ene som finnes under "Forretningsmodell & VPC" er en visualisering av VP-en for hver målgruppe (studenter, HiØ, næringsliv). Alt dette samlet utgjør business casen.
Hvor: Nederst på Dashboard-siden

### 19.06.2026 — Oppdater ordlisten på infosiden med nye begreper
Prioritet: Høy
Kilde: `01-administrasjon/ordliste.md`
Hva: Oppdater den eksisterende ordliste-siden på infosiden. Den er allerede opprettet, men må oppdateres med de nye begrepene som er lagt til: Executive Summary, Justification, Persona, Risk Management, Stakeholder, Stakeholder Management, Storyboard, User Journey, IP (Investor Proposal), TAM, Unfair Advantage. Fjern Lånekassen fra ordlisten. Sørg for at alle begreper er sortert alfabetisk under riktig bokstavseksjon.
Hvor: Eksisterende side "Ordliste" under "Dokumenter & Referanser"

### 19.06.2026 — Legg til ordliste på infosiden
Prioritet: Middels
Kilde: `01-administrasjon/ordliste.md`
Hva: Opprett ny side "Ordliste" under "Dokumenter & Referanser" med ikon "BookOpen". Innholdet er en alfabetisk oppslagsoversikt over fagbegreper og forkortelser som brukes i prosjektet (de minimis, GTM, VPC, ROI, SLA, ESA, m.fl.). Hvert begrep skal ha en kort, forståelig forklaring.
Hvor: Ny side i navigasjonen under "Dokumenter & Referanser"

### 19.06.2026 — Oppdater suksesskriteriene med utdypede forklaringer
Prioritet: Høy
Kilde: `06-Business-case/Scope/scope_minst_motstand.md` (seksjon "6. Suksesskriterier for piloten") og `06-Business-case/Scope/scope_tabell.md`
Hva: På scope-siden på infosiden, under "Suksesskriterier for piloten" — utdyp hvert punkt slik at teamet forstår hva som ligger i dem:
- **Timeføring:** Hver student må dokumentere minimum 180 arbeidstimer (krav fra ITD35014). Timene føres i et felles system (f.eks. Google Sheets eller et enkelt verktøy) og signeres av mentor. Dette er også grunnlaget for Lånekassen-dokumentasjon og vurdering (Bestått/Ikke bestått).
- **Overleveringsplan:** Et dokument som beskriver hva som overleveres til neste kull eller kunde ved prosjektslutt: kildekode (med repo-tilgang), dokumentasjon (arkitektur, brukerveiledning), passord og tilganger, Figma-filer, åpne punkter og status. Uten overleveringsplan stopper evighetsprosjektet opp ved semesterovergang.
- **Støtteregister:** En løpende logg over hver kunde og hvilken markedsverdi tjenestene har hatt. Dette er kritisk for å holde seg under de minimis-grensen (300 000 EUR over 3 år per kunde) og unngå ESA-tilbakebetalingskrav. Registeret føres av økonomistudentene og kontrolleres av daglig leder.

Erstatt den korte setningen "Alt arbeid er dokumentert med timeføring, overleveringsplan og støtteregister." med en utdypet forklaring av hvert element.
Hvor: Scope-siden på infosiden, under "Suksesskriterier for piloten"

### 19.06.2026 — Oppdater organisasjonsbeskrivelsen med stabilt driftsskille
Prioritet: Høy
Kilde: `06-Business-case/Scope/scope_minst_motstand.md` (seksjon "Organisatorisk struktur")
Hva: På Dashboard-siden og Organisasjon & Drift-siden: legg til et tydelig skille mellom den stabile kjernen (daglig leder, fagansvarlige, forelesere) som DRIVER Syntax & Flow, og studentene som UTFØRER oppdragene. Forklar at S&F er et selvstendig organ in-house på HiØ, ikke en studentforening. Forelesere trekkes inn ved behov for ekspertise. Målet er å gi studentene en klar bane fra utdanning til fast ansatt, med portalen som verktøy for bedrifter til å følge dem og sjekke tilbakemeldinger.
Hvor: Dashboard-siden og Organisasjon & Drift-siden

### 19.06.2026 — Opprett ny seksjon "Business Case" i sidemenyen
Prioritet: Høy
Kilde: `06-Business-case/` (hele mappen)
Hva: I `App.jsx`, under navigasjonsmenyen (sidebar), opprett en ny seksjon mellom "GTM & Utførelse" og "Dokumenter & Referanser" med tittelen "Business Case". Denne seksjonen skal inneholde følgende sider (alle må opprettes i wikiData.js):
- **Forretningsmodell & VPC** — eksisterende side (behold VPC-visningen og den nye verdiskapningsteksten)
- **Scope** — ny side basert på `06-Business-case/Scope/scope_tabell.md` med in/out-of-scope-tabeller
- **Tjenester & Leveranser** — eksisterende side
- **Markeds & Konkurranseanalyse** — ny side basert på `06-Business-case/markeds_og_konkurranseanalyse.md`
- **Strategi & Utførelse** — ny side basert på `06-Business-case/strategi_og_utførelse.md`
- **Risiko & Kostnadsanalyse** — ny side basert på `06-Business-case/risiko_og_kostnadsanalyse.md`

Seksjonen skal ligge rett under "GTM & Utførelse" og over "Dokumenter & Referanser".
Hvor: `wikiData.js` + `App.jsx` (navigasjonsstruktur)

### 19.06.2026 — Oppdater oversikten over alle nye maler i mal-og-utkast
Prioritet: Lav
Kilde: `05-agent-forslag/Forslag/mal-og-utkast/` (oversikt)
Hva: Oppdater seksjonen "Guidelines" eller "Analyser" med en komplett liste over alle maler som nå finnes i mal-og-utkast-mappen. Kategoriser dem: kritiske (K), viktige (V), nyttige (N). Inkluder kort beskrivelse av hva hver mal inneholder.
Hvor: Eksisterende side "Analyser" eller "Guidelines"

### 19.06.2026 — Legg til nye maler og utkast i referanseseksjonen
Prioritet: Lav
Kilde: `05-agent-forslag/Forslag/mal-og-utkast/`
Hva: Legg til en oversikt over hvilke maler som nå finnes i `mal-og-utkast/` under "Dokumenter & Referanser". List opp: emnebeskrivelse, pedagogisk plan, finansieringsplan, samtykkeskjemaer, stillingsbeskrivelser, møtestruktur, onboarding/offboarding, kundeonboarding, rettighetsavklaring, søknadsprosess, forpliktelsesavtale, klagebehandling, KPI-er, beredskapsplan, kommunikasjonsstrategi, porteføljestrategi.
Hvor: Ny seksjon under "Analyser" eller "Guidelines"

---

## Utførte instrukser

| Dato | Beskrivelse | Status |
|------|-------------|--------|
| 19.06.2026 | Legg til Scope-side med ITD35014 som utgangspunkt | Utført |
| 19.06.2026 | Legg til Gjennomføringsplan (4 faser) | Utført |
| 19.06.2026 | Legg til Tilpasningsforslag (9 områder med begrunnelser) | Utført |
| 19.06.2026 | Oppdater Spor 2 fra 10 stp til 15 stp i Organisasjon & Drift | Utført |
| 19.06.2026 | Legg til portalens verdi som referansebase | Utført |
| 19.06.2026 | Legg til ITD35014 som utgangspunkt (ikke nytt emne) | Utført |
| 19.06.2026 | Oppdater Forretningsmodell & VPC med utdypende verdiskapningstekst | Utført |
| 19.06.2026 | Oppdater scope-siden med ny evighetsprosjekt-modell og portalen som referansebase | Utført |
| 19.06.2026 | Legg til ordliste på infosiden | Utført |
| 19.06.2026 | Oppdater ordlisten på infosiden med nye begreper | Utført |
| 19.06.2026 | Oppdater suksesskriteriene med utdypede forklaringer | Utført |
| 19.06.2026 | Opprett ny seksjon "Business Case" i sidemenyen | Utført |
| 19.06.2026 | Oppdater organisasjonsbeskrivelsen med stabilt driftsskille | Utført |
| 19.06.2026 | Oppdater oversikten over alle nye maler i mal-og-utkast | Utført |
| 19.06.2026 | Legg til nye maler og utkast i referanseseksjonen | Utført |
| 19.06.2026 | Legg til forklaring av VP sin rolle i business casen på Dashboard | Utført |

