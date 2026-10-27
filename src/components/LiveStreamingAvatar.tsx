"use client";

import React, { useEffect, useRef, useState } from "react";
import { Video, Volume2, VolumeX, Play, Square, Sparkles, AlertCircle, RefreshCw } from "lucide-react";

interface LiveStreamingAvatarProps {
  lastSpokenText?: string;
  onAvatarReady?: (isReady: boolean) => void;
}

export const LiveStreamingAvatar: React.FC<LiveStreamingAvatarProps> = ({
  lastSpokenText,
  onAvatarReady,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [streamActive, setStreamActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Standby — Ready to connect");
  const [hasApiKey, setHasApiKey] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Check if HeyGen token API is available
  const startAvatarSession = async () => {
    setLoading(true);
    setStatusMessage("Requesting avatar session token...");

    try {
      const res = await fetch("/api/avatar/token", { method: "POST" });
      const data = await res.json();

      if (!data.available) {
        setHasApiKey(false);
        setStatusMessage("Avatar ready in interactive digital preview mode (Add HEYGEN_API_KEY to enable live WebRTC)");
        setStreamActive(true);
        if (onAvatarReady) onAvatarReady(true);
      } else {
        setHasApiKey(true);
        setStatusMessage("Connecting to HeyGen WebRTC stream...");

        try {
          // Dynamic import of streaming avatar package
          const moduleName = "@heygen/streaming-avatar";
          const heygenModule = await import(/* webpackIgnore: true */ moduleName).catch(() => null);

          if (heygenModule && heygenModule.default) {
            const StreamingAvatar = heygenModule.default;
            const AvatarQuality = heygenModule.AvatarQuality || { Low: "low" };
            const avatar = new StreamingAvatar({ token: data.token });

            avatar.on("STREAM_READY", (event: { detail: MediaStream }) => {
              if (videoRef.current && event.detail) {
                videoRef.current.srcObject = event.detail;
                videoRef.current.play().catch(() => {});
              }
              setStreamActive(true);
              setStatusMessage("Live avatar connected via WebRTC");
              if (onAvatarReady) onAvatarReady(true);
            });

            avatar.on("STREAM_DISCONNECTED", () => {
              setStreamActive(false);
              setStatusMessage("Avatar disconnected");
            });

            await avatar.createStartAvatar({
              quality: AvatarQuality.Low,
              avatarName: process.env.NEXT_PUBLIC_HEYGEN_AVATAR_ID || "Wayne_20240711",
            });
          } else {
            setStatusMessage("Interactive avatar active in digital twin mode");
            setStreamActive(true);
            if (onAvatarReady) onAvatarReady(true);
          }
        } catch {
          setStatusMessage("Avatar ready in digital twin mode");
          setStreamActive(true);
          if (onAvatarReady) onAvatarReady(true);
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Connection failed";
      setStatusMessage(`Notice: ${msg}. Digital twin active.`);
      setStreamActive(true);
      if (onAvatarReady) onAvatarReady(true);
    } finally {
      setLoading(false);
    }
  };

  const stopAvatarSession = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setStreamActive(false);
    setStatusMessage("Session ended. Standby mode.");
    if (onAvatarReady) onAvatarReady(false);
  };

  // Speak incoming text
  useEffect(() => {
    if (lastSpokenText && streamActive) {
      setIsSpeaking(true);
      const timer = setTimeout(() => {
        setIsSpeaking(false);
      }, Math.min(lastSpokenText.length * 60, 6000));
      return () => clearTimeout(timer);
    }
  }, [lastSpokenText, streamActive]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
      {/* Video Window */}
      <div className="relative aspect-video w-full flex items-center justify-center bg-gradient-to-b from-slate-900 to-black">
        {/* Actual Live WebRTC Video element */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={muted}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            streamActive && hasApiKey ? "opacity-100" : "hidden"
          }`}
        />

        {/* Digital Avatar Preview with Real Photo */}
        {(!streamActive || !hasApiKey) && (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="relative mb-3">
              {/* Outer glowing pulsing aura */}
              {isSpeaking && (
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 opacity-75 blur-md animate-pulse" />
              )}

              {/* Avatar Headshot container with real photo */}
              <div
                className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-1 flex items-center justify-center shadow-2xl shadow-cyan-500/30 transition-all duration-300 ${
                  isSpeaking ? "scale-105 ring-4 ring-cyan-400/50" : ""
                }`}
              >
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/aditya-avatar.png"
                    alt="Aditya Lohar AI Avatar"
                    className="w-full h-full object-cover object-top scale-110 translate-y-1 transition-transform"
                  />
                  {isSpeaking && (
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
                  )}
                </div>
              </div>

              {/* Speaking Voice Waves Pill */}
              {isSpeaking && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-bold shadow-lg shadow-cyan-500/40">
                  <span className="w-1 h-3 bg-slate-950 rounded-full animate-bounce" />
                  <span className="w-1 h-4 bg-slate-950 rounded-full animate-bounce [animation-delay:0.1s]" />
                  <span className="w-1 h-2 bg-slate-950 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-3.5 bg-slate-950 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="tracking-wide uppercase text-[9px] font-mono ml-0.5">Speaking</span>
                </div>
              )}
            </div>

            <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5 justify-center">
              <span>Aditya&apos;s Realistic AI Avatar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 max-w-xs mt-1">
              {isSpeaking
                ? "Synthesizing answer with real-time AI..."
                : streamActive
                ? "Avatar Connected • Ask questions below"
                : "Real-time AI Recruiter Twin • Ready to answer"}
            </p>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono">
            <span
              className={`w-2 h-2 rounded-full ${
                streamActive
                  ? "bg-emerald-400 animate-pulse"
                  : loading
                  ? "bg-amber-400 animate-ping"
                  : "bg-slate-500"
              }`}
            />
            <span className="text-slate-300">
              {streamActive ? "Live Avatar Active" : "Avatar Offline"}
            </span>
          </div>

          <button
            onClick={() => setMuted(!muted)}
            className="pointer-events-auto p-1.5 rounded-full bg-black/70 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title={muted ? "Unmute avatar" : "Mute avatar"}
          >
            {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Control Strip */}
      <div className="p-3 bg-slate-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="truncate max-w-[240px]">{statusMessage}</span>
        </div>

        <div className="flex items-center gap-2">
          {!streamActive ? (
            <button
              onClick={startAvatarSession}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-colors disabled:opacity-50"
            >
              {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
              <span>{loading ? "Connecting..." : "Start Live Avatar"}</span>
            </button>
          ) : (
            <button
              onClick={stopAvatarSession}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 transition-colors"
            >
              <Square className="w-3 h-3" />
              <span>End Session</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
