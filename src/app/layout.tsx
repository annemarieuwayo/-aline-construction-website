import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aline Construction Materials Supply | Build Today, Better Tomorrow",
  description: "Explore construction materials, roofing, steel, pipes, hardware and tools from Aline Construction Materials Supply. Contact us to request a quotation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html lang="en" className="h-full antialiased">
        <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
