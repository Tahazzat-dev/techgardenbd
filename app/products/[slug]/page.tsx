import {notFound} from "next/navigation";
import {ProductLanding} from "@/components/sections/product-landing";
import {getProduct, getProductSlugs} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({slug}));
}

export async function generateMetadata({params}: ProductPageProps) {
  const {slug} = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
  };
}

export default async function ProductPage({params}: ProductPageProps) {
  const {slug} = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductLanding product={product} />;
}
