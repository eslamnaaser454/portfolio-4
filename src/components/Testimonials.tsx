'use client';

import React from 'react';
import { MessageSquare, Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Testimonials() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section id="testimonials" className="section bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div
            className="section-tag"
            style={{
              background: 'rgba(245, 158, 11, 0.12)',
              borderColor: 'rgba(245, 158, 11, 0.3)',
              color: '#fbbf24',
            }}
          >
            <MessageSquare size={14} />
            <span>Trainee & Peer Feedback</span>
          </div>
          <h2 className="section-title">Endorsements & Impact</h2>
          <p className="section-description">
            What DEPI trainees and engineering collaborators say about Eng. Eslam&apos;s technical training, architecture guidance, and code quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(16, 24, 44, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
              }}
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  <Quote size={24} color="#38bdf8" style={{ opacity: 0.4 }} />
                </div>

                {/* Highlight Badge */}
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#38bdf8',
                    marginBottom: '0.75rem',
                  }}
                >
                  &ldquo;{t.highlight}&rdquo;
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#cbd5e1',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    marginBottom: '1.75rem',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>

                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {t.role} • <span style={{ color: '#38bdf8' }}>{t.organization}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
