export default function Hero() {
  return (
    <section className="px-6">
      <div className="max-w-4xl text-center">
        <p className="text-accent font-mono mb-4">what up, it&apos;s</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">nunz</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground/50 mb-8">
          I design the system that shapes every interaction—human, machine, and team.
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12">
          I&apos;m a creator specializing in on-prem to cloud user experiences.
          Currently focused on a trusted, autonomous solution that powers the
          global supply chain.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/outcomes"
            className="px-8 py-4 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-colors"
          >
            View Outcomes
          </a>
          <a
            href="/source"
            className="px-8 py-4 border border-accent text-accent hover:bg-accent/10 rounded-lg font-medium transition-colors"
          >
            Source
          </a>
        </div>
      </div>
    </section>
  );
}
