import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BrickWall,
  HardHat,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/data/products";

const categories = [
  { title: "Cement", detail: "Cement for building work", image: "/images/products/cement.jpg", icon: BrickWall },
  { title: "Roofing sheets", detail: "Iron sheets and roofing essentials", image: "/images/products/iron-sheets.jpg", icon: Boxes },
  { title: "Steel reinforcement", detail: "Steel bars for structural work", image: "/images/products/steel-bars.jpg", icon: HardHat },
  { title: "Pipes & plumbing", detail: "PVC pipes and accessories", image: "/images/products/water-pipes.jpg", icon: PackageCheck },
];

const reasons = [
  { title: "Materials for every stage", text: "Explore building materials, hardware and tools in one place.", icon: Boxes },
  { title: "Helpful service", text: "Talk with the team about the products your project needs.", icon: BadgeCheck },
  { title: "Quotation focused", text: "Request current pricing and product details directly.", icon: ShieldCheck },
  { title: "A supply partner", text: "Get in touch to discuss your materials list and requirements.", icon: Truck },
];

const featuredProducts = products.slice(0, 4);

export default function Home() {
  return (
    <>
      <Hero />

      <section id="introduction" className="intro-section section-shell">
        <div className="intro-copy">
          <p className="eyebrow">Materials to build with confidence</p>
          <h2>Everything you need to move your project forward.</h2>
        </div>
        <div className="intro-detail">
          <p>
            Aline Construction Materials Supply provides building materials, hardware and
            construction tools for your project. Browse the range, then contact us for
            product information and a quotation.
          </p>
          <Link className="text-link" href="/about">
            Get to know Aline <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <section className="category-section">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Browse the range</p>
              <h2>Materials for the work ahead</h2>
            </div>
            <Link className="text-link desktop-link" href="/products">
              View all products <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="category-grid">
            {categories.map(({ title, detail, image, icon: Icon }) => (
              <Link href="/products" className="category-card" key={title}>
                <div className="category-image">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                    className="cover-image"
                  />
                  <span className="category-icon"><Icon aria-hidden="true" size={19} /></span>
                  <span className="image-shade" />
                  <ArrowRight className="category-arrow" aria-hidden="true" size={21} />
                </div>
                <div className="category-copy">
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link className="text-link mobile-link" href="/products">
            Browse all product categories <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <section className="featured-section section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A place to start</p>
            <h2>Explore popular essentials</h2>
          </div>
          <Link className="text-link desktop-link" href="/products">
            Explore catalogue <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
      </section>

      <section className="reasons-section">
        <div className="section-shell">
          <div className="section-heading reasons-heading">
            <div>
              <p className="eyebrow">Why work with Aline</p>
              <h2>Good materials. Straightforward service.</h2>
            </div>
            <p className="section-lede">Find the products you need and get in touch with our team for details and a quotation.</p>
          </div>
          <div className="reasons-grid">
            {reasons.map(({ title, text, icon: Icon }, index) => (
              <article className="reason-card" key={title}>
                <span className="reason-number">0{index + 1}</span>
                <Icon className="reason-icon" aria-hidden="true" size={25} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section section-shell">
        <div className="quote-panel">
          <div className="quote-mark" aria-hidden="true">A</div>
          <div className="quote-copy">
            <p className="eyebrow">Build Today, Better Tomorrow.</p>
            <h2>Planning your next build?</h2>
            <p>Tell us what materials you are looking for and request a quotation from Aline.</p>
          </div>
          <div className="quote-actions">
            <Link href="/contact" className="button button-yellow">Get a quotation <ArrowRight aria-hidden="true" size={17} /></Link>
            <WhatsAppButton message="Hello Aline Construction Materials Supply. I would like to request information and a quotation for construction materials." label="Message on WhatsApp" />
          </div>
        </div>
      </section>
    </>
  );
}
