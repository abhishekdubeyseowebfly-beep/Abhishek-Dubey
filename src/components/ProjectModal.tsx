import React, { useEffect } from 'react';
import { X, Sparkles, Database, CheckCircle2, FileText, Code2, AlertTriangle } from 'lucide-react';
import { ProjectData } from '../types';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onAskAi: (prompt: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onAskAi }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060913]/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel border border-sky-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 font-mono text-xs font-bold">
                {project.projectNumber.toUpperCase()}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                {project.subType}
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-sky-400 font-mono">{project.headline}</p>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Dynamic Content */}
        <div className="space-y-6">
          {/* Problem Statement */}
          <div className="p-4 rounded-2xl bg-[#060913]/80 border border-slate-800 space-y-2">
            <h4 className="font-heading font-bold text-sm text-sky-300">Problem Statement &amp; Scope</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.modalDetails.problemStatement}
            </p>
          </div>

          {/* 2-Column Architectural Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-sky-400 font-bold block">
                {project.modalDetails.col1Title}:
              </span>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                {project.modalDetails.col1Text}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-bold block">
                {project.modalDetails.col2Title}:
              </span>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                {project.modalDetails.col2Text}
              </p>
            </div>
          </div>

          {/* Schema Snippet or Pipeline Flow */}
          {project.schemaSnippet && (
            <div className="p-4 rounded-2xl bg-[#060913] border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-purple-300 font-semibold flex items-center justify-between">
                <span>Database Schema Traceability</span>
                <span className="text-[10px] text-slate-500">ENGINE=InnoDB CHARSET=utf8mb4</span>
              </div>
              <pre className="text-[11px] font-mono text-slate-300 overflow-x-auto bg-slate-900 p-3 rounded-lg leading-relaxed border border-slate-800">
                {project.schemaSnippet}
              </pre>
            </div>
          )}

          {project.pipelineFlow && (
            <div className="p-4 rounded-2xl bg-[#060913] border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-emerald-300 font-semibold">
                Threat Classification Data Pipeline Flow
              </div>
              <div className="text-[11px] font-mono text-slate-300 space-y-1 bg-slate-900 p-3 rounded-lg leading-relaxed border border-slate-800">
                {project.pipelineFlow.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          )}

          {/* Recognition / Extra Note */}
          {project.modalDetails.extraNote && (
            <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/20 text-xs text-slate-300 space-y-1">
              <span className="text-sky-300 font-semibold font-mono uppercase text-[11px]">
                Engineering Validation &amp; Assessment:
              </span>
              <p>{project.modalDetails.extraNote}</p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Engineered by Abhishek Dubey</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer transition-colors"
            >
              Close Inspector
            </button>
            <button
              id="modal-ask-ai-trigger"
              onClick={() => {
                onClose();
                onAskAi(project.promptText);
              }}
              className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI About This</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
