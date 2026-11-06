import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, MessageCircle, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getProductImageSource } from "@/components/ProductCard";
import { products } from "@/data/products";

type ProductPageProps = { params: Promise<{ id: string }> };

function findProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function generateStaticParams() {
  return products.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = findProduct(id);

  if (!product) return { title: "Product not found | Aline Construction Materials Supply" };

  return {
    title: `${product.name} | Aline Construction Materials Supply`,
    description: `${product.name} in ${product.category}. Contact Aline Construction Materials Supply for product details and a quotation.`,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();

  const imageSource = getProductImageSource(product.image);

  return (
    <section className="product-detail section-shell">
        <Link href="/products" className="product-back-link"><ArrowLeft aria-hidden="true" size={15} /> Back to products</Link>
        <div className="product-detail-grid">
          <div className="product-detail-image">
            <Image src={imageSource} alt={`Advertisement crop showing ${product.category.toLowerCase()}`} fill sizes="(max-width: 760px) 100vw, 55vw" className="cover-image" priority />
            <span>{product.category}</span>
          </div>
          <div className="product-detail-copy">
            <p className="eyebrow">Product information</p>
            <h1>{product.name}</h1>
            <p className="product-detail-category">{product.category}</p>
            <p className="product-detail-description">{product.description}</p>
            <p className="product-image-source-note">Photo cropped from the Aline advertisement. Some product variants share a category image because the poster groups them together.</p>
            {product.specs && <div className="product-specification"><span>Specification</span><strong>{product.specs}</strong></div>}
            <div className="product-quote-note"><BadgeCheck aria-hidden="true" size={18} /><span>Request current pricing and availability directly from Aline.</span></div>
            {product.category === "Cement" && product.name !== "Cimerwa 32.5" && <p className="product-image-context">The advertisement shows a Cimerwa bag as the cement category photo. Please ask Aline to confirm packaging for this brand.</p>}
            {product.name === "CAPCI" && <p className="product-image-context">The advertisement lists CAPCI, but its sealant photo is not distinct from the P38 image.</p>}
            <div className="product-detail-actions">
              <WhatsAppButton message={`Hello Aline Construction Materials Supply. I am interested in ${product.name}. Could you please provide more information and a quotation?`} label="Ask for a quotation" />
              <Link href="/contact" className="product-call-link"><Phone aria-hidden="true" size={16} /> Contact Aline</Link>
            </div>
            <div className="product-detail-footnote"><MessageCircle aria-hidden="true" size={15} /><span>Product inquiries are handled directly by the Aline team.</span></div>
          </div>
        </div>
        <div className="product-detail-bottom"><span>Build Today, Better Tomorrow.</span><Link href="/products">Browse more products <ArrowRight aria-hidden="true" size={15} /></Link></div>
    </section>
  );
}
