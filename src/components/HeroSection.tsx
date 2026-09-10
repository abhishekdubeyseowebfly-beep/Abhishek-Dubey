import React from 'react';
import { ArrowRight, ChevronDown, MessageSquare, Terminal } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { TabType } from '../types';

interface HeroSectionProps {
  onNavigate: (tab: TabType) => void;
  onAskAi: (prompt?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onAskAi }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* Left Column: Introductions & CTAs */}
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-xs text-sky-300 font-mono">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Software &amp; Web Internships
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Hi, I'm <span className="gradient-text">Abhishek Dubey</span>
          <br />
          <span className="text-3xl sm:text-5xl text-slate-300 font-medium">
            I engineer reliable code &amp; modern web products.
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
          MCA Candidate at <strong className="text-slate-200 font-semibold">IMS Engineering College</strong>, with strong competencies in <span className="text-sky-400 font-medium">Java, Python, Data Structures &amp; Algorithms</span>, and responsive frontend systems. I bridge thoughtful UI design with rock-solid server-side logic.
        </p>

        {/* Action and CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            id="hero-explore-projects-btn"
            onClick={() => onNavigate('work')}
            className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/25 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore My Projects (05)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-read-bio-btn"
            onClick={() => onNavigate('about')}
            className="px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all border border-slate-700 cursor-pointer"
          >
            <span>Read Bio &amp; Story</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>

          <button
            id="hero-ask-ai-btn"
            onClick={() => onAskAi('Tell me why I should hire Abhishek and summarize his strengths.')}
            className="px-5 py-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 border border-purple-500/40 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span>Ask AI About Me</span>
          </button>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
          <div>
            <div className="font-heading font-bold text-2xl text-white">05</div>
            <div className="text-xs text-slate-400 mt-0.5">Engineered Projects</div>
          </div>
          <div>
            <div className="font-heading font-bold text-2xl text-sky-400">04+</div>
            <div className="text-xs text-slate-400 mt-0.5">Core Languages</div>
          </div>
          <div>
            <div className="font-heading font-bold text-2xl text-purple-400">MCA</div>
            <div className="text-xs text-slate-400 mt-0.5">2025–2027 Cohort</div>
          </div>
        </div>
      </div>

      {/* Right Column: Profile Card & Terminal */}
      <div className="lg:col-span-5 space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative rounded-2xl glass-panel p-6 overflow-hidden border border-slate-700/70 space-y-6">
            {/* Avatar & Quick Info */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-sky-400/40 shadow-inner bg-[#060913] flex-shrink-0">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt={PROFILE_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-105"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-lg text-white">{PROFILE_INFO.name}</span>
                  <span className="bg-sky-500/20 text-sky-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-sky-400/30">
                    Verified
                  </span>
                </div>
                <div className="text-xs text-slate-400">{PROFILE_INFO.location}</div>
                <div className="text-xs text-sky-400 font-mono">BCA (Indore) ➜ MCA (IMSEC)</div>
              </div>
            </div>

            {/* Mini Interactive Terminal */}
            <div className="rounded-xl bg-[#060913] p-4 font-mono text-xs border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[11px] flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-slate-400" />
                  bash — engineer.sh
                </span>
              </div>
              <div className="text-slate-400">
                <span className="text-emerald-400">abhishek@workstation</span>:<span className="text-sky-400">~</span>$ cat focus.json
              </div>
              <div className="text-slate-300 pl-2 leading-relaxed">
                {'{'}<br />
                &nbsp;&nbsp;<span className="text-sky-300">"status"</span>: <span className="text-emerald-300">"Seeking Tech Opportunities"</span>,<br />
                &nbsp;&nbsp;<span className="text-sky-300">"top_stack"</span>: [<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"DSA"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"React"</span>],<br />
                &nbsp;&nbsp;<span className="text-sky-300">"ai_assistant"</span>: <span className="text-purple-400">"Online"</span><br />
                {'}'}
              </div>
            </div>

            {/* Quick Page Links on Card */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                id="card-view-projects-btn"
                onClick={() => onNavigate('work')}
                className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 text-left flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>View Projects</span>
                <span className="text-sky-400 font-mono">→</span>
              </button>
              <button
                id="card-check-skills-btn"
                onClick={() => onNavigate('skills')}
                className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 text-left flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Check Skills</span>
                <span className="text-purple-400 font-mono">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
