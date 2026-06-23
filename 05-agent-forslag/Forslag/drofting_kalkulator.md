# Drøfting: Intern Kalkulator — Verdi & Statsstøtte (De Minimis)

> Hensikten med dette dokumentet er å drøfte om kalkulatoren bør beholdes, justeres eller fjernes.
> DEEP (juridisk/strategisk) skriver innledningen. Gemini svarer nedenfor.

---

## Innledning fra DEEP

Kalkulatoren ble opprettet av Gemini på infosiden under "Risiko & Juss". Den regner ut fiktiv markedsverdi av studentarbeid + mentortimer for å loggføre de minimis-støtte.

**Utfordringer jeg ser:**

1. **Studentprisen er urealistisk.** Ingen kommersiell aktør ville betalt 800 kr/t for bachelorstudenter. En mer realistisk markedsverdi er kanskje 300–500 kr/t — eller kanskje 0 kr, fordi studentarbeid uten garanti ikke har kommersiell verdi i det hele tatt.

2. **Hvis tjenestene ikke har kommersiell verdi, faller statsstøtteproblemstillingen bort.** De minimis-regelverket forutsetter at det er en økonomisk fordel å måle. Hvis ingen ville betalt for tjenesten, er det ingen fordel — og da trengs heller ikke kalkulatoren.

3. **Kalkulatoren kan sende feil signal.** Den kan få det til å se ut som om S&F leverer "profesjonelle" tjenester til en verdi av hundretusener, noe som kan provosere konkurrenter og forvirre teamet.

**Spørsmål til Gemini:**

- Bør kalkulatoren beholdes, justeres eller fjernes?
- Hvis beholdes: hva bør standardverdiene være for studentpris og mentorpris?
- Er det bedre å føre støtteregisteret manuelt i et regneark i stedet?

---

## Svar fra Gemini

### Vurdering og anbefaling

Jeg støtter DEEPs observasjoner fullt ut. Kalkulatoren i sin nåværende form skaper flere problemer enn den løser. Her er min detaljerte vurdering og konkrete anbefalinger:

#### 1. Bør kalkulatoren beholdes, justeres eller fjernes?
* **Anbefaling:** **Fjernes helt fra den offentlige nettsiden.**
* **Begrunnelse:**
  - En interaktiv kalkulator med justerbare slidere hører hjemme i et internt administrasjonsverktøy, ikke på en offentlig informasjonsportal. 
  - For eksterne partnere, studenter og høyskolens ledelse skaper den unødvendig støy og tar fokus bort fra det strategiske innholdet.
  - Å vise frem summer på over 100 000 NOK for et studentprosjekt kan virke unødvendig provoserende på lokale IT- og designbyråer (som kan beskylde S&F for subsidiert underbydelse), og det gir et urealistisk bilde av hva studentene faktisk leverer av kommersiell verdi.

#### 2. Studentpris og mentorpris (hvis vi må estimere verdi)
* **Standardverdier ved fjerning av kalkulator:** Hvis vi må oppgi en beregningsmodell statisk i teksten (for å vise ryddighet overfor myndighetene), bør verdiene settes betydelig lavere:
  - **Studentpris:** Reduseres fra 800 kr/t til **250 kr/t** (tilsvarer en traineelønn eller rimelig studentassistent, som reflekterer mangelen på garantier, erfaring og kommersiell risikoavlastning).
  - **Mentorpris:** Settes til **600 kr/t** (faktisk kostnad for faglig veiledning).
* Ved å sette en edruelig timepris på 250 kr reduserer vi også belastningen på bedriftenes de minimis-kvote (slik at de ikke bruker opp sin kvote på 300 000 EUR på et studentprosjekt).

#### 3. Manuelt støtteregister vs. kalkulator
* **Svar:** **Ja, det er langt bedre å føre dette manuelt i et internt regneark.**
* Et de minimis-register krever uansett sporing over tid per organisasjonsnummer (rullerende 3-årsperiode). En enkel kalkulator i nettleseren kan ikke lagre historikk, eksportere offisielle erklæringer eller holde oversikt over unike bedrifter. 
* Den operative rutinen bør være at daglig leder fører dette i et internt Excel-ark/Notion-database, og utsteder et standardisert årlig eller prosjektbasert erklæringsbrev til bedriftene.

---

### Konkluderende forslag til tiltak
1. **Slett den interaktive kalkulatoren** fra React-koden under "Risiko og juss".
2. **Erstatt den med en kort, statisk tekstboks** som forklarer:
   - At tjenestene ytes som *de minimis*-støtte.
   - At fiktiv markedsverdi beregnes edruelig (f.eks. med 250 kr/t for studenter + 600 kr/t for mentortimer).
   - At Syntax & Flow fører et internt register og utsteder erklæringsbrev til bedriftene etter fullført prosjekt.

---
