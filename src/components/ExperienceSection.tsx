"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Users, CheckCircle2, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const ExperienceSection: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experiences;

  return (
    <section id="experience" className="py-24 bg-[#070a12] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            Professional Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-xl">
            ~2.5 years of professional track record in software engineering, technical team leadership, and product delivery.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-emerald-500 before:opacity-20">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.period.includes("Present");

            return (
              <div
                key={exp.company}
                className="relative flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Center Node Indicator */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30 z-10">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Company card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-all ${
                    idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>

                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse-subtle">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Current Role
                      </span>
                    )}

                    {exp.teamSize && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        <Users className="w-3 h-3" />
                        {exp.teamSize} Led
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mb-4">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {exp.highlights.map((h, i) => {
                      const colonIdx = h.indexOf(":");
                      if (colonIdx > -1) {
                        const title = h.slice(0, colonIdx);
                        const desc = h.slice(colonIdx + 1);
                        return (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-white font-semibold">{title}:</strong>
                              {desc}
                            </span>
                          </div>
                        );
                      }
                      return (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech stack */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
