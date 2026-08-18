import { canonicalUrl } from "@/lib/seo";

interface BreadcrumbInput {
  label: string;
  href?: string;
}

export interface WebSiteStructuredData {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  inLanguage: "es-CO";
}

export interface OrganizationStructuredData {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
}

export interface WebPageStructuredData {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  inLanguage: "es-CO" | "en";
  isPartOf: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
}

export interface BreadcrumbListStructuredData {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ArticleStructuredData {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  url: string;
  inLanguage: "es-CO" | "en";
  dateModified?: string;
  author?: {
    "@type": "Organization";
    name: string;
  };
}

export type StructuredDataValue =
  | WebSiteStructuredData
  | BreadcrumbListStructuredData
  | ArticleStructuredData
  | OrganizationStructuredData
  | WebPageStructuredData;

export function createWebSiteStructuredData({ name }: { name: string }): WebSiteStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: canonicalUrl("/"),
    inLanguage: "es-CO",
  };
}

export function createOrganizationStructuredData({
  name,
}: {
  name: string;
}): OrganizationStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: canonicalUrl("/"),
  };
}

export function createWebPageStructuredData({
  name,
  description,
  path,
  language = "es-CO",
  siteName,
}: {
  name: string;
  description: string;
  path: string;
  language?: "es-CO" | "en";
  siteName: string;
}): WebPageStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: language,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: canonicalUrl("/"),
    },
  };
}

export function createBreadcrumbListStructuredData(
  breadcrumbs: readonly BreadcrumbInput[],
  currentPath: string,
): BreadcrumbListStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: canonicalUrl(crumb.href ?? currentPath),
    })),
  };
}

export function createArticleStructuredData({
  headline,
  description,
  path,
  language,
  dateModified,
  authorName,
}: {
  headline: string;
  description: string;
  path: string;
  language: "es-CO" | "en";
  dateModified?: string;
  authorName?: string;
}): ArticleStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: canonicalUrl(path),
    inLanguage: language,
    ...(dateModified ? { dateModified } : {}),
    ...(authorName
      ? {
          author: {
            "@type": "Organization" as const,
            name: authorName,
          },
        }
      : {}),
  };
}

export function serializeStructuredData(data: StructuredDataValue): string {
  return JSON.stringify(data)
    .replaceAll("<", "\\u003c")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029");
}
