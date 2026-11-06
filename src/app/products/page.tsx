import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ProductCatalogue } from "@/components/ProductCatalogue";

export const metadata: Metadata = {
  title: "Products | Aline Construction Materials Supply",
  description: "Browse construction materials, iron sheets, nails, pipes, tools and hardware from Aline. Request a quotation for current product details.",
};

export default function Products() {
  return (
    <>
      <PageBanner
        eyebrow="The product range"
        title="Products"
        description="Browse construction materials, hardware and tools. Search the catalogue or filter it by category."
        image="https://images.unsplash.com/photo-1609867271967-a82f85c48531?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Materials arranged at an active construction site"
      />
      <ProductCatalogue />
    </>
  );
}
