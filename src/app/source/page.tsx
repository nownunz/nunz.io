import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SourcePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Source</h1>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-foreground/80 leading-loose">
              Nunzio Esposito is the Chief Design Officer at Blue Yonder, leading the
              experience strategy for the company&apos;s AI-native, end-to-end
              supply chain platform.
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
        </div>
      </main>
      <Footer />
    </>
  );
}
