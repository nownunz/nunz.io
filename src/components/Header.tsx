"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="block">
            <Image
              src="/nunz.png"
              alt="nunz"
              width={40}
              height={40}
              className="rounded-lg hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/infrastructure"
              className="text-foreground/70 hover:text-foreground transition-colors"
              title="Blog"
            >
              Infrastructure
            </a>
            <a
              href="/outcomes"
              className="text-foreground/70 hover:text-foreground transition-colors"
              title="Case Studies"
            >
              Outcomes
            </a>
            <a
              href="/source"
              className="text-foreground/70 hover:text-foreground transition-colors"
              title="About Me"
            >
              Source
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="/infrastructure"
              className="text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
              title="Blog"
            >
              Infrastructure
            </a>
            <a
              href="/outcomes"
              className="text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
              title="Case Studies"
            >
              Outcomes
            </a>
            <a
              href="/source"
              className="text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
              title="About Me"
            >
              Source
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
