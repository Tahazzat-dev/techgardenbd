"use client";

import {useMemo, useState} from "react";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {portfolioItems} from "@/lib/content";
import {cn} from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

export function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Portfolio filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-md border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary",
              activeCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-card-foreground hover:border-primary",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article key={item.slug} className="rounded-md border bg-card p-5 text-card-foreground">
              <p className="text-sm font-semibold text-primary">{item.category}</p>
              <h2 className="mt-3 text-xl font-bold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
              <div className="mt-5 rounded-md bg-muted p-4">
                <p className="text-xs text-muted-foreground">Outcome</p>
                <p className="mt-1 font-semibold">{item.metric}</p>
              </div>
              <Link
                href={`/portfolio/${item.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Read case study <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-md border bg-card p-8 text-center text-muted-foreground">
          No case studies match this filter.
        </div>
      )}
    </div>
  );
}
