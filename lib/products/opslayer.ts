import {BarChart3, Blocks, LockKeyhole, ShieldCheck, Users, Workflow} from "lucide-react";
import type {ProductLandingContent} from "@/lib/products/types";

export const opslayer: ProductLandingContent = {
  slug: "opslayer",
  name: "OpsLayer",
  category: "B2B SaaS",
  eyebrow: "Operations SaaS",
  title: "Internal operations that stay visible across every team.",
  description:
    "OpsLayer gives operators role-based workflows, approvals, and reporting so internal work does not live in scattered chats and sheets.",
  seoTitle: "OpsLayer | Role-based operations for growing teams",
  seoDescription: "Run internal workflows, approvals, and team reporting with a B2B operations platform.",
  primaryCta: {href: "#contact", label: "Request a demo"},
  secondaryCta: {href: "#pricing", label: "See pricing"},
  featured: {
    label: "Product snapshot",
    title: "Workflows, roles, and reporting in one place",
    summary: "An operations layer for teams that need clear ownership without building a custom internal tool.",
    stats: [
      {label: "Outcome", value: "18 hours saved weekly"},
      {label: "Timeline", value: "Live in 12 weeks"},
    ],
  },
  proof: ["Role-based access", "Approval flows", "Team reporting", "Audit trail", "Workspace ready"],
  featuresEyebrow: "Features",
  featuresTitle: "Give every team a shared operating system",
  featuresDescription: "Designed for operators who need process control without slowing people down.",
  features: [
    {
      title: "Role-based workflows",
      description: "Assign work by role so the right people see the right tasks and records.",
      icon: Users,
    },
    {
      title: "Approvals",
      description: "Route requests through a clear approval path instead of informal messages.",
      icon: ShieldCheck,
    },
    {
      title: "Team reporting",
      description: "Track throughput, bottlenecks, and ownership at the team level.",
      icon: BarChart3,
    },
    {
      title: "Workspace structure",
      description: "Keep branches, teams, and workstreams separated without duplicating tools.",
      icon: Blocks,
    },
    {
      title: "Access control",
      description: "Limit sensitive operations data with RBAC from the start.",
      icon: LockKeyhole,
    },
    {
      title: "API-ready records",
      description: "Connect internal systems through typed Laravel endpoints.",
      icon: Workflow,
    },
  ],
  processEyebrow: "How it works",
  processTitle: "Stand up an operations layer without a custom build",
  steps: [
    {title: "Map roles", description: "Define who can view, edit, approve, and report."},
    {title: "Run workflows", description: "Move requests through owned steps instead of ad-hoc chat."},
    {title: "Review the week", description: "Use team reports to see what stalled and what shipped."},
  ],
  stackEyebrow: "Stack",
  stackTitle: "Built for internal SaaS operations",
  integrations: [
    {name: "Next.js", category: "Frontend", icon: Workflow},
    {name: "Laravel", category: "Backend", icon: ShieldCheck},
    {name: "RBAC", category: "Security", icon: LockKeyhole},
    {name: "Analytics", category: "Reporting", icon: BarChart3},
  ],
  pricingEyebrow: "Pricing",
  pricingTitle: "Plans that match how many people run operations",
  pricingDescription: "Start with a small ops team, then add seats and reporting as the company grows.",
  plans: [
    {
      name: "Team",
      price: "$39",
      period: "/mo",
      description: "For a single operations group getting work out of chat.",
      features: ["Up to 10 users", "Basic workflows", "Shared inbox of tasks", "Email support"],
      cta: {href: "#contact", label: "Start team"},
    },
    {
      name: "Company",
      price: "$99",
      period: "/mo",
      description: "For multi-team operations with approvals and reporting.",
      features: ["Up to 50 users", "Approval paths", "Team reports", "Priority support"],
      highlighted: true,
      cta: {href: "#contact", label: "Start company"},
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations that need stricter access and onboarding help.",
      features: ["Unlimited users", "Advanced RBAC", "Audit trail", "Onboarding workshop"],
      cta: {href: "#contact", label: "Talk to us"},
    },
  ],
  reviewsEyebrow: "Reviews",
  reviewsTitle: "Made for operators who needed a credible system on day one",
  testimonials: [
    {
      quote: "The team understood SaaS workflows quickly and gave us a product experience that felt credible from day one.",
      name: "Arman Chowdhury",
      role: "CEO, OpsLayer",
    },
    {
      quote: "Approvals stopped disappearing into WhatsApp. We can see who owns a request and when it moved.",
      name: "Lina Karim",
      role: "Head of Operations, Fieldnote",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Common questions before an OpsLayer demo",
  faqs: [
    {
      question: "Is this a project tracker?",
      answer: "It is an operations layer: roles, approvals, and reporting for recurring internal work, not a generic kanban tool.",
    },
    {
      question: "Can we limit who sees sensitive records?",
      answer: "Yes. Role-based access is part of the core product, not an add-on.",
    },
    {
      question: "Do we need a custom implementation?",
      answer: "Most teams start with the standard workflows and only customize after the first operating month.",
    },
  ],
  ctaTitle: "Ready to stop running operations from chat?",
  ctaDescription: "Request a walkthrough and see how OpsLayer would fit your team roles and approvals.",
  ctaLabel: "Request a demo",
};
