"use client";

import React, { useState } from "react";
import { Code2, Layout, Database, Wrench, Sparkles, Search, CheckCircle2, Server, Palette } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = PORTFOLIO_DATA.skills;

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Languages":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "Frontend Frameworks & Styling":
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case "State Management & Data":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Backend & Databases (Familiar)":
        return <Server className="w-5 h-5 text-amber-400" />;
      case "Design & Implementation":
        return <Palette className="w-5 h-5 text-pink-400" />;
      case "Tools & Workflow":
        return <Wrench className="w-5 h-5 text-purple-400" />;
      case "Active Learning & AI Integration":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = categories.map((cat) => {
    const matchedSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: matchedSkills };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-[#070a12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Skills & Engineering Toolkit
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Categorized by engineering domains. Core technologies, libraries, and tools utilized across production software engineering and modern front-end development.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Next.js, API)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl p-6 bg-slate-900/50 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-400">{group.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.highlight
                          ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold"
                          : "bg-slate-800/80 text-slate-300 border border-white/5"
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                          {skill.tag}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom verify badge */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in production</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Star Ratings & Percentage Bars */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              <strong>Engineering Philosophy:</strong> I believe in concrete shipped software over arbitrary &quot;90% CSS&quot; progress bars. Every skill listed above is backed by production code.
            </span>
          </div>
          <a
            href="#projects"
            className="text-cyan-400 hover:text-cyan-300 font-mono underline underline-offset-4 shrink-0"
          >
            Review Project Proof →
          </a>
        </div>
      </div>
    </section>
  );
};
