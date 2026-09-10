import React from 'react';
import { Code2, Globe, Database, Cpu, ArrowRight, ArrowLeft } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { TabType } from '../types';

interface SkillsSectionProps {
  onNavigate: (tab: TabType) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigate }) => {
  const getGroupIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 1:
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 3:
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-sky-400 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-sky-400">Technical Competencies</span>
      </div>

      <div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Tools, Languages &amp; <span className="gradient-text">Skill Matrix</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Categorized technical skills backed by coursework, practical implementations, and ongoing competitive coding.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS_DATA.map((group, idx) => (
          <div
            key={group.title}
            className={`glass-card rounded-2xl p-6 space-y-5 border-t-2 ${group.borderColor}`}
          >
            <div className="flex items-center gap-2.5">
              {getGroupIcon(idx)}
              <h3 className="font-heading font-bold text-lg text-white">{group.title}</h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center hover:border-slate-700 transition-colors"
                >
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className={skill.levelColor}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills badge cluster */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-bold text-base text-white">
            Professional &amp; Soft Competencies
          </h4>
          <p className="text-xs text-slate-400">
            Collaboration habits developed in group projects and technical documentation defense.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
            Teamwork
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
            Technical Writing
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
            Problem Solving
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
            Adaptability
          </span>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-800">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </button>
        <button
          onClick={() => onNavigate('education')}
          className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Next: Academic History</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
