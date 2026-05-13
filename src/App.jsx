import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Factory,
  FileCheck,
  FileText,
  Layers,
  Lock,
  RefreshCw,
  Scale,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="brand">
            <div className="brand-icon" aria-hidden="true">
              <Layers size={14} strokeWidth={2.5} />
            </div>
            <span className="brand-text">SYLVAN</span>
          </a>
          <div className="nav-links">
            <a href="#structure">The Structure</a>
            <a href="#personas">For RIAs</a>
            <a href="#offerings">Strategies</a>
          </div>
          <div className="nav-actions">
            <a href="#" className="nav-login">
              Advisor Login
            </a>
            <button type="button" className="btn btn-primary btn-nav">
              Request Access
              <ArrowRight className="btn-icon" size={14} strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      <main className="main">
        <section className="hero animate-fade-up">
          <div className="pill">
            <span className="pill-dot" aria-hidden="true" />
            <span className="pill-label">Platform Update</span>
            <span className="pill-divider" aria-hidden="true" />
            <span className="pill-muted">New Core Income Tranche Open</span>
          </div>

          <h1 className="hero-title">
            Standardized income <br />
            <span className="hero-title-muted">for the modern RIA.</span>
          </h1>

          <p className="hero-lede">
            The operating system for private real estate allocations. Sylvan
            separates the asset from the structure, allowing firms to allocate
            repeatedly without re-underwriting the governance.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg">
              View Methodology
            </button>
            <button type="button" className="btn btn-outline btn-lg">
              Talk to Sales
            </button>
          </div>
        </section>

        <section id="structure" className="section-structure animate-fade-up delay-100">
          <div className="section-structure-copy">
            <h2 className="section-heading">
              One approval. Infinite allocations.
            </h2>
            <p className="section-text">
              Private real estate is traditionally hard to scale because every
              deal brings new governance questions. Sylvan standardizes the
              rules so you only have to judge the property.
            </p>

            <div className="feature-list">
              <div className="feature-row">
                <div className="feature-icon-wrap">
                  <Lock className="feature-icon" size={12} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="feature-title">Fixed Governance</h4>
                  <p className="feature-desc">
                    Leverage limits, cash-flow waterfalls, and payment priorities
                    are immutable across offerings.
                  </p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon-wrap">
                  <RefreshCw className="feature-icon" size={12} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="feature-title">Variable Assets</h4>
                  <p className="feature-desc">
                    Underlying properties change (Multifamily, Industrial), but
                    the investment vehicle remains identical.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="diagram-card">
            <div className="diagram-accent-bar" aria-hidden="true" />
            <div className="diagram-inner">
              <div className="diagram-header">
                <span className="diagram-kicker">The Sylvan Framework</span>
                <div className="diagram-live">
                  <span className="live-dot-wrap" aria-hidden="true">
                    <span className="live-dot-ping" />
                    <span className="live-dot" />
                  </span>
                  <span className="diagram-live-text">Active Pipeline</span>
                </div>
              </div>

              <div className="diagram-body">
                <div className="immutable-box">
                  <div className="immutable-badge">IMMUTABLE STRUCTURE</div>
                  <div className="immutable-grid">
                    <div className="immutable-cell">
                      <Scale className="immutable-cell-icon" size={16} strokeWidth={2} />
                      <span className="immutable-cell-label">
                        Defined
                        <br />
                        Leverage
                      </span>
                    </div>
                    <div className="immutable-cell">
                      <FileText className="immutable-cell-icon" size={16} strokeWidth={2} />
                      <span className="immutable-cell-label">
                        Uniform
                        <br />
                        Reporting
                      </span>
                    </div>
                    <div className="immutable-cell">
                      <Shield className="immutable-cell-icon" size={16} strokeWidth={2} />
                      <span className="immutable-cell-label">
                        First-Loss
                        <br />
                        Protection
                      </span>
                    </div>
                  </div>
                </div>

                <div className="diagram-connector" aria-hidden="true" />

                <div className="asset-strip">
                  <div className="asset-strip-label">Underlying Asset</div>
                  <div className="asset-strip-viewport">
                    <div className="asset-slide-track">
                      <div className="asset-slide-row">
                        <div className="asset-slide-icon">
                          <Factory size={16} strokeWidth={2} />
                        </div>
                        <div>
                          <div className="asset-slide-title">Industrial Logistics</div>
                          <div className="asset-slide-sub">
                            Yield Strategy • Savannah, GA
                          </div>
                        </div>
                      </div>
                      <div className="asset-slide-row">
                        <div className="asset-slide-icon">
                          <Building2 size={16} strokeWidth={2} />
                        </div>
                        <div>
                          <div className="asset-slide-title">Multifamily Class-A</div>
                          <div className="asset-slide-sub">
                            Growth Strategy • Austin, TX
                          </div>
                        </div>
                      </div>
                      <div className="asset-slide-row">
                        <div className="asset-slide-icon">
                          <Activity size={16} strokeWidth={2} />
                        </div>
                        <div>
                          <div className="asset-slide-title">Medical Office</div>
                          <div className="asset-slide-sub">
                            Income Strategy • Nashville, TN
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="personas" className="section-personas animate-fade-up delay-200">
          <div className="section-personas-intro">
            <h3 className="section-subheading">
              Built for the Investment Committee
            </h3>
            <p className="section-subtext">
              Addressing the specific needs of firm leadership.
            </p>
          </div>

          <div className="persona-grid">
            <article className="persona-card card-shine">
              <div className="persona-card-icon">
                <BarChart3 size={20} strokeWidth={2} />
              </div>
              <h4 className="persona-card-title">Chief Investment Officer</h4>
              <ul className="persona-list">
                <li>
                  <span className="check-wrap check-anim">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>One-time structure approval</span>
                </li>
                <li>
                  <span className="check-wrap check-anim check-delay-1">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>Defined downside behavior</span>
                </li>
                <li>
                  <span className="check-wrap check-anim check-delay-2">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>Asset-level review only</span>
                </li>
              </ul>
            </article>

            <article className="persona-card card-shine">
              <div className="persona-card-icon">
                <FileCheck size={20} strokeWidth={2} />
              </div>
              <h4 className="persona-card-title">Chief Compliance Officer</h4>
              <ul className="persona-list">
                <li>
                  <span className="check-wrap check-anim">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>Consistent classification</span>
                </li>
                <li>
                  <span className="check-wrap check-anim check-delay-1">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>Version-controlled docs</span>
                </li>
                <li>
                  <span className="check-wrap check-anim check-delay-2">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>Exam-ready records</span>
                </li>
              </ul>
            </article>

            <article className="persona-card card-shine">
              <div className="persona-card-icon">
                <Users size={20} strokeWidth={2} />
              </div>
              <h4 className="persona-card-title">Client Advisors</h4>
              <ul className="persona-list">
                <li>
                  <span className="check-wrap check-anim">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>Explainable income logic</span>
                </li>
                <li>
                  <span className="check-wrap check-anim check-delay-1">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>No performance promises</span>
                </li>
                <li>
                  <span className="check-wrap check-anim check-delay-2">
                    <Check className="check-icon" size={14} strokeWidth={2.5} />
                  </span>
                  <span>Clear client reporting</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="offerings" className="section-offerings animate-fade-up delay-200">
          <div className="offerings-intro">
            <h3 className="section-heading-lg">Structured Investment Strategies</h3>
            <p className="section-text-lg">
              Standardized capital access tailored for specific portfolio
              requirements.
            </p>
          </div>

          <div className="strategy-scroll">
            <article className="strategy-card">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Modern building architecture"
                className="strategy-bg"
              />
              <div className="strategy-gradient" aria-hidden="true" />
              <div className="strategy-content">
                <div className="strategy-slide">
                  <div className="strategy-header-block">
                    <span className="strategy-badge strategy-badge-green">
                      <span className="strategy-badge-dot strategy-badge-dot-green" />
                      Stabilized Yield
                    </span>
                    <h4 className="strategy-title">Core Income</h4>
                  </div>
                  <div className="strategy-reveal">
                    <p className="strategy-desc strategy-desc-green">
                      Prioritizes immediate distributable cash flow over capital
                      appreciation. Ideal for funding operations.
                    </p>
                    <div className="strategy-meta">
                      <div>
                        <div className="strategy-meta-label">Target</div>
                        <div className="strategy-meta-value">Current Yield</div>
                      </div>
                      <div>
                        <div className="strategy-meta-label">Liquidity</div>
                        <div className="strategy-meta-value">Quarterly</div>
                      </div>
                    </div>
                    <button type="button" className="strategy-cta">
                      View Fact Sheet{' '}
                      <ArrowRight size={12} strokeWidth={2} className="inline-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <article className="strategy-card">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                alt="Strategic analysis"
                className="strategy-bg"
              />
              <div className="strategy-gradient" aria-hidden="true" />
              <div className="strategy-content">
                <div className="strategy-slide">
                  <div className="strategy-header-block">
                    <span className="strategy-badge">
                      <span className="strategy-badge-dot strategy-badge-dot-yellow" />
                      Tax Efficiency
                    </span>
                    <h4 className="strategy-title">Offset Income</h4>
                  </div>
                  <div className="strategy-reveal">
                    <p className="strategy-desc strategy-desc-yellow">
                      Leverages specific depreciation schedules to lower current
                      taxable income relative to cash received.
                    </p>
                    <div className="strategy-meta">
                      <div>
                        <div className="strategy-meta-label">Target</div>
                        <div className="strategy-meta-value">Depreciation</div>
                      </div>
                      <div>
                        <div className="strategy-meta-label">Risk Profile</div>
                        <div className="strategy-meta-value">Stabilized</div>
                      </div>
                    </div>
                    <button type="button" className="strategy-cta">
                      View Fact Sheet{' '}
                      <ArrowRight size={12} strokeWidth={2} className="inline-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <article className="strategy-card">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"
                alt="Business meeting"
                className="strategy-bg"
              />
              <div className="strategy-gradient" aria-hidden="true" />
              <div className="strategy-content">
                <div className="strategy-slide">
                  <div className="strategy-header-block">
                    <span className="strategy-badge">
                      <span className="strategy-badge-dot strategy-badge-dot-blue" />
                      1031 Exchange
                    </span>
                    <h4 className="strategy-title">DST Access</h4>
                  </div>
                  <div className="strategy-reveal">
                    <p className="strategy-desc strategy-desc-blue">
                      Standardized underwriting wrapped within a DST legal entity.
                      Transition from active landlord to passive owner.
                    </p>
                    <div className="strategy-meta">
                      <div>
                        <div className="strategy-meta-label">Target</div>
                        <div className="strategy-meta-value">Tax Deferral</div>
                      </div>
                      <div>
                        <div className="strategy-meta-label">Structure</div>
                        <div className="strategy-meta-value">
                          Beneficial Interest
                        </div>
                      </div>
                    </div>
                    <button type="button" className="strategy-cta">
                      View Fact Sheet{' '}
                      <ArrowRight size={12} strokeWidth={2} className="inline-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-capital animate-fade-up delay-300">
          <div className="capital-texture" aria-hidden="true" />
          <div className="capital-grid">
            <div className="capital-copy">
              <h2 className="capital-heading">
                Capital Discipline &amp;
                <br />
                Priority of Payments
              </h2>
              <p className="capital-p">
                Sylvan investments occupy a fixed, defensive position in the
                capital stack. We sit below senior bank debt but above sponsor
                equity.
              </p>
              <p className="capital-p">
                Our non-discretionary waterfall ensures net distributable cash
                flows to Sylvan investors before sponsor equity sees a dollar.
              </p>
              <div className="capital-tags">
                <div className="capital-tag">
                  <div className="capital-tag-label">Portfolio Role</div>
                  <div className="capital-tag-value">Income Allocation</div>
                </div>
                <div className="capital-tag">
                  <div className="capital-tag-label">Target Utility</div>
                  <div className="capital-tag-value">Bonds / REIT Comp</div>
                </div>
              </div>
            </div>

            <div className="capital-stack-wrap">
              <h4 className="capital-stack-title">Standard Capital Stack</h4>
              <div className="capital-stack">
                <div className="stack-row stack-row-muted">
                  <span className="stack-row-title">Senior Bank Debt</span>
                  <span className="stack-row-meta">Senior Lien</span>
                </div>
                <div className="stack-arrow" aria-hidden="true" />
                <div className="stack-row stack-row-hero">
                  <div>
                    <span className="stack-hero-title">Sylvan Income</span>
                    <span className="stack-hero-sub">
                      Structured Pref/Mezz Position
                    </span>
                  </div>
                  <ShieldCheck className="stack-hero-icon" size={20} strokeWidth={2} />
                </div>
                <div className="stack-arrow" aria-hidden="true" />
                <div className="stack-row stack-row-equity">
                  <span className="stack-row-title">Sponsor Equity</span>
                  <span className="stack-row-meta">First Loss Position</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="disclosure-bar">
          <div className="disclosure-col">
            <h5 className="disclosure-heading">Platform Scope</h5>
            <p>
              Sylvan is a standardized investment structure, a review workflow,
              and a governance platform. We facilitate the documentation and
              structural integrity of private real estate transactions for RIAs.
            </p>
          </div>
          <div className="disclosure-col disclosure-col-border">
            <h5 className="disclosure-heading">Important Disclosures</h5>
            <p>
              Sylvan is <strong>not</strong> an issuer of securities, an
              investment adviser, a broker-dealer, or a custodian of client
              assets. Sylvan does not manage discretionary strategies or
              commingled funds.
            </p>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-brand">
            <span className="footer-logo">SYLVAN</span>
            <span className="footer-copy">© 2026 Sylvan Structured Income.</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Regulatory Disclosures</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
