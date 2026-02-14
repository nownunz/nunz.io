import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, personJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Nunzio Esposito",
  description:
    "Chief Design Officer at Blue Yonder, leading experience strategy for the world's AI Infrastructure for Autonomous Supply Chains. 20+ years in design leadership.",
  alternates: {
    canonical: "https://nunz.io/source",
  },
  openGraph: {
    title: "About Nunzio Esposito",
    description:
      "Chief Design Officer at Blue Yonder. 20+ years in design leadership, product strategy, and platform transformation.",
    url: "https://nunz.io/source",
  },
};

export default function SourcePage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <Header />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Source</h1>

          <div className="space-y-8">
            <p className="text-[28px] text-foreground/80 leading-snug">
              Nunzio Esposito is the Chief Design Officer at{" "}
              <a
                href="https://blueyonder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Blue Yonder
              </a>
              , leading the experience strategy and execution for the
              world&apos;s only AI Infrastructure for Autonomous Supply Chains.
            </p>
            <p className="text-lg text-foreground/70 leading-loose">
              He is responsible for unifying the total experience across
              platform, channel, customer, and user—creating one cohesive
              engagement. This is a tectonic shift: translating Blue
              Yonder&apos;s precision and intelligence into modern
              interactions—tactile, dimensional, smart, engaging. Experiences
              that embrace complexity, harness data density, and liberate people
              to focus on innovation.
            </p>
            <p className="text-lg text-foreground/70 leading-loose">
              Previously, Nunzio led global design and product initiatives
              across enterprise software at Infor. He brings more than 20 years
              of experience in design leadership, product strategy, and platform
              transformation.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="https://blueyonder.design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-accent transition-colors"
              aria-label="Blue Yonder"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="44 47 119 109">
                <path d="M103.4,57.4c-7.8,0-14,6.3-14,14,0,7.8,6.3,14,14,14,7.8,0,14-6.3,14-14,0-7.8-6.3-14-14-14ZM103.4,148.1c7.8,0,14-6.3,14-14,0-7.8-6.3-14-14-14-7.8,0-14,6.3-14,14s6.3,14,14,14ZM106.4,102.8c0,1.4.8,2.6,2,3.1h0s20.4,9.6,20.4,9.6c0,0,0,0,0,0,1.8.9,3.8,1.3,6,1.3,7.8,0,14-6.3,14-14s-6.3-14-14-14c-2.1,0-4.2.5-6,1.3,0,0,0,0,0,0l-20.4,9.6h0c-1.2.5-2,1.7-2,3.1ZM100.5,102.8c0-1.4-.8-2.6-2-3.1h0s-20.4-9.6-20.4-9.6h0c-1.8-.9-3.8-1.3-6-1.3-7.8,0-14,6.3-14,14s6.3,14,14,14c2.1,0,4.2-.5,6-1.3h0s20.4-9.6,20.4-9.6h0c1.2-.5,2-1.7,2-3.1Z" />
              </svg>
            </a>
            <a
              href="https://github.com/nownunz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
