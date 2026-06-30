// Slide 1 - Cover
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left side accent block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // Eyebrow / kicker
  slide.addText("HØGSKOLEN I ØSTFOLD  |  STUDENTDREVET INITIATIV", {
    x: 0.8, y: 1.1, w: 8.5, h: 0.4,
    fontSize: 12, fontFace: "Arial", color: theme.accent,
    bold: true, charSpacing: 4, margin: 0
  });

  // Main title
  slide.addText("Syntax & Flow", {
    x: 0.8, y: 1.55, w: 8.5, h: 1.1,
    fontSize: 64, fontFace: "Georgia", color: theme.primary,
    bold: true, margin: 0
  });

  // Subtitle
  slide.addText("En bro fra studier til arbeidsliv for studenter ved HiØ", {
    x: 0.8, y: 2.75, w: 8.5, h: 0.6,
    fontSize: 22, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Divider line
  slide.addShape(pres.shapes.LINE, {
    x: 0.8, y: 3.7, w: 1.2, h: 0,
    line: { color: theme.accent, width: 2.5 }
  });

  // Three key facts
  slide.addText("IT", {
    x: 0.8, y: 3.95, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: "Arial", color: theme.primary,
    bold: true, margin: 0
  });
  slide.addText("Tverrfaglige team i IT, design og økonomi", {
    x: 0.8, y: 4.3, w: 2.4, h: 0.6,
    fontSize: 12, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  slide.addText("ØKONOMI", {
    x: 3.4, y: 3.95, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: "Arial", color: theme.primary,
    bold: true, margin: 0
  });
  slide.addText("Reelle prosjekter for lokalt næringsliv", {
    x: 3.4, y: 4.3, w: 2.4, h: 0.6,
    fontSize: 12, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  slide.addText("DESIGN", {
    x: 6.0, y: 3.95, w: 3.2, h: 0.35,
    fontSize: 14, fontFace: "Arial", color: theme.primary,
    bold: true, margin: 0
  });
  slide.addText("Finansiert via Lånekassen - gratis for studenter", {
    x: 6.0, y: 4.3, w: 3.2, h: 0.6,
    fontSize: 12, fontFace: "Calibri", color: theme.secondary, margin: 0
  });

  // Footer
  slide.addText("Presentasjon  |  Juni 2026", {
    x: 0.8, y: 5.15, w: 8.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.secondary, margin: 0
  });
}
module.exports = { createSlide };