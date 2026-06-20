export const wikiData = [
  {
    id: "dashboard",
    title: "Dashboard",
    category: "Oversikt",
    icon: "LayoutDashboard",
    lead: "Velkommen til den interne kunnskapsportalen (Wiki) for Syntax & Flow. Dette verktøyet er designet for prosjektteamet som skal utføre businesscasen.",
    sections: [
      {
        heading: "Hva er Syntax & Flow?",
        text: "Syntax & Flow er et selvstendig organ lokalisert in-house på Høgskolen i Østfold (HiØ). Vi bygger broen mellom akademia og arbeidslivet. Organisasjonen drives av en stabil kjerne, mens studentene utfører reelle oppdrag for lokale bedrifter gjennom tverrfaglige team innen IT, Design og Økonomi."
      },
      {
        heading: "Driftsmodell: Stabil kjerne vs. Utførende studenter",
        text: "For å sikre kontinuitet, profesjonalitet og høy kvalitet drives Syntax & Flow etter en modell med et tydelig skille mellom drift og utførelse:<br/><br/>" +
          "<ul style=\"padding-left: 20px; display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; list-style-type: disc;\">" +
          "  <li style=\"line-height: 1.6; color: var(--text-secondary);\">" +
          "    <strong>Den stabile kjernen (Driver organisasjonen):</strong> Består av daglig leder, fagansvarlige og forelesere ved HiØ. De sikrer den faglige standarden og kontinuiteten uavhengig av studentutskifting. Forelesere trekkes inn ved behov for spisskompetanse." +
          "  </li>" +
          "  <li style=\"line-height: 1.6; color: var(--text-secondary);\">" +
          "    <strong>Studentene (Utfører oppdragene):</strong> Deltar gjennom emnet ITD35014 Bedriftspraksis (eller kombinerte ordninger) i tverrfaglige prosjektteam. De utfører selve oppgavene, men har ikke det administrative driftsansvaret for organisasjonen." +
          "  </li>" +
          "</ul>" +
          "Syntax & Flow er et <strong>selvstendig organ in-house på HiØ</strong>, ikke en uforpliktende studentforening. Målet er å gi studentene en klar og forutsigbar bane fra utdanning til fast ansatt, der portalen fungerer som et verktøy for bedrifter til å følge deres arbeid og verifisere kompetanse."
      },
      {
        heading: "Utgangspunkt: ITD35014 Bedriftspraksis",
        text: "Syntax & Flow bygger på det eksisterende emnet <strong>ITD35014 Bedriftspraksis (10 stp)</strong> ved HiØ, Institutt for IT og kommunikasjon (ITK). Dette er bekreftet som et 10 stp valgfritt emne (emneansvarlig: Stig Henning Johansen). Målet er å utvide emnet til 15–30 stp over tid for å få mer tid med studentene. Når det gjelder enkeltemner utenom grad, er dette foreløpig uavklart og kun gjenstand for uformelle samtaler, og må ikke presenteres som fakta.<br/><br/>Syntax & Flows rolle er å skaffe praksisplassene og organisere de tverrfaglige teamene — noe studentene i dag må gjøre selv."
      },
      {
        heading: "Hvordan bruke denne Wikien",
        text: "Bruk sidemenyen til å navigere mellom de ulike kapitlene av prosjektet. Hvis du lurer på noe underveis i prosjektgjennomføringen – enten det gjelder retningslinjer, analyser som skal kjøres, eller hva som skal leveres til kunden – finner du det her. Trykk CMD+K (eller CTRL+K) for å søke på tvers av hele dokumentasjonen."
      },
      {
        heading: "Hvordan henger business casen sammen?",
        text: "<div class=\"info-box\" style=\"border-left-color: var(--accent-color); margin-top: 16px;\">" +
          "  <p style=\"margin-bottom: 16px; color: var(--text-primary);\">" +
          "    Value Proposition (VP) er ikke en separat del av prosjektet, men en <strong>integrert del av business casen</strong>. " +
          "    VPC-ene (Value Proposition Canvas) under \"Forretningsmodell & VPC\" er en visualisering av VP-en for hver målgruppe (studenter, HiØ, næringsliv). Sammen utgjør alle disse elementene den helhetlige business casen for Syntax & Flow." +
          "  </p>" +
          "  <div style=\"display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-top: 16px; margin-bottom: 16px; justify-content: center; background: var(--bg-secondary); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);\">" +
          "    <span style=\"font-weight: 600; padding: 6px 12px; background: rgba(37, 99, 235, 0.15); color: var(--accent-color); border-radius: 6px; font-size: 0.875rem;\">1. Forretningsidé</span>" +
          "    <span style=\"color: var(--text-muted); font-weight: bold;\">&rarr;</span>" +
          "    <span style=\"font-weight: 600; padding: 6px 12px; background: rgba(37, 99, 235, 0.15); color: var(--accent-color); border-radius: 6px; font-size: 0.875rem; border: 1px dashed var(--accent-color);\">2. Value Proposition (VP)</span>" +
          "    <span style=\"color: var(--text-muted); font-weight: bold;\">&rarr;</span>" +
          "    <span style=\"font-weight: 600; padding: 6px 12px; background: rgba(37, 99, 235, 0.15); color: var(--accent-color); border-radius: 6px; font-size: 0.875rem;\">3. Forretningsmodell</span>" +
          "    <span style=\"color: var(--text-muted); font-weight: bold;\">&rarr;</span>" +
          "    <span style=\"font-weight: 600; padding: 6px 12px; background: rgba(37, 99, 235, 0.15); color: var(--accent-color); border-radius: 6px; font-size: 0.875rem;\">4. Marked og konkurranse</span>" +
          "    <span style=\"color: var(--text-muted); font-weight: bold;\">&rarr;</span>" +
          "    <span style=\"font-weight: 600; padding: 6px 12px; background: rgba(37, 99, 235, 0.15); color: var(--accent-color); border-radius: 6px; font-size: 0.875rem;\">5. Scope</span>" +
          "    <span style=\"color: var(--text-muted); font-weight: bold;\">&rarr;</span>" +
          "    <span style=\"font-weight: 600; padding: 6px 12px; background: rgba(37, 99, 235, 0.15); color: var(--accent-color); border-radius: 6px; font-size: 0.875rem;\">6. Risiko og juss</span>" +
          "  </div>" +
          "  <p style=\"font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-top: 12px;\">" +
          "    <strong>Hvordan det henger sammen:</strong> Forretningsidéen definerer retningen. Value Proposition tydeliggjør verdiskapningen (visualisert i våre VPC-er). Forretningsmodellen beskriver hvordan denne verdien leveres (gratis samarbeidsmodell med betinget SLA). Marked og konkurranse kartlegger eksterne krefter. Scope definerer rammene for hva vi skal gjøre (og ikke gjøre), og Risiko og juss sikrer at vi navigerer innenfor lovverk som statsstøttereglene og personvern." +
          "  </p>" +
          "</div>"
      }
    ]
  },
  {
    id: "mal-og-visjon",
    title: "Mål & Visjon",
    category: "Hovedsider",
    icon: "Target",
    lead: "Brobyggeren mellom studenter, høyskolen og lokalt næringsliv.",
    sections: [
      {
        heading: "Vår Visjon",
        text: "Vi ønsker å fjerne 'erfaringsgapet' for nyutdannede studenter ved å gi dem reell prosjekterfaring i et trygt, mentorstyrt miljø under studietiden. Vi forener studentenes behov for relevant erfaring med bedriftenes behov for digitalisering og forretningsutvikling."
      },
      {
        heading: "Forankring i ITD35014 Bedriftspraksis",
        text: "Syntax & Flow bygger på det eksisterende faget <strong>ITD35014 Bedriftspraksis (10 stp)</strong> ved HiØ. Vår rolle er å fungere som den tilretteleggende parten som kobler studenter sammen i team og skaffer oppdragene, slik at rammene rundt faget blir mer attraktive og operative."
      },
      {
        heading: "Tre Hovedmål",
        points: [
          "<strong>For studentene:</strong> Levere praktisk erfaring, CV-referanser og nettverk som sikrer rask overgang to arbeidslivet etter fullførte studier.",
          "<strong>For bedriftene:</strong> Tilby lavterskel, kostnadsfrie IT-, design- og økonomitjenester av høy kvalitet.",
          "<strong>For Høgskolen i Østfold (HiØ):</strong> Styrke utdanningenes relevans, redusere frafall og øke samarbeidet med det regionale næringslivet."
        ]
      },
      {
        heading: "Det Tverrfaglige Samspillet",
        text: "Selskapet er bygget rundt samspillet mellom tre avdelinger:",
        points: [
          "<strong>IT & Utvikling:</strong> Programmering, prototyping, nettsider, skyverktøy og digitalisering.",
          "<strong>UI/UX & Design:</strong> Visuell identitet, wireframes, klikkbare Figma-prototyper og brukertester.",
          "<strong>Økonomi & Forretningsutvikling:</strong> Flaskehalsanalyser, markedskartlegging, regnskapsrutiner og effektiviseringsplaner."
        ]
      }
    ]
  },
  {
    id: "organisasjon-og-drift",
    title: "Organisasjon & Drift",
    category: "Hovedsider",
    icon: "Building2",
    lead: "Modellen for kontinuitet, styring og deltakelse.",
    sections: [
      {
        heading: "Trelagsmodellen",
        text: "For å sikre at bedriften opprettholder kvalitet og kontinuitet når studenter uteksamineres, styres Syntax & Flow etter en trelagsmodell:",
        points: [
          "<strong>Styret:</strong> Består av HiØ-ledelse, dekaner, forelesere, lokale bedrifter og studenter. Ansvarlig for strategiske rammer.",
          "<strong>Mentorordningen:</strong> Forelesere og fagansvarlige ved HiØ som kvalitetssikrer faglige leveranser innen IT, design og økonomi.",
          "<strong>Studentledelsen:</strong> Daglig leder og fagansvarlige studenter (seniorer/masterstudenter) som leder de operative avdelingene."
        ]
      },
      {
        heading: "Drift vs. Utførelse: Organisatorisk oppsett",
        text: "For å unngå sårbarhet ved at studenter uteksamineres og slutter hvert semester, skiller vi skarpt mellom den stabile kjernen som driver organisasjonen og studentene som utfører arbeidet:"
      },
      {
        heading: "Den stabile kjernen (Drift av S&F)",
        table: {
          headers: ["Rolle", "Ansettelsesform", "Ansvarsområde"],
          rows: [
            ["<strong>Daglig leder</strong>", "Fast / lønnet (eller frivillig med stipend)", "Daglig drift, kundekontakt, strategi"],
            ["<strong>Fagansvarlige (IT, design, økonomi)</strong>", "Fast / lønnet (eller HiØ-ansatte på deltid)", "Faglig kvalitetssikring, veiledning, oppdragsvurdering"],
            ["<strong>Forelesere (HiØ-ansatte)</strong>", "Trukket inn ved behov for ekspertise", "Kvalitetssikring av komplekse leveranser, faglig rådgivning"],
            ["<strong>Styret</strong>", "Uavhengige medlemmer + HiØ-observatør", "Strategisk retning, tilsyn, nettverk"]
          ]
        }
      },
      {
        heading: "Studentene (Utfører oppdragene)",
        table: {
          headers: ["Rolle", "Tilknytning", "Ansvarsområde"],
          rows: [
            ["<strong>Teammedlem</strong>", "ITD35014 (10 stp)", "Utfører oppgaver i tverrfaglige team under veiledning"],
            ["<strong>Teamleder</strong>", "ITD35014 + erfarent medlem", "Koordinerer teamet, holder kundekontakt, rapporterer til fagansvarlig"]
          ]
        },
        text: "<br/><strong>Viktig prinsipp:</strong> Studentene <em>utfører</em> arbeidet, men <em>driver ikke</em> Syntax & Flow. Dette er ikke en studentforening, men et selvstendig organ in-house på HiØ. Dette sikrer at bedrifter forholder seg to en profesjonell, stabil organisasjon over tid. Målet er å gi studentene en klar og strukturert bane fra utdanning til fast ansettelse ved hjelp av portalen, der bedrifter kan følge dem og verifisere deres kompetanse."
      },
      {
        heading: "Deltakerordninger og rekruttering",
        text: "Studentene deltar i piloten gjennom det eksisterende faget ved HiØ:",
        table: {
          headers: ["Ordning", "Omfang", "Målgruppe", "Finansiering / Status"],
          rows: [
            ["ITD35014 Bedriftspraksis", "10 studiepoeng (valgfritt emne)*", "Bachelorstudenter (IT/Design/Økonomi, obligatorisk for Bachelor i kommunikasjon) som har bestått min. 90 stp", "Utdanningsstøtte (inngår i ordinær grad der studenten normalt tar 30 stp totalt per semester og får full støtte. Lånekassens minstekrav på 15 stp gjelder kun ved enkeltemnestudier)"],
            ["NAV-samarbeid", "Individuell tiltaksplan", "Personer utenfor arbeidsmarkedet med IT/Design/Økonomi-bakgrunn", "Utsettes til etter piloten (tidligst Fase 4). Tiltakspenger/dagpenger dekket av NAV."]
          ]
        }
      },
      {
        heading: "*Merknad vedrørende studiepoeng og Lånekassen",
        text: "ITD35014 Bedriftspraksis gir i dag 10 stp ved HiØ. Siden programstudenter normalt følger et fulltids bachelorløp (30 stp per semester), får de full basisstøtte fra Lånekassen der ITD35014 inngår som en del av graden. Lånekassens minstekrav på 15 stp for gradert basisstøtte gjelder kun dersom emnet tas som et frittstående enkeltemne utenom et studieprogram. Prosjektet fokuserer på å avklare rammene for enkeltemnestudenter vs. ordinære programstudenter for å sikre at alle deltakere har stabil finansiering."
      },
      {
        heading: "Tiltak for kunnskapsoverføring",
        points: [
          "<strong>Overlappsperioder:</strong> Ledende roller skal ha 3-6 måneders overlapp for grundig opplæring av arvtaker.",
          "<strong>Wiki & Dokumentasjon:</strong> Krav om at alle rutiner, kildekoder, Figma-filer og analyser lagres og dokumenteres systematisk (som denne portalen).",
          "<strong>Trainee-ordning:</strong> Første- og andreårsstudenter rekrutteres som juniorer for å vokse inn i tyngre roller senere."
        ]
      }
    ]
  },
  {
    id: "forretningsmodell-og-vpc",
    title: "Forretningsmodell & VPC",
    category: "Business Case",
    icon: "BarChart3",
    lead: "Hvordan Syntax & Flow skaper verdi gjennom en unik pro-bono modell.",
    sections: [
      {
        heading: "Win-Win-Win Forretningsmodell",
        text: "Siden tjenestene våre er helt gratis for bedrifter, er modellen bygget på ikke-monetær verdiutveksling:",
        points: [
          "<strong>Studenten får:</strong> Erfaring, nettverk, CV-referanser, attest og trygge praksisrammer.",
          "<strong>Bedriften får:</strong> Løst sine IT-, design- eller økonomiutfordringer uten direkte kostnader, samt anledning til å teste potensielle fremtidige ansatte.",
          "<strong>Høgskolen får:</strong> Økt studiekvalitet, mindre frafall, og tettere kobling til næringslivet."
        ]
      },
      {
        heading: "Samarbeidsavtalen & Betinget SLA",
        text: "Siden vi leverer gratis, inngår vi en samarbeidsavtale der kunden må kompensere med sin egen **tid**:",
        points: [
          "<strong>Standard avtale (Best effort):</strong> Ingen formell leveransegaranti (SLA). Vi gjør vårt beste, men kunden har ingen juridisk reklamasjonsrett.",
          "<strong>Betinget SLA:</strong> Hvis teamet har seniorer/masterstudenter eller NAV-kandidater med solid bakgrunn, kan det skriftlig avtales en begrenset SLA på kritiske leveranser.",
          "<strong>Kundeplikt:</strong> Kunden must delta på ukentlige statusmøter og brukertester, ellers avsluttes prosjektet umiddelbart."
        ]
      }
    ],
    vpcs: [
      {
        target: "Studentene",
        colorTheme: "student",
        description: "Value Proposition Canvas for studenter som søker broen fra teori til praksis.",
        longDescription: "Syntax & Flow gir studentene en <strong>betalbar bro mellom teori og praksis</strong>. I stedet for å bruke måneder på å søke jobb etter endt utdanning — og ofte måtte ta ufaglært arbeid for å få endene til å møtes — får studentene en strukturert overgang der de bygger erfaring mens de fremdeles har Lånekassen i ryggen.<br/><br/>Den største verdien ligger i at studentene slipper <strong>erfaringsparadokset</strong>: ingen vil ansette deg uten erfaring, men du får ikke erfaring uten å bli ansatt. Syntax & Flow bryter denne sirkelen ved å tilby reelle prosjekter for ekte kunder, med ekte krav og ekte resultater — men i et trygt læringsmiljø med veiledning fra fagansatte ved HiØ.<br/><br/>Gjennom tverrfaglige team lærer studentene å samarbeide på tvers av fagdisipliner, slik arbeidslivet faktisk fungerer. De får en dokumenterbar portefølje de kan vise frem på jobbintervjuer, referanser fra faktiske oppdragsgivere, og et nettverk i lokalt næringsliv — alt før de i det hele tatt begynner å søke jobb.<br/><br/>For studenter som sliter med å komme inn på arbeidsmarkedet, inkludert de som står utenfor via NAV, gir Syntax & Flow en verdig og strukturert vei tilbake.",
        customerProfile: {
          jobs: [
            "Bestå studiene: Fullføre sin bachelor- eller mastergrad ved HiØ.",
            "Bygge karriere: Etablere en attraktiv CV og en profesjonell portefølje basert på reelle prosjekter.",
            "Nettverksbygging: Skape kontakter i det lokale næringslivet for fremtidige jobbmuligheter.",
            "Praktisk trening: Utvikle reelle ferdigheter og tverrfaglig samarbeid (IT, design, økonomi) i praksis."
          ],
          pains: [
            "Erfaringsparadokset: Krav om relevant arbeidserfaring for nybegynnerstillinger.",
            "Økonomisk press: Behovet for inntekt gjør at man må ta irrelevante strøjobber.",
            "Teoretisk overbelastning: Opplevelse av at teorien på høgskolen er for fjern fra praktisk hverdag.",
            "Isolasjon på studiet: Liten erfaring med å jobbe i tverrfaglige team på tvers av avdelinger."
          ],
          gains: [
            "En solid og dokumenterbar referanse på CV-en etter endt utdanning.",
            "Økt selvtillit og mestringsfølelse i møte med eksterne kunder.",
            "En myk og støttet overgang fra student til fast ansatt i næringslivet."
          ]
        },
        valueMap: {
          products: [
            "Deltakelse i faget Bedriftspraksis gjennom Syntax & Flow.",
            "Arbeid i et tverrfaglig in-house konsulentmiljø med IT, design og økonomi samlet under ett tak."
          ],
          painRelievers: [
            "Økonomisk forutsigbarhet: Finansiering via Lånekassen (støtte/lån/stipend) gjør at studenten kan jobbe med relevant praksis.",
            "Trygg læringssone: Veiledning og kvalitetssikring fra faglige mentorer fjerner redselen for å gjøre kritiske feil.",
            "Erfaringsgaranti: Direkte tilgang på reelle prosjekter som fyller erfaringsgapet."
          ],
          gainCreators: [
            "Reell porteføljebygging: Utvikling av nettsider, MVP-er, forretningsrapporter og profildesign.",
            "Tverrfaglig samarbeid: Erfaring med hvordan utviklere, designere og økonomer samarbeider i arbeidslivet."
          ]
        }
      },
      {
        target: "Høgskolen i Østfold (HiØ)",
        colorTheme: "hio",
        description: "Value Proposition Canvas som viser hvordan Syntax & Flow støtter HiØs samfunnsrolle og studiekvalitet.",
        longDescription: "HiØ får et <strong>konkret verktøy for å øke studiekvaliteten og kandidatproduksjonen</strong>. Syntax & Flow løser flere av høgskolens strategiske utfordringer samtidig:<br/><br/>For det første <strong>reduseres frafall på slutten av studieløpet</strong>. Når studentene vet at emnet Bedriftspraksis gir dem en direkte inngang til arbeidslivet, øker motivasjonen for å fullføre graden. Hver fullført grad utløser resultatbasert finansiering fra Kunnskapsdepartementet.<br/><br/>For det andre får HiØ <strong>gratis markedsføring</strong> gjennom NAV-sporet. Når høgskolen aktivt hjelper nyutdannede og personer utenfor arbeidsmarkedet inn i jobb, skaper det positive oppslag i lokale medier og styrker HiØs omdømme som en samfunnsansvarlig institusjon.<br/><br/>For det tredje <strong>styrkes båndene til lokalt næringsliv</strong>. Gjennom Syntax & Flow får HiØ eine kanal for samarbeid med bedrifter i Østfold som ellers ikke ville hatt kontakt med høgskolen. Dette gir muligheter for fremtidige forskningssamarbeid, gjesteforelesere og praksisplasser.<br/><br/>For det fjerde avlaster Syntax & Flow <strong>HiØs administrasjon</strong>. Studentledelsen håndterer kundekontakt, prosjektkoordinering og daglig drift, mens høgskolens ansatte kun bidrar som faglige mentorer. Siden Syntax & Flow organiseres som en juridisk separat enhet, unngår HiØ også den juridiske og økonomiske risikoen knyttet til studentenes leveranser.",
        customerProfile: {
          jobs: [
            "Levere studiekvalitet: Tilby utdanninger som gjør kandidatene attraktive på arbeidsmarkedet.",
            "Styrke omdømmet: Fremstå som en moderne, praksisnær og fremtidsrettet utdanningsinstitusjon.",
            "Sikre gjennomstrømming: Sikre at studentene fullfører gradene innen normert tid.",
            "Oppfylle samfunnsmandatet: Knytte tettere bånd til det regionale samfunns- og næringslivet."
          ],
          pains: [
            "Frafall på slutten av studieløpet: Lavere resultatbasert finansiering til høgskolen.",
            "Administrativ tidsbruk: Store ressurser kreves for å opprette og følge opp eksterne praksisplasser.",
            "Konkurranse om søkere: Kamp mot andre studiesteder om de mest motiverte søkerne.",
            "Manglende tverrfaglighet: Utfordringer med å koble IT, design og økonomistudier sammen i praksis."
          ],
          gains: [
            "Økt kandidatproduksjon (flere fullførte grader) som gir økte overføringer fra Kunnskapsdepartementet.",
            "Høyere score på Studiebarometeret og økt studenttilfredshet.",
            "Tydelig regional posisjon for innovasjon og samfunnsutvikling i regionen."
          ]
        },
        valueMap: {
          products: [
            "Ferdig driftsmodell og rammeverk for faget Bedriftspraksis administrert av Syntax & Flow.",
            "Inkludering av NAV-deltakere i et tverrfaglig innovasjonsmiljø på campus."
          ],
          painRelievers: [
            "Insentiv for fullføring: Krav om bestått bachelor/master-grad for å delta i praksisåret hos oss.",
            "Administrativ avlastning: Studentledelsen in Syntax & Flow håndterer prosjektene og kundekontakten.",
            "Juridisk separasjon: Organisering utenfor HiØs kjernesystem beskytter høgskolen mot risiko."
          ],
          gainCreators: [
            "Gratis Markedsføring: NAV-praksisplasser viser samfunnsansvar og evne til å hjelpe folk i arbeid.",
            "Unikt trekkplaster: Gjør HiØ attraktivt ved å tilby et trygt og finansiert praksisår etter graden."
          ]
        }
      },
      {
        target: "Næringslivet (Bedriftene)",
        colorTheme: "business",
        description: "Value Proposition Canvas for lokale SMBer og oppstartsbedrifter som søker lavrisiko digitalisering.",
        longDescription: "Næringslivet får tilgang til <strong>tverrfaglig kompetanse uten økonomisk risiko</strong>. For en liten bedrift eller en gründer i oppstartsfasen er kommersielle konsulenttjenester ofte uoppnåelige med timepriser på 1 200–2 000 kr. Syntax & Flow fjerner denne barrieren fullstendig.<br/><br/>Den største verdien for bedriftene er likevel <strong>rekrutteringskanalen</strong>. Å ansette nyutdannede er en risiko: en CV og et 45-minutters intervju sier lite om hvordan en person faktisk fungerer i jobb. Gjennom Syntax & Flow får bedriftene en 3–6 måneders testperiode der de ser kandidaten i aksjon før de eventuelt tilbyr fast stilling. Dette er en tryggere og mer kostnadseffektiv rekrutteringsprosess enn tradisjonell headhunting.<br/><br/>Bedriftene slipper også å bruke tid på å finne og følge opp studenter individuelt. Syntax & Flow leverer et ferdig organisert team med prosjektledelse innebygd. Kunden stiller kun med sin egen tid til ukentlige statusmøter og tilbakemeldinger.<br/><br/>I tillegg får bedriftene eine <strong>positiv omdømmefordel</strong> ved å støtte et utdanningstiltak ved HiØ. De posisjonerer seg som en samfunnsansvarlig aktør som bidrar til lokal kompetansebygging.",
        customerProfile: {
          jobs: [
            "Løse operative oppgaver: Nettsider, designprofiler, eller markeds- og forretningsanalyser.",
            "Effektivisere drift: Lokalisere flaskehalser og utarbeide planer for digitalisering/automatisering.",
            "Talentrekruttering: Finne og ansette dyktige kandidater innen IT, design og økonomi tidlig."
          ],
          pains: [
            "Risiko for feilrekruttering: Å ansette feil person er ekstremt kostbart og tidkrevende.",
            "Høye konsulentkostnader: Kommersielle konsulenthus tar høye priser som mindre SMBer ikke har råd til.",
            "Vanskelig å evaluere nyutdannede: Karakterer gir et ufullstendig bilde av praktiske ferdigheter."
          ],
          gains: [
            "Tilgang til tverrfaglig digital kompetanse (IT, design, økonomi) tilpasset bedriftens behov.",
            "Sikkerhet i ansettelser gjennom en lengre observasjonsperiode (Try-before-you-buy).",
            "Posisjonering som en samfunnsansvarlig aktør som støtter lokale studenter."
          ]
        },
        valueMap: {
          products: [
            "Tverrfaglige konsulenttjenester levert av studenter under faglig mentorskap fra HiØ.",
            "Mulighet for en strukturert test-run av potensielle ansatte på reelle prosjekter."
          ],
          painRelievers: [
            "Risikofri test-run: Bedriftene ser kandidatene i aksjon før ansettelse uten lønnskostnad under testperioden.",
            "Ingen økonomisk barriere: Tjenestene leveres gratis mot at bedriften investerer sin egen tid.",
            "Kvalitetssikring: Faglig mentor fra HiØ overvåker leveransene for å sikre standarden."
          ],
          gainCreators: [
            "Try-before-you-buy: Modellen gjør bedriftene trygge før de tilbyr fast stilling.",
            "Gratis verdiøkning: Kritiske digitaliseringsoppgaver utført gratis (med mulighet for betinget SLA)."
          ]
        }
      }
    ]
  },
  {
    id: "scope",
    title: "Scope & Omfang",
    category: "Business Case",
    icon: "Crosshair",
    lead: "Hva som er definert som IN scope og OUT of scope for Syntax & Flow for å sikre minst mulig motstand.",
    sections: [
      {
        heading: "📄 Detaljert bakgrunnsdokument (scope_minst_motstand.md)",
        isCollapsible: true,
        text: "Dette er det fulle innholdet fra bakgrunnsdokumentet <em>scope_minst_motstand.md</em> som definerer premissene for piloten:<br/><br/>" +
          "<h3>1. Organisatorisk struktur — et skille mellom drift og utførelse</h3>" +
          "Syntax & Flow drives av en stabil kjerne, mens studentene utfører oppdragene. Dette er et selvstendig organ in-house på HiØ, ikke en studentforening.<br/><br/>" +
          "<strong>Den stabile kjernen:</strong>" +
          "<div class='table-container'><table class='wiki-table'><thead><tr><th>Rolle</th><th>Tilknytning</th><th>Ansvarsområde</th></tr></thead><tbody>" +
          "<tr><td>Daglig leder</td><td>Fast / stipendiat</td><td>Daglig drift, kundekontakt, strategi</td></tr>" +
          "<tr><td>Fagansvarlige</td><td>Lønnet / fagansatte</td><td>Faglig kvalitetssikring og veiledning</td></tr>" +
          "<tr><td>Forelesere</td><td>Trukket inn ved behov</td><td>Kvalitetssikring av komplekse leveranser</td></tr>" +
          "<tr><td>Styret</td><td>HiØ + uavhengige</td><td>Strategisk retning, tilsyn</td></tr>" +
          "</tbody></table></div>" +
          "<strong>Studentene (utfører oppdrag):</strong>" +
          "<div class='table-container'><table class='wiki-table'><thead><tr><th>Rolle</th><th>Tilknytning</th><th>Ansvarsområde</th></tr></thead><tbody>" +
          "<tr><td>Teammedlem</td><td>ITD35014 (10 stp)</td><td>Utfører oppgaver i tverrfaglige team</td></tr>" +
          "<tr><td>Teamleder</td><td>ITD35014 + erfaren</td><td>Koordinerer teamet og kundekontakt</td></tr>" +
          "</tbody></table></div>" +
          "<h3>2. Utgangspunkt: Eksisterende emne ITD35014</h3>" +
          "HiØ har allerede emnet ITD35014 Bedriftspraksis (10 stp) under Fakultet for IT, ingeniørfag og økonomi (IIO). S&Fs rolle er å skaffe praksisplasser, organisere tverrfaglige team og sørge for veiledning/kvalitetssikring. Dette løser studentenes problem med å måtte skaffe praksisplass selv.<br/><br/>" +
          "<h3>3. Tjenester & Leveranser (Hva leveres)</h3>" +
          "We skiller mellom to spor:<br/>" +
          "• <strong>Spor A: Eksterne oppdrag (Kortsiktige):</strong> Enkle nettsider, logo/visuell profil, markedsanalyse, forretningsmodellering (BMC) for mikrovirksomheter.<br/>" +
          "• <strong>Spor B: Interne evighetsprosjekter (Langsiktige):</strong> Tverrfaglige systemer (f.eks. internt ERP-system eller studentportal) som går over flere semestre med overlevering mellom kullene.<br/><br/>" +
          "<strong>Hva vi bevisst UNNGÅR i starten:</strong> Applikasjoner med sensitive databaser/personopplysninger, IT-sikkerhetsrevisjon, ekstern regnskapsføring for andre, og oppdrag som krever SLA.<br/><br/>" +
          "<h3>4. Kundekriterier (Hvem leverer vi til)</h3>" +
          "For å unngå statsstøtteproblematikk og konkurranseklager leverer vi kun til:<br/>" +
          "1. Interne avdelinger ved HiØ<br/>" +
          "2. Ideelle organisasjoner, lag og foreninger<br/>" +
          "3. Privatpersoner (ENK uten ansatte) og gründere i oppstartsfasen<br/>" +
          "4. Mikrovirksomheter (1–5 ansatte) som bekrefter at de ikke har budsjett til kommersielle aktører.<br/><br/>" +
          "<h3>5. Deltakelse & Lånekassen</h3>" +
          "• <strong>ITD35014 Bedriftspraksis (10 stp):</strong> Dagens eneste studieløp. Arbeidstid ca. 12–15 timer/uke. Siden programstudenter normalt tar 30 stp totalt per semester (hvor ITD35014 inngår), beholder de full basisstøtte fra Lånekassen. Lånekassens minstekrav på 15 stp gjelder kun dersom emnet tas som et frittstående enkeltemne utenom et studieprogram.<br/>" +
          "• <strong>NAV-samarbeid:</strong> Utsettes til etter pilotfasen (tidligst Fase 4).<br/>" +
          "• <strong>Langsiktig mål:</strong> Avklare rammene for enkeltemnestudenter vs. programstudenter for å sikre stabile rammer, samt utrede eventuell fremtidig utvidelse av ITD35014.<br/><br/>" +
          "<h3>6. Portalen som verifisert referansebase</h3>" +
          "Portalen løser bedriftenes problem med informasjonsasymmetri ved rekruttering. I stedet for en selvrapportert CV, gir portalen dokumentert bevis på en kandidats faktiske arbeidsprestasjon over 3–6 måneder basert på rubric-vurderinger fra kunder og mentorer.<br/><br/>" +
          "<strong>Juridiske rammer:</strong> Fullstendig samtykkebasert (opt-in), strukturerte vurderingskriterier uten negativ fritekst, fullt innsyn og sletterett for studenten, samt begrenset tilgang for godkjente bedrifter.<br/><br/>" +
          "<h3>7. Organisasjon, juss & forvaltning</h3>" +
          "• <strong>Organisasjonsform:</strong> AS eid av ideell stiftelse for ansvarsbegrensning og ryddig statsstøtteskille.<br/>" +
          "• <strong>Samarbeid med HiØ:</strong> Betale markedspris for lokaler/mentorer (eller definere det som ordinær undervisning) for å unngå ulovlig offentlig støtte.<br/>" +
          "• <strong>Kundeavtale:</strong> Standard 'as-is'-avtale med ansvarsfraskrivelse, begrenset opptil 10 000 kr.<br/>" +
          "• <strong>Støtteregister:</strong> Føre de minimis-register for alle kunder (maks 300 000 EUR over 3 år).<br/><br/>" +
          "<h3>8. Suksesskriterier for piloten</h3>" +
          "1. Ett team (3–5 studenter) gjennomfører ett prosjekt for én kunde (eller et internt evighetsprosjekt er påbegynt).<br/>" +
          "2. Prosjektet fullføres innen 8–12 uker med god kundetilfredshet (NPS > 7).<br/>" +
          "3. Godt rapportert læringsutbytte (> 4/5) og ingen juridiske klager eller hendelser.<br/>" +
          "4. Alt er grundig dokumentert (timer, de minimis, vurderinger)."
      },
      {
        heading: "1. Modell med to parallelle spor",
        text: "For å maksimere studentenes læringsutbytte og sikre drift gjennom hele året, opererer Syntax & Flow med to spor for prosjekter:",
        points: [
          "<strong>Spor A: Eksterne oppdrag (Kortsiktige):</strong> Enkle nettsider, profiler og markedsrapporter for lokale mikrovirksomheter, lag og foreninger. Disse avsluttes og overleveres innenfor ett enkelt semester.",
          "<strong>Spor B: Interne evighetsprosjekter (Langsiktige):</strong> Større tverrfaglige IT- og analysesystemer (f.eks. integrert timeføringsportal, ERP-system eller ressursplanlegger for campus). Disse går over flere semestre, der nye studentkull overtar og bygger videre på det forrige kullets arbeid."
        ]
      },
      {
        heading: "2. Overordnet Scope",
        table: {
          headers: ["Dimensjon", "In Scope", "Out of Scope"],
          rows: [
            ["<strong>Formål</strong>", "Være en selvstendig organisasjon in-house på HiØ som gir studenter en klar bane fra utdanning til fast ansatt, gjennom eksterne oppdrag og interne evighetsprosjekter", "Være et kommersielt konsulentbyrå som konkurrerer med etablerte aktører"],
            ["<strong>Drift av S&F</strong>", "En stabil kjerne (daglig leder, fagansvarlige, forelesere ved behov) som sikrer kontinuitet og kvalitet uavhengig av studentutskifting", "Studentene driver organisasjonen"],
            ["<strong>Studentens rolle</strong>", "Utfører oppdragene i tverrfaglige team under veiledning — mottaker av tilbudet", "Må selv skaffe praksisplass hos eksterne bedrifter"],
            ["<strong>Foreleserens rolle</strong>", "Trukket inn ved behov for faglig ekspertise og kvalitetssikring", "Daglig drift eller detaljstyring av studentene"],
            ["<strong>Sted</strong>", "In-house på HiØ med tilgang til foreleseres ekspertise", "Fysisk utenfor campus uten faglig oppfølging"]
          ]
        }
      },
      {
        heading: "3. Tjenester Scope",
        table: {
          headers: ["Tjenesteområde", "In Scope", "Out of Scope"],
          rows: [
            ["<strong>Eksterne oppdrag</strong>", "Enkle nettsider, landingssider, logo/visuell profil, markedsanalyser og forretningsmodellering (BMC)", "Avanserte apper med sensitive databaser, IT-sikkerhetsrevisjon, systemintegrasjoner (ERP/CRM)"],
            ["<strong>Interne prosjekter</strong>", "Langsiktige evighetsprosjekter som går over flere semestre med fokus på systemarkitektur, database og API", "Kortsiktige ad-hoc-oppgaver uten dokumentasjon eller langsiktig verdi"],
            ["<strong>Kvalitetssikring</strong>", "Veiledning og godkjenning av leveranser av faglige mentorer (HiØ-forelesere) før overlevering", "Levere løsninger direkte til kunden uten faglig kvalitetssikring"],
            ["<strong>Portefølje</strong>", "Dokumentasjon av prosjektet og publisering av anonymiserte case-studier på portalen (med samtykke)", "Publisere detaljert kode eller bedriftsdata uten skriftlig samtykke"]
          ]
        }
      },
      {
        heading: "4. Kunder & Oppdragsgivere",
        table: {
          headers: ["Kunde-type", "In Scope", "Out of Scope"],
          rows: [
            ["<strong>Prioritet 1 & 2</strong>", "Interne avdelinger ved Høgskolen i Østfold, samt lokale ideelle organisasjoner, idrettslag og frivillighet", "Bedrifter med mer enn 5 ansatte eller med egne utviklingsbudsjetter"],
            ["<strong>Prioritet 3 & 4</strong>", "Etablerere/privatpersoner (ENK uten ansatte) og lokale mikrovirksomheter (1-5 ansatte) uten budsjett", "Offentlige anbudskonkurranser og etablerte selskaper med kommersiell kapasitet"],
            ["<strong>Forpliktelser</strong>", "Kunden forplikter seg til aktiv deltakelse og ukentlige statusmøter med teamet", "Kommersielle betalingsavtaler og leveransegartanti (SLA)"]
          ]
        }
      },
      {
        heading: "5. Studenter & Rekruttering",
        table: {
          headers: ["Aspekt", "In Scope", "Out of Scope"],
          rows: [
            ["<strong>Studieemne</strong>", "Bruke det eksisterende emnet ITD35014 Bedriftspraksis (10 stp) som formell ramme", "Søke om å opprette helt nye emner før piloten er fullført"],
            ["<strong>Lånekassestøtte</strong>", "Utvide ITD35014 til 15–30 stp på sikt for å sikre Lånekassestøtte", "Kombinere med urealistiske 5 stp-emner som ikke finnes ved HiØ"],
            ["<strong>Deltakelse i dag</strong>", "Tilby ITD35014 (10 stp) som eneste alternativ for studenter i pilotfasen", "Forvente Lånekassestøtte for 10 stp enkeltemne"],
            ["<strong>NAV-samarbeid</strong>", "Utsette NAV-samarbeidet til etter pilotfasen (tidligst Fase 4)", "Rekruttere NAV-deltakere uten separate avtaler fra dag én"]
          ]
        }
      },
      {
        heading: "6. Evighetsprosjekter (Detaljert)",
        table: {
          headers: ["Fagdisiplin", "In Scope-arbeid", "Out of Scope-arbeid"],
          rows: [
            ["<strong>UI/UX & Design</strong>", "Brukerreiser, klikkbare Figma-prototyper, designsystemer og brukervennlighetstesting", "Ad-hoc grafisk produksjon uten forankring i brukerinnsikt"],
            ["<strong>Økonomi</strong>", "Budsjettering, prosjektkalkyler, kostnadsanalyser og gevinstrealiseringsplaner for systemene", "Ekstern regnskapsføring eller regnskapsrevisjon for andre bedrifter"],
            ["<strong>Dataingeniør</strong>", "Systemarkitektur, databaseoppsett (Supabase/Postgres), backend og API-er", "Systemintegrasjon mot eksterne kommersielle databaser med personopplysninger"],
            ["<strong>Informasjonssystemer</strong>", "Sikkerhetstesting, kvalitetssikring, integrasjonstester og intern IT-revisjon av systemene", "Utføre IT-sikkerhetsrevisjon for eksterne bedrifter"]
          ]
        }
      },
      {
        heading: "7. Suksesskriterier for piloten",
        points: [
          "Ett tverrfaglig team (3-5 studenter) gjennomfører enten ett eksternt prosjekt for en mikrobedrift eller starter et internt evighetsprosjekt.",
          "Prosjektet fullføres innenfor tidsrammen på 8–12 uker.",
          "Kunden rapporterer høy tilfredshet (NPS > 7), eller intern faglig oppdragsgiver godkjenner evighetsprosjektets leveranse.",
          "Studentene rapporterer høyt læringsutbytte (> 4/5).",
          "Null klager fra konkurrenter eller juridiske hendelser knyttet til oppstarten.",
          "<strong>Timeføring:</strong> Hver student må dokumentere minimum 180 arbeidstimer (krav fra ITD35014). Timene føres i et felles system (f.eks. Google Sheets eller et enkelt verktøy) og signeres av mentor. Dette er også grunnlaget for Lånekassen-dokumentasjon og vurdering (Bestått/Ikke bestått).",
          "<strong>Overleveringsplan:</strong> Et dokument som beskriver hva som overleveres til neste kull eller kunde ved prosjektslutt: kildekode (med repo-tilgang), dokumentasjon (arkitektur, brukerveiledning), passord og tilganger, Figma-filer, åpne punkter og status. Uten overleveringsplan stopper evighetsprosjektet opp ved semesterovergang.",
          "<strong>Støtteregister:</strong> En løpende logg over hver kunde og hvilken markedsverdi tjenestene har hatt. Dette er kritisk for å holde seg under de minimis-grensen (300 000 EUR over 3 år per kunde) og unngå ESA-tilbakebetalingskrav. Registeret føres av økonomistudentene og kontrolleres av daglig leder."
        ]
      }
    ]
  },
  {
    id: "tjenester-og-leveranser",
    title: "Tjenester & Leveranser",
    category: "Business Case",
    icon: "Briefcase",
    lead: "Vår faglige katalog og de konkrete leveransene vi tilbyr.",
    sections: [
      {
        heading: "Faglig Tjenestekatalog",
        text: "Syntax & Flow leverer tjenester fordelt på tre kjerneområder:",
        points: [
          "<strong>Økonomi & Forretning:</strong> Kartlegging av forretningsmodell, flaskehalsanalyse, regnskapsoppsett (Fiken/Tripletex), og markedsanalyser.",
          "<strong>UI/UX & Design:</strong> Visuell profil (logo, farger), wireframes, klikkbare Figma-prototyper og brukervennlighetstester.",
          "<strong>IT & Webutvikling:</strong> Nettsider/landingssider (React, Next.js, WordPress), MVP-prototyping og digitalisering/CRM-oppsett."
        ]
      },
      {
        heading: "Syntax & Flow Portalen",
        text: "Alle prosjekter som gjennomføres av Syntax & Flow må dokumenteres og publiseres digitalt på vår nettportal. Dette fungerer som:",
        points: [
          "<strong>Kompetanse-showcase:</strong> En offentlig portefølje der studentene viser frem kildekoden, Figma-skissene og de økonomiske analysene de har utført.",
          "<strong>Passiv markedsføring:</strong> Potensielle kunder ser hva vi har bygget gratis for andre, noe som tiltrekker nye søkere til ordningen."
        ]
      },
      {
        heading: "Samarbeidsavtalen & Betinget SLA",
        text: "Siden vi leverer gratis, inngår vi en samarbeidsavtale der kunden må kompensere med sin egen **tid**:",
        points: [
          "<strong>Standard avtale (Best effort):</strong> Ingen formell leveransegaranti (SLA). Vi gjør vårt beste, men kunden har ingen juridisk reklamasjonsrett.",
          "<strong>Betinget SLA:</strong> Hvis teamet har seniorer/masterstudenter eller NAV-kandidater med solid bakgrunn, kan det skriftlig avtales en begrenset SLA på kritiske leveranser.",
          "<strong>Kundeplikt:</strong> Kunden må delta på ukentlige statusmøter og brukertester, ellers avsluttes prosjektet umiddelbart."
        ]
      }
    ]
  },
  {
    id: "markeds-og-konkurranseanalyse",
    title: "Markeds & Konkurranse",
    category: "Business Case",
    icon: "TrendingUp",
    lead: "Analyse av markedsbehovet i Østfold, våre målgrupper, konkurrenter og posisjonering.",
    sections: [
      {
        heading: "1. Behovsanalyse (Hvorfor trengs dette?)",
        text: "Det eksisterer et gap i markedet som Syntax & Flow er posisjonert til å fylle:",
        points: [
          "<strong>Studentenes behov:</strong> Studenter mangler relevant erfaring (erfaringsparadokset) og tverrfaglig trening. Studiene skiller ofte IT, design og økonomi, mens arbeidslivet krever at de jobber sammen.",
          "<strong>Næringslivets behov:</strong> Mindre SMBer og gründere i Østfold har ofte ikke råd til kommersielle konsulenter (timepriser på 1200-2000 kr), og de sliter med å rekruttere og holde på unge HiØ-talenter som flytter til Oslo."
        ]
      },
      {
        heading: "2. Målgrupper",
        points: [
          "<strong>Primærmarked:</strong> Lokale gründere, oppstartsbedrifter, og mikrovirksomheter (1-5 ansatte) i Halden, Fredrikstad, Sarpsborg og Moss.",
          "<strong>Frivillighet:</strong> Lokale idrettslag, foreninger og frivilligsentraler med digitaliseringsbehov.",
          "<strong>Internt marked:</strong> Fakulteter og administrative avdelinger på HiØ som trenger enkle nettsider eller analyser."
        ]
      },
      {
        heading: "3. Konkurranseanalyse",
        text: "Sammenligning av Syntax & Flow mot andre eksisterende alternativer:",
        table: {
          headers: ["Alternativ", "Fordeler", "Ulemper", "S&Fs posisjon"],
          rows: [
            ["<strong>Vanlig praksis (Internship)</strong>", "Etablerte rammer, gir studiepoeng", "Begrenset antall plasser, lite tverrfaglighet, kunden må selv veilede", "Vi leverer ferdige tverrfaglige team og tar oss av prosjektledelsen"],
            ["<strong>Frilansarbeid</strong>", "Studenten tjener penger direkte, fleksibelt", "Studenten står alene uten veiledning, høy risiko for prosjekthavari", "Vi tilbyr et trygt rammeverk med faglige mentorer (forelesere)"],
            ["<strong>Kommersielle byråer</strong>", "Svært høy kvalitet, erfarne konsulenter", "Ekstremt dyrt for småbedrifter og oppstartsbedrifter", "Vi leverer gratis til de som uansett ikke har råd til profesjonelle byråer"]
          ]
        }
      },
      {
        heading: "4. Unik Posisjonering",
        text: "Syntax & Flow posisjonerer seg i skjæringspunktet mellom <strong>akademisk kvalitet</strong> (støttet av HiØ-mentorer) og <strong>praktisk utførelse</strong> til null kontantpris. Vi selger ikke bare en tjeneste, men et samfunnsbidrag der kunden er med på å bygge fremtidens arbeidstakere."
      }
    ]
  },
  {
    id: "strategi-og-utforelse",
    title: "Strategi & Utførelse",
    category: "Business Case",
    icon: "Workflow",
    lead: "Strategi for lansering, rekruttering av studenter og bedrifter, samt vår prosjektmodell.",
    sections: [
      {
        heading: "1. Go-To-Market (GTM) & Rekruttering",
        points: [
          "<strong>Studentrekruttering:</strong> Markedsføring via stands på campus, presentasjoner i avgangsklasser, anbefalinger fra forelesere, og studentorganisasjoner. Opptakskravet er bestått minimum 90 stp for å sikre faglig modenhet.",
          "<strong>Bedriftsrekruttering:</strong> Pitching via lokale gründerinkubatorer (Blender Collective, Smart Innovation Norway) og frokostmøter i de lokale næringsforeningene i Halden og Fredrikstad.",
          "<strong>Referanse-loop:</strong> Portalen viser frem suksessfulle case-studier (kildekode, designskisser, analyser) som passivt tiltrekker seg nye kunder."
        ]
      },
      {
        heading: "2. De 5 Prosjektfasene",
        text: "Siden vi som hovedregel ikke garanterer leveranser, fokuserer modellen på strukturert læring fremfor leveransepress:",
        points: [
          "<strong>Fase 1: Avklaring & Kontrakt (Uke 1-2):</strong> Avklare prosjektets omfang og kundens tidsforpliktelse. Det signeres en standardavtale med ansvarsfraskrivelse.",
          "<strong>Fase 2: Innsikt & Design (Uke 3-6):</strong> Økonomistudenter kartlegger forretningsmodellen og lokaliserer flaskehalser. Designstudenter lager brukerreiser og prototyper i Figma basert på denne innsikten.",
          "<strong>Fase 3: Utvikling & Implementering (Uke 7-12):</strong> IT-studenter programmerer nettsiden/MVPen basert på Figma-designet. Økonomistudenter implementerer skyverktøy (CRM/regnskap) eller lager prosessforbedringsplaner.",
          "<strong>Fase 4: Kvalitetssikring (QA) & Testing (Uke 13-14):</strong> Gjennomgang av kildekode og design med faglig mentor (HiØ-foreleser) for endelig godkjenning.",
          "<strong>Fase 5: Overlevering & Portefølje (Uke 15-16):</strong> Kunden mottar løsningen. Prosjektet dokumenteres og publiseres (med samtykke) på portalen."
        ]
      }
    ]
  },
  {
    id: "risiko-og-kostnadsanalyse",
    title: "Risiko & Kostnader",
    category: "Business Case",
    icon: "Coins",
    lead: "Analyse av økonomiske rammer og identifisering av operasjonelle risikoer ved drift.",
    sections: [
      {
        heading: "1. Kostnadsanalyse & Budsjett",
        text: "Siden Syntax & Flow er et gratis tilbud, holdes driftskostnadene ekstremt lave og dekkes av HiØ-innovasjonsmidler, samskipnaden (SiØ) eller lokale stiftelser.",
        table: {
          headers: ["Kostnadstype", "Estimerte kostnader", "Fase", "Merknad"],
          rows: [
            ["Registrering i Brønnøysund", "Ca. 2 000 kr (engangs)", "Fase 2", "Registrering som ideell forening/stiftelse"],
            ["Domene og hosting av portalen", "Ca. 1 000 kr/år", "Fase 4", "Hosting for referansebasen"],
            ["Profilering på campus (stands/rollups)", "Ca. 3 000 kr (engangs)", "Fase 2", "Rekrutteringsmateriell"],
            ["Programvarelisenser (Figma, GitHub, Slack)", "Ca. 10 000 - 15 000 kr/år", "Fase 3+", "Søkes om gratis/utdanningslisenser"],
            ["Regnskaps- og banksystem", "Ca. 3 000 kr/år", "Fase 3+", "Drift av stiftelsen"],
            ["<strong>Totalt behov</strong>", "<strong>~15 000 - 20 000 kr/år</strong>", "Løpende", "Dekkes over HiØs budsjett for Bedriftspraksis"]
          ]
        }
      },
      {
        heading: "2. Operasjonell Risikomatrise",
        text: "Risikoverdi (R) = Sannsynlighet (S) × Konsekvens (K) på en skala fra 1 til 5.",
        table: {
          headers: ["Scenario", "S (1-5)", "K (1-5)", "R (S×K)", "Forebyggende tiltak (Mitigation)"],
          rows: [
            ["<strong>Studenter faller fra underveis</strong>", "4", "2", "8", "Lav konsekvens pga. standardavtale: Kunden er informert om at det ikke foreligger noen leveransegaranti."],
            ["<strong>Kunden engasjerer seg ikke</strong>", "3", "4", "12", "Kontraktsfestet tidsbruk: Dersom kunden uteblir fra ukentlige møter, avsluttes prosjektet umiddelbart."],
            ["<strong>Brudd på Betinget SLA</strong>", "2", "4", "8", "Vi inngår KUN betinget SLA etter grundig screening og sikrer at en faglig mentor følger prosjektet tett."],
            ["<strong>Leveransen holder ikke god kvalitet</strong>", "2", "3", "6", "Faglig mentor (HiØ-foreleser) går gjennom og godkjenner sluttproduktet før det kan overleveres."],
            ["<strong>Juridisk ansvar for feil i kode/råd</strong>", "1", "4", "4", "Tydelig ansvarsfraskrivelse i kontrakten som signeres før oppstart. Tjenestene leveres 'som de er'."]
          ]
        }
      }
    ]
  },
  {
    id: "gtm-og-lansering",
    title: "GTM & Lansering",
    category: "GTM & Utførelse",
    icon: "Rocket",
    lead: "Go-To-Market strategien for Syntax & Flow.",
    sections: [
      {
        heading: "Rekruttering av Studenter",
        text: "For å tiltrekke oss motiverte deltakere bruker vi følgende kanaler på HiØ:",
        points: [
          "<strong>Fysisk tilstedeværelse:</strong> Stands under studiestart og presentasjoner i klasserom for avgangsstudenter.",
          "<strong>Samarbeid med forelesere:</strong> Forelesere anbefaler Syntax & Flow som praksisplass for studenter i relevante fag.",
          "<strong>Krav til progresjon:</strong> Kun studenter som har bestått alle fag og er i sitt siste år (eller nyutdannede) kvalifiseres."
        ]
      },
      {
        heading: "Rekruttering av Bedrifter",
        text: "Bedrifter og kunder tiltrekkes gjennom lave barrierer og strategiske partnerskap:",
        points: [
          "<strong>Inkubatornettverk:</strong> Vi pitcher ordningen direkte til gründere i Blender Collective og Smart Innovation Norway.",
          "<strong>Næringsforeninger:</strong> Presentasjoner på frokostmøter i Halden og Fredrikstad næringsforening.",
          "<strong>Ingen økonomisk risiko:</strong> Markedsføringen fokuserer på at tjenestene er gratis, mot at de investerer tid i oppfølging av studentene."
        ]
      }
    ]
  },
  {
    id: "prosjektplan",
    title: "Prosjektplan",
    category: "GTM & Utførelse",
    icon: "Compass",
    lead: "Prosjektets livsløp fra oppstart til overlevering.",
    sections: [
      {
        heading: "Fase 1: Mobilisering & Avklaring",
        text: "<strong>Formål:</strong> Etablere rammene for prosjektet og sikre kundens forpliktelse.",
        points: [
          "<strong>Analyser:</strong> Interessentanalyse (Stakeholder Mapping) for å avklare roller, og markedsanalyse for å forstå bedriftens posisjon.",
          "<strong>Leveranser:</strong> Signert Samarbeidsavtale, prosjektskisse (Scope Document) med fremdriftsplan."
        ]
      },
      {
        heading: "Fase 2: Forretningsforståelse & Design",
        text: "<strong>Formål:</strong> Forstå bedriftens flaskehalser og visualisere løsningen.",
        points: [
          "<strong>Analyser:</strong> Prosess- og flaskehalsanalyse (Økonomi) og målgruppeanalyse (Design).",
          "<strong>Leveranser:</strong> Value Proposition Canvas (VPC) for kunden, og ferdige Figma-prototyper."
        ]
      },
      {
        heading: "Fase 3: Utvikling & Implementering",
        text: "<strong>Formål:</strong> Bygge den digitale eller operative løsningen.",
        points: [
          "<strong>Analyser:</strong> Risiko- og kostnadsanalyse for implementeringen, og teknisk arkitekturvalg.",
          "<strong>Leveranser:</strong> Fungerende kildekode/MVP på GitHub, og operasjonell effektiviseringsplan."
        ]
      },
      {
        heading: "Fase 4: Kvalitetssikring (QA) & Testing",
        text: "<strong>Formål:</strong> Sikre at leveransen holder et profesjonelt nivå.",
        points: [
          "<strong>Analyser:</strong> Brukervennlighetstester med ekte sluttbrukere, og teknisk kode/design-review.",
          "<strong>Leveranser:</strong> Signert QA-godkjenning fra faglig mentor (HiØ-foreleser), samt feillogg/testrapport."
        ]
      },
      {
        heading: "Fase 5: Overlevering & Showcase",
        text: "<strong>Formål:</strong> Lansere løsningen og dokumentere prosjektet.",
        points: [
          "<strong>Analyser:</strong> Sluttevaluering og evaluering av lærdommer.",
          "<strong>Leveranser:</strong> Overføring av kildekode og tilganger til kunden, og prosjektcase publisert på showcase-portalen."
        ]
      }
    ]
  },
  {
    id: "gjennomforingsplan",
    title: "Gjennomføringsplan",
    category: "GTM & Utførelse",
    icon: "Milestone",
    lead: "Trinnvis fremdriftsplan (Fase 1–4) fra planlegging til skalering, strukturert for minst mulig motstand.",
    sections: [
      {
        heading: "1. Overordnet sammenheng mellom risiko og faser",
        text: "Prosjektet etableres trinnvis for å fange opp og eliminere de største risikoene før store ressurser forpliktes:",
        table: {
          headers: ["Fase", "Fokusområde", "Risikoer som løses i denne fasen", "Prinsipp"],
          rows: [
            ["Fase 1", "Planlegging & Konsept (Mnd 1-3)", "Ingen direkte risiko. Kartlegging av emner, samtaler med nøkkelpersoner på HiØ og partnere.", "Bare prat og planer — null risiko"],
            ["Fase 2", "Juridisk & Org. oppsett (Mnd 3-6)", "Lånekassen-avklaring, statsstøtte/EØS, arbeidstakerklassifisering, forsikring, GDPR.", "Rydde alt juridisk før første kundeleveranse"],
            ["Fase 3", "Pilot med sikkerhetsnett (Mnd 6-12)", "Faktisk kvalitet på leveranse, kunde-engasjement, tracking av de minimis-verdier.", "Ett pilotprosjekt — test og dokumenter alt"],
            ["Fase 4", "Skalering med åpne øyne (Mnd 12-24)", "Konkurranseklager fra kommersielle byråer, automatisering av register, oppstart NAV-spor.", "Skaler gradvis med erfaringen fra piloten"]
          ]
        }
      },
      {
        heading: "2. Fase 1: Lavthengende frukt (Måned 1–3)",
        text: "Aktiviteter som kan gjøres uten risiko for å bygge grunnlaget:",
        table: {
          headers: ["Aktivitet", "Hvorfor", "Hvem", "Kostnad / Avhengigheter"],
          rows: [
            ["Kartlegg eksisterende emner ved HiØ (ITD35014)", "Unngå å opprette nye emner unødvendig. Bruk eksisterende mal.", "Studenter, studieveileder", "Gratis / Ingen"],
            ["Identifiser forkjempere ved HiØ (dekaner, programledere)", "Sikre intern akademisk forankring og mentorressurser.", "Studenter (initiativtakere)", "Gratis / Ingen"],
            ["Kartlegg lokale næringsforeninger og Blender Collective", "Skaffe døråpnere til de første kommersielle kundene.", "Studenter", "Gratis / Ingen"],
            ["Forbered 1-pagers konseptskisse", "Gi alle interessenter samme informasjonsgrunnlag uten forpliktelser.", "Studenter", "Gratis / Ingen"]
          ]
        }
      },
      {
        heading: "3. Fase 2: Etablering og juridisk rydding (Måned 3–6)",
        text: "Kritiske avklaringer som MÅ være på plass før første kundeprosjekt starter:",
        table: {
          headers: ["Aktivitet", "Rettslig formål", "Hvem", "Kostnad / Status"],
          rows: [
            ["Stift Syntax & Flow AS eid av en ideell stiftelse", "Kritisk for statsstøtte: Sikrer juridisk skille fra HiØ. AS gir ansvarsbegrensning.", "Stiftere", "30 000 kr (aksjekapital) + stiftelseskostnad"],
            ["Utarbeid formell emnebeskrivelse for Bedriftspraksis", "Lånekassen krever reelle læringsmål, ikke bare arbeid. Avverger også arbeidstakerstatus.", "HiØ programansvarlige", "Gratis / Utkast opprettet"],
            ["Søk forhåndsuttalelse fra Lånekassen for emne etter grad", "Sikre studentenes finansiering. Gjør-eller-dø-punkt.", "HiØ studieadmin", "Gratis / Avventer emnegodkjenning"],
            ["Inngå skriftlig samarbeidsavtale HiØ og Syntax & Flow AS", "Kritisk for statsstøtte: HiØ prises til markedspris for mentortimer/leie av lokaler.", "HiØ-jurister, styret", "Juristbistand / Prioritert tiltak"],
            ["Tegn yrkesansvarsforsikring for Syntax & Flow AS", "Beskytte studentene personlig mot erstatningskrav ved feil i levert kode.", "Styreleder", "5 000–15 000 kr/år"],
            ["Utarbeid standard kundeavtale med fire lag beskyttelse", "Ansvarsfraskrivelse ('as-is'), begrensning på maks 10k, erklæring fra kunde.", "Jurist, studenter", "10 000–20 000 kr / Utkast opprettet"]
          ]
        }
      },
      {
        heading: "4. Fase 3: Pilot med sikkerhetsnett (Måned 6–12)",
        text: "Ett enkelt prosjekt med begrenset omfang for å verifisere modellen i praksis:",
        table: {
          headers: ["Aktivitet", "Hvorfor", "Hvem", "Kostnad / Avhengigheter"],
          rows: [
            ["Rekrutter 3–5 studenter til pilot-team", "Etablere første operative team (minst 1 IT, 1 design, 1 økonomi).", "Studentleder", "Gratis / Lånekassestøtte godkjent"],
            ["Finn én pilotkunde (lokal mikrovirksomhet < 5 ansatte)", "Kontrollert risiko. Enkelt oppdrag (f.eks. landingpage eller logo).", "Studentleder, næringsforening", "Gratis / Ingen kommersiell konkurranse"],
            ["Dokumenter ALT (timer, roller, mentortid, de minimis)", "Dokumentasjon er bevis i eventuell ESA- eller Lånekassen-tilsyn.", "Hele teamet", "Gratis / Løpende arbeid"],
            ["Evaluer piloten og mål faktisk statsstøtteverdi", "Lærdom før skalering. Sikre at verdi holder seg under de minimis-grensen.", "Økonomistudent, mentor", "Gratis / Fullført prosjekt"]
          ]
        }
      },
      {
        heading: "5. Fase 4: Skalering med åpne øyne (Måned 12–24)",
        text: "Gradvis opptrapping etter at modellen er verifisert:",
        table: {
          headers: ["Aktivitet", "Hvorfor", "Hvem", "Kostnad / Avhengigheter"],
          rows: [
            ["Rekrutter 2–3 nye team parallelt", "Skalere kapasiteten gradvis (ikke hopp fra 1 til 10 kunder direkte).", "Studentleder", "Løpende / Erfaring fra pilot"],
            ["Bygg og lanser referanseportalen (nettsiden)", "Sikre digital portefølje- og referansebase for studentene.", "IT- og designstudenter", "Gratis / GDPR-samtykke på plass"],
            ["Forbered 'defense pack' mot konkurranseklager", "Når klagen fra kommersielle byråer kommer, må svaret ligge klart.", "Styret, studentleder", "Gratis / Dokumenter fra Fase 2 & 3"],
            ["Start NAV-samarbeidet forsiktig med én deltaker", "NAV-deltakere har andre regler. Start med én for å lære systemet.", "NAV, studentleder", "Gratis / Separat avtaleverk klart"]
          ]
        }
      },
      {
        heading: "6. Beredskapsplan: Hva gjør dere hvis...",
        text: "Forberedte rutiner for de mest sannsynlige krisescenarioene under etableringen:",
        table: {
          headers: ["Scenario", "Handling", "Ansvarlig"],
          rows: [
            ["<strong>HiØ trekker seg fra samarbeidet</strong>", "Avklar om det skyldes juridisk risiko (vis frem defense pack), ressursmangel (tilby redusert mentorordning) eller politikk (involver StOr/næringsliv). Eventuelt fortsett som ren studentforening.", "Styret"],
            ["<strong>ESA-klage eller granskning</strong>", "Svar innen fristen (2-4 uker). Bruk defense pack (samarbeidsavtale med markedspris, de minimis-register). Ikke kommenter offentlig uten godkjenning.", "Styret + HiØ-jurister"],
            ["<strong>Lånekassen endrer eller avslår regler</strong>", "Vurder å flytte emnet Bedriftspraksis inn i graden som valgfag siste semester (30 stp). Alternativt rekrutter studenter med rest-støttetid.", "Studieutvalget + S&F-ledelsen"],
            ["<strong>GDPR-brudd / datalekkasje</strong>", "Stopp lekkasjen umiddelbart. Varsle DPO innen 24 timer, og Datatilsynet innen 72 timer. Informer berørte studenter/kunder.", "DPO / Daglig leder"]
          ]
        }
      }
    ]
  },
  {
    id: "analyser",
    title: "Analyser",
    category: "Dokumenter",
    icon: "FileSearch",
    lead: "Oversikt over de påkrevde analysene som skal kjøres i prosjektene.",
    sections: [
      {
        heading: "1. Interessentanalyse (Stakeholder Mapping)",
        text: "Analysen kartlegger hvem som påvirker prosjektet, og deler dem inn i fire kvadranter basert på makt og interesse:",
        points: [
          "<strong>Høy makt / Høy interesse (Samarbeid tett):</strong> Studieprogramledere, dekaner, aktive studenter, lokale næringsforeninger.",
          "<strong>Høy makt / Lav interesse (Hold fornøyd):</strong> HiØ-styret, sentral ledelse og juridisk avdeling ved HiØ.",
          "<strong>Lav makt / Høy interesse (Hold informert):</strong> Lokale gründere, SMBer, karrieresenteret ved HiØ.",
          "<strong>Lav makt / Lav interesse (Overvåk):</strong> Generelle programvareleverandører."
        ]
      },
      {
        heading: "2. Markeds- & Konkurranseanalyse",
        text: "Kartlegger markedets behov for studentkonsulenter. Vi posisjonerer oss spesifikt mot oppstartsbedrifter og mindre SMBer som uansett ikke har råd til kommersielle konsulenthus, for å unngå anklager om urettferdig priskonkurranse."
      },
      {
        heading: "3. Risiko- & Kostnadsanalyse",
        text: "Kartlegger mulige farer i prosjektet, spesielt knyttet til kontinuitet (at studenter slutter når de uteksamineres), MVA/skatt, ansvarsforhold ved tekniske feil, og mentors ubetalte tidsbruk. For hver risiko defineres det konkrete tiltak (f.eks. stiftelsesform, trainee-ordninger, faste veiledningstimer)."
      }
    ]
  },
  {
    id: "guidelines",
    title: "Guidelines",
    category: "Dokumenter",
    icon: "FileText",
    lead: "Retningslinjer og instruksjoner for AI-agenter og teammedlemmer som jobber i repositoriet.",
    sections: [
      {
        heading: "1. Språk og Tone",
        points: [
          "All dokumentasjon, commits og kommunikasjon skal foregå på <strong>norsk (bokmål)</strong>.",
          "Tonen skal være profesjonell, løsningsorientert, rådgivende og støttende."
        ]
      },
      {
        heading: "2. Arbeidsmetodikk",
        points: [
          "<strong>Planlegging først:</strong> Planlegg alltid endringer sammen med brukeren før de utføres. Utfør aldri endringer, sletting eller store søk før brukeren har bekreftet skriftlig med et 'JA'.",
          "<strong>Tverrfaglig fokus:</strong> Sørg for at løsninger reflekterer samspillet mellom Økonomi, IT og Design."
        ]
      },
      {
        heading: "3. Mappestruktur",
        points: [
          "<code>01-administrasjon/</code>: Regler, mål, interessentanalyse og drift.",
          "<code>02-instrukser/</code>: Retningslinjer for agenter (som denne).",
          "<code>03-skills/</code>: Definisjon av ferdigheter og maler.",
          "<code>04-kilde/</code>: Kilder, referansemateriell og eksterne ressurser.",
          "<code>05-agent-forslag/</code>: Konkrete utkast og forslag generert av agenter.",
          "<code>06-Business-case/</code>: VPC-modeller og økonomisk/strategisk analyse.",
          "<code>07-Nettside/</code>: Kildekode for nettsider og apper."
        ]
      },
      {
        heading: "4. Maler og utkast i referanseseksjonen",
        text: "Følgende maler og utkast er etablert i mappen <code>05-agent-forslag/Forslag/mal-og-utkast/</code> (Sortert etter prioritet: Kritiske (K), Viktige (V), Nyttige (N)):",
        points: [
          "<strong>K1: Emnebeskrivelse Bedriftspraksis:</strong> Formelt utkast til studieemne på 30 stp med læringsmål og vurderingskriterier for Lånekassen-godkjenning.",
          "<strong>K2: Pedagogisk plan:</strong> Strukturering av veiledningstimer, refleksjonsnotater og tiltak for å unngå 'billig arbeidskraft'-fellen.",
          "<strong>K3: Finansieringsplan:</strong> Oppstartskostnader, faste driftsutgifter og en oversikt over eksterne søknadskilder (SIVA, Innovasjon Norge).",
          "<strong>K5: Samtykkeskjemaer porteføljepublisering:</strong> Skriftlige opt-in samtykker for studenter og kunder for å overholde GDPR.",
          "<strong>V1: Stillingsbeskrivelser:</strong> Tydelige roller og oppgaver for daglig leder, fagansvarlige og studentkonsulenter.",
          "<strong>V2: Møtestruktur og beslutningsprosesser:</strong> Oppsett for ukentlige driftsmøter og månedlige styremøter.",
          "<strong>V4–V5: Onboarding og offboarding-prosesser:</strong> Detaljerte sjekklister for mottak og avslutning av deltakere og kunder.",
          "<strong>V7: Kundeonboarding og forventningsavklaring:</strong> Mal for oppstartsmøte og avklaring av kundens tidsmessige forpliktelse (møteplikt).",
          "<strong>V9: Rettighetsavklaring (kode & design):</strong> Retningslinjer for opphavsrett og immateriell eiendom ved prosjektslutt.",
          "<strong>V10–V11: Søknadsprosess og seleksjonskriterier:</strong> Rutiner for rekruttering, intervjuspørsmål og sammensetning av tverrfaglige team.",
          "<strong>V13: Forpliktelsesavtale student:</strong> Skriftlig avtale som bekrefter at deltakelsen er en studieaktivitet uten ansettelsesforhold.",
          "<strong>V14–V16: Klagebehandling og konfliktløsning:</strong> Prosedyrer for håndtering av misfornøyde kunder eller interne konflikter i teamet.",
          "<strong>V17–V18: KPI-er og evalueringsrutiner:</strong> Måleparametere for suksess (NPS, fullføringsgrad) og læringsutbytte.",
          "<strong>V19–V20: Beredskapsplan:</strong> Rutiner ved uforutsette kriser som ESA-klager, datalekkasjer eller at HiØ trekker seg.",
          "<strong>V21–V25: Kommunikasjonsstrategi og kriseplan:</strong> PR, pressekontakt og krisekommunikasjon.",
          "<strong>V26–V28: Porteføljestrategi og anonymisering:</strong> Retningslinjer for anonymisering og publisering av studentenes arbeid på portalen."
        ]
      }
    ]
  },
  {
    id: "juridisk-risiko",
    title: "Juridisk & Risiko",
    category: "Dokumenter",
    icon: "ShieldAlert",
    lead: "Vurdering av konseptets juridiske holdbarhet, risikoer og styrker basert på den siste juridiske utredningen.",
    swot: {
      strengths: [
        "<strong>Reelt samfunnsproblem:</strong> Løser direkte erfaringsgapet for nyutdannede studenter.",
        "<strong>Win-Win-Win:</strong> Økt kandidatproduksjon for HiØ, gratis verdi for næringsliv, og praksis for studenter.",
        "<strong>Ekte tverrfaglighet:</strong> Utviklere, designere og økonomer samarbeider i reelle team.",
        "<strong>Bærekraftig kostnad:</strong> Svært lave årlige driftskostnader (15 000 - 20 000 kr) dekket av tilskudd.",
        "<strong>Sikker QA-struktur:</strong> Mentorer kvalitetssikrer alt før det leveres til bedrifter."
      ],
      weaknesses: [
        "<strong>Lånekassestøtte for enkeltemner:</strong> Støtte til emnet etter fullført grad eller som frittstående enkeltemne krever forhåndsgodkjenning.",
        "<strong>Minstekrav for enkeltemner:</strong> Siden ITD35014 gir 10 stp, krever det at enkeltemnestudenter tar andre emner ved siden av for å nå Lånekassens minstekrav på 15 stp (programstudenter får full støtte da de tar 30 stp totalt).",
        "<strong>Statsstøtterisiko (EØS):</strong> Skolens ressurser kan anses som ulovlig støtte til eksterne bedrifter.",
        "<strong>Rettslig gråsone for studentene:</strong> Uklart om studentene kan anses som arbeidstakere.",
        "<strong>Konkurranseklager:</strong> Lokale byråer kan klage på prisdumping og subsidiering.",
        "<strong>Forsikringsansvar:</strong> Manglende ansvarsforsikring ved kritisk feil i levert kode."
      ]
    },
    risks: [
      {
        id: 1,
        title: "Manglende Lånekassestøtte for frittstående enkeltemnestudenter",
        sannsynlighet: 4,
        konsekvens: 4,
        alvorlighet: "Høy",
        beskrivelse: "Ordinære bachelorstudenter tar 30 stp per semester og beholder full basisstøtte. Imidlertid får ikke studenter som tar ITD35014 (10 stp) som et frittstående enkeltemne basisstøtte, fordi det er under Lånekassens minstekrav på 15 stp per semester. Det er også risiko for avslag dersom enkeltemnet ikke ansees som ledd i en grad eller planlagt påbygning.",
        tiltak: "Avklare studentenes studie- og enkeltemnestatus før opptak; sikre at enkeltemnestudenter tar andre emner parallelt eller har annen finansiering; etablere veiledning for Lånekassen-søknad."
      },
      {
        id: 2,
        title: "Statsstøtte & EØS-regler",
        sannsynlighet: 3,
        konsekvens: 5,
        alvorlighet: "Kritisk",
        beskrivelse: "HiØs subsidiering av mentorer, lokaler og merkevare tolkes som ulovlig indirekte statsstøtte til bedrifter.",
        tiltak: "Etablere et juridisk skille mellom HiØ og stiftelsen; bruke 'de minimis'-reglene for mikrovirksomheter; søke råd hos ESA."
      },
      {
        id: 3,
        title: "Kunde-engasjement faller bort",
        sannsynlighet: 3,
        konsekvens: 4,
        alvorlighet: "Høy",
        beskrivelse: "Kunden slutter å stille på ukentlige møter eller gi tilbakemeldinger, noe som ødelegger studentenes tid.",
        tiltak: "Kontraktsfeste streng klausul: Dersom kunden uteblir fra faste møter uten gyldig grunn, avsluttes prosjektet umiddelbart."
      },
      {
        id: 4,
        title: "Omklassifisering av studenter",
        sannsynlighet: 2,
        konsekvens: 4,
        alvorlighet: "Høy",
        beskrivelse: "Arbeidstilsynet omklassifiserer studentene til arbeidstakere, noe som utløser krav om lønn, feriepenger og pensjon.",
        tiltak: "Unngå instruksjonsmyndighet; holde det som et reelt studieemne med karakter; ha fleksible tidsrammer; ingen utbetalinger."
      },
      {
        id: 5,
        title: "Konkurranseklager fra lokale byråer",
        sannsynlighet: 4,
        konsekvens: 2,
        alvorlighet: "Høy",
        tiltak: "Posisjonere oss strengt mot mikrovirksomheter og oppstartsbedrifter som uansett ikke har råd to kommersielle priser."
      },
      {
        id: 6,
        title: "Juridisk ansvar for feil/mangler",
        sannsynlighet: 2,
        konsekvens: 4,
        alvorlighet: "Høy",
        beskrivelse: "Tekniske feil i levert kode (f.eks. sikkerhetshull eller feilaktige råd) påfører kunden tap, som kreves erstattet.",
        tiltak: "Tegne ansvarsforsikring; bruke standardkontrakter med fullstendig ansvarsfraskrivelse ('as-is') og et lavt erstatningstak."
      }
    ],
    legalTopics: [
      {
        title: "1. Lånekassen (Progresjon & Godkjenning)",
        text: "Det er ikke et krav i loven at emner må tas før en grad er fullført. For bachelorstudenter i et løp inngår ITD35014 Bedriftspraksis (10 stp) som ett av flere emner (totalt 30 stp per semester), og de mottar full Lånekassen-støtte. Minstekravet på 15 stp for gradert støtte gjelder kun dersom emnet tas som et frittstående enkeltemne utenom et studieprogram, der progresjon og finansiering må avklares.",
        sources: [
          { name: "Lov om utdanningsstøtte § 4", url: "https://lovdata.no/lov/2005-06-03-37" },
          { name: "Forskrift om utdanningsstøtte", url: "https://lovdata.no/forskrift/2014-12-19-1742" }
        ],
        details: [
          {
            heading: "1.1 Kan studenter motta Lånekassestøtte for «Bedriftspraksis» etter fullført grad?",
            text: "<strong>Utgangspunkt:</strong> Lånekassen yter støtte til godkjente utdanninger ved godkjente læresteder, jf. lov om utdanningsstøtte § 4 med tilhørende forskrift. Det er ikke noe vilkår i loven at emnet må tas <em>før</em> graden er fullført. Hovedregelen er at støtte gis til ordinære studieløp (grunn-, etter- og videreutdanning).<br/><br/><strong>Dagens ordning (ITD35014 - 10 stp):</strong> Siden programstudenter normalt tar 30 stp totalt per semester (hvor ITD35014 inngår), beholder de full basisstøtte. Lånekassens minstekrav på 15 stp per semester for gradert basisstøtte gjelder kun dersom emnet tas som et frittstående enkeltemne utenom et studieprogram.<br/><br/><strong>Utfordring:</strong> For enkeltemnestudenter (utenom grad) er det en utfordring at 10 stp er under Lånekassens minstekrav på 15 stp for gradert støtte. I tillegg krever Lånekassen at støttemottakeren er en <strong>«reell student»</strong> med <strong>framdrift i utdanningen</strong>. Dersom studenten allerede har fullført en grad og tar emnet som enkeltemne utenom et nytt studieprogram, kan Lånekassen stille spørsmål ved det reelle utdanningsformålet. Særlig risiko knytter seg til:",
            points: [
              "<strong>Fordypningskravet:</strong> Lånekassen kan kreve at emnet må være en naturlig faglig fordypning eller et strukturert påbygningsstudium.",
              "<strong>Samlet støttetid:</strong> Studenter som allerede har brukt opp sin ordinære støtteperiode (f.eks. 3 år bachelor + 2 år master = 5 år), vil normalt ikke få mer støtte med mindre de tar en ny grad eller et strukturert etter-/videreutdanningsløp."
            ]
          },
          {
            heading: "Forebyggende tiltak og mål:",
            text: "Tiltaket er primært å avklare om deltakere er ordinære programstudenter (som er fullt finansiert) eller enkeltemnestudenter. For enkeltemnestudenter må det verifiseres at de tar andre emner parallelt for å nå 15 stp-grensen, eller har annen finansiering. På lengre sikt utredes en eventuell utvidelse av ITD35014 til 15–30 stp for å styrke det faglige omfanget."
          },
          {
            heading: "1.2 Konkrete krav for Lånekassens godkjenning",
            points: [
              "<strong>HiØ må opprette emnet formelt:</strong> Godkjent av høgskolestyret og registrert i FS (felles studentsystem) og DBH (Database for statistikk om høgre utdanning).",
              "<strong>Faglig begrunnelse og læringsmål:</strong> Emnet kan ikke bare være arbeidspraksis uten læringsmål. Det må ha formelle læringsutbyttebeskrivelser (kunnskap, ferdigheter, generell kompetanse), vurderingsformer (mappe, rapport, prosjektevaluering) og faglig veiledning/mentoring.",
              "<strong>Reelle studiepoeng:</strong> 30 stp skal tilsvare 800–900 timers arbeid (27 timer per stp). Dersom HiØ tildeler 30 stp for arbeid som i realiteten er fulltidsarbeid for en ekstern bedrift uten akademiske komponenter, kan Lånekassen og NOKUT stille spørsmål ved kvaliteten og realiteten i emnet.",
              "<strong>Søknad to Lånekassen:</strong> Lærestedet må søke om å få emnet godkjent for støtte. Godkjenningen er ikke automatisk."
            ]
          }
        ]
      },
      {
        title: "2. NAV (Samarbeid og Samspill)",
        text: "NAVs tiltaksordninger kan integreres i Syntax & Flow. Selskapet bør opptre som vertsvirksomhet (praksisplass) framfor tiltaksarrangør det første året for å redusere administrativ byrde og rapporteringskrav.",
        sources: [
          { name: "Arbeidsmarkedsloven § 12", url: "https://lovdata.no/lov/2004-12-10-76" },
          { name: "Forskrift om arbeidsrettede tiltak", url: "https://lovdata.no/forskrift/2015-12-11-1598" }
        ],
        details: [
          {
            heading: "2.1 Kan NAV-deltakere være i samme bedrift som Lånekassen-studenter?",
            text: "Det er <strong>ikke forbudt</strong> at NAV-deltakere og Lånekassen-studenter samarbeider i samme organisasjon. NAVs tiltaksordninger (arbeidstrening, avklaring, lønnstilskudd) er fleksible og kan tilrettelegges i en studentbedrift."
          },
          {
            heading: "2.2 Sentrale rettslige hensyn",
            text: "<strong>Ulike rettsgrunnlag:</strong> Lånekassen-studenter er underlagt utdanningslovgivningen (studiekrav, progresjon, emnebeskrivelse), mens NAV-deltakere er underlagt NAVs regelverk (tiltaksplan, oppfølgingsvedtak, aktivitetsplikt).<br/><br/><strong>Krav til NAV-tiltak:</strong> Arbeidstrening etter arbeidsmarkedsloven § 12 og forskrift om arbeidsrettede tiltak krever at tiltaket er meningsfullt og kvalifiserende. Deltakeren må ha en kontaktperson som følger opp.<br/><br/><strong>Tiltaksarrangør eller vertsvirksomhet?</strong> Hvis Syntax & Flow kun stiller med praksisplass, er NAV ansvarlig for tiltaket, og Syntax & Flow er vertsvirksomhet. Hvis Syntax & Flow har detaljert styring og oppfølging, kan de anses som tiltaksarrangør og må oppfylle strengere krav."
          },
          {
            heading: "2.3 Risikoer ved samspill mellom spor",
            points: [
              "<strong>Ulik finansiering:</strong> Lånekassen-studenter får stipend/lån (ikke lønn), NAV-deltakere får tiltakspenger. Kan skape opplevelse av forskjellsbehandling.",
              "<strong>Arbeidstid:</strong> Lånekassen krever progresjon mot studiepoeng, NAV krever aktivitetsplan. Dette betyr ulik rapporteringsplikt.",
              "<strong>Taushetsplikt:</strong> NAV-deltakeres helseopplysninger er underlagt forvaltningsloven § 13 og helsepersonelloven, mens studentopplysninger følger universitets- og høyskoleloven."
            ]
          }
        ]
      },
      {
        title: "3. Konkurranseloven & Dumping",
        text: "Det er lovlig å tilby gratis tjenester under opplæringsformål. Lokale byråer vil sannsynligvis klage, og forebygging skjer via transparent markedsføring og bevisst posisjonering mot mikrobedrifter.",
        sources: [
          { name: "Konkurranseloven § 11 (Misbruk av dom. stilling)", url: "https://lovdata.no/lov/2004-03-05-12" },
          { name: "Markedsføringsloven § 6 (God forretningsskikk)", url: "https://lovdata.no/lov/2009-01-09-2" }
        ],
        details: [
          {
            heading: "3.1 Er det lovlig å tilby gratis konsulenttjenester til næringslivet?",
            text: "Det er i utgangspunktet <strong>ikke ulovlig</strong> å tilby gratis tjenester. Verken konkurranseloven eller markedsføringsloven forbyr prissetting til kr 0. Problemstillingen oppstår først når gratistjenester fører til <strong>konkurransevridning</strong> i strid med EØS-avtalens statsstøtteregler, eller markedsføringslovens generalklausul om god forretningsskikk (§ 6)."
          },
          {
            heading: "3.2 Kan etablerte konsulentbyråer klage?",
            text: "<strong>Ja, det er sannsynlig at etablerte aktører vil klage.</strong> Grunner:<br/>1. Urimelig konkurranse (markedsføringsloven § 6): Dersom gratistjenestene fremstilles som likeverdige med kommersielle tjenester uten tilstrekkelige forbehold.<br/>2. Statsstøtte (EØS-avtalen art. 61): Dersom HiØs ressurser (lokaler, mentorer, merkevare) utgjør ulovlig statsstøtte som gir en økonomisk fordel.<br/><br/><strong>Hvem som kan klage:</strong> Lokale IT-konsulenthus og designbyråer som mister oppdrag til en gratis aktør, samt bransjeorganisasjoner (f.eks. Abelia, Tekna). Klagen går til Konkurransetilsynet, ESA (EFTAs overvåkingsorgan) eller Forbrukertilsynet."
          }
        ]
      },
      {
        title: "4. Statsstøtte & EØS-regler (Art 61)",
        text: "Dette er den mest kritiske rettslige barrieren. Offentlige ressurser gitt til Syntax & Flow (forelesertid, campuslokaler) må reguleres strengt for å unngå sanksjoner fra ESA og tilbakebetalingskrav for bedriftene.",
        sources: [
          { name: "EØS-avtalen Artikkel 61(1)", url: "https://lovdata.no/traktat/1992-05-02-1" }
        ],
        details: [
          {
            heading: "4.1 Hvorfor statsstøtte er det mest alvorlige problemet i modellen",
            text: "Dersom ESA (EFTAs overvåkingsorgan) konkluderer med at det foreligger ulovlig statsstøtte, er hovedregelen at <strong>støttemottakerne (næringslivskundene) må betale tilbake hele fordelen med renter</strong>. Dette kan ikke reverseres eller dispenseres fra i ettertid. Kundene vil da kunne saksøke Syntax & Flow og/eller HiØ for tapet. Ulovlig statsstøtte har dessuten 10 års foreldelsesfrist."
          },
          {
            heading: "4.2 Konkret analyse av EØS-avtalen art. 61(1)",
            points: [
              "<strong>Statlige midler:</strong> HiØs forelesere (mentortimer) og kontorlokaler er finansiert av staten og står under offentlig kontroll. Årlig verdi er anslått til 370 000 – 770 000 kr.",
              "<strong>Økonomisk fordel:</strong> Næringslivskundene mottar gratis kvalitetssikrede konsulenttjenester (verdi 50k - 300k per oppdrag) de ikke ville fått på markedsvilkår.",
              "<strong>Selektivitet:</strong> Fordelen er selektiv fordi den kun tilbys et begrenset utvalg mikrovirksomheter i Østfold etter skjønnsmessig utvelgelse.",
              "<strong>Konkurransevridning:</strong> Det at en bedrift mottar gratis tjenester frigjør kapital og vrir konkurransen til fordel for mottakeren."
            ]
          }
        ]
      },
      {
        title: "5. Arbeidsrett & Klassifisering",
        text: "For å unngå at studentene omklassifiseres til arbeidstakere (med krav om lønn, feriepenger og pensjon), må deltakelsen være tydelig forankret som en akademisk studieaktivitet uten instruksjonsmyndighet.",
        sources: [
          { name: "Arbeidsmiljøloven § 1-8 (Arbeidstakerbegrepet)", url: "https://lovdata.no/lov/2005-06-17-62" },
          { name: "Høyesterettspraksis (Rt. 2013 s. 1024)", url: "https://lovdata.no/avgjorelse/hr-2013-1255-a" }
        ],
        details: [
          {
            heading: "5.1 Risikobildet for arbeidstakerstatus",
            text: "Dersom studentene utfører ordinært arbeid for eksterne kunder og er underlagt tett styring og kontroll, kan de etter arbeidsmiljøloven § 1-8 anses som arbeidstakere. Kontrakter som kaller det 'praksis' eller 'frivillighet' settes til side av domstolene dersom realiteten er et ansettelsesforhold."
          },
          {
            heading: "5.2 Hvorfor studenter i praksis normalt ikke er arbeidstakere",
            text: "Høyesterett har lagt vekt på at praksis som ledd i en utdanning har et <strong>pedagogisk formål</strong> framfor et produksjonsformål. For at dette skal holde, må emnet ha formelle læringsmål, pensum, vurderingsformer og mentorveiledning (ikke sjefsinstruksjon)."
          }
        ]
      },
      {
        title: "6. MVA & Skatterett",
        text: "Selskapsformen må velges for å unngå skatteplikt. En ideell stiftelse som eier et AS som ikke deler ut utbytte, gir det beste utgangspunktet for skattefritak.",
        sources: [
          { name: "Skatteloven § 2-30 (Skattefrie institusjoner)", url: "https://lovdata.no/lov/1999-03-26-14" },
          { name: "Merverdiavgiftsloven § 3-1 (Avgiftsplikt)", url: "https://lovdata.no/lov/2009-06-19-58" }
        ],
        details: [
          {
            heading: "6.1 Skatteplikt for ideelle organisasjoner",
            text: "En forening eller stiftelse som har et allmennyttig formål (som utdanning og arbeidserfaring) er fritatt for skatt på formue og inntekt etter skatteloven § 2-30. Dersom virksomheten driver økonomisk aktivitet som går utover formålet, kan denne delen bli skattepliktig."
          },
          {
            heading: "6.2 MVA-plikt ved gratistjenester",
            text: "MVA utløses ved omsetning av varer og tjenester mot vederlag. Siden Syntax & Flow leverer gratis til bedriftene (kr 0), foreligger det ikke MVA-plikt for oppdragene. Dersom det innføres rabatterte priser (f.eks. symbolsk betaling), må det vurderes om omsetningen overstiger grensen på 50 000 kr, som utløser registreringsplikt."
          }
        ]
      },
      {
        title: "7. Selskapsrett & Organisering",
        text: "Det juridiske ansvaret må begrenses slik at studentene ikke risikerer personlig ansvar. Aksjeselskap (AS) eid av en stiftelse er den sikreste organiseringen.",
        sources: [
          { name: "Aksjeloven § 1-1 (Ansvarsbegrensning)", url: "https://lovdata.no/lov/1997-06-13-44" },
          { name: "Stiftelsesloven § 2 (Opprettelse)", url: "https://lovdata.no/lov/2001-06-15-59" }
        ],
        details: [
          {
            heading: "7.1 Aksjeselskap vs. Forening",
            text: "I en forening kan medlemmene under visse omstendigheter holdes personlig ansvarlige for foreningens forpliktelser dersom driften er uforsvarlig. Et AS gir full ansvarsbegrensning til aksjekapitalen (30 000 kr). For å sikre det ideelle formålet, bør aksjene eies av en ideell stiftelse."
          }
        ]
      },
      {
        title: "8. Avtalerett & SLA",
        text: "Samarbeidsavtalene må inneholde absolutte ansvarsfraskrivelser ('as-is') og et lavt erstatningstak for å beskytte stiftelsen og studentene mot økonomiske krav.",
        sources: [
          { name: "Avtalesijen § 36 (Urimelige avtaler)", url: "https://lovdata.no/lov/1918-05-31-4" }
        ],
        details: [
          {
            heading: "8.1 Ansvarsfraskrivelse i pro-bono oppdrag",
            text: "Avtalerettens utgangspunkt er avtalefrihet. Vi kan avtale at tjenestene leveres uten noen form for garanti for funksjonalitet, feil eller økonomiske konsekvenser. Avtalesijen § 36 kan sensurere urimelige klausuler, men overfor næringsdrivende kunder i en gratis tjeneste vil ansvarsfraskrivelsen normalt stå seg sterkt."
          }
        ]
      },
      {
        title: "9. Personopplysningsloven (GDPR)",
        text: "Opprettelse av referanseportalen krever samtykkebasert publisering, rubric-baserte (1-5) objektive vurderinger, og innsyns-/sletterett for studentene.",
        sources: [
          { name: "Personopplysningsloven § 1 (GDPR)", url: "https://lovdata.no/lov/2018-06-15-38" }
        ],
        details: [
          {
            heading: "9.1 Rettslig grunnlag for portalen",
            text: "Portalen inneholder personopplysninger (navn, bilde, prosjekthistorikk, kompetansevurdering). Behandlingen må baseres på studentens **samtykke** (GDPR art. 6 nr. 1(a)). Samtykket må være frivillig; studenten må kunne ta emnet uten å måtte godkjenne offentlig profil."
          },
          {
            heading: "9.2 Svarteliste-problematikk og negative vurderinger",
            text: "Dersom portalen lagrer og viser negative fritekstvurderinger fra kunder som hindrer studenten i å få jobb senere, kan den i praksis fungere som en ulovlig svarteliste. **Tiltak:** Unngå negative fritekstvurderinger helt. Bruk utelukkende strukturerte, positive rubric-kriterier, og la studenten godkjenne/se vurderingen før publisering."
          }
        ]
      },
      {
        title: "10. HiØs omdømmerisiko",
        text: "Høgskolen risikerer omdømmetap ved feilede prosjekter og Lånekassen-avslag for enkeltemnestudenter. Det må foreligge en skriftlig samarbeidsavtale mellom HiØ og Syntax & Flow som avklarer at HiØ ikke har arbeidsgiveransvar, og at mentorer kun veileder.",
        sources: [
          { name: "Universitets- og høyskoleloven", url: "https://lovdata.no/lov/2005-04-01-15" }
        ],
        details: [
          {
            heading: "10.1 Risikobilde for HiØ",
            table: {
              headers: ["Risiko", "Sannsynlighet", "Konsekvens"],
              rows: [
                ["Omdømmetap ved feilet prosjekt", "Middels", "Betydelig lokalt"],
                ["Statsstøtte-granskning fra ESA", "Lav til middels", "Kan tvinge frem modellendring"],
                ["Lånekassen-avslag for enkeltemner", "Lav til middels", "Alvorlig for studentene"],
                ["Erstatningskrav fra tredjepart", "Lav", "Kan trekke inn høgskolen"]
              ]
            }
          },
          {
            heading: "10.2 Kan HiØ stilles til ansvar?",
            text: "Ja, dersom HiØ utøver direkte kontroll og instruksjon over studentene, eller dersom mentorer godkjenner feilaktige leveranser. For å beskytte skolen må Syntax & Flow være et <strong>helt eget juridisk subjekt</strong>."
          },
          {
            heading: "10.3 Konkrete tiltak for å beskytte HiØ",
            points: [
              "Skille HiØ og Syntax & Flow juridisk (stiftelse/AS).",
              "HiØ bør ikke sitte i styret, men kan ha observatørstatus.",
              "Mentorer skal kun ha en rådgivende og veiledende rolle, ikke instruksjonsmyndighet.",
              "Skriv en tydelig samarbeidsavtale som definerer at HiØ ikke garanterer for kvaliteten eller har arbeidsgiveransvar."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "forslag-utforelse",
    title: "Forslag på utførelse",
    category: "Dokumenter",
    icon: "Lightbulb",
    lead: "Hvordan justere modellen for å unngå juridiske hindringer innenfor dagens regelverk, uten lovendringer eller politisk påvirkning. Hver tilpasning følges av en vurdering av hvorfor det vil fungere og hvilken motstand/utfordringer som kan oppstå.",
    mainMessage: "Stift et AS, betal HiØ markedspris, ha et formelt emne med læringsmål. Dette alene reduserer statsstøtterisikoen, arbeidstakerrisikoen, ansvarsrisikoen og konkurranseklagerisikoen.",
    adjustments: [
      {
        id: 1,
        title: "1. Organisasjonsform",
        table: {
          headers: ["Aspekt", "Dagens modell", "Tilpasning"],
          rows: [
            ["Status", "Uavklart", "<strong>AS eid av ideell stiftelse</strong>"]
          ]
        },
        subAdjustments: [
          {
            title: "Konkret tilpasning av organisasjonsform",
            konkret: [
              "Stift <strong>Syntax & Flow AS</strong> med aksjekapital på 30 000 kr. Den operative enheten som inngår avtaler, tegner forsikring og bærer ansvaret.",
              "La en <strong>ideell stiftelse</strong> eie aksjene. Stiftelsen har utdanningsformål, kan søke skattefritak, og overskudd går til allmennyttige formål.",
              "Styret: 1 fra HiØ (observatør), 2 fra næringslivet, 2 studenter. HiØ skal <strong>ikke</strong> ha styreflertall."
            ],
            hvorfor: "Juridisk skille mellom HiØ og den operative virksomheten gjør det vanskeligere for ESA å påvise at HiØs ressurser er «statlige midler» som kanaliseres to næringslivet. AS gir full ansvarsbegrensning for studentene — de kan ikke tape mer enn aksjekapitalen. Aksjeloven er godt regulert og forutsigbar, i motsetning til ulovfestet foreningsrett hvor medlemmer i noen tilfeller kan holdes personlig ansvarlige. Stiftelsen som eier kan søke skattefritak (skatteloven § 2-30).",
            motstand: [
              "<strong>Kapitalkravet:</strong> 30 000 kr i aksjekapital må skaffes. HiØ kan ikke skyte inn kapital uten at det oppstår statsstøtte-spørsmål. Løsning: studentsamskipnaden (SiØ), lokale næringsstiftelser eller crowd-funding.",
              "<strong>HiØ kan motsette seg å stå utenfor styret:</strong> HiØ vil trolig ønske kontroll. Løsning: gi HiØ observatørstatus med talerett, og la HiØs jurister godkjenne samarbeidsavtalen.",
              "<strong>Administrativ byrde:</strong> AS krever årsoppgjør, revisjon (ved omsetning > 5 MNOK) og regnskapsførsel. Dette kan løses av økonomistudentene som en del av læringen."
            ]
          }
        ]
      },
      {
        id: 2,
        title: "2. Lånekassen — Finansiering og studiepoeng",
        subAdjustments: [
          {
            title: "Tilpasning 2A: Avklaring av studiestatus (program- vs. enkeltemnestudenter)",
            konkret: [
              "Avklare om studenten er opptatt på et ordinært bachelorprogram eller tar ITD35014 som enkeltemne.",
              "Programstudenter tar normalt 30 stp totalt per semester og får full Lånekassestøtte.",
              "Enkeltemnestudenter som kun tar ITD35014 (10 stp) må ta andre emner parallelt for å nå 15 stp-grensen for gradert støtte."
            ],
            hvorfor: "Sikrer at vi unngår uforutsette økonomiske utfordringer for studentene ved å kartlegge deres totale studiebelastning før opptak.",
            motstand: [
              "Krever tettere administrativ oppfølging og kartlegging under rekrutteringen. Løsning: legg inn spørsmål om studiestatus i søknadsskjemaet."
            ]
          },
          {
            title: "Tilpasning 2B: Langsiktig utredning av emneutvidelse",
            konkret: [
              "Utrede mulighet for å utvide ITD35014 Bedriftspraksis til 15–30 stp på lengre sikt.",
              "Dette vil styrke det faglige omfanget og gi enkeltemnestudenter mulighet til støtte uten sideemner.",
              "Det finnes ikke et egnet 5 stp-emne ved HiØ å kombinere med i dag."
            ],
            hvorfor: "Gir mulighet for mer omfattende praksisløp og gjør enkeltemnet mer attraktivt for eksterne deltakere over tid.",
            motstand: [
              "Krav til formelle studieplanendringer ved HiØ og lengre administrative prosesser. Løsning: start med dagens 10 stp-modell for programstudenter."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "3. Statsstøtte (HiØs bidrag)",
        subAdjustments: [
          {
            title: "Tilpasning 3A — Markedspris for alle HiØ-bidrag (viktigste enkelttiltak)",
            konkret: [
              "<strong>Mentortimer:</strong> Syntax & Flow betaler HiØ markedspris (f.eks. 1 000 kr/time). Kan dekkes av innovasjonsmidler — poenget er synlig markedsbasert transaksjon.",
              "<strong>Lokaler:</strong> Betal markedsleie (f.eks. 2 000–3 000 kr/mnd).",
              "<strong>Alternativ:</strong> Hvis HiØ avviser markedspris: definer mentorordningen som integrert del av HiØs utdanningstilbud (ordinær undervisning). Da faller statsstøttereglene bort (Humboldt-Universität zu Berlin-doktrinen)."
            ],
            hvorfor: "Når HiØs bidrag prises til markedspris, er det ikke lenger et «statlig bidrag» — det er en ordinær kommersiell transaksjon. EØS-avtalen art. 61(1) krever statlige midler; hvis Syntax & Flow betaler for tjenestene, faller dette elementet bort. Alternativet (utdanningsformål) er forankret i EU-domstolens praksis (Humboldt-Universität zu Berlin, C-147/03).",
            motstand: [
              "HiØ kan nekte å ta betalt («vi tar ikke betalt for undervisning»). Løsning: forklar at dette er en ren formalitet for å unngå statsstøtte, og at midlene kan settes av til et felles utviklingsfond.",
              "Markedspris for mentorer koster 260 000–520 000 kr/år. Dette må dekkes av eksterne midler (innovasjonsmidler, SIVA, næringsstiftelser). Løsning: start sakte — pilotfasen krever færre mentortimer.",
              "Mentorer kan oppleve dobbeltrolle (både veileder og fakturerbar ressurs). Løsning: tydelig rollebeskrivelse."
            ]
          },
          {
            title: "Tilpasning 3B — Fakturer markedspris, gi utdanningsrabatt",
            konkret: [
              "Fastsett markedspris (f.eks. 800 kr/time)",
              "Fakturer kunden",
              "Gi dokumentert utdanningsrabatt (f.eks. 90 %)",
              "Kunden betaler 80 kr/time i stedet for 0 kr",
              "Dette gjør støtteelementet mindre og dokumenterbart."
            ],
            hvorfor: "Rabatten er dokumenterbar og kan begrunnes med studentenes læringskurve. Støtteelementet blir en brøkdel av markedsverdien og faller lettere inn under de minimis. Kunden har en reell (liten) økonomisk forpliktelse, noe som øker seriøsiteten.",
            motstand: [
              "Kunden betaler noe, ikke ingenting. Dette kan redusere antall søkere. Rabattmodellen kan også oppfattes som kunstig. Løsning: sett rabatten høyt nok til at den fortsatt er attraktiv for mikrovirksomheter (90–95 %)."
            ]
          },
          {
            title: "Tilpasning 3C — Støtteregister per kunde (de minimis-kontroll)",
            konkret: [
              "Loggfør markedsverdi, faktisk betalt, differanse og akkumulert over 3 år. Må holde seg under 300 000 EUR per kunde."
            ],
            hvorfor: "De minimis-forordningen (EU 2023/2831) gir et klart rettslig unntak for støtte under 300 000 EUR over 3 år per foretak. Med et støtteregister kan dere dokumentere at hver kunde holder seg under denne grensen.",
            motstand: [
              "Krever disiplin og kontinuerlig oppfølging. Uten automatisert system vil det bli feil. Løsning: bygg støtteregisteret inn i portalen fra dag én."
            ]
          },
          {
            title: "Tilpasning 3D — Objektiv kundeutvelgelse",
            konkret: [
              "Bruk førstemann til mølla eller loddtrekning. Publiser objektive kriterier. Unngå skjønnsbasert plukking."
            ],
            hvorfor: "Selektivitet er et av vilkårene i EØS art. 61(1). Objektive, ikke-diskriminerende kriterier gjør det vanskeligere å påvise selektivitet.",
            motstand: [
              "Førstemann til mølla gir mindre kontroll over hvilke prosjekter som passer studentenes læringsmål. Løsning: publiser kriterier for hvilke prosjekter som kvalifiserer (f.eks. enkel nettside, logo-design, markedsanalyse) og la kundene søke innenfor disse rammene."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "4. Arbeidstakerrisiko (studentstatus)",
        subAdjustments: [
          {
            title: "Tilpasning 4A — Emnet som klassifiseringsverktøy",
            konkret: [
              "Studenter må være formelt opptatt i et emne med læringsmål, karaktervurdering, faglig veiledning og skriftlige kriterier."
            ],
            hvorfor: "Høyesterett (Rt. 2013 s. 1024) har lagt vekt på at studenter i praksisemner normalt ikke er arbeidstakere. Et formelt emne med vurdering er det sterkeste argumentet for studentstatus — det viser at deltakelsen har et utdanningsformål, ikke et arbeidsformål.",
            motstand: [
              "Jo mer praksisen ligner ordinært arbeid (faste oppgaver, kundestyring, resultatkrav), desto vanskeligere blir det å forsvare studentstatus. Løsning: sørg for at læringsmålene er reelle og at vurderingen vektlegger refleksjon og læring, ikke bare leveranse."
            ]
          },
          {
            title: "Tilpasning 4B — Mentorrollen: veiledning, ikke instruksjon",
            konkret: [
              "Mentorer skal: ✅ være tilgjengelige for råd, ✅ kvalitetssikre leveranser, ❌ ikke detaljstyre arbeid, ❌ ikke ha personalansvar. Dokumenteres i egen rollebeskrivelse."
            ],
            hvorfor: "Arbeidstakerstatus forutsetter at noen har instruksjonsmyndighet. Hvis mentorer kun veileder, har ingen instruksjonsmyndighet, og studentene har frihet til å organisere eget arbeid, er arbeidstakerstatus lite sannsynlig.",
            motstand: [
              "Kunder kan forvente mer styring og oppfølging enn mentorrollen tillater. Løsning: tydelig kommunikasjon i kundeavtalen om at prosjektet ledes av studentene selv, med veiledning fra HiØ."
            ]
          },
          {
            title: "Tilpasning 4C — Skriftlig avtale med hver student",
            konkret: [
              "Presiser: deltakelse er studieemne, ikke arbeidsforhold; studenten får Lånekassen, ikke lønn; ingen plikter etter arbeidsmiljøloven; kan si opp når som helst innenfor emnets rammer."
            ],
            hvorfor: "En skriftlig avtale skaper bevis for partenes intensjon. Hvis partene er enige om at det ikke er et ansettelsesforhold, skal mye til for å omklassifisere det.",
            motstand: [
              "En avtale kan ikke fravike ufravikelige lover. Hvis realiteten er et ansettelsesforhold, hjelper ikke en avtale. Løsning: sørg for at realiteten samsvarer med avtalen — fleksible tider, ingen instruksjon, fokus på læring."
            ]
          },
          {
            title: "Tilpasning 4D — Fleksible tidsrammer",
            konkret: [
              "Dagens ordning (ITD35014, 10 stp): mål om ca. 12–15 timer per uke.",
              "Fremtidig mål (15–30 stp): mål om opp mot full tid (30–37,5 timer per uke).",
              "Ingen stemplingsklokke eller fast oppmøtetid kl. 08:00, full fleksibilitet."
            ],
            hvorfor: "Arbeidstakerstatus krever en viss grad av underordning og plikt til å møte. Uten faste oppmøtetider og uten stemplingsklokke svekkes argumentet for arbeidstakerstatus betydelig.",
            motstand: [
              "Kunder kan oppleve det som uprofesjonelt hvis studentene ikke har faste møtetider. Løsning: avtal faste ukentlige statusmøter med kunden, men la studentene selv bestemme når de jobber utover disse møtene."
            ]
          }
        ]
      },
      {
        id: 5,
        title: "5. Kunder (målgruppe)",
        subAdjustments: [
          {
            title: "Tilpasning 5A — Streng definisjon av mikrovirksomhet",
            konkret: [
              "Maks 5 ansatte, omsetning under 5 MNOK, ikke konkurrent til etablerte byråer. Kunden bekrefter skriftlig at de ikke har budsjett til profesjonelle tjenester."
            ],
            hvorfor: "Jo mindre kunden er, desto lettere er det å argumentere for at tjenesten ikke påvirker konkurransen i markedet. Mikrovirksomheter med under 5 ansatte har sjelden budsjett til profesjonelle konsulenttjenester — dermed fortrenger Syntax & Flow ingen kommersielle aktører. Kundenes bekreftelse dokumenterer dette.",
            motstand: [
              "Streng definisjon begrenser kundegrunnlaget dramatisk. Mange potensielt interessante prosjekter faller utenfor. Løsning: start med denne strenge definisjonen i pilotfasen, utvid gradvis etter hvert som risikobildet blir klarere."
            ]
          },
          {
            title: "Tilpasning 5B — Prioriter kunder som ikke er foretak",
            konkret: [
              "Statsstøttereglene gjelder bare for foretak. Ved å rette seg mot privatpersoner (ENK), ideelle organisasjoner og HiØs interne avdelinger, reduseres risikoen betydelig."
            ],
            hvorfor: "EU-domstolen (C-222/04) has slått fast at statsstøttereglene bare gjelder foretak som driver økonomisk aktivitet. Privatpersoner og rene ideelle organisasjoner uten økonomisk aktivitet faller utenfor. Dette er den enkleste måten å unngå statsstøtteproblemet helt.",
            motstand: [
              "Ideelle organisasjoner og HiØs interne avdelinger har ofte mindre spennende prosjekter. Gir mindre portefølje-verdi for studentene. Løsning: bland — ha 50 % ideelle/private og 50 % mikrovirksomheter for å balansere risiko og læringsverdi."
            ]
          },
          {
            title: "Tilpasning 5C — «Time for time»-bytte",
            konkret: [
              "Kunden betaler med dokumentert tidsinvestering (2–4 timer/uke). Hvis uteblir: prosjektet avsluttes. Kan argumenteres som bytteforhold, ikke gave."
            ],
            hvorfor: "Et bytte (tjenester mot tid) kan i noen tilfeller anses som et gjensidig bebyrdende forhold, ikke en gave. Dette svekker argumentet om at kunden mottar en ren «økonomisk fordel» uten motytelse. I tillegg sikrer det kundeengasjement.",
            motstand: [
              "Skattemyndighetene kan omklassifisere «time for time»-byttet som et naturalytelsesbytte med avgiftsmessig verdi. Kundens tidsbruk har en alternativverdi. Løsning: dokumentér at kundens tidsinvestering er en reell forutsetning for prosjektet, ikke en symbolsk gest."
            ]
          }
        ]
      },
      {
        id: 6,
        title: "6. Konkurranse (posisjonering og markedsføring)",
        subAdjustments: [
          {
            title: "Tilpasning 6A — Posisjonér som utdanning, ikke konsulentvirksomhet",
            konkret: [
              "Unngå ord som «konsulent», «byrå», «profesjonelle tjenester», «SLA». Bruk: «læringsprosjekt», «studentpraksis», «utdanningssamarbeid»."
            ],
            hvorfor: "Konkurranseklager forutsetter at dere oppfattes som en konkurrent. Hvis dere posisjonerer dere som et utdanningstiltak (ikke et konsulentbyrå), svekkes grunnlaget for klage. Markedsføringsloven § 6 (god forretningsskikk) rammer bare villedende markedsføring — hvis dere er ærlige om at dette er studentarbeid, er det ikke villedende.",
            motstand: [
              "Det er fristende å bruke profesjonelle termer for å tiltrekke kunder. Motstå denne fristelsen — det er akkurat det som utløser klager. Løsning: lag en «tone of voice»-guide for all kommunikasjon."
            ]
          },
          {
            title: "Tilpasning 6B — Forbered «defense pack» før klage kommer",
            konkret: [
              "Inneholder: emnebeskrivelse, samarbeidsavtale med HiØ, kundeliste med de minimis-verdier, evalueringsrapport, utvelgelseskriterier, standard kundeavtale."
            ],
            hvorfor: "Når klagen kommer (sannsynlig innen 6–12 måneder), er det kritisk å kunne svare raskt og profesjonelt. En forberedt «defense pack» viser at dere har tatt juridiske forholdsregler, noe som gjør det vanskeligere for klageren å få medhold.",
            motstand: [
              "Å forberede seg på en klage kan oppleves som unødvendig byråkrati før noe har skjedd. Løsning: se det som en forsikring — du håper du aldri trenger den, men du vil angre hvis du ikke har den."
            ]
          },
          {
            title: "Tilpasning 6C — Dokumenter avviste oppdrag",
            konkret: [
              "Bevis at dere ikke tar oppdrag som kommersielle aktører normalt ville tatt."
            ],
            hvorfor: "En liste over avviste oppdrag er konkret bevis på at dere ikke konkurrerer i det ordinære markedet. Hvis dere kan vise at dere har takket nei til oppdrag fra bedrifter som har budsjett, svekker det argumentet om konkurransevridning betydelig.",
            motstand: [
              "Krever disiplin å dokumentere avvisninger. Løsning: enkel logg i portalen — hvem, hvorfor avvist, dato."
            ]
          },
          {
            title: "Tilpasning 6D — Unngå profesjonell markedsføring",
            konkret: [
              "Ingen prissammenligning, ingen garantier. Tydelig forbehold på alt materiell."
            ],
            hvorfor: "Forebygger klager ved å ikke fremstå som en konkurrent. Klager fra etablerte byråer er ofte basert på at de føler seg fortrengt — hvis dere ikke markedsfører dere som et alternativ til dem, reduseres sannsynligheten for at de reagerer.",
            motstand: [
              "Mindre slagkraftig markedsføring. Færre kunder. Løsning: la porteføljen tale for seg selv — resultater fra pilotprosjekter er den beste markedsføringen."
            ]
          }
        ]
      },
      {
        id: 7,
        title: "7. NAV / Spor 3",
        subAdjustments: [
          {
            title: "Tilpasning 7A — Utsett NAV-sporet til Fase 4 (tidligst 12 måneder)",
            konkret: [
              "NAV kompliserer alt: helseopplysninger, ulik finansiering, taushetsplikt, arbeidsgiveransvar, rapportering. Start kun med ordinære studieemner (ITD35014)."
            ],
            hvorfor: "Ved å utsette NAV-sporet reduseres kompleksiteten i oppstartsfasen dramatisk. Dere slipper å forholde dere til GDPR art. 9 (helseopplysninger), forvaltningsloven § 13 (taushetsplikt) og NAVs tiltaksregelverk samtidig som dere bygger resten av modellen.",
            motstand: [
              "NAV-deltakere er en viktig målgruppe for sosial bærekraft. Å utsette dem kan oppleves som å prioritere vekk de som trenger det mest. Løsning: kommuniser tydelig at Spor 3 kommer, men først når grunnmodellen er trygg. Involver NAV i dialog underveis."
            ]
          },
          {
            title: "Tilpasning 7B — Start som vertsvirksomhet, ikke tiltaksarrangør",
            konkret: [
              "Syntax & Flow stiller praksisplass. NAV har oppfølgingsansvar. Bruk Arbeidstrening-tiltaket, ikke lønnstilskudd."
            ],
            hvorfor: "Vertsvirksomhet har betydelig lavere krav enn tiltaksarrangør. Dere trenger ikke godkjenning, rapporteringsplikt eller kvalitetssystem. NAV beholder ansvaret for deltakeren. Arbeidstrening (tidligere «praksisplass») er det enkleste tiltaket å administrere.",
            motstand: [
              "Noen NAV-deltakere trenger mer oppfølging enn vertsvirksomhet kan gi. Løsning: avklar med NAV at deltakeren har en NAV-veileder som følger opp, og at Syntax & Flow kun bidrar med faglig veiledning."
            ]
          },
          {
            title: "Tilpasning 7C — Separat avtaleverk for NAV-deltakere",
            konkret: [
              "Én avtale for Lånekassen-studenter, en annen for NAV-deltakere. Aldri bland i samme avtale."
            ],
            hvorfor: "Ulike rettsgrunnlag (utdanningslov vs. folketrygdlov) krever ulike avtaler. Å blande dem skaper rettsusikkerhet for begge parter. Separate avtaler gir klarhet og forutsigbarhet.",
            motstand: [
              "Mer administrativt arbeid å vedlikeholde to avtaleverk. Løsning: lag maler som kan gjenbrukes."
            ]
          }
        ]
      },
      {
        id: 8,
        title: "8. Ansvarsforhold",
        subAdjustments: [
          {
            title: "Tilpasning 8A — Tegn yrkesansvarsforsikring før første kundeleveranse",
            konkret: [
              "Dekker: profesjonelle tjenester, dataansvar, styreansvar. Kostnad: 5 000–15 000 kr/år."
            ],
            hvorfor: "Forsikringen beskytter både studentene og organisasjonen mot erstatningskrav. Uten forsikring står studentene personlig ansvarlig for feil — en uakseptabel risiko. Forsikringsselskapene har standardprodukter for små konsulentvirksomheter som passer Syntax & Flow.",
            motstand: [
              "Forsikring koster penger og kan være vanskelig å få for en studentorganisasjon uten driftshistorikk. Løsning: kontakt flere selskaper (If, Gjensidige, Tryg) og forklar modellen. Start med eine enklere og billigere styreansvarsforsikring, utvid etter hvert."
            ]
          },
          {
            title: "Tilpasning 8B — Kundeavtale med fire lag beskyttelse",
            konkret: [
              "Ansvarsfraskrivelser: (1) Ansvarsfraskrivelser («as-is, with all faults»), (2) Ansvarsbegrensning (maks 10 000 NOK), (3) Kundeerklæring (forstår at det er studentarbeid), og (4) Avbestillingsklausul (ved uteblivelse fra møter)."
            ],
            hvorfor: "Ansvarsfraskrivelser i pro bono-avtaler har godt vern i norsk rett, særlig når tjenesten er gratis og mottakeren er en virksomhet (ikke forbruker). Avtaleloven § 36 (lemping) kan sette urimelige vilkår til side, men en fraskrivelse i en gratis studenttjeneste vil normalt stå seg. Fire lag gir redundant beskyttelse.",
            motstand: [
              "Ansvarsfraskrivelser kan fremstå som useriøse og skremme potensielle kunder. Løsning: formuler dem i et tilgjengelig språk, ikke tung juridisk sjargong. Forklar hvorfor de er der (studentopplæring, ikke profesjonelt byrå)."
            ]
          },
          {
            title: "Tilpasning 8C — Betinget SLA kun som unntak",
            konkret: [
              "Kun når teamet har erfaren student/NAV-deltaker. Strengt avgrenset. Aldri uten forsikringsdekning."
            ],
            hvorfor: "En betinget SLA gir mulighet til å ta mer avanserte oppdrag når teamet har riktig kompetanse, samtidig som standardmodellen (uten SLA) gir trygghet for de fleste prosjekter. Ved å kreve forsikringsdekning sikrer dere at SLA-en er reell.",
            motstand: [
              "Vanskelig å vurdere når teamet er «erfarne nok» for SLA. Løsning: sett klare kriterier (f.eks. minst én student med 2+ års relevant erfaring eller en NAV-deltaker med tidligere konsulenterfaring)."
            ]
          }
        ]
      },
      {
        id: 9,
        title: "9. Personvern (portal)",
        subAdjustments: [
          {
            title: "Tilpasning 9A — Utpek DPO internt eller via HiØ",
            konkret: [
              "Utpeke DPO (personvernombud) enten internt (f.eks. et styremedlem) eller eksternt via en avtale med HiØs DPO."
            ],
            hvorfor: "GDPR art. 37 krever DPO hvis kjerneaktiviteten innebærer systematisk overvåkning eller behandling av særlige kategorier. En intern DPO eller en avtale med HiØs DPO er enkle løsninger.",
            motstand: [
              "HiØs DPO har begrenset kapasitet. Løsning: utpek en student som DPO og la vedkommende ta et GDPR-kurs (gratis, f.eks. via Datatilsynet)."
            ]
          },
          {
            title: "Tilpasning 9B — Gjennomfør DPIA før portalen bygges",
            konkret: [
              "Gjenomføre en personvernvurdering (DPIA) for portalen."
            ],
            hvorfor: "DPIA er påkrevd (GDPR art. 35) når behandlingen innebærer særlige kategorier eller profilering av sårbare grupper. En DPIA beskytter også Syntax & Flow ved å dokumentere at dere har vurdert risikoene.",
            motstand: [
              "DPIA oppleves som tungvint og byråkratisk for et lite prosjekt. Løsning: bruk Datatilsynets mal — den er gratis og tar 1–2 uker å fylle ut."
            ]
          },
          {
            title: "Tilpasning 9C — Samtykkebasert porteføljepublisering med anonymisering",
            konkret: [
              "Innhent skriftlig samtykke og anonymiser data før publisering på portalen."
            ],
            hvorfor: "Samtykke (GDPR art. 6) er et gyldig behandlingsgrunnlag. Anonymisering fjerner personopplysninger og gjør at GDPR ikke lenger gjelder. Kombinasjonen gir høy grad av beskyttelse.",
            motstand: [
              "Anonymisering gjør porteføljen mindre slagkraftig (ingen navn, ingen spesifikke detaljer). Noen kunder/studenter kan nekte samtykke. Løsning: la samtykke være en del av deltakelsesvilkårene, men gi mulighet til å reservere seg mot enkeltdeler."
            ]
          },
          {
            title: "Tilpasning 9D — Databehandleravtale med Supabase/Vercel",
            konkret: [
              "Opprette og signere databehandleravtale (GDPR art. 28) med skyleverandører som Supabase og Vercel."
            ],
            hvorfor: "GDPR art. 28 krever databehandleravtale med alle leverandører som behandler personopplysninger på vegne av Syntax & Flow. Både Supabase og Vercel tilbyr standardavtaler.",
            motstand: [
              "Vercel lagrer data i USA (Privacy Shield). Løsning: velg norske/EU-leverandører for ekstra trygghet, eller bruk Vercels EU-region og godkjenn Privacy Shield."
            ]
          },
          {
            title: "Tilpasning 9E — Skill NAV-data fra studentdata fysisk",
            konkret: [
              "Sørg for at helseopplysninger eller andre sensitive data fra NAV-deltakere lagres helt separat fra ordinære studentdata."
            ],
            hvorfor: "NAV-deltakeres helseopplysninger er særlige kategorier (GDPR art. 9) og krever strengere beskyttelse enn studentdata. Fysisk separasjon (egen database eller separate tabeller) gjør det enklere å kontrollere tilgang og oppfylle kravene.",
            motstand: [
              "Mer komplekst databasesystem, mer utviklingsarbeid. Løsning: i starten, unngå NAV-data helt (utsett Spor 3). Når NAV kommer, bygg separate systemer."
            ]
          }
        ]
      }
    ],
    prioritizedTasks: {
      headers: ["#", "Tiltak", "Tema", "Kostnad"],
      rows: [
        ["1", "Stift AS eid av ideell stiftelse", "Org.form", "30 000–40 000 kr"],
        ["2", "Utarbeid emnebeskrivelse (30 stp) med læringsmål", "Lånekassen", "Gratis"],
        ["3", "Utred utvidelse av ITD35014 til 15–30 stp", "Lånekassen", "Gratis"],
        ["4", "Inngå samarbeidsavtale HiØ med markedspris", "Statsstøtte", "20 000–50 000 kr"],
        ["5", "Søk forhåndsuttalelse Lånekassen", "Lånekassen", "Gratis"],
        ["6", "Tegn ansvarsforsikring", "Ansvar", "5 000–15 000 kr/år"],
        ["7", "Utarbeid standard kundeavtale + studentavtale", "Ansvar/arbeidstaker", "10 000–20 000 kr"],
        ["8", "Gjennomfør DPIA", "Personvern", "Gratis"],
        ["9", "Etabler støtteregister (de minimis)", "Statsstøtte", "1 dag"],
        ["10", "Utsett NAV-samarbeidet til fase 4", "NAV", "—"]
      ]
    }
  },
  {
    id: "portal-referansebase",
    title: "Portal som referansebase",
    category: "Dokumenter",
    icon: "UserCheck",
    lead: "Hvordan Syntax & Flow-portalen fungerer som en verifisert referansebase, og de juridiske rammene for personvern, arbeidsrett, ansvar og diskriminering.",
    sections: [
      {
        heading: "1. Problemet med tradisjonell rekruttering",
        text: "Dagens rekrutteringsmetoder er preget av høy risiko og mangelfull informasjon:",
        table: {
          headers: ["Metode", "Problem", "Syntax & Flow løsning"],
          rows: [
            ["<strong>CV-screening</strong>", "CV-er er selvrapporterte og kan være pyntet på. Vanskelig å verifisere reelt nivå.", "Dokumentert og verifisert arbeidshistorikk fra reelle prosjekter."],
            ["<strong>Intervjuer</strong>", "Et kort møte (45-60 min) gir et overfladisk inntrykk. Lav korrelasjon med jobbprestasjon.", "Observasjon av kandidaten over en periode på 3–6 måneder."],
            ["<strong>Referansesjekk</strong>", "Tidligere arbeidsgivere er forsiktige og gir sjelden nyanserte eller negative opplysninger.", "Strukturerte, objektive poengvurderinger basert på faktiske leveranser."],
            ["<strong>Feilansettelse</strong>", "Å ansette feil person koster anslagsvis 1–3 ganger årslønn.", "Risikofri 'test-run' der kunden kjenner kandidatens kompetanse før ansettelse."]
          ]
        }
      },
      {
        heading: "2. Verdiskapning: Tradisjonell ansettelse vs. S&F",
        text: "Sammenligning av ansettelsesrisiko:",
        table: {
          headers: ["Faktor", "Tradisjonell ansettelsesprosess", "Syntax & Flow-modellen"],
          rows: [
            ["<strong>Varighet på test</strong>", "45-60 minutter intervju", "3–6 måneders aktivt prosjektsamarbeid"],
            ["<strong>Datagrunnlag</strong>", "Søknadsbrev og CV", "Faktiske nettsider, Figmaskisser og markedsrapporter på portalen"],
            ["<strong>Kostnad</strong>", "Headhunter koster 20-30% av årslønn. Annonsering er dyrt.", "Gratis (betales med tidsinvestering i prosjektet)"],
            ["<strong>Kvalitetsgaranti</strong>", "Ingen, karakterer sier lite om team-evner", "Verifisert historikk kvalitetssikret av HiØ-mentorer"]
          ]
        }
      },
      {
        heading: "3. Juridisk vurdering: Personvern & GDPR",
        text: "En vurdering på portalen er en behandling av personopplysninger (GDPR art. 4 nr. 2) og krever strenge rammer:",
        table: {
          headers: ["Vurderingstype", "Klassifisering under GDPR", "Rettslig krav / Forbehold"],
          rows: [
            ["<strong>Strukturerte kriterier</strong> (1-5 på samarbeid, faglig nivå)", "Alminnelige personopplysninger", "Krever klart behandlingsgrunnlag. Bør baseres på **frivillig samtykke** (art. 6 nr. 1(a))."],
            ["<strong>Fritekstkommentarer</strong> (negative påstander)", "Svært inngripende for studentens karriere", "<strong>Bør unngås helt.</strong> Høy risiko for uriktighet, ærekrenkelse og krav om sletting."],
            ["<strong>Helse/fraværsdata</strong>", "Særlige kategorier av personopplysninger (art. 9)", "<strong>Strengt forbudt</strong> å behandle på portalen uten eksplisitte samtykke- og sikkerhetsvilkår."]
          ]
        }
      },
      {
        heading: "4. Studentens Rettigheter",
        text: "Siden studentene vurderes på en offentlig plattform, må de ha sterke rettigheter for å ivareta personvernet:",
        table: {
          headers: ["Rettighet", "GDPR Artikkel", "Funksjonelt krav i portalen"],
          rows: [
            ["<strong>Innsynsrett</strong>", "Artikkel 15", "Studenten skal ha full tilgang til å se alle vurderinger og logger lagret om seg selv."],
            ["<strong>Sletterett (Right to be forgotten)</strong>", "Artikkel 17", "Studenten kan når som helst kreve profil og vurderinger slettet (utføres innen 30 dager)."],
            ["<strong>Rettingsrett</strong>", "Artikkel 16", "Studenten kan kreve at uriktige eller villedende opplysninger rettes umiddelbart."],
            ["<strong>Begrensningsrett</strong>", "Artikkel 18", "Mulighet for studenten til å skjule profilen midlertidig dersom det oppstår tvist om en vurdering."]
          ]
        }
      },
      {
        heading: "5. Forskjellen fra tradisjonelle referanser",
        text: "Tabellen viser hvorfor portalen krever strengere jus enn en vanlig referanseperson på en CV:",
        table: {
          headers: ["Faktor", "Tradisjonell referanse", "Syntax & Flow-portal"],
          rows: [
            ["<strong>Mottaker</strong>", "Sendes til én spesifikk potensiell arbeidsgiver av gangen", "Synlig for alle godkjente bedrifter registrert i portalen"],
            ["<strong>Konfidensialitet</strong>", "Høy grad av konfidensialitet (muntlig samtale)", "Elektronisk lagret og tilgjengelig i database"],
            ["<strong>Rettslig grunnlag</strong>", "Ulovfestet sedvane, unntatt taushetsplikt", "Skriftlig avtalt samtykke etter GDPR"],
            ["<strong>Studentens status</strong>", "Arbeidstaker (vernet av arbeidsmiljøloven)", "Student under utdanning (krever kompensatoriske rettigheter i portalen)"]
          ]
        }
      },
      {
        heading: "6. Design: Rubric-basert vurdering (1-5)",
        text: "For å sikre objektive og ikke-diskriminerende tilbakemeldinger, brukes en fast definert rubric-skala i stedet for fritekst:",
        table: {
          headers: ["Kriterium", "Nivå 1-2 (Tilstrekkelig / God)", "Nivå 3-4 (Selvstendig / Meget god)", "Nivå 5 (Fremragende)"],
          rows: [
            ["<strong>Faglig kompetanse</strong>", "Kunne utføre enkle oppgaver under veiledning", "Selvstendig i kjente oppgaver og nye områder", "Ekspertnivå. Har veiledet andre i teamet."],
            ["<strong>Samarbeid</strong>", "Fungerte i teamet, men bidro i liten grad selvstendig", "God lagspiller som bidrar aktivt til teamdynamikken", "Løftet hele teamet og løste interne utfordringer."],
            ["<strong>Kommunikasjon</strong>", "Kommuniserte greit, men trengte støtte ved kundemøter", "Tydelig og presis kommunikasjon tilpasset mottakeren", "Fremragende formidlingsevne og forhandlingsteknikk."],
            ["<strong>Gjennomføring</strong>", "Leverte oppgaver etter purring eller noe forsinket", "Leverte oppgaver til avtalt tid med god kvalitet", "Ekstraordinær planlegging og leveranse før fristen."],
            ["<strong>Kundeforståelse</strong>", "Forsto kundens behov etter grundig forklaring", "Forsto og tolket behovene til funksjonelle krav", "Identifiserte underliggende behov og overgikk forventninger."]
          ]
        }
      },
      {
        heading: "7. Tilgangsstyring & Designprinsipper",
        points: [
          "<strong>Opt-in:</strong> Det er 100 % frivillig å ha en synlig profil på portalen. Studenten kan velge bare å ta emnet.",
          "<strong>Tilgangskontroll:</strong> Kun bedrifter registrert i Brønnøysund og som har signert en brukeravtale får tilgang til å søke i studentprofilene.",
          "<strong>Kvalitetssikring:</strong> Faglig mentor (HiØ-ansatt) gjennomgår og godkjenner alle vurderinger før de blir synlige for eksterne.",
          "<strong>Ingen rangering:</strong> Portalen skal ikke rangere studentene i en liste (f.eks. 'beste studenter'), for å unngå usunt press og juks.",
          "<strong>Diskrimineringsovervåkning:</strong> Stiftelsens styre skal årlig gå gjennom statistikk for å sikre at det ikke forekommer kjønnsmessige eller etniske skjevheter i kundenes vurderinger."
        ]
      }
    ]
  },
  {
    id: "ordliste",
    title: "Ordliste",
    category: "Dokumenter",
    icon: "BookOpen",
    lead: "Forklaring på fagbegreper og forkortelser som brukes i Syntax & Flow-prosjektet.",
    sections: [
      {
        heading: "A–C",
        table: {
          headers: ["Begrep", "Forklaring"],
          rows: [
            ["<strong>Adoption & Retention</strong>", "Strategier for å få kunder til å ta i bruk et produkt (adoption) og fortsette å bruke det over tid (retention)."],
            ["<strong>Ambassadørprogram</strong>", "Ordning der fornøyde kunder eller partnere promoterer produktet/tjenesten frivillig, ofte i bytte mot fordeler."],
            ["<strong>AML</strong>", "Arbeidsmiljøloven. Regulerer arbeidstakeres rettigheter og arbeidsgivers plikter."],
            ["<strong>Arbeidsmarkedstiltak</strong>", "Tiltak finansiert av NAV for å hjelpe personer inn i arbeid, f.eks. arbeidstrening."],
            ["<strong>B2G (Business-to-Government)</strong>", "Forretningsmodell der bedrifter leverer tjenester eller produkter to offentlig sektor (f.eks. høyskoler eller kommuner)."],
            ["<strong>Bottom-up</strong>", "Markedsførings- eller implementeringsstrategi som starter på grasrotnivå (f.eks. hos studenter eller enkelte avdelinger) og beveger seg oppover i organisasjonen."],
            ["<strong>CAC (Customer Acquisition Cost)</strong>", "Kostnaden ved å skaffe en ny kunde, inkludert markedsføring, salg og oppfølging."],
            ["<strong>Change Management</strong>", "Strukturert tilnærming til å hjelpe mennesker og organisasjoner gjennom endringsprosesser."],
            ["<strong>Churn Rate</strong>", "Andel kunder som slutter å bruke tjenesten over en gitt periode. Lav churn = høy kundelojalitet."],
            ["<strong>CLTV / Customer Lifetime Value</strong>", "Hvor mye en kunde totalt forventes å innbringe i løpet av hele kundeforholdet."],
            ["<strong>CLV (Customer Lifetime Value)</strong>", "Samme som CLTV. Total forventet verdi av et kundeforhold over hele levetiden."],
            ["<strong>COS (Cost of Services)</strong>", "Kostnaden ved å levere en tjeneste — inkluderer timer, verktøy og eventuelle underleverandører."]
          ]
        }
      },
      {
        heading: "D–G",
        table: {
          headers: ["Begrep", "Forklaring"],
          rows: [
            ["<strong>De minimis</strong>", "Bagatellmessig støtte. Statsstøtte under 300 000 EUR over 3 år per kunde — så lite at det ikke regnes som ulovlig og krever ikke ESA-godkjenning."],
            ["<strong>DPIA</strong>", "Data Protection Impact Assessment. Konsekvensvurdering for personvern som må gjøres før behandling av personopplysninger."],
            ["<strong>DPO</strong>", "Data Protection Officer. Personvernansvarlig."],
            ["<strong>Early adopter</strong>", "En kunde som er tidlig ute med å ta i bruk et nytt produkt eller tjeneste, ofte avgjørende for markedsvalidering."],
            ["<strong>ESA</strong>", "EFTAs overvåkingsorgan. Overvåker at Norge følger EØS-avtalen, inkludert statsstøttereglene."],
            ["<strong>Evighetsprosjekt</strong>", "Internt prosjekt som går over flere semestre. Hvert kull overtar der forrige slapp."],
            ["<strong>Executive Summary</strong>", "Kort sammendrag av en forretningsplan eller rapport som gir leseren rask oversikt over hele innholdet."]
          ]
        }
      },
      {
        heading: "G–L",
        table: {
          headers: ["Begrep", "Forklaring"],
          rows: [
            ["<strong>GDPR</strong>", "General Data Protection Regulation. EUs personvernforordning, innlemmet i norsk lov gjennom personopplysningsloven."],
            ["<strong>GTM</strong>", "Go-To-Market. Strategi for hvordan et produkt eller tjeneste lanseres i markedet."],
            ["<strong>IP</strong>", "Investor Proposal. Forslag eller presentasjon rettet mot investorer for å sikre finansiering."],
            ["<strong>IPR</strong>", "Intellectual Property Rights. Åndsverk og immaterielle rettigheter (kode, design, patenter)."],
            ["<strong>Justification</strong>", "Begrunnelse eller forsvaring av en beslutning, et prosjekt eller en investering — hvorfor noe er nødvendig eller lønnsomt."],
            ["<strong>LOI (Letter of Intent)</strong>", "Intensjonsavtale. Et ikke-bindende dokument som bekrefter at en part har til hensikt å inngå en avtale eller samarbeid."]
          ]
        }
      },
      {
        heading: "L–P",
        table: {
          headers: ["Begrep", "Forklaring"],
          rows: [
            ["<strong>MVA</strong>", "Merverdiavgift. Avgift på omsetning av varer og tjenester. Grense for registrering: 50 000 kr/år."],
            ["<strong>NOKUT</strong>", "Nasjonalt organ for kvalitet i utdanningen. Fører tilsyn med høyere utdanning."],
            ["<strong>NPS</strong>", "Net Promoter Score. Måling av kundetilfredshet på en skala fra 0–10."]
          ]
        }
      },
      {
        heading: "O–R",
        table: {
          headers: ["Begrep", "Forklaring"],
          rows: [
            ["<strong>OTP</strong>", "Obligatorisk tjenestepensjon. Pensjonsordning som arbeidsgivere må tilby ansatte."],
            ["<strong>Persona</strong>", "Fiktiv brukerprofil som representerer en målgruppe, brukt i design og markedsføring for å forstå behov og adferd."],
            ["<strong>Prisstrategi</strong>", "Plan for hvordan et produkt eller tjeneste skal prises for å oppnå ønsket posisjonering og lønnsomhet."],
            ["<strong>Pro bono</strong>", "Latin for «det godes skyld». Tjenester som leveres gratis, ofte for ideelle formål."],
            ["<strong>Proof of Concept (PoC)</strong>", "En tidlig test eller prototype som viser at en idé eller løsning er gjennomførbar i praksis."],
            ["<strong>Proof of Interest</strong>", "Dokumentasjon på at det finnes reell interesse eller etterspørsel fra potensielle kunder."]
          ]
        }
      },
      {
        heading: "R–S",
        table: {
          headers: ["Begrep", "Forklaring"],
          rows: [
            ["<strong>Recovery</strong>", "Tilbakebetaling av ulovlig statsstøtte med renter. Pålegges av ESA når støtte er gitt i strid med EØS-avtalen."],
            ["<strong>RGE (Residual Gross Earnings)</strong>", "Fortjeneste som gjenstår etter at direkte kostnader er trukket fra. Måler hvor lønnsom kjernedriften er før faste kostnader."],
            ["<strong>Risk Management</strong>", "Prosessen med å identifisere, vurdere og håndtere risikoer i et prosjekt eller en organisasjon."],
            ["<strong>ROI</strong>", "Return on Investment. Avkastning på investering. Måler hvor lønnsom en investering er."],
            ["<strong>Rubric</strong>", "Rubric (vurderingsmatrise). Strukturerte kriterier for vurdering, f.eks. 1–5 på definerte dimensjoner."],
            ["<strong>SLA</strong>", "Service Level Agreement. Avtale om leveransenivå og garantier. Syntax & Flow tilbyr normalt ikke SLA."],
            ["<strong>Stakeholder</strong>", "Interessent. En person eller gruppe som har interesse i eller påvirkes av et prosjekt."],
            ["<strong>Stakeholder Management</strong>", "Prosessen med å kartlegge, kommunisere med og håndtere forventningene til interessenter."],
            ["<strong>Storyboard</strong>", "Visuell fremstilling av en brukerreise eller prosess, bilde for bilde, brukt i design og planlegging."]
          ]
        }
      },
      {
        heading: "S–Å",
        table: {
          headers: ["Begrep", "Forklaring"],
          rows: [
            ["<strong>SiØ</strong>", "Studentsamskipnaden i Østfold. Tilbyr velferdstjenester til studenter ved HiØ."],
            ["<strong>Spor 1</strong>", "Dagens ordning basert på det eksisterende studieemnet ITD35014 Bedriftspraksis (10 stp). Målet på sikt er å utvide emnet til 15–30 stp for å sikre rett til støtte fra Lånekassen uten krav om andre emner ved siden av."],
            ["<strong>Spor 2</strong>", "Tidligere planlagt deltidssport (10 stp) som er fjernet fra modellen, da det ikke finnes et egnet 5 stp-emne ved HiØ å kombinere med for å nå 15 stp-grensen."],
            ["<strong>Spor 3</strong>", "NAV-samarbeid rettet mot deltakere utenfor det ordinære studieløpet. Sporet er utsatt til etter pilotfasen (Fase 4)."],
            ["<strong>Støtteregister</strong>", "Løpende logg over markedsverdi av tjenester per kunde. Brukes for å kontrollere de minimis-grensen."],
            ["<strong>TAM (Total Addressable Market)</strong>", "Totalt marked for et produkt eller tjeneste, altså maksimal inntekt hvis alle potensielle kunder kjøper."],
            ["<strong>Top-down</strong>", "Markedsføringsstrategi som starter hos ledelsen/store aktører og jobber seg nedover i organisasjonen."],
            ["<strong>Unfair Advantage</strong>", "En varig konkurransefordel som er vanskelig for andre å kopiere."],
            ["<strong>User Journey</strong>", "Brukerreise. En trinnvis beskrivelse eller visualisering av hvordan en bruker opplever og samhandler med et produkt eller tjeneste over tid."],
            ["<strong>Value Proposition Canvas (VPC)</strong>", "Verktøy for å kartlegge verdien et produkt/tjeneste gir en målgruppe."],
            ["<strong>Verdiskapning / Value Creation</strong>", "Prosessen med å skape merverdi for kunder, studenter eller samfunnet gjennom produktet eller tjenesten."]
          ]
        }
      }
    ]
  }
];
