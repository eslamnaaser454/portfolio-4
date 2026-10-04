'use client';

import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  ArrowUpRight,
  Code2,
  BarChart,
  Bot,
  GraduationCap,
  ShoppingBag,
  Activity,
  Compass,
  Kanban,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'EdTech & Training', 'Frontend', 'Enterprise'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return GraduationCap;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Activity':
        return Activity;
      case 'Compass':
        return Compass;
      case 'Kanban':
        return Kanban;
      case 'Bot':
        return Bot;
      default:
        return Code2;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Software</span>
          </div>
          <h2 className="section-title">Production Apps & Systems</h2>
          <p className="section-description">
            A curated selection of full-stack platforms, developer tools, and educational systems built with Next.js, Node.js, and TypeScript.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                background:
                  selectedCategory === cat
                    ? 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === cat ? '#ffffff' : '#94a3b8',
                border:
                  selectedCategory === cat
                    ? '1px solid rgba(56, 189, 248, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow:
                  selectedCategory === cat ? '0 4px 15px rgba(2, 132, 199, 0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => {
            const ProjectIcon = getProjectIcon(project.iconName);

            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  background: 'rgba(13, 20, 36, 0.85)',
                }}
              >
                <div>
                  {/* Visual Mockup Header Card */}
                  <div
                    style={{
                      height: '180px',
                      background: `linear-gradient(135deg, ${project.accentColor}18 0%, rgba(13, 20, 36, 0.95) 100%)`,
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '1.25rem 1.5rem',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Ambient Glow */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '140px',
                        height: '140px',
                        background: project.accentColor,
                        filter: 'blur(50px)',
                        opacity: 0.25,
                        borderRadius: '50%',
                      }}
                    />

                    {/* Window Controls Mock */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                      </div>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          background: 'rgba(0, 0, 0, 0.4)',
                          color: project.accentColor,
                          border: `1px solid ${project.accentColor}40`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* App Visual Header Icon + Title */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: 'rgba(10, 15, 29, 0.85)',
                          border: `1px solid ${project.accentColor}50`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: project.accentColor,
                          boxShadow: `0 0 15px ${project.accentColor}30`,
                        }}
                      >
                        <ProjectIcon size={24} />
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: '0.75rem',
                            color: '#94a3b8',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          // Next.js &bull; TypeScript
                        </div>
                        <div
                          style={{
                            fontSize: '1.15rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            lineHeight: 1.2,
                          }}
                        >
                          {project.title.split('-')[0]}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#94a3b8',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Impact Metric Callout if available */}
                    {project.metrics && (
                      <div
                        style={{
                          padding: '0.55rem 0.85rem',
                          borderRadius: '8px',
                          background: 'rgba(56, 189, 248, 0.08)',
                          border: '1px solid rgba(56, 189, 248, 0.2)',
                          fontSize: '0.78rem',
                          color: '#38bdf8',
                          fontWeight: 600,
                          marginBottom: '1.25rem',
                        }}
                      >
                        ⚡ {project.metrics}
                      </div>
                    )}

                    {/* Technologies Pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#cbd5e1',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.45rem',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            color: '#94a3b8',
                          }}
                        >
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(10, 15, 29, 0.5)',
                  }}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#38bdf8',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                    }}
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#cbd5e1',
                        transition: 'all 0.2s',
                      }}
                    >
                      <Github size={16} />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(56, 189, 248, 0.15)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38bdf8',
                        transition: 'all 0.2s',
                      }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
