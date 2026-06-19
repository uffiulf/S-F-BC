import React, { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { wikiData } from "./data/wikiData";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVpcTab, setActiveVpcTab] = useState(0);
  const [selectedRiskId, setSelectedRiskId] = useState(1);
  const [openAccordionIdx, setOpenAccordionIdx] = useState(null);
  const [activeLegalTopicIdx, setActiveLegalTopicIdx] = useState(null);
  const [activeAdjustmentIdx, setActiveAdjustmentIdx] = useState(0);
  const [openSections, setOpenSections] = useState({});
  const searchInputRef = useRef(null);

  // Reset detailed view when changing page
  useEffect(() => {
    setActiveLegalTopicIdx(null);
    setOpenAccordionIdx(null);
    setActiveAdjustmentIdx(0);
    setOpenSections({});
  }, [activePage]);

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Sync theme to <html> element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // CMD+K Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 50);
    }
  }, [searchOpen]);

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName, className = "w-5 h-5") => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  // Perform global search
  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results = [];

    wikiData.forEach((page) => {
      // Check page title
      const matchesTitle = page.title && page.title.toLowerCase().includes(query);
      const matchesCategory = page.category && page.category.toLowerCase().includes(query);
      const matchesLead = page.lead && page.lead.toLowerCase().includes(query);
      if (matchesTitle || matchesCategory || matchesLead) {
        results.push({
          pageId: page.id,
          pageTitle: page.title,
          category: page.category,
          icon: page.icon,
          snippet: page.lead || page.title
        });
      }

      // Check sections
      if (page.sections) {
        page.sections.forEach((sec) => {
          const hasHeading = sec.heading && sec.heading.toLowerCase().includes(query);
          const hasText = sec.text && sec.text.toLowerCase().includes(query);
          const hasPoints = sec.points && sec.points.some(p => p.toLowerCase().includes(query));
          
          if (hasHeading || hasText || hasPoints) {
            results.push({
              pageId: page.id,
              pageTitle: page.title,
              category: page.category,
              icon: page.icon,
              snippet: sec.heading || sec.text || (sec.points && sec.points[0])
            });
          }
        });
      }

      // Check VPC data
      if (page.vpcs) {
        page.vpcs.forEach((vpc) => {
          const matchedText = [
            ...vpc.customerProfile.jobs,
            ...vpc.customerProfile.pains,
            ...vpc.customerProfile.gains,
            ...vpc.valueMap.products,
            ...vpc.valueMap.painRelievers,
            ...vpc.valueMap.gainCreators
          ].find(t => t.toLowerCase().includes(query));

          if (matchedText) {
            results.push({
              pageId: page.id,
              pageTitle: `${page.title} - VPC ${vpc.target}`,
              category: page.category,
              icon: page.icon,
              snippet: matchedText
            });
          }
        });
      }

      // Check Legal details
      if (page.legalTopics) {
        page.legalTopics.forEach((topic) => {
          const hasTitle = topic.title && topic.title.toLowerCase().includes(query);
          const hasText = topic.text && topic.text.toLowerCase().includes(query);
          if (hasTitle || hasText) {
            results.push({
              pageId: page.id,
              pageTitle: `${page.title} - ${topic.title}`,
              category: page.category,
              icon: page.icon,
              snippet: topic.text || topic.title
            });
          }
        });
      }

      // Check Adjustments data
      if (page.adjustments) {
        page.adjustments.forEach((adj) => {
          const matchedText = [
            adj.title,
            ...(adj.subAdjustments ? adj.subAdjustments.flatMap(sub => [
              sub.title,
              ...(Array.isArray(sub.konkret) ? sub.konkret : []),
              sub.hvorfor,
              ...(Array.isArray(sub.motstand) ? sub.motstand : [])
            ]) : [])
          ].find(t => t && typeof t === "string" && t.toLowerCase().includes(query));

          if (matchedText) {
            results.push({
              pageId: page.id,
              pageTitle: `${page.title} - ${adj.title}`,
              category: page.category,
              icon: page.icon,
              snippet: matchedText
            });
          }
        });
      }
    });

    // Remove duplicates by pageId to keep it clean
    const uniqueResults = [];
    const seen = new Set();
    results.forEach(item => {
      if (!seen.has(item.pageId)) {
        seen.add(item.pageId);
        uniqueResults.push(item);
      }
    });

    return uniqueResults.slice(0, 10);
  };

  const searchResults = getSearchResults();

  const handleSearchResultClick = (pageId) => {
    setActivePage(pageId);
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Find currently active page content
  const currentPage = wikiData.find((p) => p.id === activePage) || wikiData[0];

  // Helper for rendering matrix cell color class
  const getMatrixCellColor = (s, k) => {
    const r = s * k;
    if (r >= 15) return "cell-critical";
    if (r >= 10) return "cell-high";
    if (r >= 5) return "cell-medium";
    return "cell-low";
  };

  return (
    <div className="app-layout">
      {/* Background blobs */}
      <div className="glow-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">SF</div>
          <div className="brand-text">
            <span className="brand-name">Syntax & Flow</span>
            <span className="brand-tagline">Dokumentasjon Portal</span>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-section-title">Oversikt & Hovedsider</div>
          {wikiData.filter(page => page.category === "Oversikt" || page.category === "Hovedsider").map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`nav-item ${activePage === page.id ? "active" : ""}`}
            >
              <span className="nav-icon">{renderIcon(page.icon, "w-4 h-4")}</span>
              {page.title}
            </button>
          ))}

          <div className="nav-section-title">GTM & Utførelse</div>
          {wikiData.filter(page => page.category === "GTM & Utførelse").map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`nav-item ${activePage === page.id ? "active" : ""}`}
            >
              <span className="nav-icon">{renderIcon(page.icon, "w-4 h-4")}</span>
              {page.title}
            </button>
          ))}

          <div className="nav-section-title">Business Case</div>
          {wikiData.filter(page => page.category === "Business Case").map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`nav-item ${activePage === page.id ? "active" : ""}`}
            >
              <span className="nav-icon">{renderIcon(page.icon, "w-4 h-4")}</span>
              {page.title}
            </button>
          ))}

          <div className="nav-section-title">Dokumenter & Referanser</div>
          {wikiData.filter(page => page.category === "Dokumenter").map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`nav-item ${activePage === page.id ? "active" : ""}`}
            >
              <span className="nav-icon">{renderIcon(page.icon, "w-4 h-4")}</span>
              {page.title}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-toggle-btn"
          >
            {theme === "dark" ? (
              <>
                <Icons.Sun className="w-4 h-4 text-yellow-400" />
                <span>Mørkt Modus</span>
              </>
            ) : (
              <>
                <Icons.Moon className="w-4 h-4 text-blue-600" />
                <span>Lyst Modus</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content-area">
        {/* Top Header Search trigger */}
        <header className="top-header">
          <button onClick={() => setSearchOpen(true)} className="search-trigger">
            <Icons.Search className="w-5 h-5" />
            <span>Søk i retningslinjer, leveranser, mål, analyser...</span>
            <span className="search-shortcut">⌘K</span>
          </button>
        </header>

        {/* Wiki Page Component */}
        <div className="wiki-page">
          <div className="section-badge">{currentPage.category}</div>
          <h1>{currentPage.title}</h1>
          <p className="wiki-page-lead">{currentPage.lead}</p>

          {/* Render Sections */}
          <div className="wiki-content">
            {activeLegalTopicIdx !== null ? (
              <div className="legal-detail-view animate-fade-in">
                <button
                  onClick={() => setActiveLegalTopicIdx(null)}
                  className="back-btn"
                >
                  <Icons.ArrowLeft className="w-4 h-4" />
                  <span>Tilbake til Juridisk & Risiko</span>
                </button>

                <div className="legal-detail-card glass-card">
                  <div className="section-badge">Juridisk Utredning</div>
                  <h2>{currentPage.legalTopics[activeLegalTopicIdx].title}</h2>
                  <p className="legal-detail-lead text-secondary">
                    Fyldig juridisk redegjørelse og vurdering for dette rettsområdet.
                  </p>

                  <div className="legal-detail-sections">
                    {currentPage.legalTopics[activeLegalTopicIdx].details.map((subSec, subIdx) => (
                      <div key={subIdx} className="legal-detail-section">
                        <h3>{subSec.heading}</h3>
                        {subSec.text && <p dangerouslySetInnerHTML={{ __html: subSec.text }} />}
                        
                        {subSec.points && (
                          <ul>
                            {subSec.points.map((pt, pIdx) => (
                              <li key={pIdx} dangerouslySetInnerHTML={{ __html: pt }} />
                            ))}
                          </ul>
                        )}

                        {subSec.table && (
                          <div className="table-container">
                            <table className="wiki-table">
                              <thead>
                                <tr>
                                  {subSec.table.headers.map((h, hIdx) => (
                                    <th key={hIdx}>{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {subSec.table.rows.map((row, rIdx) => (
                                  <tr key={rIdx}>
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} dangerouslySetInnerHTML={{ __html: cell }} />
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {currentPage.legalTopics[activeLegalTopicIdx].sources && (
                    <div className="legal-sources-section">
                      <h4>🔗 Rettslige kilder og lovverk:</h4>
                      <div className="sources-list-row">
                        {currentPage.legalTopics[activeLegalTopicIdx].sources.map((src, sIdx) => (
                          <a
                            key={sIdx}
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="source-chip"
                          >
                            <Icons.BookOpen className="w-4 h-4" />
                            <span>{src.name}</span>
                            <Icons.ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                {/* Standard sections */}
                {currentPage.sections && currentPage.sections.map((sec, idx) => {
                  const isCollapsible = !!sec.isCollapsible;
                  const sectionKey = `${currentPage.id}-${idx}`;
                  const isOpen = !!openSections[sectionKey];

                  return (
                    <div
                      key={idx}
                      className={`wiki-section ${isCollapsible ? "collapsible-section glass-card" : ""}`}
                      style={isCollapsible ? { padding: "20px", marginBottom: "24px" } : {}}
                    >
                      {isCollapsible ? (
                        <>
                          <button
                            onClick={() => toggleSection(sectionKey)}
                            className="flex items-center justify-between w-full text-left"
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                              alignItems: "center",
                              background: "none",
                              border: "none",
                              color: "inherit",
                              cursor: "pointer",
                              padding: 0
                            }}
                          >
                            <h2 style={{ margin: 0, fontSize: "1.25rem", display: "flex", alignItems: "center", gap: "8px" }}>
                              {sec.heading}
                            </h2>
                            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                              {isOpen ? "Skjul detaljer" : "Vis detaljer"}
                              {isOpen ? <Icons.ChevronUp className="w-4 h-4" /> : <Icons.ChevronDown className="w-4 h-4" />}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="collapsible-content animate-fade-in" style={{ marginTop: "16px", borderTop: "1px solid var(--border-color)", paddingTop: "16px" }}>
                              {sec.text && <p dangerouslySetInnerHTML={{ __html: sec.text }} />}
                              
                              {sec.points && (
                                <ul>
                                  {sec.points.map((pt, pIdx) => (
                                    <li key={pIdx} dangerouslySetInnerHTML={{ __html: pt }} />
                                  ))}
                                </ul>
                              )}

                              {sec.table && (
                                <div className="table-container">
                                  <table className="wiki-table">
                                    <thead>
                                      <tr>
                                        {sec.table.headers.map((h, hIdx) => (
                                          <th key={hIdx}>{h}</th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {sec.table.rows.map((row, rIdx) => (
                                        <tr key={rIdx}>
                                          {row.map((cell, cIdx) => (
                                            <td key={cIdx} dangerouslySetInnerHTML={{ __html: cell }} />
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <h2>{sec.heading}</h2>
                          {sec.text && <p dangerouslySetInnerHTML={{ __html: sec.text }} />}
                          
                          {sec.points && (
                            <ul>
                              {sec.points.map((pt, pIdx) => (
                                <li key={pIdx} dangerouslySetInnerHTML={{ __html: pt }} />
                              ))}
                            </ul>
                          )}

                          {sec.table && (
                            <div className="table-container">
                              <table className="wiki-table">
                                <thead>
                                  <tr>
                                    {sec.table.headers.map((h, hIdx) => (
                                      <th key={hIdx}>{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {sec.table.rows.map((row, rIdx) => (
                                    <tr key={rIdx}>
                                      {row.map((cell, cIdx) => (
                                        <td key={cIdx} dangerouslySetInnerHTML={{ __html: cell }} />
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}

                {/* Custom: Prosjektplan timeline rendering */}
                {currentPage.id === "prosjektplan" && (
                  <div className="timeline">
                    {currentPage.sections.map((sec, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-badge">Fase {idx + 1}</div>
                        <div className="timeline-content glass-card">
                          <h2>{sec.heading}</h2>
                          <div
                            className="timeline-desc"
                            dangerouslySetInnerHTML={{ __html: sec.text }}
                          />
                          <div className="timeline-grid">
                            <div className="timeline-col">
                              <span className="col-title">📋 Nødvendige Analyser</span>
                              <ul>
                                <li dangerouslySetInnerHTML={{ __html: sec.points[0].replace("Analyser:", "").trim() }} />
                              </ul>
                            </div>
                            <div className="timeline-col">
                              <span className="col-title">📦 Konkrete Leveranser</span>
                              <ul>
                                <li dangerouslySetInnerHTML={{ __html: sec.points[1].replace("Leveranser:", "").trim() }} />
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Custom: Value Proposition Canvas (VPC) Rendering */}
                {currentPage.vpcs && (
                  <div className="vpc-section">
                    <h2 className="mb-4">Value Proposition Canvases (VPC)</h2>
                    <p className="text-secondary" style={{ marginBottom: "28px" }}>
                      Velg målgruppe under for å utforske det visuelle verdiløftet (Strategyzer-lerretet):
                    </p>

                    {/* VPC Tabs */}
                    <div className="vpc-tabs">
                      {currentPage.vpcs.map((vpc, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveVpcTab(idx)}
                          className={`vpc-tab-btn ${activeVpcTab === idx ? "active" : ""}`}
                        >
                          {vpc.target}
                        </button>
                      ))}
                    </div>

                    {/* VPC Canvas Board */}
                    {currentPage.vpcs.map((vpc, idx) => {
                      if (activeVpcTab !== idx) return null;
                      return (
                        <div key={idx} className={`vpc-canvas-wrapper theme-${vpc.colorTheme}`}>
                          <p className="vpc-canvas-desc">{vpc.description}</p>
                          
                          <div className="vpc-canvas">
                            {/* 1. VERDITILBUD (Strategyzer Square / Value Map) */}
                            <div className="vpc-canvas-card">
                              <div className="vpc-square-canvas">
                                <div className="vpc-square-grid">
                                  {/* Left part: Products & Services */}
                                  <div className="vpc-box products full-height">
                                    <div className="box-title">
                                      📦 Produkter & Tjenester
                                    </div>
                                    <ul>
                                      {vpc.valueMap.products.map((item, iIdx) => (
                                        <li key={iIdx}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Right top: Gain Creators */}
                                  <div className="vpc-box gain-creators">
                                    <div className="box-title">
                                      ⚡ Gevinstskapere (Gain Creators)
                                    </div>
                                    <ul>
                                      {vpc.valueMap.gainCreators.map((item, iIdx) => (
                                        <li key={iIdx}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Right bottom: Pain Relievers */}
                                  <div className="vpc-box pain-relievers">
                                    <div className="box-title">
                                      💊 Smertelindrere (Pain Relievers)
                                    </div>
                                    <ul>
                                      {vpc.valueMap.painRelievers.map((item, iIdx) => (
                                        <li key={iIdx}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                {/* Central Gift Square */}
                                <div className="vpc-square-center-gift">
                                  <Icons.Gift className="w-6 h-6" />
                                </div>
                              </div>
                              <div className="vpc-canvas-caption">
                                <Icons.Gift className="w-5 h-5" />
                                <span>Verditilbud (Value Map)</span>
                              </div>
                            </div>

                            {/* 2. KUNDEPROFIL (Strategyzer Circle / Customer Profile) */}
                            <div className="vpc-canvas-card">
                              <div className="vpc-circle-canvas">
                                <div className="vpc-circle-grid">
                                  {/* Top left/mid: Gains */}
                                  <div className="vpc-box gains">
                                    <div className="box-title">
                                      💎 Gevinster (Gains)
                                    </div>
                                    <ul>
                                      {vpc.customerProfile.gains.map((item, iIdx) => (
                                        <li key={iIdx}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Bottom left/mid: Pains */}
                                  <div className="vpc-box pains">
                                    <div className="box-title">
                                      ⚡ Smertepunkter (Pains)
                                    </div>
                                    <ul>
                                      {vpc.customerProfile.pains.map((item, iIdx) => (
                                        <li key={iIdx}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Right: Customer Jobs */}
                                  <div className="vpc-box jobs full-height">
                                    <div className="box-title">
                                      🎯 Kundens Oppgaver (Jobs)
                                    </div>
                                    <ul>
                                      {vpc.customerProfile.jobs.map((item, iIdx) => (
                                        <li key={iIdx}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                {/* Central Head Circle */}
                                <div className="vpc-circle-center-head">
                                  <Icons.User className="w-6 h-6" />
                                </div>
                              </div>
                              <div className="vpc-canvas-caption">
                                <Icons.User className="w-5 h-5" />
                                <span>Kundeprofil (Customer Segment)</span>
                              </div>
                            </div>
                          </div>
                          
                          {vpc.longDescription && (
                            <div className="vpc-long-desc-card glass-card" style={{ padding: "20px", borderRadius: "12px", border: "1px solid var(--border-color)", background: "var(--bg-card)", marginTop: "32px" }}>
                              <h4 className="flex items-center gap-2 text-primary font-semibold mb-2.5" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0 0 10px 0" }}>
                                <Icons.Lightbulb className="w-4 h-4 text-amber-500 animate-pulse" />
                                <span>Utdypende verdiskapning:</span>
                              </h4>
                              <p className="text-secondary" style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: vpc.longDescription }} />
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Custom: Juridisk & Risiko Page Visual Render */}
                {currentPage.id === "juridisk-risiko" && (
                  <div className="legal-risk-dashboard">
                    
                    {/* 1. SWOT SECTION */}
                    <div className="wiki-section">
                      <h2>Konseptets Styrker & Svakheter (SWOT)</h2>
                      <div className="grid-2">
                        <div className="swot-card strength">
                          <div className="swot-card-header">
                            <Icons.CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span>Styrker</span>
                          </div>
                          <ul>
                            {currentPage.swot.strengths.map((str, idx) => (
                              <li key={idx} dangerouslySetInnerHTML={{ __html: str }} />
                            ))}
                          </ul>
                        </div>

                        <div className="swot-card weakness">
                          <div className="swot-card-header">
                            <Icons.AlertTriangle className="w-5 h-5 text-amber-500" />
                            <span>Svakheter / Sårbarheter</span>
                          </div>
                          <ul>
                            {currentPage.swot.weaknesses.map((weak, idx) => (
                              <li key={idx} dangerouslySetInnerHTML={{ __html: weak }} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 2. RISK MATRIX SECTION */}
                    <div className="wiki-section">
                      <h2>Interaktiv 5x5 Risikomatrise</h2>
                      <p className="text-secondary mb-6">
                        Hver identifiserte risiko er plottet inn basert på <strong>Sannsynlighet (1–5)</strong> og <strong>Konsekvens (1–5)</strong>. Klikk på et av tallene/risikoene i matrisen eller i listen for å lese de spesifikke forebyggende tiltakene.
                      </p>

                      <div className="matrix-layout">
                        {/* Matrix Grid */}
                        <div className="matrix-container">
                          <div className="matrix-title-y">Sannsynlighet →</div>
                          <div className="matrix-grid-wrapper">
                            <div className="matrix-axis-y">
                              <span>5</span>
                              <span>4</span>
                              <span>3</span>
                              <span>2</span>
                              <span>1</span>
                            </div>
                            
                            <div className="matrix-board">
                              {[5, 4, 3, 2, 1].map((s) => (
                                <div key={s} className="matrix-row">
                                  {[1, 2, 3, 4, 5].map((k) => {
                                    // Find risks mapped to this coordinate
                                    const cellRisks = currentPage.risks.filter(
                                      (r) => r.sannsynlighet === s && r.konsekvens === k
                                    );
                                    return (
                                      <div
                                        key={k}
                                        className={`matrix-cell ${getMatrixCellColor(s, k)}`}
                                      >
                                        {cellRisks.map((risk) => (
                                          <button
                                            key={risk.id}
                                            onClick={() => setSelectedRiskId(risk.id)}
                                            className={`matrix-risk-dot ${selectedRiskId === risk.id ? "active" : ""}`}
                                            title={risk.title}
                                          >
                                            {risk.id}
                                          </button>
                                        ))}
                                      </div>
                                    );
                                  })}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="matrix-axis-x">
                            <div className="empty-space"></div>
                            <div className="axis-x-labels">
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                            </div>
                          </div>
                          <div className="matrix-title-x">Konsekvens →</div>
                        </div>

                        {/* Selected Risk Mitigation Card */}
                        <div className="risk-details-panel">
                          {currentPage.risks.map((risk) => {
                            if (risk.id !== selectedRiskId) return null;
                            return (
                              <div key={risk.id} className="risk-detail-card glass-card">
                                <div className="risk-header-row">
                                  <span className={`risk-badge badge-${risk.alvorlighet.toLowerCase()}`}>
                                    R{risk.id} - {risk.alvorlighet}
                                  </span>
                                  <span className="risk-score">
                                    S: {risk.sannsynlighet} × K: {risk.konsekvens} = R: {risk.sannsynlighet * risk.konsekvens}
                                  </span>
                                </div>
                                <h3>{risk.title}</h3>
                                <p className="risk-desc">{risk.beskrivelse}</p>
                                
                                <div className="mitigation-block">
                                  <strong>💡 Forebyggende Tiltak:</strong>
                                  <p>{risk.tiltak}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* 3. DETAILED LEGAL TOPICS ACCORDION */}
                    <div className="wiki-section">
                      <h2>Juridisk Dypdykk (De 10 Rettsområdene)</h2>
                      <p className="text-secondary mb-6">
                        Velg et av rettsområdene under for å lese den fulle utredningen og vurderingen:
                      </p>

                      <div className="accordion">
                        {currentPage.legalTopics.map((topic, idx) => {
                          const isOpen = openAccordionIdx === idx;
                          return (
                            <div key={idx} className="accordion-item glass-card">
                              <button
                                onClick={() => setOpenAccordionIdx(isOpen ? null : idx)}
                                className="accordion-header"
                              >
                                <span>{topic.title}</span>
                                <Icons.ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                              </button>
                              
                              {isOpen && (
                                <div className="accordion-content">
                                  <p dangerouslySetInnerHTML={{ __html: topic.text }} />
                                  {topic.details && (
                                    <button
                                      onClick={() => setActiveLegalTopicIdx(idx)}
                                      className="accordion-details-btn"
                                    >
                                      <Icons.ExternalLink className="w-4 h-4" />
                                      <span>Les full utredning</span>
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                )}

                {/* Custom: Forslag på utførelse Page Visual Render */}
                {currentPage.id === "forslag-utforelse" && (
                  <div className="proposal-dashboard animate-fade-in">
                    
                    {/* Hovedbudskap / Callout */}
                    <div className="proposal-callout-card glass-card">
                      <div className="callout-header">
                        <Icons.Compass className="w-6 h-6 text-blue-500 animate-pulse" />
                        <span>Det Viktigste Budskapet</span>
                      </div>
                      <p className="callout-text">
                        <strong>"Én strukturell endring løser flere problemer samtidig:</strong> Stift et AS, betal HiØ markedspris, ha et formelt emne med læringsmål. Dette alene reduserer statsstøtterisikoen, arbeidstakerrisikoen, ansvarsrisikoen og konkurranseklagerisikoen.<strong>"</strong>
                      </p>
                    </div>

                    {/* Interactive 9 Adjustments Grid & Detail View */}
                    <div className="wiki-section">
                      <h2>De 9 Tilpasningsområdene</h2>
                      <p className="text-secondary mb-6">
                        Velg et av tilpasningsområdene under for å lese konkrete endringer, hvorfor det vil fungere, og mulige utfordringer.
                      </p>

                      <div className="proposal-interactive-layout">
                        {/* Left sidebar with the 9 buttons */}
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

                        {/* Right details panel */}
                        <div className="proposal-details-panel">
                          {currentPage.adjustments.map((adj, idx) => {
                            if (idx !== activeAdjustmentIdx) return null;
                            return (
                              <div key={adj.id} className="proposal-details-card glass-card animate-fade-in">
                                <div className="card-header">
                                  <span className="proposal-badge">Område {adj.id}</span>
                                  <h2>{adj.title}</h2>
                                </div>

                                {/* Custom table if organsasjonsform */}
                                {adj.table && (
                                  <div className="table-container mb-6 mt-4">
                                    <table className="wiki-table">
                                      <thead>
                                        <tr>
                                          {adj.table.headers.map((h, hIdx) => (
                                            <th key={hIdx}>{h}</th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {adj.table.rows.map((row, rIdx) => (
                                          <tr key={rIdx}>
                                            {row.map((cell, cIdx) => (
                                              <td key={cIdx} dangerouslySetInnerHTML={{ __html: cell }} />
                                            ))}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                )}

                                {/* Sub-adjustments list */}
                                <div className="sub-adjustments-list mt-4">
                                  {adj.subAdjustments.map((sub, sIdx) => (
                                    <div key={sIdx} className="sub-adjustment-item">
                                      {adj.subAdjustments.length > 1 && (
                                        <h3 className="sub-adj-title">{sub.title}</h3>
                                      )}
                                      
                                      <div className="detail-section konkret">
                                        <strong>🎯 Konkret Tilpasning:</strong>
                                        <ul>
                                          {sub.konkret.map((k, kIdx) => (
                                            <li key={kIdx} dangerouslySetInnerHTML={{ __html: k }} />
                                          ))}
                                        </ul>
                                      </div>

                                      <div className="detail-section function-box">
                                        <strong>✅ Hvorfor dette vil fungere:</strong>
                                        <p dangerouslySetInnerHTML={{ __html: sub.hvorfor }} />
                                      </div>

                                      <div className="detail-section challenge-box">
                                        <strong>⚠️ Mulig motstand og utfordringer:</strong>
                                        <ul>
                                          {sub.motstand.map((m, mIdx) => (
                                            <li key={mIdx} dangerouslySetInnerHTML={{ __html: m }} />
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Prioritised table */}
                    <div className="wiki-section">
                      <h2>Prioriterte Tiltak i Rekkefølge</h2>
                      <p className="text-secondary mb-6">
                        Anbefalt veikart for implementering av tilpasningsforslagene.
                      </p>
                      <div className="table-container">
                        <table className="wiki-table prioritized-table">
                          <thead>
                            <tr>
                              {currentPage.prioritizedTasks.headers.map((h, hIdx) => (
                                <th key={hIdx}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {currentPage.prioritizedTasks.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                <td><span className="priority-badge">{row[0]}</span></td>
                                <td className="task-title"><strong>{row[1]}</strong></td>
                                <td><span className="theme-badge">{row[2]}</span></td>
                                <td><span className="cost-tag">{row[3]}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="search-modal-backdrop" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <Icons.Search className="w-5 h-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                className="search-modal-input"
                placeholder="Skriv for å søke i hele wikien..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => setSearchOpen(false)} className="search-modal-close">
                <Icons.X className="w-5 h-5" />
              </button>
            </div>
            <div className="search-results-list">
              {searchQuery.trim() === "" ? (
                <div className="no-results">Skriv noe for å starte søket...</div>
              ) : searchResults.length === 0 ? (
                <div className="no-results">Ingen resultater funnet for "{searchQuery}"</div>
              ) : (
                searchResults.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSearchResultClick(item.pageId)}
                    className="search-result-item"
                  >
                    <div className="search-result-title">
                      {renderIcon(item.icon, "w-4 h-4 text-blue-500")}
                      <span>{item.pageTitle}</span>
                      <span className="search-result-category">{item.category}</span>
                    </div>
                    <div className="search-result-snippet">{item.snippet}</div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
