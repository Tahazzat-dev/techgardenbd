import {
  capabilities,
  portfolioItems,
  processSteps,
  services,
  testimonials,
  technologies,
} from "@/lib/content";
import type {Locale} from "@/lib/i18n";

const bnCapabilities = [
  ["প্রোডাক্ট স্ট্র্যাটেজি", "MVP স্কোপ, ইউজার জার্নি, মার্কেট পজিশনিং এবং টেকনিক্যাল ফিজিবিলিটি।"],
  ["UI/UX সিস্টেম", "রেসপন্সিভ প্রোডাক্ট ইন্টারফেস, কম্পোনেন্ট সিস্টেম এবং কনভার্সন-কেন্দ্রিক ফ্লো।"],
  ["Next.js ফ্রন্টএন্ড", "Laravel API ইন্টিগ্রেশনের জন্য প্রস্তুত টাইপড, দ্রুত, অ্যাক্সেসিবল ফ্রন্টএন্ড আর্কিটেকচার।"],
  ["Laravel API ইন্টিগ্রেশন", "পরিষ্কার request contract, validation mapping এবং নির্ভরযোগ্য user feedback।"],
  ["SaaS আর্কিটেকচার", "Multi-tenant workspace, RBAC, subscription, dashboard এবং admin tooling।"],
  ["লঞ্চ সাপোর্ট", "QA, analytics event, deployment readiness এবং post-launch iteration planning।"],
];

const bnServices = [
  ["প্রোডাক্ট স্ট্র্যাটেজি ও ডিসকভারি", "ডিজাইন বা কোডের আগে প্রোডাক্ট স্কোপ, অডিয়েন্স, রোডম্যাপ, MVP সীমা এবং লঞ্চ অগ্রাধিকার পরিষ্কার করা।"],
  ["UI/UX ডিজাইন সিস্টেম", "রেসপন্সিভ layout, reusable component এবং consistent state সহ polished SaaS interface ডিজাইন।"],
  ["ফ্রন্টএন্ড SaaS ডেভেলপমেন্ট", "TypeScript, Next.js, Tailwind CSS এবং accessible React component দিয়ে public frontend তৈরি।"],
  ["Laravel API ইন্টিগ্রেশন", "Typed contract এবং শক্ত error handling সহ frontend form ও dynamic content Laravel endpoint-এর সাথে যুক্ত করা।"],
  ["Billing ও Subscription UI", "Laravel-handled plan, invoice, billing state এবং subscription management-এর frontend experience তৈরি।"],
  ["QA ও Launch Readiness", "Responsive behavior, accessibility, form flow, theme support, analytics event এবং production build quality যাচাই।"],
];

const bnProcessSteps = [
  ["ডিসকভারি ও ফিট", "গোল, ইউজার, timeline, budget এবং technical constraint পরিষ্কার করা।"],
  ["প্রোডাক্ট ব্লুপ্রিন্ট", "Scope, roadmap, feature priority এবং API boundary নির্ধারণ করা।"],
  ["ডিজাইন ও প্রোটোটাইপ", "Flow, visual direction, design component এবং interactive state তৈরি করা।"],
  ["বিল্ড ও ইন্টিগ্রেট", "Next.js screen তৈরি করে Laravel API-এর সাথে যুক্ত করা।"],
  ["QA ও লঞ্চ", "Accessibility, responsiveness, form, theme এবং production build পরীক্ষা করা।"],
  ["মেজার ও ইমপ্রুভ", "গুরুত্বপূর্ণ event track করে launch-এর পর improvement prioritize করা।"],
];

const bnTestimonials = [
  [
    "তারা একটি অগোছালো প্রোডাক্ট আইডিয়াকে পরিষ্কার launch plan, polished interface এবং Laravel API-ready frontend-এ রূপ দিয়েছে।",
    "নাদিয়া রহমান",
    "Founder, LedgerPilot",
  ],
  [
    "টিমটি SaaS workflow খুব দ্রুত বুঝেছে এবং day one থেকেই credible মনে হয় এমন product experience দিয়েছে।",
    "আরমান চৌধুরী",
    "CEO, OpsLayer",
  ],
];

export function getLocalizedContent(locale: Locale) {
  if (locale === "en") {
    return {capabilities, services, processSteps, testimonials, portfolioItems, technologies};
  }

  return {
    capabilities: capabilities.map((item, index) => ({
      ...item,
      title: bnCapabilities[index][0],
      description: bnCapabilities[index][1],
    })),
    services: services.map((item, index) => ({
      ...item,
      title: bnServices[index][0],
      description: bnServices[index][1],
    })),
    processSteps: processSteps.map((item, index) => ({
      ...item,
      title: bnProcessSteps[index][0],
      description: bnProcessSteps[index][1],
    })),
    testimonials: testimonials.map((item, index) => ({
      ...item,
      quote: bnTestimonials[index][0],
      name: bnTestimonials[index][1],
      role: bnTestimonials[index][2],
    })),
    portfolioItems,
    technologies,
  };
}
