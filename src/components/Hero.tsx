import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=88"
        alt="Construction workers preparing a building site"
        fill
        priority
        sizes="100vw"
        className="hero-image"
        unoptimized
      />
      <div className="hero-overlay" />
      <div className="hero-content section-shell">
        <div className="hero-copy">
          <div className="hero-kicker"><span /> Materials for what you&apos;re building</div>
          <h1>Aline Construction<br /><span>Materials Supply</span></h1>
          <p className="hero-slogan">Build Today, Better Tomorrow.</p>
          <p className="hero-description">
            Building materials, hardware and tools to help bring your next project to life.
            Browse our range and request a quotation from our team.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="button button-yellow">
              Explore products <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link href="/contact" className="button button-outline-light">Contact Aline</Link>
          </div>
          <div className="hero-points">
            <span><Check aria-hidden="true" size={15} /> Building materials</span>
            <span><Check aria-hidden="true" size={15} /> Hardware & tools</span>
            <span><Check aria-hidden="true" size={15} /> Request a quotation</span>
          </div>
        </div>
        <div className="hero-side-note">
          <span className="hero-side-line" />
          <span>Materials to shape<br />what comes next.</span>
        </div>
      </div>
      <a className="hero-scroll" href="#introduction" aria-label="Scroll to discover Aline">
        <span>Discover Aline</span><ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  );
}
