import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {SectionHeading} from "@/components/sections/section-heading";
import {products} from "@/lib/products";

export const metadata = {
  title: "SaaS Products | ScaleForge",
  description: "Landing pages for ScaleForge SaaS products, each with features, pricing, and a demo request.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Products"
        title="A landing page for each SaaS product"
        description="Every product uses the same layout, sections, and lead form, with its own copy, pricing, and proof."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.slug} className="rounded-md border bg-card p-5 text-card-foreground">
            <p className="text-sm font-semibold text-primary">{product.category}</p>
            <h2 className="mt-3 text-xl font-bold">{product.name}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>
            <Link
              href={`/products/${product.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View landing page <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
