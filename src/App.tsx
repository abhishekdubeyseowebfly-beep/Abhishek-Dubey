import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedSpotlights } from './components/FeaturedSpotlights';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectModal } from './components/ProjectModal';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { Footer } from './components/Footer';
import { TabType, TechCategory } from './types';
import { PROJECTS_DATA } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('all');
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const [isAiOpen, setIsAiOpen] = useState<boolean>(false);
  const [aiPrompt, setAiPrompt] = useState<string | undefined>(undefined);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (id: string) => {
    setActiveModalId(id);
  };

  const handleCloseModal = () => {
    setActiveModalId(null);
  };

  const handleOpenAiWithPrompt = (prompt?: string) => {
    if (prompt) {
      setAiPrompt(prompt);
    }
    setIsAiOpen(true);
  };

  const handleNavigateToProjects = () => {
    setActiveTab('work');
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = PROJECTS_DATA.find((p) => p.id === activeModalId) || null;

  return (
    <div className="cyber-grid relative min-h-screen flex flex-col justify-between selection:bg-sky-500 selection:text-white bg-[#070b16]">
      {/* Ambient Glow Effects */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow -z-10" />
      <div className="fixed bottom-0 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-1/3 w-[360px] h-[360px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onToggleAi={() => setIsAiOpen((prev) => !prev)}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'home' && (
          <div className="space-y-16">
            <HeroSection
              onNavigate={handleTabChange}
              onAskAi={handleOpenAiWithPrompt}
            />
            <FeaturedSpotlights
              projects={PROJECTS_DATA}
              onOpenProjectModal={handleOpenModal}
              onNavigateToProjects={handleNavigateToProjects}
            />
          </div>
        )}

        {activeTab === 'about' && (
          <AboutSection
            onNavigate={handleTabChange}
            onAskAi={handleOpenAiWithPrompt}
          />
        )}

        {activeTab === 'work' && (
          <ProjectsSection
            projects={PROJECTS_DATA}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onOpenProjectModal={handleOpenModal}
            onNavigate={handleTabChange}
            onAskAi={handleOpenAiWithPrompt}
          />
        )}

        {activeTab === 'skills' && (
          <SkillsSection onNavigate={handleTabChange} />
        )}

        {activeTab === 'education' && (
          <EducationSection onNavigate={handleTabChange} />
        )}
      </main>

      {/* Interactive Project Architecture & Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
        onAskAi={handleOpenAiWithPrompt}
      />

      {/* Interactive AI Assistant Slide-in Drawer */}
      <AiAssistantDrawer
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        initialPrompt={aiPrompt}
        onClearInitialPrompt={() => setAiPrompt(undefined)}
      />

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
}
