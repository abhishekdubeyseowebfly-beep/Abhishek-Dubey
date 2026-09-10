import React from 'react';
import { Eye, FileText, Code2, ArrowRight } from 'lucide-react';
import { ProjectData } from '../types';

interface FeaturedSpotlightsProps {
  projects: ProjectData[];
  onOpenProjectModal: (projectId: string) => void;
  onNavigateToProjects: () => void;
}

export const FeaturedSpotlights: React.FC<FeaturedSpotlightsProps> = ({
  projects,
  onOpenProjectModal,
  onNavigateToProjects,
}) => {
  const spotlights = projects.slice(0, 3);

  return (
    <div className="space-y-6 pt-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>Interactive Portfolio Gallery</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Featured Project Spotlights
          </h2>
          <p className="text-sm text-slate-400">
            Click any card to inspect system architecture, code blueprints &amp; technical specs.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            id="open-filterable-hub-btn"
            onClick={onNavigateToProjects}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-all cursor-pointer"
          >
            <span>Open Filterable Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3 Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Spotlight 1: Swasthik */}
        <div
          id="spotlight-swasthik"
          className="glass-card rounded-2xl p-6 cursor-pointer space-y-4 group border border-slate-800 hover:border-sky-400/50"
          onClick={() => onOpenProjectModal('swasthik')}
        >
          <div className="flex items-center justify-between text-xs">
            <span className="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 font-mono font-semibold">
              01 · Grade 'A' Project
            </span>
            <span className="text-slate-500 font-mono">BCA Capstone</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white group-hover:text-sky-400 transition-colors">
            Swasthik Hospital System
          </h3>
          <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
            Full-fledged records, patient and doctor scheduling system reducing manual overhead with MySQL database backend and clean modular architecture.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[10px]">
              MySQL
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
              Database
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 font-mono text-[10px]">
              Relational Schema
            </span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-sky-400 font-medium group-hover:text-sky-300">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              Inspect Architecture
            </span>
            <span className="font-mono text-xs">↗</span>
          </div>
        </div>

        {/* Spotlight 2: NIDS */}
        <div
          id="spotlight-nids"
          className="glass-card rounded-2xl p-6 cursor-pointer space-y-4 group border border-slate-800 hover:border-purple-400/50"
          onClick={() => onOpenProjectModal('nids')}
        >
          <div className="flex items-center justify-between text-xs">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 font-mono font-semibold">
              02 · Research &amp; ML
            </span>
            <span className="text-slate-500 font-mono">Python &amp; Flask</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white group-hover:text-purple-400 transition-colors">
            Network Intrusion Detection
          </h3>
          <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
            Built under faculty supervision with an IEEE Std 830–1998 compliant 12–page SRS, traceability matrix, and automated threat detection mechanisms.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-mono text-[10px]">
              Python
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
              Flask REST
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-mono text-[10px]">
              IEEE 830
            </span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-purple-400 font-medium group-hover:text-purple-300">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              View Technical Specs
            </span>
            <span className="font-mono text-xs">↗</span>
          </div>
        </div>

        {/* Spotlight 3: Banking */}
        <div
          id="spotlight-banking"
          className="glass-card rounded-2xl p-6 cursor-pointer space-y-4 group border border-slate-800 hover:border-emerald-400/50"
          onClick={() => onOpenProjectModal('banking')}
        >
          <div className="flex items-center justify-between text-xs">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-semibold">
              03 · OOP Engine
            </span>
            <span className="text-slate-500 font-mono">Java Core</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white group-hover:text-emerald-400 transition-colors">
            Banking Core Engine
          </h3>
          <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
            Robust transaction processing system leveraging inheritance, polymorphism, and secure file storage with input error recovery routines.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 font-mono text-[10px]">
              Java OOP
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
              File I/O
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-mono text-[10px]">
              Exception Recovery
            </span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-emerald-400 font-medium group-hover:text-emerald-300">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              Read Code Details
            </span>
            <span className="font-mono text-xs">↗</span>
          </div>
        </div>
      </div>

      {/* Teaser Prompt to Jump to Filtered Gallery */}
      <div className="p-4 rounded-2xl glass-panel border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-xs">
            5+
          </div>
          <div className="text-xs text-slate-300">
            Looking for specific technologies? Filter between{' '}
            <strong className="text-sky-400 font-mono">Java &amp; OOP</strong>,{' '}
            <strong className="text-purple-400 font-mono">Python &amp; ML</strong>,{' '}
            <strong className="text-amber-400 font-mono">Web &amp; Frontend</strong>, and{' '}
            <strong className="text-emerald-400 font-mono">Database &amp; Systems</strong>.
          </div>
        </div>
        <button
          id="teaser-filter-all-btn"
          onClick={onNavigateToProjects}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold whitespace-nowrap transition-all shadow-md shadow-sky-600/20 cursor-pointer"
        >
          Filter All Projects →
        </button>
      </div>
    </div>
  );
};
