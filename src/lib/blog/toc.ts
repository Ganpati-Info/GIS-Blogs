export interface TocHeading {
  id: string;
  text: string;
  level: "H2" | "H3";
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(html: string): TocHeading[] {
  if (typeof window === "undefined") return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  return Array.from(doc.querySelectorAll("h2,h3")).map((heading, index) => ({
    id: heading.id || slugifyHeading(heading.textContent ?? `heading-${index}`),
    text: heading.textContent ?? "",
    level: heading.tagName as "H2" | "H3",
  }));
}

export function injectHeadingIds(html: string) {
  if (typeof window === "undefined") return html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("h2,h3").forEach((heading) => {
    if (!heading.id) {
      heading.id = slugifyHeading(heading.textContent ?? "");
    }
  });

  return doc.body.innerHTML;
}
