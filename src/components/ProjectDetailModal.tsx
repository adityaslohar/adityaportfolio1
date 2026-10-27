"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Lock, CheckCircle2, AlertTriangle, Code2, Layers, Cpu } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl text-slate-100 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Featured Case Study
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role & Core Competency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="text-xs font-mono uppercase text-cyan-400 mb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              My Direct Role
            </div>
            <p className="text-sm text-slate-200 font-medium">{project.myRole}</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="text-xs font-mono uppercase text-indigo-400 mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Competency Demonstrated
            </div>
            <p className="text-sm text-slate-200 font-medium">{project.competencyShown}</p>
          </div>
        </div>

        {/* Metrics if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-[11px] font-mono text-slate-400">{metric.label}</div>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* The Hardest Part (Engineering Deep Dive) */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
            <AlertTriangle className="w-4 h-4" />
            The Hardest Engineering Challenge & Resolution
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.hardestPart}
          </p>
        </div>

        {/* Modules & Capabilities */}
        <div>
          <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Key Modules & Shipped Features
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.modules.map((mod, idx) => {
              const colonIdx = mod.indexOf(":");
              if (colonIdx > -1) {
                const title = mod.slice(0, colonIdx);
                const desc = mod.slice(colonIdx + 1);
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-semibold">{title}:</strong>
                      {desc}
                    </span>
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{mod}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
            Technology Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-cyan-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer / Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            {project.isPrivate ? (
              <>
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>Proprietary Client Architecture (Confidential Codebase)</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Public Repository Available</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition-colors"
              >
                <span>View GitHub Repo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
