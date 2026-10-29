"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ContactFooterProps {
  onOpenAiTwin: () => void;
  onOpenResume?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenAiTwin, onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.me.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 bg-[#05070d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 border border-white/10 relative overflow-hidden mb-16">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Actively Interviewing • Immediate Joiner
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Interview Me for Your Engineering Team.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Exclusively seeking <span className="text-white font-semibold">Full-Time</span> roles as a <span className="text-white font-semibold">Front-End Developer</span>, <span className="text-white font-semibold">React Developer</span>, or <span className="text-white font-semibold">Next.js Engineer</span>. 0-day notice period, ready to start immediately, and open to Remote, Hybrid, or On-site opportunities (Pune, Mumbai, Bangalore, or relocation).
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.me.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Send an Email</span>
              </a>

              <a
                href={`https://wa.me/917744998493`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+91 77449 98493)</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-all hover:border-cyan-500/40"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>
              )}

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>

              <button
                onClick={onOpenAiTwin}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Ask AI Twin</span>
              </button>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 text-xs">
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{PORTFOLIO_DATA.me.location}</span>
            </div>
            <a
              href="https://wa.me/917744998493"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="flex items-center gap-2">
                <span>{PORTFOLIO_DATA.me.phone}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">WhatsApp</span>
              </div>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.me.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{PORTFOLIO_DATA.me.email}</span>
            </a>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div>
            © 2026 {PORTFOLIO_DATA.me.name}. Handcrafted with Next.js 16 (App Router), React 19, TypeScript strict & Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.me.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.me.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.me.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
