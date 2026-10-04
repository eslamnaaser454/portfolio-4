'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(8, 12, 20, 0.95)',
        padding: '4rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Top Footer Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1rem',
                }}
              >
                EN
              </div>
              <span
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {profile.name}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '320px' }}>
              Software Engineer & DEPI Technical Trainer. AASTMT Honors Graduate (GPA 3.53). Building high-impact web products and mentoring Egypt&apos;s tech pioneers.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#94a3b8' }}>
              <a href="#about" style={{ transition: 'color 0.2s' }}>About & Philosophy</a>
              <a href="#depi" style={{ transition: 'color 0.2s' }}>DEPI Training Impact</a>
              <a href="#experience" style={{ transition: 'color 0.2s' }}>Experience & Education</a>
              <a href="#skills" style={{ transition: 'color 0.2s' }}>Skills & Stack</a>
              <a href="#projects" style={{ transition: 'color 0.2s' }}>Projects & Systems</a>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              Connect & Reach Out
            </h4>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s',
                }}
              >
                <Github size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s',
                }}
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                title="Email"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  transition: 'all 0.2s',
                }}
              >
                <Mail size={18} />
              </a>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
              📍 Alexandria & Cairo, Egypt
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong>Eslam Nasser</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Built with Next.js 15, TypeScript & React 19</span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
