import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function PageBanner({ eyebrow, title, description, image, imageAlt }: PageBannerProps) {
  return (
    <section className="page-banner">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="page-banner-image" unoptimized />
      <div className="page-banner-overlay" />
      <div className="section-shell page-banner-content">
        <div className="page-breadcrumb"><Link href="/">Home</Link><ArrowRight aria-hidden="true" size={13} /><span>{title}</span></div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-banner-description">{description}</p>
      </div>
    </section>
  );
}
