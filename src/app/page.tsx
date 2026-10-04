'use client';

import React, { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import DepiTrainerSection from '@/components/DepiTrainerSection';
import EducationAndExperience from '@/components/EducationAndExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import ProjectModal from '@/components/ProjectModal';
import CommandPalette from '@/components/CommandPalette';
import { Project } from '@/data/portfolioData';

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Dynamic Ambient Particle Background */}
      <ParticleBackground />

      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* About Section */}
      <About />

      {/* DEPI Impact & Training Section */}
      <DepiTrainerSection />

      {/* Experience & Education Timeline */}
      <EducationAndExperience />

      {/* Skills Matrix */}
      <Skills />

      {/* Projects Showcase */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* Trainee & Peer Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />
    </main>
  );
}
