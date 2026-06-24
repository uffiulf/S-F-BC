# Guide for implementering av Mobile First-endringer i infoside-app

Dette dokumentet beskriver de konkrete endringene som må gjøres i kildekoden til `infoside-app` for å løse kjente problemer med mobil responsivitet og brukeropplevelse. 

Følgende filer skal endres:
1. `[App.jsx](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/App.jsx)`
2. `[index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)`

---

## 1. Bakgrunns-overlay på mobilmeny

### Problem
Når mobilmenyen åpnes på mobil, sklir `.sidebar` inn fra venstre, men det finnes ingen sløret/mørk bakgrunn over innholdet. Brukeren kan ikke klikke utenfor menyen for å lukke den.

### Endringer

#### 1.1 I [App.jsx](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/App.jsx)
Legg til en overlay-div rett etter `.sidebar`:

```jsx
      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        ...
      </aside>

      {/* Bakgrunns-overlay for mobilmeny */}
      {mobileMenuOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
```

#### 1.2 I [index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)
Legg til styling for `.sidebar-overlay` i mobil-media-queryen (`@media (max-width: 768px)`):

```css
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(3, 7, 18, 0.4);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 998; /* Plasseres rett under sidebar (999) */
    animation: fadeIn 0.2s ease-out;
  }
```

---

## 2. Fase-stepper progress-linje (Tidslinje)

### Problem
Progress-linjen `.phase-stepper-progress` som kobler sammen boblene i tidslinjen er hardkodet horisontalt. Når stegene blir vertikale på mobil, kutter linjen fortsatt horisontalt over det første elementet.

### Endring

#### 2.1 I [index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)
Skjul progress-linjen på mobilvisning i `@media (max-width: 768px)`:

```css
  .phase-stepper-progress {
    display: none !important;
  }
```

---

## 3. Dropdown-meny for tilpasningsområder på mobil (`forslag-utforelse`)

### Problem
Menyen med 9 store knapper stables vertikalt over innholdet på mobil. Når brukeren klikker på et tilpasningsområde, endrer detaljene seg *under* menyen (ut av viewport), slik at man må scrolle ned hver gang.

### Endringer

#### 3.1 I [App.jsx](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/App.jsx)
Erstatt eller suppler menyen med en dropdown-select som vises på mobil. 

Rundt linje 2064–2078, finn `.proposal-menu` og pakk den inn slik:

```jsx
                      <div className="proposal-interactive-layout">
                        {/* Mobil dropdown-velger */}
                        <div className="proposal-menu-mobile-select">
                          <label htmlFor="area-select">Velg tilpasningsområde:</label>
                          <select
                            id="area-select"
                            value={activeAdjustmentIdx}
                            onChange={(e) => setActiveAdjustmentIdx(Number(e.target.value))}
                          >
                            {currentPage.adjustments.map((adj, idx) => (
                              <option key={adj.id} value={idx}>
                                {adj.id}. {adj.title.replace(/^\d+\.\s*/, "")}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Left sidebar med de 9 knappene (kun desktop) */}
                        <div className="proposal-menu">
                          {currentPage.adjustments.map((adj, idx) => (
                            <button
                              key={adj.id}
                              onClick={() => setActiveAdjustmentIdx(idx)}
                              className={`proposal-menu-btn ${activeAdjustmentIdx === idx ? "active" : ""}`}
                            >
                              <span className="adj-number">{adj.id}</span>
                              <span className="adj-title">{adj.title.replace(/^\d+\.\s*/, "")}</span>
                              <Icons.ChevronRight className="w-4 h-4 ml-auto arrow-icon" />
                            </button>
                          ))}
                        </div>
```

#### 3.2 I [index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)
Skjul dropdown på desktop, og vis den på mobil:

*På desktop (hoved-css):*
```css
.proposal-menu-mobile-select {
  display: none;
}
```

*På mobil (`@media (max-width: 992px)`):*
```css
  .proposal-menu {
    display: none !important;
  }

  .proposal-menu-mobile-select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-bottom: 8px;
  }

  .proposal-menu-mobile-select label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .proposal-menu-mobile-select select {
    width: 100%;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;
    padding-right: 40px;
  }
```

---

## 4. Risikomatrise-prikker overlapping på mobil

### Problem
Når skjermen er smal, stables risikomatrisens celler og blir trange (~50-60px). Flere risikoprikker ved siden av hverandre flyter utenfor rammen.

### Endring

#### 4.1 I [index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)
Legg til følgende under `@media (max-width: 768px)`:

```css
  .matrix-risk-dot {
    width: 18px !important;
    height: 18px !important;
    font-size: 0.65rem !important;
    border-width: 1px !important;
  }

  .matrix-cell {
    gap: 2px !important;
    padding: 2px !important;
  }
```

---

## 5. Inline-grensefeil i kalkulatoren

### Problem
Boksen for "Mentorenes Verdi" har en inline `borderLeft` som ser feil ut når kolonnene stables loddrett på mobil.

### Endringer

#### 5.1 I [App.jsx](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/App.jsx)
Endre inline styling rundt linje 1069 til en CSS-klasse:

```jsx
                                {/* Gammel: <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '20px' }}> */}
                                <div className="de-minimis-col">
```

#### 5.2 I [index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)
Definer klassen for desktop og mobil:

*På desktop:*
```css
.de-minimis-col {
  border-left: 1px solid var(--border-color);
  padding-left: 20px;
}
```

*På mobil (`@media (max-width: 768px)`):*
```css
  .de-minimis-col {
    border-left: none !important;
    border-top: 1px solid var(--border-color);
    padding-left: 0 !important;
    padding-top: 20px;
  }
```

---

## 6. Aktivere zoom på Post-its på mobil (`vpc`)

### Problem
`pointer-events: none !important` deaktiverer klikk-zoom på mobil, slik at man ikke kan forstørre post-its for å lese lange tekster.

### Endring

#### 6.1 I [index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)
Fjern `pointer-events: none !important;` under `.post-it` i mobil-media-queryen (rundt linje 1060):

```css
  .post-it {
    flex: none !important;
    min-height: auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
    padding: 12px 14px !important;
    font-size: 0.74rem !important;
    line-height: 1.35 !important;
    color: var(--text-primary) !important;
    box-shadow: none !important;
    border-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    transform: none !important;
    /* pointer-events: none !important; <-- FJERN DENNE LINJEN */
    cursor: pointer !important; /* Legg til dette */
    text-align: left !important;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    display: block !important;
  }
```

---

## 7. Søk-modal luft på mobil

### Problem
Søk-modalen går helt inntil kanten av mobilskjermen fordi den mangler side-marginer.

### Endring

#### 7.1 I [index.css](file:///Users/luffi/Library/Mobile%20Documents/com~apple~CloudDocs/Antigravity/Syntax&Flow/07-Nettside/infoside-app/src/index.css)
Legg til styling i `@media (max-width: 768px)`:

```css
  .search-modal {
    width: calc(100% - 32px) !important;
    margin: 0 16px !important;
  }
```
