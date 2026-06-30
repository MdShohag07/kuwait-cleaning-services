import type { Metadata } from "next";
import { Fraunces, Inter, Cairo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-fraunces", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-arabic", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://saffa.kw"),
  title: `${site.name} | Premium Cleaning Services in Kuwait`,
  description: "White-glove cleaning across Kuwait — homes, villas and offices. Vetted crews, eco-safe products, transparent KD pricing and a spotless guarantee.",
  openGraph: { title: `${site.name} | Premium Cleaning, Kuwait`, description: "White-glove cleaning across Kuwait. Book in 60 seconds.", url: "https://saffa.kw", type: "website", locale: "en_KW" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "LocalBusiness",
  name: "Saffa Cleaning Services", url: "https://saffa.kw", telephone: site.phone, priceRange: "KD",
  address: { "@type": "PostalAddress", addressLocality: "Kuwait City", addressCountry: "KW" },
  areaServed: ["Kuwait City", "Hawalli", "Salmiya", "Mishref", "Jabriya", "Ahmadi"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "600" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${cairo.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem('lang')||'en';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';}catch(e){}`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}