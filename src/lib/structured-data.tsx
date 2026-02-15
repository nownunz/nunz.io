import React from "react";

const siteUrl = "https://nunz.io";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "nunz",
    url: siteUrl,
    description:
      "Portfolio of Nunzio Esposito, Chief Design Officer at Blue Yonder.",
    author: {
      "@type": "Person",
      name: "Nunzio Esposito",
      url: siteUrl,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nunzio Esposito",
    url: siteUrl,
    image: `${siteUrl}/nunzio-esposito-icon.png`,
    jobTitle: "Chief Design Officer",
    worksFor: {
      "@type": "Organization",
      name: "Blue Yonder",
      url: "https://blueyonder.com",
    },
    sameAs: [
      "https://x.com/nownunz",
      "https://linkedin.com/in/nunzioesposito",
      "https://github.com/nownunz",
      "https://blueyonder.design",
    ],
  };
}

export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Person",
      name: "Nunzio Esposito",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Nunzio Esposito",
      url: siteUrl,
    },
    image: `${siteUrl}/nunzio-esposito-keynote.webp`,
    keywords: tags.join(", "),
  };
}
