import React, { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { wikiData } from "./data/wikiData";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVpcTab, setActiveVpcTab] = useState(0);
  const searchInputRef = useRef(null);

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
      if (page.title.toLowerCase().includes(query) || page.category.toLowerCase().includes(query) || page.lead.toLowerCase().includes(query)) {
        results.push({
          pageId: page.id,
          pageTitle: page.title,
          category: page.category,
          icon: page.icon,
          snippet: page.lead
        });
      }

      // Check sections
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
          {wikiData.slice(0, 5).map((page) => (
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
          {wikiData.slice(5, 7).map((page) => (
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
          {wikiData.slice(7).map((page) => (
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
            {/* Standard sections */}
            {currentPage.sections.map((sec, idx) => (
              <div key={idx} className="wiki-section">
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
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}

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
                        {/* 1. VERDITILBUD (Square / Value Map) */}
                        <div className="vpc-panel value-map">
                          <div className="panel-header">
                            <Icons.Gift className="w-5 h-5" />
                            <span>Verditilbud (Value Map)</span>
                          </div>
                          
                          <div className="panel-grid">
                            <div className="vpc-box gain-creators">
                              <div className="box-title">⚡ Gevinstskapere (Gain Creators)</div>
                              <ul>
                                {vpc.valueMap.gainCreators.map((item, iIdx) => (
                                  <li key={iIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="vpc-box pain-relievers">
                              <div className="box-title">💊 Smertelindrere (Pain Relievers)</div>
                              <ul>
                                {vpc.valueMap.painRelievers.map((item, iIdx) => (
                                  <li key={iIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="vpc-box products">
                              <div className="box-title">📦 Produkter & Tjenester</div>
                              <ul>
                                {vpc.valueMap.products.map((item, iIdx) => (
                                  <li key={iIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* 2. KUNDEPROFIL (Circle / Customer Profile) */}
                        <div className="vpc-panel customer-profile">
                          <div className="panel-header">
                            <Icons.User className="w-5 h-5" />
                            <span>Kundeprofil (Customer Segment)</span>
                          </div>

                          <div className="panel-grid">
                            <div className="vpc-box gains">
                              <div className="box-title">💎 Gevinster (Gains)</div>
                              <ul>
                                {vpc.customerProfile.gains.map((item, iIdx) => (
                                  <li key={iIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="vpc-box pains">
                              <div className="box-title">⚡ Smertepunkter (Pains)</div>
                              <ul>
                                {vpc.customerProfile.pains.map((item, iIdx) => (
                                  <li key={iIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="vpc-box jobs">
                              <div className="box-title">🎯 Kundens Oppgaver (Jobs)</div>
                              <ul>
                                {vpc.customerProfile.jobs.map((item, iIdx) => (
                                  <li key={iIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
