"use client";

import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[92vh] max-h-[900px] flex flex-col rounded-3xl bg-slate-900 border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Aditya Sunil Lohar — Resume
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Front-End Developer (~2.5y Exp) • Akurdi, Pune
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button */}
            <a
              href={PORTFOLIO_DATA.me.resumePdf}
              download="Aditya_Lohar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in new tab button */}
            <a
              href={PORTFOLIO_DATA.me.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer Frame */}
        <div className="flex-1 w-full bg-slate-950 relative overflow-hidden">
          <iframe
            src={`${PORTFOLIO_DATA.me.resumePdf}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Aditya Lohar Resume"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer Quick Actions */}
        <div className="px-5 py-3 border-t border-white/10 bg-slate-950/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-4">
            <span>Notice Period: <strong className="text-emerald-400 font-semibold">Immediate Joiner</strong></span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="hidden sm:inline">Role: <strong className="text-white">Full-Time React / Next.js</strong></span>
          </div>

          <a
            href="https://wa.me/917744998493"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Connect on WhatsApp (+91 77449 98493) →
          </a>
        </div>
      </div>
    </div>
  );
};

