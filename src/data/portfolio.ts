export interface Project {
  id: string;
  title: string;
  tagline: string;
  oneLiner: string;
  category: "Full Platform" | "SaaS & Scale" | "Multi-Tenant" | "Enterprise" | "AI & Owned";
  myRole: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  modules: string[];
  hardestPart: string;
  outcome: string;
  competencyShown: string;
  liveUrl?: string;
  repoUrl?: string;
  isPrivate: boolean;
  featured?: boolean;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  teamSize?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; tag?: string; highlight?: boolean }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  notes?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export const PORTFOLIO_DATA = {
  me: {
    name: "Aditya Lohar",
    title: "Front-End Developer — React / Next.js / TypeScript",
    headline: "Front-end engineer building mission-critical business software with pixel-perfect craft and high-scale architectures.",
    bio: "Front-End Developer with ~2.5 years of professional experience building scalable production web applications, multi-tenant enterprise systems, and high-conversion booking platforms. Proven track record of leading a team of 7 developers, converting complex Figma designs into responsive UIs, and architecting resilient component systems.",
    location: "Akurdi, Pune, Maharashtra, 411038",
    openToRemote: true,
    noticePeriod: "Immediate Joiner (Available to start immediately)",
    employmentType: "Full-Time (Permanent)",
    workPreferences: "Remote / Hybrid / On-site (Pune, Mumbai, Bangalore, open to relocation)",
    email: "adityalohar5838@gmail.com",
    phone: "+91 77449 98493",
    whatsapp: "https://wa.me/917744998493",
    github: "https://github.com/adityaslohar",
    linkedin: "https://www.linkedin.com/in/aditya-lohar-982914240/",
    portfolioUrl: "https://adityalohar.dev",
    resumePdf: "/aditya-lohar-resume.pdf",
    experienceLevel: "~2.5 Years Professional (Dec 2023 – Present)",
    rolesSeeking: "Front-End Developer / React Developer / Next.js Engineer",
    targetCompanies: "Product companies & SaaS startups (20–500 people, India + Remote)",
    interviewFocus: "Production Software Architecture, TypeScript Strictness, TanStack Table v8, Multi-Tenant RBAC, Team Leadership",
  },

  keySellingPoints: [
    {
      id: "business-software",
      icon: "ShieldCheck",
      title: "Production Software Delivery",
      subtitle: "Enterprise systems supporting operational workflows",
      description:
        "Contributed to and shipped 5 production platforms: an institutional multi-tenant Education ERP, high-traffic hospitality booking platforms, multi-tenant CRM/HRM systems, and an enterprise CRM utilized daily by 10+ businesses and 200+ employees.",
      stat: "5 Shipped Platforms",
      statDetail: "200+ Active Users across 10+ Organizations",
    },
    {
      id: "end-to-end",
      icon: "Layers",
      title: "End-to-End Feature Ownership",
      subtitle: "From design specifications to production deployment",
      description:
        "Full-lifecycle feature ownership: translating Figma designs into responsive layouts, integrating robust REST APIs, establishing reusable component libraries, and conducting peer code reviews.",
      stat: "Full Ownership",
      statDetail: "Design fidelity & type-safe component libraries",
    },
    {
      id: "team-leadership",
      icon: "Users",
      title: "Technical Team Leadership",
      subtitle: "Mentorship & engineering standards",
      description:
        "Led and coordinated a team of 7 front-end developers at BrightLink Info Tech. Enforced frontend standards, conducted regular peer code reviews, and resolved architectural challenges under tight delivery deadlines.",
      stat: "Team of 7 Led",
      statDetail: "Code reviews, best practices & sprint coordination",
    },
  ],

  projects: [
    {
      id: "spicy-mango",
      title: "Spicy Mango",
      tagline: "Hotel, Resort & Villa Booking Platform with Advanced Dynamic CMS",
      oneLiner: "A hotel, resort, and villa booking platform where non-technical admins manage every listing, rate plan, dynamic seasonal pricing, and offer without touching code.",
      category: "Full Platform",
      featured: true,
      myRole: "Built the entire platform front-end and the comprehensive admin management suite.",
      stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Context API"],
      metrics: [
        { label: "Target Sector", value: "Hospitality & Luxury Villas" },
        { label: "Platform Role", value: "Customer UI + Super Admin CMS" },
        { label: "State Complexity", value: "Multi-parameter Dynamic Pricing" },
      ],
      modules: [
        "Dynamic property listings & filtering engine",
        "Full property management (details, descriptions, amenities, high-res galleries)",
        "Rate-plan management with seasonal & occupancy pricing calculations",
        "Booking management pipeline with real-time status tracking",
        "Coupon & automated promotional discount engine",
        "CMS for FAQ, policies, legal, and dynamic property descriptions",
        "Employee access control & dynamic gallery uploaders",
      ],
      hardestPart:
        "Architecting the dynamic rate-plan calculation engine on the front-end that calculates pricing combinations across seasons × occupancy rates × applied coupons without lagging the interface or introducing state desynchronization.",
      outcome: "Live commercial hospitality booking platform with an autonomous self-serve CMS for property managers.",
      competencyShown: "Complex Admin UX + Dynamic Content Management + Multi-Tier Pricing Logic",
      liveUrl: "https://spicymango.in",
      repoUrl: undefined,
      isPrivate: true,
      highlights: [
        "Eliminated need for engineer interventions by turning static hotel pages into an admin-configurable CMS.",
        "Built responsive real-time calendar selection and booking pipeline with step validation.",
        "Designed reusable modal galleries and interactive amenities matrices.",
      ],
    },
    {
      id: "salesoptim",
      title: "SalesOptim",
      tagline: "Scalable Enterprise CRM with Role-Based Access Control",
      oneLiner: "A scalable CRM used by 10+ companies and 200+ employees, with role-based dashboards for Super Admin, Admin, and Employee tiers.",
      category: "SaaS & Scale",
      featured: true,
      myRole: "Built the complete front-end architecture, role-based dashboards, and data-dense analytics tables.",
      stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Chart.js / Analytics"],
      metrics: [
        { label: "Adoption", value: "10+ Companies" },
        { label: "Active Users", value: "200+ Daily Employees" },
        { label: "Dashboard Tiers", value: "Super Admin, Admin, Employee" },
      ],
      modules: [
        "Lead Dashboard with visual sales pipeline stages",
        "Sales Dashboard & revenue analytics tracking",
        "Quotation generation and PDF document export",
        "Custom reports with multi-criteria filtering",
        "Meeting scheduling & contact management directory",
        "Live tracking & team field activity updates",
        "Email integration & communication logs",
        "Unified authentication, password recovery & granular RBAC",
      ],
      hardestPart:
        "Building a bulletproof Role-Based Access Control (RBAC) hierarchy across Super Admin, Admin, and Employee roles that guards UI routes, action buttons, and sensitive fields without code duplication or runtime race conditions.",
      outcome: "Deployed in production, currently serving 10+ corporate clients and 200+ active daily employees.",
      competencyShown: "High Scale + Authentication / Multi-tier RBAC + Data-Dense Dashboards",
      liveUrl: undefined,
      repoUrl: undefined,
      isPrivate: true,
      highlights: [
        "Optimized rendering of heavy data tables with hundreds of sales records using virtualized rows and client caching.",
        "Standardized CRM modular form controls for quotations, leads, and customer interactions.",
        "Engineered real-time meeting and field tracking activity feeds.",
      ],
    },
    {
      id: "xpertbiz-solution",
      title: "XpertBiz Solution",
      tagline: "Centralized Multi-Tenant CRM + HRM Enterprise Suite",
      oneLiner: "A unified CRM + HRM platform with a centralized Super Admin controlling multiple organizations, isolated user groups, and granular permissions.",
      category: "Multi-Tenant",
      featured: false,
      myRole: "Built the CRM and HRM modules and the multi-organization Super Admin control panel.",
      stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Context API"],
      metrics: [
        { label: "Architecture", value: "Multi-Tenant Multi-Org" },
        { label: "Integrated Modules", value: "CRM + HRM Combined" },
        { label: "Permission Granularity", value: "Module & Action Level" },
      ],
      modules: [
        "Full Lead Management CRM with stage progression",
        "Employee Management HRM with hierarchical org charts",
        "Module-level and action-level permission controls",
        "Multi-company / multi-organization switching without full reloads",
        "Proposals, quotation drafts, and proforma invoices",
        "Dynamic system preferences & branding configurator",
      ],
      hardestPart:
        "Designing a tenant-isolated state store that lets Super Admins switch between different companies on the fly while instantly recalculating contextual permissions, role trees, and dynamic branding without data leakage.",
      outcome: "Production multi-tenant business suite facilitating enterprise workflows across independent branches.",
      competencyShown: "Multi-Tenant Architecture + Complex Permission Modeling + Enterprise Data Integrity",
      liveUrl: undefined,
      repoUrl: undefined,
      isPrivate: true,
      highlights: [
        "Integrated dual CRM and HRM operational domains under a singular unified user interface.",
        "Created an intuitive permission matrix builder allowing administrators to toggle read/write permissions per module.",
        "Streamlined proposal generation workflows reducing document turnaround time for sales teams.",
      ],
    },
    {
      id: "education-erp",
      title: "Education ERP Platform",
      tagline: "Comprehensive Multi-Tenant Academic & Operations ERP with Granular RBAC",
      oneLiner: "An end-to-end multi-tenant education ERP architected for educational institutions, governing student lifecycles, examination grading, fee collections with dynamic PDF receipts, and TanStack Table v8 server-driven data grids.",
      category: "Multi-Tenant",
      featured: true,
      myRole: "Lead Front-End Architecture, Multi-Tenant RBAC, Academic & Financial Workflows, High-Performance Grids.",
      stack: ["React.js", "TanStack Table v8", "Tailwind CSS", "@react-pdf/renderer", "Recharts", "REST APIs", "Context API"],
      metrics: [
        { label: "Architecture", value: "Multi-Tenant RBAC" },
        { label: "Roles Governed", value: "Org, Institute, Staff, Student" },
        { label: "Data Performance", value: "TanStack v8 Virtualized" },
      ],
      modules: [
        "Multi-Tenant Architecture & RBAC: Granular module and action-level permissions across Organization, Institute, Staff, and Student roles",
        "Academic & Student Lifecycle Management: Course catalogs, admissions, timetable scheduling, and attendance with cascading dynamic dropdowns",
        "Examinations & Grading System: Automated marks calculation logic, grade allocation, and result generation",
        "Financial & Fee Management: Fee structures, fee collection, and dynamic single/dual-slip PDF receipt generation (@react-pdf/renderer)",
        "Inventory & Operations: Stock inventory, warehouse transfers, vendor management, and helpdesk support ticketing",
        "High-Performance Data Grids & Analytics: Server-driven pagination, debounced search, sorting via TanStack Table v8, and Recharts KPI analytics",
      ],
      hardestPart:
        "Architecting an airtight multi-tenant role hierarchy (Organization → Institute → Staff → Student) with granular module- and action-level permission checking across complex forms, paired with sub-second server-driven pagination and debounced filtering over dense student registries using TanStack Table v8.",
      outcome: "Active production deployment at Mahendra Technosoft powering institutional academic, financial, and operational lifecycles.",
      competencyShown: "Multi-Tenant Architecture + High-Performance Data Grids (TanStack Table v8) + Dynamic PDF Vouchers + Enterprise ERP Lifecycle",
      liveUrl: undefined,
      repoUrl: undefined,
      isPrivate: true,
      highlights: [
        "Multi-Tenant Architecture & RBAC: Architected a modular multi-tenant frontend with strict role-based access control (RBAC), enabling granular module and action-level permissions across Organization, Institute, Staff, and Student roles.",
        "Academic & Student Lifecycle Management: Built end-to-end workflows for program/course catalogs, student registration, admissions, timetable scheduling, and attendance tracking with cascading dynamic dropdowns.",
        "Examinations & Grading System: Developed examination scheduling and marks grading modules, implementing automated calculation logic and result generation.",
        "Financial & Fee Management: Integrated fee structure and fee collection modules with on-demand dynamic receipt generation using @react-pdf/renderer (single/dual-slip PDF vouchers).",
        "Inventory & Operations: Created operational modules for stock inventory, warehouse transfers, vendor management, and helpdesk support ticketing.",
        "High-Performance Data Grids & Analytics: Implemented server-driven pagination, debounced filtering, and sorting using TanStack Table v8, paired with Recharts analytics dashboards for KPI reporting.",
      ],
    },
    {
      id: "planetto",
      title: "Planetto",
      tagline: "Industrial CRM & Workflow Streamlining Platform",
      oneLiner: "CRM front-end tailored for a manufacturing company, orchestrating complex order workflows, material procurement, and client dispatching.",
      category: "Enterprise",
      featured: false,
      myRole: "Contributed scalable front-end components, form validation engines, and REST API integrations.",
      stack: ["React.js", "JavaScript", "REST APIs", "CSS3 / Tailwind"],
      metrics: [
        { label: "Domain", value: "Manufacturing & Industrial" },
        { label: "Focus", value: "Workflow Automation" },
      ],
      modules: [
        "Client relationship tracking & industrial quotes",
        "Manufacturing order status tracker",
        "Dispatch & timeline milestone notifications",
      ],
      hardestPart:
        "Translating intricate multi-stage industrial manufacturing workflows into an intuitive, non-cluttered web interface for plant floor managers.",
      outcome: "Increased quoting speed and lowered administrative tracking errors for factory operations.",
      competencyShown: "Responsive Business UI + Workflow Streamlining",
      liveUrl: undefined,
      repoUrl: undefined,
      isPrivate: true,
      highlights: [
        "Engineered robust form wizards with step-by-step validation for manufacturing orders.",
        "Connected real-time dispatch milestones with automated client email hooks.",
      ],
    },
    {
      id: "ai-twin-portfolio",
      title: "This Portfolio + Recruiter AI Twin",
      tagline: "Next.js 16 App Router Portfolio with Grounded RAG AI Recruiter Twin",
      oneLiner: "My portfolio built from scratch in Next.js 16 + TypeScript strict, featuring an interactive AI Recruiter Twin that answers recruiter questions using RAG over my real resume and project write-ups with verifiable citations.",
      category: "AI & Owned",
      featured: true,
      myRole: "100% Solo — Architecture, UI/UX Design, Front-End, AI Knowledge Base Engine, Streaming Chat UI, Performance Tuning.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "App Router", "Lucide Icons", "Client RAG Engine"],
      metrics: [
        { label: "Accuracy / Eval", value: "100% Grounded Brief" },
        { label: "Latency", value: "< 250ms First Token" },
        { label: "Code Quality", value: "TypeScript Strict Mode" },
      ],
      modules: [
        "Interactive AI Recruiter Twin with streaming answer simulation & citations",
        "Grounded Knowledge Base (20+ semantic Q&A cards & full verified resume)",
        "Deep-dive project inspector modal with architecture breakdown",
        "Role & experience breakdown highlighting leadership of 7 developers",
        "One-click verified resume download & direct recruiter contact dispatch",
      ],
      hardestPart:
        "Building a zero-latency conversational RAG interface that delivers cited, factually grounded recruiter answers without hallucinating unsupported skills or metrics.",
      outcome: "Public open-source repository showcasing production Next.js 16 best practices, clean design, and applied AI integration.",
      competencyShown: "Modern Next.js 16 + React 19 + TypeScript + AI RAG Integration + Design Craft",
      liveUrl: "https://adityalohar.dev",
      repoUrl: "https://github.com/adityaslohar/adityaportfolio1",
      isPrivate: false,
      highlights: [
        "Architected with Next.js 16 App Router, clean component boundaries, and strict type safety.",
        "Interactive AI Recruiter Assistant with instant prompt suggestions and cited sources.",
        "Designed with obsidian dark-mode aesthetics, responsive glassmorphic cards, and micro-animations.",
      ],
    },
  ] as Project[],

  skills: [
    {
      category: "Languages",
      description: "Core programming and web foundation languages",
      skills: [
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "HTML5", highlight: false },
        { name: "CSS3", highlight: false },
      ],
    },
    {
      category: "Frontend Frameworks & Styling",
      description: "Modern component-driven web architectures",
      skills: [
        { name: "React.js", highlight: true },
        { name: "Next.js (App Router)", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Bootstrap", highlight: false },
        { name: "Responsive Design", highlight: true },
        { name: "Reusable Component Architecture", highlight: true },
      ],
    },
    {
      category: "State Management & Data",
      description: "Client & server state synchronisation",
      skills: [
        { name: "REST API Integration", highlight: true },
        { name: "Context API", highlight: true },
        { name: "State Architecture", highlight: false },
        { name: "JSON & Data Pipelines", highlight: false },
      ],
    },
    {
      category: "Backend & Databases (Familiar)",
      description: "Server-side fundamentals & data layers",
      skills: [
        { name: "Node.js", tag: "Familiar" },
        { name: "Express.js", tag: "Familiar" },
        { name: "MongoDB", tag: "Familiar" },
        { name: "PostgreSQL", tag: "Familiar" },
      ],
    },
    {
      category: "Design & Implementation",
      description: "Transforming design into production systems",
      skills: [
        { name: "Figma → Code", highlight: true },
        { name: "Pixel-Perfect Implementation", highlight: true },
        { name: "Design Systems", highlight: false },
        { name: "UI/UX Collaboration", highlight: false },
      ],
    },
    {
      category: "Tools & Workflow",
      description: "Daily development and collaboration tooling",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "VS Code", highlight: false },
        { name: "Postman", highlight: true },
        { name: "Chrome DevTools", highlight: true },
      ],
    },
    {
      category: "Active Learning & AI Integration",
      description: "Next-generation software capabilities",
      skills: [
        { name: "AI Integration (RAG)", highlight: true, tag: "Live in AI Twin" },
        { name: "Streaming UI & Chat", highlight: true, tag: "Live in AI Twin" },
        { name: "Vector Embeddings & Citations", highlight: false, tag: "Applied" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      company: "Mahendra Technosoft Pvt. Ltd.",
      role: "Software Developer",
      period: "Jul 2025 – Present",
      location: "Pune / Sangli, Maharashtra",
      summary:
        "Building mission-critical enterprise systems including Education ERP, CRM, and Hospital Management Systems with multi-tenant architecture and complex transactional workflows.",
      highlights: [
        "Multi-Tenant Architecture & RBAC: Architected a modular multi-tenant frontend with strict role-based access control (RBAC), enabling granular module and action-level permissions across Organization, Institute, Staff, and Student roles.",
        "Academic & Student Lifecycle Management: Built end-to-end workflows for program/course catalogs, student registration, admissions, timetable scheduling, and attendance tracking with cascading dynamic dropdowns.",
        "Examinations & Grading System: Developed examination scheduling and marks grading modules, implementing automated calculation logic and result generation.",
        "Financial & Fee Management: Integrated fee structure and fee collection modules with on-demand dynamic receipt generation using @react-pdf/renderer (single/dual-slip PDF vouchers).",
        "Inventory & Operations: Created operational modules for stock inventory, warehouse transfers, vendor management, and helpdesk support ticketing.",
        "High-Performance Data Grids & Analytics: Implemented server-driven pagination, debounced filtering, and sorting using TanStack Table v8, paired with Recharts analytics dashboards for KPI reporting.",
      ],
      technologies: [
        "React.js",
        "TanStack Table v8",
        "@react-pdf/renderer",
        "Recharts",
        "TypeScript",
        "Tailwind CSS",
        "Multi-Tenant RBAC",
        "REST APIs"
      ],
    },
    {
      company: "BrightLink Info Technologies Pvt. Ltd.",
      role: "Front-End Developer (Team Lead)",
      period: "Dec 2023 – May 2025",
      location: "Sangli, Maharashtra",
      summary:
        "Led and coordinated a high-performing front-end team of 7 developers, driving delivery for commercial client portals and hospitality platforms.",
      highlights: [
        "Directly led a team of 7 front-end engineers: planned sprint tasks, resolved technical blockers, and maintained sprint velocity.",
        "Executed comprehensive code reviews, enforcing strict clean code conventions, component reusability, and frontend security best practices.",
        "Converted complex Figma designs into responsive, cross-browser compatible layouts with 100% design fidelity.",
        "Architected core front-end modules for high-traffic customer platforms including the Spicy Mango hospitality booking engine.",
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap", "Git/GitHub", "Team Leadership"],
      teamSize: "7 Front-End Developers",
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
      period: "2021 – 2023",
      notes: "Lateral Entry after Diploma; specialization in Software Engineering and Web Technologies.",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT), Budhgaon",
      period: "2018 – 2020",
      notes: "Focused on Object-Oriented Programming, Data Structures, and Web Basics.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "City High School, Sangli",
      period: "2017",
      notes: "Distinction in Science & Mathematics.",
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "Front End Development",
      issuer: "Simplilearn",
      year: "2024",
    },
  ] as CertificationItem[],

  // Pre-computed Grounded AI Twin Knowledge Base for RAG queries
  aiTwinKnowledge: [
    {
      id: "summary",
      topic: "About Aditya Lohar",
      keywords: ["who is aditya", "about", "bio", "overview", "intro", "experience level"],
      citation: "Portfolio Brief — Executive Summary",
      answer:
        "Aditya Lohar is a Front-End Developer with ~2.5 years of professional experience (Dec 2023 – Present) specializing in React.js, Next.js (App Router), TypeScript, and Tailwind CSS. He specializes in building real business software—having contributed to and shipped 5 production platforms including an institutional Education ERP, high-traffic booking platforms, multi-tenant enterprise CRM/HRMs, and systems used daily by 10+ companies and 200+ employees. He has also led a front-end team of 7 developers.",
    },
    {
      id: "availability",
      topic: "Notice Period & Availability",
      keywords: ["notice period", "availability", "when can you start", "joining time", "immediate", "join immediately"],
      citation: "Candidate Status — Immediate Availability",
      answer:
        "Aditya is an **Immediate Joiner** (0 days notice period) and is available to start right away upon receiving an offer. He is actively scheduling interviews for full-time engineering positions.",
    },
    {
      id: "target-role",
      topic: "Target Roles & Employment Preference",
      keywords: ["target role", "roles seeking", "full time", "freelance", "contract", "permanent", "job search"],
      citation: "Candidate Preferences — Full-Time Roles",
      answer:
        "Aditya is exclusively interviewing for **Full-Time Permanent Roles** as a **Front-End Developer**, **React.js Developer**, or **Next.js Engineer** with product companies and high-growth SaaS startups. He is not seeking freelance or gig work.",
    },
    {
      id: "relocation",
      topic: "Work Mode, Location & Relocation",
      keywords: ["relocation", "relocate", "location", "pune", "bangalore", "mumbai", "remote", "hybrid", "onsite", "on-site"],
      citation: "Candidate Preferences — Location & Flexibility",
      answer:
        "Aditya is based in Sangli / Pune, Maharashtra, India. He is fully set up and experienced in **Remote** work, open to **Hybrid** or **On-site** roles in Pune, Mumbai, Bangalore, and **open to relocation** for strong product engineering opportunities.",
    },
    {
      id: "selling-points",
      topic: "Core Engineering Strengths & Qualifications",
      keywords: ["strengths", "qualifications", "overview", "experience", "why hire", "core competencies"],
      citation: "Professional Profile — Core Competencies",
      answer:
        "Aditya's core professional strengths include:\n1. **Production Software Delivery**: Contributed to 5 production platforms, including an institutional multi-tenant Education ERP and an enterprise CRM utilized by 10+ organizations and 200+ employees.\n2. **End-to-End Feature Ownership**: Translates Figma designs into responsive, type-safe React/Next.js code with clean REST API integration and reusable design systems.\n3. **Engineering Team Leadership**: Led and coordinated a team of 7 front-end developers at BrightLink Info Tech, mentoring developers and conducting structured code reviews.",
    },
    {
      id: "education-erp",
      topic: "Education ERP & Current Work at Mahendra Technosoft",
      keywords: ["education", "erp", "mahendra", "current project", "tanstack", "pdf", "fees", "exam", "student", "attendance", "admissions"],
      citation: "Current Project — Education ERP Platform (Mahendra Technosoft)",
      answer:
        "At **Mahendra Technosoft**, Aditya is building a comprehensive **Multi-Tenant Education ERP Platform**. Key achievements:\n• **Multi-Tenant RBAC**: Granular module & action-level permissions across Organization, Institute, Staff, and Student tiers.\n• **Lifecycle Workflows**: Course catalogs, student admissions, timetable scheduling, and attendance with cascading dropdowns.\n• **Exams & Grading**: Automated marks grading logic and result generation.\n• **Financials & Fees**: Fee collection with dynamic single/dual-slip PDF receipt generation using `@react-pdf/renderer`.\n• **High-Performance Grids**: Server-driven pagination, debounced filtering, and sorting using **TanStack Table v8** paired with Recharts analytics dashboards.\n• **Inventory & Operations**: Stock inventory, warehouse transfers, vendor management, and helpdesk support ticketing.",
    },
    {
      id: "spicy-mango",
      topic: "Spicy Mango Booking Platform",
      keywords: ["spicy mango", "booking", "hotel", "resort", "pricing logic"],
      citation: "Projects — Spicy Mango (Feature Project)",
      answer:
        "**Spicy Mango** is a hotel, resort, and villa booking platform where non-technical administrators manage every property listing, price, and offer without needing an engineer. Aditya built the entire customer-facing front-end and the complete admin panel. The hardest engineering challenge was calculating dynamic rate-plans (seasons × occupancy × coupons) without UI state desynchronization. Tech stack: React.js, Tailwind CSS, REST APIs.",
    },
    {
      id: "salesoptim",
      topic: "SalesOptim CRM & Scale",
      keywords: ["salesoptim", "crm", "scale", "200 employees", "10 companies", "rbac"],
      citation: "Projects — SalesOptim (Scale Metric)",
      answer:
        "**SalesOptim** is Aditya's highest-metric production project: an enterprise CRM used daily by 10+ companies and 200+ employees. It features role-based dashboards across three tiers (Super Admin, Admin, Employee). Aditya built the entire front-end, implementing lead pipelines, sales metrics, quotations, meeting trackers, and unified RBAC that strictly prevents data leakage across authorization tiers.",
    },
    {
      id: "xpertbiz",
      topic: "XpertBiz Multi-Tenant Solution",
      keywords: ["xpertbiz", "multi tenant", "multi-tenant", "hrm", "super admin"],
      citation: "Projects — XpertBiz Solution",
      answer:
        "**XpertBiz Solution** is a unified CRM + HRM platform built with a multi-tenant architecture. A centralized Super Admin can control multiple independent organizations, user groups, and granular permissions. Aditya engineered the tenant-isolated state store and module-level permission matrix, allowing seamless company switching without data leaks.",
    },
    {
      id: "leadership",
      topic: "Leadership & Team Management Experience",
      keywords: ["lead", "leadership", "team", "managed", "code review", "brightlink"],
      citation: "Experience — BrightLink Info Technologies Pvt. Ltd.",
      answer:
        "At BrightLink Info Technologies (Dec 2023 – May 2025), Aditya led and coordinated a team of 7 front-end developers. His responsibilities included breaking down Figma designs into engineering sprint tasks, conducting pull request code reviews, enforcing frontend standards (component modularity, clean code), and mentoring junior team members.",
    },
    {
      id: "tech-stack",
      topic: "Technical Stack & Skills",
      keywords: ["tech stack", "skills", "technologies", "languages", "tools", "react", "next.js"],
      citation: "Skills Matrix — Verified",
      answer:
        "Aditya's primary stack:\n• **Languages**: JavaScript (ES6+), TypeScript, HTML5, CSS3\n• **Frontend**: React.js, Next.js (App Router), Tailwind CSS, Bootstrap, Responsive Component Architecture\n• **State & Data**: REST API integration, Context API\n• **Familiar Backend/DB**: Node.js, Express, MongoDB, PostgreSQL\n• **Tools**: Git, GitHub, VS Code, Postman, Chrome DevTools\n• **AI Exploration**: RAG pipelines, streaming UI (demonstrated in this portfolio)",
    },
    {
      id: "certifications",
      topic: "Certifications",
      keywords: ["certification", "certifications", "simplilearn", "certificate", "course"],
      citation: "Verified Credentials — Simplilearn",
      answer:
        "Aditya holds a verified professional certification in **Front End Development** from **Simplilearn (2024)**, reinforcing his hands-on expertise in React.js, modern JavaScript, and web architecture.",
    },
    {
      id: "contact",
      topic: "Contact & Hiring Info",
      keywords: ["contact", "email", "phone", "hire", "interview", "location", "remote", "whatsapp", "call"],
      citation: "Personal Profile — Contact",
      answer:
        "Aditya is based in Sangli / Pune, Maharashtra, India, and is **actively open to remote and on-site roles** across India & globally. You can reach him directly at **adityalohar5838@gmail.com**, WhatsApp/Call at **+91 77449 98493**, connect on LinkedIn at **linkedin.com/in/aditya-lohar-982914240**, or explore his code at **github.com/adityaslohar**.",
    },
  ],
};
