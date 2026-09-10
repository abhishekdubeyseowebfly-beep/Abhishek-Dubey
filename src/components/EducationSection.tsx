import React from 'react';
import { GraduationCap, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { TabType } from '../types';

interface EducationSectionProps {
  onNavigate: (tab: TabType) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onNavigate }) => {
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
        <span className="text-sky-400">Academic History &amp; Credentials</span>
      </div>

      <div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Academic Track &amp; <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Chronological record of university degrees, academic standing, and specialized third-party accreditations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Education Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            Formal Degrees
          </h3>

          <div className="relative border-l-2 border-slate-800 pl-6 ml-2 space-y-8">
            {EDUCATION_DATA.map((item, index) => {
              const dotColors = [
                'bg-sky-500',
                'bg-purple-500',
                'bg-slate-600',
                'bg-slate-700',
              ];
              const dotColor = dotColors[index % dotColors.length];

              return (
                <div key={item.degree + index} className="relative group">
                  <div
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full ${dotColor} border-4 border-[#0b1120]`}
                  ></div>
                  <div className="glass-card p-5 rounded-2xl space-y-2 border border-slate-800">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-sky-400 font-bold">{item.period}</span>
                      <span className={`px-2 py-0.5 rounded ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white">{item.degree}</h4>
                    <div className="text-xs text-slate-300">{item.institution}</div>
                    <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications List */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-400" />
            Verified Credentials
          </h3>

          <div className="space-y-4">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.title}
                className="glass-card p-5 rounded-2xl space-y-3 border border-slate-800"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2.5 py-0.5 rounded font-mono ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-slate-400">{cert.type}</span>
                </div>
                <h4 className="font-heading font-bold text-base text-white">{cert.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-800">
        <button
          onClick={() => onNavigate('skills')}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Skills</span>
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Return to Overview</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
