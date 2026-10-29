"use client";

import React, { useState } from "react";
import { Sparkles, ExternalLink, Lock, CheckCircle2, ArrowRight, Layers, ShieldCheck, Database, FileSpreadsheet } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { ProjectDetailModal } from "./ProjectDetailModal";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Featured", "Production SaaS & Apps", "Multi-Tenant & RBAC", "AI & Next.js"];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Featured") return project.featured;
    if (selectedCategory === "Production SaaS & Apps") return project.id === "spicy-mango" || project.id === "planetto" || project.id === "salesoptim";
    if (selectedCategory === "Multi-Tenant & RBAC") return project.id === "salesoptim" || project.id === "xpertbiz-solution" || project.id === "education-erp";
    if (selectedCategory === "AI & Next.js") return project.id === "ai-twin-portfolio";
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#070a12] relative border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              Production Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects & Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Production web applications and enterprise systems demonstrating architectures in multi-tenant RBAC, high-performance data grids, dynamic pricing engines, and modern React development.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isFeaturedHero = project.id === "spicy-mango";
            const isAiTwin = project.id === "ai-twin-portfolio";

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between ${
                  isFeaturedHero ? "lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/20" : ""
                } ${isAiTwin ? "border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-indigo-950/30" : ""}`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          Featured
                        </span>
                      )}
                      {project.id === "salesoptim" && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          10+ Orgs • 200+ Staff
                        </span>
                      )}
                      {project.id === "education-erp" && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          Multi-Tenant RBAC • TanStack v8
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.isPrivate ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded-md border border-white/5">
                          <Lock className="w-3 h-3 text-slate-500" />
                          <span>Private Client Repo</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Public Codebase</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400/90 mb-4 font-mono">
                    {project.tagline}
                  </p>

                  {/* One Liner */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.oneLiner}
                  </p>

                  {/* Metrics Bar if available */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 p-3 rounded-2xl bg-black/30 border border-white/5">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{metric.label}</div>
                          <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Competency Highlight */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Competency Demonstrated:
                    </div>
                    <p className="text-xs text-slate-200 font-medium">
                      {project.competencyShown}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10 mt-auto">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Architecture & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                      >
                        <span>Repo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
