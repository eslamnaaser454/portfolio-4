export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'EdTech & Training' | 'Enterprise';
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  accentColor: string;
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge: string;
  type: 'training' | 'engineering' | 'education';
  highlights: string[];
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    badge?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  quote: string;
  highlight: string;
  rating: number;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Eslam Nasser",
    arabicName: "إسلام ناصر",
    title: "Software Engineer & DEPI Technical Trainer",
    headline: "Building Scalable Web Applications & Mentoring the Next Generation of Tech Leaders",
    shortBio: "Software Engineer with a 3.53 GPA (High Honors) from Arab Academy for Science, Technology & Maritime Transport (AASTMT) and official DEPI Technical Trainer. Passionate about Next.js, Node.js, clean architecture, and empowering developers.",
    longBio: "I am a Software Engineer and passionate Educator based in Egypt. Having graduated from AAST with high distinction (GPA: 3.53), I merge deep theoretical computer science foundations with hands-on modern software craftsmanship. As an official Technical Trainer at DEPI (Digital Egypt Pioneers Initiative - MCIT), I've had the privilege of instructing, mentoring, and accelerating the careers of 500+ aspiring developers. In parallel, I architect and build robust, high-performance web applications using Next.js, React, Node.js, and cloud-native databases.",
    location: "Alexandria / Cairo, Egypt",
    email: "eslamnaaser454@gmail.com",
    phone: "+20 100 000 0000",
    github: "https://github.com/eslamnaaser454",
    linkedin: "https://linkedin.com/in/eslam-nasser",
    availability: "Available for Software Engineering Roles & Tech Consultation",
    avatarUrl: "/avatar.jpg",
    gpa: "3.53 / 4.00",
    degree: "B.Sc. in Computer Science / Software Engineering",
    university: "Arab Academy for Science, Technology & Maritime Transport (AASTMT)",
    graduationStatus: "Graduated with High Honors (Distinction)",
  },

  stats: [
    { label: "AASTMT GPA", value: "3.53", suffix: "/4.0", description: "Graduated with High Honors" },
    { label: "DEPI Trainees Mentored", value: "500", suffix: "+", description: "Empowered across Egypt" },
    { label: "Live Training Hours", value: "400", suffix: "+", description: "Interactive workshops & coding" },
    { label: "Production & Lab Projects", value: "25", suffix: "+", description: "Full-stack & open source" },
  ],

  depiImpact: {
    title: "Digital Egypt Pioneers Initiative (DEPI) Journey",
    subtitle: "Empowering Egypt's Future Tech Workforce",
    description: "As an official Technical Trainer within the Ministry of Communications and Information Technology's DEPI initiative, I design, lead, and mentor cohort-based programs for top computer science talent across Egypt.",
    metrics: [
      { number: "500+", label: "Engineers Trained", icon: "Users" },
      { number: "40+", label: "Capstone Projects Supervised", icon: "FolderGit2" },
      { number: "98.5%", label: "Satisfaction Rate", icon: "Sparkles" },
      { number: "100%", label: "Hands-on Project Oriented", icon: "Code2" },
    ],
    curriculumTopics: [
      "Modern Web Development (HTML5, Semantic UI, CSS3, Modern JavaScript ES6+)",
      "React.js & Next.js App Router Architecture & Server Components",
      "Backend API Engineering with Node.js, Express & RESTful Best Practices",
      "Database Modeling & Optimization with PostgreSQL, MongoDB & Prisma",
      "State Management, Clean Code Principles & Design Patterns",
      "Git/GitHub Team Workflows, CI/CD, and Cloud Deployment",
      "Technical Interview Preparation & Software Engineering Problem Solving",
    ],
  },

  educationAndExperience: [
    {
      id: "depi-trainer",
      role: "Technical Trainer",
      organization: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
      location: "Egypt",
      period: "2024 - Present",
      badge: "Current Leadership",
      type: "training",
      highlights: [
        "Deliver comprehensive, hands-on training tracks in Full-Stack Web Development to cohorts of talented Egyptian youth.",
        "Conduct live coding sessions, architectural breakdowns, code reviews, and one-on-one technical mentoring.",
        "Supervise and evaluate 40+ end-to-end capstone web applications from initial system design to cloud deployment.",
        "Equip trainees with practical problem-solving skills, Agile practices, and technical interview confidence.",
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "TypeScript", "PostgreSQL", "Git", "REST APIs"],
    },
    {
      id: "software-engineer",
      role: "Full-Stack Software Engineer",
      organization: "Software Solutions & Independent Development",
      location: "Egypt",
      period: "2023 - Present",
      badge: "Engineering",
      type: "engineering",
      highlights: [
        "Architect and implement modern, responsive full-stack applications with Next.js App Router, TypeScript, and Tailwind/CSS.",
        "Design scalable RESTful APIs, authentication workflows (JWT, OAuth), and database schemas with PostgreSQL and MongoDB.",
        "Optimize Core Web Vitals, achieving sub-second load times via Server-Side Rendering (SSR) and asset compression.",
        "Implement robust testing, clean code architectures, and automated deployment pipelines.",
      ],
      technologies: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
    },
    {
      id: "aast-degree",
      role: "Bachelor of Science in Computer Science / Software Engineering",
      organization: "Arab Academy for Science, Technology & Maritime Transport (AASTMT)",
      location: "Alexandria, Egypt",
      period: "2020 - 2024",
      badge: "GPA: 3.53 / 4.00 (High Distinction)",
      type: "education",
      highlights: [
        "Graduated with High Honors (GPA: 3.53 / 4.00 - Excellent with Honors degree).",
        "Deep coursework: Data Structures, Algorithms Analysis, Software Engineering, Database Systems, Computer Networks, Operating Systems.",
        "Served as peer tutor and mentor for junior students in Object-Oriented Programming (OOP) and Web Technologies.",
        "Developed standout graduation capstone project demonstrating real-world full-stack architecture and algorithmic efficiency.",
      ],
      technologies: ["C++", "Data Structures", "Algorithms", "Software Architecture", "Database Systems", "OOP"],
    },
  ] as Experience[],

  skillCategories: [
    {
      title: "Frontend Engineering",
      icon: "Layout",
      description: "Crafting blazing-fast, accessible, and dynamic user interfaces with modern web standards.",
      skills: [
        { name: "Next.js (App Router, SSR, ISR)", level: 95, experience: "Advanced", badge: "Primary" },
        { name: "React.js (Hooks, Context, State)", level: 95, experience: "Advanced", badge: "Core" },
        { name: "TypeScript / JavaScript (ES6+)", level: 92, experience: "Advanced", badge: "Core" },
        { name: "Modern CSS / Glassmorphism / Tailwind", level: 94, experience: "Advanced" },
        { name: "State Management (Redux, Zustand)", level: 88, experience: "Proficient" },
        { name: "Responsive UI/UX & Web Accessibility", level: 92, experience: "Advanced" },
      ],
    },
    {
      title: "Backend & System Design",
      icon: "Server",
      description: "Building resilient server architectures, secure APIs, and scalable data layers.",
      skills: [
        { name: "Node.js & Express.js", level: 90, experience: "Advanced", badge: "Core" },
        { name: "RESTful API Design & Best Practices", level: 94, experience: "Advanced" },
        { name: "PostgreSQL & Prisma ORM", level: 88, experience: "Proficient", badge: "Database" },
        { name: "MongoDB & Mongoose", level: 86, experience: "Proficient" },
        { name: "Authentication & Security (JWT, OAuth)", level: 90, experience: "Advanced" },
        { name: "WebSockets & Real-time Communication", level: 84, experience: "Proficient" },
      ],
    },
    {
      title: "DevOps & Engineering Tools",
      icon: "Cpu",
      description: "Streamlining developer workflows, continuous integration, and cloud hosting.",
      skills: [
        { name: "Git & GitHub Team Workflows", level: 95, experience: "Advanced", badge: "Essential" },
        { name: "Docker & Containerization Basics", level: 80, experience: "Proficient" },
        { name: "Vercel & Cloud Deployment", level: 92, experience: "Advanced" },
        { name: "Postman API Testing & Automation", level: 90, experience: "Advanced" },
        { name: "CI/CD & GitHub Actions Basics", level: 82, experience: "Proficient" },
        { name: "Performance Optimization & SEO", level: 90, experience: "Advanced" },
      ],
    },
    {
      title: "Instruction & Technical Leadership",
      icon: "GraduationCap",
      description: "Proven expertise in curriculum delivery, student mentorship, and tech community empowerment.",
      skills: [
        { name: "DEPI Technical Training & Lecturing", level: 98, experience: "Expert", badge: "Signature" },
        { name: "Code Reviews & Clean Code Coaching", level: 94, experience: "Advanced" },
        { name: "Technical Curriculum Development", level: 92, experience: "Advanced" },
        { name: "Agile & Scrum Team Mentorship", level: 90, experience: "Advanced" },
        { name: "Technical Problem-Solving & DSA", level: 92, experience: "Advanced", badge: "AAST 3.53" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "edupioneer",
      title: "EduPioneer - Interactive LMS & Code Evaluator",
      category: "EdTech & Training",
      subtitle: "Comprehensive Cohort Learning Management System designed for tech initiatives.",
      description: "An advanced EdTech platform with real-time code editor, automated grading pipelines, interactive class timelines, and live student performance analytics.",
      longDescription: "Inspired by hands-on training at DEPI, EduPioneer resolves common bootcamp hurdles by providing real-time code execution, cohort assignment workflows, automated rubric assessments, and instant code feedback for trainees.",
      technologies: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "WebSockets", "Monaco Editor"],
      features: [
        "Embedded multi-language code runner with instant syntax and test-case evaluation",
        "Cohort progress tracker with visual analytics, attendance, and milestone alerts",
        "Interactive assignment grading board with line-by-line code review comments",
        "Role-based access control (Trainers, Trainees, Admins) with secure JWT sessions",
      ],
      metrics: "Used by 300+ students with 40% reduction in assignment grading turnaround time",
      githubUrl: "https://github.com/eslamnaaser454/edupioneer-lms",
      liveUrl: "https://edupioneer-demo.vercel.app",
      featured: true,
      accentColor: "#38bdf8",
      iconName: "GraduationCap",
    },
    {
      id: "omnistore",
      title: "OmniStore - Modern High-Performance E-Commerce",
      category: "Full-Stack",
      subtitle: "Enterprise-grade online shopping engine with real-time inventory and instant checkout.",
      description: "Full-stack e-commerce application featuring server-side rendered catalogs, instant search filtering, Redis cart caching, Stripe checkout, and vendor dashboard.",
      longDescription: "Engineered with Next.js App Router for optimal SEO and performance. Utilizes Redis for high-concurrency cart management and PostgreSQL for relational order transactions.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Stripe API", "CSS Modules"],
      features: [
        "Faceted dynamic search and filter with instant URL-state synchronization",
        "Optimistic UI updates and cart session persistence via Redis",
        "Automated invoice generation, email notifications, and webhook handlers",
        "Rich admin portal with sales charts, inventory reorder alerts, and customer insights",
      ],
      metrics: "99+ Google Lighthouse performance score & sub-200ms API response latency",
      githubUrl: "https://github.com/eslamnaaser454/omnistore-platform",
      liveUrl: "https://omnistore-demo.vercel.app",
      featured: true,
      accentColor: "#10b981",
      iconName: "ShoppingBag",
    },
    {
      id: "devpulse",
      title: "DevPulse - Real-time Developer Analytics & Hub",
      category: "Enterprise",
      subtitle: "Collaborative engineering dashboard for tracking sprint velocity, PRs, and team health.",
      description: "A centralized hub integrating GitHub webhooks and team communication, providing real-time code velocity charts, pair programming rooms, and sprint retrospectives.",
      longDescription: "DevPulse aggregates developer activity into actionable metrics, empowering tech leads and trainers to spot bottlenecks and celebrate team milestones.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Socket.io", "Chart.js", "Tailwind CSS"],
      features: [
        "Real-time WebSocket event streaming for instant repository activity updates",
        "Interactive code snippet collaboration canvas with live cursor synchronization",
        "Burndown and velocity visualization with custom exportable reports",
        "Automated health check monitors for microservices and API endpoints",
      ],
      metrics: "Supports 1,000+ simultaneous WebSocket connections with low memory footprint",
      githubUrl: "https://github.com/eslamnaaser454/devpulse-analytics",
      liveUrl: "https://devpulse-demo.vercel.app",
      featured: true,
      accentColor: "#818cf8",
      iconName: "Activity",
    },
    {
      id: "aast-scheduler",
      title: "AAST Smart Academic Advisor & GPA Planner",
      category: "Frontend",
      subtitle: "Algorithmic course schedule optimizer tailored for AAST students.",
      description: "A student-centric academic tool that generates conflict-free schedules, simulates cumulative GPA scenarios, and maps prerequisite course graphs.",
      longDescription: "Built by an AAST graduate with 3.53 GPA to solve real scheduling bottlenecks faced by university peers. Employs graph algorithms to compute optimal graduation roadmaps.",
      technologies: ["Next.js", "TypeScript", "Graph Algorithms", "HTML5 Canvas", "CSS Modules"],
      features: [
        "Automated conflict resolution generator generating top 5 viable semester timetables",
        "Interactive GPA simulator with grade target calculator and honors breakdown",
        "Prerequisite tree visualization showing required pathways to capstone",
        "One-click calendar export (.ics) and printable timetable generator",
      ],
      metrics: "Adopted by 1,200+ AAST engineering students during semester registration",
      githubUrl: "https://github.com/eslamnaaser454/aast-smart-scheduler",
      liveUrl: "https://aast-scheduler.vercel.app",
      featured: false,
      accentColor: "#f59e0b",
      iconName: "Compass",
    },
    {
      id: "taskflow-pro",
      title: "TaskFlow Pro - Agile Sprint & Kanban Suite",
      category: "Frontend",
      subtitle: "Fluid drag-and-drop task management tool with interactive board customization.",
      description: "A responsive productivity application featuring fluid drag & drop columns, markdown task descriptions, tag filtering, and time-tracking metrics.",
      longDescription: "Crafted to demonstrate clean state management architecture, accessibility standards, and fluid 60fps micro-interactions without third-party heavy bloat.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "CSS Modules", "LocalStorage & Cloud Sync"],
      features: [
        "Accessible drag-and-drop Kanban boards with smooth keyboard navigation",
        "Custom tag taxonomies, color themes, priority flags, and sub-task lists",
        "Sprint velocity graphs and completed tasks summary exporter",
        "Offline-first synchronization with persistent IndexedDB storage",
      ],
      metrics: "60 FPS animations on mobile & desktop with zero layout shifts",
      githubUrl: "https://github.com/eslamnaaser454/taskflow-pro",
      liveUrl: "https://taskflow-pro.vercel.app",
      featured: false,
      accentColor: "#ec4899",
      iconName: "Kanban",
    },
    {
      id: "codementor-ai",
      title: "CodeMentor AI - Code Reviewer & Assistant for Trainees",
      category: "EdTech & Training",
      subtitle: "AI-assisted mentor providing pedagogical code explanations and optimization tips.",
      description: "An intelligent companion for programming learners that analyzes code snippets, detects anti-patterns, explains time complexity, and suggests step-by-step refactoring.",
      longDescription: "Created specifically to assist DEPI trainees during self-study hours, providing tailored explanations in both English and Arabic with interactive code diffs.",
      technologies: ["Next.js", "Node.js", "OpenAI API", "Monaco Editor", "CSS Glassmorphism"],
      features: [
        "Multi-language code analysis with Big-O complexity breakdown",
        "Interactive side-by-side diff viewer highlighting suggested improvements",
        "Bilingual mentorship explanations tailored to student learning levels",
        "History log and bookmarking system for favorite architectural patterns",
      ],
      metrics: "Helped trainees resolve 5,000+ syntax and architectural queries",
      githubUrl: "https://github.com/eslamnaaser454/codementor-ai",
      liveUrl: "https://codementor-ai-demo.vercel.app",
      featured: false,
      accentColor: "#06b6d4",
      iconName: "Bot",
    },
  ] as Project[],

  testimonials: [
    {
      id: "t1",
      name: "Ahmed Mostafa",
      role: "DEPI Trainee & Junior Frontend Developer",
      organization: "DEPI Cohort Graduate",
      avatar: "AM",
      quote: "Eng. Eslam is one of the most dedicated trainers I have ever met. His ability to demystify complex React concepts, state management, and Next.js was the turning point in my transition from a student to getting hired in tech!",
      highlight: "Exceptional Clarity & Mentorship",
      rating: 5,
    },
    {
      id: "t2",
      name: "Nouran El-Sayed",
      role: "Full-Stack Developer",
      organization: "Tech Startup",
      avatar: "NE",
      quote: "Working with Eslam on full-stack web projects has been inspiring. He combines deep theoretical computer science fundamentals from AAST with top-tier modern engineering standards. His code quality is pristine.",
      highlight: "Clean Code & Software Architecture",
      rating: 5,
    },
    {
      id: "t3",
      name: "Omar Khaled",
      role: "DEPI Web Track Trainee",
      organization: "Software Engineering Student",
      avatar: "OK",
      quote: "The live coding workshops and code reviews conducted by Eng. Eslam gave our entire cohort the confidence to build full-scale web apps. He doesn't just teach syntax; he teaches you how to think like a seasoned engineer.",
      highlight: "Empowering Live Workshops",
      rating: 5,
    },
  ] as Testimonial[],

  contactInfo: {
    email: "eslamnaaser454@gmail.com",
    github: "https://github.com/eslamnaaser454",
    linkedin: "https://linkedin.com/in/eslam-nasser",
    location: "Alexandria / Cairo, Egypt",
    availabilityNotice: "Currently accepting new software engineering projects, speaking engagements, and training tracks.",
  },
};
