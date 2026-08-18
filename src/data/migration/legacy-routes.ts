import type { LegacyLanguage, LegacyPageType, LegacyRouteRecord, MigrationStatus } from "./types";

interface PhysicalRouteInput {
  path: string;
  source: string;
  language: LegacyLanguage;
  pageType: LegacyPageType;
  indexable: boolean;
  sitemap: boolean;
  status: MigrationStatus;
  notes?: string;
}

function physicalRoute(input: PhysicalRouteInput): LegacyRouteRecord {
  return {
    legacyPath: input.path,
    canonicalPath: input.path,
    language: input.language,
    pageType: input.pageType,
    legacySourceFile: input.source,
    indexableLegacy: input.indexable,
    sitemapLegacy: input.sitemap,
    migrationStatus: input.status,
    targetPath: input.path,
    notes: input.notes ?? "Physical HTML route discovered in the legacy repository.",
  };
}

const migratedSpanishRoutes: Array<
  Pick<PhysicalRouteInput, "path" | "pageType"> & { source?: string }
> = [
  { path: "/prestamos-para-pensionados-colombia.html", pageType: "pillar" },
  { path: "/requisitos-credito-para-pensionados-colombia.html", pageType: "article" },
  { path: "/descuento-automatico-pensionados-colombia.html", pageType: "article" },
  { path: "/credito-pensionados-mal-historial-colombia.html", pageType: "article" },
  { path: "/cuanto-credito-puede-pedir-un-pensionado-colombia.html", pageType: "article" },
  { path: "/prestamo-reportado-datacredito.html", pageType: "pillar" },
  { path: "/credito-sin-historial-crediticio.html", pageType: "article" },
  { path: "/consultar-historial-crediticio-gratis.html", pageType: "article" },
  { path: "/prestamos-para-independientes-colombia.html", pageType: "pillar" },
  { path: "/requisitos-credito-online-colombia.html", pageType: "article" },
  { path: "/prestamos-inmediatos-en-linea.html", pageType: "article" },
  { path: "/prestamo-solo-con-cedula-colombia.html", pageType: "article" },
  { path: "/prestamos-pequenos-montos-colombia.html", pageType: "article" },
  { path: "/credito-sin-cuenta-bancaria-colombia.html", pageType: "article" },
  { path: "/simulador-credito-como-funciona.html", pageType: "article" },
  { path: "/tasa-de-usura-colombia.html", pageType: "article" },
  { path: "/tasas-interes-prestamos-online.html", pageType: "article" },
  { path: "/costos-ocultos-creditos-online.html", pageType: "article" },
  { path: "/derechos-consumidor-financiero-colombia.html", pageType: "article" },
  { path: "/estafas-prestamos-online-colombia.html", pageType: "article" },
  { path: "/peligros-gota-gota-colombia.html", pageType: "article" },
  { path: "/no-puedo-pagar-prestamo-que-hacer.html", pageType: "article" },
  { path: "/verificar-empresa-prestamos-legitima.html", pageType: "article" },
  { path: "/que-es-estudio-de-credito.html", pageType: "article" },
  { path: "/credito-online-vs-banco.html", pageType: "article" },
  { path: "/alternativas-prestamos-online.html", pageType: "article" },
];

const spanishPhysicalRoutes: PhysicalRouteInput[] = [
  {
    path: "/",
    source: "index.html",
    language: "es",
    pageType: "commercial",
    indexable: true,
    sitemap: true,
    status: "migrated",
    notes: "Canonical homepage implemented in the TanStack Start rebuild.",
  },
  {
    path: "/404.html",
    source: "404.html",
    language: "es",
    pageType: "error",
    indexable: false,
    sitemap: false,
    status: "noindex",
  },
  {
    path: "/contacto.html",
    source: "contacto.html",
    language: "es",
    pageType: "utility",
    indexable: false,
    sitemap: false,
    status: "migrated",
  },
  {
    path: "/creditos-online-colombia.html",
    source: "creditos-online-colombia.html",
    language: "es",
    pageType: "pillar",
    indexable: true,
    sitemap: true,
    status: "migrated",
    notes: "Canonical Spanish pillar route implemented in the TanStack Start rebuild.",
  },
  {
    path: "/mapa-sitio.html",
    source: "mapa-sitio.html",
    language: "es",
    pageType: "utility",
    indexable: true,
    sitemap: true,
    status: "migrated",
    notes: "Canonical Spanish HTML sitemap implemented in the TanStack Start rebuild.",
  },
  {
    path: "/ofertas-creditos.html",
    source: "ofertas-creditos.html",
    language: "es",
    pageType: "commercial",
    indexable: true,
    sitemap: true,
    status: "migrated",
    notes: "Canonical Spanish commercial route implemented in the TanStack Start rebuild.",
  },
  {
    path: "/politica-privacidad.html",
    source: "politica-privacidad.html",
    language: "es",
    pageType: "legal",
    indexable: false,
    sitemap: false,
    status: "migrated",
  },
  {
    path: "/terminos.html",
    source: "terminos.html",
    language: "es",
    pageType: "legal",
    indexable: false,
    sitemap: false,
    status: "migrated",
  },
  {
    path: "/template-cluster-page.html",
    source: "template-cluster-page.html",
    language: "es",
    pageType: "draft",
    indexable: false,
    sitemap: false,
    status: "remove_later",
    notes: "Unpublished legacy template containing placeholder metadata.",
  },
  ...migratedSpanishRoutes.map(({ path, pageType, source }) => ({
    path,
    source: source ?? path.slice(1),
    language: "es" as const,
    pageType,
    indexable: true,
    sitemap:
      path !== "/credito-pensionados-mal-historial-colombia.html" &&
      path !== "/cuanto-credito-puede-pedir-un-pensionado-colombia.html",
    status: "migrated" as const,
    notes:
      path === "/credito-pensionados-mal-historial-colombia.html" ||
      path === "/cuanto-credito-puede-pedir-un-pensionado-colombia.html"
        ? "Migrated route; legacy indexable page was absent from the legacy sitemap."
        : "Canonical Spanish route migrated into the TanStack Start rebuild.",
  })),
];

const englishRouteFiles: Array<[string, LegacyPageType, boolean, boolean]> = [
  ["404.html", "error", false, false],
  ["alternatives-to-online-loans.html", "article", true, true],
  ["cant-pay-loan-what-to-do.html", "article", true, true],
  ["check-credit-history-free.html", "article", true, true],
  ["contact.html", "utility", false, false],
  ["dangers-of-loan-sharks-colombia.html", "article", true, true],
  ["financial-consumer-rights-colombia.html", "article", true, true],
  ["hidden-costs-online-loans.html", "article", true, true],
  ["instant-online-loans.html", "article", true, true],
  ["loan-offers.html", "commercial", true, true],
  ["loan-simulator-how-it-works.html", "article", true, true],
  ["loan-with-bad-credit-datacredito.html", "pillar", true, true],
  ["loan-with-id-only-colombia.html", "article", true, true],
  ["loan-without-bank-account-colombia.html", "article", true, true],
  ["loan-without-credit-history.html", "article", true, true],
  ["loans-for-retirees-colombia.html", "pillar", true, true],
  ["loans-for-self-employed-colombia.html", "pillar", true, true],
  ["online-loan-interest-rates.html", "article", true, true],
  ["online-loan-requirements-colombia.html", "article", true, true],
  ["online-loan-scams-colombia.html", "article", true, true],
  ["online-loan-vs-bank.html", "article", true, true],
  ["online-loans-colombia.html", "pillar", true, true],
  ["privacy-policy.html", "legal", false, false],
  ["sitemap.html", "utility", true, true],
  ["small-amount-loans-colombia.html", "article", true, true],
  ["terms.html", "legal", false, false],
  ["usury-rate-colombia.html", "article", true, true],
  ["verify-legitimate-loan-company.html", "article", true, true],
  ["what-is-credit-study.html", "article", true, true],
];

const englishPhysicalRoutes: PhysicalRouteInput[] = [
  {
    path: "/en/",
    source: "en/index.html",
    language: "en",
    pageType: "commercial",
    indexable: true,
    sitemap: true,
    status: "migrated",
    notes: "Canonical English homepage implemented in the TanStack Start rebuild.",
  },
  ...englishRouteFiles.map(([file, pageType, indexable, sitemap]) => ({
    path: `/en/${file}`,
    source: `en/${file}`,
    language: "en" as const,
    pageType,
    indexable,
    sitemap,
    status: (file === "404.html" ? "noindex" : "migrated") as MigrationStatus,
    notes:
      file === "404.html"
        ? "Legacy error document is represented by English-aware global not-found behavior; no standalone canonical route was created."
        : "Canonical English route implemented in the TanStack Start rebuild; global noindex remains active.",
  })),
];

const spanishExtensionlessAliases = [
  "alternativas-prestamos-online",
  "consultar-historial-crediticio-gratis",
  "contacto",
  "costos-ocultos-creditos-online",
  "credito-online-vs-banco",
  "credito-sin-cuenta-bancaria-colombia",
  "credito-sin-historial-crediticio",
  "creditos-online-colombia",
  "derechos-consumidor-financiero-colombia",
  "estafas-prestamos-online-colombia",
  "no-puedo-pagar-prestamo-que-hacer",
  "peligros-gota-gota-colombia",
  "politica-privacidad",
  "prestamo-reportado-datacredito",
  "prestamo-solo-con-cedula-colombia",
  "prestamos-inmediatos-en-linea",
  "prestamos-para-independientes-colombia",
  "prestamos-para-pensionados-colombia",
  "prestamos-pequenos-montos-colombia",
  "que-es-estudio-de-credito",
  "requisitos-credito-online-colombia",
  "simulador-credito-como-funciona",
  "tasa-de-usura-colombia",
  "tasas-interes-prestamos-online",
  "terminos",
  "verificar-empresa-prestamos-legitima",
] as const;

const aliasRoutes: LegacyRouteRecord[] = [
  {
    legacyPath: "/index.html",
    canonicalPath: "/",
    language: "es",
    pageType: "commercial",
    legacySourceFile: "index.html",
    indexableLegacy: false,
    sitemapLegacy: false,
    aliasOf: "/",
    legacyAliasType: "index_file_alias",
    migrationStatus: "redirect",
    targetPath: "/",
    notes: "Permanent one-hop redirect implemented by the centralized server redirect registry.",
  },
  {
    legacyPath: "/en/index.html",
    canonicalPath: "/en/",
    language: "en",
    pageType: "commercial",
    legacySourceFile: "en/index.html",
    indexableLegacy: false,
    sitemapLegacy: false,
    aliasOf: "/en/",
    legacyAliasType: "index_file_alias",
    migrationStatus: "redirect",
    targetPath: "/en/",
    notes: "Permanent one-hop redirect to the implemented /en/ canonical homepage.",
  },
  ...spanishExtensionlessAliases.map((slug): LegacyRouteRecord => {
    const canonicalPath = `/${slug}.html`;
    const canonical = spanishPhysicalRoutes.find((route) => route.path === canonicalPath);

    if (!canonical) {
      throw new Error(`Legacy alias has no physical canonical record: /${slug}`);
    }

    return {
      legacyPath: `/${slug}`,
      canonicalPath,
      language: "es",
      pageType: canonical.pageType,
      legacySourceFile: canonical.source,
      indexableLegacy: false,
      sitemapLegacy: false,
      aliasOf: canonicalPath,
      legacyAliasType: "extensionless_rewrite",
      migrationStatus: "redirect",
      targetPath: canonicalPath,
      notes: "Former legacy Netlify 200 rewrite; now a permanent one-hop redirect.",
    };
  }),
];

export const legacyRoutes: LegacyRouteRecord[] = [
  ...spanishPhysicalRoutes.map(physicalRoute),
  ...englishPhysicalRoutes.map(physicalRoute),
  ...aliasRoutes,
];

export const migratedLegacyPaths = migratedSpanishRoutes.map(({ path }) => path);

const duplicateLegacyPaths = legacyRoutes.filter(
  (route, index) =>
    legacyRoutes.findIndex((candidate) => candidate.legacyPath === route.legacyPath) !== index,
);

if (duplicateLegacyPaths.length > 0) {
  throw new Error(
    `Duplicate legacy route records: ${duplicateLegacyPaths.map(({ legacyPath }) => legacyPath).join(", ")}`,
  );
}
