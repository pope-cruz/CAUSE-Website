import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

// Set SITE_URL at build time once the production domain is confirmed.
const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Opportunity should have no borders`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Opportunity should have no borders`,
    description: site.description,
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Opportunity should have no borders`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#305db6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="min-h-screen font-sans text-[1.0625rem] leading-relaxed">
        {children}
      </body>
    </html>
  );
}
