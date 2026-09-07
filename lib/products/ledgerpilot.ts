import type {ProductLandingContent} from "@/lib/products/types";

export const ledgerpilot: ProductLandingContent = {
  slug: "ledgerpilot",
  name: "LedgerPilot",
  category: "FinTech",
  eyebrow: "Finance SaaS",
  title: "Subscription finance that founders can actually run.",
  description:
    "LedgerPilot gives startups one place for invoices, plans, and revenue signals so billing decisions stay clear as the product grows.",
  seoTitle: "LedgerPilot | Subscription finance for SaaS founders",
  seoDescription: "Manage invoices, plans, and revenue signals with a finance dashboard built for subscription products.",
  primaryCta: {href: "#contact", label: "Request a demo"},
  secondaryCta: {href: "#pricing", label: "See pricing"},
  featured: {
    label: "Product snapshot",
    title: "Revenue, invoices, and plans in one dashboard",
    summary: "A finance workspace for founders who need billing clarity without a full finance team.",
    stats: [
      {label: "Outcome", value: "42% faster onboarding"},
      {label: "Timeline", value: "Live in 10 weeks"},
    ],
  },
  proof: ["Invoice automation", "Plan changes", "Revenue signals", "Stripe-ready", "Founder dashboards"],
  featuresEyebrow: "Features",
  featuresTitle: "Everything needed to keep subscription revenue under control",
  featuresDescription: "Built for teams that outgrew spreadsheets but do not want an enterprise finance suite.",
  features: [
    {
      title: "Invoice workspace",
      description: "Create, send, and track invoices with clear payment states and customer context.",
      icon: "FileSpreadsheet",
    },
    {
      title: "Plan management",
      description: "Change seats, trials, and plan tiers without losing billing history.",
      icon: "CreditCard",
    },
    {
      title: "Revenue signals",
      description: "See MRR movement, failed payments, and expansion at a glance.",
      icon: "BarChart3",
    },
    {
      title: "Collections flow",
      description: "Follow up on overdue invoices with a simple, repeatable workflow.",
      icon: "Wallet",
    },
    {
      title: "Access control",
      description: "Keep finance data limited to the people who should see it.",
      icon: "ShieldCheck",
    },
    {
      title: "Laravel-ready APIs",
      description: "Connect billing events and customer data through typed backend contracts.",
      icon: "Workflow",
    },
  ],
  processEyebrow: "How it works",
  processTitle: "From first invoice to a reliable billing rhythm",
  steps: [
    {title: "Connect billing", description: "Bring in plans, customers, and payment providers."},
    {title: "Issue invoices", description: "Send invoices and track payment state without leaving the dashboard."},
    {title: "Watch revenue", description: "Use MRR and collection signals to decide what to fix next."},
  ],
  stackEyebrow: "Stack",
  stackTitle: "Built for modern SaaS billing",
  integrations: [
    {name: "Next.js", category: "Frontend", icon: "Workflow"},
    {name: "Laravel", category: "Backend", icon: "ShieldCheck"},
    {name: "Stripe", category: "Payments", icon: "CreditCard"},
    {name: "PostgreSQL", category: "Database", icon: "BarChart3"},
  ],
  pricingEyebrow: "Pricing",
  pricingTitle: "Start simple, scale with revenue operations",
  pricingDescription: "Choose a plan based on invoice volume and the finance workflows you need.",
  plans: [
    {
      name: "Starter",
      price: "$29",
      period: "/mo",
      description: "For early teams sending a small number of invoices.",
      features: ["Up to 50 invoices / month", "1 workspace", "Basic revenue snapshot", "Email support"],
      cta: {href: "#contact", label: "Start starter"},
    },
    {
      name: "Growth",
      price: "$79",
      period: "/mo",
      description: "For products with active subscriptions and plan changes.",
      features: ["Up to 500 invoices / month", "Plan change history", "Failed payment alerts", "Priority support"],
      highlighted: true,
      cta: {href: "#contact", label: "Start growth"},
    },
    {
      name: "Scale",
      price: "$149",
      period: "/mo",
      description: "For finance-aware teams that need tighter controls.",
      features: ["Unlimited invoices", "Role-based access", "Custom reporting", "Onboarding call"],
      cta: {href: "#contact", label: "Talk to us"},
    },
  ],
  reviewsEyebrow: "Reviews",
  reviewsTitle: "Built with founders who needed billing clarity",
  testimonials: [
    {
      quote:
        "They translated a messy product idea into a clear launch plan, polished interface, and frontend ready for our Laravel API.",
      name: "Nadia Rahman",
      role: "Founder, LedgerPilot",
    },
    {
      quote: "Invoice follow-up stopped living in chat threads. We can see what is unpaid without chasing screenshots.",
      name: "Farhan Ali",
      role: "COO, Northstack",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Common questions before a LedgerPilot demo",
  faqs: [
    {
      question: "Does this replace our accountant?",
      answer:
        "No. LedgerPilot is an operating dashboard for invoices, plans, and revenue signals, not a full accounting suite.",
    },
    {
      question: "Can it work with Stripe?",
      answer: "Yes. Stripe is the default payment integration for subscription and invoice collection.",
    },
    {
      question: "How long does onboarding take?",
      answer: "Most teams connect plans and send the first invoices in the first week after workspace setup.",
    },
  ],
  ctaTitle: "Need billing that matches how your SaaS actually sells?",
  ctaDescription: "Request a walkthrough and see whether LedgerPilot fits your invoice and plan workflow.",
  ctaLabel: "Request a demo",
};
