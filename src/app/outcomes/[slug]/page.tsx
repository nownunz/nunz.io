import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCaseBySlug, getAllCaseSlugs } from "@/lib/cases";
import { JsonLd, articleJsonLd } from "@/lib/structured-data";

export async function generateStaticParams() {
  const slugs = getAllCaseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseBySlug(slug);
  if (!caseStudy) return { title: "Case Study Not Found" };

  const url = `https://nunz.io/outcomes/${slug}`;

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${caseStudy.title} | Outcomes | nunz`,
      description: caseStudy.excerpt,
      url,
      type: "article",
      publishedTime: caseStudy.date,
      authors: ["Nunzio Esposito"],
      tags: caseStudy.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.excerpt,
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: caseStudy.title,
          description: caseStudy.excerpt,
          url: `https://nunz.io/outcomes/${slug}`,
          datePublished: caseStudy.date,
          tags: caseStudy.tags,
        })}
      />
      <Header />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/outcomes"
            className="text-accent font-mono text-sm mb-8 inline-block hover:underline"
          >
            &larr; Back to Outcomes
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-foreground/50 font-mono mb-4">{caseStudy.date}</p>
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
          </header>

          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-p:text-foreground/80
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-code:text-accent prose-code:bg-card-bg prose-code:px-1 prose-code:rounded
              prose-pre:bg-card-bg prose-pre:border prose-pre:border-card-border
              prose-blockquote:border-accent prose-blockquote:text-foreground/70
              prose-li:text-foreground/80"
            dangerouslySetInnerHTML={{ __html: caseStudy.content || "" }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
