import React, { useState } from 'react';
import {
  Filter,
  Eye,
  FileText,
  Code2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Search,
  Database,
  ShieldAlert,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { ProjectData, TechCategory, TabType } from '../types';

interface ProjectsSectionProps {
  projects: ProjectData[];
  selectedCategory: TechCategory;
  onCategoryChange: (cat: TechCategory) => void;
  onOpenProjectModal: (id: string) => void;
  onNavigate: (tab: TabType) => void;
  onAskAi: (prompt?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  selectedCategory,
  onCategoryChange,
  onOpenProjectModal,
  onNavigate,
  onAskAi,
}) => {
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.filterCategories.includes(selectedCategory);
  });

  const filterOptions: { id: TechCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'java',
      label: 'Java & OOP',
      count: projects.filter((p) => p.filterCategories.includes('java')).length,
    },
    {
      id: 'python',
      label: 'Python & ML',
      count: projects.filter((p) => p.filterCategories.includes('python')).length,
    },
    {
      id: 'frontend',
      label: 'Web & Frontend',
      count: projects.filter((p) => p.filterCategories.includes('frontend')).length,
    },
    {
      id: 'database',
      label: 'Database & Systems',
      count: projects.filter((p) => p.filterCategories.includes('database')).length,
    },
  ];

  return (
    <section className="space-y-8">
      {/* Breadcrumb & Live Stats Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-sky-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-sky-400">Projects &amp; Case Studies</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span id="project-counter-badge">
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engineering <span className="gradient-text">Project Gallery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">
            Filter through 5 core software projects by tech stack. Each card contains verified architectural decisions, relational schemas, algorithmic models, and deep-dive technical drawers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="ask-ai-summary-btn"
            onClick={() => onAskAi('Summarize all 5 projects created by Abhishek Dubey.')}
            className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-sky-400 text-xs font-mono border border-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Ask AI Project Summary</span>
          </button>
        </div>
      </div>

      {/* Technology Filter Pill Controls */}
      <div className="glass-panel p-3 rounded-2xl border border-slate-800/90 shadow-xl space-y-3">
        <div className="flex items-center justify-between px-2 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-2 text-slate-400">
            <Filter className="w-3.5 h-3.5 text-sky-400" />
            <span>Filter By Specialization:</span>
          </span>
          <span className="text-slate-500 text-[11px] hidden sm:inline">
            Click filter tag to reorder or isolate
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-2.5" id="filter-pill-container">
          {filterOptions.map((opt) => {
            const isActive = selectedCategory === opt.id;
            return (
              <button
                key={opt.id}
                id={`filter-pill-${opt.id}`}
                onClick={() => onCategoryChange(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'filter-btn-active border border-sky-500/50'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {String(opt.count).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects List Container */}
      <div className="space-y-8" id="projects-list-container">
        {/* Project 1: Swasthik Hospital System */}
        {filteredProjects.some((p) => p.id === 'swasthik') && (
          <div
            id="project-card-swasthik"
            className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border-l-4 border-l-sky-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="text-sky-400 font-mono font-bold text-sm px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                  Project 01
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  Grade 'A' Awarded
                </span>
                <span className="text-slate-400 text-xs font-mono">BCA Capstone Defense</span>
              </div>
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-sky-300 text-xs font-mono">
                  Web / MySQL
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono">
                  Database Systems
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-purple-300 text-xs font-mono">
                  CRUD Architecture
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white hover:text-sky-400 transition-colors">
                    Swasthik — Hospital Management System
                  </h3>
                  <p className="text-xs text-sky-400/90 font-mono mt-1">
                    Full Relational Clinical Workflow &amp; Scheduling Engine
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  A centralized healthcare administration platform engineered to automate patient intake, outpatient appointments, doctor duty rosters, inpatient bed management, and cashier billing ledgers. Designed specifically to eliminate paper ledger redundancy with 100% relational integrity.
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="font-semibold text-sky-300 uppercase tracking-wider font-mono">
                    Key Architectural Deliverables:
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                    <li>Engineered normalized relational schemas in MySQL covering Patient, Doctor, Appointment, and Billing tables with cascade constraints.</li>
                    <li>Implemented real-time collision detection logic that prevents duplicate doctor slot reservations during peak hours.</li>
                    <li>Defended in final external university viva before the board, obtaining maximum recognition ('A' Grade).</li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    id="swasthik-inspect-btn"
                    onClick={() => onOpenProjectModal('swasthik')}
                    className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Architecture &amp; Schemas</span>
                  </button>

                  <button
                    id="swasthik-ask-ai-btn"
                    onClick={() =>
                      onAskAi(
                        'Explain the technical architecture and database design of Swasthik Hospital Management System created by Abhishek.'
                      )
                    }
                    className="px-3.5 py-2.5 rounded-xl glass-panel hover:bg-slate-800 text-sky-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
                    <span>Ask AI Architecture</span>
                  </button>
                </div>
              </div>

              {/* Visual Schema Preview Box */}
              <div
                id="swasthik-schema-preview"
                onClick={() => onOpenProjectModal('swasthik')}
                className="lg:col-span-4 rounded-2xl bg-[#060913] p-5 border border-slate-800 font-mono text-xs space-y-3 cursor-pointer hover:border-sky-500/40 transition-colors"
              >
                <div className="text-slate-500 border-b border-slate-800 pb-2 flex justify-between items-center">
                  <span className="text-sky-400 font-bold">SQL Schema Model</span>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    InnoDB ACID
                  </span>
                </div>
                <div className="space-y-2 text-slate-400 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                    <span className="text-sky-300 font-bold">PATIENTS</span> (id PK, name, blood_grp, admission_dt)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                    <span className="text-purple-300 font-bold">APPOINTMENTS</span> (apt_id PK, doc_fk, slot_time)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                    <span className="text-emerald-300 font-bold">BILLING</span> (invoice_no PK, apt_fk, amount, status)
                  </div>
                </div>
                <div className="text-[10px] text-sky-400 text-center font-mono pt-1">
                  Click to view full architecture diagram →
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 2: NIDS */}
        {filteredProjects.some((p) => p.id === 'nids') && (
          <div
            id="project-card-nids"
            className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border-l-4 border-l-purple-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="text-purple-400 font-mono font-bold text-sm px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                  Project 02
                </span>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                  IEEE Std 830-1998 Spec
                </span>
                <span className="text-slate-400 text-xs font-mono">Faculty Mentored Research</span>
              </div>
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-purple-300 text-xs font-mono">
                  Python / Flask
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-sky-300 text-xs font-mono">
                  Security ML
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono">
                  REST Endpoints
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white hover:text-purple-400 transition-colors">
                  Network Intrusion Detection System (NIDS)
                </h3>
                <p className="text-xs text-purple-400/90 font-mono mt-1">
                  Anomaly &amp; Signature Based Threat Classification Pipeline
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Co-developed a high-efficiency network packet threat classification pipeline in Python and Flask. The software captures TCP/UDP packet logs, inspects anomalous payload parameters against signature models, and automatically flags potential DDoS, Port Scans, and Brute-Force intrusions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-[#060913]/70 border border-slate-800 space-y-2">
                  <span className="text-purple-300 font-bold font-mono flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-purple-400" />
                    Formal Documentation &amp; SRS:
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Authored a 12-page comprehensive synopsis and IEEE Std 830-1998 compliant SRS containing explicit use-case diagrams, requirements traceability matrix, and mitigation playbooks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#060913]/70 border border-slate-800 space-y-2">
                  <span className="text-sky-300 font-bold font-mono flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    Flask REST API Engine:
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Exposed lightweight microservice APIs to receive packet logs asynchronously, calculate threat probabilities, and return structured JSON telemetry for monitoring consoles.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="nids-inspect-btn"
                  onClick={() => onOpenProjectModal('nids')}
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/20 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View IEEE SRS &amp; Architecture</span>
                </button>

                <button
                  id="nids-ask-ai-btn"
                  onClick={() =>
                    onAskAi(
                      "Tell me about Abhishek's Network Intrusion Detection System and IEEE documentation."
                    )
                  }
                  className="px-3.5 py-2.5 rounded-xl glass-panel hover:bg-slate-800 text-purple-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>Ask AI About Threat Engine</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Project 3: Banking Core Engine */}
        {filteredProjects.some((p) => p.id === 'banking') && (
          <div
            id="project-card-banking"
            className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border-l-4 border-l-emerald-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="text-emerald-400 font-mono font-bold text-sm px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Project 03
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  Strict OOP Architecture
                </span>
                <span className="text-slate-400 text-xs font-mono">Academic Java System</span>
              </div>
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-emerald-300 text-xs font-mono">
                  Java Core
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300 text-xs font-mono">
                  File I/O Persistence
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono">
                  Exception Recovery
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white hover:text-emerald-400 transition-colors">
                  Banking Core Engine &amp; Transaction Simulator
                </h3>
                <p className="text-xs text-emerald-400/90 font-mono mt-1">
                  Object-Oriented Encapsulation, Polymorphism &amp; Ledger File Streams
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                A robust terminal transaction simulator exercising pure Java OOP tenets: strict state encapsulation, class hierarchy abstraction across Savings and Current Account modules, atomic money transfer routines, and persistent ledger storage using Java File I/O.
              </p>

              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400">
                <li>Engineered custom checked and unchecked exception handlers (`InsufficientFundsException`, `CorruptedLedgerException`) ensuring fail-safe transaction rollbacks.</li>
                <li>Maintained customer credential hashing and session timeout routines inside pure standard Java runtime without heavy dependencies.</li>
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="banking-inspect-btn"
                  onClick={() => onOpenProjectModal('banking')}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Inspect OOP Hierarchy &amp; I/O Flow</span>
                </button>

                <button
                  id="banking-ask-ai-btn"
                  onClick={() =>
                    onAskAi(
                      'How does Abhishek handle object oriented design and error recovery in his Java Banking project?'
                    )
                  }
                  className="px-3.5 py-2.5 rounded-xl glass-panel hover:bg-slate-800 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ask AI OOP Logic</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Project 4 & 5 Grid (when matched) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.some((p) => p.id === 'netflix') && (
            <div
              id="project-card-netflix"
              className="glass-card rounded-3xl p-6 space-y-4 border-l-4 border-l-amber-500"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-mono font-bold">Project 04</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px]">
                    Frontend Fidelity
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                  HTML5 / CSS3 / ES6
                </span>
              </div>

              <h4 className="font-heading font-bold text-xl text-white hover:text-amber-400 transition-colors">
                Responsive Netflix Landing UI
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Pixel-accurate front-end replication of Netflix’s streaming discovery interface. Engineered with pure CSS Grid media shelves, fluid typography clamps, responsive foldout FAQs, and cross-browser responsiveness tested down to 320px screens.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-mono text-[10px]">
                  CSS Grid Shelves
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px]">
                  Accordion JS
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px]">
                  Mobile-First
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <button
                  id="netflix-inspect-btn"
                  onClick={() => onOpenProjectModal('netflix')}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Layout Specs &amp; Code</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {filteredProjects.some((p) => p.id === 'sales') && (
            <div
              id="project-card-sales"
              className="glass-card rounded-3xl p-6 space-y-4 border-l-4 border-l-sky-400"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-sky-300 font-mono font-bold">Project 05</span>
                  <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono text-[11px]">
                    Data Analytics
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                  Python / Pandas
                </span>
              </div>

              <h4 className="font-heading font-bold text-xl text-white hover:text-sky-300 transition-colors">
                E-Commerce Sales Data Analytics
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Cleaned, normalized, and modeled 10,000+ transactional e-commerce records using Python, Pandas, and exploratory data techniques. Generated 3 executive intelligence reports identifying monthly seasonal peaks and cohort return margins.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-sky-300 font-mono text-[10px]">
                  Pandas Wrangling
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-[10px]">
                  EDA Reporting
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px]">
                  10K+ Records
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <button
                  id="sales-inspect-btn"
                  onClick={() => onOpenProjectModal('sales')}
                  className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inspect Analysis &amp; Visuals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div
            id="projects-empty-state"
            className="p-12 text-center glass-panel rounded-3xl border border-slate-800 space-y-4"
          >
            <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white">
              No projects found for this criteria
            </h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try clicking on another technology filter like Java &amp; OOP or reset to All Projects.
            </p>
            <button
              id="reset-filter-btn"
              onClick={() => onCategoryChange('all')}
              className="px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-800">
        <button
          id="work-back-btn"
          onClick={() => onNavigate('about')}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to About</span>
        </button>
        <button
          id="work-next-skills-btn"
          onClick={() => onNavigate('skills')}
          className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Next: Explore Technical Skills</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
