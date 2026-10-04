'use client';

import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Cpu':
        return Cpu;
      case 'GraduationCap':
        return GraduationCap;
      default:
        return Code2;
    }
  };

  const activeCategory = skillCategories[selectedCategory];

  return (
    <section id="skills" className="section bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of full-stack engineering proficiencies, tools, and technical leadership disciplines.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            const isSelected = selectedCategory === idx;

            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(idx)}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  borderRadius: '16px',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(79, 70, 229, 0.25) 100%)'
                    : 'rgba(13, 20, 36, 0.6)',
                  borderColor: isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isSelected ? '0 0 20px rgba(56, 189, 248, 0.2)' : 'none',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: isSelected
                      ? 'linear-gradient(135deg, #0284c7, #4f46e5)'
                      : 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: isSelected ? '#ffffff' : '#e2e8f0',
                    }}
                  >
                    {cat.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {cat.skills.length} core proficiencies
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skills Display */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'rgba(16, 24, 44, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Header of Active Category */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>
                {activeCategory.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                {activeCategory.description}
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.8rem',
                borderRadius: '9999px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                color: '#38bdf8',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              <Sparkles size={14} />
              <span>Production & Instruction Tested</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'all 0.2s',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                      {skill.name}
                    </span>
                    {skill.badge && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.5rem',
                          borderRadius: '6px',
                          background: 'rgba(99, 102, 241, 0.2)',
                          color: '#a5b4fc',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                        }}
                      >
                        {skill.badge}
                      </span>
                    )}
                  </div>

                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    width: '100%',
                    height: '7px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      borderRadius: '9999px',
                      background: 'linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)',
                      boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
                      transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                  }}
                >
                  <span>Proficiency: {skill.experience}</span>
                  <span style={{ color: '#34d399' }}>Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
