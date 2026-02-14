import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllCases, getAllCaseTags } from "@/lib/cases";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outcomes",
  description: "Case studies and project outcomes",
  alternates: {
    canonical: "https://nunz.io/outcomes",
  },
  openGraph: {
    title: "Outcomes | nunz",
    description: "Case studies and project outcomes",
    url: "https://nunz.io/outcomes",
  },
};

export default function OutcomesPage() {
  const cases = getAllCases();
  const tags = getAllCaseTags();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Outcomes</h1>
          <p className="text-foreground/70 text-lg mb-12">
            Case studies and project outcomes.
          </p>

          {tags.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-mono text-foreground/50 mb-4">
                Filter by tag
              </h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/outcomes"
                  className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono hover:bg-accent/20 transition-colors"
                >
                  All
                </Link>
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/outcomes/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-card-bg border border-card-border rounded-full text-sm font-mono hover:border-accent/50 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {cases.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-foreground/50">No case studies yet. Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {cases.map((caseStudy) => (
                <article
                  key={caseStudy.slug}
                  className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/50 transition-colors"
                >
                  <Link href={`/outcomes/${caseStudy.slug}`}>
                    <h2 className="text-2xl font-bold mb-2 hover:text-accent transition-colors">
                      {caseStudy.title}
                    </h2>
                  </Link>
                  <p className="text-foreground/50 text-sm font-mono mb-3">
                    {caseStudy.date}
                  </p>
                  <p className="text-foreground/70 mb-4">{caseStudy.excerpt}</p>
                  {caseStudy.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/outcomes/tag/${tag.toLowerCase()}`}
                          className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-mono hover:bg-accent/20 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
