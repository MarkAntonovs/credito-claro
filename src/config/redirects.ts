import { publicRoutes } from "@/config/routes";
import { legacyRoutes } from "@/data/migration/legacy-routes";
import { ACTIVE_FINAL_REDIRECTS, IMPLEMENTED_FINAL_SEO_ROUTES } from "@/data/seo/routes";

export interface RedirectRule {
  source: string;
  destination: string;
  kind: "legacy_alias" | "directory_normalization" | "final_url_migration" | "merged_intent";
}

export const FINAL_MIGRATION_REDIRECTS: readonly RedirectRule[] = ACTIVE_FINAL_REDIRECTS.map(
  (redirect) => ({ ...redirect }),
);

const finalDestinationBySource = new Map(
  FINAL_MIGRATION_REDIRECTS.map((redirect) => [redirect.source, redirect.destination]),
);

function flattenFinalDestination(destination: string): string {
  return finalDestinationBySource.get(destination) ?? destination;
}

export const LEGACY_REDIRECTS: readonly RedirectRule[] = legacyRoutes
  .filter((route) => route.migrationStatus === "redirect")
  .map((route) => ({
    source: route.legacyPath,
    destination: flattenFinalDestination(route.targetPath),
    kind: "legacy_alias" as const,
  }))
  .filter((route) => route.source !== route.destination);

const canonicalDirectoryPaths = [
  publicRoutes.providers.directory.path,
  ...IMPLEMENTED_FINAL_SEO_ROUTES.filter(
    (route) => route.finalUrl.startsWith("/prestamistas/") && route.finalUrl !== "/prestamistas/",
  ).map((route) => route.finalUrl),
  ...Object.values(publicRoutes.trust).map((route) => route.path),
] as const;

export const DIRECTORY_NORMALIZATION_REDIRECTS: readonly RedirectRule[] = [
  ...canonicalDirectoryPaths.map((destination) => ({
    source: destination.slice(0, -1),
    destination,
    kind: "directory_normalization" as const,
  })),
  // The old directory existed with and without a trailing slash. Both old forms
  // migrate directly to the final namespace without a normalization chain.
  {
    source: "/proveedores",
    destination: publicRoutes.providers.directory.path,
    kind: "final_url_migration" as const,
  },
];

export const REDIRECT_RULES: readonly RedirectRule[] = [
  ...FINAL_MIGRATION_REDIRECTS,
  ...LEGACY_REDIRECTS,
  ...DIRECTORY_NORMALIZATION_REDIRECTS,
];

const redirectBySource = new Map(REDIRECT_RULES.map((rule) => [rule.source, rule]));

export function resolveRedirect(requestUrl: string): string | null {
  const url = new URL(requestUrl);
  const pathRule = redirectBySource.get(url.pathname);
  if (!pathRule) return null;
  return `${pathRule.destination}${url.search}`;
}

const duplicateRedirectSources = REDIRECT_RULES.filter(
  (rule, index) =>
    REDIRECT_RULES.findIndex((candidate) => candidate.source === rule.source) !== index,
);
if (duplicateRedirectSources.length > 0) {
  throw new Error(
    `Duplicate redirect sources: ${duplicateRedirectSources.map(({ source }) => source).join(", ")}`,
  );
}

const redirectSources = new Set(REDIRECT_RULES.map((rule) => rule.source));
const redirectChains = REDIRECT_RULES.filter((rule) => redirectSources.has(rule.destination));
if (redirectChains.length > 0) {
  throw new Error(
    `Redirect chains detected: ${redirectChains.map(({ source, destination }) => `${source} -> ${destination}`).join(", ")}`,
  );
}
