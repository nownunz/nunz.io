import type { Metadata } from "next";
import { Nunito_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nunz.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nunzio Esposito | Design Leader & CDO",
    template: "%s | nunz",
  },
  description:
    "Portfolio of Nunzio Esposito, Chief Design Officer at Blue Yonder. Design leadership, product strategy, and platform transformation.",
  keywords: [
    "Nunzio Esposito",
    "Chief Design Officer",
    "Blue Yonder",
    "design leadership",
    "product strategy",
    "UX",
    "supply chain",
  ],
  authors: [{ name: "Nunzio Esposito", url: siteUrl }],
  creator: "Nunzio Esposito",
  icons: {
    icon: "/nunz.png",
    apple: "/nunz.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "nunz",
    title: "Nunzio Esposito | Design Leader & CDO",
    description:
      "Portfolio of Nunzio Esposito, Chief Design Officer at Blue Yonder. Design leadership, product strategy, and platform transformation.",
    images: [
      {
        url: "/nunzio-esposito-keynote.webp",
        width: 4032,
        height: 3024,
        alt: "Nunzio Esposito presenting at a keynote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nunzio Esposito | Design Leader & CDO",
    description:
      "Portfolio of Nunzio Esposito, Chief Design Officer at Blue Yonder.",
    images: ["/nunzio-esposito-keynote.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${nunitoSans.className} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
