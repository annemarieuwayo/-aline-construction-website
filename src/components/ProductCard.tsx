import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export type ProductCardProps = {
  id: string;
  name: string;
  category: string;
  description: string;
  specs?: string;
  image: string;
};

export function getProductImageSource(image: string) {
  return image;
}

export function ProductCard({ id, name, category, description, specs, image }: ProductCardProps) {
  const imageSource = getProductImageSource(image);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link href={`/products/${id}`} className="product-image-link" aria-label={`View ${name} details`}>
          <Image src={imageSource} alt={`Advertisement crop showing ${category.toLowerCase()}`} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw" className="cover-image" />
          <span className="product-image-overlay" />
          <span className="product-image-open"><ArrowUpRight aria-hidden="true" size={17} /></span>
        </Link>
        <span className="product-image-label">{category}</span>
      </div>
      <div className="product-card-content">
        <span className="product-category">{category}</span>
        <h3><Link href={`/products/${id}`} className="product-title-link">{name}</Link></h3>
        {specs && <p className="product-spec">Specification: {specs}</p>}
        <p className="product-description">{description}</p>
        <div className="product-card-action">
          <Link href={`/products/${id}`} className="product-details-link">View details <ArrowUpRight aria-hidden="true" size={14} /></Link>
          <WhatsAppButton message={`Hello Aline Construction Materials Supply. I am interested in ${name}. Could you please provide more information and a quotation?`} label="Ask for a quote" />
        </div>
      </div>
    </article>
  );
}
