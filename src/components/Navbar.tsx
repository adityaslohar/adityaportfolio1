"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface NavbarProps {
  onOpenAiTwin: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAiTwin, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Strengths", href: "#strengths" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#070a12]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <img
                src="/aditya-avatar.png"
                alt="Aditya Lohar"
                className="w-full h-full object-cover object-top rounded-[10px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                  {PORTFOLIO_DATA.me.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ~2.5y Exp
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono hidden sm:block">
                React • Next.js • TypeScript
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* AI Twin Trigger */}
            <button
              onClick={onOpenAiTwin}
              className="relative group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ask AI Twin</span>
            </button>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-white/20"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Resume</span>
            </button>

            {/* Social links */}
            <a
              href={PORTFOLIO_DATA.me.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.me.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAiTwin}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
            >
              <Sparkles className="w-3 h-3" />
              <span>AI Twin</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between">
              <a
                href={PORTFOLIO_DATA.me.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.me.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.me.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
