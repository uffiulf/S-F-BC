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
        text: "Det er ikke et krav i loven at emner må tas før en grad er fullført. Utfordringen ligger i om Lånekassen anser studenten for å være i reell framdrift dersom emnet ikke leder til en ny grad. Spor 2 (10 stp) må økes til minst 15 stp for å kvalifisere til basisstøtte (minstekrav for 50% studiebelastning).",
        sources: [
          { name: "Lov om utdanningsstøtte § 4", url: "https://lovdata.no/lov/2005-06-03-37" },
          { name: "Forskrift om utdanningsstøtte", url: "https://lovdata.no/forskrift/2014-12-19-1742" }
        ],
        details: [
          {
            heading: "1.1 Kan studenter motta Lånekassestøtte for «Bedriftspraksis» etter fullført grad?",
            text: "<strong>Utgangspunkt:</strong> Lånekassen yter støtte to godkjente utdanninger ved godkjente læresteder, jf. lov om utdanningsstøtte § 4 med tilhørende forskrift. Det er ikke noe vilkår i loven at emnet må tas <em>før</em> graden er fullført. Hovedregelen er at støtte gis til ordinære studieløp — grunn-, etter- og videreutdanning.<br/><br/><strong>Spor 1 (30 stp/semester fulltid):</strong> Etter Lånekassens regler må en student normalt oppnå minst 30 studiepoeng per semester for å beholde retten til støtte. Dersom «Bedriftspraksis» er et godkjent emne ved HiØ med 30 stp per semester, vil Spor 1 i utgangspunktet oppfylle dette kravet. Det avgjørende er at HiØ oppretter emnet og at det <strong>formelt inngår i HiØs emnetilbud</strong> — ikke at det er en del av en bestemt grad.<br/><br/><strong>Utfordring:</strong> Lånekassen krever at støttemottakeren er en <strong>«reell student»</strong> og har <strong>framdrift i utdanningen</strong>. Dersom studenten allerede har fullført en grad, og det nye emnet ikke leder frem til en ny grad, kan Lånekassen stille spørsmål ved emnets reelle utdanningsformål. Særlig risiko knytter seg til:",
            points: [
              "<strong>Fordypningskravet:</strong> Lånekassen kan kreve at emnet må være en naturlig faglig fordypning eller et strukturert påbygningsstudium.",
              "<strong>Samlet støttetid:</strong> Studenter som allerede har brukt opp sin ordinære støtteperiode (f.eks. 3 år bachelor + 2 år master = 5 år), vil normalt ikke få mer støtte med mindre de tar en ny grad eller et strukturert etter-/videreutdanningsløp."
            ]
          },
          {
            heading: "Spor 2 (10 stp/semester deltid):",
            text: "Lånekassen gir forholdsmessig redusert støtte ved deltidsstudier. Minstekravet for støtte er normalt <strong>15 stp per semester</strong> (50 % studiebelastning). Spor 2 slik det er beskrevet (10 stp) vil <strong>ikke kvalifisere</strong> for Lånekassestøtte med mindre det gjøres unntak eller studenten kombinerer med andre emner."
          },
          {
            heading: "1.2 Konkrete krav for Lånekassens godkjenning",
            points: [
              "<strong>HiØ must opprette emnet formelt:</strong> Godkjent av høgskolestyret og registrert i FS (felles studentsystem) og DBH (Database for statistikk om høgre utdanning).",
              "<strong>Faglig begrunnelse og læringsmål:</strong> Emnet kan ikke bare være arbeidspraksis uten læringsmål. Det må ha formelle læringsutbyttebeskrivelser (kunnskap, ferdigheter, generell kompetanse), vurderingsformer (mappe, rapport, prosjektevaluering) og faglig veiledning/mentoring.",
              "<strong>Reelle studiepoeng:</strong> 30 stp skal tilsvare 800–900 timers arbeid (27 timer per stp). Dersom HiØ tildeler 30 stp for arbeid som i realiteten er fulltidsarbeid for en ekstern bedrift uten akademiske komponenter, kan Lånekassen og NOKUT stille spørsmål ved kvaliteten og realiteten i emnet.",
              "<strong>Søknad til Lånekassen:</strong> Lærestedet må søke om å få emnet godkjent for støtte. Godkjenningen er ikke automatisk."
            ]
          },
          {
            heading: "1.3 Risikovurdering",
            table: {
              headers: ["Risiko", "Sannsynlighet", "Konsekvens"],
              rows: [
                ["Lånekassen avslår støtte for Spor 1 (fullført grad)", "Middels", "Kritisk — modellen faller"],
                ["Lånekassen avslår støtte for Spor 2 (10 stp)", "Høy", "Spor 2 må redesignes"],
                ["Lånekassen krever tilbakebetaling etter tilsyn", "Lav til middels", "Alvorlig for den enkelte student"]
              ]
            }
          },
          {
            heading: "1.4 Anbefaling",
            points: [
              "Innhent en <strong>forhåndsuttalelse fra Lånekassen</strong> før oppstart.",
              "Vurder å gjøre Spor 2 til 15 eller 30 stp for å sikre støtte.",
              "Sikre at emnebeskrivelsen har tydelige faglige læringsmål, ikke bare «arbeidspraksis»."
            ]
          }
        ]
      },
      {
        title: "2. NAV (Samlokalisering & Rettsgrunnlag)",
        text: "Det er fullt lovlig at NAV-deltakere samarbeider med studenter i samme team. Utfordringen er at de har ulike rettsgrunnlag og rapporteringsplikter. NAV-deltakere er underlagt NAVs aktivitetsplikt og helseopplysninger må beskyttes strengt pga. taushetsplikt.",
        sources: [
          { name: "Lov om arbeidsmarkedstjenester § 12", url: "https://lovdata.no/lov/2004-12-10-76" },
          { name: "Forskrift om arbeidsrettede tiltak", url: "https://lovdata.no/forskrift/2015-12-11-1598" }
        ],
        details: [
          {
            heading: "2.1 Kan NAV-deltakere være i samme bedrift som Lånekassen-studenter?",
            text: "Det er <strong>ikke forbudt</strong> at NAV-deltakere og Lånekassen-studenter samarbeider i samme organisasjon. NAVs tiltaksordninger (arbeidstrening, avklaring, lønnstilskudd) er fleksible og kan tilrettelegges i en studentbedrift."
          },
          {
            heading: "2.2 Sentrale rettslige hensyn",
            text: "<strong>Ulike rettsgrunnlag:</strong><br/>- Lånekassen-studenter er underlagt <strong>utdanningslovgivningen</strong> (studiekrav, progresjon, emnebeskrivelse)<br/>- NAV-deltakere er underlagt <strong>NAVs regelverk</strong> (tiltaksplan, oppfølgingsvedtak, aktivitetsplikt)<br/><br/><strong>Krav til NAV-tiltak:</strong> Arbeidstrening etter arbeidsmarkedsloven § 12 og forskrift om arbeidsrettede tiltak krever at tiltaket er <strong>meningsfullt</strong> og <strong>kvalifiserende</strong>. Deltakeren må ha en kontaktperson som følger opp. Dersom Syntax & Flow skal være en <strong>tiltaksarrangør</strong> (enhet som gjennomfører tiltak på vegne av NAV), må organisasjonen godkjennes av NAV og oppfylle krav til rapportering, kvalitetssikring og taushetsplikt.<br/><br/><strong>Tiltaksarrangør eller vertsvirksomhet?</strong><br/>- Hvis Syntax & Flow kun stiller med praksisplass, er NAV ansvarlig for tiltaket, og Syntax & Flow er vertsvirksomhet.<br/>- Hvis Syntax & Flow har detaljert styring og oppfølging, kan de anses som tiltaksarrangør og må oppfylle strengere krav.<br/><br/><strong>Særlig om lønnstilskudd (Spor 3):</strong> Hvis NAV crisis lønnstilskudd til Syntax & Flow for å ansette deltakeren, blir Syntax & Flow <strong>arbeidsgiver</strong> med fulke arbeidsgiverforpliktelser (arbeidsavtale, HMS, pensjon, sykepenger)."
          },
          {
            heading: "2.3 Risikoer ved samspill mellom spor",
            table: {
              headers: ["Problem", "Vurdering"],
              rows: [
                ["Ulik finansiering skaper ulik status", "Lånekassen-studenter får stipend/lån (ikke lønn), NAV-deltakere får tiltakspenger. Kan skape forskjellsbehandling i praksis."],
                ["Arbeidstid", "Lånekassen krever progresjon mot 30 stp, NAV krever aktivitetsplan. Ulik rapporteringsplikt."],
                ["Taushetsplikt", "NAV-deltakeres helseopplysninger er underlagt forvaltningsloven § 13 og helsepersonelloven, mens studentopplysninger er under universitets- og høyskoleloven."]
              ]
            }
          },
          {
            heading: "2.4 Anbefaling",
            points: [
              "Inngå skriftlig <strong>samarbeidsavtale med NAV</strong> før Spor 3 startes.",
              "Vurder å kun benytte tiltaket Arbeidstrening (tidligere «praksisplass») fremfor lønnstilskudd første år, for å unngå arbeidsgiveransvar.",
              "Ha <strong>adskilte avtaleverk</strong> for Lånekassen- og NAV-deltakere."
            ]
          }
        ]
      },
      {
        title: "3. Konkurranseloven & Markedsføring",
        text: "Det å levere gratis tjenester er ikke forbudt i seg selv. Men urettmessig prisdumping støttet av offentlige høyskolemidler kan utløse klager. Derfor er det kritisk å kun rette markedsføringen mot mikrovirksomheter og gründere som ikke har kommersiell betalingsevne.",
        sources: [
          { name: "Konkurranseloven", url: "https://lovdata.no/lov/2004-03-05-12" },
          { name: "Markedsføringsloven § 6", url: "https://lovdata.no/lov/2009-01-09-2" }
        ],
        details: [
          {
            heading: "3.1 Er det lovlig å tilby gratis konsulenttjenester til næringslivet?",
            text: "Det er i utgangspunktet <strong>ikke ulovlig</strong> å tilby gratis tjenester. Verken konkurranseloven eller markedsføringsloven forbyr prissetting til kr 0. Problemstillingen oppstår først når gratistjenester fører til <strong>konkurransevridning</strong> i strid med EØS-avtalens statsstøtteregler (se punkt 4) eller markedsføringslovens generalklausul.<br/><br/><strong>Markedsføringsloven § 6 (god forretningsskikk):</strong> Gratistjenester kan være i strid med god forretningsskikk dersom de <em>fremstilles på en villedende måte</em> eller utnytter kundenes manglende forståelse. Dersom Syntax & Flow tydelig kommuniserer at tjenesten er gratis, at kvaliteten ikke er garantert, og at hensikten er opplæring, er dette neppe problematisk."
          },
          {
            heading: "3.2 Kan etablerte konsulentbyråer klage?",
            text: "<strong>Ja, det er sannsynlig at etablerte aktører vil klage.</strong> Flere mulige grunnlag:<br/><br/>1. <strong>Urimelig konkurranse (markedsføringsloven § 6):</strong> Dersom gratistjenestene fremstilles som likeverdige med kommersielle tjenester uten tilstrekkelige forbehold.<br/>2. <strong>Statsstøtte (EØS-avtalen art. 61):</strong> Dersom HiØs ressurser (lokaler, mentorer, merkevare) utgjør ulovlig statsstøtte som gir Syntax & Flow en økonomisk fordel.<br/>3. <strong>Dumping / underprising:</strong> Det finnes ikke et generelt forbud mot å prise under kost i norsk rett, men EØS-reglene gjelder om vi driver virksomhet i markedet med offentlig støtte.<br/><br/><strong>Hvem kan klage:</strong> Lokale IT-konsulenthus, designbyråer, bransjeorganisasjoner (f.eks. Abelia) eller enkeltpersoner.<br/><strong>Hvor klagen går:</strong> Konkurransetilsynet, ESA (statsstøtte), Forbrukertilsynet eller lokalpressen.<br/><strong>Risiko for klage: Høy.</strong>"
          },
          {
            heading: "3.3 Anbefaling",
            points: [
              "Vær <strong>transparent</strong> i all markedsføring: «Vi er studenter under opplæring — ingen garanti for leveransen».",
              "<strong>Posisjoner dere riktig:</strong> Kommuniser at dere kun retter dere mot mikrovirksomheter og gründere som ikke har råd til kommersielle byråer.",
              "Unngå å konkurrere direkte mot etablerte aktører.",
              "Hold en liste over avviste oppdrag for å dokumentere at dere ikke tar oppdrag som kommersielle aktører normalt ville tatt."
            ]
          }
        ]
      },
      {
        title: "4. Statsstøtte & EØS (HiØs subsidiering)",
        text: "Dette regnes som den største risikoen. HiØs bidrag i form av gratis kontorer, mentorforelesere og skolenavn kan regnes som indirekte statsstøtte til bedriftene. Løsningen er å benytte reglene for 'de minimis-støtte' og skille stiftelsen ut som en egen juridisk enhet.",
        sources: [
          { name: "EØS-avtalen art. 61–64", url: "https://lovdata.no/traktat/1992-05-02-1/art/61" }
        ],
        details: [
          {
            heading: "4.1 Hvorfor statsstøtte er verre enn de andre risikoene",
            text: "Statsstøtte/EØS kan føre til <strong>ubetinget tilbakebetalingsplikt (recovery)</strong> med renter for næringslivskundene, omdømmetap og strukturelle pålegg for HiØ. Det kan ikke fikses eller reverseres i ettertid.",
            table: {
              headers: ["Risikoområde", "Konsekvens ved brudd", "Hvem rammes?", "Kan det fikses?"],
              rows: [
                ["Lånekassen", "Mister støtte, emnet legges ned", "Studentene, prosjektet", "Ja — ny emnebeskrivelse"],
                ["Arbeidsmiljøloven", "Lønnskrav, feriepenger", "Studentene, organisasjonen", "Ja — etterbetaling"],
                ["Statsstøtte/EØS", "Tilbakebetaling med renter, omdømmetap", "HiØ, staten, næringslivskundene", "Nei — må tilbakebetales"]
              ]
            }
          },
          {
            heading: "4.2 Konkret analyse av EØS-avtalen art. 61(1)",
            text: "<strong>Vilkår 1: Statlige midler:</strong> HiØs bidrag (mentorer, lokaler, merkevare) har en anslått årlig verdi på 370 000–770 000 kr. Siden dette står under offentlig kontroll, er vilkåret oppfylt.<br/><strong>Vilkår 2: Økonomisk fordel:</strong> Kundene mottar gratis tjenester de ellers måtte betalt markedskostnad for. (Unntatt de minimis-støtte under 300 000 euro over 3 år).<br/><strong>Vilkår 3: Selektivitet:</strong> Støtten er geografisk og skjønnsmessig avgrenset.<br/><strong>Vilkår 4: Konkurransevridning:</strong> Terskelen er ekstremt lav; tjenestene kan påvirke samhandelen i EØS-området."
          },
          {
            heading: "4.3 Tre scenarier",
            points: [
              "<strong>Scenario A (Best case):</strong> Modellen faller inn under 'de minimis'-unntaket og drives som separat enhet (AS/Stiftelse).",
              "<strong>Scenario B (Sannsynlig):</strong> En konkurrent klager, ESA gransker, og modellen må justeres (skille ut enhet, ta betalt).",
              "<strong>Scenario C (Worst case):</strong> Pålegg om tilbakebetaling (recovery) fra kundene med renter, fulgt av erstatningssøksmål."
            ]
          },
          {
            heading: "4.4 Praktiske tiltak for å redusere risikoen",
            points: [
              "Etabler juridisk skille mellom HiØ og Syntax & Flow (AS eid av ideell stiftelse).",
              "Inngå skriftlig samarbeidsavtale med markedspris for mentortimer og lokaler.",
              "Før nøyaktig støtteregister per kunde og hold alle under de minimis-terskelen.",
              "Søk forhåndsavklaring fra Kunnskapsdepartementet."
            ]
          },
          {
            heading: "4.5 Tidslinje og prosess",
            table: {
              headers: ["Fase", "Risiko", "Tiltak"],
              rows: [
                ["Forberedelse (nå → 3 mnd)", "Lav", "Inngå avtale med markedspris — kritisk vindu"],
                ["Oppstart (3 → 6 mnd)", "Moderat", "Fakturer markedspris, dokumenter alt"],
                ["Drift (6 → 18 mnd)", "Høy", "Overvåk de minimis-terskelen"],
                ["Etablert (18+ mnd)", "Moderat til høy", "Vurder søknad til ESA om forenelighet"]
              ]
            }
          }
        ]
      },
      {
        title: "5. Arbeidsmiljøloven (Klassifisering)",
        text: "Det er fare for at studenter blir ansett som reelle arbeidstakere dersom Syntax & Flow instruerer dem detaljert, krever stempling av timer og kontrollerer arbeidet. Det må fokuseres på læringsutbytte, veiledning fremfor instruksjon, og karaktervurdering.",
        sources: [
          { name: "Arbeidsmiljøloven § 1-8", url: "https://lovdata.no/lov/2005-06-17-62" },
          { name: "Universitets- og høyskoleloven", url: "https://lovdata.no/lov/2005-04-01-15" }
        ],
        details: [
          {
            heading: "5.1 Klassifisering av studentene",
            text: "Feilklassifisering kan føre til krav om lønn, feriepenger, OTP (tjenestepensjon) og sykepenger. Vi må vurdere tre mulige klassifiseringer:<br/><br/><strong>Alternativ A: Student (utdanning):</strong> Regulert av emnebeskrivelse med læringsmål. Mottar Lånekassestøtte, ikke lønn. Normalt unntatt aml. jf. Høyesterett (Rt. 2013 s. 1024).<br/><strong>Alternativ B: Arbeidstaker:</strong> Utfører arbeid i virksomhetens tjeneste mot lønn/vederlag. Fullt aml-ansvar.<br/><strong>Alternativ C: Frivillig:</strong> Utføres uten vederlag utenfor næringsvirksomhet (dårlig egnet for denne modellen).",
            table: {
              headers: ["Faktor", "Student", "Arbeidstaker", "Frivillig"],
              rows: [
                ["Økonomisk kompensasjon", "Ja (Lånekassen)", "Ja (lønn)", "Nei"],
                ["Møteplikt", "Via emnet", "Ja", "Nei"],
                ["Detaljstyrt arbeid", "Delvis / veiledning", "Ja", "Nei"],
                ["Driver næringsvirksomhet", "Nei", "Ja", "Nei"]
              ]
            }
          },
          {
            heading: "5.2 Rettigheter studentene faktisk har krav på",
            points: [
              "Retten til et forsvarlig læringsmiljø etter universitets- og høyskoleloven.",
              "Velferdstjenester via studentsamskipnaden (SiØ).",
              "Likestillings- og diskrimineringsloven gjelder uansett status."
            ]
          },
          {
            heading: "5.3 Anbefaling for å unngå arbeidstakerklassifisering",
            points: [
              "Ikke ha faste arbeidstider, men <strong>fleksible tidsrammer</strong>.",
              "Ikke gi instrukser om <em>hvordan</em> arbeidet skal utføres, kun faglig veiledning.",
              "Hold det som et formelt emne med læringsmål og <strong>karaktervurdering</strong>.",
              "Ingen direkte utbetalinger fra Syntax & Flow — all finansiering går via Lånekassen/NAV.",
              "Tegn ansvars-/ulykkesforsikring og inngå en skriftlig avtale med studenten om at det er et studieemne."
            ]
          }
        ]
      },
      {
        title: "6. Ansvarsforhold (Skader & Kontrakter)",
        text: "En studentfeil er ikke det samme som en profesjonell feil i rettslig forstand, men organisasjonen kan holdes ansvarlig for feil in kildekode. Tydelige ansvarsfraskrivelser i kundenes kontrakter ('leveres as-is' uten garanti) er påkrevd, og det bør tegnes en ansvarsforsikring.",
        sources: [
          { name: "Skadeserstatningsloven § 1-1 og § 2-1", url: "https://lovdata.no/lov/1969-06-13-26" },
          { name: "Avtaleloven § 36", url: "https://lovdata.no/lov/1918-05-31-4" }
        ],
        details: [
          {
            heading: "6.1 Hvem er ansvarlig for skade forårsaket av leveranser?",
            points: [
              "<strong>Studentene personlig:</strong> Kun ansvarlige ved grov uaktsomhet (f.eks. bevisst ignorere personvern/sikkerhet). En vanlig kodefeil utløser normalt ikke erstatningsansvar.",
              "<strong>Syntax & Flow (organisasjonen):</strong> Kan holdes ansvarlig på kontraktsrettslig grunnlag.",
              "<strong>Høgskolen i Østfold (HiØ):</strong> Kan bli medansvarlig hvis mentorer formelt har godkjent den skadevoldende leveransen.",
              "<strong>Kunden:</strong> Medvirkningsansvar dersom de har gitt feil opplysninger eller ikke fulgt opp testing."
            ]
          },
          {
            heading: "6.2 Kan ansvarsfraskrivelser stå seg i retten?",
            text: "Avtaleloven § 36 (lemping) kan sette til side urimelige vilkår. Men en ansvarsfraskrivelse står sterkt her fordi:<br/>- Tjenesten ytes gratis (pro bono).<br/>- Kunden er en næringsdrivende virksomhet, ikke forbruker.<br/>- Kunden er informert om at arbeidet utføres av studenter under opplæring.<br/><br/><em>Fraskrivelsen beskytter imidlertid aldri mot grov uaktsomhet, personskade eller GDPR-brudd.</em>"
          },
          {
            heading: "6.3 Konkrete tiltak",
            points: [
              "Bruk en standardavtale som definerer tjenesten som pro bono, levert «as-is», med et lavt erstatningstak (f.eks. maks 10 000 kr).",
              "Tegn en yrkesansvarsforsikring for stiftelsen/AS-et (anslått kostnad: 5 000–15 000 kr/år).",
              "Sørg for at HiØs rammeavtale tydelig fraskriver HiØ ansvar for studentenes leveranser."
            ]
          }
        ]
      },
      {
        title: "7. Skatt & MVA (Ideell drift)",
        text: "Så lenge det ikke er omsetning eller profittmotiv, er Syntax & Flow fritatt for MVA og skatt etter skatteloven § 2-30. Det må sikres at ikke kundenes tidsinvestering tolkes som et 'bytte av ytelser' som utløser skatteplikt.",
        sources: [
          { name: "Merverdiavgiftsloven", url: "https://lovdata.no/lov/2009-06-19-58" },
          { name: "Skatteloven § 2-30", url: "https://lovdata.no/lov/1999-03-26-14" }
        ],
        details: [
          {
            heading: "7.1 Registrering i Brønnøysund",
            text: "Plikt til registrering i Foretaksregisteret gjelder foretak som driver <em>næringsvirksomhet</em>. Siden Syntax & Flow tilbyr tjenester gratis og uten profittmotiv, er det ikke næringsvirksomhet i skatterettslig forstand. Vi anbefaler likevel registrering (som forening/AS) for å oppnå legitimitet og juridisk status."
          },
          {
            heading: "7.2 MVA-plikt",
            text: "MVA-plikt inntrer når omsetningen overstiger 50 000 kr på 12 måneder. Siden Syntax & Flow tar kr 0 for sine tjenester, oppstår ingen MVA-plikt. <strong>Obs:</strong> Det må sikres at ikke kundenes tidsinvestering tolkes som et 'bytte av ytelser' (naturalytelser) av skattemyndighetene."
          },
          {
            heading: "7.3 Skatteplikt for organisasjonen",
            text: "Foreninger og stiftelser som ikke har erverv til formål er skattefrie etter skatteloven § 2-30 og § 2-32. Overskudd kan ikke tilfalle medlemmene. Syntax & Flow bør formelt søke om status som skattefri organisasjon."
          }
        ]
      },
      {
        title: "8. Anbefalt Organisasjonsform",
        text: "Det anbefales å opprette **Syntax & Flow AS** som eies 100% av en ideell stiftelse (**Syntax & Flow Stiftelse**). AS-et sikrer begrenset ansvar for drift, mens stiftelsen sikrer at alt eventuelt overskudd går tilbake til allmennyttige formål.",
        sources: [
          { name: "Stiftelsesloven", url: "https://lovdata.no/lov/2001-06-15-59" },
          { name: "Aksjeloven", url: "https://lovdata.no/lov/1997-06-13-44" }
        ],
        details: [
          {
            heading: "8.1 Sammenligning av organisasjonsformer",
            table: {
              headers: ["Form", "Ansvarsgrense", "Etableringspris", "Skatteplikt", "Egnethet"],
              rows: [
                ["Forening", "Delvis / uklart", "Lav (~2 000 kr)", "Fritatt hvis ideell", "Middels"],
                ["Stiftelse", "Delvis", "Lav", "Fritatt hvis ideell", "Best for eierskap"],
                ["Aksjeselskap (AS)", "Full", "30 000 kr (kapital)", "Full (22 %)", "Best for drift"],
                ["ANS / DA", "Ingen (personlig)", "Lav", "Full", "Ikke egnet"]
              ]
            }
          },
          {
            heading: "8.2 Hvorfor AS eid av ideell stiftelse er best",
            points: [
              "<strong>AS-et</strong> håndterer den operative driften og beskytter deltakere/styremedlemmer med full ansvarsbegrensning.",
              "<strong>Stiftelsen</strong> (som eier AS-et) sikrer det ideelle formålet: Eventuelt overskudd går uavkortet tilbake til studenttiltak, og stiftelsen kan motta gaver og støtte skattefritt."
            ]
          },
          {
            heading: "8.3 Former som IKKE bør velges",
            table: {
              headers: ["Form", "Begrunnelse"],
              rows: [
                ["ANS / DA", "Deltakerne hefter personlig. Uakseptabel risiko for studenter."],
                ["Enkeltpersonforetak", "Ikke aktuelt for et felles prosjekt."],
                ["Ren forening", "Foreningsretten er ulovfestet; kan i verste fall utløse personlig styreansvar."]
              ]
            }
          },
          {
            heading: "8.4 Konkret anbefalt løsning",
            text: "Stift et <strong>AS</strong> med aksjekapital på 30 000 kr. La HiØs studentsamskipnad (SiØ) eller en ideell stiftelse eie aksjene. Dette gir full ansvarsbegrensning for studentene, forutsigbare rammer, og mulighet for å tegne yrkesansvarsforsikring."
          }
        ]
      },
      {
        title: "9. Personvern & GDPR (DPIA)",
        text: "Særlig for NAV-deltakere kan helseopplysninger forekomme. Det må gjennomføres en konsekvensutredning for personvern (DPIA) før portalen opprettes, og studenter må gi samtykke før prosjektene deres publiseres offentlig.",
        sources: [
          { name: "Personopplysningsloven (GDPR)", url: "https://lovdata.no/lov/2018-06-15-38" }
        ],
        details: [
          {
            heading: "9.1 Behandlingsansvar",
            text: "Syntax & Flow er behandlingsansvarlig for data om studenter (navn, studie, progresjon), NAV-deltakere (helse- og tiltaksopplysninger) og kunder. Helseopplysninger er <strong>særlige kategorier av personopplysninger</strong> (GDPR art. 9) og krever eksplisitt samtykke, konsekvensutredning (DPIA) og sterke sikkerhetstiltak."
          },
          {
            heading: "9.2 Sentrale krav etter GDPR",
            table: {
              headers: ["Krav", "Status / Tiltak i Syntax & Flow"],
              rows: [
                ["Informasjonsplikt", "Må utarbeides skriftlig til alle deltakere."],
                ["Samtykke", "Kreves for publisering av studentkode og design på portalen."],
                ["Dataminimering", "Kun samle inn det som er strengt nødvendig for prosjektet."],
                ["DPIA (art. 35)", "Må gjennomføres grunnet NAV-data og offentlig portefølje."]
              ]
            }
          },
          {
            heading: "9.3 Portefølje-publisering",
            points: [
              "Innhent skriftlig samtykke fra alle studenter og kunder før publisering.",
              "Anonymiser alle sensitive data eller spesifikke bedriftstall i publiserte rapporter.",
              "Gi studentene rett til å reservere seg uten at det påvirker karakter eller emneopptak."
            ]
          },
          {
            heading: "9.4 Anbefaling",
            points: [
              "Utpek et styremedlem som personvernansvarlig.",
              "Inngå databehandleravtale med IT-leverandører (f.eks. Supabase/Vercel) og host fortrinnsvis innenfor EØS.",
              "Etabler faste rutiner for sletting av personopplysninger ved prosjektavslutning."
            ]
          }
        ]
      },
      {
        title: "10. HiØs omdømmerisiko",
        text: "Høgskolen risikerer omdømmetap ved feilede prosjekter og sanksjoner fra Lånekassen. Det må foreligge en skriftlig samarbeidsavtale mellom HiØ og Syntax & Flow som avklarer at HiØ ikke har arbeidsgiveransvar, og at mentorer kun veileder.",
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
                ["Lånekassen-sanksjoner", "Lav til middels", "Alvorlig for studentene"],
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
          },
          {
            heading: "10.4 Anbefalt samarbeidsavtale-utkast",
            text: "<strong>SAMARBEIDSAVTALE — HØGSKOLEN I ØSTFOLD OG SYNTAX & FLOW AS</strong><br/><br/><strong>§ 1 Formål:</strong> Avtalen regulerer HiØs støtte til Syntax & Flow som utdanningstiltak.<br/><strong>§ 2 Mentorordning:</strong> HiØ stiller faglige mentorer til rådighet. Mentorordningen anses som en integrert del av HiØs utdanningstilbud (emnet Bedriftspraksis).<br/><strong>§ 3 Lokaler:</strong> Syntax & Flow leier kontorlokaler på HiØs campus til markedspris.<br/><strong>§ 4 Merkevarebruk:</strong> Syntax & Flow kan opplyse om samarbeidet med HiØ, uten at dette innebærer en garanti eller anbefaling fra HiØs side.<br/><strong>§ 5 Ansvarsforhold:</strong> HiØ påtar seg intet ansvar for Syntax & Flows leveranser til kunder. Syntax & Flow er et selvstendig rettssubjekt med eget ansvar."
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
            hvorfor: "Juridisk skille mellom HiØ og den operative virksomheten gjør det vanskeligere for ESA å påvise at HiØs ressurser er «statlige midler» som kanaliseres til næringslivet. AS gir full ansvarsbegrensning for studentene — de kan ikke tape mer enn aksjekapitalen. Aksjeloven er godt regulert og forutsigbar, i motsetning til ulovfestet foreningsrett hvor medlemmer i noen tilfeller kan holdes personlig ansvarlige. Stiftelsen som eier kan søke skattefritak (skatteloven § 2-30).",
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
        title: "2. Lånekassen — Spor 1 og 2",
        subAdjustments: [
          {
            title: "Spor 1 (30 stp) - Tilpasning 1A: Emnebeskrivelse med reelle akademiske læringsmål",
            konkret: [
              "Ikke nok med «arbeidspraksis». Må ha:",
              "Læringsutbytter: kunnskap, ferdigheter, generell kompetanse",
              "Vurderingsform: mappe + prosjektrapport + refleksjonsnotat",
              "Pensum: minimum 300–400 sider relevant litteratur"
            ],
            hvorfor: "Lånekassen stiller krav om reell studieprogresjon. Et emne med tydelige læringsmål, vurdering og pensum oppfyller dette. HiØ har allerede tilsvarende praksisemner (f.eks. praksis i ingeniørutdanningene) som kan brukes som mal.",
            motstand: [
              "Det kan være uenighet internt på HiØ om hva som er «reelle nok» læringsmål for et praksisemne. Løsning: bruk eksisterende emner som mal og involver studieutvalget tidlig."
            ]
          },
          {
            title: "Spor 1 (30 stp) - Tilpasning 1B: Vurder å integrere emnet i graden (siste semester)",
            konkret: [
              "Hvis Lånekassen sier nei til støtte <em>etter</em> fullført grad: legg «Bedriftspraksis» inn som siste semester i bachelor/master (30 stp valgemne). Da er støtte uproblematisk."
            ],
            hvorfor: "Emnet blir en ordinær del av graden. Lånekassen-støtte er automatisk. HiØ trenger ikke søke om særskilt godkjenning.",
            motstand: [
              "Dette endrer kjernen i konseptet — «broen mellom studier og jobb» blir borte. Studentene tar praksis før de er ferdige, ikke etter. Rekrutteringsargumentet «få betalt for å bygge CV etter endt utdanning» forsvinner. Likevel: funksjonelt kan emnet være det samme, det er bare plasseringen i tid som endres."
            ]
          },
          {
            title: "Spor 1 (30 stp) - Tilpasning 1C: Avklar samlet støttetid før rekruttering",
            konkret: [
              "Studenter med 5 års brukt støttetid (3+2) har normalt ikke mer igjen. Målrett rekruttering mot de som har støttetid gjenstående."
            ],
            hvorfor: "Enkelt å sjekke — Lånekassen har klare regler for maksimal støttetid. Bare rekrutter studenter som har støttetid igjen.",
            motstand: [
              "Dette begrenser rekrutteringsbasen. Mange masterstudenter har brukt 5 år. Løsning: markedsfør primært mot bachelorstudenter (3 år brukt, har 5 år igjen) og de som har tatt kortere utdanning."
            ]
          },
          {
            title: "Spor 2 - Tilpasning 2A: Minimum 15 stp",
            konkret: [
              "10 stp kvalifiserer <strong>ikke</strong> for Lånekassen. To veier:",
              "(a) Øk til 15 stp (50 % stilling, ca. 18–20 timer/uke)",
              "(b) Kombiner 10 stp + annet emne (5 stp) = 15 stp totalt",
              "Anbefaling: (a) — enklest."
            ],
            hvorfor: "15 stp er Lånekassens minimum for gradert støtte. Med 15 stp får studentene ca. 50 % av full støtte, noe som er betydelig. HiØ kan administrere dette som et deltidsemne.",
            motstand: [
              "15 stp (18–20 timer/uke) er mer krevende for studenter som tar andre fag parallelt. Målgruppen for Spor 2 var de som ønsker lavere belastning. Løsning: kommuniser tydelig at 15 stp er minimum, og at studenter som ikke trenger Lånekassen kan delta på lavere belastning uten støtte."
            ]
          },
          {
            title: "Spor 2 - Tilpasning 2B: Alternativ uten Lånekassen",
            konkret: [
              "Gjør Spor 2 om til sertifikat-/vitnemålsprogram uten Lånekassen-støtte. Da faller kravet bort, men studentene må finansiere seg selv."
            ],
            hvorfor: "Ingen avhengighet av Lånekassen. Kan tilbys fleksibelt. Passer for studenter som har deltidsjobb ved siden av.",
            motstand: [
              "Uten Lånekassen-støtte er ordningen mindre attraktiv. Risiko for lav søkermasse. Løsning: kombiner med andre insentiver (sertifikat, portefølje, referanse)."
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
              "Spor 1: mål om 37,5 t/uke, men ingen oppmøteplikt kl. 08:00.",
              "Spor 2: mål om 15 t/uke, fleksibelt.",
              "Ingen stemplingsklokke."
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
            hvorfor: "EU-domstolen (C-222/04) har slått fast at statsstøttereglene bare gjelder foretak som driver økonomisk aktivitet. Privatpersoner og rene ideelle organisasjoner uten økonomisk aktivitet faller utenfor. Dette er den enkleste måten å unngå statsstøtteproblemet helt.",
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
            hvorfor: "Når klagen kommer (sannsynlig innen 6–12 måneder), is det kritisk å kunne svare raskt og profesjonelt. En forberedt «defense pack» viser at dere har tatt juridiske forholdsregler, noe som gjør det vanskeligere for klageren å få medhold.",
            motstand: [
              "Å forberede seg på en klage kan oppleves som unødvendig byråkrati før noe har skjedd. Løsning: se det som en forsikring — du håper du aldri trenger den, men du vil angre hvis du ikke har den."
            ]
          },
          {
            title: "Tilpasning 6C — Dokumenter avviste oppdrag",
            konkret: [
              "Bevis at dere ikke tar oppdrag som kommersielle aktører normalt ville tatt."
            ],
            hvorfor: "En liste over avviste oppdrag er konkret bevis på at dere ikke konkurrerer i det ordinære markedet. Hvis dere kan vise at dere har takket nei to oppdrag fra bedrifter som har budsjett, svekker det argumentet om konkurransevridning betydelig.",
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
              "NAV kompliserer alt: helseopplysninger, ulik finansiering, taushetsplikt, arbeidsgiveransvar, rapportering. Start kun med Spor 1 og 2."
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
              "Forsikring koster penger og kan være vanskelig å få for en studentorganisasjon uten driftshistorikk. Løsning: kontakt flere selskaper (If, Gjensidige, Tryg) og forklar modellen. Start med en enklere og billigere styreansvarsforsikring, utvid etter hvert."
            ]
          },
          {
            title: "Tilpasning 8B — Standard kundeavtale med fire lag beskyttelse",
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
            hvorfor: "GDPR art. 37 krever DPO hvis kjerneaktiviteten innebærer systematisk overvåkning eller behandling av særlige kategorier. En intern DPO eller en avtale med HiØs DPO is enkle løsninger.",
            motstand: [
              "HiØs DPO har begrenset kapasitet. Løsning: utpek en student som DPO og la vedkommende ta et GDPR-kurs (gratis, f.eks. via Datatilsynet)."
            ]
          },
          {
            title: "Tilpasning 9B — Gjennomfør DPIA før portalen bygges",
            konkret: [
              "Gjennomføre en personvernvurdering (DPIA) for portalen."
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
        ["3", "Spor 2 redesignes til 15 stp minimum", "Lånekassen", "Gratis"],
        ["4", "Inngå samarbeidsavtale HiØ med markedspris", "Statsstøtte", "20 000–50 000 kr"],
        ["5", "Søk forhåndsuttalelse Lånekassen", "Lånekassen", "Gratis"],
        ["6", "Tegn ansvarsforsikring", "Ansvar", "5 000–15 000 kr/år"],
        ["7", "Utarbeid standard kundeavtale + studentavtale", "Ansvar/arbeidstaker", "10 000–20 000 kr"],
        ["8", "Gjennomfør DPIA", "Personvern", "Gratis"],
        ["9", "Etabler støtteregister (de minimis)", "Statsstøtte", "1 dag"],
        ["10", "Utsett NAV/Spor 3 til fase 4", "NAV", "—"]
      ]
    }
  }
];
