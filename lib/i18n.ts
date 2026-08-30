import {cookies} from "next/headers";

export type Locale = "en" | "bn";

export const locales: Locale[] = ["en", "bn"];

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;

  return locale === "bn" ? "bn" : "en";
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      about: "About",
      contact: "Contact",
      cta: "Start a Project",
      languageLabel: "Current language English. Switch to Bangla",
    },
    footer:
      "Next.js frontend experiences for SaaS agencies, integrated with Laravel APIs.",
    home: {
      eyebrow: "SaaS Development Agency",
      title: "We turn complex ideas into scalable, production-ready SaaS products.",
      description:
        "Strategy, design, Next.js frontend development, and Laravel API integration for founders and teams building serious software.",
      primaryCta: "Start a Project",
      secondaryCta: "View Products",
      featured: "Featured build",
      outcome: "Outcome",
      timeline: "Timeline",
      proof: ["Laravel-ready", "Typed frontend", "Dark/light mode", "Accessible forms", "SEO-first pages"],
      capabilitiesEyebrow: "Capabilities",
      capabilitiesTitle: "Everything needed for a credible SaaS frontend",
      capabilitiesDescription:
        "A focused frontend scope that still understands the product, API, and launch realities around it.",
      processEyebrow: "Process",
      processTitle: "A delivery path from idea to launch",
      stackEyebrow: "Stack",
      stackTitle: "Built around modern SaaS delivery",
      reviewsEyebrow: "Reviews",
      reviewsTitle: "Founder-friendly, engineering-aware collaboration",
      finalTitle: "Have a SaaS idea that needs a real product shape?",
      finalDescription: "Share the project context and get a focused discovery response.",
      finalCta: "Start Discovery",
    },
    pages: {
      servicesTitle: "Frontend delivery for SaaS teams that need polish and precision",
      servicesDescription:
        "A focused service model covering product clarity, interface design, frontend engineering, and Laravel API integration.",
      portfolioTitle: "SaaS builds with clear challenges, architecture, and outcomes",
      portfolioDescription:
        "Browse representative case studies by category and inspect the product decisions behind each build.",
      processTitle: "A calm, structured path from product idea to launch",
      processDescription:
        "Each step reduces uncertainty and keeps the frontend aligned with business goals and Laravel API realities.",
      aboutTitle: "A SaaS-focused frontend partner for serious product teams",
      aboutDescription:
        "ScaleForge exists to help founders and teams turn product uncertainty into clear, usable, production-ready frontend experiences.",
      contactTitle: "Tell us what you are building",
      contactDescription:
        "The frontend validates your answers, then submits the inquiry to the configured Laravel API endpoint.",
    },
  },
  bn: {
    nav: {
      home: "হোম",
      products: "প্রোডাক্ট",
      services: "সার্ভিস",
      portfolio: "পোর্টফোলিও",
      process: "প্রসেস",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      cta: "প্রজেক্ট শুরু করুন",
      languageLabel: "বর্তমান ভাষা বাংলা। ইংরেজিতে পরিবর্তন করুন",
    },
    footer:
      "SaaS এজেন্সির জন্য Next.js ফ্রন্টএন্ড অভিজ্ঞতা, Laravel API-এর সাথে ইন্টিগ্রেটেড।",
    home: {
      eyebrow: "SaaS ডেভেলপমেন্ট এজেন্সি",
      title: "জটিল আইডিয়াকে আমরা স্কেলযোগ্য, প্রোডাকশন-রেডি SaaS প্রোডাক্টে রূপ দিই।",
      description:
        "ফাউন্ডার ও টিমের জন্য স্ট্র্যাটেজি, ডিজাইন, Next.js ফ্রন্টএন্ড ডেভেলপমেন্ট এবং Laravel API ইন্টিগ্রেশন।",
      primaryCta: "প্রজেক্ট শুরু করুন",
      secondaryCta: "প্রোডাক্ট দেখুন",
      featured: "ফিচার্ড বিল্ড",
      outcome: "ফলাফল",
      timeline: "সময়কাল",
      proof: ["Laravel-ready", "Typed frontend", "ডার্ক/লাইট মোড", "অ্যাক্সেসিবল ফর্ম", "SEO-first পেজ"],
      capabilitiesEyebrow: "ক্যাপাবিলিটি",
      capabilitiesTitle: "বিশ্বাসযোগ্য SaaS ফ্রন্টএন্ডের জন্য প্রয়োজনীয় সবকিছু",
      capabilitiesDescription:
        "প্রোডাক্ট, API এবং লঞ্চের বাস্তবতা মাথায় রেখে তৈরি ফোকাসড ফ্রন্টএন্ড স্কোপ।",
      processEyebrow: "প্রসেস",
      processTitle: "আইডিয়া থেকে লঞ্চ পর্যন্ত পরিষ্কার ডেলিভারি পথ",
      stackEyebrow: "স্ট্যাক",
      stackTitle: "মডার্ন SaaS ডেলিভারির জন্য তৈরি",
      reviewsEyebrow: "রিভিউ",
      reviewsTitle: "ফাউন্ডার-ফ্রেন্ডলি, ইঞ্জিনিয়ারিং-সচেতন সহযোগিতা",
      finalTitle: "আপনার SaaS আইডিয়ার কি বাস্তব প্রোডাক্ট শেপ দরকার?",
      finalDescription: "প্রজেক্ট কনটেক্সট শেয়ার করুন এবং ফোকাসড ডিসকভারি রেসপন্স পান।",
      finalCta: "ডিসকভারি শুরু করুন",
    },
    pages: {
      servicesTitle: "যে SaaS টিম পলিশ ও প্রিসিশন চায় তাদের জন্য ফ্রন্টএন্ড ডেলিভারি",
      servicesDescription:
        "প্রোডাক্ট ক্ল্যারিটি, ইন্টারফেস ডিজাইন, ফ্রন্টএন্ড ইঞ্জিনিয়ারিং এবং Laravel API ইন্টিগ্রেশন-কেন্দ্রিক সার্ভিস মডেল।",
      portfolioTitle: "পরিষ্কার চ্যালেঞ্জ, আর্কিটেকচার এবং ফলাফলসহ SaaS বিল্ড",
      portfolioDescription:
        "ক্যাটাগরি অনুযায়ী কেস স্টাডি দেখুন এবং প্রতিটি বিল্ডের প্রোডাক্ট সিদ্ধান্ত বুঝুন।",
      processTitle: "প্রোডাক্ট আইডিয়া থেকে লঞ্চ পর্যন্ত শান্ত ও স্ট্রাকচার্ড পথ",
      processDescription:
        "প্রতিটি ধাপ অনিশ্চয়তা কমায় এবং ফ্রন্টএন্ডকে বিজনেস গোল ও Laravel API বাস্তবতার সাথে মিলিয়ে রাখে।",
      aboutTitle: "সিরিয়াস প্রোডাক্ট টিমের জন্য SaaS-কেন্দ্রিক ফ্রন্টএন্ড পার্টনার",
      aboutDescription:
        "ScaleForge ফাউন্ডার ও টিমকে প্রোডাক্ট অনিশ্চয়তা থেকে পরিষ্কার, ব্যবহারযোগ্য, প্রোডাকশন-রেডি ফ্রন্টএন্ডে যেতে সাহায্য করে।",
      contactTitle: "আপনি কী তৈরি করছেন বলুন",
      contactDescription:
        "ফ্রন্টএন্ড আপনার উত্তর যাচাই করে, তারপর কনফিগার করা Laravel API endpoint-এ inquiry পাঠায়।",
    },
  },
};

export function t(locale: Locale) {
  return translations[locale];
}
