import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata = {
  title: "Infrastructure | nunz",
  description: "Thoughts on infrastructure, systems, and technology",
};

export default function InfrastructurePage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure</h1>
          <p className="text-foreground/70 text-lg mb-12">
            Thoughts on infrastructure, systems, and technology.
          </p>

          {tags.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-mono text-foreground/50 mb-4">
                Filter by tag
              </h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/infrastructure"
                  className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono hover:bg-accent/20 transition-colors"
                >
                  All
                </Link>
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/infrastructure/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-card-bg border border-card-border rounded-full text-sm font-mono hover:border-accent/50 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-foreground/50">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/50 transition-colors"
                >
                  <Link href={`/infrastructure/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-2 hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-foreground/50 text-sm font-mono mb-3">
                    {post.date}
                  </p>
                  <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/infrastructure/tag/${tag.toLowerCase()}`}
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
