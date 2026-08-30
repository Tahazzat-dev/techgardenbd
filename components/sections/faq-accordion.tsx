"use client";

import {useState} from "react";
import {ChevronDown} from "lucide-react";
import {SectionHeading} from "@/components/sections/section-heading";
import {cn} from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export function FaqAccordion({id = "faq", eyebrow, title, description, items}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 divide-y rounded-md border bg-card">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-semibold text-foreground">{item.question}</span>
                <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition", isOpen && "rotate-180")} />
              </button>
              {isOpen ? (
                <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground">{item.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
