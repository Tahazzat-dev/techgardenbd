import {
  BarChart3,
  Blocks,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Figma,
  LockKeyhole,
  Rocket,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const capabilities = [
  {
    title: "Product Strategy",
    description: "MVP scope, user journeys, market positioning, and technical feasibility.",
    icon: Search,
  },
  {
    title: "UI/UX Systems",
    description: "Responsive product interfaces, component systems, and conversion-focused flows.",
    icon: Figma,
  },
  {
    title: "Next.js Frontend",
    description: "Typed, fast, accessible frontend architecture ready for Laravel API integration.",
    icon: Code2,
  },
  {
    title: "Laravel API Integration",
    description: "Clean request contracts, validation mapping, and resilient user feedback.",
    icon: Workflow,
  },
  {
    title: "SaaS Architecture",
    description: "Multi-tenant workspaces, RBAC, subscriptions, dashboards, and admin tooling.",
    icon: Blocks,
  },
  {
    title: "Launch Support",
    description: "QA, analytics events, deployment readiness, and post-launch iteration planning.",
    icon: Rocket,
  },
];

export const services = [
  {
    title: "Product Strategy & Discovery",
    description:
      "Shape the product scope, audience, roadmap, MVP boundaries, and launch priorities before design or code begins.",
    bullets: ["Feature prioritization", "User journey mapping", "Technical feasibility review"],
  },
  {
    title: "UI/UX Design Systems",
    description:
      "Design polished SaaS interfaces with responsive layouts, reusable components, and consistent states.",
    bullets: ["Wireframes and prototypes", "High-fidelity UI", "shadcn/ui component systems"],
  },
  {
    title: "Frontend SaaS Development",
    description:
      "Build the public frontend in TypeScript, Next.js, Tailwind CSS, and accessible React components.",
    bullets: ["App Router pages", "Client-side workflows", "SEO-ready rendering"],
  },
  {
    title: "Laravel API Integration",
    description:
      "Connect frontend forms and dynamic content to Laravel endpoints with typed contracts and strong error handling.",
    bullets: ["Discovery form submission", "Validation error mapping", "API loading states"],
  },
  {
    title: "Billing & Subscription UI",
    description:
      "Create frontend experiences for plans, invoices, billing states, and subscription management handled by Laravel.",
    bullets: ["Plan comparison", "Billing status UI", "Webhook-driven state display"],
  },
  {
    title: "QA & Launch Readiness",
    description:
      "Validate responsive behavior, accessibility, form flows, theme support, analytics events, and production build quality.",
    bullets: ["Responsive checks", "Accessibility review", "Build verification"],
  },
];

export const processSteps = [
  {title: "Discovery & Fit", description: "Clarify goals, users, timeline, budget, and technical constraints."},
  {title: "Product Blueprint", description: "Define scope, roadmap, feature priorities, and API boundaries."},
  {title: "Design & Prototype", description: "Create flows, visual direction, design components, and interactive states."},
  {title: "Build & Integrate", description: "Implement Next.js screens and connect them to Laravel APIs."},
  {title: "QA & Launch", description: "Test accessibility, responsiveness, forms, themes, and production builds."},
  {title: "Measure & Improve", description: "Track meaningful events and prioritize improvements after launch."},
];

export const technologies = [
  {name: "Next.js", category: "Frontend", icon: Code2},
  {name: "TypeScript", category: "Frontend", icon: ShieldCheck},
  {name: "Tailwind CSS", category: "Frontend", icon: Figma},
  {name: "Laravel", category: "Backend", icon: Workflow},
  {name: "PostgreSQL", category: "Database", icon: Database},
  {name: "Stripe", category: "Integration", icon: CreditCard},
  {name: "RBAC", category: "Security", icon: LockKeyhole},
  {name: "Analytics", category: "Growth", icon: BarChart3},
  {name: "Cloud Deployments", category: "Infrastructure", icon: Cloud},
];

export const testimonials = [
  {
    quote:
      "They translated a messy product idea into a clear launch plan, polished interface, and frontend ready for our Laravel API.",
    name: "Nadia Rahman",
    role: "Founder, LedgerPilot",
  },
  {
    quote:
      "The team understood SaaS workflows quickly and gave us a product experience that felt credible from day one.",
    name: "Arman Chowdhury",
    role: "CEO, OpsLayer",
  },
];

export const portfolioItems = [
  {
    slug: "ledgerpilot",
    title: "LedgerPilot",
    category: "FinTech",
    summary: "Subscription finance dashboard for founders managing invoices, plans, and revenue signals.",
    metric: "42% faster onboarding",
    timeline: "10 weeks",
    stack: ["Next.js", "Laravel", "Stripe", "PostgreSQL"],
  },
  {
    slug: "opslayer",
    title: "OpsLayer",
    category: "B2B SaaS",
    summary: "Internal operations platform with role-based workflows and team-level reporting.",
    metric: "18 hours saved weekly",
    timeline: "12 weeks",
    stack: ["Next.js", "Laravel", "RBAC", "Analytics"],
  },
  {
    slug: "devsignal",
    title: "DevSignal",
    category: "DevTools",
    summary: "Developer-facing product analytics portal with workspace-level usage insights.",
    metric: "3x demo conversion",
    timeline: "8 weeks",
    stack: ["Next.js", "Laravel API", "Charts", "PostgreSQL"],
  },
];
