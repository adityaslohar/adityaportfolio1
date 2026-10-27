"use client";

import React from "react";
import { GraduationCap, Award, School } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const EducationSection: React.FC = () => {
  const education = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-20 bg-[#070a12] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Solid foundations in Computer Science & Engineering fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};
