import React from 'react';
import { TabType } from '../types';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060913]/80 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-heading font-bold text-sm">
            AD
          </div>
          <div className="text-xs text-slate-400">
            © 2026 Abhishek Dubey. Built for modern software engineering teams.
          </div>
        </div>

        {/* Footer navigation */}
        <div className="flex items-center flex-wrap justify-center gap-5 text-xs text-slate-400 font-mono">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-sky-400 transition-colors cursor-pointer"
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-sky-400 transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="hover:text-sky-400 transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('skills')}
            className="hover:text-sky-400 transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => onNavigate('education')}
            className="hover:text-sky-400 transition-colors cursor-pointer"
          >
            Education
          </button>
          <a
            className="text-sky-400 hover:underline"
            href={`mailto:${PROFILE_INFO.email}`}
          >
            {PROFILE_INFO.email}
          </a>
        </div>
      </div>
    </footer>
  );
};
