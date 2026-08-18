import { FINAL_SEO_ROUTES, MERGED_SEO_INTENTS } from "./seo-routes.generated";

export { FINAL_SEO_ROUTES, MERGED_SEO_INTENTS };

export type FinalSeoRoute = (typeof FINAL_SEO_ROUTES)[number];
export type MergedSeoIntent = (typeof MERGED_SEO_INTENTS)[number];
export type SeoRobotsIntent = "index" | "noindex";

export interface SeoRedirectDefinition {
  source: string;
  destination: string;
  kind: "final_url_migration" | "merged_intent";
}

const routeById = new Map<string, FinalSeoRoute>(
  FINAL_SEO_ROUTES.map((route) => [route.id, route]),
);
const routeByName = new Map<string, FinalSeoRoute>(
  FINAL_SEO_ROUTES.map((route) => [route.pageName, route]),
);
const routeByFinalUrl = new Map<string, FinalSeoRoute>(
  FINAL_SEO_ROUTES.map((route) => [route.finalUrl, route]),
);

export const IMPLEMENTED_FINAL_SEO_ROUTES = FINAL_SEO_ROUTES.filter((route) => route.implemented);

export const LIVE_INDEXABLE_FINAL_SEO_ROUTES = FINAL_SEO_ROUTES.filter(
  (route) => route.liveIndexable && route.sitemapIntended,
);

export const ACTIVE_FINAL_REDIRECTS: readonly SeoRedirectDefinition[] = [
  ...FINAL_SEO_ROUTES.flatMap((route) =>
    route.legacyUrls.length > 0 && route.implemented
      ? route.legacyUrls.map((source) => ({
          source,
          destination: route.finalUrl,
          kind: "final_url_migration" as const,
        }))
      : [],
  ),
  ...MERGED_SEO_INTENTS.flatMap((intent) => {
    const target = routeById.get(intent.targetId);
    return intent.migrationAction === "301 REDIRECT" && intent.sourceUrl && target?.implemented
      ? [
          {
            source: intent.sourceUrl,
            destination: intent.targetUrl,
            kind: "merged_intent" as const,
          },
        ]
      : [];
  }),
];

export const PREPARED_CONDITIONAL_MIGRATIONS: readonly {
  source: string;
  destination: string;
  routeId: string;
  active: false;
}[] = [];

const activeRedirectBySource = new Map(
  ACTIVE_FINAL_REDIRECTS.map((redirect) => [redirect.source, redirect]),
);

export function getFinalSeoRouteById(id: string): FinalSeoRoute | undefined {
  return routeById.get(id);
}

export function getFinalSeoRouteByName(pageName: string): FinalSeoRoute | undefined {
  return routeByName.get(pageName);
}

export function getFinalSeoRoute(path: string): FinalSeoRoute | undefined {
  return routeByFinalUrl.get(path);
}

export function getFinalRedirect(path: string): SeoRedirectDefinition | undefined {
  return activeRedirectBySource.get(path);
}

export function isKnownRedirectSource(path: string): boolean {
  return activeRedirectBySource.has(path);
}

export function resolveFinalCanonicalPath(path: string): string {
  return activeRedirectBySource.get(path)?.destination ?? path;
}

export function getRegistryRobotsIntent(path: string): SeoRobotsIntent {
  const route = getFinalSeoRoute(resolveFinalCanonicalPath(path));
  return route?.liveIndexable ? "index" : "noindex";
}

export interface SeoCrumb {
  label: string;
  href?: string;
}

export function getSeoBreadcrumbs(path: string): SeoCrumb[] | undefined {
  const route = getFinalSeoRoute(resolveFinalCanonicalPath(path));
  if (!route || route.finalUrl === "/") return undefined;

  const crumbs: SeoCrumb[] = [{ label: "Inicio", href: "/" }];
  if (route.parentId && route.parentId !== "home") {
    const parent = routeById.get(route.parentId);
    if (parent?.implemented) crumbs.push({ label: parent.pageName, href: parent.finalUrl });
  }
  crumbs.push({ label: route.pageName });
  return crumbs;
}

export interface SeoInternalLink {
  label: string;
  href: string;
  relation: "parent" | "child" | "context";
}

export function getImplementedSeoLinks(path: string): SeoInternalLink[] {
  const route = getFinalSeoRoute(resolveFinalCanonicalPath(path));
  if (!route) return [];

  const links: SeoInternalLink[] = [];
  if (route.parentId && route.parentId !== "home") {
    const parent = routeById.get(route.parentId);
    if (parent?.implemented) {
      links.push({ label: parent.pageName, href: parent.finalUrl, relation: "parent" });
    }
  }

  for (const child of FINAL_SEO_ROUTES) {
    if (child.parentId === route.id && child.implemented) {
      links.push({ label: child.pageName, href: child.finalUrl, relation: "child" });
    }
  }

  for (const target of route.internalLinkTargets) {
    const targetRoute = routeById.get(target.targetId);
    if (
      targetRoute?.implemented &&
      targetRoute.finalUrl !== route.finalUrl &&
      target.relation === "context"
    ) {
      links.push({ label: targetRoute.pageName, href: targetRoute.finalUrl, relation: "context" });
    }
  }

  return links.filter(
    (link, index, all) => all.findIndex((candidate) => candidate.href === link.href) === index,
  );
}

export function canonicalizeInternalHref(href: string): string {
  if (!href.startsWith("/")) return href;
  const url = new URL(href, "https://internal.invalid");
  const destination = resolveFinalCanonicalPath(url.pathname);
  return `${destination}${url.search}${url.hash}`;
}

export function rewriteKnownRedirectLinks(html: string): string {
  return html.replace(/href=(["'])(\/[^"']*)\1/gi, (match, quote, href) => {
    const canonicalHref = canonicalizeInternalHref(href);
    return canonicalHref === href ? match : `href=${quote}${canonicalHref}${quote}`;
  });
}

const duplicateRedirectSources = ACTIVE_FINAL_REDIRECTS.filter(
  (redirect, index) =>
    ACTIVE_FINAL_REDIRECTS.findIndex((candidate) => candidate.source === redirect.source) !== index,
);
if (duplicateRedirectSources.length > 0) {
  throw new Error(
    `Duplicate final redirect sources: ${duplicateRedirectSources.map(({ source }) => source).join(", ")}`,
  );
}

for (const redirect of ACTIVE_FINAL_REDIRECTS) {
  if (redirect.source === redirect.destination) {
    throw new Error(`Self-redirect in final SEO registry: ${redirect.source}`);
  }
  if (!routeByFinalUrl.has(redirect.destination)) {
    throw new Error(`Final redirect target is not registered: ${redirect.destination}`);
  }
}
