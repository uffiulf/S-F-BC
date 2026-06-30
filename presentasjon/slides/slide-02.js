// Slide 2 - Agenda (table of contents)
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Tre ting vi skal snakke om", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.LINE, {
    x: 0.6, y: 1.3, w: 0.8, h: 0,
    line: { color: theme.accent, width: 2.5 }
  });

  // Three sections
  const sections = [
    {
      num: "01",
      title: "Hva er Syntax & Flow?",
      desc: "Kort om organisasjonen, hvem som står bak, og hvorfor den finnes."
    },
    {
      num: "02",
      title: "Problemet",
      desc: "Erfaringsgapet for nyutdannede - og hva lokalt næringsliv trenger."
    },
    {
      num: "03",
      title: "Løsningen og forretningsmodellen",
      desc: "Hvordan studentene får erfaring, mens bedriftene får hjelp - helt gratis."
    }
  ];

  let y = 1.9;
  sections.forEach((s) => {
    // Number badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 1.0, h: 1.0,
      fill: { color: theme.primary }, line: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(s.num, {
      x: 0.6, y: y, w: 1.0, h: 1.0,
      fontSize: 32, fontFace: "Georgia", color: theme.bg,
      bold: true, align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(s.title, {
      x: 1.9, y: y + 0.05, w: 7.5, h: 0.5,
      fontSize: 22, fontFace: "Georgia", color: theme.primary,
      bold: true, margin: 0
    });

    // Description
    slide.addText(s.desc, {
      x: 1.9, y: y + 0.55, w: 7.5, h: 0.5,
      fontSize: 14, fontFace: "Calibri", color: theme.secondary, margin: 0
    });

    y += 1.2;
  });

  // Page number
  slide.addText("02", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };