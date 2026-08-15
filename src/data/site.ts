import type { LucideIcon } from "lucide-react";
import {
  Workflow,
  Bot,
  Database,
  Braces,
  Cloud,
  Boxes,
  Layers,
  Terminal,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 *  EDIT THIS FILE to update the site. It is the single source of      *
 *  content for the whole portfolio. Add a new project by copying an   *
 *  object into the `projects` array below.                            *
 * ------------------------------------------------------------------ */

export const profile = {
  name: "Arslan Faisal",
  role: "AI Automation Developer",
  tagline: "I turn manual, repetitive work into AI systems that run themselves.",
  email: "im.arslanfaisal@gmail.com",
  links: {
    github: "https://github.com/github4rslan",
    linkedin: "https://linkedin.com/in/arslan-faisal-953214228",
    resume: "", // drop a hosted CV link here if you want a Resume button
  },
  // Short intro used in the hero.
  intro:
    "I design AI automation pipelines that pull data, reason over it with LLMs, and deliver the result with no manual steps. Then I build the apps and dashboards that run around them.",
  // Longer About paragraphs.
  about: [
    "I build AI automation. I take a manual, repetitive process and turn it into a workflow that runs on its own, reliably, at volume, and keeps working when nobody is watching.",
    "My pipelines live in n8n and Make, with OpenAI and Anthropic Claude as the reasoning layer. They run on schedules and webhooks with retry logic, cost control and clean execution logging. Around each one I build the React and Node apps, dashboards and integrations that make it usable.",
    "Over about two years on Fiverr and Upwork I have shipped more than 35 projects with a 4.9 out of 5 rating across 50 orders, taking each from the first requirement through to deployment and support.",
  ],
  stats: [
    { value: "35+", label: "Projects shipped" },
    { value: "4.9/5", label: "Client rating" },
    { value: "50", label: "Orders delivered" },
    { value: "24/7", label: "Automations running" },
  ],
};

export type NavItem = { label: string; href: string };
export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

/* ---------------------------- Skills ------------------------------ */

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Automation",
    icon: Workflow,
    items: [
      "n8n (custom nodes, error handling)",
      "Make (Make.com)",
      "Webhook & API orchestration",
      "GitHub Actions cron pipelines",
      "Retry logic & rate limiting",
      "Cost control",
      "Monitoring & execution logging",
    ],
  },
  {
    title: "AI Integration",
    icon: Bot,
    items: [
      "OpenAI API (GPT-4o, 4o-mini)",
      "Anthropic Claude API",
      "LangChain",
      "RAG pipelines",
      "Vector search (Atlas)",
      "Prompt engineering",
      "MCP tools",
      "Model fallback logic",
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: [
      "React 18+",
      "Next.js (App Router, SSR, ISR)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit / Zustand",
    ],
  },
  {
    title: "Backend",
    icon: Braces,
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST API design",
      "JWT / RBAC",
      "MVC architecture",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "MongoDB (Mongoose, aggregation)",
      "PostgreSQL (Knex, migrations)",
      "Supabase",
      "MySQL",
      "Redis / Upstash",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    items: [
      "AWS (EC2, S3, CDN)",
      "Docker",
      "GitHub Actions CI/CD",
      "Vercel & Render",
      "Nginx, SSL, firewall",
    ],
  },
];

/* ------------------------- Tech marquee --------------------------- */

export const techMarquee: string[] = [
  "n8n",
  "Make",
  "OpenAI",
  "Anthropic Claude",
  "LangChain",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "Vector Search",
  "AWS",
  "Docker",
  "Stripe",
  "Vercel",
  "GitHub Actions",
];

/* ---------------------------- Projects ---------------------------- */

export type Project = {
  name: string;
  category: "Automation" | "AI SaaS" | "Web App";
  featured?: boolean;
  blurb: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  icon: LucideIcon;
  // Optional screenshot. Put the file in `public/projects/` and reference it
  // from the site root, e.g. image: "/projects/edway.png". A 16:9 (landscape)
  // screenshot looks best. If omitted, the card shows the icon instead.
  image?: string;
};

export const projects: Project[] = [
  {
    name: "The Kingdom Edit",
    category: "Automation",
    featured: true,
    icon: Sparkles,
    // image: "/projects/kingdom-edit.png",  // <- add a screenshot like this
    blurb:
      "A twice weekly AI newsletter that researches, writes and sends itself with zero manual steps.",
    highlights: [
      "Python pipeline pulls about 2,000 articles from Google News RSS across 30 topics, then dedupes, scores by relevance and recency, and filters off brand stories out.",
      "Human in the loop curation writes a shortlist to a Google Sheet, then GPT-4o writes the edition across 8 weighted sections, and auto selects if nobody curates in time.",
      "Ships email safe HTML through Brevo on two GitHub Actions crons, with a Next.js landing page capturing subscribers into the same list.",
    ],
    tech: ["Python", "OpenAI GPT-4o", "Google Sheets API", "Brevo", "GitHub Actions", "Next.js"],
    liveUrl: "https://thekingdomedit.com",
  },
  {
    name: "Shopify Content & Localization Automation",
    category: "Automation",
    featured: true,
    icon: Workflow,
    blurb:
      "An n8n system that writes and publishes SEO product content across regional storefronts.",
    highlights: [
      "n8n workflows on the Shopify Admin API generate SEO titles, descriptions, meta text, image alt text and multilingual translations at scale.",
      "Approval steps before publishing, retry mechanisms and error handling for failed API calls, plus execution logging and notifications.",
      "Prompt engineering tuned to cut API cost while holding output quality, with every workflow documented for handover.",
    ],
    tech: ["n8n", "Shopify Admin API", "OpenAI", "Anthropic Claude", "PostgreSQL"],
  },
  {
    name: "AI Support & Review Automation",
    category: "Automation",
    featured: true,
    icon: Bot,
    blurb:
      "Inbound tickets and reviews triaged, answered and escalated automatically.",
    highlights: [
      "n8n workflows classify emails and tickets by intent and urgency, then draft contextual AI replies for common inquiries.",
      "Sentiment analysis on reviews flags negatives for escalation, auto creates tickets, and syncs with HubSpot CRM.",
      "Slack and email alerts on critical cases, with performance and AI usage logged to reporting dashboards.",
    ],
    tech: ["n8n", "OpenAI", "Claude", "Gmail API", "Slack API", "HubSpot"],
  },
  {
    name: "Humora AI SaaS",
    category: "AI SaaS",
    featured: true,
    icon: Sparkles,
    blurb:
      "A commercial SaaS that rewrites AI drafts so they read like a person wrote them.",
    highlights: [
      "Multi pass engine humanizes a draft, audits it against a 29 pattern AI writing spec, and revises only when tells remain.",
      "GPT-4o-mini as primary with Claude Haiku as automatic fallback, tone presets and voice matching from a sample.",
      "Full SaaS: Clerk auth, Stripe tiers with server side usage enforcement, Upstash rate limiting and a gated admin dashboard.",
    ],
    tech: ["Next.js 16", "React 19", "Vercel AI SDK", "OpenAI", "Claude", "Stripe", "Clerk"],
    liveUrl: "https://humora-ai.vercel.app",
  },
  {
    name: "RAG.AI Document Intelligence",
    category: "AI SaaS",
    featured: true,
    icon: Database,
    blurb:
      "Upload documents and chat with them, grounded answers with source attribution.",
    highlights: [
      "On upload it extracts text, chunks it with LangChain, generates OpenAI embeddings and stores them for search.",
      "At query time it retrieves the most relevant chunks through MongoDB Atlas Vector Search and answers with GPT-4o-mini, grounded and cited.",
      "JWT auth and Upstash caching cut latency and cost, with the API on Render and a React 19 frontend on Vercel.",
    ],
    tech: ["Node.js", "MongoDB Atlas Vector Search", "LangChain", "OpenAI", "React 19"],
    liveUrl: "https://rag-project-nine.vercel.app",
  },
  {
    name: "EDway Homeschooling SaaS",
    category: "AI SaaS",
    featured: true,
    icon: Boxes,
    blurb:
      "An AI platform that plans lessons, teaches, and generates the compliance evidence UK families need.",
    highlights: [
      "Plans each child's learning, teaches daily lessons with AI, tracks progress and generates official Local Authority evidence.",
      "Parent dashboard with live compliance status and a separate child hub with interactive, safety checked lessons.",
      "One click builds a verified portfolio stamped with a tamper proof hash, GDPR compliant, with Stripe billing.",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "OpenAI", "Stripe"],
    liveUrl: "https://edway.uk",
  },
  {
    name: "Kalmori Music Distribution SaaS",
    category: "AI SaaS",
    icon: Boxes,
    blurb:
      "A TuneCore style platform with an in house AI mastering engine and royalty analytics.",
    highlights: [
      "Role based dashboards for artists, producers and labels, plus an admin console for catalog, subscriptions and payouts.",
      "KALM, an in house AI mastering engine with BPM and key detection, plus auto generated social campaigns per release.",
      "Royalty engine ingests statements from 8 distributors, matches rows with a 5 tier matcher, and charts streams and revenue.",
    ],
    tech: ["React", "FastAPI", "Python", "MongoDB", "Stripe", "PayPal", "FFmpeg"],
    liveUrl: "https://kalmorimusic.com",
  },
  {
    name: "AI Operations Monitoring Dashboard",
    category: "Automation",
    icon: Terminal,
    blurb:
      "A central dashboard to watch every automation, its health, and its AI cost.",
    highlights: [
      "React and Next.js dashboard monitoring workflow status, health metrics and AI API usage and cost across processes.",
      "Centralized error logging, automatic retry and failure notifications, with role based access control.",
      "Analytics on success rates, execution times and failures, wired into GitHub deploy pipelines.",
    ],
    tech: ["React", "Next.js", "PostgreSQL", "n8n", "Vercel"],
  },
  {
    name: "SimplyAI Questionnaire & Report Platform",
    category: "AI SaaS",
    icon: Braces,
    blurb:
      "An interactive questionnaire that generates a personalized AI report you can export.",
    highlights: [
      "SurveyJS questionnaire feeds OpenAI, which writes a personalized report viewable with charts and PDF export.",
      "Node and Express backend with a MySQL schema on Knex migrations, JWT plus Google and Facebook sign in.",
      "Hardened with Helmet, rate limiting and validation, with Stripe subscriptions gating access.",
    ],
    tech: ["React", "TypeScript", "Node.js", "MySQL", "OpenAI", "Stripe"],
    codeUrl: "https://github.com/github4rslan/simplyai_backend",
  },
];

/* --------------------------- Experience --------------------------- */

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Automation Developer (Freelance)",
    company: "Fiverr and Upwork",
    period: "2023 to Present",
    location: "Remote",
    points: [
      "Delivered more than 35 AI and automation projects with a 4.9 out of 5 rating across 50 orders, each taken from requirements through deployment and post launch support.",
      "Designed and ran multi step AI automation pipelines in n8n and Make for content generation, localization, review handling and reporting, with OpenAI and Claude as the intelligence layer.",
      "Built automations that run continuously at volume with retry logic, cost control and clean error handling, and judged when a task should be a deterministic workflow versus an AI agent.",
      "Shipped commercial products including an AI homeschooling platform, a fully automated newsletter system, a music distribution SaaS and an e-commerce site.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "ZySoftTec",
    period: "Feb 2026 to June 2026",
    location: "Remote",
    points: [
      "Built production grade full stack apps with React, Node, Express, TypeScript, Next.js, MongoDB and PostgreSQL inside an engineering team.",
      "Designed features end to end, from React and TypeScript UI flows to REST APIs, backend logic and databases, through code reviews with a senior developer.",
      "Built auth and authorization with JWT and RBAC, admin dashboards with protected routes, and integrated AWS S3, Stripe and CDN across production projects.",
      "Followed a proper Git workflow with feature branches, pull requests and reviews in an Agile team.",
    ],
  },
];

export const education = [
  {
    degree: "MS, Computer Systems Engineering",
    school: "Islamia University of Bahawalpur",
    year: "2023",
  },
  {
    degree: "BS, Computer Systems Engineering",
    school: "Islamia University of Bahawalpur",
    year: "2020",
  },
  {
    degree: "Registered Engineer (RE), Pakistan Engineering Council",
    school: "PEC Reg. No. COMP/20144",
    year: "",
  },
];
