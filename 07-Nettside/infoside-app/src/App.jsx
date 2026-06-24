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
  const [activeGjennomforingPhase, setActiveGjennomforingPhase] = useState(0);
  const [activePostIt, setActivePostIt] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [tldrExpanded, setTldrExpanded] = useState(false);
  const [ordlisteMode, setOrdlisteMode] = useState("category");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const skipResetRef = useRef(false);

  // Reset detailed view when changing page
  useEffect(() => {
    setActiveLegalTopicIdx(null);
    setOpenAccordionIdx(null);
    setActiveGjennomforingPhase(0);
    setActivePostIt(null);
    if (!skipResetRef.current) {
      setActiveAdjustmentIdx(0);
    } else {
      skipResetRef.current = false;
    }
    setOpenSections({});
    setTldrExpanded(false);
    setOrdlisteMode("category");
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [activePage]);

  // Sync page state with URL hash and handle browser back/forward (including mouse4/mouse5)
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setActivePage(event.state.page);
      } else {
        const hash = window.location.hash.replace("#", "");
        if (hash && wikiData.some(p => p.id === hash)) {
          setActivePage(hash);
        }
      }
    };

    // Determine initial page from URL hash if present
    const hash = window.location.hash.replace("#", "");
    const isValidPage = wikiData.some(p => p.id === hash);
    const initialPage = isValidPage ? hash : "dashboard";

    if (initialPage !== activePage) {
      setActivePage(initialPage);
    }

    // Set initial history state
    window.history.replaceState({ page: initialPage }, "", `#${initialPage}`);

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Update browser history when activePage changes in-app
  useEffect(() => {
    const currentState = window.history.state;
    if (!currentState || currentState.page !== activePage) {
      window.history.pushState({ page: activePage }, "", `#${activePage}`);
    }
  }, [activePage]);

  const navigateToAdjustment = (adjId) => {
    skipResetRef.current = true;
    setActivePage("forslag-utforelse");
    setActiveAdjustmentIdx(adjId - 1);
  };

  const renderWeaknessText = (text) => {
    const match = text.match(/\[(R\d+)\]/);
    if (match) {
      const riskIdStr = match[1];
      const riskId = parseInt(riskIdStr.replace('R', ''), 10);
      const parts = text.split(/(\[R\d+\])/);
      return (
        <>
          {parts.map((part, i) => {
            if (part.match(/\[R\d+\]/)) {
              return (
                <span
                  key={i}
                  onClick={() => {
                    setSelectedRiskId(riskId);
                    setTimeout(() => {
                      const el = document.getElementById("selected-risk-detail");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }, 50);
                  }}
                  className="risk-link"
                  title={`Klikk for å se tiltak for risiko ${part}`}
                >
                  {part}
                </span>
              );
            }
            return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
          })}
        </>
      );
    }
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

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

      {/* Mobile Top Bar */}
      <div className="mobile-header">
        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
        </button>
        <div className="mobile-brand">
          <span className="brand-name">Syntax & Flow</span>
        </div>
        <button className="mobile-search-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
          <Icons.Search className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
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

      {/* Bakgrunns-overlay for mobilmeny */}
      {mobileMenuOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

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
                  <span>Tilbake til Risiko & Jus</span>
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
                {/* TL;DR Summary Card */}
                {currentPage.tldr && (
                  <div className="tldr-card glass-card" style={{
                    padding: tldrExpanded ? '20px' : '14px 20px',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--accent-color)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    marginBottom: tldrExpanded ? '28px' : '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div 
                      onClick={() => setTldrExpanded(!tldrExpanded)}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        width: '100%',
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}
                      className="tldr-header"
                    >
                      <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)' }}>
                        <Icons.Lightbulb className="w-5 h-5 animate-pulse" />
                        <span>Kort oppsummert (TL;DR)</span>
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTldrExpanded(!tldrExpanded);
                        }}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'all 0.2s ease',
                        }}
                        className="tldr-toggle-btn"
                      >
                        <span>{tldrExpanded ? "Vis mindre" : "Vis mer"}</span>
                        {tldrExpanded ? <Icons.ChevronUp className="w-3.5 h-3.5" /> : <Icons.ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    {tldrExpanded && (
                      <ul style={{ margin: '14px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {currentPage.tldr.map((point, pIdx) => (
                          <li key={pIdx} style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Standard sections */}
                {currentPage.sections && currentPage.id !== "prosjektplan" && currentPage.id !== "gjennomforingsplan" && currentPage.id !== "ordliste" && currentPage.sections.map((sec, idx) => {
                  const isCollapsible = !!sec.isCollapsible;
                  const sectionKey = `${currentPage.id}-${idx}`;
                  const isOpen = !!openSections[sectionKey];

                  return (
                    <div
                      key={idx}
                      className={`wiki-section ${isCollapsible ? "collapsible-section glass-card animate-fade-in" : ""}`}
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

                              {sec.gridCards && (
                                <div className={sec.gridCards.length === 3 ? "grid-3" : "grid-2"}>
                                  {sec.gridCards.map((card, cIdx) => (
                                    <div key={cIdx} className="glass-card" style={{ padding: '20px', borderRadius: '12px' }}>
                                      <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                                        {card.icon && renderIcon(card.icon, "w-5 h-5 text-accent")}
                                        <span>{card.title}</span>
                                      </h3>
                                      {card.subtitle && <h4 style={{ opacity: 0.7, fontSize: '0.875rem', fontWeight: 500, margin: '-6px 0 10px 0', color: 'var(--text-muted)' }}>{card.subtitle}</h4>}
                                      <p dangerouslySetInnerHTML={{ __html: card.content }} style={{ marginBottom: 0, fontSize: '0.9rem', lineHeight: '1.5' }} />
                                    </div>
                                  ))}
                                </div>
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
                                          {row.map((cell, cIdx) => {
                                            let cellClassName = "";
                                            if (sec.table.headers[cIdx] && sec.table.headers[cIdx].includes("In Scope")) {
                                              cellClassName = "scope-in-cell";
                                            } else if (sec.table.headers[cIdx] && sec.table.headers[cIdx].includes("Out of Scope")) {
                                              cellClassName = "scope-out-cell";
                                            }
                                            return (
                                              <td
                                                key={cIdx}
                                                className={cellClassName}
                                                dangerouslySetInnerHTML={{ __html: cell }}
                                              />
                                            );
                                          })}
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
                          {sec.heading === "Hvordan henger business casen sammen?" && currentPage.id === "dashboard" ? (
                            <div className="business-case-flow-container mt-6 animate-fade-in">
                              <div className="flow-steps-grid-3">
                                {[
                                  { num: 1, title: "Forretningsidé", icon: "Lightbulb", color: "blue", desc: "Formålet og retningen for Syntax & Flow." },
                                  { num: 2, title: "Value Proposition", icon: "Compass", color: "amber", desc: "Verdien vi skaper for studenter, HiØ og bedrifter.", highlight: true },
                                  { num: 3, title: "Forretningsmodell", icon: "Briefcase", color: "emerald", desc: "Hvordan verdien leveres pro-bono." },
                                  { num: 4, title: "Marked & Konkurranse", icon: "TrendingUp", color: "indigo", desc: "Hvem vi hjelper og posisjonering." },
                                  { num: 5, title: "Scope", icon: "Crosshair", color: "purple", desc: "Hva som er in/out of scope for prosjektet." },
                                  { num: 6, title: "Risiko & Juss", icon: "Shield", color: "rose", desc: "Sikrer statsstøtteskille, GDPR og ansvarsfraskrivelse." }
                                ].map((step, idx, arr) => {
                                  const IconComponent = Icons[step.icon];
                                  return (
                                    <React.Fragment key={step.num}>
                                      <div className={`flow-step-card ${step.highlight ? 'highlighted' : ''}`}>
                                        <div className={`step-badge bg-${step.color}`}>{step.num}</div>
                                        <div className="step-icon-wrapper">
                                          {IconComponent && <IconComponent className={`w-6 h-6 text-${step.color}-icon`} />}
                                        </div>
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                      </div>
                                      {idx !== 2 && idx !== 5 && (
                                        <div className="flow-step-arrow">
                                          <Icons.ArrowRight className="w-5 h-5" />
                                        </div>
                                      )}
                                      {idx === 2 && (
                                        <div className="flow-return-arrow-row">
                                          <div className="flow-return-arrow-vertical-mobile">
                                            <Icons.ArrowRight className="w-5 h-5" />
                                          </div>
                                          <div className="flow-return-arrow-desktop">
                                            <svg className="return-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                                              <path d="M 83.5 0 L 83.5 20 L 16.5 20 L 16.5 40" stroke="var(--accent-color)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
                                              <polygon points="16.5,40 13.5,34 19.5,34" fill="var(--accent-color)" />
                                            </svg>
                                          </div>
                                        </div>
                                      )}
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                              <p className="flow-footer text-secondary mt-6 text-sm" style={{ marginTop: '24px', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                <strong>Hvordan det henger sammen:</strong> Forretningsidéen definerer retningen. Value Proposition (VP) tydeliggjør verdiskapningen (visualisert i våre VPC-er). Forretningsmodellen beskriver hvordan denne verdien leveres (gratis samarbeidsmodell med en forpliktende milepælsplan). Marked og konkurranse kartlegger eksterne krefter. Scope definerer rammene for hva vi skal gjøre (og ikke gjøre), og Risiko og juss sikrer at vi navigerer innenfor lovverk som statsstøttereglene og personvern.
                              </p>
                            </div>
                          ) : (
                            <>
                              {sec.text && <p dangerouslySetInnerHTML={{ __html: sec.text }} />}
                              
                              {sec.heading === "Win-Win-Win Forretningsmodell" && currentPage.id === "forretningsmodell" && (
                                <div className="win-win-win-visualization mt-8 animate-fade-in" style={{ marginTop: '36px' }}>
                                  <style dangerouslySetInnerHTML={{ __html: `
                                    .win-triangle-container {
                                      position: relative;
                                      display: flex;
                                      flex-direction: column;
                                      align-items: center;
                                      margin: 40px 0;
                                      padding: 20px;
                                      min-height: 420px;
                                    }
                                    .win-center-node {
                                      position: absolute;
                                      top: 50%;
                                      left: 50%;
                                      transform: translate(-50%, -50%);
                                      width: 120px;
                                      height: 120px;
                                      border-radius: 50%;
                                      background: var(--bg-secondary);
                                      border: 2px solid var(--accent-color);
                                      box-shadow: 0 0 20px var(--accent-glow);
                                      display: flex;
                                      flex-direction: column;
                                      align-items: center;
                                      justify-content: center;
                                      z-index: 10;
                                      text-align: center;
                                      padding: 10px;
                                    }
                                    .win-node {
                                      width: 260px;
                                      padding: 16px;
                                      border-radius: 12px;
                                      background: rgba(255, 255, 255, 0.02);
                                      border: 1px solid var(--border-color);
                                      transition: all 0.3s ease;
                                      z-index: 5;
                                    }
                                    .win-node:hover {
                                      transform: translateY(-5px);
                                      border-color: var(--accent-light);
                                      box-shadow: 0 8px 30px var(--accent-glow);
                                      background: rgba(255, 255, 255, 0.04);
                                    }
                                    .node-student {
                                      position: absolute;
                                      bottom: 0;
                                      left: 0;
                                      border-left: 4px solid var(--accent-color);
                                    }
                                    .node-bedrift {
                                      position: absolute;
                                      bottom: 0;
                                      right: 0;
                                      border-left: 4px solid #10b981;
                                    }
                                    .node-hio {
                                      position: absolute;
                                      top: 0;
                                      border-left: 4px solid #3b82f6;
                                    }
                                    .win-arrows-svg {
                                      position: absolute;
                                      top: 0;
                                      left: 0;
                                      width: 100%;
                                      height: 100%;
                                      pointer-events: none;
                                      z-index: 1;
                                    }
                                    @media (max-width: 768px) {
                                      .win-triangle-container {
                                        display: flex;
                                        flex-direction: column;
                                        gap: 24px;
                                        min-height: auto;
                                        margin: 20px 0;
                                      }
                                      .win-center-node {
                                        position: relative;
                                        transform: none;
                                        top: auto;
                                        left: auto;
                                        margin: 10px auto;
                                      }
                                      .win-node {
                                        position: relative;
                                        width: 100%;
                                        top: auto;
                                        bottom: auto;
                                        left: auto;
                                        right: auto;
                                      }
                                      .win-arrows-svg {
                                        display: none;
                                      }
                                    }
                                  `}} />

                                  <div className="win-triangle-container">
                                    <svg className="win-arrows-svg" viewBox="0 0 600 400">
                                      <line x1="300" y1="200" x2="300" y2="70" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="5 5" />
                                      <line x1="300" y1="200" x2="130" y2="330" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="5 5" />
                                      <line x1="300" y1="200" x2="470" y2="330" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="5 5" />
                                      
                                      <path d="M 260 350 L 340 350" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow-green)" />
                                      <path d="M 450 280 L 370 120" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
                                      <path d="M 230 120 L 150 280" stroke="var(--accent-color)" strokeWidth="2" fill="none" markerEnd="url(#arrow-red)" />
                                      
                                      <defs>
                                        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                                          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                                        </marker>
                                        <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                                          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                                        </marker>
                                        <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                                          <path d="M0,0 L0,6 L9,3 z" fill="var(--accent-color)" />
                                        </marker>
                                      </defs>
                                    </svg>

                                    <div className="win-center-node">
                                      <Icons.RefreshCw className="w-6 h-6 text-accent mb-1 animate-spin" style={{ animationDuration: '8s' }} />
                                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>Syntax & Flow</span>
                                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Verdiutveksling</span>
                                    </div>

                                    <div className="win-node node-hio">
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <Icons.GraduationCap className="w-5 h-5 text-blue-500" style={{ color: '#3b82f6' }} />
                                        <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>Høgskolen i Østfold</h4>
                                      </div>
                                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        <div style={{ marginBottom: '6px' }}><span style={{ color: '#10b981', fontWeight: 600 }}>+</span> Økt studiekvalitet & kandidatproduksjon</div>
                                        <div><span style={{ color: '#10b981', fontWeight: 600 }}>+</span> Redusert frafall på slutten av løpet</div>
                                      </div>
                                    </div>

                                    <div className="win-node node-student">
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <Icons.Users className="w-5 h-5 text-accent" />
                                        <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>Studentene</h4>
                                      </div>
                                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        <div style={{ marginBottom: '6px' }}><span style={{ color: '#10b981', fontWeight: 600 }}>+</span> Reell arbeidserfaring under studietiden</div>
                                        <div><span style={{ color: '#10b981', fontWeight: 600 }}>+</span> Attraktiv CV & portefølje</div>
                                      </div>
                                    </div>

                                    <div className="win-node node-bedrift">
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <Icons.Building className="w-5 h-5 text-emerald-500" style={{ color: '#10b981' }} />
                                        <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>Lokalt Næringsliv</h4>
                                      </div>
                                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        <div style={{ marginBottom: '6px' }}><span style={{ color: '#10b981', fontWeight: 600 }}>+</span> Risikofri løsning av IT/design/økonomi</div>
                                        <div><span style={{ color: '#10b981', fontWeight: 600 }}>+</span> Trygg rekrutteringskanal (observasjon)</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          )}

                          {sec.heading === "1. Modell med to parallelle spor" && currentPage.id === "scope" && (
                            <div className="evighetsprosjekt-timeline mt-6 animate-fade-in">
                              <p className="text-secondary mb-4" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                                Hvordan prosjektene videreføres kontinuerlig uten kunnskapstap når studentkull uteksamineres:
                              </p>
                              <div className="semester-flow">
                                <div className="semester-box">
                                  <div className="sem-badge">Semester 1</div>
                                  <h4>Kull A (Oppstart)</h4>
                                  <p>Etablerer krav, database-skjema, basis arkitektur og kjerne-MVP.</p>
                                </div>
                                <div className="sem-arrow">
                                  <Icons.ArrowRight className="w-5 h-5 text-accent" />
                                </div>
                                <div className="semester-box">
                                  <div className="sem-badge">Semester 2</div>
                                  <h4>Kull B (Overlapp)</h4>
                                  <p>Overtar repokode via overleveringsplan, bygger API og integrerer nye funksjoner.</p>
                                </div>
                                <div className="sem-arrow">
                                  <Icons.ArrowRight className="w-5 h-5 text-accent" />
                                </div>
                                <div className="semester-box">
                                  <div className="sem-badge">Semester 3</div>
                                  <h4>Kull C (Polering)</h4>
                                  <p>Lansering, feilretting, traineer læres opp og klargjøring for neste kull.</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {sec.heading === "Trelagsmodellen" && currentPage.id === "organisasjon-og-drift" && (
                            <div className="org-chart-visualization mb-8 mt-6 animate-fade-in">
                              <div className="org-chart-container">
                                <div className="org-node styret">
                                  <div className="font-semibold text-accent mb-1 flex items-center justify-center gap-2" style={{ fontWeight: 600, color: 'var(--accent-color)', marginBottom: '4px', display: 'flex', alignItems: 'center', justify: 'center', gap: '8px' }}>
                                    <Icons.Shield className="w-5 h-5" />
                                    <span>1. Styret (HiØ / Næringsliv)</span>
                                  </div>
                                  <div className="text-xs text-muted" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Strategi, rammer og godkjenning</div>
                                </div>

                                <div className="org-connector"></div>

                                <div className="org-node kjerne">
                                  <div className="font-semibold text-emerald-500 mb-1 flex items-center justify-center gap-2" style={{ fontWeight: 600, color: '#10b981', marginBottom: '4px', display: 'flex', alignItems: 'center', justify: 'center', gap: '8px' }}>
                                    <Icons.Cpu className="w-5 h-5 animate-pulse" />
                                    <span>2. Stabil kjerne (Drift)</span>
                                  </div>
                                  <div className="text-sm font-medium mb-1" style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '4px' }}>Daglig leder + fagansvarlige</div>
                                  <div className="text-xs text-muted" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Skaffer oppdrag, kvalitetssikrer &amp; følger opp</div>
                                </div>

                                <div className="org-connector"></div>

                                {/* Split connector */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                  <div style={{ width: '66%', height: '2px', background: 'var(--border-color)' }}></div>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '66%', height: '16px' }}>
                                    <div style={{ width: '2px', height: '100%', background: 'var(--border-color)' }}></div>
                                    <div style={{ width: '2px', height: '100%', background: 'var(--border-color)' }}></div>
                                    <div style={{ width: '2px', height: '100%', background: 'var(--border-color)' }}></div>
                                  </div>
                                </div>

                                <div className="org-row-students">
                                  <div className="org-node student-node">
                                    <div className="font-semibold text-amber-500 mb-1 flex items-center justify-center gap-1.5" style={{ fontWeight: 600, color: '#f59e0b', marginBottom: '4px', display: 'flex', alignItems: 'center', justify: 'center', gap: '6px' }}>
                                      <Icons.Code className="w-4 h-4" />
                                      <span>Studenter (IT)</span>
                                    </div>
                                    <div className="text-xs text-muted" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Systemutvikling, programmering, nettsider</div>
                                  </div>
                                  <div className="org-node student-node">
                                    <div className="font-semibold text-amber-500 mb-1 flex items-center justify-center gap-1.5" style={{ fontWeight: 600, color: '#f59e0b', marginBottom: '4px', display: 'flex', alignItems: 'center', justify: 'center', gap: '6px' }}>
                                      <Icons.Palette className="w-4 h-4" />
                                      <span>Studenter (Design)</span>
                                    </div>
                                    <div className="text-xs text-muted" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Profil, Figmaskisser, UI/UX</div>
                                  </div>
                                  <div className="org-node student-node">
                                    <div className="font-semibold text-amber-500 mb-1 flex items-center justify-center gap-1.5" style={{ fontWeight: 600, color: '#f59e0b', marginBottom: '4px', display: 'flex', alignItems: 'center', justify: 'center', gap: '6px' }}>
                                      <Icons.TrendingUp className="w-4 h-4" />
                                      <span>Studenter (Økonomi)</span>
                                    </div>
                                    <div className="text-xs text-muted" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Økonomisk analyse, regnskap, strategi</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {sec.points && (
                            <ul style={sec.heading === "1. Modell med to parallelle spor" && currentPage.id === "scope" ? { marginTop: '32px' } : {}}>
                              {sec.points.map((pt, pIdx) => (
                                <li key={pIdx} dangerouslySetInnerHTML={{ __html: pt }} />
                              ))}
                            </ul>
                          )}

                          {sec.gridCards && (
                            <div className={sec.gridCards.length === 3 ? "grid-3" : "grid-2"}>
                              {sec.gridCards.map((card, cIdx) => (
                                <div key={cIdx} className="glass-card" style={{ padding: '20px', borderRadius: '12px' }}>
                                  <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                                    {card.icon && renderIcon(card.icon, "w-5 h-5 text-accent")}
                                    <span>{card.title}</span>
                                  </h3>
                                  {card.subtitle && <h4 style={{ opacity: 0.7, fontSize: '0.875rem', fontWeight: 500, margin: '-6px 0 10px 0', color: 'var(--text-muted)' }}>{card.subtitle}</h4>}
                                  <p dangerouslySetInnerHTML={{ __html: card.content }} style={{ marginBottom: 0, fontSize: '0.9rem', lineHeight: '1.5' }} />
                                </div>
                              ))}
                            </div>
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
                                      {row.map((cell, cIdx) => {
                                        let cellClassName = "";
                                        if (sec.table.headers[cIdx] && sec.table.headers[cIdx].includes("In Scope")) {
                                          cellClassName = "scope-in-cell";
                                        } else if (sec.table.headers[cIdx] && sec.table.headers[cIdx].includes("Out of Scope")) {
                                          cellClassName = "scope-out-cell";
                                        }
                                        return (
                                          <td
                                            key={cIdx}
                                            className={cellClassName}
                                            dangerouslySetInnerHTML={{ __html: cell }}
                                          />
                                        );
                                      })}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}

                          {sec.heading === "1. Kostnadsanalyse & Budsjett" && currentPage.id === "risiko-og-jus" && (
                            <div className="de-minimis-info-box glass-card p-6 animate-fade-in" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.02)', marginTop: '48px' }}>
                              <h3 style={{ marginTop: 0, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontSize: '1.15rem', fontWeight: 600 }}>
                                <Icons.ShieldCheck className="w-5 h-5 text-accent animate-pulse" />
                                <span>De Minimis Statsstøtte — Beregningsmodell</span>
                              </h3>
                              <p className="text-secondary" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                                Siden Syntax & Flow yter gratis tjenester til bedrifter ved hjelp av offentlige ressurser, regnes verdien som de minimis-støtte (bagatellmessig statsstøtte). For å sikre full overholdelse av EØS-reglene føres et internt register og det utstedes et støtteerklæringsbrev til mottakerbedriften.
                              </p>
                              
                              <div style={{ background: 'rgba(245, 158, 11, 0.07)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                                <strong>Viktig:</strong> Beløpene nedenfor er forsvarstall, ikke fakturabeløp. Ingen betaler noe. De finnes kun på papiret i registeret og i et erklæringsbrev til kunden. Formålet er å dokumentere overfor ESA eller Konkurransetilsynet at hver kunde mottar støtte under 300 000 EUR-grensen.
                              </div>

                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', background: 'rgba(255,255,255,0.01)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '20px' }}>
                                <div>
                                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Studentenes Verdi</div>
                                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0' }}>
                                    250 kr / time
                                  </div>
                                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                    Tilsvarer omtrent det en bedrift ville betalt en studentassistent eller trainee. Settes lavt fordi studentene er under opplæring, arbeidet leveres uten garanti, og ingen kommersiell aktør ville betalt full pris.
                                  </div>
                                </div>
                                <div className="de-minimis-col">
                                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Mentorenes Verdi</div>
                                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0' }}>
                                    600 kr / time
                                  </div>
                                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                    Faktisk timeskostnad for en HiØ-foreleser (lønn + arbeidsgiveravgift).
                                  </div>
                                </div>
                              </div>
                              
                              <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '16px', borderRadius: '12px', border: '1px dashed rgba(37, 99, 235, 0.2)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                <strong>Eksempel:</strong> Et prosjekt med 4 studenter (150 timer hver) + 15 timer mentorveiledning gir en beregnet støtteverdi på:
                                <br />
                                <code style={{ display: 'block', marginTop: '8px', background: 'rgba(0,0,0,0.25)', padding: '6px 12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                  (4 × 150t × 250 kr) + (15t × 600 kr) = 159 000 kr
                                </code>
                                Dette beløpet loggføres i registeret og oppgis til kunden i erklæringsbrevet. Grensen er 300 000 EUR over en rullerende 3-årsperiode.
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}

                {/* Custom: Business Case Fremdrift for Dashboard page */}
                {currentPage.id === "dashboard" && (
                  <div className="business-case-progress mt-12 glass-card animate-fade-in" style={{ padding: '24px', borderRadius: '16px', marginTop: '48px', border: '1px solid var(--border-color)' }}>
                    <style dangerouslySetInnerHTML={{ __html: `
                      .progress-row-item:hover {
                        background: rgba(255, 255, 255, 0.03) !important;
                        border-color: var(--border-color-active) !important;
                        box-shadow: 0 4px 20px var(--accent-glow);
                        transform: translateX(4px);
                      }
                    `}} />
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <Icons.TrendingUp className="w-6 h-6 text-accent" />
                      <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>Business Case Fremdrift</h2>
                    </div>
                    <p className="text-secondary mb-6" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
                      Oversikt over fremdrift og fullføringsgrad for de ulike delene av Syntax & Flows Business Case. Klikk på et område for å navigere til den tilsvarende siden.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        { area: "Executive Summary", status: "❌ Mangler", percentage: 0, link: "dashboard", statusText: "Mangler" },
                        { area: "Problembeskrivelse", status: "🟡 Delvis", percentage: 60, link: "dashboard", statusText: "Mangler kvantitativ underbygning, personas" },
                        { area: "Value Proposition / VPC", status: "✅ Ferdig", percentage: 100, link: "vpc", statusText: "Ferdig" },
                        { area: "Forretningsmodell", status: "🟡 Delvis", percentage: 70, link: "forretningsmodell", statusText: "Mangler enhetsøkonomi" },
                        { area: "Markedsanalyse", status: "🟡 Delvis", percentage: 50, link: "markeds-og-konkurranseanalyse", statusText: "Mangler lokale bedriftsintervjuer, TAM/SAM/SOM" },
                        { area: "Scope", status: "✅ Ferdig", percentage: 100, link: "scope", statusText: "Ferdig" },
                        { area: "Risiko & Juss", status: "🟡 Delvis", percentage: 80, link: "risiko-og-jus", statusText: "Mangler DPIA, forsikring" },
                        { area: "Finansiering", status: "🟡 Delvis", percentage: 40, link: "maler-og-utkast", statusText: "Mangler 3-års prognose, konkret søknad" },
                        { area: "Team & Organisasjon", status: "🟡 Delvis", percentage: 40, link: "organisasjon-og-drift", statusText: "Mangler navngitte personer" },
                        { area: "Gjennomføringsplan", status: "✅ Ferdig", percentage: 90, link: "gjennomforingsplan", statusText: "Mangler Gantt-diagram" },
                        { area: "Vedlegg", status: "🟡 Delvis", percentage: 40, link: "maler-og-utkast", statusText: "Ikke organisert" },
                      ].map((item, idx) => {
                        let barColor = "#ef4444";
                        let badgeBg = "rgba(239, 68, 68, 0.1)";
                        let badgeText = "#ef4444";

                        if (item.percentage === 100) {
                          barColor = "#10b981";
                          badgeBg = "var(--badge-bg-green)";
                          badgeText = "var(--badge-text-green)";
                        } else if (item.percentage >= 70) {
                          barColor = "#3b82f6";
                          badgeBg = "var(--badge-bg-blue)";
                          badgeText = "var(--badge-text-blue)";
                        } else if (item.percentage >= 40) {
                          barColor = "#f59e0b";
                          badgeBg = "rgba(245, 158, 11, 0.1)";
                          badgeText = "#d97706";
                        }

                        return (
                          <div
                            key={idx}
                            onClick={() => {
                              setActivePage(item.link);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="progress-row-item animate-fade-in"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                              padding: '16px',
                              borderRadius: '12px',
                              background: 'rgba(255, 255, 255, 0.01)',
                              border: '1px solid var(--border-color)',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontWeight: 600, fontSize: '0.975rem' }}>{item.area}</span>
                                <span style={{
                                  fontSize: '0.75rem',
                                  padding: '2px 8px',
                                  borderRadius: '6px',
                                  backgroundColor: badgeBg,
                                  color: badgeText,
                                  fontWeight: 600
                                }}>
                                  {item.status}
                                </span>
                              </div>
                              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: barColor }}>{item.percentage} %</span>
                            </div>

                            <div style={{
                              width: '100%',
                              height: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '4px',
                              overflow: 'hidden'
                            }}>
                              <div style={{
                                width: `${item.percentage}%`,
                                height: '100%',
                                backgroundColor: barColor,
                                borderRadius: '4px',
                                transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                              }} />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                              <span>{item.statusText}</span>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-light)' }}>
                                Vis side <Icons.ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Custom: Ordliste page rendering with Category Filter */}
                {currentPage.id === "ordliste" && (() => {
                  const allGlossaryTerms = [];
                  currentPage.sections.forEach(sec => {
                    if (sec.table && sec.table.rows) {
                      sec.table.rows.forEach(row => {
                        allGlossaryTerms.push({
                          term: row[0],
                          definition: row[1],
                          category: row[2] || "Organisasjon"
                        });
                      });
                    }
                  });

                  const cleanTermName = (html) => html.replace(/<[^>]*>/g, '').trim().toLowerCase();
                  allGlossaryTerms.sort((a, b) => cleanTermName(a.term).localeCompare(cleanTermName(b.term)));

                  const categoriesOrder = ["Jus/EØS", "Marked/Forretning", "Prosjektledelse", "Organisasjon", "Personvern/GDPR", "Student/Utdanning"];
                  const groupedTerms = {};
                  allGlossaryTerms.forEach(item => {
                    if (!groupedTerms[item.category]) {
                      groupedTerms[item.category] = [];
                    }
                    groupedTerms[item.category].push(item);
                  });

                  return (
                    <div className="ordliste-container animate-fade-in">
                      
                      <div className="flex items-center gap-3 mb-8" style={{ display: 'flex', gap: '12px', marginBottom: '32px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>Sortering:</span>
                        <button
                          onClick={() => setOrdlisteMode("alphabetical")}
                          className={`btn ${ordlisteMode === "alphabetical" ? "active" : ""}`}
                          style={{
                            padding: '6px 16px',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            border: '1px solid var(--border-color)',
                            backgroundColor: ordlisteMode === "alphabetical" ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.02)',
                            color: ordlisteMode === "alphabetical" ? '#ffffff' : 'var(--text-primary)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          🔤 Alfabetisk
                        </button>
                        <button
                          onClick={() => setOrdlisteMode("category")}
                          className={`btn ${ordlisteMode === "category" ? "active" : ""}`}
                          style={{
                            padding: '6px 16px',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            border: '1px solid var(--border-color)',
                            backgroundColor: ordlisteMode === "category" ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.02)',
                            color: ordlisteMode === "category" ? '#ffffff' : 'var(--text-primary)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          📂 Etter kategori
                        </button>
                      </div>

                      {ordlisteMode === "alphabetical" ? (
                        currentPage.sections.map((sec, idx) => (
                          <div key={idx} className="wiki-section mb-8" style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', color: 'var(--accent-light)' }}>{sec.heading}</h2>
                            {sec.table && (
                              <div className="table-container">
                                <table className="wiki-table">
                                  <thead>
                                    <tr>
                                      <th style={{ width: '30%' }}>Begrep</th>
                                      <th>Forklaring</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {sec.table.rows.map((row, rIdx) => (
                                      <tr key={rIdx}>
                                        <td dangerouslySetInnerHTML={{ __html: row[0] }} />
                                        <td dangerouslySetInnerHTML={{ __html: row[1] }} />
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="categories-glossary-wrapper">
                          {categoriesOrder.map((catName) => {
                            const terms = groupedTerms[catName] || [];
                            if (terms.length === 0) return null;
                            
                            let CatIcon = Icons.BookOpen;
                            if (catName === "Jus/EØS") CatIcon = Icons.Scale;
                            if (catName === "Marked/Forretning") CatIcon = Icons.TrendingUp;
                            if (catName === "Prosjektledelse") CatIcon = Icons.ClipboardList;
                            if (catName === "Organisasjon") CatIcon = Icons.Network;
                            if (catName === "Personvern/GDPR") CatIcon = Icons.Shield;
                            if (catName === "Student/Utdanning") CatIcon = Icons.GraduationCap;

                            return (
                              <div key={catName} className="wiki-section mb-8" style={{ marginBottom: '36px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                                  <CatIcon className="w-5 h-5 text-accent-light" style={{ color: 'var(--accent-light)' }} />
                                  <h2 style={{ margin: 0, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                                    <span>{catName}</span>
                                    <span style={{ 
                                      fontSize: '0.75rem', 
                                      fontWeight: 600, 
                                      padding: '2px 8px', 
                                      borderRadius: '9999px', 
                                      backgroundColor: 'var(--badge-bg-blue)', 
                                      color: 'var(--badge-text-blue)' 
                                    }}>
                                      {terms.length} {terms.length === 1 ? 'begrep' : 'begreper'}
                                    </span>
                                  </h2>
                                </div>
                                <div className="table-container">
                                  <table className="wiki-table">
                                    <thead>
                                      <tr>
                                        <th style={{ width: '30%' }}>Begrep</th>
                                        <th>Forklaring</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {terms.map((item, tIdx) => (
                                        <tr key={tIdx}>
                                          <td dangerouslySetInnerHTML={{ __html: item.term }} />
                                          <td dangerouslySetInnerHTML={{ __html: item.definition }} />
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Custom: Prosjektplan timeline rendering */}
                {currentPage.id === "prosjektplan" && (
                  <div className="project-timeline-container animate-fade-in">
                    {/* Horizontal Weeks Progress Bar */}
                    <div className="weeks-progress-bar-wrapper">
                      <div className="weeks-progress-bar">
                        {currentPage.sections.map((sec, idx) => {
                          const phaseWeeks = [
                            "Uke 1-3",
                            "Uke 4-7",
                            "Uke 8-11",
                            "Uke 12-14",
                            "Uke 15-16"
                          ];
                          const isActive = activeGjennomforingPhase === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                setActiveGjennomforingPhase(idx);
                                // Smooth scroll to selected phase card
                                const target = document.getElementById(`project-phase-${idx}`);
                                if (target) {
                                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                              }}
                              className={`week-step-btn ${isActive ? "active" : ""}`}
                            >
                              <div className="week-dot"></div>
                              <span className="week-label">{phaseWeeks[idx]}</span>
                              <span className="phase-title-lbl">{sec.heading.split(':')[1]?.trim() || sec.heading}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline Node Flow */}
                    <div className="timeline-flow">
                      {currentPage.sections.map((sec, idx) => {
                        const isActive = activeGjennomforingPhase === idx;
                        return (
                          <div 
                            key={idx} 
                            id={`project-phase-${idx}`}
                            className={`timeline-item ${isActive ? "focused-phase" : ""}`}
                            style={{ transition: 'all 0.3s ease' }}
                          >
                            <div className="timeline-badge-wrapper">
                              <div className="timeline-badge">Fase {idx + 1}</div>
                              <div className="timeline-badge-line"></div>
                            </div>
                            <div className="timeline-content glass-card hover-glow" onClick={() => setActiveGjennomforingPhase(idx)}>
                              <div className="flex justify-between items-start" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                                <h2 className="m-0 text-primary">{sec.heading}</h2>
                                <span className="timeline-weeks-tag">
                                  {idx === 0 && "Uke 1-3"}
                                  {idx === 1 && "Uke 4-7"}
                                  {idx === 2 && "Uke 8-11"}
                                  {idx === 3 && "Uke 12-14"}
                                  {idx === 4 && "Uke 15-16"}
                                </span>
                              </div>
                              <div
                                className="timeline-desc mt-3"
                                dangerouslySetInnerHTML={{ __html: sec.text }}
                              />
                              <div className="timeline-grid mt-4">
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
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Custom: Gjennomføringsplan visual timeline & stepper */}
                {currentPage.id === "gjennomforingsplan" && (
                  <div className="implementation-timeline-container animate-fade-in">
                    
                    {/* Horizontal Phase Stepper */}
                    <div className="phase-stepper-wrapper">
                      <div className="phase-stepper">
                        {currentPage.sections[0].table.rows.map((row, idx) => {
                          const isActive = activeGjennomforingPhase === idx;
                          const isCompleted = idx < activeGjennomforingPhase;
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveGjennomforingPhase(idx)}
                              className={`phase-step-btn ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                            >
                              <div className="step-circle">
                                {isCompleted ? (
                                  <Icons.Check className="w-4 h-4 text-emerald-500 animate-fade-in" />
                                ) : (
                                  idx + 1
                                )}
                              </div>
                              <div className="step-label">
                                <span className="step-phase">{row[0]}</span>
                                <span className="step-title">{row[1].split('(')[0].trim()}</span>
                                <span className="step-duration">{row[1].includes('(') ? `(${row[1].split('(')[1]}` : ''}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <div className="phase-stepper-progress">
                        <div 
                          className="progress-line-fill" 
                          style={{ width: `${(activeGjennomforingPhase / 3) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Phase Summary Card */}
                    {(() => {
                      const selectedRow = currentPage.sections[0].table.rows[activeGjennomforingPhase];
                      return (
                        <div className="phase-summary-card glass-card animate-fade-in">
                          <div className="summary-card-header">
                            <span className="phase-badge">Status & Oversikt</span>
                            <h3>{selectedRow[0]}: {selectedRow[1]}</h3>
                          </div>
                          <div className="summary-grid">
                            <div className="summary-box principle">
                              <div className="summary-box-title">
                                <Icons.Compass className="w-4 h-4 text-blue-500" />
                                <span>Kjerne-prinsipp</span>
                              </div>
                              <p>{selectedRow[3]}</p>
                            </div>
                            <div className="summary-box risks-solved">
                              <div className="summary-box-title">
                                <Icons.ShieldCheck className="w-4 h-4 text-green-500" />
                                <span>Risikoer som løses her</span>
                              </div>
                              <p dangerouslySetInnerHTML={{ __html: selectedRow[2] }} />
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Phase Activities Timeline Cards */}
                    <div className="activities-section-title">
                      <h2>Aktiviteter i {currentPage.sections[activeGjennomforingPhase + 1].heading.replace(/^\d+\.\s*/, "")}</h2>
                      <p className="text-secondary">{currentPage.sections[activeGjennomforingPhase + 1].text}</p>
                    </div>

                    <div className="activity-cards-list">
                      {currentPage.sections[activeGjennomforingPhase + 1].table.rows.map((actRow, actIdx) => (
                        <div key={actIdx} className="activity-timeline-card glass-card animate-fade-in">
                          <div className="activity-card-left">
                            <div className="activity-number-badge">{actIdx + 1}</div>
                            <div className="activity-timeline-line"></div>
                          </div>
                          <div className="activity-card-content">
                            <h4>{actRow[0]}</h4>
                            
                            <div className="activity-meta-grid">
                              <div className="meta-item">
                                <Icons.HelpCircle className="w-4 h-4 text-accent" style={{ flexShrink: 0 }} />
                                <div>
                                  <strong>{currentPage.sections[activeGjennomforingPhase + 1].table.headers[1]}:</strong>
                                  <span dangerouslySetInnerHTML={{ __html: actRow[1] }} />
                                </div>
                              </div>
                              
                              <div className="meta-item">
                                <Icons.User className="w-4 h-4 text-accent" style={{ flexShrink: 0 }} />
                                <div>
                                  <strong>Ansvarlig:</strong>
                                  <span>{actRow[2]}</span>
                                </div>
                              </div>

                              <div className="meta-item">
                                <Icons.Coins className="w-4 h-4 text-accent" style={{ flexShrink: 0 }} />
                                <div>
                                  <strong>Kostnad / Status:</strong>
                                  <span className="status-badge">{actRow[3]}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Contingency Plan (Beredskapsplan) Section */}
                    {currentPage.sections[5] && (
                      <div className="contingency-section" style={{ marginTop: '80px' }}>
                        <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                          <Icons.AlertOctagon className="w-6 h-6 text-red-500 animate-pulse" />
                          <h2 className="m-0">{currentPage.sections[5].heading.replace(/^\d+\.\s*/, "")}</h2>
                        </div>
                        <p className="text-secondary" style={{ marginBottom: '48px' }}>{currentPage.sections[5].text}</p>
                        
                        <div className="grid-2">
                          {currentPage.sections[5].table.rows.map((bRow, bIdx) => (
                            <div key={bIdx} className="contingency-card glass-card border-red" style={{ padding: '20px', borderRadius: '12px' }}>
                              <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <Icons.AlertTriangle className="w-5 h-5 text-amber-500" />
                                <h3 className="m-0 text-primary" style={{ fontSize: '1.05rem' }} dangerouslySetInnerHTML={{ __html: bRow[0] }} />
                              </div>
                              <div className="card-body">
                                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                                  <strong>Handling:</strong> {bRow[1]}
                                </p>
                                <div className="card-footer" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '12px' }}>
                                  <span className="ansvarlig-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                                    <Icons.User className="w-3.5 h-3.5" />
                                    <span>Ansvarlig: {bRow[2]}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Suksesskriterier Section */}
                    {currentPage.sections[6] && (
                      <div className="success-criteria-section" style={{ marginTop: '80px' }}>
                        <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                          <Icons.Award className="w-6 h-6 text-emerald-500" />
                          <h2 className="m-0">{currentPage.sections[6].heading.replace(/^\d+\.\s*/, "")}</h2>
                        </div>
                        <p className="text-secondary" style={{ marginBottom: '48px' }}>{currentPage.sections[6].text}</p>
                        
                        <div className="grid-3">
                          {currentPage.sections[6].points.map((pt, ptIdx) => {
                            let title = "";
                            let desc = pt;
                            const match = pt.match(/^<strong>(.*?)<\/strong>:\s*(.*)/);
                            if (match) {
                              title = match[1];
                              desc = match[2];
                            } else {
                              const match2 = pt.match(/^(.*?):\s*(.*)/);
                              if (match2) {
                                title = match2[1];
                                desc = match2[2];
                              }
                            }
                            
                            const successIcons = [
                              Icons.Users,          // 1. Ett tverrfaglig team
                              Icons.Clock,          // 2. Tidsramme 8-12 uker
                              Icons.Smile,          // 3. Kundetilfredshet
                              Icons.GraduationCap,  // 4. Læringsutbytte
                              Icons.ShieldCheck,    // 5. Ingen klager
                              Icons.CalendarCheck,  // 6. Timeføring
                              Icons.FileText,       // 7. Overleveringsplan
                              Icons.BookOpen        // 8. Støtteregister
                            ];
                            const IconComponent = successIcons[ptIdx] || Icons.CheckCircle;

                            return (
                              <div key={ptIdx} className="success-card glass-card" style={{ padding: '20px', borderRadius: '12px' }}>
                                <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                  <div className="icon-wrapper" style={{ 
                                    background: 'var(--badge-bg-blue)', 
                                    color: 'var(--badge-text-blue)', 
                                    padding: '8px', 
                                    borderRadius: '8px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center' 
                                  }}>
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  {title ? (
                                    <h3 className="m-0 text-primary" style={{ fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
                                  ) : (
                                    <h3 className="m-0 text-primary" style={{ fontSize: '1rem', fontWeight: 600 }}>Kriterium {ptIdx + 1}</h3>
                                  )}
                                </div>
                                <div className="card-body">
                                  <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-secondary)', margin: 0 }} dangerouslySetInnerHTML={{ __html: desc }} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

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
                                      📦 Products & Services
                                    </div>
                                    <div className="post-it-list">
                                      {vpc.valueMap.products.map((item, iIdx) => (
                                        <div 
                                          key={iIdx} 
                                          className="post-it post-it-yellow"
                                          onClick={() => setActivePostIt({ text: item, theme: 'yellow', title: 'Products & Services' })}
                                        >
                                          {item}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Right top: Gain Creators */}
                                  <div className="vpc-box gain-creators">
                                    <div className="box-title">
                                      ⚡ Gain Creators
                                    </div>
                                    <div className="post-it-list">
                                      {vpc.valueMap.gainCreators.map((item, iIdx) => (
                                        <div 
                                          key={iIdx} 
                                          className="post-it post-it-green"
                                          onClick={() => setActivePostIt({ text: item, theme: 'green', title: 'Gain Creators' })}
                                        >
                                          {item}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Right bottom: Pain Relievers */}
                                  <div className="vpc-box pain-relievers">
                                    <div className="box-title">
                                      💊 Pain Relievers
                                    </div>
                                    <div className="post-it-list">
                                      {vpc.valueMap.painRelievers.map((item, iIdx) => (
                                        <div 
                                          key={iIdx} 
                                          className="post-it post-it-pink"
                                          onClick={() => setActivePostIt({ text: item, theme: 'pink', title: 'Pain Relievers' })}
                                        >
                                          {item}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Central Gift Square */}
                                <div className="vpc-square-center-gift">
                                  <Icons.Gift className="w-6 h-6" />
                                </div>
                              </div>
                              <div className="vpc-canvas-caption">
                                <Icons.Gift className="w-5 h-5" />
                                <span>Value Map</span>
                              </div>
                            </div>

                            {/* 2. KUNDEPROFIL (Strategyzer Circle / Customer Profile) */}
                            <div className="vpc-canvas-card">
                              <div className="vpc-circle-canvas">
                                <div className="vpc-circle-grid">
                                  {/* Top left/mid: Gains */}
                                  <div className="vpc-box gains">
                                    <div className="box-title">
                                      💎 Gains
                                    </div>
                                    <div className="post-it-list">
                                      {vpc.customerProfile.gains.map((item, iIdx) => (
                                        <div 
                                          key={iIdx} 
                                          className="post-it post-it-green"
                                          onClick={() => setActivePostIt({ text: item, theme: 'green', title: 'Gains' })}
                                        >
                                          {item}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Bottom left/mid: Pains */}
                                  <div className="vpc-box pains">
                                    <div className="box-title">
                                      ⚡ Pains
                                    </div>
                                    <div className="post-it-list">
                                      {vpc.customerProfile.pains.map((item, iIdx) => (
                                        <div 
                                          key={iIdx} 
                                          className="post-it post-it-pink"
                                          onClick={() => setActivePostIt({ text: item, theme: 'pink', title: 'Pains' })}
                                        >
                                          {item}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Right: Customer Jobs */}
                                  <div className="vpc-box jobs full-height">
                                    <div className="box-title">
                                      🎯 Customer Jobs
                                    </div>
                                    <div className="post-it-list">
                                      {vpc.customerProfile.jobs.map((item, iIdx) => (
                                        <div 
                                          key={iIdx} 
                                          className="post-it post-it-yellow"
                                          onClick={() => setActivePostIt({ text: item, theme: 'yellow', title: 'Customer Jobs' })}
                                        >
                                          {item}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Central Head Circle */}
                                <div className="vpc-circle-center-head">
                                  <Icons.User className="w-6 h-6" />
                                </div>
                              </div>
                              <div className="vpc-canvas-caption">
                                <Icons.User className="w-5 h-5" />
                                <span>Customer Profile</span>
                              </div>
                            </div>
                          </div>
                          
                          {vpc.longDescription && (
                            <div className="vpc-long-desc-card glass-card" style={{ padding: "20px", borderRadius: "12px", border: "1px solid var(--border-color)", background: "var(--bg-card)", marginTop: "48px" }}>
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
                {currentPage.id === "risiko-og-jus" && (
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
                              <li key={idx}>
                                {renderWeaknessText(weak)}
                              </li>
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
                        <div className="risk-details-panel" id="selected-risk-detail">
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

                                {risk.adjustmentId && (
                                  <button
                                    onClick={() => navigateToAdjustment(risk.adjustmentId)}
                                    className="risk-redirect-btn"
                                  >
                                    <Icons.Compass className="w-4 h-4" />
                                    <span>Se tilpasningsforslag (Område {risk.adjustmentId})</span>
                                    <Icons.ChevronRight className="w-4 h-4 ml-auto" />
                                  </button>
                                )}
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

      {/* Post-it Zoom Modal */}
      {activePostIt && (
        <div className="post-it-modal-backdrop" onClick={() => setActivePostIt(null)}>
          <div 
            className={`post-it-zoom-card post-it-${activePostIt.theme} animate-fade-in`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="post-it-modal-close" onClick={() => setActivePostIt(null)}>
              <Icons.X className="w-5 h-5" />
            </button>
            <div className="post-it-modal-tape"></div>
            {activePostIt.title && (
              <div className="post-it-modal-title">{activePostIt.title}</div>
            )}
            <p className="post-it-modal-text">{activePostIt.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
