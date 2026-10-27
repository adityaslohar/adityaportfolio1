"use client";

import React from "react";
import { ShieldCheck, Layers, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const SellingPointsSection: React.FC = () => {
  const points = PORTFOLIO_DATA.keySellingPoints;

  return (
    <section id="strengths" className="py-20 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key Engineering Strengths
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            A disciplined focus on production software delivery, full ownership of user interfaces, and collaborative engineering teamwork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Production Software Delivery */}
          <div className="relative group rounded-3xl p-8 bg-slate-900/50 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  Focus 01
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Production Software Delivery
              </h3>
              <p className="text-xs text-cyan-400 font-mono mb-4 uppercase tracking-wider">
                Enterprise systems supporting daily operations
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Experienced in engineering reliable web applications that support business-critical operations. Have contributed to and shipped <strong>5 production platforms</strong>: an institutional multi-tenant Education ERP, an enterprise CRM deployed across <strong>10+ companies and 200+ employees</strong>, and a live hospitality booking CMS.
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Education ERP:</strong> Multi-tenant academic, exams & PDF fee billing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Spicy Mango:</strong> Live booking engine & hotel management CMS</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>SalesOptim:</strong> 10+ corporate clients, 200+ active staff</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>XpertBiz:</strong> Multi-tenant organization switching & permissions</span>
                </div>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
            >
              <span>Explore project case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: End-to-End Ownership */}
          <div className="relative group rounded-3xl p-8 bg-slate-900/50 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  Focus 02
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                End-to-End Feature Ownership
              </h3>
              <p className="text-xs text-indigo-400 font-mono mb-4 uppercase tracking-wider">
                From design specifications to production deployment
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Experienced in translating design specifications into production-ready front-end code. I take complete ownership of responsive layouts, robust state management, API data contracts, error handling, and reusable component architectures with strong attention to detail.
              </p>

              {/* End-to-end workflow visualization */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6">
                <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wide">
                  Full-Cycle Delivery Pipeline:
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold flex items-center justify-center">1</span>
                    <span>Figma Specs → Pixel-Perfect Responsive UI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold flex items-center justify-center">2</span>
                    <span>REST API Integration & Type-Safe Payloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold flex items-center justify-center">3</span>
                    <span>Reusable Component Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold flex items-center justify-center">4</span>
                    <span>Peer Review, Testing & Clean Merge</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all"
            >
              <span>View technical competencies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Team Leadership */}
          <div className="relative group rounded-3xl p-8 bg-slate-900/50 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  Focus 03
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Technical Team Leadership
              </h3>
              <p className="text-xs text-emerald-400 font-mono mb-4 uppercase tracking-wider">
                Mentorship, code reviews & engineering standards
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Led and coordinated a team of <strong>7 front-end developers</strong> at BrightLink Info Tech. Spearheaded sprint task breakdowns, mentored teammates, conducted structured pull-request reviews, and resolved technical blockers to ensure timely delivery.
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conducted regular PR reviews & enforced linting standards</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Coordinated sprint delivery for multiple client deliverables</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fostered component reusability across simultaneous projects</span>
                </div>
              </div>
            </div>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
            >
              <span>View professional experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
