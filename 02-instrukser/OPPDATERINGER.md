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

### 22.06.2026 — Oppdater Trelagsmodellen på infosiden
Prioritet: Høy
Kilde: Avklaring fra prosjekteier
Hva: To steder på infosiden må oppdateres:

1. **"Organisasjon & Drift"-siden, under "Trelagsmodellen":** 
   - Linje 88: "Studentledelsen: Daglig leder og fagansvarlige studenter (seniorer/masterstudenter) som leder de operative avdelingene." — Erstatt med: "Stabil kjerne: Daglig leder og fagansvarlige som driver Syntax & Flow. De finner oppdrag (både in-house og eksternt), kvalitetssikrer leveranser og følger opp studentene. Dette er lønnete stillinger, ikke studenter."
   - Hele trelagsmodellen skal vise: Styret → Stabil kjerne → Studenter (utfører oppdrag)

2. **"Forretningsmodell & VPC"-siden, under HiØs verdi:**
   - Linje 565: "Studentledelsen håndterer kundekontakt..." — Endre til: "Den stabile kjernen i Syntax & Flow håndterer kundekontakt..."
   - Linje 592: "Studentledelsen in Syntax & Flow håndterer..." — Endre til: "Den stabile kjernen i Syntax & Flow håndterer..."

Fjern ALLE referanser til "Studentledelsen" — S&F har ikke studenter i ledelsen.
Hvor: "Organisasjon & Drift" og "Forretningsmodell & VPC"

3. **Oppdater organisasjonskartet på "Organisasjon & Drift":**
   I tillegg til teksten, oppdater den visuelle fremstillingen av organisasjonsstrukturen slik at den matcher den oppdaterte `organisasjon_og_drift.md` i mappe 01. Strukturen skal være:
   ```
                   Styret (HiØ/Næring)
                          │
                          ▼
                  Stabil kjerne (Drift)
                   Daglig leder + fagansvarlige
                          │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
    Studenter (IT)   Studenter (Design)  Studenter (Økonomi)
   ```
   Altså: Styret → Stabil kjerne → Studenter. Ikke noe "studentledelse"-nivå.
Hvor: "Organisasjon & Drift"-siden

### 22.06.2026 — Oppdater studentbeskrivelser i trelagsmodellen
Prioritet: Høy
Kilde: Bekreftet fra HiØs studieprogramsider for BA økonomi og administrasjon og BA innovasjon og prosjektledelse
Hva: På "Organisasjon & Drift"-siden, under trelagsmodellen: De fagspesifikke oppgavene under hver studentgruppe må justeres basert på hva studentene faktisk lærer på HiØ:

- Studenter (IT): Systemutvikling, programmering, nettsider
- Studenter (Design): Profil, Figmaskisser, UI/UX
- Studenter (Økonomi): Økonomisk analyse, regnskap, strategi

BA økonomi og administrasjon har fagområder som samfunnsøkonomi, bedriftsøkonomi, regnskap, finans, strategi, markedsføring og bærekraft. BA innovasjon og prosjektledelse har innovasjonsprosesser, prosjektstyring og organisasjonsutvikling. BMC er ikke et standard emne for økonomistudenter ved HiØ.

Hold beskrivelsene korte og nøytrale. Tjenestekatalogen er stedet for detaljerte oppgaver.
Hvor: "Organisasjon & Drift"-siden, trelagsmodellen

### 22.06.2026 — Legg til fremdriftsindikator for Business Case nederst på Dashboard
Prioritet: Høy
Kilde: Prosjekteier
Hva: Helt nederst på Dashboard-siden, legg til en ny seksjon med tittelen "Business Case Fremdrift". Seksjonen skal inneholde en tabell eller visuell liste over alle Business Case-områdene med prosent fullført, fargekode og status-tekst:

| Område | Status | % |
|--------|--------|---|
| Executive Summary | ❌ Mangler | 0 % |
| Problembeskrivelse | 🟡 Delvis (mangler kvantitativ underbygning, personas) | 60 % |
| Value Proposition / VPC | ✅ Ferdig | 100 % |
| Forretningsmodell | 🟡 Delvis (mangler enhetsøkonomi) | 70 % |
| Markedsanalyse | 🟡 Delvis (mangler intervjuer med lokale bedrifter, TAM/SAM/SOM-beregning) | 50 % |
| Scope | ✅ Ferdig | 100 % |
| Risiko & Juss | 🟡 Delvis (mangler DPIA, forsikring) | 80 % |
| Finansiering | 🟡 Delvis (mangler 3-års prognose, konkret søknad) | 40 % |
| Team & Organisasjon | 🟡 Delvis (mangler navngitte personer) | 40 % |
| Gjennomføringsplan | ✅ Ferdig (mangler Gantt-diagram) | 90 % |
| Vedlegg | 🟡 Delvis (ikke organisert) | 40 % |

Hver rad skal ha:
- En visuell progressjonsbar (fylt linje) som viser prosenten
- Fargekode: Grønn (100%), Blå (70-99%), Gul (40-69%), Rød (under 40%)
- Klikkbar — navigerer til aktuell side (f.eks. "Scope" → Scope-siden)

Bruk eksisterende CSS-klasser og ikoner.
Hvor: Helt nederst på Dashboard-siden

### 22.06.2026 — Oppdater "Det Tverrfaglige Samspillet" på Mål & Visjon med korrekt faginnhold
Prioritet: Høy
Kilde: HiØs studieprogramsider (bekreftet via research)
Hva: På "Mål & Visjon"-siden, under "Det Tverrfaglige Samspillet", oppdater teksten. Den nåværende teksten er utdatert og kaller S&F et "selskap" med "avdelinger". S&F er et selvstendig organ med en stabil kjerne. Oppdater til:

**Overskrift:** "Tverrfaglig sammensetning"

**Brødtekst:**
"Syntax & Flow setter sammen team på tvers av fagdisipliner. Hvilke studenter som deltar avhenger av oppdraget, men typisk vil et team bestå av:

**IT & Utvikling:** Studenter fra informatikk, dataingeniør eller informasjonssystemer. Kan bidra med programmering, webutvikling, databasesystemer og systemarkitektur.

**Design & Medier:** Studenter fra digitale medier og design. Kan bidra med UX/UI-design, visuell profil, prototyping og medieproduksjon.

**Økonomi & Ledelse:** Studenter fra økonomi og administrasjon eller innovasjon og prosjektledelse. Kan bidra med forretningsutvikling, regnskap, budsjettering og prosjektstyring.

**Kommunikasjon:** Studenter fra kommunikasjon eller internasjonal kommunikasjon. Kan bidra med strategisk kommunikasjon, krisekommunikasjon og digital markedsføring."

Fjern konkret omtale av "regnskapsrutiner" og "flaskehalsanalyser" — disse er ikke standard fagbegreper. Hold beskrivelsene nøytrale og basert på faktiske emner.
Hvor: "Mål & Visjon"-siden, under "Det Tverrfaglige Samspillet"

### 22.06.2026 — QC Runde 4: Rett opp 4 nye feil på infosiden
Prioritet: Høy
Kilde: QC-gjennomgang av wikiData.js
Hva: Rett opp følgende 4 feil i wikiData.js:

1. Linje 1181: "statsstøtte to bedrifter" → "statsstøtte til bedrifter"
2. Linje 1258: "Søknad to Lånekassen" → "Søknad til Lånekassen"
3. Linje 740: "We skiller" → "Vi skiller" (norsk, ikke engelsk)
4. Linje 1417 og 1424: "Avtalesijen § 36" → "Avtaleloven § 36" (riktig lovnavn)

Hvor: wikiData.js

### 22.06.2026 — QC Runde 3: Rett opp 12 feil på infosiden
Prioritet: Høy
Kilde: Full gjennomgang av wikiData.js og App.jsx
Hva: Gå gjennom HELE wikiData.js og App.jsx og rett opp følgende:

**🔴 KRITISK (3 stk):**
1. Linje 563: "Samarbeidsavtalen & Betinget SLA / forpliktende milepælsplan" → skal være "Samarbeidsavtalen & Forpliktende milepælsplan" (fjern "Betinget SLA")
2. Linje 573–578 og 739: "Spor A" og "Spor B" → bytt til "Eksterne oppdrag" og "Interne evighetsprosjekter" for å unngå forvirring med student-sporene
3. Linje 342–345: "IP" definert som "Investor Proposal" → endre til "Intellectual Property. Immaterielle rettigheter (kode, design, patenter)."

**🟡 SKRIVEFEIL (6 stk):**
4. Linje 54: "to arbeidslivet" → "til arbeidslivet"
5. Linje 149: "forholder seg to en" → "forholder seg til en"
6. Linje 227: "to offentlig sektor" → "til offentlig sektor"
7. Linje 1210: "råd to kommersielle" → "råd til kommersielle"
8. Linje 1544: "kanaliseres to næringslivet" → "kanaliseres til næringslivet"
9. Linje 1704: "EU-domstolen has slått fast" → "har slått fast"
10. Linje 2685: "S&F has en fordel" → "har en fordel"
11. Linje 694 og 1190: "slutter å give tilbakemeldinger" → "slutter å gi tilbakemeldinger"
12. Linje 618: "Økonomisk pressure" → "Økonomisk press"
13. Linje 1856: "Gjenomføre" → "Gjennomføre"
14. Linje 790: "Avanserte Apper" → "Avanserte apper"

**🟢 KOSMETISK (3 stk):**
15. Linje 416–417: "Pro bono"-definisjonen: "Latin for «det godes skyld»" → endre til "Latin for 'for det allmenne beste'. Brukes om tjenester som leveres gratis."
16. Linje 1992–2011: Gjennomføringsplan — gjør "Mnd" konsekvent (alle steder)
17. Sjekk "Finansiering" i progressbaren i App.jsx linje 1133 — den peker til risiko-siden. Vurder om den skal peke til Business Case-utkastet i stedet, eller legg til en egen finansieringsside.

Hvor: Hele wikiData.js og App.jsx

### 22.06.2026 — Legg til vurderingsmodell på Tjenester & Leveranser-siden
Prioritet: Middels
Kilde: `05-agent-forslag/Forslag/forslag_karakter_vurdering.md`
Hva: Legg til en ny seksjon på "Tjenester & Leveranser"-siden med tittelen "Vurderingsmodell — Karakter på utført praksis". Innhold:

- ITD35014 vurderes i dag med Bestått/Ikke bestått. Forslaget er å innføre bokstavkarakter A–F der kunden (bedriften) får 60 % innflytelse basert på en strukturert rubric (faglig kompetanse, samarbeid, kommunikasjon, gjennomføringsevne, kundeforståelse).
- Muntlig presentasjon (20 %) og refleksjonsnotat (20 %) vurderes av mentor.
- Karakteren gir en mer rettferdig vurdering og gjør at neste arbeidsgiver kan se hvordan studenten faktisk presterte hos kunden.
- Forslaget skal drøftes med emneansvarlig Stig Henning Johansen.

Hold det kort og informativt — en oversikt, ikke hele utredningen.
Hvor: "Tjenester & Leveranser"-siden, som ny seksjon mot slutten

### 22.06.2026 — Erstatt kalkulatoren med statisk tekst som forklarer de minimis-verdier
Prioritet: Høy
Kilde: `05-agent-forslag/Forslag/drofting_kalkulator.md`
Hva: Fjern den interaktive kalkulatoren ("Intern Kalkulator: Verdi & Statsstøtte") under "Risiko & Juss" på infosiden. Erstatt den med en statisk tekstboks med følgende innhold:

**Tittel:** De Minimis Statsstøtte — Beregningsmodell

**Brødtekst:**
"Siden Syntax & Flow yter gratis tjenester til bedrifter ved hjelp av offentlige ressurser, regnes verdien som de minimis-støtte (bagatellmessig statsstøtte). For å sikre full overholdelse av EØS-reglene føres et internt register og det utstedes et støtteerklæringsbrev til mottakerbedriften.

Viktig: Beløpene nedenfor er forsvarstall, ikke fakturabeløp. Ingen betaler noe. De finnes kun på papiret i registeret og i et erklæringsbrev til kunden. Formålet er å dokumentere overfor ESA eller Konkurransetilsynet at hver kunde mottar støtte under 300 000 EUR-grensen.

Beregningen baseres på følgende edruelige markedsverdi:
- Studentverdi: 250 kr/time — tilsvarer omtrent det en bedrift ville betalt en studentassistent eller trainee. Settes lavt fordi studentene er under opplæring, arbeidet leveres uten garanti, og ingen kommersiell aktør ville betalt full pris.
- Mentorverdi: 600 kr/time — faktisk timeskostnad for en HiØ-foreleser (lønn + arbeidsgiveravgift).

Eksempel: Et prosjekt med 4 studenter (150 timer hver) + 15 timer mentorveiledning gir en beregnet støtteverdi på:
(4 × 150t × 250 kr) + (15t × 600 kr) = 159 000 kr

Dette beløpet loggføres i registeret og oppgis til kunden i erklæringsbrevet. Grensen er 300 000 EUR over en rullerende 3-årsperiode."

Hold det statisk og informativt — ingen interaktive slidere.
Hvor: "Risiko & Juss"-siden, under kostnadsanalyse

### 22.06.2026 — Rett opp "de minimis"-feil på infosiden — har blitt forkortet til "n"
Prioritet: Høy
Kilde: Gjennomgang av wikiData.js og App.jsx
Hva: Gemini har automatisk forkortet "de minimis" til bare "n" overalt på infosiden. Dette må rettes. Søk opp ALLE forekomster av "n" i wikiData.js og App.jsx som refererer til de minimis, og erstatt med fullt begrep "de minimis". 

Spesielt:
- "n-register" → "de minimis-register"
- "n-grensen" → "de minimis-grensen"
- "n-verdier" → "de minimis-verdier"
- "n-støtte" → "de minimis-støtte"
- "Intern n" → "de minimis kalkulator"
- "n Statsstøtte" → "De minimis statsstøtte"
- "n-registerføring" → "de minimis-registerføring"
- "n-kontroll" → "de minimis-kontroll"
- Forklaringer som sier "n" uten kontekst → "de minimis (bagatellmessig støtte)"

Gå gjennom ALL tekst. "n" som står alene og refererer til de minimis må fikses overalt.
Hvor: wikiData.js og App.jsx

### 22.06.2026 — Splitt "Forretningsmodell & VPC" til to separate sider
Prioritet: Høy
Kilde: Prosjekteier
Hva: Del den eksisterende siden "Forretningsmodell & VPC" i to separate sider under "Business Case":

**Side 1: "Forretningsmodell"**
- Kategori: Business Case
- Ikon: BarChart3
- Innhold:
  - Win-Win-Win Forretningsmodell (eksisterende tekst)
  - Samarbeidsavtalen & Betinget SLA / forpliktende milepælsplan
  - Modell med to parallelle spor (evighetsprosjekter + eksterne oppdrag) — flyttet hit fra Scope
  - Studentrekruttering / ITD35014

**Side 2: "VPC — Verdiskapning"**
- Kategori: Business Case
- Ikon: Gift
- Innhold:
  - Den utdypende verdiskapningsteksten (fra verdiskapning_vpc_oppsummering.md)
  - VPC-visningene (student, HiØ, næringsliv) — behold interaktiv VPC med faner

Navigasjonen i sidemenyen skal vise begge som separate punkter under "Business Case".
Hvor: wikiData.js — ny sidestruktur

### 22.06.2026 — Flytt innhold på Scope-siden og oppdater kategorinavn
Prioritet: Høy
Kilde: Prosjekteier
Hva: Gjør følgende endringer på infosiden:

1. **Scope-siden:** Endre kategorinavn fra "Scope & Omfang" til bare "Scope"

2. **Flytt "Modell med to parallelle spor"** (evighetsprosjekter og eksterne oppdrag) fra Scope-siden til "Forretningsmodell & VPC"-siden. Dette passer bedre under forretningsmodellbeskrivelsen. Plasser det som en ny seksjon under den eksisterende "Win-Win-Win Forretningsmodell".

3. **Flytt "Suksesskriterier for piloten"** fra Scope-siden til "Gjennomføringsplan"-siden. Det er en naturlig del av fremdriftsplanen, ikke scopet. Plasser det som en egen seksjon mot slutten av Gjennomføringsplan-siden.

Sørg for at innholdet forblir identisk — bare flyttet til nye steder.
Hvor: Scope-siden → Forretningsmodell & VPC og Gjennomføringsplan

### 22.06.2026 — Legg til filter-funksjonalitet på ordlisten
Prioritet: Lav
Kilde: Prosjekteier
Hva: På Ordliste-siden, legg til en knapp/toggle øverst som lar brukeren velge mellom:
1. "Alfabetisk" (standard — dagens visning)
2. "Etter kategori" — gruppér ordene i kategorier som: Jus/EØS, Marked/Forretning, Prosjektledelse, Organisasjon, Personvern/GDPR, Student/Utdanning

Bruk eksisterende CSS-klasser. Kategoriene kan settes manuelt på hvert ord i data-strukturen.
Hvor: Ordliste-siden

### 22.06.2026 — Forbedre grafisk fremstilling på infosiden
Prioritet: Middels
Kilde: Tilbakemelding fra prosjekteier
Hva: Gjennomgå infosiden og forbedre den visuelle fremstillingen der det er mulig. Fokuser på:

1. **Organisasjonskartet** — gjør det mer visuelt med tydelige bokser, piler og fargekoding. Bruk CSS-klasser som allerede finnes i App.css.

2. **Dashboard / Business Case-flyt** — "Hvordan henger business casen sammen?"-seksjonen kan få en mer visuell fremstilling med ikoner og farger i stedet for bare tekst.

3. **Scope in/out** — vurder om in/out-tabellene kan visualiseres med fargekoder (grønn for in scope, rød for out of scope) i stedet for bare tabellceller.

4. **Evighetsprosjekter** — vis hvordan et prosjekt går over flere semestre med en tidslinje eller pil som viser kull 1 → kull 2 → kull 3.

5. **Faser (gjennomføringsplan)** — gjør fasetabellen mer visuell med fremdriftsindikator eller tidslinje.

Målet er å gjøre informasjonen lettere å forstå ved første øyekast, uten å måtte lese lang tekst. Bruk eksisterende CSS-klasser og ikoner (lucide-react) som allerede er tilgjengelig i prosjektet. Ikke legg til nye avhengigheter.
Hvor: Hele wikiData.js — flere sider

### 22.06.2026 — Ryddeopp runde 2: gjenværende SLA, Spor 2 og foreningsreferanser
Prioritet: Høy
Kilde: Gjennomgang av wikiData.js
Hva: Gå gjennom HELE wikiData.js og rett opp følgende gjenværende feil:

1. **SLA-referanser som ikke er byttet:**
   - Linje 517: "(SLA)" i parentes etter "leveransegaranti" — fjern parentesen. Skal kun stå "Ingen formell leveransegaranti."
   - Linje 761: "leveransegartanti (SLA)" — skrivefeil OG SLA. Rett til "leveransegaranti" uten SLA.
   - Linje 1659: "Unngå ord som ... «SLA»" — denne kan stå, siden den sier at SLA skal unngås. Men sjekk at SLA faktisk er fjernet alle andre steder.

2. **Spor 2 — fjern omtale helt:**
   - Linje 449–457: Spor 2-seksjonen under "Viktige prinsipper / Scope-tabell (in/out)" — fjern hele "Spor 2"-linjen. Spor 2 finnes ikke. Kun spor 1 (ITD35014) og spor 3 (NAV, utsatt) skal omtales.

3. **Forening som alternativ:**
   - Linje 1314: "En forening eller stiftelse..." — endre til "En ideell stiftelse som eier AS-et..." slik at forening ikke fremstår som et alternativ.
   - Linje 1338: "I en forening kan medlemmene..." — endre til "I et AS er ansvaret begrenset til aksjekapitalen (30 000 kr). For å sikre det ideelle formålet, bør aksjene eies av en ideell stiftelse."

Gå gjennom ALL tekst og fjern siste rest av SLA, Spor 2 som aktivt spor, og forening som organisasjonsalternativ.
Hvor: Hele wikiData.js

### 19.06.2026 — Forklar begreper som Blender Collective og næringshager på infosiden
Prioritet: Høy
Kilde: Infosiden wikiData.js — flere steder nevnes "Blender Collective", "Smart Innovation Norway", "næringshager", "inkubatorer" uten forklaring
Hva: Gå gjennom HELE wikiData.js og finn alle steder der disse begrepene brukes. For hvert sted, legg til en kort forklaring i parentes eller som fotnote:
- **Blender Collective:** Gründerinkubator og kontorfellesskap i Fredrikstad for oppstartsbedrifter, frilansere og kreative.
- **Smart Innovation Norway:** Regional innovasjonsaktør som støtter gründere og næringsutvikling i Østfold.
- **Næringshage:** Et fysisk miljø (ofte SIVA-eid) der gründere og småbedrifter får kontorplass, veiledning og tilgang til nettverk.
- **Inkubator:** Et støtteprogram for oppstartsbedrifter som tilbyr veiledning, kontorplass og finansieringshjelp.

Målet er at hvem som helst skal forstå hva disse aktørene er uten å måtte slå opp.
Hvor: Hele wikiData.js — alle sider som refererer til disse begrepene

### 19.06.2026 — Omstrukturer menyen på infosiden for bedre oversikt
Prioritet: Høy
Kilde: Tilbakemelding fra prosjekteier
Hva: Gå gjennom ALLE sider i wikiData.js og App.jsx og omstrukturer navigasjonsmenyen (sidebar) slik:

**Oversikt & Hovedsider**
1. Dashboard
2. Mål & Visjon
3. Organisasjon & Drift
4. Ordliste (flyttes hit fra Dokumenter & Referanser)

**Business Case** (ny seksjon, tidligere "Dokumenter" + deler av "GTM")
5. Forretningsmodell & VPC
6. Scope (in/out of scope)
7. Tjenester & Leveranser
8. Marked & Konkurranse
9. Risiko & Jus
10. Tilpasningsforslag
11. Gjennomføringsplan (flyttes hit)

**GTM & Utførelse**
12. Prosjektplan
13. Rekruttering

**Dokumenter & Referanser**
14. Maler og utkast (oversikt over alle filene i mal-og-utkast-mappen)
15. Lignende prosjekter i Norge

**Fjern fra menyen:** Analyser, Guidelines (innholdet er spredt på andre sider). Slå sammen overlappende innhold slik at samme informasjon ikke står flere steder.

Målet er færre menypunkter og tydeligere kategorier, slik at man ser alt uten å scrolle.
Hvor: wikiData.js + App.jsx — hele navigasjonsstrukturen

### 19.06.2026 — QC Runde 2: Rett opp feil om Lånekassen på infosiden
Prioritet: Høy
Kilde: Avklaring fra prosjekteier
Hva: Flere steder på infosiden beskriver ITD35014 som om det står alene som et enkeltemne som ikke kvalifiserer for Lånekassen. Dette er feil. ITD35014 er et valgfritt emne innenfor et bachelorløp. Studenten tar normalt 3-4 fag per semester (30 stp totalt), der ITD35014 er ett av dem. Studenten får derfor full Lånekassen-støtte for hele semesteret — ikke bare for ITD35014. Risikoen for Lånekassen-støtte gjelder kun hvis studenten tar ITD35014 som et frittstående enkeltemne utenom et bachelorløp.

Søk opp ALLE steder på infosiden som sier noe om Lånekassen-problematikk knyttet til 10 stp, og rett opp:
- Der det står at "10 stp ikke kvalifiserer for Lånekassen" uten kontekst — legg til at dette gjelder for enkeltemner, IKKE for studenter som følger et bachelorløp
- Der risikobeskrivelser sier noe om manglende støtte — presiser at risikoen kun gjelder hvis ITD35014 tas som enkeltemne utenom et bachelorløp
- Skriv om "Forebyggende tiltak" til å handle om å avklare enkeltemne-sitasjonen, ikke om å utvide emnet
Hvor: Hele wikiData.js — spesielt på Juridisk & Risiko-siden og der Lånekassen omtales

### 19.06.2026 — Kvalitetssikring (QC) av hele infosiden — rett opp flere feil
Prioritet: Høy
Kilde: Hele samtalen + `06-Business-case/Scope/scope_minst_motstand.md` + HiØs emneside for ITD35014
Hva: Gå gjennom HELE wikiData.js og rett opp følgende feil som er identifisert:

1. **"De tre deltakerordningene" på Organisasjon & Drift:** Tabellen må oppdateres. Spor 1 = ITD35014 (10 stp). Spor 2 finnes ikke lenger som et eget spor — slett eller erstatt med en merknad. Spor 3 (NAV) utsettes. Det finnes IKKE et 5 stp-emne på HiØ som kan kombineres med ITD35014.

2. **Scope-siden, linje med "Spor 1 (Kombinert): ITD35014 (10 stp) + 5 stp":** Fjern denne. Spor 1 er kun ITD35014 (10 stp). Målet er å utvide emnet til 15–30 stp på sikt, men det finnes ikke et 5 stp-emne å kombinere med i dag.

3. **Alle steder på infosiden som refererer til "Spor 2 (15 stp)" eller "Spor 2 (deltid)"**: Dette sporet eksisterer ikke. Det finnes kun ITD35014 (10 stp). Hvis omtale av flere spor er nødvendig, skill mellom:
   - **Dagens situasjon:** Kun ITD35014 (10 stp)
   - **Mål på sikt:** Utvide til 15–30 stp

4. **Område-setup (Tilpasningsforslag), under Lånekassen — Spor 2:** Oppdater. Spor 2 slik det var beskrevet (minimum 15 stp) finnes ikke. Erstatt med forklaring om at ITD35014 er 10 stp og målet er utvidelse.

5. **Risikomatrisen på Juridisk & Risiko:** Oppdater risikobeskrivelser som refererer til "Spor 2 (10 stp)" — dette er nå dagens situasjon, ikke en risiko. Risikoen er heller at Lånekassen krever mer enn 10 stp for gradert støtte.

6. **Ordlisten:** Oppdater Spor 1 og Spor 2 til å reflektere dagens situasjon. Spor 1 = ITD35014 (10 stp). Spor 2 = fjernes eller endres til "planlagt utvidelse".

Gjennomgå ALL tekst på infosiden for konsistens. Ikke bare rett én tabell — rett alle forekomster.
Hvor: Hele wikiData.js — alle sider som refererer til sporene

### 19.06.2026 — Oppdater ordlisten på infosiden med nye begreper
Prioritet: Høy
Kilde: `01-administrasjon/ordliste.md`
Hva: Oppdater den eksisterende ordliste-siden på infosiden. Mange nye begreper er lagt til: Adoption & Retention, Ambassadørprogram, B2G, Bottom-up, CAC, Change Management, Churn Rate, CLTV, CLV, COS, Early adopter, LOI, PoC, Proof of Interest, Prisstrategi, RGE, Top-down. Fjern Lånekassen fra ordlisten. Sørg for at alle begreper er sortert alfabetisk under riktig bokstavseksjon. Hele ordlisten skal være oppdatert og komplett.
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
| 19.06.2026 | Rett opp tabellen over deltakerordninger på Organisasjon & Drift-siden | Utført |
| 19.06.2026 | Oppdater Dashboard med ny avklaring om ITD35014 | Utført |
| 19.06.2026 | Kvalitetssikring (QC) av hele infosiden — rett opp flere feil | Utført |
| 19.06.2026 | QC Runde 2: Rett opp feil om Lånekassen på infosiden | Utført |
| 19.06.2026 | Omstrukturer menyen på infosiden for bedre oversikt | Utført |
| 19.06.2026 | Forklar begreper som Blender Collective og næringshager på infosiden | Utført |
| 22.06.2026 | Rett opp to inkonsistenser på infosiden: Selskapsform og SLA | Utført |
| 22.06.2026 | Ryddeopp runde 2: gjenværende SLA, Spor 2 og foreningsreferanser | Utført |
| 22.06.2026 | Oppdater Trelagsmodellen på infosiden | Utført |
| 22.06.2026 | Forbedre grafisk fremstilling på infosiden | Utført |
| 23.06.2026 | Legg til piler og øk avstand i business case-flyt | Utført |
| 23.06.2026 | Gjør TLDR-kortet kollapsbart og hele overskriften klikkbar (Vis mer/mindre) | Utført |
| 23.06.2026 | Øk avstand mellom evighetsprosjekt-tidslinje og Spor A-tekst | Utført |
| 23.06.2026 | Legg til interaktive koblinger fra SWOT-weaknesses til risikomatrisen | Utført |
| 23.06.2026 | Legg til intern budsjett- og De Minimis-kalkulator under Risiko & Jus | Utført |
| 23.06.2026 | Øk avstand over beredskapsplan på Gjennomføringsplan-siden | Utført |
| 22.06.2026 | Legg til fremdriftsindikator for Business Case nederst på Dashboard | Utført |
| 22.06.2026 | Splitt "Forretningsmodell & VPC" til to separate sider | Utført |
| 22.06.2026 | Flytt innhold på Scope-siden og oppdater kategorinavn | Utført |
| 22.06.2026 | Legg til filter-funksjonalitet på ordlisten | Utført |
| 22.06.2026 | Erstatt kalkulatoren med statisk tekst som forklarer de minimis-verdier | Utført |
| 22.06.2026 | Oppdater studentbeskrivelser i trelagsmodellen | Utført |
| 22.06.2026 | Legg til vurderingsmodell på Tjenester & Leveranser-siden | Utført |
| 22.06.2026 | Rett opp "de minimis"-feil på infosiden — har blitt forkortet til "n" | Utført |
| 22.06.2026 | QC Runde 3: Rett opp 12 feil på infosiden | Utført |
| 22.06.2026 | Oppdater "Det Tverrfaglige Samspillet" på Mål & Visjon med korrekt faginnhold | Utført |
| 24.06.2026 | Forbedre grafisk fremstilling på Mål & Visjon (kort, banner, utgangspunkt) | Utført |
| 22.06.2026 | QC Runde 4: Rett opp 4 nye feil på infosiden | Utført |
| 24.06.2026 | Bytte rekkefølge på ordliste-sorteringsknapper i App.jsx | Utført |
| 24.06.2026 | Øke avstand over forretningsmodell-punkter i App.jsx | Utført |
| 24.06.2026 | Implementere topp-navigasjon (Browserbase-stil) på desktop | Utført |
| 24.06.2026 | Sentrere innholdsområdet (content-area) på desktop | Utført |
| 24.06.2026 | Forbedre dropdown-menyene (mindre gjennomsiktig, tetting av hover-gap) | Utført |







