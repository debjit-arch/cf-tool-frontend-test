// Dashboard.jsx
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import {
  ShieldCheck,
  FileText,
  Activity,
  LogIn,
  UserCircle2,
  Lock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Users,
  Zap,
  BarChart3,
  ToolCase,
  BookCheck,
  ChevronDown,
  Play,
  Menu,
  X,
} from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import ISO_27001 from "./FrameWorks/ISO_27001";
import ISO_27701 from "./FrameWorks/ISO_27701";
import Procedures from "./Template/Procedures";
import Policies from "./Template/Policies";
import SprintoReplica from "./SprintoReplica";

const Hero3DEarth = ({ isLoggedIn, user }) => {
  const [mounted, setMounted] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={`hero-section ${mounted ? "hero-loaded" : ""}`}>
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            {isLoggedIn
              ? `Welcome back, ${user?.name || "Security Team"}`
              : "Secure Your Entire Sphere"}
          </span>
          <h1 className="hero-title">
            SafeSphere – Enterprise Risk &amp; Compliance Intelligence
          </h1>
          <p className="hero-description">
            A unified control plane for risk assessment, documentation, and
            compliance automation. Visualize your security posture across
            frameworks like ISO 27001 and NIST in real time.
          </p>
          <div className="hero-cta-row">
            <button
              className="hero-cta-primary"
              onClick={() =>
                history.push(isLoggedIn ? "/risk-assessment" : "/login")
              }
            >
              {isLoggedIn ? "Go to Risk Dashboard" : "Get Started"}
            </button>
            <button
              className="hero-cta-secondary"
              onClick={() => history.push("/demo")}
            >
              <LogIn size={16} />
              Get a Demo
            </button>
          </div>
          <div className="hero-meta">
            <span>ISO 27001 · NIST CSF · SOC 2</span>
            <span>Continuous monitoring · Audit-ready evidence</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-sphere">
            <div className="hero-sphere-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreCards = () => {
  const history = useHistory();
  const cards = [
    {
      title: "Risk Assessment",
      description:
        "Continuously score, prioritize, and track risks across assets, vendors, and business units.",
      icon: <ShieldCheck size={26} />,
    },
    {
      title: "Documentation Management",
      description:
        "Centralize policies, procedures, and evidence with version control and review workflows.",
      icon: <FileText size={26} />,
    },
    {
      title: "Gap Assessment",
      description:
        "Map ISO and NIST controls, highlight gaps, and generate implementation roadmaps.",
      icon: <Activity size={26} />,
    },
  ];

  return (
    <section className="corecards-section">
      <div className="corecards-header">
        <h2>Core Intelligence Pillars</h2>
        <p>
          Everything starts with understanding risk, documenting controls, and
          closing compliance gaps – SafeSphere unifies all three.
        </p>
      </div>
      <div className="corecards-grid">
        {cards.map((card, idx) => (
          <div key={card.title} className={`corecard corecard-${idx}`}>
            <div className="corecard-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
        <div className="hero-inner" style={{ width: "100%" }}>
          <div
            className="hero-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              className="hero-cta-row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                className="hero-cta-secondary"
                onClick={() => history.push("/demo")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                }}
              >
                <LogIn size={16} />
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SplitEarthSection = () => (
  <section className="split-section">
    <div className="split-text">
      <h2>Compliance Intelligence in Motion</h2>
      <p>
        SafeSphere continuously ingests signals from your cloud, infrastructure,
        and business processes. Controls are auto-mapped to ISO 27001 and NIST
        CSF so you always know what's in place, what's drifting, and what's at
        risk.
      </p>
      <ul>
        <li>Automated control mapping and evidence suggestions</li>
        <li>Live posture snapshots across all frameworks</li>
        <li>Scenario views for audits, board reviews, and incidents</li>
      </ul>
    </div>
    <div className="split-visual">
      <div className="split-sphere">
        <div className="split-sphere-inner"></div>
      </div>
      <div className="split-orbit-ring" />
    </div>
  </section>
);

const RotatingFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      name: "Team Collaboration Hub",
      icon: "👥",
      short: "Coordinate tasks, approvals, and evidence in a single workspace.",
    },
    {
      name: "Continuous Risk Monitoring",
      icon: "⚡",
      short:
        "Detect control drift and critical risks in real time across assets.",
    },
    {
      name: "Enterprise Grade Security",
      icon: "🔐",
      short:
        "Zero trust access, strong encryption, and multi region resilience.",
    },
    {
      name: "Intelligence Analytics",
      icon: "📊",
      short: "Surface trends, hotspots, and prioritized remediation with AI.",
    },
    {
      name: "Custom Reporting",
      icon: "📄",
      short: "Generate audit ready, stakeholder friendly reports on demand.",
    },
  ];

  const anglePerItem = 360 / features.length;
  const radius = 230;
  const center = 270;

  const handleCenterClick = () => {
    setActiveIndex(null);
  };

  return (
    <section className="rot-pro-section flex justify-center">
      <SprintoReplica />
    </section>
  );
};

const WhySafeSphere = () => {
  const history = useHistory();
  const pillars = [
    {
      title: "Reduce Risk & Compliance Burden",
      icon: <ShieldCheck size={24} />,
      desc: "Consolidate tools, automate evidence, and remove spreadsheet work from your security team.",
    },
    {
      title: "Accelerate Compliance Readiness",
      icon: <TrendingUp size={24} />,
      desc: "Pre-built templates and guided workflows shorten ISO and SOC 2 timelines from months to weeks.",
    },
    {
      title: "Cut Operational Costs",
      icon: <Zap size={24} />,
      desc: "Reuse evidence across frameworks and automate follow-ups to cut manual hours by up to 50%.",
    },
    {
      title: "Improve Security Posture",
      icon: <BarChart3 size={24} />,
      desc: "Risk scoring and continuous monitoring keep your posture live, not locked in last year's report.",
    },
    {
      title: "Improve Gaps from Findings",
      icon: <ToolCase size={24} />,
      desc: "Transform audit findings into actionable tasks. Track remediation progress and automatically close compliance gaps.",
    },
    {
      title: "All Documents at One Place",
      icon: <BookCheck size={24} />,
      desc: "A centralized repository for all policies, procedures, and evidence. Maintain version control and simplify document retrieval.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-header">
        <h2>Why SafeSphere</h2>
        <p>Four pillars designed for modern security and compliance teams.</p>
      </div>
      <div className="why-grid">
        {pillars.map((p, idx) => (
          <div key={p.title} className={`why-card why-card-${idx}`}>
            <div className="why-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
        <div className="hero-inner" style={{ width: "100%" }}>
          <div
            className="hero-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              className="hero-cta-row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                className="hero-cta-secondary"
                onClick={() => history.push("/demo")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                }}
              >
                <LogIn size={16} />
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExtraFeaturesLongScroll = () => {
  const items = [
    {
      title: "Automated Evidence Collection",
      desc: "Connect cloud providers and ticketing tools to auto-pull screenshots, logs, and approvals.",
    },
    {
      title: "Framework Mapping (ISO ↔ NIST)",
      desc: "One control library mapped across frameworks so you never duplicate work.",
    },
    {
      title: "Role-Based Access Control",
      desc: "Give auditors, executives, and engineers tailored views without exposing sensitive data.",
    },
    {
      title: "Compliance Dashboards",
      desc: "See real-time coverage, residual risk, and exceptions in a single pane of glass.",
    },
    {
      title: "Audit Trail & Logs",
      desc: "Immutable timelines for every change, ready for regulators and internal reviews.",
    },
    {
      title: "Secure Cloud Architecture",
      desc: "Built for AWS with encryption, segmentation, and hardened services.",
    },
    {
      title: "AI-Driven Recommendations",
      desc: "Let SafeSphere surface next-best actions based on your controls and incidents.",
    },
  ];

  return (
    <section className="extra-section">
      <div className="extra-inner">
        <h2>Built for Enterprise-Grade Compliance</h2>
        <p>
          As you scroll, SafeSphere reveals everything your team needs – from
          evidence capture to AI insights.
        </p>
        <div className="extra-grid">
          {items.map((item, idx) => (
            <div key={item.title} className={`extra-card extra-card-${idx}`}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const tiles = [
  {
    label: "Risk Management",
    route: "/risk-assessment",
    description:
      "Identify, analyze, and mitigate organizational risks before they impact your business.",
    icon: <ShieldCheck className="w-12 h-12" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Documentation",
    route: "/documentation",
    description:
      "Maintain audit-ready documentation and ensure compliance with industry standards.",
    icon: <FileText className="w-12 h-12" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    label: "Gap Assessment",
    route: "/gap-assessment",
    description:
      "Evaluate compliance gaps and get actionable insights for your organization.",
    icon: <Activity className="w-12 h-12" />,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const features = [
  {
    title: "Continuous Risk Monitoring",
    description:
      "Track vulnerabilities and security events in real-time across your entire infrastructure.",
    icon: "⚡",
  },
  {
    title: "Automated Compliance Checks",
    description:
      "Stay audit-ready with automated control mapping and evidence collection.",
    icon: "✓",
  },
  {
    title: "Intelligent Analytics",
    description:
      "AI-powered insights help you identify trends, predict risks, and make data-driven decisions.",
    icon: "📊",
  },
  {
    title: "Team Collaboration Hub",
    description:
      "Assign tasks, track progress, and collaborate seamlessly with your security team.",
    icon: "👥",
  },
  {
    title: "Custom Reporting",
    description:
      "Generate executive reports with actionable insights for stakeholders.",
    icon: "📄",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption and compliance with SOC 2, ISO 27001, and GDPR standards.",
    icon: "🔐",
  },
];

const benefits = [
  {
    title: "Reduce Risk Exposure",
    subtitle: "By up to 87% in the first year",
    icon: "🛡️",
  },
  {
    title: "Accelerate Compliance",
    subtitle: "Audit-ready in days, not months",
    icon: "⏱️",
  },
  {
    title: "Cut Operational Cost",
    subtitle: "50% reduction in manual compliance work",
    icon: "💰",
  },
  {
    title: "Improve Security Posture",
    subtitle: "Continuous monitoring & threat detection",
    icon: "🔒",
  },
];

const integrations = [
  { name: "AWS", logo: "☁️" },
  { name: "Azure", logo: "📘" },
  { name: "Google Cloud", logo: "🔵" },
  { name: "ServiceNow", logo: "🔧" },
  { name: "Okta", logo: "🔐" },
  { name: "Slack", logo: "💬" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CISO, Fortune 500 Tech",
    quote:
      "SafeSphere transformed our compliance process. We reduced audit time by 70%.",
    avatar: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "Risk Manager, Financial Services",
    quote:
      "The real-time monitoring capabilities are exceptional. We catch potential risks before they become issues.",
    avatar: "👨‍💼",
  },
  {
    name: "Emily Rodriguez",
    role: "Compliance Officer, Healthcare",
    quote:
      "SafeSphere made HIPAA compliance effortless. The automated checks save us countless hours.",
    avatar: "👩‍🔬",
  },
];

const faqs = [
  {
    question: "How long does it take to implement SafeSphere?",
    answer:
      "Most organizations are up and running within 2-4 weeks. Our onboarding team provides full support.",
  },
  {
    question: "Is SafeSphere compliant with industry standards?",
    answer:
      "Yes! SOC 2 Type II certified, ISO 27001 compliant, GDPR ready, and supports HIPAA, NIST, and CIS frameworks.",
  },
  {
    question: "Can SafeSphere integrate with our existing tools?",
    answer:
      "Absolutely. SafeSphere integrates with 100+ enterprise tools including AWS, Azure, ServiceNow, Okta, and Slack.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 enterprise support, dedicated account managers, and regular training sessions.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is based on the number of assets monitored and features used. Contact our sales team for a custom quote.",
  },
];

// NEW small reusable dropdown button component
// replace your HeaderDropdown with this version
const HeaderDropdown = ({ label, options }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNavigate = (route) => {
    setOpen(false);
    history.push(route);
  };

  // Close when clicking anywhere outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="header-dropdown" ref={dropdownRef}>
      <button
        className="header-dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`header-dropdown-icon ${open ? "open" : ""}`}
        />
      </button>
      {open && (
        <div className="header-dropdown-menu">
          {options.map((opt) => (
            <button
              key={opt.label}
              className="header-dropdown-item"
              onClick={() => handleNavigate(opt.route)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [counters, setCounters] = useState({
    companies: 0,
    risks: 0,
    compliance: 0,
  });

  useEffect(() => {
    let interval;
    if (counters.companies < 500) {
      interval = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          companies: Math.min(prev.companies + 10, 500),
          risks: Math.min(prev.risks + 100, 50000),
          compliance: Math.min(prev.compliance + 1, 99),
        }));
      }, 20);
    }
    return () => clearInterval(interval);
  }, [counters]);

  if (user) {
    return (
      <div className="dashboard-signed-in">
        <header className="dashboard-header">
          <div className="dashboard-header-content">
            <div className="dashboard-logo-section">
              <div className="dashboard-logo-icon">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="dashboard-logo-text">SAFESPHERE</h1>
                <p className="dashboard-logo-subtext">
                  Enterprise Risk & Compliance Platform
                </p>
              </div>
            </div>

            {/* NEW header right side with dropdowns + user card */}
            <div className="dashboard-header-right">
              {/* Frameworks dropdown */}
              <HeaderDropdown
                label="Frameworks"
                options={[
                  { label: "ISO 27001", route: { ISO_27001 } },
                  { label: "NIST CSF", route: "/nist-csf" },
                ]}
              />

              {/* Templates dropdown */}
              <HeaderDropdown
                label="Templates"
                options={[
                  { label: "Policy Templates", route: "/policy-templates" },
                  { label: "Risk Templates", route: "/risk-templates" },
                ]}
              />

              <div className="dashboard-user-card">
                <UserCircle2 className="text-indigo-600 w-5 h-5" />
                <div className="dashboard-user-info">
                  <span className="dashboard-user-name">
                    {user.name || "User"}
                  </span>
                  <span className="dashboard-user-role">
                    {user.department?.name || "Consultant"}
                  </span>
                </div>
                <button
                  onClick={() => setShowChangePassword(true)}
                  className="dashboard-change-pwd-btn"
                >
                  <Lock className="w-4 h-4" /> Change
                </button>
                {showChangePassword && (
                  <ChangePasswordModal
                    onClose={() => setShowChangePassword(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="dashboard-main">
          <Hero3DEarth isLoggedIn={true} user={user} />
          <CoreCards />
          <SplitEarthSection />
          <RotatingFeatures />
          <WhySafeSphere />
          <ExtraFeaturesLongScroll />

          <section className="dashboard-tiles-section">
            <h3 className="dashboard-section-title">Core Modules</h3>
            <div className="dashboard-tiles-grid">
              {tiles.map(
                ({
                  label,
                  route,
                  description,
                  icon,
                  color,
                  bgColor,
                  iconColor,
                }) => (
                  <div
                    key={label}
                    className="dashboard-tile"
                    onClick={() => history.push(route)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") history.push(route);
                    }}
                  >
                    <div className={`dashboard-tile-icon-wrapper ${bgColor}`}>
                      <div className={`dashboard-tile-icon ${iconColor}`}>
                        {icon}
                      </div>
                    </div>
                    <h3 className="dashboard-tile-title">{label}</h3>
                    <p className="dashboard-tile-description">{description}</p>
                    <div
                      className={`dashboard-tile-accent bg-gradient-to-r ${color}`}
                    />
                  </div>
                )
              )}
            </div>
          </section>

          <section className="dashboard-features-section">
            <div className="dashboard-features-header">
              <h3 className="dashboard-section-title">Powerful Features</h3>
              <p className="dashboard-features-subtitle">
                Everything you need to manage risk and compliance at enterprise
                scale
              </p>
            </div>
            <div className="dashboard-features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="dashboard-feature-card">
                  <div className="dashboard-feature-icon">{feature.icon}</div>
                  <h4 className="dashboard-feature-title">{feature.title}</h4>
                  <p className="dashboard-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-metrics-section">
            <h3 className="dashboard-section-title">Our Impact</h3>
            <div className="dashboard-metrics-grid">
              <div className="dashboard-metric-card">
                <div className="dashboard-metric-value">
                  {counters.companies}+
                </div>
                <div className="dashboard-metric-label">
                  Organizations Protected
                </div>
                <div className="dashboard-metric-bar">
                  <div
                    className="dashboard-metric-fill"
                    style={{
                      width: `${(counters.companies / 500) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="dashboard-metric-card">
                <div className="dashboard-metric-value">
                  {counters.risks.toLocaleString()}+
                </div>
                <div className="dashboard-metric-label">
                  Risks Identified & Mitigated
                </div>
                <div className="dashboard-metric-bar">
                  <div
                    className="dashboard-metric-fill"
                    style={{
                      width: `${(counters.risks / 50000) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="dashboard-metric-card">
                <div className="dashboard-metric-value">
                  {counters.compliance}%
                </div>
                <div className="dashboard-metric-label">
                  Average Compliance Improvement
                </div>
                <div className="dashboard-metric-bar">
                  <div
                    className="dashboard-metric-fill"
                    style={{ width: `${counters.compliance}%` }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="dashboard-video-section">
            <h3 className="dashboard-section-title">
              See SafeSphere in Action
            </h3>
            <div className="dashboard-video-container">
              <div className="dashboard-video-placeholder">
                <Play className="w-16 h-16 text-white" />
                <p>Compliance Management Demo</p>
              </div>
              <div className="dashboard-video-description">
                <h4>Watch how SafeSphere streamlines compliance management</h4>
                <ul className="dashboard-video-points">
                  <li>✓ Real-time risk dashboard</li>
                  <li>✓ Automated compliance checks</li>
                  <li>✓ Custom report generation</li>
                  <li>✓ Team collaboration features</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="dashboard-integrations-section">
            <h3 className="dashboard-section-title">Integrations You Love</h3>
            <p className="dashboard-section-subtitle">
              SafeSphere works seamlessly with 100+ enterprise tools
            </p>
            <div className="dashboard-integrations-grid">
              {integrations.map((integration, idx) => (
                <div key={idx} className="dashboard-integration-card">
                  <div className="dashboard-integration-logo">
                    {integration.logo}
                  </div>
                  <div className="dashboard-integration-name">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-testimonials-section">
            <h3 className="dashboard-section-title">What Our Customers Say</h3>
            <div className="dashboard-testimonials-grid">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="dashboard-testimonial-card">
                  <div className="dashboard-testimonial-stars">⭐⭐⭐⭐⭐</div>
                  <p className="dashboard-testimonial-quote">
                    "{testimonial.quote}"
                  </p>
                  <div className="dashboard-testimonial-author">
                    <div className="dashboard-testimonial-avatar">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="dashboard-testimonial-name">
                        {testimonial.name}
                      </div>
                      <div className="dashboard-testimonial-role">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-faq-section">
            <h3 className="dashboard-section-title">
              Frequently Asked Questions
            </h3>
            <div className="dashboard-faq-grid">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`dashboard-faq-item ${
                    expandedFaq === idx ? "expanded" : ""
                  }`}
                >
                  <button
                    className="dashboard-faq-question"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === idx ? null : idx)
                    }
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {expandedFaq === idx && (
                    <div className="dashboard-faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-final-cta">
            <h3 className="dashboard-cta-title">
              Ready to Transform Your Compliance?
            </h3>
            <p className="dashboard-cta-subtitle">
              Join 500+ organizations managing risk smarter with SafeSphere
            </p>
            <div className="dashboard-cta-buttons">
              <button
                onClick={() => history.push("/risk-assessment")}
                className="dashboard-cta-primary"
              >
                Get Started
              </button>
            </div>
          </section>

          <section className="dashboard-trust-section">
            <h4 className="dashboard-trust-title">Enterprise-Grade Trust</h4>
            <p className="dashboard-trust-subtitle">
              Trusted by the world's leading security teams
            </p>
            <div className="dashboard-trust-badges">
              <span className="dashboard-trust-badge">🔐 SOC 2 Type II</span>
              <span className="dashboard-trust-badge">📋 ISO 27001</span>
              <span className="dashboard-trust-badge">🌍 GDPR Ready</span>
              <span className="dashboard-trust-badge">🏥 HIPAA Compliant</span>
              <span className="dashboard-trust-badge">🏛️ NIST Aligned</span>
              <span className="dashboard-trust-badge">✅ CIS Frameworks</span>
            </div>
          </section>
        </main>

        <footer className="dashboard-footer">
          <div className="dashboard-footer-content">
            <div className="dashboard-footer-section">
              <h4>SafeSphere</h4>
              <p>Enterprise Risk & Compliance Management Platform</p>
            </div>
            <div className="dashboard-footer-section">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Risk Management</a>
                </li>
                <li>
                  <a href="#">Compliance</a>
                </li>
                <li>
                  <a href="#">Gap Assessment</a>
                </li>
              </ul>
            </div>
            <div className="dashboard-footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="dashboard-footer-section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dashboard-footer-bottom">
            © {new Date().getFullYear()} SafeSphere · All rights reserved · Made
            in India
          </div>
        </footer>
      </div>
    );
  }

  // guest (not logged in)
  return (
    <div className="dashboard-guest">
      <header className="dashboard-header">
        <div className="dashboard-header-content">
          <div className="dashboard-logo-section">
            <div className="dashboard-logo-icon">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="dashboard-logo-text">SAFESPHERE</h1>
              <p className="dashboard-logo-subtext">
                Enterprise Risk & Compliance Platform
              </p>
            </div>
          </div>

          {/* For guests, show dropdowns + login button */}
          <div className="dashboard-header-right">
            <HeaderDropdown
              label="Frameworks"
              options={[
                { label: "ISO 27001", route: "/iso-27001" },
                { label: "ISO 27701", route: "/iso-27701" },
              ]}
            />

            <HeaderDropdown
              label="Templates"
              options={[
                { label: "Policies", route: "/policies" },
                { label: "Procedures", route: "/procedures" },
              ]}
            />

            <button
              className="dashboard-login-btn"
              onClick={() => history.push("/login")}
            >
              <LogIn className="w-4 h-4" /> Login
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <Hero3DEarth isLoggedIn={false} user={null} />
        <CoreCards />
        <SplitEarthSection />
        <RotatingFeatures />
        <WhySafeSphere />
        <ExtraFeaturesLongScroll />

        <section className="dashboard-guest-modules">
          <h3 className="dashboard-section-title">Explore Key Modules</h3>
          <div className="dashboard-tiles-grid">
            {tiles.map(
              ({ label, description, icon, color, bgColor, iconColor }) => (
                <div
                  key={label}
                  className="dashboard-tile dashboard-tile-disabled"
                >
                  <div className={`dashboard-tile-icon-wrapper ${bgColor}`}>
                    <div className={`dashboard-tile-icon ${iconColor}`}>
                      {icon}
                    </div>
                  </div>
                  <h3 className="dashboard-tile-title">{label}</h3>
                  <p className="dashboard-tile-description">{description}</p>
                  <div
                    className={`dashboard-tile-accent bg-gradient-to-r ${color}`}
                  />
                </div>
              )
            )}
          </div>
        </section>

        <section className="dashboard-guest-features">
          <div className="dashboard-features-header">
            <h3 className="dashboard-section-title">Powerful Features</h3>
            <p className="dashboard-features-subtitle">
              Everything you need to manage risk and compliance at enterprise
              scale
            </p>
          </div>
          <div className="dashboard-features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="dashboard-feature-card">
                <div className="dashboard-feature-icon">{feature.icon}</div>
                <h4 className="dashboard-feature-title">{feature.title}</h4>
                <p className="dashboard-feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-metrics-section">
          <h3 className="dashboard-section-title">Our Impact</h3>
          <div className="dashboard-metrics-grid">
            <div className="dashboard-metric-card">
              <div className="dashboard-metric-value">
                {counters.companies}+
              </div>
              <div className="dashboard-metric-label">
                Organizations Protected
              </div>
              <div className="dashboard-metric-bar">
                <div
                  className="dashboard-metric-fill"
                  style={{
                    width: `${(counters.companies / 500) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="dashboard-metric-card">
              <div className="dashboard-metric-value">
                {counters.risks.toLocaleString()}+
              </div>
              <div className="dashboard-metric-label">
                Risks Identified & Mitigated
              </div>
              <div className="dashboard-metric-bar">
                <div
                  className="dashboard-metric-fill"
                  style={{
                    width: `${(counters.risks / 50000) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="dashboard-metric-card">
              <div className="dashboard-metric-value">
                {counters.compliance}%
              </div>
              <div className="dashboard-metric-label">
                Average Compliance Improvement
              </div>
              <div className="dashboard-metric-bar">
                <div
                  className="dashboard-metric-fill"
                  style={{ width: `${counters.compliance}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-video-section">
          <h3 className="dashboard-section-title">See SafeSphere in Action</h3>
          <div className="dashboard-video-container">
            <div className="dashboard-video-placeholder">
              <Play className="w-16 h-16 text-white" />
              <p>Compliance Management Demo</p>
            </div>
            <div className="dashboard-video-description">
              <h4>Watch how SafeSphere streamlines compliance management</h4>
              <ul className="dashboard-video-points">
                <li>✓ Real-time risk dashboard</li>
                <li>✓ Automated compliance checks</li>
                <li>✓ Custom report generation</li>
                <li>✓ Team collaboration features</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="dashboard-integrations-section">
          <h3 className="dashboard-section-title">Integrations You Love</h3>
          <p className="dashboard-section-subtitle">
            SafeSphere works seamlessly with 100+ enterprise tools
          </p>
          <div className="dashboard-integrations-grid">
            {integrations.map((integration, idx) => (
              <div key={idx} className="dashboard-integration-card">
                <div className="dashboard-integration-logo">
                  {integration.logo}
                </div>
                <div className="dashboard-integration-name">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-testimonials-section">
          <h3 className="dashboard-section-title">What Our Customers Say</h3>
          <div className="dashboard-testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="dashboard-testimonial-card">
                <div className="dashboard-testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="dashboard-testimonial-quote">
                  "{testimonial.quote}"
                </p>
                <div className="dashboard-testimonial-author">
                  <div className="dashboard-testimonial-avatar">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="dashboard-testimonial-name">
                      {testimonial.name}
                    </div>
                    <div className="dashboard-testimonial-role">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-faq-section">
          <h3 className="dashboard-section-title">
            Frequently Asked Questions
          </h3>
          <div className="dashboard-faq-grid">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`dashboard-faq-item ${
                  expandedFaq === idx ? "expanded" : ""
                }`}
              >
                <button
                  className="dashboard-faq-question"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                >
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                {expandedFaq === idx && (
                  <div className="dashboard-faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-trust-section">
          <h4 className="dashboard-trust-title">Enterprise-Grade Trust</h4>
          <p className="dashboard-trust-subtitle">
            Trusted by the world's leading security teams
          </p>
          <div className="dashboard-trust-badges">
            <span className="dashboard-trust-badge">🔐 SOC 2 Type II</span>
            <span className="dashboard-trust-badge">📋 ISO 27001</span>
            <span className="dashboard-trust-badge">🌍 GDPR Ready</span>
            <span className="dashboard-trust-badge">🏥 HIPAA Compliant</span>
            <span className="dashboard-trust-badge">🏛️ NIST Aligned</span>
            <span className="dashboard-trust-badge">✅ CIS Frameworks</span>
          </div>
        </section>

        <section className="dashboard-final-cta">
          <h3 className="dashboard-cta-title">
            Ready to Transform Your Compliance?
          </h3>
          <p className="dashboard-cta-subtitle">
            Join 500+ organizations managing risk smarter with SafeSphere
          </p>
          <button
            onClick={() => history.push("/login")}
            className="dashboard-cta-primary"
          >
            Get Started Today
          </button>
        </section>
      </main>

      <footer className="dashboard-footer">
        <div className="dashboard-footer-content">
          <div className="dashboard-footer-section">
            <h4>SafeSphere</h4>
            <p>Enterprise Risk & Compliance Management Platform</p>
          </div>
          <div className="dashboard-footer-section">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">Risk Management</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
              <li>
                <a href="#">Gap Assessment</a>
              </li>
            </ul>
          </div>
          <div className="dashboard-footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="dashboard-footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-footer-bottom">
          © {new Date().getFullYear()} SafeSphere · All rights reserved · Made
          in India
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
