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
        text: "Syntax & Flow er et studentdrevet konsulentselskap som bygger broen mellom akademia og arbeidslivet ved Høgskolen i Østfold (HiØ). Her løser vi reelle problemer for lokale bedrifter gjennom tverrfaglige student-team innen IT, Design og Økonomi."
      },
      {
        heading: "Hvordan bruke denne Wikien",
        text: "Bruk sidemenyen til å navigere mellom de ulike kapitlene av prosjektet. Hvis du lurer på noe underveis i prosjektgjennomføringen – enten det gjelder retningslinjer, analyser som skal kjøres, eller hva som skal leveres til kunden – finner du det her. Trykk CMD+K (eller CTRL+K) for å søke på tvers av hele dokumentasjonen."
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
        heading: "Tre Hovedmål",
        points: [
          "<strong>For studentene:</strong> Levere praktisk erfaring, CV-referanser og nettverk som sikrer rask overgang til arbeidslivet etter fullførte studier.",
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
        heading: "De Tre Deltakerordningene (Rekrutteringsspor)",
        text: "Deltakerne rekrutteres inn i bedriften gjennom tre ulike spor:",
        table: {
          headers: ["Spor", "Omfang", "Målgruppe", "Finansiering"],
          rows: [
            ["Spor 1: Bedriftspraksis (Fulltid)", "60 studiepoeng per år", "Nyutdannede bachelor/master-kandidater", "Fulltids utdanningsstøtte (Lånekassen)"],
            ["Spor 2: Bedriftspraksis (Deltid)", "10 studiepoeng per semester (12.5 - 15t/uke)", "Aktive studenter underveis i studiet", "Lånekassen (gradert støtte)"],
            ["Spor 3: Arbeidstrening via NAV", "20% - 100% stilling (individuell tiltaksplan)", "Personer utenfor arbeidsmarkedet med IT/Design/Økonomi-bakgrunn", "Tiltakspenger/dagpenger dekket av NAV"]
          ]
        }
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
    category: "Hovedsider",
    icon: "BarChart3",
    lead: "Hvordan Syntax & Flow skaper verdi gjennom en unik pro-bono modell.",
    sections: [
      {
        heading: "Win-Win-Win Forretningsmodell",
        text: "Siden tjenestene våre er helt gratis for bedrifter, er modellen bygget på ikke-monetær verdiutveksling:",
        points: [
          "<strong>Studenten får:</strong> Erfaring, nettverk, CV-referanser, attest og trygge praksisrammer.",
          "<strong>Bedriften får:</strong> Løst sine IT-, design- eller økonomiutfordringer uten direkte kostnader, samt anledning to teste potensielle fremtidige ansatte.",
          "<strong>Høgskolen får:</strong> Økt studiekvalitet, mindre frafall, og tettere kobling til næringslivet."
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
    ],
    vpcs: [
      {
        target: "Studentene",
        colorTheme: "student",
        description: "Value Proposition Canvas for studenter som søker broen fra teori to praksis.",
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
            "En myk og støttet overgang fra student to fast ansatt i næringslivet."
          ]
        },
        valueMap: {
          products: [
            "Deltakelse i faget Bedriftspraksis gjennom Syntax & Flow.",
            "Arbeid i et tverrfaglig in-house konsulentmiljø med IT, design og økonomi samlet under ett tak."
          ],
          painRelievers: [
            "Økonomisk forutsigbarhet: Finansiering via Lånekassen (støtte/lønn) gjør at studenten kan jobbe med relevant praksis.",
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
        customerProfile: {
          jobs: [
            "Levere studiekvalitet: Tilby utdanninger som gjør kandidatene attraktive på arbeidsmarkedet.",
            "Styrke omdømmet: Fremstå som en moderne, praksisnær og fremtidsrettet utdanningsinstitusjon.",
            "Sikre gjennomstrømming: Sikre at studentene fullfører gradene innen normert tid.",
            "Oppfylle samfunnsmandatet: Knytte tettere bånd to det regionale samfunns- og næringslivet."
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
            "Administrativ avlastning: Studentledelsen i Syntax & Flow håndterer prosjektene og kundekontakten.",
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
            "Tilgang to tverrfaglig digital kompetanse (IT, design, økonomi) tilpasset bedriftens behov.",
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
    id: "tjenester-og-leveranser",
    title: "Tjenester & Leveranser",
    category: "Hovedsider",
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
        text: "Alle fullførte prosjekter må publiseres digitalt på vår nettportal. Dette fungerer som:",
        points: [
          "<strong>Kompetanse-showcase:</strong> En offentlig portefølje der studentene viser frem kildekoden, Figma-skissene og de økonomiske analysene de har utført.",
          "<strong>Passiv markedsføring:</strong> Potensielle kunder ser hva vi har bygget gratis for andre, noe som tiltrekker nye søkere til ordningen."
        ]
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
          "<strong>Krav to progresjon:</strong> Kun studenter som har bestått alle fag og er i sitt siste år (eller nyutdannede) kvalifiseres."
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
    icon: "Milestone",
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
        "<strong>Lånekassestøtte ikke avklart:</strong> Støtte til emne etter fullført grad krever forhåndsgodkjenning.",
        "<strong>Minstegrense på 15 stp:</strong> Spor 2 (10 stp) kvalifiserer ikke for støtte og må redesignes.",
        "<strong>Statsstøtterisiko (EØS):</strong> Skolens ressurser kan anses som ulovlig støtte til eksterne bedrifter.",
        "<strong>Rettslig gråsone for studentene:</strong> Uklart om studentene kan anses som arbeidstakere.",
        "<strong>Konkurranseklager:</strong> Lokale byråer kan klage på prisdumping og subsidiering.",
        "<strong>Forsikringsansvar:</strong> Manglende ansvarsforsikring ved kritisk feil i levert kode."
      ]
    },
    risks: [
      {
        id: 1,
        title: "Støtte fra Lånekassen (Spor 1/2)",
        sannsynlighet: 3,
        konsekvens: 5,
        alvorlighet: "Kritisk",
        beskrivelse: "Lånekassen godkjenner ikke emne tatt etter fullført grad, eller avslår Spor 2 fordi det er under 15 studiepoeng.",
        tiltak: "Innhente forhåndsuttalelse fra Lånekassen; redesign av Spor 2 til minst 15 studiepoeng (50% studiebelastning)."
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
        beskrivelse: "Etablerte konsulentbyråer klager inn prosjektet for konkurransevridning og dumping.",
        tiltak: "Posisjonere oss strengt mot mikrovirksomheter og oppstartsbedrifter som uansett ikke har råd til kommersielle priser."
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
        text: "Det er ikke et krav i loven at emner må tas før en grad er fullført. Utfordringen ligger i om Lånekassen anser studenten for å være i reell framdrift dersom emnet ikke leder til en ny grad. Spor 2 (10 stp) må økes til minst 15 stp for å kvalifisere til basisstøtte (minstekrav for 50% studiebelastning)."
      },
      {
        title: "2. NAV (Samlokalisering & Rettsgrunnlag)",
        text: "Det er fullt lovlig at NAV-deltakere samarbeider med studenter i samme team. Utfordringen er at de har ulike rettsgrunnlag og rapporteringsplikter. NAV-deltakere er underlagt NAVs aktivitetsplikt og helseopplysninger må beskyttes strengt pga. taushetsplikt."
      },
      {
        title: "3. Konkurranseloven & Markedsføring",
        text: "Det å levere gratis tjenester er ikke forbudt i seg selv. Men urettmessig prisdumping støttet av offentlige høyskolemidler kan utløse klager. Derfor er det kritisk å kun rette markedsføringen mot mikrovirksomheter og gründere som ikke har kommersiell betalingsevne."
      },
      {
        title: "4. Statsstøtte & EØS (HiØs subsidiering)",
        text: "Dette regnes som den største risikoen. HiØs bidrag i form av gratis kontorer, mentorforelesere og skolenavn kan regnes som indirekte statsstøtte til bedriftene. Løsningen er å benytte reglene for 'de minimis-støtte' (bagatellmessig støtte) og skille stiftelsen ut som en egen juridisk enhet fra skolen."
      },
      {
        title: "5. Arbeidsmiljøloven (Klassifisering)",
        text: "Det er fare for at studenter blir ansett som reelle arbeidstakere dersom Syntax & Flow instruerer dem som en vanlig sjef, krever stempling av timer og kontrollerer arbeidet detaljert. Det må fokuseres på læringsutbytte, veiledning fremfor instruksjon, og karaktervurdering."
      },
      {
        title: "6. Ansvarsforhold (Skader & Kontrakter)",
        text: "En studentfeil er ikke det samme som en profesjonell feil i rettslig forstand, men organisasjonen kan holdes ansvarlig for feil i kildekode. Tydelige ansvarsfraskrivelser i kundenes kontrakter ('leveres as-is' uten garanti) er påkrevd, og det bør tegnes en ansvarsforsikring."
      },
      {
        title: "7. Skatt & MVA (Ideell drift)",
        text: "Så lenge det ikke er omsetning eller profittmotiv, er Syntax & Flow fritatt for MVA og skatt etter skatteloven § 2-30. Det må sikres at ikke kundenes tidsinvestering tolkes som et 'bytte av ytelser' som utløser skatteplikt."
      },
      {
        title: "8. Anbefalt Organisasjonsform",
        text: "Det anbefales å opprette **Syntax & Flow AS** som eies 100% av en ideell stiftelse (**Syntax & Flow Stiftelse**). AS-et sikrer begrenset ansvar for drift, mens stiftelsen sikrer at alt eventuelt overskudd går tilbake til allmennyttige formål."
      },
      {
        title: "9. Personvern & GDPR (DPIA)",
        text: "Særlig for NAV-deltakere kan helseopplysninger forekomme. Det må gjennomføres en konsekvensutredning for personvern (DPIA) før portalen opprettes, og studenter må gi samtykke før prosjektene deres publiseres offentlig."
      },
      {
        title: "10. HiØs omdømmerisiko",
        text: "Høgskolen risikerer omdømmetap ved feilede prosjekter og sanksjoner fra Lånekassen. Det må foreligge en skriftlig samarbeidsavtale mellom HiØ og Syntax & Flow som avklarer at HiØ ikke har arbeidsgiveransvar, og at mentorer kun veileder."
      }
    ]
  }
];
