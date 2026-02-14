import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCasesByTag, getAllCaseTags } from "@/lib/cases";

export async function generateStaticParams() {
  const tags = getAllCaseTags();
  return tags.map((tag) => ({ tag: tag.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  return {
    title: `${tag} | Outcomes`,
    description: `Case studies tagged with ${tag}`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const cases = getCasesByTag(tag);
  const allTags = getAllCaseTags();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/outcomes"
            className="text-accent font-mono text-sm mb-8 inline-block hover:underline"
          >
            &larr; All Case Studies
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tagged: <span className="text-accent">{tag}</span>
          </h1>
          <p className="text-foreground/70 text-lg mb-12">
            {cases.length} case stud{cases.length !== 1 ? "ies" : "y"} with this tag.
          </p>

          <div className="mb-12">
            <h2 className="text-sm font-mono text-foreground/50 mb-4">
              All tags
            </h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/outcomes"
                className="px-3 py-1 bg-card-bg border border-card-border rounded-full text-sm font-mono hover:border-accent/50 transition-colors"
              >
                All
              </Link>
              {allTags.map((t) => (
                <Link
                  key={t}
                  href={`/outcomes/tag/${t.toLowerCase()}`}
                  className={`px-3 py-1 rounded-full text-sm font-mono transition-colors ${
                    t.toLowerCase() === tag.toLowerCase()
                      ? "bg-accent/10 text-accent"
                      : "bg-card-bg border border-card-border hover:border-accent/50"
                  }`}
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>

          {cases.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-foreground/50">No case studies with this tag.</p>
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
                      {caseStudy.tags.map((t) => (
                        <Link
                          key={t}
                          href={`/outcomes/tag/${t.toLowerCase()}`}
                          className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                            t.toLowerCase() === tag.toLowerCase()
                              ? "bg-accent/20 text-accent"
                              : "bg-accent/10 text-accent hover:bg-accent/20"
                          }`}
                        >
                          {t}
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
