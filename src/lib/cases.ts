import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const casesDirectory = path.join(process.cwd(), "content/cases");

export interface CaseData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content?: string;
}

export function getAllCases(): CaseData[] {
  if (!fs.existsSync(casesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(casesDirectory);
  const allCasesData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(casesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
      };
    });

  return allCasesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllCaseTags(): string[] {
  const cases = getAllCases();
  const tagsSet = new Set<string>();
  cases.forEach((caseStudy) => {
    caseStudy.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function getCasesByTag(tag: string): CaseData[] {
  const cases = getAllCases();
  return cases.filter((caseStudy) =>
    caseStudy.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export async function getCaseBySlug(slug: string): Promise<CaseData | null> {
  if (!fs.existsSync(casesDirectory)) {
    return null;
  }

  const fullPath = path.join(casesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    content: contentHtml,
  };
}

export function getAllCaseSlugs(): string[] {
  if (!fs.existsSync(casesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(casesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}
