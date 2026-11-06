import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartHandshake, ShieldCheck, Sparkles, Target, Wrench } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About Aline | Construction Materials Supply",
  description: "Learn about Aline Construction Materials Supply, our mission, vision and values.",
};

const values = [
  { title: "Quality", description: "We focus on supplying construction materials selected for building work.", icon: BadgeCheck },
  { title: "Reliability", description: "We aim to provide clear, dependable service when customers get in touch.", icon: ShieldCheck },
  { title: "Customer satisfaction", description: "We listen to customer requirements and help with product inquiries.", icon: HeartHandshake },
  { title: "Integrity", description: "We communicate product information and quotations honestly.", icon: Sparkles },
  { title: "Professionalism", description: "We serve customers with care and respect throughout their inquiry.", icon: Wrench },
];

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="Who we are"
        title="About Aline"
        description="A construction materials supply partner for building projects, from essential materials to hardware and tools."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Construction site with building work in progress"
      />

      <section className="about-intro section-shell">
        <div className="about-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
            alt="Workers preparing construction materials at a building site"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            className="cover-image"
            unoptimized
          />
          <div className="about-image-caption"><span className="caption-mark">A.</span><span>Build Today,<br />Better Tomorrow.</span></div>
        </div>
        <div className="about-intro-copy">
          <p className="eyebrow">Materials for real projects</p>
          <h2>Helping customers find the supplies their work calls for.</h2>
          <p>Aline Construction Materials Supply provides building materials, construction products, hardware and tools to customers. The range includes cement, roofing sheets, steel bars, pipes, nails, tools and other building essentials.</p>
          <p>Customers can explore the catalogue and contact Aline to ask questions or request a quotation for the products they need.</p>
          <Link href="/products" className="text-link">Browse the product range <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>

      <section className="purpose-section">
        <div className="section-shell purpose-grid">
          <article className="purpose-card">
            <span className="purpose-icon"><Target aria-hidden="true" size={22} /></span>
            <p className="eyebrow">Our mission</p>
            <h2>Make it easier to source quality construction materials.</h2>
            <p>We aim to supply quality building materials and serve customers reliably, with helpful product information and service.</p>
          </article>
          <article className="purpose-card purpose-card-highlight">
            <span className="purpose-icon"><ArrowRight aria-hidden="true" size={22} /></span>
            <p className="eyebrow">Our vision</p>
            <h2>Become a trusted supplier for building projects.</h2>
            <p>We aspire to be known as a reliable source of construction materials and a business customers can turn to for their project needs.</p>
          </article>
        </div>
      </section>

      <section className="values-section section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What guides us</p>
            <h2>Our values</h2>
          </div>
          <p className="section-lede">The principles behind how we approach products, service and customer relationships.</p>
        </div>
        <div className="values-grid">
          {values.map(({ title, description, icon: Icon }, index) => (
            <article className="value-card" key={title}>
              <span className="value-index">0{index + 1}</span>
              <Icon aria-hidden="true" className="value-icon" size={24} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta section-shell">
        <div className="about-cta-panel">
          <div><p className="eyebrow">Let&apos;s talk materials</p><h2>How can we help with your project?</h2><p>Contact our team with a product question or request a quotation.</p></div>
          <Link href="/contact" className="button button-yellow">Contact Aline <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>
    </>
  );
}
