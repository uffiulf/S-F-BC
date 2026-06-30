// Slide 4 - Hva er Syntax & Flow? (definition + key facts)
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("En bro mellom utdanning og arbeidsliv", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  // Lead text
  slide.addText("Syntax & Flow er et selvstendig organ in-house ved HiØ. Studenter i IT, design og økonomi jobber i tverrfaglige team på reelle oppdrag for lokalt næringsliv - veiledet av erfarne mentorer.", {
    x: 0.6, y: 1.3, w: 8.8, h: 1.0,
    fontSize: 15, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Three info cards
  const cards = [
    {
      label: "HVEM",
      title: "Hvem er det for?",
      body: "Nyutdannede bachelor- og masterstudenter ved HiØ som vil ha reell prosjekterfaring før de går ut i jobb."
    },
    {
      label: "HVA",
      title: "Hva leverer de?",
      body: "Nettsider, visuell profil, markedsanalyse, forretningsutvikling - alt fra enkle til mer sammensatte prosjekter."
    },
    {
      label: "HVORFOR",
      title: "Hvorfor er det annerledes?",
      body: "Studentene får betalt via Lånekassen, bedriftene får hjelp gratis. Ingen i oppdraget trenger å ta økonomisk risiko."
    }
  ];

  let x = 0.6;
  cards.forEach((c) => {
    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.6, w: 2.9, h: 2.4,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });
    // Accent bar at top
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.6, w: 2.9, h: 0.08,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    // Label
    slide.addText(c.label, {
      x: x + 0.2, y: 2.8, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Arial", color: theme.accent,
      bold: true, charSpacing: 3, margin: 0
    });
    // Title
    slide.addText(c.title, {
      x: x + 0.2, y: 3.1, w: 2.5, h: 0.5,
      fontSize: 17, fontFace: "Georgia", color: theme.primary,
      bold: true, margin: 0
    });
    // Body
    slide.addText(c.body, {
      x: x + 0.2, y: 3.7, w: 2.5, h: 1.2,
      fontSize: 12, fontFace: "Calibri", color: theme.secondary, margin: 0
    });
    x += 3.05;
  });

  // Page number
  slide.addText("04", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };