import type { Metadata } from "next";
import localFont from "next/font/local";
import { restaurantJsonLd, siteUrl } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../fonts/fraunces.woff2", weight: "500 700", style: "normal" },
    { path: "../fonts/fraunces-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [{ path: "../fonts/outfit.woff2", weight: "400 600", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
});

const title = "Perlas de Pilipinas | Filipino takeout and catering in Scarborough";
const description =
  "Authentic Filipino cuisine at 2893 Lawrence Avenue East, Unit 11, Scarborough. Takeout, Uber Eats, DoorDash, and party trays. Open Wednesday to Sunday, 7 a.m. to 7 p.m. Call 416-261-2112.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  applicationName: "Perlas de Pilipinas",
  keywords: [
    "Perlas de Pilipinas",
    "Filipino restaurant Scarborough",
    "Filipino catering Toronto",
    "lumpia",
    "tapsilog",
    "lechon",
    "Lawrence Avenue East",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_CA",
    siteName: "Perlas de Pilipinas",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
