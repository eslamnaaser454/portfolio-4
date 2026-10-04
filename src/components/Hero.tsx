'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  FileText,
  GraduationCap,
  Sparkles,
  Users,
  Code2,
  Terminal,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { profile, stats } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background ambient lighting orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        className="animate-pulse-glow"
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Bio & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Availability / Status Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#34d399',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="status-dot" />
                <span>Available for Tech Roles & Training</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#38bdf8',
                }}
              >
                <Award size={14} />
                <span>AAST 3.53 GPA (High Honors)</span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.85rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.4rem',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                    color: '#94a3b8',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                  }}
                >
                  Hello, I&apos;m
                </span>
                <span
                  style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: 'sans-serif',
                  }}
                  title="Arabic Name"
                >
                  {profile.arabicName}
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  lineHeight: 1.08,
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem',
                }}
              >
                <span className="gradient-text">{profile.name}</span>
              </h1>

              {/* Dynamic Role Badges */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  flexWrap: 'wrap',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: 600,
                  color: '#e2e8f0',
                }}
              >
                <span
                  style={{
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                  }}
                >
                  Software Engineer
                </span>
                <span style={{ color: '#64748b' }}>•</span>
                <span
                  style={{
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: '#a5b4fc',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                  }}
                >
                  DEPI Technical Trainer
                </span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p
              style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                maxWidth: '620px',
              }}
            >
              Crafting high-performance web systems with <strong>Next.js</strong>, <strong>React</strong>, and <strong>Node.js</strong> while empowering <strong>500+ developers</strong> across Egypt through the Digital Egypt Pioneers Initiative (DEPI). Graduated from AASTMT with high honors (<strong>GPA: 3.53</strong>).
            </p>

            {/* Quick Skills chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'System Design', 'DEPI Mentorship'].map(
                (skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.3rem 0.7rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      color: '#cbd5e1',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    #{skill}
                  </span>
                )
              )}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary btn-lg">
                <FileText size={18} />
                <span>Download CV / Resume</span>
              </button>

              <a href="#depi" className="btn btn-outline" style={{ padding: '0.85rem 1.4rem' }}>
                <Users size={16} />
                <span>DEPI Impact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card Showcase */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
              }}
            >
              {/* Outer Glow Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '32px',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(99, 102, 241, 0.3), rgba(16, 185, 129, 0.2))',
                  filter: 'blur(20px)',
                  opacity: 0.8,
                  zIndex: 0,
                }}
                className="animate-pulse-glow"
              />

              {/* Image Container Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderRadius: '28px',
                  background: 'rgba(13, 20, 36, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Photo frame */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '380px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#0a0f1d',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Image
                    src={profile.avatarUrl}
                    alt={profile.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                    priority
                  />

                  {/* Gradient Overlay at bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40%',
                      background: 'linear-gradient(to top, rgba(8, 12, 20, 0.95) 0%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1.25rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: '#38bdf8',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Official DEPI Technical Trainer
                      </div>
                      <div
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        Eng. Eslam Nasser
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-info Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '1rem',
                    padding: '0.5rem 0.25rem 0.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(56, 189, 248, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38bdf8',
                      }}
                    >
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>University</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                        AASTMT (GPA 3.53)
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: '#a5b4fc',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    High Distinction
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: DEPI Impact (Top Left) */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-25px',
                  padding: '0.75rem 1rem',
                  borderRadius: '16px',
                  background: 'rgba(10, 15, 29, 0.92)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #0284c7, #38bdf8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Users size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>500+ Trainees</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>DEPI Tech Initiative</div>
                </div>
              </div>

              {/* Floating Badge 2: Academic Excellence (Bottom Right) */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '-25px',
                  padding: '0.75rem 1rem',
                  borderRadius: '16px',
                  background: 'rgba(10, 15, 29, 0.92)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 2,
                  animationDelay: '-3s',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #059669, #10b981)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>3.53 GPA</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>AAST Distinction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row Banner */}
        <div
          style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem 1.25rem',
                borderRadius: '18px',
                textAlign: 'center',
                background: 'rgba(13, 20, 36, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="gradient-text">{stat.value}</span>
                <span style={{ fontSize: '1.5rem', color: '#38bdf8', marginLeft: '2px' }}>
                  {stat.suffix}
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#e2e8f0',
                  marginBottom: '0.2rem',
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          :global(.hero-grid) {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
