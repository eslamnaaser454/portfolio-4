'use client';

import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  BarChart2,
  Terminal,
} from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
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
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '24px',
          background: 'rgba(13, 20, 36, 0.96)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2.25rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Category & Title */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
            }}
          >
            {project.category}
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginTop: '0.6rem',
              marginBottom: '0.35rem',
            }}
          >
            {project.title}
          </h2>

          <div style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 500 }}>
            {project.subtitle}
          </div>
        </div>

        {/* Impact Metric Banner */}
        {project.metrics && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: '#34d399',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1.75rem',
            }}
          >
            <BarChart2 size={18} style={{ flexShrink: 0 }} />
            <span>Impact: {project.metrics}</span>
          </div>
        )}

        {/* Long Description */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Terminal size={16} color="#38bdf8" />
            <span>Architecture & Overview</span>
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.7 }}>
            {project.longDescription}
          </p>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Sparkles size={16} color="#818cf8" />
            <span>Key Engineering Highlights</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.9rem',
                  color: '#cbd5e1',
                  lineHeight: 1.55,
                }}
              >
                <CheckCircle2
                  size={16}
                  color="#38bdf8"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: '2rem' }}>
          <h4
            style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '0.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Layers size={16} color="#34d399" />
            <span>Tech Stack & Tools</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Live Demo</span>
            <ExternalLink size={16} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={16} />
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
