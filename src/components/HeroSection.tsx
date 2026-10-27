"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Layers,
  MapPin,
  Download,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Terminal,
  CheckCircle2,
  Zap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { AnimatedHeroBackground } from "./AnimatedHeroBackground";

interface HeroSectionProps {
  onOpenAiTwin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAiTwin }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#05070d]">
      {/* Advanced Animated Canvas Background */}
      <AnimatedHeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-Impact Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Status Pill with pulsing beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs text-slate-300 shadow-lg shadow-emerald-950/30 mb-6 backdrop-blur-xl">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400 tracking-wide uppercase text-[11px] font-mono">
                Available for Immediate Hire
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 flex items-center gap-1 text-[11px]">
                <MapPin className="w-3 h-3 text-cyan-400" />
                Sangli / Pune • Remote OK
              </span>
            </div>

            {/* Candidate Identity Title */}
            <div className="mb-3">
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Front-End Developer — React / Next.js / TypeScript
              </span>
            </div>

            {/* Formal Headline with Gradient Shimmer */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Engineering{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                scalable front-end systems
              </span>{" "}
              for daily business operations.
            </h1>

            {/* Sub-headline with formal, respectful tone */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              <strong className="text-white font-semibold">~2.5 years</strong> of professional front-end engineering experience.
              Contributed to and shipped <strong className="text-white font-semibold">5 production applications</strong> — including an institutional multi-tenant Education ERP, an enterprise CRM serving 200+ daily employees across 10+ organizations, and a commercial hospitality CMS. Experienced in translating design systems into responsive React/Next.js code and leading front-end engineering teams.
            </p>

            {/* CTAs (First viewport accessible on mobile and desktop) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAiTwin}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 shadow-md shadow-cyan-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Ask AI Twin</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Live
                </span>
              </button>

              <a
                href={PORTFOLIO_DATA.me.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 transition-all"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Recruiter Quick Contact & Profiles Strip */}
            <div className="flex flex-wrap items-center gap-3.5 pt-6 border-t border-white/10 text-xs text-slate-400">
              <a
                href={`mailto:${PORTFOLIO_DATA.me.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PORTFOLIO_DATA.me.email}</span>
              </a>

              <span className="text-slate-700 hidden sm:inline">•</span>

              <a
                href={PORTFOLIO_DATA.me.whatsapp || `https://wa.me/917744998493`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 77449 98493 (WhatsApp / Call)</span>
              </a>

              <span className="text-slate-700 hidden sm:inline">•</span>

              <a
                href={PORTFOLIO_DATA.me.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700 hidden sm:inline">•</span>

              <a
                href={PORTFOLIO_DATA.me.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Holographic Developer Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Hologram Card Frame */}
            <div className="relative w-full max-w-md rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-black/90 border border-white/15 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl overflow-hidden group">
              
              {/* Subtle light sweep reflection */}
              <div className="absolute -top-36 -left-36 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-700" />
              <div className="absolute -bottom-36 -right-36 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/25 transition-all duration-700" />

              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400">
                    engineer.profile.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>

              {/* Center Portrait with Futuristic Hologram Glow */}
              <div className="relative flex flex-col items-center text-center my-2">
                <div className="relative mb-4 group">
                  
                  {/* Glowing orbital ring */}
                  <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity animate-pulse [animation-duration:4s]" />

                  {/* Real Photo Avatar Container */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative">
                      <img
                        src="/aditya-avatar.png"
                        alt="Aditya Lohar"
                        className="w-full h-full object-cover object-top scale-110 translate-y-1.5 transition-transform duration-500 group-hover:scale-115"
                      />
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute bottom-1 right-2 p-1.5 rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/50">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Aditya Lohar
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  Software Developer & Team Lead
                </p>
              </div>

              {/* Shipped Capabilities Badges Matrix */}
              <div className="grid grid-cols-2 gap-2.5 mt-5">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Architecture</span>
                  <span className="text-xs font-bold text-white mt-0.5">React & Next.js 16</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Scale Proof</span>
                  <span className="text-xs font-bold text-emerald-400 mt-0.5">200+ Active Users</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Leadership</span>
                  <span className="text-xs font-bold text-indigo-300 mt-0.5">Led 7 Developers</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Fidelity</span>
                  <span className="text-xs font-bold text-cyan-300 mt-0.5">Figma → Pixel-Perfect</span>
                </div>
              </div>

              {/* Interactive AI Twin Hook CTA */}
              <button
                onClick={onOpenAiTwin}
                className="w-full mt-4 p-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center justify-between text-xs font-medium group/btn"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 group-hover/btn:rotate-12 transition-transform" />
                  <span>Ask questions directly to my AI Twin</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Fast Metric Highlights Bar */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-4 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Production Apps</span>
            </div>
            <div className="text-2xl font-extrabold text-white">5 Shipped</div>
            <p className="text-xs text-slate-400 mt-0.5">Education ERP, Booking, CRM & Multi-Tenant</p>
          </div>

          <div className="flex flex-col p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Client Adoption</span>
            </div>
            <div className="text-2xl font-extrabold text-white">200+ Daily Staff</div>
            <p className="text-xs text-slate-400 mt-0.5">Across 10+ corporate clients</p>
          </div>

          <div className="flex flex-col p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Team Leadership</span>
            </div>
            <div className="text-2xl font-extrabold text-white">Team of 7</div>
            <p className="text-xs text-slate-400 mt-0.5">Engineers led at BrightLink</p>
          </div>

          <div className="flex flex-col p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Total Experience</span>
            </div>
            <div className="text-2xl font-extrabold text-white">~2.5 Years</div>
            <p className="text-xs text-slate-400 mt-0.5">Dec 2023 – Present</p>
          </div>
        </div>

      </div>
    </section>
  );
};
