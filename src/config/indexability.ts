import { reviewedLegacyArticles } from "@/data/migration/reviewed-articles";
import { VERIFIED_PROVIDERS } from "@/data/providers/providers";
import {
  FINAL_SEO_ROUTES,
  IMPLEMENTED_FINAL_SEO_ROUTES,
  LIVE_INDEXABLE_FINAL_SEO_ROUTES,
} from "@/data/seo/routes";

export interface IndexableRoute {
  path: string;
  lastmod?: string;
  group: "spanish_content" | "provider";
  routeId: string;
}

function newestDate(dates: readonly (string | undefined)[]): string | undefined {
  return dates
    .filter((date): date is string => Boolean(date))
    .sort()
    .at(-1);
}

function routeLastmod(route: (typeof FINAL_SEO_ROUTES)[number]): string | undefined {
  if (route.finalUrl === "/prestamistas/") {
    return newestDate(VERIFIED_PROVIDERS.map((provider) => provider.verifiedAt));
  }
  if (route.finalUrl.startsWith("/prestamistas/")) {
    const slug = route.finalUrl.split("/").filter(Boolean).at(-1);
    return VERIFIED_PROVIDERS.find((provider) => provider.slug === slug)?.verifiedAt;
  }

  const reviewPath = [route.finalUrl, ...route.legacyUrls].find(
    (path) => reviewedLegacyArticles[path],
  );
  return reviewPath ? reviewedLegacyArticles[reviewPath]?.reviewedAt : undefined;
}

export const IMPLEMENTED_FINAL_ROUTES = IMPLEMENTED_FINAL_SEO_ROUTES.map((route) => ({
  path: route.finalUrl,
  routeId: route.id,
  indexability: route.liveIndexable ? ("index" as const) : ("noindex" as const),
  implementationState: route.implementationState,
}));

/** Production sitemap candidates. Environment gating happens in renderXmlSitemap. */
export const INDEXABLE_ROUTES: readonly IndexableRoute[] = LIVE_INDEXABLE_FINAL_SEO_ROUTES.map(
  (route): IndexableRoute => {
    const lastmod = routeLastmod(route);
    return {
      path: route.finalUrl,
      ...(lastmod ? { lastmod } : {}),
      group: route.finalUrl.startsWith("/prestamistas/") ? "provider" : "spanish_content",
      routeId: route.id,
    };
  },
).sort((first, second) => first.path.localeCompare(second.path));

export const NOINDEX_INTENDED_ROUTES = FINAL_SEO_ROUTES.filter((route) => !route.liveIndexable).map(
  (route) => route.finalUrl,
);

const duplicateIndexablePaths = INDEXABLE_ROUTES.filter(
  (route, index) =>
    INDEXABLE_ROUTES.findIndex((candidate) => candidate.path === route.path) !== index,
);
if (duplicateIndexablePaths.length > 0) {
  throw new Error(
    `Duplicate final indexable routes: ${duplicateIndexablePaths.map(({ path }) => path).join(", ")}`,
  );
}
