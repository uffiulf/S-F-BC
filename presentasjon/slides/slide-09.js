// Slide 9 - Finansiering og hvordan pengene flyter
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Hvordan er dette finansiert?", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  // Subtitle
  slide.addText("Tjenestene er gratis for kundene. Studentene mottar støtte via Lånekassen. Driften finansieres gjennom offentlige tilskudd.", {
    x: 0.6, y: 1.25, w: 8.8, h: 0.7,
    fontSize: 14, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Four money-flow rows
  const flows = [
    {
      who: "STUDENTEN",
      label: "Betaling",
      value: "Full Lånekassen-støtte",
      note: "Gjennom emnet ITD35014 (10 stp) i bachelorløpet"
    },
    {
      who: "BEDRIFTEN",
      label: "Betaling",
      value: "0 kr - gratis",
      note: "Kompensasjon i form av tid og tilgjengelighet som kunde"
    },
    {
      who: "DRIFTEN",
      label: "Budsjett",
      value: "120 000 - 310 000 kr",
      note: "Over 2 år - dekkes av innovasjonsmidler, SIVA, sponsorer"
    },
    {
      who: "HiØ",
      label: "Gevinst",
      value: "Statlig resultatfinansiering",
      note: "Flere studenter fullfører graden og går raskere ut i jobb"
    }
  ];

  let y = 2.15;
  flows.forEach((f, i) => {
    // Row background (alternating)
    if (i % 2 === 0) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.6, y: y, w: 8.8, h: 0.65,
        fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 },
        rectRadius: 0.05
      });
    }

    // Left: who
    slide.addText(f.who, {
      x: 0.85, y: y + 0.05, w: 1.6, h: 0.55,
      fontSize: 11, fontFace: "Arial", color: theme.accent,
      bold: true, charSpacing: 2, valign: "middle", margin: 0
    });

    // Middle: label + value
    slide.addText(f.label, {
      x: 2.55, y: y + 0.05, w: 1.0, h: 0.25,
      fontSize: 9, fontFace: "Arial", color: theme.secondary,
      bold: true, charSpacing: 1, valign: "middle", margin: 0
    });
    slide.addText(f.value, {
      x: 2.55, y: y + 0.28, w: 3.0, h: 0.35,
      fontSize: 14, fontFace: "Georgia", color: theme.primary,
      bold: true, valign: "middle", margin: 0
    });

    // Right: note
    slide.addText(f.note, {
      x: 5.7, y: y + 0.05, w: 3.6, h: 0.6,
      fontSize: 11, fontFace: "Calibri", color: theme.secondary,
      valign: "middle", margin: 0
    });

    y += 0.7;
  });

  // Page number
  slide.addText("09", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };