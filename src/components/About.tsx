'use client';

import React, { useState } from 'react';
import {
  Code,
  GraduationCap,
  Users,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu,
  Compass,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function About() {
  const { profile } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'engineering' | 'training' | 'academic'>('all');

  const pillars = [
    {
      id: 'engineering',
      title: 'Full-Stack Software Engineering',
      icon: Code,
      badge: 'Engineering Craft',
      color: '#38bdf8',
      description:
        'Architecting resilient, production-ready web applications using Next.js 15, React 19, TypeScript, and Node.js. Committed to scalable modular architectures, performant SSR, and type-safe systems.',
      keyPoints: [
        'Advanced Next.js App Router, Server Components & Micro-frontends',
        'Scalable REST & GraphQL APIs with Node.js, Express & Prisma',
        'Performance optimization, Core Web Vitals & Clean Code (SOLID)',
      ],
    },
    {
      id: 'training',
      title: 'DEPI Technical Trainer & Mentor',
      icon: Users,
      badge: 'MCIT Initiative',
      color: '#818cf8',
      description:
        'Leading official Full-Stack web development training tracks within the Digital Egypt Pioneers Initiative (DEPI). Empowered 500+ trainees to bridge the gap from fundamental coding to industry employment.',
      keyPoints: [
        'Cohort-based live technical lectures, code reviews & architecture clinics',
        'Supervising 40+ end-to-end capstone web applications from inception to deployment',
        'Mentoring in modern Git workflows, Agile methodologies & technical interviews',
      ],
    },
    {
      id: 'academic',
      title: 'Academic Excellence @ AASTMT',
      icon: GraduationCap,
      badge: 'GPA 3.53 / High Honors',
      color: '#10b981',
      description:
        'Graduated with High Honors (GPA: 3.53 / 4.00) from the Arab Academy for Science, Technology & Maritime Transport. Solid theoretical foundation in Data Structures, Algorithms, Distributed Systems, and Database Theory.',
      keyPoints: [
        'Ranked among top percentage of engineering & CS graduates',
        'Algorithmic problem-solving, Graph theory, OOP, and low-level principles',
        'Active academic peer tutor in C++, Object-Oriented Design & Web Systems',
      ],
    },
  ];

  const filteredPillars =
    activeTab === 'all' ? pillars : pillars.filter((p) => p.id === activeTab);

  return (
    <section id="about" className="section bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Behind The Code</span>
          </div>
          <h2 className="section-title">Bridging Deep Theory & Scalable Web Craftsmanship</h2>
          <p className="section-description">
            Combining rigorous academic foundations from AASTMT with real-world production engineering and passionate tech education.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {[
            { id: 'all', label: 'All Dimensions' },
            { id: 'engineering', label: 'Software Engineering' },
            { id: 'training', label: 'DEPI Trainer' },
            { id: 'academic', label: 'AAST Academic (3.53 GPA)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                background:
                  activeTab === tab.id
                    ? 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === tab.id ? '#ffffff' : '#94a3b8',
                border:
                  activeTab === tab.id
                    ? '1px solid rgba(56, 189, 248, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow:
                  activeTab === tab.id ? '0 4px 15px rgba(2, 132, 199, 0.3)' : 'none',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Pillars Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: `rgba(${
                          pillar.id === 'engineering'
                            ? '56, 189, 248'
                            : pillar.id === 'training'
                            ? '99, 102, 241'
                            : '16, 185, 129'
                        }, 0.15)`,
                        border: `1px solid ${pillar.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: pillar.color,
                        boxShadow: `0 0 20px ${pillar.color}25`,
                      }}
                    >
                      <IconComponent size={26} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.35rem 0.8rem',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: pillar.color,
                      }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      marginBottom: '0.85rem',
                      color: '#ffffff',
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#94a3b8',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Key Points List */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                  }}
                >
                  {pillar.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.85rem',
                        color: '#cbd5e1',
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color={pillar.color}
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic & Professional Bio Summary Callout */}
        <div
          className="glass-card"
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.5rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(13, 20, 36, 0.9) 0%, rgba(20, 31, 54, 0.7) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#38bdf8',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem',
              }}
            >
              Academic Background & Standing
            </div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Arab Academy for Science, Technology & Maritime Transport
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.65 }}>
              Graduated with a <strong>3.53 / 4.00 GPA</strong>, placing in the honors tier. Built a strong foundation in computer systems, algorithms, distributed architecture, and software design patterns that directly inform everyday engineering choices.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              background: 'rgba(0, 0, 0, 0.25)',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Degree Status</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#34d399' }}>
                Graduated with Honors
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Cumulative GPA</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#38bdf8' }}>
                3.53 <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>/ 4.00</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>DEPI Role</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#818cf8' }}>
                Technical Trainer
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Trainees Impact</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fbbf24' }}>
                500+ <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
