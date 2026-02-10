export default function Hero() {
  return (
    <section className="px-4 sm:px-6 relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl text-center relative z-10">
        <p className="text-accent font-mono mb-2 sm:mb-4 text-sm sm:text-base">what up, it&apos;s</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4">nunz</h1>
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-foreground/50 mb-4 sm:mb-8 leading-tight">
          Designing the system that shapes every interaction—human, machine and team.
        </h2>
        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-6 sm:mb-12 leading-relaxed">
          I&apos;m a mechanic specializing in legacy to SaaS experiences that sunset past behaviors. Currently obsessed with user confidence in an autonomous solution that powers the global supply chains.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="/outcomes"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-colors"
          >
            View Outcomes
          </a>
          <a
            href="/source"
            className="px-6 sm:px-8 py-3 sm:py-4 border border-accent text-accent hover:bg-accent/10 rounded-lg font-medium transition-colors"
          >
            Source
          </a>
        </div>
      </div>
    </section>
  );
}
