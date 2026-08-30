import {devsignal} from "@/lib/products/devsignal";
import {ledgerpilot} from "@/lib/products/ledgerpilot";
import {opslayer} from "@/lib/products/opslayer";
import type {ProductLandingContent} from "@/lib/products/types";

export const products: ProductLandingContent[] = [ledgerpilot, opslayer, devsignal];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductSlugs() {
  return products.map((product) => product.slug);
}
