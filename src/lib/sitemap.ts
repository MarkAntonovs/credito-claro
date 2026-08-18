import { INDEXABLE_ROUTES } from "@/config/indexability";
import { siteConfig } from "@/config/site";
import { canonicalUrl } from "@/lib/seo";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function renderXmlSitemap(): string {
  const routes = siteConfig.indexingEnabled ? INDEXABLE_ROUTES : [];
  const urls = routes.map(({ path, lastmod }) => {
    const fields = [`    <loc>${escapeXml(canonicalUrl(path))}</loc>`];
    if (lastmod) fields.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`);
    return `  <url>\n${fields.join("\n")}\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}
