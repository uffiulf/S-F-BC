// Slide 3 - Section divider: Hva er Syntax & Flow?
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Big number
  slide.addText("01", {
    x: 0.6, y: 0.8, w: 4, h: 2.5,
    fontSize: 180, fontFace: "Georgia", color: theme.accent,
    bold: true, margin: 0, valign: "top"
  });

  // Accent line
  slide.addShape(pres.shapes.LINE, {
    x: 5.0, y: 1.6, w: 0, h: 1.8,
    line: { color: theme.bg, width: 2 }
  });

  // Title
  slide.addText("Hva er Syntax & Flow?", {
    x: 5.3, y: 1.7, w: 4.5, h: 0.8,
    fontSize: 36, fontFace: "Georgia", color: theme.bg,
    bold: true, margin: 0
  });

  // Subtitle
  slide.addText("Et studentdrevet konsulenthus in-house ved HiØ", {
    x: 5.3, y: 2.5, w: 4.5, h: 0.5,
    fontSize: 16, fontFace: "Calibri", color: theme.bg, margin: 0
  });

  // Page number
  slide.addText("03", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: theme.bg,
    align: "right", margin: 0
  });
}
module.exports = { createSlide };