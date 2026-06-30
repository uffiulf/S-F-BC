// Slide 6 - Problemet: erfaringsgapet (stats + flow)
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Erfaringsgapet skaper en ond sirkel", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  // Subtitle
  slide.addText("Arbeidsgivere vil ha erfaring. Nyutdannede får ikke erfaring uten å bli ansatt. Og lokale småbedrifter har ikke budsjett til å hyre inn hjelp.", {
    x: 0.6, y: 1.3, w: 8.8, h: 0.7,
    fontSize: 14, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Three big stat blocks
  const stats = [
    { num: "1-3 år", label: "erfaring", desc: "det arbeidsgivere ønsker, selv for \"junior\"-stillinger" },
    { num: "1200-2000", label: "kr / time", desc: "vanlig timepris hos kommersielle konsulentbyråer" },
    { num: "0", label: "test-arbeidsforhold", desc: "for bedriftene før de tar den økonomiske sjansen" }
  ];

  let x = 0.6;
  stats.forEach((s) => {
    // Block
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.4, w: 2.9, h: 2.0,
      fill: { color: theme.primary }, line: { color: theme.primary },
      rectRadius: 0.1
    });
    // Number
    slide.addText(s.num, {
      x: x + 0.15, y: 2.55, w: 2.6, h: 0.8,
      fontSize: 38, fontFace: "Georgia", color: theme.bg,
      bold: true, margin: 0, fit: "shrink"
    });
    // Unit
    slide.addText(s.label, {
      x: x + 0.15, y: 3.35, w: 2.6, h: 0.3,
      fontSize: 12, fontFace: "Arial", color: theme.accent,
      bold: true, charSpacing: 2, margin: 0
    });
    // Description
    slide.addText(s.desc, {
      x: x + 0.15, y: 3.7, w: 2.6, h: 0.7,
      fontSize: 11, fontFace: "Calibri", color: theme.bg, margin: 0
    });
    x += 3.05;
  });

  // Footnote
  slide.addText("Kilde: Business Case - Syntax & Flow (2026)", {
    x: 0.6, y: 4.7, w: 8.8, h: 0.3,
    fontSize: 9, fontFace: "Calibri", color: theme.secondary,
    italic: true, margin: 0
  });

  // Page number
  slide.addText("06", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };