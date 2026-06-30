// Slide 10 - Tjenester (hva de faktisk leverer)
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Hva slags oppdrag løser teamene?", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  // Subtitle
  slide.addText("Tverrfaglige team betyr at IT, design og økonomi samarbeider i samme prosjekt.", {
    x: 0.6, y: 1.25, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Three columns
  const cols = [
    {
      icon: "DESIGN",
      title: "Design",
      items: ["Visuell identitet og logo", "UI/UX-design og prototyper", "Brukervennlighetstester"]
    },
    {
      icon: "IT",
      title: "IT & utvikling",
      items: ["Enkle nettsider og landingssider", "Prototyper (MVP)", "Implementering av CRM og digitale verktøy"]
    },
    {
      icon: "ØKONOMI",
      title: "Økonomi & analyse",
      items: ["Kartlegging av forretningsmodell", "Markedsanalyse og konkurrentvurdering", "Effektiviseringsplaner"]
    }
  ];

  let x = 0.6;
  cols.forEach((c) => {
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.95, w: 2.9, h: 2.9,
      fill: { color: theme.primary }, line: { color: theme.primary },
      rectRadius: 0.1
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.95, w: 2.9, h: 0.4,
      fill: { color: theme.accent }, line: { color: theme.accent },
      rectRadius: 0.0
    });
    slide.addText(c.icon, {
      x: x, y: 1.95, w: 2.9, h: 0.4,
      fontSize: 11, fontFace: "Arial", color: theme.bg,
      bold: true, charSpacing: 3, align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(c.title, {
      x: x + 0.2, y: 2.5, w: 2.5, h: 0.5,
      fontSize: 18, fontFace: "Georgia", color: theme.bg,
      bold: true, margin: 0
    });

    // Items
    const items = c.items.map((t, idx) => ({
      text: t,
      options: { bullet: { code: "25A0" }, color: theme.bg, breakLine: idx < c.items.length - 1 }
    }));
    slide.addText(items, {
      x: x + 0.2, y: 3.05, w: 2.5, h: 1.7,
      fontSize: 12, fontFace: "Calibri", color: theme.bg,
      paraSpaceAfter: 6, margin: 0
    });

    x += 3.05;
  });

  // Page number
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };