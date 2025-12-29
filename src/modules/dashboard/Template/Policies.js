// // Policies.js - EXACT ISO_27001 Theme + Animations
// // D:\cf-tool-frontend-test-2\src\modules\dashboard\Policies.js
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { 
//   Download, ShieldCheck, Lock, Database, Shield, AlertCircle, Zap, Activity,
//   Network, Cloud, HardDrive, Users, Building2, BarChart3, CheckCircle, Briefcase,
//   Settings, FileText, Globe, Server
// } from 'lucide-react';
// import './Policies.css';

// const PoliciesPage = () => {
//   const history = useHistory();
//   const [mounted, setMounted] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [searchFocused, setSearchFocused] = useState(false);

//   // YOUR EXACT 28 policies
//   const policies = [
//     { id: 1, title: 'Information Security Policy', desc: 'Defines principles and rules on information security management while ensuring protection of sensitive data.', icon: ShieldCheck, category: 'core', color: 'from-blue-500 to-blue-600' },
//     { id: 2, title: 'Access Control Policy', desc: 'Ensures only authorized personnel have access and appropriate permissions to critical data and systems.', icon: Lock, category: 'access', color: 'from-emerald-500 to-emerald-600' },
//     { id: 3, title: 'Data Classification Policy', desc: 'Provides framework to categorize data based on sensitivity, importance, and criticality levels.', icon: Database, category: 'data', color: 'from-purple-500 to-purple-600' },
//     { id: 4, title: 'Data Protection Policy', desc: 'Safeguards customer sensitive data and privacy while staying compliant with data protection regulations.', icon: Shield, category: 'data', color: 'from-indigo-500 to-indigo-600' },
//     { id: 5, title: 'Incident Management Policy', desc: 'Framework to identify, respond, and resolve security incidents as fast as possible.', icon: AlertCircle, category: 'incident', color: 'from-orange-500 to-orange-600' },
//     { id: 6, title: 'Data Breach Notification Policy', desc: 'Framework to identify data breach, notify authorities, and report relevant information timely.', icon: AlertCircle, category: 'incident', color: 'from-red-500 to-red-600' },
//     { id: 7, title: 'Business Continuity Policy', desc: 'Minimizes downtime and restores business operations after security incidents or disruptions.', icon: Zap, category: 'continuity', color: 'from-amber-500 to-amber-600' },
//     { id: 8, title: 'Operations Security Policy', desc: 'Safeguards sensitive information during threats, vulnerabilities, change management, and disruptions.', icon: Activity, category: 'operations', color: 'from-sky-500 to-sky-600' },
//     { id: 9, title: 'Network Security Policy', desc: 'Guidelines on network protection, prevention of security incidents, and safeguarding sensitive information.', icon: Network, category: 'network', color: 'from-teal-500 to-teal-600' },
//     { id: 10, title: 'Cloud Security Policy', desc: 'Comprehensive guidelines for secure cloud operations, configurations, and data protection measures.', icon: Cloud, category: 'cloud', color: 'from-slate-500 to-slate-600' },
//     { id: 11, title: 'Endpoint Security Policy', desc: 'Secures critical endpoint systems and minimizes security concerns across all devices.', icon: HardDrive, category: 'endpoint', color: 'from-zinc-500 to-zinc-600' },
//     { id: 12, title: 'HR Security Policy', desc: 'Manages HR lifecycle ensuring only authorized personnel have access to information systems.', icon: Users, category: 'hr', color: 'from-pink-500 to-pink-600' },
//     { id: 13, title: 'Physical & Environmental Security', desc: 'Guidelines minimizing unauthorized access to physical spaces and production environments.', icon: Building2, category: 'physical', color: 'from-lime-500 to-lime-600' },
//     { id: 14, title: 'Risk Assessment Policy', desc: 'Actively identifies, assesses, mitigates, and remediates security risks continuously.', icon: BarChart3, category: 'risk', color: 'from-rose-500 to-rose-600' },
//     { id: 15, title: 'Compliance Policy', desc: 'Manages compliance with legal, regulatory standards and data protection requirements.', icon: CheckCircle, category: 'compliance', color: 'from-violet-500 to-violet-600' },
//     { id: 16, title: 'Vendor Management Policy', desc: 'Structured approach managing vendor relationships while mitigating third-party risks.', icon: Briefcase, category: 'vendor', color: 'from-fuchsia-500 to-fuchsia-600' },
//     { id: 17, title: 'Encryption Policy', desc: 'Framework ensuring encryption requirements are met for safeguarding all data types.', icon: Lock, category: 'crypto', color: 'from-cyan-500 to-cyan-600' },
//     { id: 18, title: 'Patch Management Policy', desc: 'Ensures systems, software, and applications stay updated with latest security patches.', icon: Settings, category: 'patch', color: 'from-yellow-500 to-yellow-600' },
//     { id: 19, title: 'Asset Management Policy', desc: 'Optimizes resources, ensures security compliance, and minimizes data theft risks.', icon: Database, category: 'asset', color: 'from-green-500 to-green-600' },
//     { id: 20, title: 'Data Retention Policy', desc: 'Guidelines for data storage, processing, management, and compliant disposal practices.', icon: FileText, category: 'retention', color: 'from-gray-500 to-gray-600' },
//     { id: 21, title: 'Media Disposal Policy', desc: 'Guidelines for disposal of physical/electronic media containing sensitive information.', icon: HardDrive, category: 'disposal', color: 'from-stone-500 to-stone-600' },
//     { id: 22, title: 'Acceptable Usage Policy', desc: 'Regulates appropriate use of digital assets and company information systems.', icon: Globe, category: 'usage', color: 'from-blue-400 to-blue-500' },
//     { id: 23, title: 'Code of Business Conduct', desc: 'Guides employees on behavior, communication norms, and positive work environment.', icon: ShieldCheck, category: 'conduct', color: 'from-emerald-400 to-emerald-500' },
//     { id: 24, title: 'Software Development Lifecycle', desc: 'Guides teams implementing secure development activities and procedures throughout SDLC.', icon: Settings, category: 'dev', color: 'from-purple-400 to-purple-500' },
//     { id: 25, title: 'System Acquisition Policy', desc: 'Integrates security considerations into all phases of system acquisition and development.', icon: Server, category: 'acquisition', color: 'from-indigo-400 to-indigo-500' },
//     { id: 26, title: 'ISMS Scope Document', desc: 'Defines boundaries and extent of ISMS for ISO 27001 certification audit preparation.', icon: Globe, category: 'isms', color: 'from-orange-400 to-orange-500' },
//     { id: 27, title: 'ISMS Manual Template', desc: 'Framework to design, implement, manage, and maintain effective ISMS implementation.', icon: FileText, category: 'isms', color: 'from-sky-400 to-sky-500' },
//     { id: 28, title: 'Security Roles & Responsibilities', desc: 'Ensures security accountability, risk management, and security-conscious culture.', icon: Users, category: 'roles', color: 'from-teal-400 to-teal-500' }
//   ];

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const categories = ['all', 'core', 'access', 'data', 'incident', 'operations', 'hr', 'risk', 'cloud', 'compliance'];

//   const filteredPolicies = policies.filter(policy => {
//     const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          policy.desc.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = activeCategory === 'all' || policy.category === activeCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleDownload = (policy) => {
//     console.log(`Downloading: ${policy.title}`);
//   };

//   const getColorGradient = (colorStr) => {
//     const colors = {
//       'from-blue-500 to-blue-600': '#3b82f6,#1d4ed8',
//       'from-emerald-500 to-emerald-600': '#10b981,#047857',
//       'from-purple-500 to-purple-600': '#8b5cf6,#7c3aed',
//       'from-indigo-500 to-indigo-600': '#6366f1,#4f46e5',
//       'from-orange-500 to-orange-600': '#f59e0b,#d97706',
//       'from-red-500 to-red-600': '#ef4444,#dc2626',
//       'from-amber-500 to-amber-600': '#f59e0b,#d97706',
//       'from-sky-500 to-sky-600': '#0ea5e9,#0284c7',
//       'from-teal-500 to-teal-600': '#14b8a6,#0d9488',
//       'from-slate-500 to-slate-600': '#64748b,#475569',
//       'from-zinc-500 to-zinc-600': '#71717a,#52525b',
//       'from-pink-500 to-pink-600': '#ec4899,#db2777',
//       'from-lime-500 to-lime-600': '#84cc16,#65a30d',
//       'from-rose-500 to-rose-600': '#f43f5e,#e11d48',
//       'from-violet-500 to-violet-600': '#a855f7,#9333ea',
//       'from-fuchsia-500 to-fuchsia-600': '#ec4899,#db2777',
//       'from-cyan-500 to-cyan-600': '#06b6d4,#0891b2',
//       'from-yellow-500 to-yellow-600': '#eab308,#ca8a04',
//       'from-green-500 to-green-600': '#22c55e,#16a34a',
//       'from-gray-500 to-gray-600': '#6b7280,#4b5563',
//       'from-stone-500 to-stone-600': '#78716c,#57534e',
//       'from-blue-400 to-blue-500': '#60a5fa,#3b82f6',
//       'from-emerald-400 to-emerald-500': '#34d399,#10b981',
//       'from-purple-400 to-purple-500': '#a78bfa,#8b5cf6',
//       'from-indigo-400 to-indigo-500': '#818cf8,#6366f1',
//       'from-orange-400 to-orange-500': '#fb923c,#f59e0b',
//       'from-sky-400 to-sky-500': '#38bdf8,#0ea5e9',
//       'from-teal-400 to-teal-500': '#2dd4bf,#14b8a6'
//     };
//     return colors[colorStr] || '#3b82f6,#1d4ed8';
//   };

//   return (
//     <div className={`iso-27001-page policies-page ${mounted ? 'mounted' : ''}`}>
//       {/* Hero - EXACT ISO_27001 Style */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <div className="hero-badge">ISO 27001 Ready</div>
//           <h1 className="hero-title">Policy Templates Library</h1>
//           <p className="hero-subtitle">
//             Download 28+ FREE, customizable, auditor-approved policy templates for SafeSphere ISMS implementation
//           </p>
//           <div className="hero-stats">
//             <div className="stat-item"><span>28+</span>Policies</div>
//             <div className="stat-item"><span>14</span>Categories</div>
//             <div className="stat-item"><span>93</span>Controls</div>
//           </div>
//         </div>
//       </section>

//       {/* Filters - ISO_27001 Style */}
//       <section className="filters-section">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search policies (Access Control, Incident, Cloud...)"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onFocus={() => setSearchFocused(true)}
//             onBlur={() => setSearchFocused(false)}
//             className={`search-input ${searchFocused ? 'focused' : ''}`}
//           />
//           {searchTerm && <button className="clear-search" onClick={() => setSearchTerm('')}>×</button>}
//         </div>
//         <div className="category-filters">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
//               onClick={() => setActiveCategory(cat)}
//             >
//               {cat === 'all' ? 'All Policies' : cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Policies Grid - EXACT ISO_27001 Cards */}
//       <section className="policies-grid">
//         <div className="results-count">{filteredPolicies.length} policies available</div>
//         <div className="grid-container">
//           {filteredPolicies.map((policy) => {
//             const [color1, color2] = getColorGradient(policy.color).split(',');
//             return (
//               <div
//                 key={policy.id}
//                 className={`policy-card ${hoveredCard === policy.id ? 'hovered' : ''}`}
//                  data-category={policy.category} 
//                 onMouseEnter={() => setHoveredCard(policy.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onClick={() => handleDownload(policy)}
//                 role="button"
//                 tabIndex={0}
//               >
//                 <div 
//                   className="policy-icon" 
//                   style={{background: `linear-gradient(135deg, ${color1}, ${color2})`}}
//                 >
//                   <policy.icon className="icon" size={40} />
//                 </div>
//                 <h3 className="policy-title">{policy.title}</h3>
//                 <p className="policy-desc">{policy.desc}</p>
//                 <div className="policy-footer">
//                   <span className={`category-badge ${policy.category}`}>{policy.category.toUpperCase()}</span>
//                   <Download className="download-icon" size={20} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* CTA - EXACT ISO_27001 Style */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready for ISO 27001 Certification?</h2>
//           <p>Implement these templates in SafeSphere for automated tracking and audit-ready evidence.</p>
//           <div className="cta-buttons">
//             <button className="cta-primary" onClick={() => history.push('/dashboard')}>
//               Start Policy Implementation
//             </button>
//             <button className="cta-secondary">Contact Sales</button>
//           </div>
//         </div>
//       </section>
//       <footer className="dashboard-footer">
//         <div className="dashboard-footer-content">
//           <div className="dashboard-footer-section">
//             <h4>SafeSphere</h4>
//             <p>Enterprise Risk & Compliance Management Platform</p>
//           </div>
//           <div className="dashboard-footer-section">
//             <h4>Product</h4>
//             <ul>
//               <li><a href="/risk-management">Risk Management</a></li>
//               <li><a href="/compliance">Compliance</a></li>
//               <li><a href="/gap-assessment">Gap Assessment</a></li>
//             </ul>
//           </div>
//           <div className="dashboard-footer-section">
//             <h4>Company</h4>
//             <ul>
//               <li><a href="/about">About</a></li>
//               <li><a href="/blog">Blog</a></li>
//               <li><a href="/careers">Careers</a></li>
//             </ul>
//           </div>
//           <div className="dashboard-footer-section">
//             <h4>Legal</h4>
//             <ul>
//               <li><a href="/privacy">Privacy</a></li>
//               <li><a href="/terms">Terms</a></li>
//               <li><a href="/security">Security</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="dashboard-footer-bottom">
//           © {new Date().getFullYear()} SafeSphere. All rights reserved. Made in India
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PoliciesPage;




// Policies.js - EXACT PROCEDURES NAVBAR + ORIGINAL FUNCTIONALITY
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  Download, ShieldCheck, Lock, Database, Shield, AlertCircle, Zap, Activity,
  Network, Cloud, HardDrive, Users, Building2, BarChart3, CheckCircle, Briefcase,
  Settings, FileText, Globe, Server, UserCircle2
} from 'lucide-react';
import './Policies.css';

const PoliciesPage = () => {
  const history = useHistory();
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchFocused, setSearchFocused] = useState(false);

  // SCROLL FUNCTION - EXACT PROCEDURES
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // NAVIGATION FUNCTION - EXACT PROCEDURES
  const goTo = (path) => {
    window.location.href = path;
  };

  // YOUR EXACT 28 policies
  const policies = [
    { id: 1, title: 'Information Security Policy', desc: 'Defines principles and rules on information security management while ensuring protection of sensitive data.', icon: ShieldCheck, category: 'core', color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'Access Control Policy', desc: 'Ensures only authorized personnel have access and appropriate permissions to critical data and systems.', icon: Lock, category: 'access', color: 'from-emerald-500 to-emerald-600' },
    { id: 3, title: 'Data Classification Policy', desc: 'Provides framework to categorize data based on sensitivity, importance, and criticality levels.', icon: Database, category: 'data', color: 'from-purple-500 to-purple-600' },
    { id: 4, title: 'Data Protection Policy', desc: 'Safeguards customer sensitive data and privacy while staying compliant with data protection regulations.', icon: Shield, category: 'data', color: 'from-indigo-500 to-indigo-600' },
    { id: 5, title: 'Incident Management Policy', desc: 'Framework to identify, respond, and resolve security incidents as fast as possible.', icon: AlertCircle, category: 'incident', color: 'from-orange-500 to-orange-600' },
    { id: 6, title: 'Data Breach Notification Policy', desc: 'Framework to identify data breach, notify authorities, and report relevant information timely.', icon: AlertCircle, category: 'incident', color: 'from-red-500 to-red-600' },
    { id: 7, title: 'Business Continuity Policy', desc: 'Minimizes downtime and restores business operations after security incidents or disruptions.', icon: Zap, category: 'continuity', color: 'from-amber-500 to-amber-600' },
    { id: 8, title: 'Operations Security Policy', desc: 'Safeguards sensitive information during threats, vulnerabilities, change management, and disruptions.', icon: Activity, category: 'operations', color: 'from-sky-500 to-sky-600' },
    { id: 9, title: 'Network Security Policy', desc: 'Guidelines on network protection, prevention of security incidents, and safeguarding sensitive information.', icon: Network, category: 'network', color: 'from-teal-500 to-teal-600' },
    { id: 10, title: 'Cloud Security Policy', desc: 'Comprehensive guidelines for secure cloud operations, configurations, and data protection measures.', icon: Cloud, category: 'cloud', color: 'from-slate-500 to-slate-600' },
    { id: 11, title: 'Endpoint Security Policy', desc: 'Secures critical endpoint systems and minimizes security concerns across all devices.', icon: HardDrive, category: 'endpoint', color: 'from-zinc-500 to-zinc-600' },
    { id: 12, title: 'HR Security Policy', desc: 'Manages HR lifecycle ensuring only authorized personnel have access to information systems.', icon: Users, category: 'hr', color: 'from-pink-500 to-pink-600' },
    { id: 13, title: 'Physical & Environmental Security', desc: 'Guidelines minimizing unauthorized access to physical spaces and production environments.', icon: Building2, category: 'physical', color: 'from-lime-500 to-lime-600' },
    { id: 14, title: 'Risk Assessment Policy', desc: 'Actively identifies, assesses, mitigates, and remediates security risks continuously.', icon: BarChart3, category: 'risk', color: 'from-rose-500 to-rose-600' },
    { id: 15, title: 'Compliance Policy', desc: 'Manages compliance with legal, regulatory standards and data protection requirements.', icon: CheckCircle, category: 'compliance', color: 'from-violet-500 to-violet-600' },
    { id: 16, title: 'Vendor Management Policy', desc: 'Structured approach managing vendor relationships while mitigating third-party risks.', icon: Briefcase, category: 'vendor', color: 'from-fuchsia-500 to-fuchsia-600' },
    { id: 17, title: 'Encryption Policy', desc: 'Framework ensuring encryption requirements are met for safeguarding all data types.', icon: Lock, category: 'crypto', color: 'from-cyan-500 to-cyan-600' },
    { id: 18, title: 'Patch Management Policy', desc: 'Ensures systems, software, and applications stay updated with latest security patches.', icon: Settings, category: 'patch', color: 'from-yellow-500 to-yellow-600' },
    { id: 19, title: 'Asset Management Policy', desc: 'Optimizes resources, ensures security compliance, and minimizes data theft risks.', icon: Database, category: 'asset', color: 'from-green-500 to-green-600' },
    { id: 20, title: 'Data Retention Policy', desc: 'Guidelines for data storage, processing, management, and compliant disposal practices.', icon: FileText, category: 'retention', color: 'from-gray-500 to-gray-600' },
    { id: 21, title: 'Media Disposal Policy', desc: 'Guidelines for disposal of physical/electronic media containing sensitive information.', icon: HardDrive, category: 'disposal', color: 'from-stone-500 to-stone-600' },
    { id: 22, title: 'Acceptable Usage Policy', desc: 'Regulates appropriate use of digital assets and company information systems.', icon: Globe, category: 'usage', color: 'from-blue-400 to-blue-500' },
    { id: 23, title: 'Code of Business Conduct', desc: 'Guides employees on behavior, communication norms, and positive work environment.', icon: ShieldCheck, category: 'conduct', color: 'from-emerald-400 to-emerald-500' },
    { id: 24, title: 'Software Development Lifecycle', desc: 'Guides teams implementing secure development activities and procedures throughout SDLC.', icon: Settings, category: 'dev', color: 'from-purple-400 to-purple-500' },
    { id: 25, title: 'System Acquisition Policy', desc: 'Integrates security considerations into all phases of system acquisition and development.', icon: Server, category: 'acquisition', color: 'from-indigo-400 to-indigo-500' },
    { id: 26, title: 'ISMS Scope Document', desc: 'Defines boundaries and extent of ISMS for ISO 27001 certification audit preparation.', icon: Globe, category: 'isms', color: 'from-orange-400 to-orange-500' },
    { id: 27, title: 'ISMS Manual Template', desc: 'Framework to design, implement, manage, and maintain effective ISMS implementation.', icon: FileText, category: 'isms', color: 'from-sky-400 to-sky-500' },
    { id: 28, title: 'Security Roles & Responsibilities', desc: 'Ensures security accountability, risk management, and security-conscious culture.', icon: Users, category: 'roles', color: 'from-teal-400 to-teal-500' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ['all', 'core', 'access', 'data', 'incident', 'operations', 'hr', 'risk', 'cloud', 'compliance'];

  const filteredPolicies = policies.filter(policy => {
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || policy.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (policy) => {
    console.log(`Downloading: ${policy.title}`);
  };

  const getColorGradient = (colorStr) => {
    const colors = {
      'from-blue-500 to-blue-600': '#3b82f6,#1d4ed8',
      'from-emerald-500 to-emerald-600': '#10b981,#047857',
      'from-purple-500 to-purple-600': '#8b5cf6,#7c3aed',
      'from-indigo-500 to-indigo-600': '#6366f1,#4f46e5',
      'from-orange-500 to-orange-600': '#f59e0b,#d97706',
      'from-red-500 to-red-600': '#ef4444,#dc2626',
      'from-amber-500 to-amber-600': '#f59e0b,#d97706',
      'from-sky-500 to-sky-600': '#0ea5e9,#0284c7',
      'from-teal-500 to-teal-600': '#14b8a6,#0d9488',
      'from-slate-500 to-slate-600': '#64748b,#475569',
      'from-zinc-500 to-zinc-600': '#71717a,#52525b',
      'from-pink-500 to-pink-600': '#ec4899,#db2777',
      'from-lime-500 to-lime-600': '#84cc16,#65a30d',
      'from-rose-500 to-rose-600': '#f43f5e,#e11d48',
      'from-violet-500 to-violet-600': '#a855f7,#9333ea',
      'from-fuchsia-500 to-fuchsia-600': '#ec4899,#db2777',
      'from-cyan-500 to-cyan-600': '#06b6d4,#0891b2',
      'from-yellow-500 to-yellow-600': '#eab308,#ca8a04',
      'from-green-500 to-green-600': '#22c55e,#16a34a',
      'from-gray-500 to-gray-600': '#6b7280,#4b5563',
      'from-stone-500 to-stone-600': '#78716c,#57534e',
      'from-blue-400 to-blue-500': '#60a5fa,#3b82f6',
      'from-emerald-400 to-emerald-500': '#34d399,#10b981',
      'from-purple-400 to-purple-500': '#a78bfa,#8b5cf6',
      'from-indigo-400 to-indigo-500': '#818cf8,#6366f1',
      'from-orange-400 to-orange-500': '#fb923c,#f59e0b',
      'from-sky-400 to-sky-500': '#38bdf8,#0ea5e9',
      'from-teal-400 to-teal-500': '#2dd4bf,#14b8a6'
    };
    return colors[colorStr] || '#3b82f6,#1d4ed8';
  };

  return (
    <div className={`iso-27001-page policies-page ${mounted ? 'mounted' : ''}`}>
      {/* HEADER & NAVBAR - EXACT PROCEDURES STYLE */}
      <header className="policies-header">
        <div className="policies-header-content">
          <div className="policies-logo-section">
            <div className="policies-logo-icon">
              <img 
                src="/favicon.png" 
                alt="SafeSphere Logo"
                style={{
                  width: '70%',
                  height: '70%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div>
              <p className="policies-logo-text">SafeSphere</p>
              <p className="policies-logo-subtext">Policy Templates</p>
            </div>
          </div>

          <nav className="policies-header-nav">
            <ul className="policies-nav-links">
              <a href="/" className="policies-nav-link policies-nav-link-btn">
                Home
              </a>
              <li>
                <button
                  type="button"
                  className="policies-nav-link policies-nav-link-btn"
                  onClick={() => handleScrollTo("policies-overview")}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="policies-nav-link policies-nav-link-btn"
                  onClick={() => handleScrollTo("policies-categories")}
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="policies-nav-link policies-nav-link-btn"
                  onClick={() => handleScrollTo("policies-grid")}
                >
                  Policies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="policies-nav-link policies-nav-link-btn"
                  onClick={() => handleScrollTo("cta-section")}
                >
                  Benefits
                </button>
              </li>
            </ul>

            {/* 🔥 AUTO-DETECT LOGIN STATUS - EXACT PROCEDURES LOGIC */}
            {(() => {
              const storedUser = JSON.parse(
                sessionStorage.getItem("user") || "null"
              );
              const isUserLoggedIn = !!storedUser;

              return isUserLoggedIn && storedUser ? (
                <div className="policies-user-card">
                  <UserCircle2 size={20} className="policies-user-icon" />
                  <div className="policies-user-info">
                    <span className="policies-user-name">
                      {storedUser.name || "User"}
                    </span>
                    <span className="policies-user-role">
                      {storedUser.department?.name || "Compliance Officer"}
                    </span>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="policies-btn policies-btn-secondary"
                  onClick={() => history.push("/login")}
                >
                  Login
                </button>
              );
            })()}
          </nav>
        </div>
      </header>

      {/* Hero - EXACT ISO_27001 Style */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">ISO 27001 Ready</div>
          <h1 className="hero-title">Policy Templates Library</h1>
          <p className="hero-subtitle">
            Download 28+ FREE, customizable, auditor-approved policy templates for SafeSphere ISMS implementation
          </p>
          <div className="hero-stats">
            <div className="stat-item"><span>28+</span>Policies</div>
            <div className="stat-item"><span>14</span>Categories</div>
            <div className="stat-item"><span>93</span>Controls</div>
          </div>
        </div>
      </section>

      {/* Filters - ISO_27001 Style */}
      <section className="filters-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search policies (Access Control, Incident, Cloud...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={`search-input ${searchFocused ? 'focused' : ''}`}
          />
          {searchTerm && <button className="clear-search" onClick={() => setSearchTerm('')}>×</button>}
        </div>
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'All Policies' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Policies Grid - EXACT ISO_27001 Cards */}
      <section id="policies-grid" className="policies-grid">
        <div className="results-count">{filteredPolicies.length} policies available</div>
        <div className="grid-container">
          {filteredPolicies.map((policy) => {
            const [color1, color2] = getColorGradient(policy.color).split(',');
            return (
              <div
                key={policy.id}
                className={`policy-card ${hoveredCard === policy.id ? 'hovered' : ''}`}
                 data-category={policy.category} 
                onMouseEnter={() => setHoveredCard(policy.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleDownload(policy)}
                role="button"
                tabIndex={0}
              >
                <div 
                  className="policy-icon" 
                  style={{background: `linear-gradient(135deg, ${color1}, ${color2})`}}
                >
                  <policy.icon className="icon" size={40} />
                </div>
                <h3 className="policy-title">{policy.title}</h3>
                <p className="policy-desc">{policy.desc}</p>
                <div className="policy-footer">
                  <span className={`category-badge ${policy.category}`}>{policy.category.toUpperCase()}</span>
                  <Download className="download-icon" size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA - EXACT ISO_27001 Style */}
      <section id="cta-section" className="cta-section">
        <div className="cta-content">
          <h2>Ready for ISO 27001 Certification?</h2>
          <p>Implement these templates in SafeSphere for automated tracking and audit-ready evidence.</p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={() => history.push('/dashboard')}>
              Start Policy Implementation
            </button>
            <button className="cta-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        <div className="dashboard-footer-content">
          <div className="dashboard-footer-section">
            <h4>SafeSphere</h4>
            <p>Enterprise Risk & Compliance Management Platform</p>
          </div>
          <div className="dashboard-footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="/risk-management">Risk Management</a></li>
              <li><a href="/compliance">Compliance</a></li>
              <li><a href="/gap-assessment">Gap Assessment</a></li>
            </ul>
          </div>
          <div className="dashboard-footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div className="dashboard-footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/security">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="dashboard-footer-bottom">
          © {new Date().getFullYear()} SafeSphere. All rights reserved. Made in India
        </div>
      </footer>
    </div>
  );
};

export default PoliciesPage;
