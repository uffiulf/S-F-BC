const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Syntax & Flow";
pres.title = "Syntax & Flow - introduksjon";

// Education & Charts palette (#10 in design-system)
// Adapted to 5-key theme with light-mode mapping
const theme = {
  primary:   "264653",   // Deep teal - body text and titles
  secondary: "2a9d8f",   // Mid teal - secondary text
  accent:    "e76f51",   // Coral - accent / highlight
  light:     "e9c46a",   // Warm yellow - card panel
  bg:        "f7f3ea"    // Soft cream background
};

require("./slide-01.js").createSlide(pres, theme);
require("./slide-02.js").createSlide(pres, theme);
require("./slide-03.js").createSlide(pres, theme);
require("./slide-04.js").createSlide(pres, theme);
require("./slide-05.js").createSlide(pres, theme);
require("./slide-06.js").createSlide(pres, theme);
require("./slide-07.js").createSlide(pres, theme);
require("./slide-08.js").createSlide(pres, theme);
require("./slide-09.js").createSlide(pres, theme);
require("./slide-10.js").createSlide(pres, theme);
require("./slide-11.js").createSlide(pres, theme);
require("./slide-12.js").createSlide(pres, theme);

pres.writeFile({ fileName: "./output/Syntax_og_Flow_introduksjon.pptx" })
  .then((fn) => console.log("Skrevet: " + fn))
  .catch((e) => { console.error("Feil:", e); process.exit(1); });