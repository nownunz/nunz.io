import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "CSS/Tailwind",
    "Git",
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">About Me</h1>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-foreground/70 text-lg">
              <p>
                Hello! I&apos;m nunz, a passionate developer who loves creating
                things that live on the internet. My interest in web development
                started back in [year] when I decided to try building custom
                websites.
              </p>
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of
                working at various companies and on diverse projects. My main
                focus these days is building accessible, inclusive products and
                digital experiences.
              </p>
              <p>Here are a few technologies I&apos;ve been working with:</p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 font-mono text-sm"
                  >
                    <span className="text-accent">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="relative z-10 rounded-lg overflow-hidden bg-accent/20">
                <div className="aspect-square bg-card-bg flex items-center justify-center text-6xl">
                  👤
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
