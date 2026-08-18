# SEO Rebuild Implementation Plan

## Phase-0 outcome

Phase 0 is implemented without a redesign, deployment, framework migration, bulk content rewrite,
or creation of the 13 genuinely missing pages. The final architecture is represented by generated
data and can now drive publication behavior safely.

The authoritative runtime registry is
`src/data/seo/seo-routes.generated.ts`. It contains 41 standalone records with:

- stable ID, page name, final URL and legacy URLs;
- resolved parent ID plus the raw architecture parent name;
- priority, migration action, page type, intent, journey stage and primary keyword;
- production canonical, intended indexability and sitemap action;
- baseline audit status;
- `planned`, `implemented` or `conditional` implementation state;
- production-indexability eligibility; and
- resolved internal-link targets where the target is a real final page.

`MERGED_SEO_INTENTS` separately protects the seven `MERGE`/`DO NOT CREATE` decisions. They are not
part of the standalone route array and cannot enter the sitemap as pages.

The file is generated, not hand-maintained:

```sh
SEO_SOURCE_DIR=/absolute/path/to/final-csv-directory bun run generate:seo-routes
```

The directory must contain the three files named exactly:

- `ColombiaCredito_FINAL_Page_Architecture.csv`
- `ColombiaCredito_FINAL_URL_Migration_Map.csv`
- `ColombiaCredito_FINAL_Content_SEO_Specification.csv`

The generator also reads `data/seo-page-status.json`, checks for exactly 41 standalone routes and
seven merged intents, and rejects duplicate final URLs.

## Indexing environments

Indexing is deny-by-default. A normal local build, Lovable preview, staging build or any deployment
without both explicit production variables emits:

- `noindex, nofollow, noarchive`;
- `robots.txt` with `Disallow: /`; and
- an empty XML sitemap.

Production indexing is enabled only at build time when both values are present:

```sh
VITE_SEO_DEPLOYMENT_ENV=production \
VITE_SEO_INDEXING_ENABLED=true \
bun run build
```

These are Vite build-time variables. Setting a runtime-only Cloudflare variable after the bundle is
built does not enable indexing. Preview/staging must omit `VITE_SEO_INDEXING_ENABLED` or set
`VITE_SEO_DEPLOYMENT_ENV` to a value other than `production`.

Even in an enabled production build, registry state still controls each page:

- implemented, final, index-intended pages emit `index, follow`;
- planned pages do not exist and never enter the sitemap;
- conditional lender pages stay `noindex` and outside the sitemap; and
- non-final preservation/utility routes stay `noindex` unless added to a future authoritative plan.

## Canonicals and sitemap

All canonicals use `https://creditocolombia.co`. Metadata resolves known migration sources to their
final destination, but redirect handling runs before rendering so a redirect source cannot publish a
self-canonical page. Validation rejects multiple, localhost, loopback, preview and incorrect
canonicals.

The XML sitemap is generated from implemented, non-conditional, index-intended final registry
records. It contains 25 URLs in an explicitly enabled production build and zero URLs in protected
environments. Redirect sources, legacy aliases, merged intents, planned pages, conditional profiles
and noindex routes are excluded.

## Breadcrumb and internal-link foundation

Hierarchy comes from the CSV parent relationship, not URL depth. A parent is included only when it
resolves to a real implemented final page; Octopus-only group labels never become fake breadcrumb
URLs. The shared breadcrumb component continues to generate visible and JSON-LD trails from the same
input.

Reusable helpers now provide parent, implemented-child and specified contextual targets. They omit
planned and conditional targets. Migrated HTML is rewritten at render time so known internal links
point directly to final destinations instead of passing through redirects.

## Structured data

Shared composition now supports `WebSite`, `Organization`, `WebPage`, `BreadcrumbList` and
`Article`. It does not add `FAQPage`, `Review`, `AggregateRating` or lender ratings. Every implemented
final route currently renders a canonical `WebPage`; article markup is retained where visible article
content exists.

## P1 existing-page outcome

The 11 existing P1 pages now substantially meet their final content and SEO specifications:

- the homepage remains a concise discovery hub and adds a compact real calculator plus canonical
  P1 navigation;
- offers is the direct comparison surface, with maintained filters, explicit unknown fallbacks,
  source provenance, reviewed dates and sorting methodology;
- the online-credit pillar answers process, requirements, timing, cost, history, safety and fit
  before presenting the comparison step;
- fast loans, pensioners and reportados have intent-specific expectations, comparison paths and
  responsible-risk boundaries;
- consultation covers official DataCrédito and TransUnion channels, interpretation, correction and
  privacy steps;
- rates consolidates cost/fee intent, usury remains a distinct dated authoritative explanation, and
  both link canonically;
- the simulator uses a reusable equal-payment calculation engine with E.A. or monthly-effective
  input, totals and a 12-payment amortization preview; and
- the lender directory filters only maintained active records, exposes sources and leaves all three
  conditional final profiles noindex and unactivated.

Calculator logic lives in `src/lib/loan-calculator.ts`, presentation in
`src/components/site/loan-calculator.tsx`, and focused coverage in
`src/lib/loan-calculator.test.mjs`.

## P1 credit-profile hubs outcome

The two missing credit-profile hubs are now implemented:

- `/historial-crediticio-datacredito-colombia.html` is the broad history parent. It distinguishes
  positive and negative information, central/report roles, lender use, score, correction and
  security, and absorbs the protected report-duration intent with the separate statutory cases.
- `/puntaje-crediticio-colombia.html` remains score-specific. It distinguishes score from history,
  explains model variation and supported factors, avoids universal thresholds, and absorbs the
  protected improvement intent as a practical responsible-credit section.

Both use the redesigned article layout, current official sources, final breadcrumbs, WebPage and
Article schema, reviewed metadata, self-canonicals and canonical links to the adjacent cluster.
Development indexing remains protected.

## P1 product-guide outcome

The final three missing P1 product pages are now implemented:

- `/credito-libre-inversion-colombia.html` covers general-purpose personal-credit discovery without
  mapping generic providers to that product without evidence;
- `/credito-libranza-colombia.html` explains the statutory discount mechanism, pagaduría/RUNEOL,
  access categories, the salary/pension deduction boundary, costs and profile-specific context; and
- `/compra-de-cartera-colombia.html` covers debt transfer, eligible-debt variation, evaluation,
  remaining-cost comparison, risks and the distinction from future refinancing/restructuring intent.

All three use reviewed source blocks, final breadcrumbs, WebPage + Article schema, self-canonicals,
responsible-borrowing treatment and disclosure beside the comparison handoff. Libre inversión and
compra de cartera reuse the tested calculator; the latter explicitly states that it does not model
old-versus-new debt.

## Remaining P1 pages

### Existing final routes

No standalone route remains `NEEDS_UPDATE`, `MISSING` or `CONDITIONAL`. All 41 standalone routes
are now `DONE`. Production indexing remains deliberately
disabled unless the documented build-time opt-in is supplied.

### MISSING

None.

## Conditional lender profiles

None. Lineru, Doctor Peso and FINTERES are activated at the final namespace. Their legacy
`/proveedores/.../` routes migrate one hop to the self-canonical `/prestamistas/.../` profiles.

## Exact next implementation batch

No further implementation batch is recommended from the FINAL architecture: all 41 standalone
routes are resolved. A later data-maintenance pass may replace unavailable or demo-safe commercial
fields when verified provider evidence becomes available, without changing route architecture.
