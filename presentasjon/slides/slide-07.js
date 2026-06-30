// Slide 7 - Section divider: Losningen
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText("03", {
    x: 0.6, y: 0.8, w: 4, h: 2.5,
    fontSize: 180, fontFace: "Georgia", color: theme.accent,
    bold: true, margin: 0, valign: "top"
  });

  slide.addShape(pres.shapes.LINE, {
    x: 5.0, y: 1.6, w: 0, h: 1.8,
    line: { color: theme.bg, width: 2 }
  });

  slide.addText("Løsningen", {
    x: 5.3, y: 1.7, w: 4.5, h: 0.8,
    fontSize: 36, fontFace: "Georgia", color: theme.bg,
    bold: true, margin: 0
  });

  slide.addText("En tredjepart som løser begge parter trygt over", {
    x: 5.3, y: 2.5, w: 4.5, h: 0.5,
    fontSize: 16, fontFace: "Calibri", color: theme.bg, margin: 0
  });

  slide.addText("07", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.bg,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };