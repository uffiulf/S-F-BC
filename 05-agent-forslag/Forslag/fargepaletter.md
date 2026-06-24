# Forslag til fargepaletter for Syntax & Flow

Dette dokumentet beskriver tre alternative premium fargepaletter for Syntax & Flow-infosiden. Palettene er utviklet for å balansere det tekniske, strukturerte uttrykket (**Syntax**) med det flytende, tverrfaglige og kreative (**Flow**).

---

## Alternativ 1: "Deep Tech & Cyber Emerald" (Anbefalt)
Dette gir en moderne, høyteknologisk utvikler- og byrå-vibe, inspirert av verktøy som Supabase, Tailwind CSS og GitHub. 

### Fargebeskrivelse
*   **Bakgrunn (Primær):** `#050811` (Dyp mørkeblå skifer)
*   **Bakgrunn (Sekundær/Kort):** `#0b0f19` (Klassisk mørk nyanse)
*   **Hovedaksent (Brand):** `#10b981` (Smaragdgrønn) — symboliserer flyt ("Flow"), energi og vekst.
*   **Aksent (Fokus):** `#06b6d4` (Cyan) eller `#3b82f6` (Indigo-blå) — symboliserer logikk ("Syntax") og struktur.
*   **Tekst (Primær):** `#f3f4f6` (Kaldhvit)
*   **Tekst (Sekundær):** `#9ca3af` (Dempet gråblå)

### CSS-variabler for `:root`
```css
:root[data-theme="dark"] {
  --bg-primary: #050811;
  --bg-secondary: #0b0f19;
  --bg-sidebar: #080b14;
  --bg-card: rgba(255, 255, 255, 0.025);
  --bg-card-hover: rgba(255, 255, 255, 0.05);
  --border-color: rgba(255, 255, 255, 0.07);
  --border-color-active: rgba(16, 185, 129, 0.4);
  --text-primary: #f3f4f6;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --accent-color: #10b981;
  --accent-light: #34d399;
  --accent-glow: rgba(16, 185, 129, 0.15);
  
  --badge-bg-blue: rgba(6, 182, 212, 0.15);
  --badge-text-blue: #22d3ee;
  --badge-bg-green: rgba(16, 185, 129, 0.15);
  --badge-text-green: #34d399;
  --badge-bg-purple: rgba(139, 92, 246, 0.15);
  --badge-text-purple: #a78bfa;
}

:root[data-theme="light"] {
  --bg-primary: #f4f6f9;
  --bg-secondary: #ffffff;
  --bg-sidebar: #ebedf2;
  --bg-card: rgba(0, 0, 0, 0.02);
  --bg-card-hover: rgba(0, 0, 0, 0.04);
  --border-color: rgba(0, 0, 0, 0.08);
  --border-color-active: rgba(5, 150, 105, 0.4);
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --accent-color: #059669;
  --accent-light: #10b981;
  --accent-glow: rgba(16, 185, 129, 0.08);
  
  --badge-bg-blue: rgba(8, 145, 178, 0.1);
  --badge-text-blue: #0891b2;
  --badge-bg-green: rgba(5, 150, 105, 0.1);
  --badge-text-green: #059669;
  --badge-bg-purple: rgba(109, 40, 217, 0.1);
  --badge-text-purple: #6d28d9;
}
```

---

## Alternativ 2: "Modern Obsidian & Indigo Glow"
Veldig premium, moderne SaaS-estetikk inspirert av Linear, Stripe og Vercel. Den bruker en kullsort (obsidian) base med rike elementer av indigo og lilla.

### Fargebeskrivelse
*   **Bakgrunn (Primær):** `#030712` (Ekte kullsort obsidian)
*   **Bakgrunn (Sekundær/Kort):** `#0a0d16` (Svart med hint av dyp indigo)
*   **Hovedaksent (Brand):** `#6366f1` (Indigo) — broen mellom teknologi og design.
*   **Aksent (Fokus):** `#8b5cf6` (Lilla) eller `#ec4899` (Magenta/Rosa) — representerer det kreative.
*   **Tekst (Primær):** `#f9fafb` (Rent lys grå)
*   **Tekst (Sekundær):** `#d1d5db` (Muted lys grå)

### CSS-variabler for `:root`
```css
:root[data-theme="dark"] {
  --bg-primary: #030712;
  --bg-secondary: #0a0d16;
  --bg-sidebar: #060911;
  --bg-card: rgba(255, 255, 255, 0.02);
  --bg-card-hover: rgba(255, 255, 255, 0.04);
  --border-color: rgba(255, 255, 255, 0.06);
  --border-color-active: rgba(99, 102, 241, 0.4);
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --accent-color: #6366f1;
  --accent-light: #818cf8;
  --accent-glow: rgba(99, 102, 241, 0.15);
  
  --badge-bg-blue: rgba(99, 102, 241, 0.15);
  --badge-text-blue: #818cf8;
  --badge-bg-green: rgba(16, 185, 129, 0.15);
  --badge-text-green: #34d399;
  --badge-bg-purple: rgba(139, 92, 246, 0.15);
  --badge-text-purple: #a78bfa;
}

:root[data-theme="light"] {
  --bg-primary: #fbfbfe;
  --bg-secondary: #ffffff;
  --bg-sidebar: #f3f4f9;
  --bg-card: rgba(0, 0, 0, 0.015);
  --bg-card-hover: rgba(0, 0, 0, 0.03);
  --border-color: rgba(0, 0, 0, 0.06);
  --border-color-active: rgba(79, 70, 229, 0.4);
  --text-primary: #0b0f19;
  --text-secondary: #4b5563;
  --text-muted: #6b7280;
  --accent-color: #4f46e5;
  --accent-light: #6366f1;
  --accent-glow: rgba(99, 102, 241, 0.08);
  
  --badge-bg-blue: rgba(79, 70, 229, 0.1);
  --badge-text-blue: #4f46e5;
  --badge-bg-green: rgba(5, 150, 105, 0.1);
  --badge-text-green: #059669;
  --badge-bg-purple: rgba(109, 40, 217, 0.1);
  --badge-text-purple: #6d28d9;
}
```

---

## Alternativ 3: "Nordic Minimalist Slate & Warm Amber"
Inspirert av skandinavisk minimalisme. Bruker dype koksgrå og varme sand-nyanser kombinert med havblå og gyllen rav (amber) for et veldig profesjonelt, etablert og akademisk uttrykk.

### Fargebeskrivelse
*   **Bakgrunn (Primær):** `#0f1115` (Varm mørkegrå)
*   **Bakgrunn (Sekundær/Kort):** `#181b22` (Mellommørk varm grå)
*   **Hovedaksent (Brand):** `#0284c7` (Havblå) — symboliserer tillit, ryddighet og tilknytningen til HiØ.
*   **Aksent (Fokus):** `#d97706` (Varm Amber / Gull) — symboliserer suksess og kvalitet.
*   **Tekst (Primær):** `#f5f5f4` (Varm off-white)
*   **Tekst (Sekundær):** `#a8a29e` (Varm grå tone)

### CSS-variabler for `:root`
```css
:root[data-theme="dark"] {
  --bg-primary: #0f1115;
  --bg-secondary: #181b22;
  --bg-sidebar: #13151b;
  --bg-card: rgba(255, 255, 255, 0.02);
  --bg-card-hover: rgba(255, 255, 255, 0.04);
  --border-color: rgba(255, 255, 255, 0.05);
  --border-color-active: rgba(2, 132, 199, 0.4);
  --text-primary: #f5f5f4;
  --text-secondary: #d6d3d1;
  --text-muted: #a8a29e;
  --accent-color: #0284c7;
  --accent-light: #38bdf8;
  --accent-glow: rgba(2, 132, 199, 0.15);
  
  --badge-bg-blue: rgba(2, 132, 199, 0.15);
  --badge-text-blue: #38bdf8;
  --badge-bg-green: rgba(16, 185, 129, 0.15);
  --badge-text-green: #34d399;
  --badge-bg-purple: rgba(217, 119, 6, 0.15);
  --badge-text-purple: #fbbf24;
}

:root[data-theme="light"] {
  --bg-primary: #fcfcfb;
  --bg-secondary: #ffffff;
  --bg-sidebar: #f5f5f3;
  --bg-card: rgba(0, 0, 0, 0.015);
  --bg-card-hover: rgba(0, 0, 0, 0.03);
  --border-color: rgba(0, 0, 0, 0.06);
  --border-color-active: rgba(3, 105, 161, 0.4);
  --text-primary: #1c1917;
  --text-secondary: #57534e;
  --text-muted: #78716c;
  --accent-color: #0369a1;
  --accent-light: #0284c7;
  --accent-glow: rgba(2, 132, 199, 0.08);
  
  --badge-bg-blue: rgba(3, 105, 161, 0.1);
  --badge-text-blue: #0369a1;
  --badge-bg-green: rgba(5, 150, 105, 0.1);
  --badge-text-green: #059669;
  --badge-bg-purple: rgba(180, 83, 9, 0.1);
  --badge-text-purple: #b45309;
}
```
