"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export function ProductCatalogue() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === "All products" || product.category === activeCategory;
      const searchableText = [product.name, product.category, product.description, product.specs ?? ""].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  const activeCategoryHasProducts = activeCategory === "All products" || products.some((product) => product.category === activeCategory);

  return (
    <section className="catalogue section-shell" aria-label="Product catalogue">
      <div className="catalogue-toolbar">
        <label className="catalogue-search-wrap">
          <Search aria-hidden="true" size={19} className="catalogue-search-icon" />
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products, brands or categories"
          />
          {query && <button type="button" aria-label="Clear search" className="clear-search" onClick={() => setQuery("")}><X aria-hidden="true" size={16} /></button>}
        </label>
        <div className="catalogue-result"><SlidersHorizontal aria-hidden="true" size={15} /><span>{filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}</span></div>
      </div>

      <div className="catalogue-filters" aria-label="Filter by product category">
        {["All products", ...categories].map((category) => (
          <button
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`category-filter${activeCategory === category ? " selected" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="catalogue-grid">
          {filteredProducts.map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
      ) : (
        <div className="catalogue-empty">
          <span className="empty-icon"><Search aria-hidden="true" size={22} /></span>
          <h2>{activeCategoryHasProducts ? "No matching products" : "Ask us about this category"}</h2>
          <p>{activeCategoryHasProducts ? "Try another search term or clear your filters to see more of the catalogue." : `Contact Aline for details about ${activeCategory.toLowerCase()} and the sizes or options you need.`}</p>
          <div className="empty-actions">
            {query || activeCategory !== "All products" ? <button type="button" className="button button-navy" onClick={() => { setQuery(""); setActiveCategory("All products"); }}>Clear filters</button> : null}
            {!activeCategoryHasProducts && <Link className="button button-yellow" href="/contact">Ask Aline <span aria-hidden="true">→</span></Link>}
          </div>
        </div>
      )}

      <p className="catalogue-note">Prices and availability are provided on request. Contact Aline for current product details.</p>
    </section>
  );
}
