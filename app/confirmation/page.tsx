import Link from "next/link";
import {SectionHeading} from "@/components/sections/section-heading";
import {getProduct} from "@/lib/products";

export const metadata = {
  title: "Inquiry Received | ScaleForge",
  description: "Confirmation page for product demos and discovery inquiries.",
};

type ConfirmationPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

export default async function ConfirmationPage({searchParams}: ConfirmationPageProps) {
  const {product: productSlug} = await searchParams;
  const product = productSlug ? getProduct(productSlug) : undefined;

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Received"
        title={product ? `Thanks for requesting a ${product.name} demo` : "Thanks for sharing the project context"}
        description={
          product
            ? "We will follow up with a focused product walkthrough and next steps."
            : "The Laravel backend will process the inquiry and the team should follow up with next steps."
        }
      />
      <Link
        href={product ? `/products/${product.slug}` : "/products"}
        className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        {product ? `Back to ${product.name}` : "View Products"}
      </Link>
    </main>
  );
}
