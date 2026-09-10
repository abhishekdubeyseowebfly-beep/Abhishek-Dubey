import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { TabType } from '../types';

interface AboutSectionProps {
  onNavigate: (tab: TabType) => void;
  onAskAi: (prompt?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onAskAi }) => {
  return (
    <section className="space-y-12">
      {/* Breadcrumb / Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-sky-400 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-sky-400">About Abhishek</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Building software with <span className="gradient-text">engineering discipline</span> &amp; curiosity.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am currently pursuing my <strong>Master of Computer Applications (MCA)</strong> at{' '}
              <em>IMS Engineering College, Ghaziabad</em> (AKTU), building upon my{' '}
              <strong>Bachelor of Computer Applications (BCA)</strong> from{' '}
              <em>Devi Ahilya Vishwavidyalaya, Indore</em>.
            </p>
            <p>
              My coding philosophy is grounded in strong fundamentals: understanding algorithm complexity, designing clean object-oriented hierarchies, and crafting intuitive, responsive web interfaces that don't crumble under real load.
            </p>
            <p>
              Whether it's building clinical management workflows in SQL or architecting network anomaly detectors adhering to IEEE standards, I thrive on taking projects from abstract problem statements to tested, documented software.
            </p>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="glass-card p-5 rounded-xl space-y-2 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-heading font-bold text-base text-white">Continuous DSA Practice</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regularly grinding problem solving on arrays, trees, graphs, and dynamic programming patterns.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl space-y-2 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-heading font-bold text-base text-white">Documentation Rigor</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Committed to explicit SRS docs, clean comments, schema mapping, and maintainable Git commits.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Details & Dossier */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-700/80 space-y-5">
            <h3 className="font-heading font-bold text-lg text-white border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>Quick Dossier</span>
              <span className="text-xs text-sky-400 font-mono font-normal">Candidate Profile</span>
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Full Name</span>
                <span className="font-medium text-white">{PROFILE_INFO.name}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Degree</span>
                <span className="font-medium text-white">{PROFILE_INFO.degree}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Institution</span>
                <span className="font-medium text-white">{PROFILE_INFO.college}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Undergrad Degree</span>
                <span className="font-medium text-white">{PROFILE_INFO.undergrad}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Location</span>
                <span className="font-medium text-white">{PROFILE_INFO.location}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Email</span>
                <a
                  className="font-medium text-sky-400 hover:underline"
                  href={`mailto:${PROFILE_INFO.email}`}
                >
                  {PROFILE_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                id="about-next-portfolio-btn"
                onClick={() => onNavigate('work')}
                className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Next: View Project Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="about-ask-ai-btn"
                onClick={() =>
                  onAskAi("Tell me about Abhishek's educational background and his journey into software development.")
                }
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                <span>Ask AI About His Career Journey</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
