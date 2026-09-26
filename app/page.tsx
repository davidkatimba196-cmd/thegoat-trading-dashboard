const progressSteps = [
  { label: 'Account sync', detail: 'Connect broker credentials and permissions' },
  { label: 'Strategy setup', detail: 'Configure market filters and triggers' },
  { label: 'Risk guardrails', detail: 'Set exposure and loss limits' },
  { label: 'Go live', detail: 'Activate automated monitoring' },
];

const tools = [
  {
    id: 'analysis',
    title: 'Market Analysis',
    description: 'Track macro sentiment, liquidity flows, and entry signals across major pairs and indices.',
    action: 'Open analysis',
    accent: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18.5h16M7 15l3.5-4 3 2.5 5-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 6.5H20v3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'risk',
    title: 'Risk Management',
    description: 'Monitor position exposure, drawdown thresholds, and trade-level volatility checks in real time.',
    action: 'Review limits',
    accent: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 18.8 6v5.8c0 4.1-2.9 7.7-6.8 8.7-3.9-1-6.8-4.6-6.8-8.7V6l6.8-2.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9.5 12.5 11.2 14.2l3.5-4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Launch condition-based workflows to trigger alerts, journal events, and execution actions efficiently.',
    action: 'Configure automations',
    accent: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 7.5v9h9v-9h-9Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 9.5h4M10 12h4M10 14.5h3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'portfolio',
    title: 'Portfolio Monitor',
    description: 'Follow allocation health, active sessions, and modal performance across all active instruments.',
    action: 'View portfolio',
    accent: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18.5h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 16V9.5M12 16V6.5M17 16v-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar" aria-label="Primary navigation">
        <div className="brand" aria-label="THEGOAT home">
          <span className="brand-mark">TG</span>
          <span className="brand-name">THEGOAT</span>
        </div>

        <div className="status-indicator" aria-label="Connection status">
          <span className="status-dot" aria-hidden="true" />
          <span>Live</span>
        </div>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#overview">Overview</a>
          <a href="#setup">Setup</a>
          <a href="#tools">Tools</a>
          <a href="#signals">Signals</a>
        </nav>

        <div className="toolbar" aria-label="Page controls">
          <button type="button" className="toolbar-button tertiary">
            Sync
          </button>
          <button type="button" className="toolbar-button" aria-label="Open settings">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.5v3M12 17.5v3M4.7 7.7l2.1 2.1M17.2 17.2l2.1 2.1M3.5 12h3M17.5 12h3M4.7 16.3l2.1-2.1M17.2 6.8l2.1-2.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </header>

      <div className="page-content">
        <section className="hero-panel" id="overview" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Deriv third-party workspace</p>
            <h1 id="hero-title">A sharper view of the market, built for decisive execution.</h1>
            <p className="hero-description">
              Connect your strategy stack, track live execution, and manage risk with a streamlined command center designed for modern traders.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-button">
                Launch dashboard
              </button>
              <button type="button" className="secondary-button">
                View setup guide
              </button>
            </div>
          </div>

          <aside className="hero-summary" aria-label="Market summary">
            <div className="summary-header">
              <span>Market pulse</span>
              <span className="summary-tag positive">+1.28%</span>
            </div>

            <div className="market-stack">
              <div className="market-row">
                <span>EUR/USD</span>
                <strong>1.0934</strong>
                <em>+0.32%</em>
              </div>
              <div className="market-row">
                <span>NASDAQ</span>
                <strong>19,486</strong>
                <em>+1.08%</em>
              </div>
              <div className="market-row">
                <span>Gold</span>
                <strong>2,352</strong>
                <em>+0.74%</em>
              </div>
            </div>

            <div className="summary-footer">
              <div>
                <label>Signal quality</label>
                <strong>92%</strong>
              </div>
              <div>
                <label>Active sessions</label>
                <strong>14</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="setup-panel" id="setup" aria-labelledby="setup-title">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Setup progress</p>
              <h2 id="setup-title">Build your trading workflow</h2>
            </div>
            <div className="connection-status" aria-live="polite">
              <span className="status-dot active" aria-hidden="true" />
              Connection stable
            </div>
          </div>

          <div className="stepper" role="list" aria-label="Setup steps">
            {progressSteps.map((step, index) => (
              <div key={step.label} className={`step ${index === 0 ? 'is-active' : ''}`} role="listitem">
                <span className="step-number">{index + 1}</span>
                <div>
                  <strong>{step.label}</strong>
                  <small>{step.detail}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="progress-block" aria-label="Setup progress">
            <div className="progress-track" aria-hidden="true">
              <span className="progress-fill" />
            </div>
            <div className="progress-meta">
              <span>Data pipeline stable</span>
              <strong>72% ready</strong>
            </div>
          </div>
        </section>

        <section className="tools-panel" id="tools" aria-labelledby="tools-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Execution stack</p>
              <h2 id="tools-title">Command tools for smarter decision making</h2>
            </div>
          </div>

          <div className="tool-grid" aria-label="Trading tools">
            {tools.map((tool) => (
              <article key={tool.id} className={`tool-card ${tool.accent}`}>
                <div className="card-icon" aria-hidden="true">{tool.icon}</div>
                <div className="card-content">
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </div>
                <button type="button" className="card-action">
                  {tool.action}
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
