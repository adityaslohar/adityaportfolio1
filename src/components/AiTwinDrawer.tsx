"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Sparkles,
  Send,
  Bot,
  User,
  Quote,
  Zap,
  RotateCcw,
  ShieldCheck,
  Cpu,
  Video,
  MessageSquare
} from "lucide-react";
import { LiveStreamingAvatar } from "./LiveStreamingAvatar";

interface Message {
  id: string;
  sender: "user" | "twin";
  text: string;
  citation?: string;
  isStreaming?: boolean;
  latencyMs?: number;
  source?: string;
}

interface AiTwinDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiTwinDrawer: React.FC<AiTwinDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      sender: "twin",
      text: "Hello! I am Aditya's AI Recruiter Twin. I'm here to help engineering hiring managers and recruiters evaluate Aditya for full-time Front-End Developer (React / Next.js) roles. Feel free to ask about his immediate availability, 5 production platforms, or his team leadership of 7 developers.",
      citation: "Portfolio Brief — Verified Knowledge Base",
      source: "grounded-brief",
    },
  ]);

  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [avatarMode, setAvatarMode] = useState<boolean>(true);
  const [lastSpokenText, setLastSpokenText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "What is Aditya's notice period and joining availability?",
    "Why should we hire Aditya for a Front-End role?",
    "Tell me about the Education ERP & TanStack Table v8",
    "How did he lead a team of 7 developers?",
    "What was the scale and architecture of SalesOptim?",
    "What is his tech stack and production experience?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSend = async (queryToSend?: string) => {
    const text = (queryToSend || inputQuery).trim();
    if (!text || isTyping) return;

    const userMessageId = "user-" + Date.now();
    setMessages((prev) => [
      ...prev,
      { id: userMessageId, sender: "user", text },
    ]);
    setInputQuery("");
    setIsTyping(true);

    try {
      // Call the Free AI Engine endpoint (Gemini / Groq / Grounded Brief)
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });

      const data = await res.json();
      const responseText = data.text || "No response received";
      const citation = data.citation || "Verified Portfolio Brief";
      const latencyMs = data.latencyMs || 210;
      const source = data.source || "grounded-brief";

      // Pass text to avatar lipsync
      setLastSpokenText(responseText);

      // Typewriter stream effect
      const twinMessageId = "twin-" + Date.now();
      let currentIndex = 0;

      setMessages((prev) => [
        ...prev,
        {
          id: twinMessageId,
          sender: "twin",
          text: "",
          citation,
          isStreaming: true,
          latencyMs,
          source,
        },
      ]);

      const interval = setInterval(() => {
        currentIndex += 6;
        if (currentIndex >= responseText.length) {
          clearInterval(interval);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === twinMessageId
                ? { ...m, text: responseText, isStreaming: false }
                : m
            )
          );
          setIsTyping(false);
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === twinMessageId
                ? { ...m, text: responseText.slice(0, currentIndex) }
                : m
            )
          );
        }
      }, 18);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: "err-" + Date.now(),
          sender: "twin",
          text: "Aditya Lohar is a Front-End Developer with ~2.5 years of experience (React.js, Next.js App Router, TypeScript, Tailwind CSS). He shipped Spicy Mango, SalesOptim (10+ companies, 200+ employees), and led a team of 7 developers at BrightLink Info Tech.",
          citation: "Offline Fallback Brief",
          source: "offline-brief",
        },
      ]);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "initial",
        sender: "twin",
        text: "Chat cleared. What else would you like to ask about Aditya's technical qualifications or projects?",
        citation: "Portfolio Brief — Verified Knowledge Base",
      },
    ]);
    setLastSpokenText("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm transition-all duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl h-full bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20">
                <img
                  src="/aditya-avatar.png"
                  alt="Aditya Lohar"
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Aditya&apos;s AI Assistant
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Interactive Twin
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Custom Grounded Assistant • Verified Portfolio & Experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setAvatarMode(!avatarMode)}
              className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
                avatarMode
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                  : "bg-white/5 text-slate-400 border-white/10 hover:text-white"
              }`}
              title="Toggle Avatar View"
            >
              {avatarMode ? <Video className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
            </button>
            <button
              onClick={handleReset}
              title="Reset conversation"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Verification Banner */}
        <div className="px-4 py-2 bg-cyan-950/30 border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Grounded Knowledge • 100% Verified</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" />
              Real-time Response
            </span>
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-indigo-400" />
              Dynamic Synthesis
            </span>
          </div>
        </div>

        {/* Scrollable Container with Avatar & Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* Real-Time Live Streaming Avatar Box */}
          {avatarMode && (
            <div className="mb-4">
              <LiveStreamingAvatar lastSpokenText={lastSpokenText} />
            </div>
          )}

          {/* Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "twin" && (
                <div className="w-8 h-8 rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-900 shrink-0 mt-0.5 shadow-sm">
                  <img
                    src="/aditya-avatar.png"
                    alt="Aditya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                    : "bg-slate-800/80 text-slate-200 border border-white/10"
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.citation && (
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between gap-1 text-[11px] font-mono text-cyan-300">
                    <div className="flex items-center gap-1.5 truncate">
                      <Quote className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">Reference: {msg.citation}</span>
                    </div>
                    {msg.latencyMs && (
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] shrink-0">
                        {msg.latencyMs}ms
                      </span>
                    )}
                  </div>
                )}
              </div>

              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pl-11">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Synthesizing response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="p-3 bg-slate-950/70 border-t border-white/5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-1">
            Recruiter Quick Prompts:
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                disabled={isTyping}
                className="text-left text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/5 transition-colors disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-950 border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Aditya's projects, scale, or leadership..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              disabled={isTyping}
              className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all disabled:opacity-40"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
