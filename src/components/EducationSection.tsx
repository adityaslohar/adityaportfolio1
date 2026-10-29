"use client";

import React from "react";
import { GraduationCap, Award, School, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const EducationSection: React.FC = () => {
  const education = PORTFOLIO_DATA.education;
  const certifications = PORTFOLIO_DATA.certifications || [];

  return (
    <section id="education" className="py-20 bg-[#070a12] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Computer Science & Engineering background paired with certified frontend specialization.
          </p>
        </div>

        {/* Degrees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-slate-900/50 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  {idx === 0 ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Award className="w-5 h-5" />
                  ) : (
                    <School className="w-5 h-5" />
                  )}
                </div>

                <div className="text-xs font-mono text-purple-400 font-semibold mb-1">
                  {item.period}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.degree}
                </h3>
                <p className="text-xs text-slate-300 mb-3">
                  {item.institution}
                </p>
              </div>

              {item.notes && (
                <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 italic">
                  {item.notes}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Card */}
        {certifications.length > 0 && (
          <div className="rounded-3xl p-6 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-indigo-950/20 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Verified Certification
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {certifications[0].title}
                </h4>
                <p className="text-xs text-slate-400">
                  Issued by <span className="text-slate-200 font-medium">{certifications[0].issuer}</span> • {certifications[0].year}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified on Resume</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
