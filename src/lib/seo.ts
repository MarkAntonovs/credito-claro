import { getLanguagePair, LANGUAGE_PAIRS } from "@/config/language-pairs";
import { siteConfig } from "@/config/site";
import type { FutureIndexability } from "@/config/routes";
import { getRegistryRobotsIntent, resolveFinalCanonicalPath } from "@/data/seo/routes";

export type RobotsIntent = FutureIndexability;

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `${siteConfig.siteUrl}/`).toString();
}

export function canonicalUrl(path = "/"): string {
  const url = new URL(absoluteUrl(path));
  url.hash = "";
  url.search = "";
  return url.toString();
}

export function canonicalRouteUrl(path = "/"): string {
  return canonicalUrl(resolveFinalCanonicalPath(path));
}

export type RouteLanguage = "es-CO" | "en";

export function getRouteLanguage(path: string): RouteLanguage {
  return path === "/en" || path.startsWith("/en/") ? "en" : siteConfig.defaultLocale;
}

export function getLanguageAlternates(path: string) {
  const canonicalPath = resolveFinalCanonicalPath(path);
  const pair =
    getLanguagePair(path) ??
    getLanguagePair(canonicalPath) ??
    // Existing English preservation pairs may still name a legacy Spanish source.
    // Match them by their resolved final Spanish destination without publishing that source.
    awaitlessLanguagePairs().find(
      (candidate) => resolveFinalCanonicalPath(candidate.esPath) === canonicalPath,
    );
  if (!pair) return [];

  return [
    {
      rel: "alternate",
      hrefLang: "es-CO",
      href: canonicalUrl(resolveFinalCanonicalPath(pair.esPath)),
    },
    { rel: "alternate", hrefLang: "en", href: canonicalUrl(pair.enPath) },
    {
      rel: "alternate",
      hrefLang: "x-default",
      href: canonicalUrl(resolveFinalCanonicalPath(pair.esPath)),
    },
  ] as const;
}

function awaitlessLanguagePairs() {
  // Kept behind a function to avoid exposing a mutable copy from this module.
  return LANGUAGE_PAIRS;
}

export function createRouteMetadata({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  path,
  robotsIntent = "index",
  openGraphType = "website",
}: {
  title?: string;
  description?: string;
  path: string;
  robotsIntent?: RobotsIntent;
  openGraphType?: "website" | "article";
}) {
  const canonicalPath = resolveFinalCanonicalPath(path);
  const url = canonicalUrl(canonicalPath);
  const registryIntent = getRegistryRobotsIntent(path);
  const effectiveIntent = registryIntent === "index" ? robotsIntent : "noindex";
  const robots = getRobotsContent(effectiveIntent);
  const language = getRouteLanguage(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: openGraphType },
      { property: "og:url", content: url },
      { property: "og:locale", content: language === "en" ? "en" : "es_CO" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: robots },
    ],
    links: [{ rel: "canonical", href: url }, ...getLanguageAlternates(canonicalPath)],
  };
}

export function getRobotsContent(intent: RobotsIntent): string {
  if (!siteConfig.indexingEnabled || intent === "noindex") {
    return "noindex, nofollow, noarchive";
  }

  return "index, follow";
}

export function getRobotsText(): string {
  if (!siteConfig.indexingEnabled) {
    return "User-agent: *\nDisallow: /\n";
  }

  return `User-agent: *\nAllow: /\n\nSitemap: ${canonicalUrl("/sitemap.xml")}\n`;
}
