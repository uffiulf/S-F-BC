// Slide 11 - Hvorfor det virker (verdien for hver part - oppsummert)
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Hvorfor dette virker for alle parter", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  slide.addText("Ingen må betale for å få noe - alle får noe de trenger.", {
    x: 0.6, y: 1.25, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Three rows of value
  const values = [
    {
      who: "STUDENTENE",
      benefit: "Reell erfaring og portefolje",
      detail: "De får dokumenterte prosjekter de kan vise til - i stedet for å søke jobb med blank CV."
    },
    {
      who: "LOKALE BEDRIFTER",
      benefit: "Kompetanse uten økonomisk risiko",
      detail: "De får hjelp til nettside, design eller analyse - og en test-run på potensielle fremtidige ansatte."
    },
    {
      who: "HØGSKOLEN",
      benefit: "Sterkere omdømme og resultater",
      detail: "Flere studenter fullfører, får jobb raskere, og høyskolen blir kjent for å ta samfunnsansvar."
    }
  ];

  let y = 1.95;
  values.forEach((v) => {
    // Who label
    slide.addText(v.who, {
      x: 0.6, y: y, w: 8.8, h: 0.35,
      fontSize: 11, fontFace: "Arial", color: theme.accent,
      bold: true, charSpacing: 3, margin: 0
    });
    // Benefit headline
    slide.addText(v.benefit, {
      x: 0.6, y: y + 0.3, w: 8.8, h: 0.55,
      fontSize: 22, fontFace: "Georgia", color: theme.primary,
      bold: true, margin: 0
    });
    // Detail
    slide.addText(v.detail, {
      x: 0.6, y: y + 0.85, w: 8.8, h: 0.4,
      fontSize: 13, fontFace: "Calibri", color: theme.secondary, margin: 0
    });
    // Divider
    slide.addShape(pres.shapes.LINE, {
      x: 0.6, y: y + 1.3, w: 8.8, h: 0,
      line: { color: theme.light, width: 0.5 }
    });
    y += 1.1;
  });

  // Page number
  slide.addText("11", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };