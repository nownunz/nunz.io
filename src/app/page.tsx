import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { JsonLd, websiteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Nunzio Esposito | Design Leader & CDO",
  },
  description:
    "Designing the system that shapes every interaction. Portfolio of Nunzio Esposito, Chief Design Officer at Blue Yonder.",
  alternates: {
    canonical: "https://nunz.io",
  },
};

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <JsonLd data={websiteJsonLd()} />
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
