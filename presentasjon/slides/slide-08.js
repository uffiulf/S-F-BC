// Slide 8 - Forretningsmodellen (the core "how it works")
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Slik fungerer forretningsmodellen", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  // Subtitle
  slide.addText("Tre parter. Tre gevinster. Ingen kontant betaling fra kundene.", {
    x: 0.6, y: 1.25, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Diagram: 3 boxes connected by arrows
  // Box 1: Studenter
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.1, w: 2.7, h: 2.3,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });
  slide.addText("STUDENTER", {
    x: 0.6, y: 2.25, w: 2.7, h: 0.35,
    fontSize: 11, fontFace: "Arial", color: theme.accent,
    bold: true, charSpacing: 3, align: "center", margin: 0
  });
  slide.addText("Får erfaring", {
    x: 0.6, y: 2.65, w: 2.7, h: 0.5,
    fontSize: 18, fontFace: "Georgia", color: theme.primary,
    bold: true, align: "center", margin: 0
  });
  slide.addText("Reelle prosjekter via emnet ITD35014 Bedriftspraksis. Finansiert av Lånekassen - helt gratis for studenten.", {
    x: 0.75, y: 3.25, w: 2.4, h: 1.1,
    fontSize: 11, fontFace: "Calibri", color: theme.secondary,
    align: "center", margin: 0
  });

  // Arrow 1
  slide.addShape(pres.shapes.RIGHT_ARROW, {
    x: 3.45, y: 3.05, w: 0.45, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addShape(pres.shapes.LEFT_ARROW, {
    x: 3.45, y: 3.55, w: 0.45, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // Center: Syntax & Flow
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 2.1, w: 2.0, h: 2.3,
    fill: { color: theme.primary }, line: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("S&F", {
    x: 4.0, y: 2.65, w: 2.0, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: theme.bg,
    bold: true, align: "center", margin: 0
  });
  slide.addText("Tverrfaglige team", {
    x: 4.0, y: 3.3, w: 2.0, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: theme.bg,
    align: "center", margin: 0
  });
  slide.addText("Veiledet av mentorer", {
    x: 4.0, y: 3.7, w: 2.0, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: theme.bg,
    align: "center", margin: 0
  });

  // Arrow 2
  slide.addShape(pres.shapes.RIGHT_ARROW, {
    x: 6.1, y: 3.05, w: 0.45, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addShape(pres.shapes.LEFT_ARROW, {
    x: 6.1, y: 3.55, w: 0.45, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // Box 3: Naeringsliv
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.7, y: 2.1, w: 2.7, h: 2.3,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });
  slide.addText("NÆRINGSLIV", {
    x: 6.7, y: 2.25, w: 2.7, h: 0.35,
    fontSize: 11, fontFace: "Arial", color: theme.accent,
    bold: true, charSpacing: 3, align: "center", margin: 0
  });
  slide.addText("Får hjelp gratis", {
    x: 6.7, y: 2.65, w: 2.7, h: 0.5,
    fontSize: 18, fontFace: "Georgia", color: theme.primary,
    bold: true, align: "center", margin: 0
  });
  slide.addText("Lokale småbedrifter og ideelle får tilgang på studentkompetanse - uten økonomisk risiko.", {
    x: 6.85, y: 3.25, w: 2.4, h: 1.1,
    fontSize: 11, fontFace: "Calibri", color: theme.secondary,
    align: "center", margin: 0
  });

  // Bottom callout
  slide.addText("Vinneren er også HiØ: flere studenter i relevant arbeid - høyere kandidatproduksjon og sterkt omdømme.", {
    x: 0.6, y: 4.6, w: 8.8, h: 0.4,
    fontSize: 13, fontFace: "Calibri", color: theme.primary,
    italic: true, align: "center", margin: 0
  });

  // Page number
  slide.addText("08", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };