import React from 'react';
import { Sparkles, Mail, ArrowRight, Zap } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onToggleAi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onToggleAi }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Projects & Work' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          id="nav-logo-btn"
          className="flex items-center gap-3.5 group text-left focus:outline-none cursor-pointer"
          onClick={() => onTabChange('home')}
        >
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-purple-500 p-[1.5px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center font-heading font-bold text-lg text-white">
              AD
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0b1120]"></span>
            </span>
          </div>
          <div>
            <div className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
              Abhishek Dubey
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <span className="text-sky-400">●</span> Software &amp; Web Developer
            </div>
          </div>
        </button>

        {/* Page / Tab Navigation (Desktop) */}
        <nav className="hidden md:flex items-center p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm font-medium">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'text-white bg-sky-600/90 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* AI Assistant Toggle Button */}
          <button
            id="toggle-ai-header-btn"
            className="relative group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-600/20 via-purple-600/20 to-sky-500/20 hover:from-sky-600/30 hover:to-purple-600/30 border border-sky-500/30 hover:border-sky-400 text-sky-300 font-medium text-xs transition-all shadow-lg shadow-sky-500/10 cursor-pointer"
            onClick={onToggleAi}
          >
            <Zap className="w-4 h-4 text-sky-400 animate-pulse" />
            <span className="font-semibold">AI Assistant</span>
            <span className="bg-sky-400 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Live
            </span>
          </button>

          {/* Quick Contact Button */}
          <a
            id="lets-talk-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
            href="mailto:dubeyabhi9794@gmail.com"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Mobile Sub-navigation Bar */}
      <div className="md:hidden flex items-center justify-around px-2 py-2 border-t border-slate-800/60 bg-[#0b1120]/90 text-xs font-medium overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`mob-nav-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                isActive ? 'text-sky-400 font-semibold' : 'text-slate-400'
              }`}
            >
              {tab.label.split(' ')[0]}
            </button>
          );
        })}
      </div>
    </header>
  );
};
