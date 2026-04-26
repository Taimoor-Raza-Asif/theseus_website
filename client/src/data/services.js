import { Cloud, Brain, Code2, TrendingUp, ShieldCheck, BarChart3, Database, Workflow, Globe } from 'lucide-react';

export const serviceThumbnails = {
  1: {
    // Cloud Migration — AWS + Azure logos side by side
    bgClass: 'bg-gradient-to-br from-[#EEF6FF] to-[#F0F8FF] dark:from-[#060e1a] dark:to-[#071428]',
    renderLogos: true,
    logos: [
      { src: '/aws_logo.png', alt: 'AWS', h: 'h-10' },
      { src: '/Azure_logo.jpg', alt: 'Azure', h: 'h-12' },
    ],
    label: 'Cloud Platforms',
    labelColor: '#0078D4',
  },
  2: {
    // AI & ML — brain glow, dark
    bgClass: 'bg-gradient-to-br from-[#1A0A2E] to-[#2D1055]',
    renderLogos: false,
    iconColor: '#a78bfa',
    label: 'AI · ML · LLM',
    labelColor: '#c4b5fd',
    glowColor: '#7c3aed',
  },
  3: {
    // CI/CD — Bamboo blue on light
    bgClass: 'bg-gradient-to-br from-[#E6F0FF] to-[#EBF5EB] dark:from-[#00122a] dark:to-[#001a0f]',
    renderLogos: false,
    iconColor: '#0052CC',
    label: 'Bamboo · GitHub · SonarQube',
    labelColor: '#0052CC',
    glowColor: '#2684FF',
  },
  4: {
    // Data Engineering — Snowflake blue
    bgClass: 'bg-gradient-to-br from-[#EAF7FD] to-[#E8F4FB] dark:from-[#061420] dark:to-[#041018]',
    renderLogos: false,
    iconColor: '#29B5E8',
    label: 'Snowflake · BigQuery · Redshift',
    labelColor: '#29B5E8',
    glowColor: '#29B5E8',
  },
  5: {
    // Security — red/dark shield
    bgClass: 'bg-gradient-to-br from-[#1C0608] to-[#2D0A10]',
    renderLogos: false,
    iconColor: '#f87171',
    label: 'Security · Compliance',
    labelColor: '#fca5a5',
    glowColor: '#ef4444',
  },
  6: {
    // Software Architecture — code purple
    bgClass: 'bg-gradient-to-br from-[#F5EEF8] to-[#EDE9FE] dark:from-[#130820] dark:to-[#0f061a]',
    renderLogos: false,
    iconColor: '#8b5cf6',
    label: 'Architecture · Strategy',
    labelColor: '#7c3aed',
    glowColor: '#8b5cf6',
  },
  7: {
    // FinTech — teal/green finance
    bgClass: 'bg-gradient-to-br from-[#E8FAF5] to-[#F0FDF4] dark:from-[#001a12] dark:to-[#001208]',
    renderLogos: false,
    iconColor: '#10b981',
    label: 'FinTech · Investment Tech',
    labelColor: '#059669',
    glowColor: '#10b981',
  },
  8: {
    // BI & Reporting — PowerBI gold/yellow
    bgClass: 'bg-gradient-to-br from-[#FFFBE6] to-[#FFF8D6] dark:from-[#1a1000] dark:to-[#120b00]',
    renderLogos: false,
    iconColor: '#F2C94C',
    label: 'PowerBI · Splunk · Dashboards',
    labelColor: '#d97706',
    glowColor: '#f59e0b',
  },
  9: {
    // Global Markets — NVIDIA for AI + globe teal
    bgClass: 'bg-gradient-to-br from-[#E8F5F5] to-[#F0FFFE] dark:from-[#001214] dark:to-[#000e10]',
    renderLogos: true,
    logos: [
      { src: '/nvidia_logo.png', alt: 'NVIDIA', h: 'h-9' },
    ],
    label: 'Emerging Markets · Global AI',
    labelColor: '#0d9488',
    glowColor: '#14b8a6',
  },
};

export const services = [
  {
    id: 1,
    title: "Cloud Migration & Infrastructure",
    description: "Seamless migration to AWS, Azure, and GCP with right-sized, auto-scaling, cost-optimized architectures.",
    icon: Cloud,
    color: "from-blue-500/15 to-cyan-500/10",
    accent: "text-blue-400 dark:text-blue-300",
    bg: "bg-blue-500/10",
    iconColor: '#3b82f6',
  },
  {
    id: 2,
    title: "AI & Machine Learning Solutions",
    description: "Custom AI models, LLM integrations, voice-to-voice systems, and ML pipelines that drive real business outcomes.",
    icon: Brain,
    color: "from-violet-500/15 to-fuchsia-500/10",
    accent: "text-violet-400 dark:text-violet-300",
    bg: "bg-violet-500/10",
    iconColor: '#8b5cf6',
  },
  {
    id: 3,
    title: "CI/CD & DevOps Automation",
    description: "Pipeline templates, Bamboo/GitHub Actions automation, infrastructure-as-code, and SonarQube integration.",
    icon: Workflow,
    color: "from-orange-500/15 to-amber-500/10",
    accent: "text-orange-400 dark:text-orange-300",
    bg: "bg-orange-500/10",
    iconColor: '#f97316',
  },
  {
    id: 4,
    title: "Data Engineering & Analytics",
    description: "Data pipeline architecture, Snowflake/Redshift/BigQuery implementation, and real-time dashboards with Splunk and PowerBI.",
    icon: Database,
    color: "from-sky-500/15 to-blue-500/10",
    accent: "text-sky-400 dark:text-sky-300",
    bg: "bg-sky-500/10",
    iconColor: '#0ea5e9',
  },
  {
    id: 5,
    title: "Security & Compliance",
    description: "Fine-grained access controls, encryption at rest and in transit, automated security assessments, and regulatory compliance.",
    icon: ShieldCheck,
    color: "from-red-500/15 to-rose-500/10",
    accent: "text-red-400 dark:text-red-300",
    bg: "bg-red-500/10",
    iconColor: '#ef4444',
  },
  {
    id: 6,
    title: "Software Architecture & Strategy",
    description: "Cross-team alignment, front-end standardization, tech stack evaluation, and scalable system design for enterprise clients.",
    icon: Code2,
    color: "from-teal-500/15 to-emerald-500/10",
    accent: "text-teal-400 dark:text-teal-300",
    bg: "bg-teal-500/10",
    iconColor: '#14b8a6',
  },
  {
    id: 7,
    title: "FinTech & Investment Tech",
    description: "Portfolio analytics, fixed-income platforms, credit scoring models, and regulatory reporting for financial institutions.",
    icon: TrendingUp,
    color: "from-green-500/15 to-teal-500/10",
    accent: "text-green-400 dark:text-green-300",
    bg: "bg-green-500/10",
    iconColor: '#10b981',
  },
  {
    id: 8,
    title: "Business Intelligence & Reporting",
    description: "Interactive dashboards, auto-refresh PowerBI reports, customizable widgets, and data visualization UIs.",
    icon: BarChart3,
    color: "from-amber-500/15 to-yellow-500/10",
    accent: "text-amber-400 dark:text-amber-300",
    bg: "bg-amber-500/10",
    iconColor: '#f59e0b',
  },
  {
    id: 9,
    title: "Global & Emerging Market Solutions",
    description: "Inclusive technology for underserved markets — from alternative credit scoring to mobile-first financial infrastructure.",
    icon: Globe,
    color: "from-rose-500/15 to-pink-500/10",
    accent: "text-rose-400 dark:text-rose-300",
    bg: "bg-rose-500/10",
    iconColor: '#14b8a6',
  },
];
