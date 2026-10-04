'use client';

import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Linkedin,
  Github,
  Check,
  Copy,
  Sparkles,
  Phone,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ContactSection() {
  const { profile, contactInfo } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Time Engineering Role',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const inquiryOptions = [
    'Full-Time Engineering Role',
    'DEPI / Technical Workshop',
    'Freelance / Web Application',
    'Tech Mentorship & Advisory',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Confetti Celebratory Burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#6366f1', '#10b981', '#f59e0b'],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 800);
  };

  return (
    <section id="contact" className="section bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let&apos;s Build Something Remarkable</h2>
          <p className="section-description">
            Whether you are looking to hire a Software Engineer, host a DEPI technical training workshop, or architect a modern web application, I&apos;d love to connect.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Quick Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: '24px',
                background: 'rgba(13, 20, 36, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                }}
              >
                Direct Contact Channels
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Feel free to email me directly or connect via professional platforms. I typically respond within 24 hours.
              </p>

              {/* Email Copier Box */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '16px',
                  padding: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Direct Email</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                      {profile.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-sm btn-outline"
                  style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem' }}
                >
                  {copiedEmail ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location & Social Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <MapPin size={18} color="#38bdf8" />
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                    {profile.location}
                  </span>
                </div>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Github size={18} color="#38bdf8" />
                    <span>GitHub Profile</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>github.com/eslamnaaser454 &rarr;</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Linkedin size={18} color="#38bdf8" />
                    <span>LinkedIn Network</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Connect &rarr;</span>
                </a>
              </div>
            </div>

            {/* Quick Note Box */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(56, 189, 248, 0.08) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                  Availability Status
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {contactInfo.availabilityNotice}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'rgba(16, 24, 44, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            {isSuccess ? (
              <div
                style={{
                  padding: '3rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                  }}
                >
                  <Check size={32} />
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>
                  Message Sent Successfully!
                </h3>

                <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: '420px', lineHeight: 1.6 }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>! Eng. Eslam Nasser will get back to you shortly at <strong>{formData.email}</strong>.
                </p>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: '', email: '', inquiryType: 'Full-Time Engineering Role', message: '' });
                  }}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                    Send a Direct Inquiry
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
                    Fill out the details below and I&apos;ll respond promptly.
                  </p>
                </div>

                {/* Inquiry Type Pills */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      marginBottom: '0.65rem',
                    }}
                  >
                    What are you looking to discuss?
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {inquiryOptions.map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setFormData({ ...formData, inquiryType: option })}
                        style={{
                          padding: '0.4rem 0.85rem',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          background:
                            formData.inquiryType === option
                              ? 'rgba(56, 189, 248, 0.18)'
                              : 'rgba(255, 255, 255, 0.04)',
                          color: formData.inquiryType === option ? '#38bdf8' : '#94a3b8',
                          border:
                            formData.inquiryType === option
                              ? '1px solid rgba(56, 189, 248, 0.4)'
                              : '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border 0.2s',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border 0.2s',
                      }}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Message / Project Scope *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, technical requirements, or cohort training needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          :global(.contact-grid) {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
