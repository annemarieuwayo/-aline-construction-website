"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topline"><div className="header-inner topline-inner"><span>Building supplies for your next project</span><span>Build Today, Better Tomorrow.</span></div></div>
      <div className="header-inner nav-row">
        <Link href="/" className="brand" aria-label="Aline Construction Materials Supply home" onClick={() => setOpen(false)}>
          <span className="brand-symbol">A<span>.</span></span>
          <span className="brand-name">Aline <small>CONSTRUCTION MATERIALS SUPPLY</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`nav-link${active ? " active" : ""}`}>
                {label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="nav-quote">Get a quote <ArrowUpRight aria-hidden="true" size={15} /></Link>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={`mobile-nav-link${active ? " active" : ""}`}>{label}</Link>;
          })}
          <Link href="/contact" onClick={() => setOpen(false)} className="mobile-quote">Request a quotation <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </nav>
      )}
    </header>
  );
}
