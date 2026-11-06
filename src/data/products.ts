import type { Product } from "@/types/product";

export const categories = [
  "Cement",
  "Iron Sheets",
  "Steel Bars",
  "Gutters",
  "Nails",
  "Water Pipes & Accessories",
  "Discs, Baguette & Accessories",
  "Cutting & Scraping Tools",
  "Door Locks",
  "Mastic & Sealant",
];

export const products: Product[] = [
  // Cement
  { id: "cement-cimerwa-32-5", name: "Cimerwa 32.5", category: "Cement", description: "Cement listed in the Aline product range.", image: "/images/products/cement.jpg" },
  { id: "cement-cheetah-32-5", name: "Cheetah 32.5", category: "Cement", description: "Cement listed in the Aline product range.", image: "/images/products/cement.jpg" },
  { id: "cement-twiga-42-5", name: "Twiga 42.5", category: "Cement", description: "Cement listed in the Aline product range.", image: "/images/products/cement.jpg" },
  // Iron Sheets
  { id: "iron-bg30-no1", name: "BG 30 No1", category: "Iron Sheets", description: "Iron sheet product listed in the Aline product range.", image: "/images/products/iron-sheets.jpg" },
  { id: "iron-bg32-no1", name: "BG 32 No1", category: "Iron Sheets", description: "Iron sheet product listed in the Aline product range.", image: "/images/products/iron-sheets.jpg" },
  { id: "iron-a-zinc", name: "A Zinc", category: "Iron Sheets", description: "Iron sheet product listed in the Aline product range.", image: "/images/products/iron-sheets.jpg" },
  { id: "iron-tembo", name: "Tembo", category: "Iron Sheets", description: "Iron sheet product listed in the Aline product range.", image: "/images/products/iron-sheets.jpg" },
  // Steel Bars (Fer à béton)
  { id: "steel-16", name: "Steel Bar 16", category: "Steel Bars", description: "Reinforcement bar, size 16 as listed in the advertisement.", specs: "16", image: "/images/products/steel-bars.jpg" },
  { id: "steel-14", name: "Steel Bar 14", category: "Steel Bars", description: "Reinforcement bar, size 14 as listed in the advertisement.", specs: "14", image: "/images/products/steel-bars.jpg" },
  { id: "steel-12", name: "Steel Bar 12", category: "Steel Bars", description: "Reinforcement bar, size 12 as listed in the advertisement.", specs: "12", image: "/images/products/steel-bars.jpg" },
  { id: "steel-10", name: "Steel Bar 10", category: "Steel Bars", description: "Reinforcement bar, size 10 as listed in the advertisement.", specs: "10", image: "/images/products/steel-bars.jpg" },
  { id: "steel-8", name: "Steel Bar 8", category: "Steel Bars", description: "Reinforcement bar, size 8 as listed in the advertisement.", specs: "8", image: "/images/products/steel-bars.jpg" },
  { id: "steel-6", name: "Steel Bar 6", category: "Steel Bars", description: "Reinforcement bar, size 6 as listed in the advertisement.", specs: "6", image: "/images/products/steel-bars.jpg" },
  // Gutters
  { id: "gutter-big", name: "Gutter - Big", category: "Gutters", description: "Large gutter listed in the Aline product range.", image: "/images/products/gutters.jpg" },
  { id: "gutter-medium", name: "Gutter - Medium", category: "Gutters", description: "Medium gutter listed in the Aline product range.", image: "/images/products/gutters.jpg" },
  { id: "gutter-small", name: "Gutter - Small", category: "Gutters", description: "Small gutter listed in the Aline product range.", image: "/images/products/gutters.jpg" },
  // Nails
  { id: "nail-15cm", name: "Nails 15cm", category: "Nails", description: "Nails in the 15cm size listed in the advertisement.", specs: "15cm", image: "/images/products/nails.jpg" },
  { id: "nail-12cm", name: "Nails 12cm", category: "Nails", description: "Nails in the 12cm size listed in the advertisement.", specs: "12cm", image: "/images/products/nails.jpg" },
  { id: "nail-10cm", name: "Nails 10cm", category: "Nails", description: "Nails in the 10cm size listed in the advertisement.", specs: "10cm", image: "/images/products/nails.jpg" },
  { id: "nail-8cm", name: "Nails 8cm", category: "Nails", description: "Nails in the 8cm size listed in the advertisement.", specs: "8cm", image: "/images/products/nails.jpg" },
  { id: "nail-6cm", name: "Nails 6cm", category: "Nails", description: "Nails in the 6cm size listed in the advertisement.", specs: "6cm", image: "/images/products/nails.jpg" },
  { id: "nail-4cm", name: "Nails 4cm", category: "Nails", description: "Nails in the 4cm size listed in the advertisement.", specs: "4cm", image: "/images/products/nails.jpg" },
  // Water Pipes
  { id: "pipe-pvc-110", name: "PVC 110", category: "Water Pipes & Accessories", description: "PVC pipe in the 110 size listed in the advertisement.", specs: "110", image: "/images/products/water-pipes.jpg" },
  { id: "pipe-pvc-90", name: "PVC 90", category: "Water Pipes & Accessories", description: "PVC pipe in the 90 size listed in the advertisement.", specs: "90", image: "/images/products/water-pipes.jpg" },
  { id: "pipe-pvc-63", name: "PVC 63", category: "Water Pipes & Accessories", description: "PVC pipe in the 63 size listed in the advertisement.", specs: "63", image: "/images/products/water-pipes.jpg" },
  { id: "pipe-pvc-50", name: "PVC 50", category: "Water Pipes & Accessories", description: "PVC pipe in the 50 size listed in the advertisement.", specs: "50", image: "/images/products/water-pipes.jpg" },
  // Discs, Baguette & Accessories
  { id: "acc-discs", name: "Discs", category: "Discs, Baguette & Accessories", description: "Discs listed in the Aline product range.", image: "/images/products/disc.jpg" },
  { id: "acc-baguette", name: "Baguette", category: "Discs, Baguette & Accessories", description: "Baguette listed in the Aline product range.", image: "/images/products/baguette.jpg" },
  { id: "acc-gloves", name: "Gloves", category: "Discs, Baguette & Accessories", description: "Gloves listed in the Aline product range.", image: "/images/products/discs-baguette-accessories.jpg" },
  { id: "acc-levels", name: "Levels", category: "Discs, Baguette & Accessories", description: "Levels listed in the Aline product range.", image: "/images/products/discs-baguette-accessories.jpg" },
  { id: "acc-amaco-paints", name: "Amaco Paints", category: "Discs, Baguette & Accessories", description: "Amaco paints listed in the Aline product range.", image: "/images/products/amaco-paint.jpg" },
  { id: "acc-sachets", name: "Sachets", category: "Discs, Baguette & Accessories", description: "Sachets listed in the Aline product range.", image: "/images/products/discs-baguette-accessories.jpg" },
  { id: "acc-other", name: "Other Accessories", category: "Discs, Baguette & Accessories", description: "Other accessories listed in the Aline product range.", image: "/images/products/discs-baguette-accessories.jpg" },
  // Cutting & Scraping Tools
  { id: "tool-cutting", name: "Cutting Tools", category: "Cutting & Scraping Tools", description: "Cutting tools listed in the Aline product range.", image: "/images/products/cutting-tools.jpg" },
  { id: "tool-scrapers", name: "Scrapers", category: "Cutting & Scraping Tools", description: "Scrapers listed in the Aline product range.", image: "/images/products/cutting-scraping-tools.jpg" },
  { id: "tool-machetes", name: "Machetes", category: "Cutting & Scraping Tools", description: "Machetes listed in the Aline product range.", image: "/images/products/machete.jpg" },
  { id: "tool-hammers", name: "Hammers", category: "Cutting & Scraping Tools", description: "Hammers listed in the Aline product range.", image: "/images/products/hammer.jpg" },
  // Door Locks
  { id: "lock-kale-no1", name: "Kale No 1", category: "Door Locks", description: "Kale No 1 door lock listed in the Aline product range.", image: "/images/products/door-locks.jpg" },
  { id: "lock-gjs", name: "GJS", category: "Door Locks", description: "GJS door lock listed in the Aline product range.", image: "/images/products/door-locks.jpg" },
  { id: "lock-kenyos", name: "Kenyos", category: "Door Locks", description: "Kenyos door lock listed in the Aline product range.", image: "/images/products/door-locks.jpg" },
  // Mastic & Sealant
  { id: "sealant-p38", name: "P38", category: "Mastic & Sealant", description: "P38 mastic/sealant listed in the Aline product range.", image: "/images/products/mastic-sealant.jpg" },
  { id: "sealant-capci", name: "CAPCI", category: "Mastic & Sealant", description: "CAPCI mastic/sealant listed in the Aline product range.", image: "/images/products/mastic-sealant.jpg" },
];
