'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react';
import { PORTFOLIO_DATA, Experience } from '@/data/portfolioData';

export default function EducationAndExperience() {
  const { educationAndExperience } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'training' | 'engineering' | 'education'>('all');

  const filteredItems =
    filter === 'all'
      ? educationAndExperience
      : educationAndExperience.filter((item) => item.type === filter);

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'training':
        return {
          color: '#818cf8',
          bg: 'rgba(99, 102, 241, 0.12)',
          border: 'rgba(99, 102, 241, 0.3)',
          icon: Briefcase,
          label: 'Technical Training',
        };
      case 'engineering':
        return {
          color: '#38bdf8',
          bg: 'rgba(56, 189, 248, 0.12)',
          border: 'rgba(56, 189, 248, 0.3)',
          icon: Briefcase,
          label: 'Software Engineering',
        };
      case 'education':
        return {
          color: '#34d399',
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.3)',
          icon: GraduationCap,
          label: 'Academic Education',
        };
      default:
        return {
          color: '#38bdf8',
          bg: 'rgba(56, 189, 248, 0.12)',
          border: 'rgba(56, 189, 248, 0.3)',
          icon: Briefcase,
          label: 'Career',
        };
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calendar size={14} />
            <span>Timeline & Journey</span>
          </div>
          <h2 className="section-title">Education & Professional Experience</h2>
          <p className="section-description">
            A track record of academic excellence at AASTMT (GPA 3.53) combined with software engineering and DEPI technical leadership.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          {[
            { id: 'all', label: 'Complete Timeline' },
            { id: 'training', label: 'DEPI Training' },
            { id: 'engineering', label: 'Software Engineering' },
            { id: 'education', label: 'AAST Education (3.53 GPA)' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                background:
                  filter === item.id
                    ? 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: filter === item.id ? '#ffffff' : '#94a3b8',
                border:
                  filter === item.id
                    ? '1px solid rgba(56, 189, 248, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow:
                  filter === item.id ? '0 4px 15px rgba(2, 132, 199, 0.3)' : 'none',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {/* Vertical central connector line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, #38bdf8 0%, #6366f1 50%, #10b981 100%)',
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {filteredItems.map((item, index) => {
            const style = getTypeStyle(item.type);
            const Icon = style.icon;

            return (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Timeline Icon Node */}
                <div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '18px',
                    background: 'rgba(13, 20, 36, 0.95)',
                    border: `2px solid ${style.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: style.color,
                    boxShadow: `0 0 20px ${style.color}35`,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} />
                </div>

                {/* Timeline Card Content */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: '2rem',
                    borderRadius: '24px',
                    background: 'rgba(16, 24, 44, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Top Bar inside Card */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          flexWrap: 'wrap',
                          marginBottom: '0.25rem',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.65rem',
                            borderRadius: '9999px',
                            background: style.bg,
                            color: style.color,
                            border: `1px solid ${style.border}`,
                          }}
                        >
                          {style.label}
                        </span>

                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '0.2rem 0.65rem',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#e2e8f0',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          marginTop: '0.35rem',
                        }}
                      >
                        {item.role}
                      </h3>

                      <div
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: style.color,
                          marginTop: '0.15rem',
                        }}
                      >
                        {item.organization}
                      </div>
                    </div>

                    {/* Period & Location Badge */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.25rem',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#cbd5e1',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <Calendar size={13} color="#38bdf8" />
                        {item.period}
                      </span>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.78rem',
                          color: '#94a3b8',
                        }}
                      >
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      marginTop: '1.25rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.92rem',
                          color: '#cbd5e1',
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color={style.color}
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Pills */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                        Key Focus:
                      </span>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.78rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#94a3b8',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
