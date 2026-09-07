import Link from "next/link";
import {ArrowRight} from "lucide-react";

import {SectionHeading} from "@/components/sections/section-heading";
import {createTranslator, getDictionary, getLocale} from "@/lib/i18n/server";
import {products} from "@/lib/products";

export async function ProductsPage() {
  const locale = await getLocale();
  const productsDict = await getDictionary(locale, "products");
  const t = createTranslator(productsDict);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
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
              {t("viewLanding")} <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
