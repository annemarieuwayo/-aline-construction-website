import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Phone, Pin, Route } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Aline | Request a Quotation",
  description: "Contact Aline Construction Materials Supply by phone or WhatsApp, or prepare a product inquiry and request a quotation.",
};

const phoneNumbers = ["0782467295", "07844499197"];

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="We are here to help"
        title="Contact Us"
        description="Ask about construction materials, product details and quotations. Reach Aline by phone or send an inquiry."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Construction team working on a building project"
      />

      <section className="contact-layout section-shell">
        <div className="contact-details-column">
          <div className="contact-details-heading">
            <p className="eyebrow">Talk to Aline</p>
            <h2>Let&apos;s discuss what your project needs.</h2>
            <p>Call us directly, or send a message with the product you are looking for.</p>
          </div>

          <div className="contact-method-card">
            <span className="contact-method-icon"><Phone aria-hidden="true" size={19} /></span>
            <div><h3>Call our team</h3><p>Choose either business phone number.</p>
              <div className="contact-phone-list">
                {phoneNumbers.map((number) => <a href={`tel:${number}`} key={number}>{number}<ArrowRight aria-hidden="true" size={14} /></a>)}
              </div>
            </div>
          </div>

          <div className="contact-whatsapp-card">
            <div><span className="contact-small-label">Prefer messaging?</span><h3>Ask Aline on WhatsApp</h3><p>Send a product question or request a quotation.</p></div>
            <WhatsAppButton message="Hello Aline Construction Materials Supply. I have a question about your products and would like to request a quotation." label="Start a WhatsApp inquiry" />
          </div>

          <div className="contact-info-grid">
            <article className="contact-info-card">
              <span className="contact-method-icon"><MapPin aria-hidden="true" size={19} /></span>
              <h3>Business location</h3>
              <p>Address details to be confirmed.</p>
            </article>
            <article className="contact-info-card">
              <span className="contact-method-icon"><Clock3 aria-hidden="true" size={19} /></span>
              <h3>Opening hours</h3>
              <p>Please contact us to confirm current opening hours.</p>
            </article>
          </div>

          <div className="map-placeholder" aria-label="Placeholder for a Google Maps location map">
            <div className="map-grid" />
            <span className="map-pin"><Pin aria-hidden="true" size={22} /></span>
            <div className="map-placeholder-card"><Route aria-hidden="true" size={17} /><div><strong>Google Maps</strong><span>Add the confirmed business address to show the map.</span></div></div>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="contact-bottom-cta section-shell">
        <div><p className="eyebrow">Looking for a particular item?</p><h2>Explore the catalogue before you get in touch.</h2></div>
        <Link href="/products" className="button button-yellow">Browse products <ArrowRight aria-hidden="true" size={17} /></Link>
      </section>
    </>
  );
}
