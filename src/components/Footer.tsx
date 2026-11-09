import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

const phoneNumbers = ["0782467295", "07844499197"];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-brand-column">
          <Link href="/" className="footer-brand" aria-label="Aline Construction Materials Supply home">
            <span className="footer-brand-symbol">A<span>.</span></span>
            <span>Aline <small>CONSTRUCTION MATERIALS SUPPLY</small></span>
          </Link>
          <p>Building materials, hardware and tools for your next project.</p>
          <span className="footer-slogan">Build Today, Better Tomorrow.</span>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="footer-column footer-contact">
          <h2>Talk to our team</h2>
          {phoneNumbers.map((number) => (
            <a key={number} href={`tel:${number}`}><Phone aria-hidden="true" size={15} />{number}</a>
          ))}
          <Link href="/contact" className="footer-contact-link">Contact details <ArrowUpRight aria-hidden="true" size={14} /></Link>
        </div>

        <div className="footer-callout">
          <span className="footer-callout-label">Have a materials list?</span>
          <p>Get in touch and ask us for a quotation.</p>
          <Link href="/contact" className="footer-quote-link">Request a quote <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-shell footer-bottom-inner">
          <span>© 2026 Aline Construction Materials Supply</span>
          <span>Build Today, Better Tomorrow.</span>
        </div>
      </div>
    </footer>
  );
}
