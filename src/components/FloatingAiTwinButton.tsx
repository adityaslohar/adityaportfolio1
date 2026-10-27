"use client";

import React from "react";
import { Sparkles, Bot } from "lucide-react";

interface FloatingAiTwinButtonProps {
  onOpen: () => void;
}

export const FloatingAiTwinButton: React.FC<FloatingAiTwinButtonProps> = ({ onOpen }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onOpen}
        aria-label="Ask Aditya's AI Recruiter Twin"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white border border-cyan-500/40 shadow-xl shadow-cyan-950/40 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:border-cyan-400"
      >
        {/* Glowing aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-30 blur group-hover:opacity-60 transition duration-300 pointer-events-none" />

        {/* Pulse beacon */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
        </span>

        <div className="relative flex items-center gap-1.5 font-semibold text-xs text-cyan-300">
          <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span>Ask AI Twin</span>
        </div>
      </button>
    </div>
  );
};
