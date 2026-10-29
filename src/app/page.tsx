"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SellingPointsSection } from "@/components/SellingPointsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactFooter } from "@/components/ContactFooter";
import { FloatingAiTwinButton } from "@/components/FloatingAiTwinButton";
import { AiTwinDrawer } from "@/components/AiTwinDrawer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [isAiTwinOpen, setIsAiTwinOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenAiTwin = () => setIsAiTwinOpen(true);
  const handleCloseAiTwin = () => setIsAiTwinOpen(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar onOpenAiTwin={handleOpenAiTwin} onOpenResume={handleOpenResume} />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection onOpenAiTwin={handleOpenAiTwin} onOpenResume={handleOpenResume} />
        <SellingPointsSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </main>

      {/* Contact & Footer */}
      <ContactFooter onOpenAiTwin={handleOpenAiTwin} onOpenResume={handleOpenResume} />

      {/* Floating AI Twin Quick Access */}
      <FloatingAiTwinButton onOpen={handleOpenAiTwin} />

      {/* Interactive AI Recruiter Twin Drawer */}
      <AiTwinDrawer isOpen={isAiTwinOpen} onClose={handleCloseAiTwin} />

      {/* In-Browser Verified Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
