'use client';

import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { profile, educationAndExperience, skillCategories, projects } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(5, 8, 15, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '24px',
          background: '#0d1424',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          color: '#f8fafc',
        }}
        onClick={(e) => e.stopPropagation()}
        id="printable-resume"
      >
        {/* Top Floating Control Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          className="no-print"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.12)',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
              }}
            >
              Curriculum Vitae (CV) Preview
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-sm btn-primary"
              style={{ padding: '0.45rem 0.95rem' }}
            >
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Close CV"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* CV Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: '#ffffff',
                }}
              >
                {profile.name}
              </h1>
              <div
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  marginTop: '0.2rem',
                }}
              >
                Software Engineer & DEPI Technical Trainer
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: '#34d399',
                  fontWeight: 600,
                  marginTop: '0.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Award size={15} />
                <span>AASTMT Graduate • GPA 3.53 / 4.00 (High Honors)</span>
              </div>
            </div>

            {/* Contact links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                fontSize: '0.85rem',
                color: '#94a3b8',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="#38bdf8" />
                <a href={`mailto:${profile.email}`} style={{ color: '#e2e8f0' }}>
                  {profile.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} color="#38bdf8" />
                <span>{profile.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Github size={14} color="#38bdf8" />
                <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0' }}>
                  github.com/eslamnaaser454
                </a>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.92rem',
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginTop: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {profile.longBio}
          </p>
        </div>

        {/* CV Section: Education */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: '#38bdf8',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.4rem',
              borderBottom: '1px solid rgba(56, 189, 248, 0.25)',
            }}
          >
            <GraduationCap size={18} />
            <span>Education</span>
          </h3>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '1.2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginBottom: '0.35rem',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                {profile.degree}
              </h4>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>2020 – 2024</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#38bdf8', marginBottom: '0.4rem' }}>
              {profile.university}
            </div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '0.6rem',
              }}
            >
              Cumulative GPA: 3.53 / 4.00 (High Honors / Distinction)
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>
              Comprehensive coursework in Data Structures, Algorithms, Software Architecture, Database Systems, Computer Networks, and Distributed Systems.
            </p>
          </div>
        </div>

        {/* CV Section: Experience & DEPI */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: '#38bdf8',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.4rem',
              borderBottom: '1px solid rgba(56, 189, 248, 0.25)',
            }}
          >
            <Briefcase size={18} />
            <span>Professional Experience & Training</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {educationAndExperience
              .filter((e) => e.type !== 'education')
              .map((exp) => (
                <div
                  key={exp.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '12px',
                    padding: '1.2rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                      {exp.role}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#818cf8', marginBottom: '0.65rem' }}>
                    {exp.organization} • {exp.location}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {exp.highlights.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.88rem',
                          color: '#cbd5e1',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2 size={14} color="#38bdf8" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CV Section: Skills Summary */}
        <div>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: '#38bdf8',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.4rem',
              borderBottom: '1px solid rgba(56, 189, 248, 0.25)',
            }}
          >
            <Code size={18} />
            <span>Technical Proficiencies</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
            }}
          >
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px',
                  padding: '1rem',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.45rem' }}>
                  {cat.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {cat.skills.map((s) => s.name.split('(')[0].trim()).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume,
          #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
