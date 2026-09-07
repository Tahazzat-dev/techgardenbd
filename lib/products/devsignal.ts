import type {ProductLandingContent} from "@/lib/products/types";

export const devsignal: ProductLandingContent = {
  slug: "devsignal",
  name: "DevSignal",
  category: "DevTools",
  eyebrow: "Developer analytics",
  title: "Product analytics that developers can trust in a demo.",
  description:
    "DevSignal shows workspace-level usage, activation, and drop-off so product and engineering teams can explain what users actually do.",
  seoTitle: "DevSignal | Usage analytics for developer products",
  seoDescription: "Workspace-level product analytics for developer tools, with usage, activation, and conversion insight.",
  primaryCta: {href: "#contact", label: "Request a demo"},
  secondaryCta: {href: "#pricing", label: "See pricing"},
  featured: {
    label: "Product snapshot",
    title: "Usage insight without a heavy analytics suite",
    summary: "A developer-facing portal for workspace usage, activation, and demo conversion.",
    stats: [
      {label: "Outcome", value: "3x demo conversion"},
      {label: "Timeline", value: "Live in 8 weeks"},
    ],
  },
  proof: ["Workspace usage", "Activation charts", "Demo-ready", "API events", "Fast insight"],
  featuresEyebrow: "Features",
  featuresTitle: "See how developer products are actually used",
  featuresDescription: "Built for teams that need product evidence without standing up a full data stack.",
  features: [
    {
      title: "Workspace usage",
      description: "Track events and activity by workspace instead of anonymous traffic.",
      icon: "Eye",
    },
    {
      title: "Activation views",
      description: "Spot which accounts reached value and which stalled after signup.",
      icon: "Gauge",
    },
    {
      title: "Demo-ready charts",
      description: "Show usage proof in a clean portal that holds up during sales conversations.",
      icon: "BarChart3",
    },
    {
      title: "Event contracts",
      description: "Keep analytics events typed and consistent from frontend to API.",
      icon: "Code2",
    },
    {
      title: "Access by workspace",
      description: "Let customers see their own usage without exposing other accounts.",
      icon: "ShieldCheck",
    },
    {
      title: "Laravel API ready",
      description: "Send and query usage data through documented backend endpoints.",
      icon: "Workflow",
    },
  ],
  processEyebrow: "How it works",
  processTitle: "From raw events to a demo-ready usage story",
  steps: [
    {title: "Instrument events", description: "Send the usage events that matter for activation and retention."},
    {title: "Group by workspace", description: "Read activity at the account level, not as anonymous page views."},
    {title: "Share the proof", description: "Use charts in demos and customer reviews without extra reporting work."},
  ],
  stackEyebrow: "Stack",
  stackTitle: "Built for developer-facing products",
  integrations: [
    {name: "Next.js", category: "Frontend", icon: "Code2"},
    {name: "Laravel API", category: "Backend", icon: "Workflow"},
    {name: "Charts", category: "Insight", icon: "BarChart3"},
    {name: "PostgreSQL", category: "Database", icon: "ShieldCheck"},
  ],
  pricingEyebrow: "Pricing",
  pricingTitle: "Usage insight that stays affordable as event volume grows",
  pricingDescription: "Pick a plan based on workspaces and the depth of reporting you need.",
  plans: [
    {
      name: "Explore",
      price: "$49",
      period: "/mo",
      description: "For a first product analytics portal.",
      features: ["3 workspaces", "Core usage charts", "7-day retention", "Email support"],
      cta: {href: "#contact", label: "Start explore"},
    },
    {
      name: "Product",
      price: "$129",
      period: "/mo",
      description: "For teams using analytics in demos and weekly reviews.",
      features: ["25 workspaces", "Activation views", "Shared dashboards", "Priority support"],
      highlighted: true,
      cta: {href: "#contact", label: "Start product"},
    },
    {
      name: "Platform",
      price: "$249",
      period: "/mo",
      description: "For products that expose usage back to customers.",
      features: ["Unlimited workspaces", "Customer-facing portal", "Event contracts", "Onboarding call"],
      cta: {href: "#contact", label: "Talk to us"},
    },
  ],
  reviewsEyebrow: "Reviews",
  reviewsTitle: "Used by teams who needed usage proof, not another spreadsheet",
  testimonials: [
    {
      quote: "Demos got easier once we could show workspace usage instead of talking around it.",
      name: "Rafi Hasan",
      role: "Founder, DevSignal",
    },
    {
      quote: "Activation stopped being a guess. We can see which accounts reached value and which need a nudge.",
      name: "Maya Chen",
      role: "Product Lead, Tracekit",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Common questions before a DevSignal demo",
  faqs: [
    {
      question: "Is this a replacement for Mixpanel or Amplitude?",
      answer: "It is a focused usage portal for developer products, not a general-purpose consumer analytics suite.",
    },
    {
      question: "Can customers see their own data?",
      answer: "Yes. Workspace-level access is designed so each account only sees its own usage.",
    },
    {
      question: "What events should we send first?",
      answer: "Start with signup, first key action, and a weekly active event. We refine the rest during onboarding.",
    },
  ],
  ctaTitle: "Need usage proof that holds up in a customer demo?",
  ctaDescription: "Request a walkthrough and see how DevSignal would present your workspace activity.",
  ctaLabel: "Request a demo",
};
