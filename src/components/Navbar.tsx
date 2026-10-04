'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenResume, onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'depi', 'experience', 'skills', 'projects', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'DEPI Impact', href: '#depi', id: 'depi', badge: 'Trainer' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2rem)',
        maxWidth: '1240px',
        zIndex: 50,
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '0.75rem 1.4rem' : '1rem 1.75rem',
          background: isScrolled
            ? 'rgba(10, 15, 29, 0.85)'
            : 'rgba(13, 20, 36, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          boxShadow: isScrolled
            ? '0 12px 30px rgba(0, 0, 0, 0.45), 0 0 1px rgba(56, 189, 248, 0.2)'
            : '0 8px 24px rgba(0, 0, 0, 0.25)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.1rem',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.35)',
            }}
          >
            EN
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#f8fafc',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}
            >
              Eslam Nasser
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                color: '#38bdf8',
                fontWeight: 500,
                letterSpacing: '0.04em',
              }}
            >
              DEPI Trainer • SE
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          className="desktop-nav-links"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: isActive ? '#38bdf8' : '#cbd5e1',
                  background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {link.label}
                {link.badge && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      padding: '0.15rem 0.4rem',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.25)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Quick Search / Command trigger */}
          <button
            onClick={onOpenCommandPalette}
            title="Search & Quick Actions (Ctrl+K)"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              borderRadius: '9999px',
              padding: '0.45rem 0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              fontSize: '0.8rem',
              transition: 'all 0.2s',
            }}
            className="search-button-nav"
          >
            <Terminal size={14} color="#38bdf8" />
            <span style={{ display: 'none' }} className="search-text-lg">
              Quick Nav
            </span>
            <kbd
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '0.15rem 0.35rem',
                borderRadius: '4px',
                fontSize: '0.65rem',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              ⌘K
            </kbd>
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="btn btn-sm btn-secondary"
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              display: 'none',
            }}
            id="nav-resume-btn"
          >
            <FileText size={14} />
            <span>CV</span>
          </button>

          {/* Contact / Hire Me CTA */}
          <a
            href="#contact"
            className="btn btn-sm btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.84rem',
              display: 'inline-flex',
            }}
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              cursor: 'pointer',
              padding: '0.3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-hamburger-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '0.6rem',
            background: 'rgba(10, 15, 29, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '1.25rem',
            padding: '1.2rem',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                color: activeSection === link.id ? '#38bdf8' : '#e2e8f0',
                background: activeSection === link.id ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                fontSize: '0.95rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'rgba(99, 102, 241, 0.25)',
                    color: '#a5b4fc',
                  }}
                >
                  {link.badge}
                </span>
              )}
            </a>
          ))}

          <div
            style={{
              height: '1px',
              background: 'rgba(255, 255, 255, 0.1)',
              margin: '0.5rem 0',
            }}
          />

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <FileText size={16} />
            <span>View Full Resume (CV)</span>
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          :global(.desktop-nav-links) {
            display: flex !important;
          }
          :global(.mobile-hamburger-btn) {
            display: none !important;
          }
          :global(#nav-resume-btn) {
            display: inline-flex !important;
          }
          :global(.search-text-lg) {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
}
