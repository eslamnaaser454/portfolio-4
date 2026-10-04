'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  FileText,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Code,
  Users,
  GraduationCap,
  Calendar,
  Zap,
  FolderGit2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const { profile } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open from any key trigger
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    {
      id: 'about',
      title: 'About Eslam Nasser',
      subtitle: 'Background, 3 Pillars & Engineering Philosophy',
      icon: Code,
      action: () => {
        window.location.href = '#about';
        onClose();
      },
    },
    {
      id: 'depi',
      title: 'DEPI Training Journey & Impact',
      subtitle: '500+ Trainees Mentored, Curriculum & Methodology',
      icon: Users,
      action: () => {
        window.location.href = '#depi';
        onClose();
      },
    },
    {
      id: 'education',
      title: 'AASTMT Education & Honors',
      subtitle: 'Graduated with 3.53 GPA • Bachelor of Science',
      icon: GraduationCap,
      action: () => {
        window.location.href = '#experience';
        onClose();
      },
    },
    {
      id: 'experience',
      title: 'Career & Work Experience',
      subtitle: 'DEPI Technical Trainer, Software Engineer roles',
      icon: Calendar,
      action: () => {
        window.location.href = '#experience';
        onClose();
      },
    },
    {
      id: 'skills',
      title: 'Skills & Tech Stack',
      subtitle: 'Next.js, React, Node.js, TypeScript, PostgreSQL',
      icon: Zap,
      action: () => {
        window.location.href = '#skills';
        onClose();
      },
    },
    {
      id: 'projects',
      title: 'Featured Projects & Systems',
      subtitle: 'EduPioneer, OmniStore, DevPulse, CodeMentor AI',
      icon: FolderGit2,
      action: () => {
        window.location.href = '#projects';
        onClose();
      },
    },
    {
      id: 'resume',
      title: 'View Curriculum Vitae (CV)',
      subtitle: 'Digital Resume Preview & Printable PDF',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'contact',
      title: 'Send Message / Inquire',
      subtitle: 'Direct contact form & email',
      icon: Mail,
      action: () => {
        window.location.href = '#contact';
        onClose();
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '6rem 1.5rem 2rem 1.5rem',
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '600px',
          borderRadius: '20px',
          background: 'rgba(13, 20, 36, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1.1rem 1.4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            gap: '0.75rem',
          }}
        >
          <Search size={20} color="#38bdf8" />
          <input
            type="text"
            placeholder="Type a command or jump to section (e.g. DEPI, AAST, Skills, CV)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '0.75rem' }}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
              No matches found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#f8fafc',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38bdf8',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight size={15} color="#64748b" />
                </button>
              );
            })
          )}
        </div>

        {/* Bottom Help Bar */}
        <div
          style={{
            padding: '0.65rem 1.25rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: '#64748b',
          }}
        >
          <span>Use ⌘K / Ctrl+K anytime</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
