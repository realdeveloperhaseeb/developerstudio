import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";
import JsonLd from "@/components/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}. ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "digital marketing agency UK",
    "web development for law firms",
    "roofing company marketing",
    "SEO agency UK",
    "Google Ads agency",
    "app development UK",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
  verification: {
    // Google Search Console. Next.js renders this as
    // <meta name="google-site-verification" content=".." />
    google: "3RL-QPOsLnl29KrrBPmammgDTSXldRH3wAv-w8ZWxrE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LeadPopup />
      </body>
    </html>
  );
}
