'use client';

import React from 'react';
import {
  Users,
  Award,
  FolderGit2,
  Sparkles,
  Code2,
  CheckCircle2,
  BookOpen,
  Terminal,
  Cpu,
  MonitorCheck,
  Zap,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function DepiTrainerSection() {
  const { depiImpact } = PORTFOLIO_DATA;

  const methodologySteps = [
    {
      icon: Terminal,
      title: 'Interactive Live Coding & System Design',
      description:
        'Lectures designed around real-time interactive development rather than static slides. Trainees build production-ready components together.',
      tag: 'Hands-on',
      color: '#38bdf8',
    },
    {
      icon: FolderGit2,
      title: 'Enterprise Capstone Supervision',
      description:
        'Supervised 40+ full-stack capstone projects from schema design and API contracts to automated CI/CD deployment on cloud services.',
      tag: '40+ Projects',
      color: '#818cf8',
    },
    {
      icon: MonitorCheck,
      title: 'Rigorous Code Review & Clean Architecture',
      description:
        'Line-by-line GitHub PR reviews teaching SOLID principles, modern React hooks patterns, type safety, and database indexing.',
      tag: 'Quality First',
      color: '#34d399',
    },
    {
      icon: Zap,
      title: 'Career Acceleration & Mock Interviews',
      description:
        'Equipping Egyptian developers with algorithmic problem-solving confidence, system design breakdowns, and technical interview readiness.',
      tag: 'Job-Ready',
      color: '#fbbf24',
    },
  ];

  return (
    <section
      id="depi"
      className="section"
      style={{
        background: 'linear-gradient(180deg, rgba(8, 12, 20, 0) 0%, rgba(13, 20, 36, 0.7) 50%, rgba(8, 12, 20, 0) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div
            className="section-tag"
            style={{
              background: 'rgba(99, 102, 241, 0.12)',
              borderColor: 'rgba(99, 102, 241, 0.3)',
              color: '#a5b4fc',
            }}
          >
            <Users size={14} />
            <span>Digital Egypt Pioneers Initiative (DEPI)</span>
          </div>
          <h2 className="section-title">
            Empowering Egypt&apos;s Next Generation of Tech Leaders
          </h2>
          <p className="section-description">
            Serving as an official Technical Trainer under the Ministry of Communications and Information Technology (MCIT), accelerating developer careers across Egypt.
          </p>
        </div>

        {/* Highlight Metrics Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {depiImpact.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem 1.5rem',
                borderRadius: '20px',
                textAlign: 'center',
                background: 'rgba(16, 24, 44, 0.8)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.2rem, 3vw, 2.8rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                }}
              >
                <span className="gradient-text">{metric.number}</span>
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Section: Training Philosophy & Methodology */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="depi-content-grid"
        >
          {/* Left: Methodology Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <Sparkles size={20} color="#38bdf8" />
              <span>Training Methodology & Impact</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {methodologySteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '1.35rem 1.5rem',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.2rem',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: step.color,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.35rem',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                        }}
                      >
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                          {step.title}
                        </h4>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.6rem',
                            borderRadius: '9999px',
                            background: `${step.color}15`,
                            color: step.color,
                            border: `1px solid ${step.color}30`,
                          }}
                        >
                          {step.tag}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Curriculum Topics & Certificate Callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '24px',
                background: 'rgba(13, 20, 36, 0.9)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                  }}
                >
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                    Curriculum & Tech Tracks Delivered
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Full-Stack Web Development Track (DEPI - MCIT)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {depiImpact.curriculumTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9rem',
                      color: '#cbd5e1',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="#38bdf8"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trainer Quote / Mission Statement */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#a5b4fc',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.6rem',
                }}
              >
                Trainer Philosophy
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: '#f1f5f9',
                  lineHeight: 1.65,
                  marginBottom: '1rem',
                }}
              >
                &ldquo;Teaching code isn&apos;t just about explaining syntax; it&apos;s about cultivating an engineering mindset, resilience in debugging, and the confidence to architect real solutions that solve real problems.&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: '#fff',
                  }}
                >
                  EN
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                    Eng. Eslam Nasser
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    Software Engineer & DEPI Technical Trainer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          :global(.depi-content-grid) {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
