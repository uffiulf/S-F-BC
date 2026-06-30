// Slide 12 - Avslutning / oppsummering
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Big closing message
  slide.addText("En enkel idé.", {
    x: 0.6, y: 1.0, w: 8.8, h: 0.7,
    fontSize: 36, fontFace: "Georgia", color: theme.accent,
    bold: true, margin: 0
  });

  slide.addText("La studentene få erfaring - og la lokale bedrifter få hjelp.", {
    x: 0.6, y: 1.85, w: 8.8, h: 1.1,
    fontSize: 32, fontFace: "Georgia", color: theme.bg,
    bold: true, margin: 0
  });

  // Accent divider
  slide.addShape(pres.shapes.LINE, {
    x: 0.6, y: 3.15, w: 1.2, h: 0,
    line: { color: theme.accent, width: 2.5 }
  });

  // Key takeaways
  slide.addText("HOVEDPUNKTER", {
    x: 0.6, y: 3.4, w: 8.8, h: 0.3,
    fontSize: 11, fontFace: "Arial", color: theme.accent,
    bold: true, charSpacing: 3, margin: 0
  });

  slide.addText([
    { text: "Studentene får reell erfaring - betalt via Lånekassen", options: { breakLine: true, bullet: { code: "25A0" }, color: theme.bg } },
    { text: "Lokale bedrifter får kompetanse helt gratis", options: { breakLine: true, bullet: { code: "25A0" }, color: theme.bg } },
    { text: "HiØ styrker omdømme og kandidatproduksjon", options: { bullet: { code: "25A0" }, color: theme.bg } }
  ], {
    x: 0.6, y: 3.7, w: 8.8, h: 1.3,
    fontSize: 16, fontFace: "Calibri", color: theme.bg,
    paraSpaceAfter: 6, margin: 0
  });

  // Page number
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.bg,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };