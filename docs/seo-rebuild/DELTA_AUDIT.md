# Final SEO Architecture Delta Audit

**Audit date:** 2026-08-18  
**Original audit scope:** current TanStack Start implementation versus the three FINAL CSV files.
The page-level table and counts are current. Detailed page narratives retain original audit evidence
alongside the implementation updates below.

> **Phase-0 implementation update (2026-08-18):** Shared Phase-0 infrastructure is implemented: the
> generated 41-route registry, seven merge-only intents, protected/production indexing gates,
> registry-driven canonicals and sitemap eligibility, nine URL migration decisions, final
> breadcrumbs/link helpers, and WebPage/Organization schema composition. The nine baseline
> `MIGRATION_REQUIRED` pages now have final 200 routes and active one-hop redirects where safe. The
> three conditional lender migrations remain deliberately inactive.

> **P1 existing-page update (2026-08-18):** The 11 existing P1 pages now substantially meet their
> final dominant intent and content/SEO acceptance criteria. This includes the real calculator,
> comparison fallbacks, source-backed credit-history channels, canonical internal links and lender
> directory filters. All 11 pass validation and are now `DONE`. Detailed `existing*` evidence in
> `data/seo-page-status.json` remains the original audit snapshot for traceability.

> **P1 credit-profile hubs update (2026-08-18):** The final history/Datacrédito and credit-score
> pages are implemented with official sources, final hierarchy, canonical cluster links and their
> protected report-duration/improvement intents. Both pass the shared SEO acceptance checks and are
> now `DONE`.

> **P1 product-guide update (2026-08-18):** The final libre inversión, libranza and compra de
> cartera pages are implemented with category-specific intent boundaries, verified sources,
> commercial disclosure, calculator reuse where appropriate and canonical reciprocal links. All
> three are now `DONE`; no P1 route remains missing.

> **Non-P1 existing-page update (2026-08-18):** The final 10 `NEEDS_UPDATE` routes and four
> lower-priority migration destinations now substantially meet their specifications and pass the
> shared validation suite. The eight `MISSING` pages and three `CONDITIONAL` profiles were not
> created or activated.

> **Debt/legal cluster update (2026-08-18):** The four final debt-resolution guides are implemented
> with distinct intents, reciprocal cluster links and current Colombian primary legal sources.
> Insolvency reflects Law 2445 of 2025; embargo guidance uses the current procedural and labor-code
> framework. The remaining four `MISSING` product/tool pages were not created.

> **Final product/tool batch (2026-08-18):** Apps de préstamos, microcréditos, préstamos sin
> codeudor and the complete amortization-table tool are implemented with distinct intent boundaries,
> source-backed safety/regulatory treatment and reciprocal canonical links. All four are now `DONE`.
> No standalone route remains `MISSING`; the only unresolved routes are the three deliberately
> protected `CONDITIONAL` lender profiles.

> **Lender-profile activation (2026-08-18):** Lineru, Doctor Peso and FINTERES now use their final
> `/prestamistas/` profiles with centralized cautious content, independent-site and affiliate
> disclosures, directory links and one-hop legacy migrations. FINTERES remains identified as an
> intermediary. All three are `DONE`; no `CONDITIONAL` route remains.

## Executive conclusion

The redesign and much of the reusable implementation already existed at audit time. The repository
had 26 migrated Spanish content routes, three core commercial routes, a nine-entity verified provider
dataset and profiles, trust/legal pages, English preservation routes, shared layouts,
metadata/canonical helpers, redirect handling, XML/HTML sitemaps, breadcrumbs and JSON-LD. The
baseline delta was 13 genuinely missing standalone pages, nine URL/consolidation decisions, 16
existing pages needing focused updates, and three entity pages requiring current-market
revalidation. Phase 0 has since implemented the nine safe migration decisions and shared SEO layer;
the subsequent P1 batches completed the 11 existing P1 pages and two new credit-profile hubs.
All final standalone routes are now resolved. No additional page batch is queued.

There are **41 final standalone pages**. The 48-row architecture also contains seven merge-only
intents; those are recorded separately and are not inflated into page counts. All 41 pages are now
`DONE`; environment protection still emits noindex outside an explicit production opt-in and does
not prevent a page from meeting its implementation acceptance criteria.

## Counts

| Status                     |  Count |
| -------------------------- | -----: |
| DONE                       |     41 |
| NEEDS_UPDATE               |      0 |
| MISSING                    |      0 |
| MIGRATION_REQUIRED         |      0 |
| CONDITIONAL                |      0 |
| **Total standalone pages** | **41** |

## Classification summary

| Page                                      | Final URL                                         | Current URL                                     | Priority                                  | Status   | Complexity |
| ----------------------------------------- | ------------------------------------------------- | ----------------------------------------------- | ----------------------------------------- | -------- | ---------- |
| Homepage / préstamos en Colombia          | `/`                                               | `/`                                             | P1                                        | **DONE** | MEDIUM     |
| Ofertas de créditos                       | `/ofertas-creditos.html`                          | `/ofertas-creditos.html`                        | P1                                        | **DONE** | MEDIUM     |
| Créditos online Colombia                  | `/creditos-online-colombia.html`                  | `/creditos-online-colombia.html`                | P1                                        | **DONE** | MEDIUM     |
| Préstamos rápidos e inmediatos            | `/prestamos-rapidos-inmediatos-colombia.html`     | `/prestamos-inmediatos-en-linea.html`           | P1                                        | **DONE** | MEDIUM     |
| Préstamos de bajo monto                   | `/prestamos-bajo-monto-colombia.html`             | `/prestamos-pequenos-montos-colombia.html`      | P2                                        | **DONE** | MEDIUM     |
| Apps de préstamos                         | `/apps-prestamos-colombia.html`                   | `/apps-prestamos-colombia.html`                 | P2                                        | **DONE** | MEDIUM     |
| Crédito de libre inversión                | `/credito-libre-inversion-colombia.html`          | —                                               | P1                                        | **DONE** | HIGH       |
| Crédito de libranza                       | `/credito-libranza-colombia.html`                 | —                                               | P1                                        | **DONE** | HIGH       |
| Microcréditos                             | `/microcreditos-colombia.html`                    | `/microcreditos-colombia.html`                  | P2                                        | **DONE** | MEDIUM     |
| Préstamos para pensionados                | `/prestamos-para-pensionados-colombia`            | `/prestamos-para-pensionados-colombia.html`     | P1                                        | **DONE** | HIGH       |
| Préstamos para independientes             | `/prestamos-para-independientes-colombia.html`    | `/prestamos-para-independientes-colombia.html`  | P2                                        | **DONE** | MEDIUM     |
| Préstamos para reportados                 | `/prestamo-reportado-datacredito.html`            | `/prestamo-reportado-datacredito.html`          | P1                                        | **DONE** | HIGH       |
| Primer crédito sin historial              | `/credito-sin-historial-crediticio.html`          | `/credito-sin-historial-crediticio.html`        | P2                                        | **DONE** | MEDIUM     |
| Requisitos para crédito online            | `/requisitos-credito-online-colombia.html`        | `/requisitos-credito-online-colombia.html`      | P2                                        | **DONE** | LOW        |
| Préstamo solo con cédula                  | `/prestamo-solo-con-cedula-colombia.html`         | `/prestamo-solo-con-cedula-colombia.html`       | P2                                        | **DONE** | MEDIUM     |
| Crédito sin cuenta bancaria               | `/credito-sin-cuenta-bancaria-colombia.html`      | `/credito-sin-cuenta-bancaria-colombia.html`    | P3 — supporting / preservation            | **DONE** | LOW        |
| Préstamos sin codeudor                    | `/prestamos-sin-codeudor-colombia.html`           | `/prestamos-sin-codeudor-colombia.html`         | P2                                        | **DONE** | MEDIUM     |
| Estudio de crédito                        | `/estudio-de-credito-colombia.html`               | `/que-es-estudio-de-credito.html`               | P2                                        | **DONE** | MEDIUM     |
| Historial crediticio / Datacrédito        | `/historial-crediticio-datacredito-colombia.html` | —                                               | P1                                        | **DONE** | HIGH       |
| Consultar historial crediticio gratis     | `/consultar-historial-crediticio-gratis.html`     | `/consultar-historial-crediticio-gratis.html`   | P1                                        | **DONE** | LOW        |
| Puntaje crediticio                        | `/puntaje-crediticio-colombia.html`               | —                                               | P1                                        | **DONE** | HIGH       |
| Tasas de interés de créditos              | `/tasas-interes-creditos-colombia.html`           | `/tasas-interes-prestamos-online.html`          | P1                                        | **DONE** | HIGH       |
| Tasa de usura Colombia                    | `/tasa-de-usura-colombia.html`                    | `/tasa-de-usura-colombia.html`                  | P1                                        | **DONE** | LOW        |
| Simulador y calculadora de crédito        | `/simulador-credito-colombia.html`                | `/simulador-credito-como-funciona.html`         | P1                                        | **DONE** | HIGH       |
| Tabla de amortización                     | `/tabla-amortizacion-credito.html`                | `/tabla-amortizacion-credito.html`              | P2                                        | **DONE** | HIGH       |
| No puedo pagar mi préstamo                | `/no-puedo-pagar-prestamo-que-hacer.html`         | `/no-puedo-pagar-prestamo-que-hacer.html`       | P2                                        | **DONE** | MEDIUM     |
| Acuerdo de pago de deuda                  | `/acuerdo-pago-deuda-colombia.html`               | —                                               | P2                                        | **DONE** | MEDIUM     |
| Compra de cartera                         | `/compra-de-cartera-colombia.html`                | —                                               | P1                                        | **DONE** | HIGH       |
| Refinanciar / reestructurar deuda         | `/refinanciar-reestructurar-deuda.html`           | —                                               | P2                                        | **DONE** | MEDIUM     |
| Insolvencia persona natural               | `/insolvencia-persona-natural-colombia.html`      | —                                               | P2                                        | **DONE** | HIGH       |
| Embargo por deudas                        | `/embargo-por-deudas-colombia.html`               | —                                               | P2                                        | **DONE** | HIGH       |
| Estafas de préstamos online               | `/estafas-prestamos-online-colombia.html`         | `/estafas-prestamos-online-colombia.html`       | P2                                        | **DONE** | MEDIUM     |
| Cómo verificar si un prestamista es legal | `/verificar-prestamista-legal-colombia.html`      | `/verificar-empresa-prestamos-legitima.html`    | P2                                        | **DONE** | MEDIUM     |
| Gota a gota                               | `/gota-a-gota-colombia.html`                      | `/peligros-gota-gota-colombia.html`             | P2                                        | **DONE** | MEDIUM     |
| Derechos del consumidor financiero        | `/derechos-consumidor-financiero-colombia.html`   | `/derechos-consumidor-financiero-colombia.html` | P3 — supporting / preservation            | **DONE** | MEDIUM     |
| Crédito online vs banco tradicional       | `/credito-online-vs-banco.html`                   | `/credito-online-vs-banco.html`                 | P3 — supporting / preservation            | **DONE** | MEDIUM     |
| Alternativas a préstamos online           | `/alternativas-prestamos-online.html`             | `/alternativas-prestamos-online.html`           | P3 — supporting / preservation            | **DONE** | MEDIUM     |
| Directorio de prestamistas                | `/prestamistas/`                                  | `/proveedores/`                                 | P1                                        | **DONE** | MEDIUM     |
| Perfil Lineru                             | `/prestamistas/lineru/`                           | `/proveedores/lineru/`                          | P2 — only while lender is active/relevant | **DONE** | MEDIUM     |
| Perfil Doctor Peso                        | `/prestamistas/doctor-peso/`                      | `/proveedores/doctor-peso/`                     | P2 — only while lender is active/relevant | **DONE** | MEDIUM     |
| Perfil Finteres                           | `/prestamistas/finteres/`                         | `/proveedores/finteres/`                        | P2 — only while lender is active/relevant | **DONE** | MEDIUM     |

## Shared infrastructure audit

| Area                             | Already available                                                                                                                                                | Delta against FINAL plan                                                                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header/navigation                | Responsive desktop/mobile header, skip-target main content, clear comparison CTA, centralized nav config.                                                        | Navigation reflects the current route set and links to the HTML sitemap as “Guías”; it does not expose the finalized topical architecture or final migrated URLs.             |
| Footer                           | Four centralized groups, legal/trust links, affiliate and non-lender disclosure.                                                                                 | Uses current provider/rates URLs and needs regeneration from the final route registry.                                                                                        |
| Breadcrumbs                      | Reusable accessible component plus BreadcrumbList JSON-LD on every non-home rendered route.                                                                      | Most content has only Home → Page, not the parent hierarchy required by the final internal-link plan; migration targets are absent.                                           |
| Disclosure/affiliate treatment   | Strong dedicated disclosure component, footer disclosure, provider-link labeling and a verified-only affiliate registry.                                         | Ensure disclosure precedes or sits immediately beside every final commercial choice; some article CTAs currently link commercially without the shared disclosure pattern.     |
| Lender cards                     | Reusable factual cards, provider-type distinction, unknown-field restraint, reviewed dates, comparison selection and safe outbound handling.                     | Add final-directory filters and ensure cards link only to /prestamistas/ canonicals after namespace migration.                                                                |
| Centralized lender data          | Typed nine-provider registry, active/featured flags, claim provenance, official sources, profile copy and separate verified affiliate links.                     | Add an explicit market-relevance review workflow/date and use it to include/noindex/remove conditional final entity pages.                                                    |
| Article layouts                  | Shared hero, author identity, review date, sources, related navigation, responsible-borrowing notice and Article JSON-LD.                                        | Add distinct reviewer where required, final parent breadcrumbs, final CTA variants, WebPage composition and a route-spec-driven section/link checklist.                       |
| Commercial layouts               | Shared comparison region, non-lender callout, disclosure, trust navigation and reusable comparison workspace.                                                    | Homepage does not use the layout; offers/online-credit coverage is thinner than final specs. Add common updated/reviewed metadata and WebPage schema.                         |
| Calculator                       | Reusable tested fixed-payment engine, E.A./monthly conversion, interactive calculator, totals and 12-payment amortization preview on the simulator and homepage. | The separate P2 amortization page remains unimplemented; no link is emitted until that final route exists.                                                                    |
| Metadata generation              | Central title/description/OG/Twitter/robots/canonical/hreflang helper; current validator finds no duplicate titles, descriptions or H1s.                         | Final route metadata are absent for missing/migrated pages; launch indexing is hard-coded off rather than environment/release controlled.                                     |
| Canonical generation             | Query/hash-stripping absolute self-canonical generation works for current routes.                                                                                | Several self-canonicals point at URLs superseded by FINAL (provider namespace and renamed guides); pensionados canonical direction is opposite the final CSV.                 |
| Sitemap                          | Central generated XML registry with lastmod, HTML sitemap, duplicate/redirect checks and 71 currently valid URLs.                                                | It contains current legacy URLs rather than all final URLs and coexists with global noindex/robots blocking. Final Spanish registry must drive inclusion/exclusion.           |
| Redirects                        | Central server-side 301 registry, query preservation, directory normalization, duplicate detection and chain validation.                                         | None of the final rename/consolidation redirects is registered; provider namespace and pensionados direction need careful one-hop migration.                                  |
| Internal linking                 | Related-route arrays, sidebar navigation, header/footer links and in-body contextual links exist.                                                                | Links are manually scattered, often shallow, and several point to routes the final plan replaces. Final parent/context links should be generated/validated from one registry. |
| Schema                           | WebSite on home, BreadcrumbList on non-home pages, Article on articles, safe serialization, and validation against unsupported Review/rating markup.             | Required WebPage is absent throughout; SoftwareApplication is absent (correct until tools exist); FINTERES lacks final-required Article schema.                               |
| Author/reviewer/updated metadata | Organization author, article review dates, source blocks and provider verification dates are implemented.                                                        | No distinct reviewer identity; core commercial pages lack updated/reviewed dates; Article schema has dateModified but no reviewedBy.                                          |
| Responsible borrowing            | Dedicated reusable notice on home, articles and provider profiles; trust page and footer language exist.                                                         | Commercial layout does not render the notice directly, and final high-risk/debt pages need tailored boundaries (legal help, scams, affordability).                            |

## Smallest shared changes with the widest effect

1. **Create one final Spanish SEO route registry** for the 41 pages plus seven merge intents. Drive canonical paths, sitemap inclusion, redirect sources, breadcrumbs, header/footer links and link validation from it. This removes most URL drift in one change.
2. **Make indexing a controlled launch configuration** and validate the combination of robots, meta robots and sitemap. Keep development blocked, but allow the final production environment to emit index/follow and an allow/sitemap robots file.
3. **Extend the shared page layouts with a route-spec contract** for parent breadcrumbs, required contextual links, CTA/disclosure mode, WebPage + optional Article schema, and reviewed/updated metadata. This solves repeated omissions without visual redesign.
4. **Migrate the provider namespace once** (/proveedores/ → /prestamistas/) and keep entity eligibility in centralized provider data so directory, profiles, sitemap and cards change together.
5. **Build one shared credit-calculation module** used by the homepage, /simulador-credito-colombia.html and /tabla-amortizacion-credito.html; add SoftwareApplication schema only when interactive behavior is present.

## Merge-only intents (not standalone counts)

| Intent                                | Current/source URL                     | Final target                                      | Required action |
| ------------------------------------- | -------------------------------------- | ------------------------------------------------- | --------------- |
| Crédito rechazado: qué hacer          | No standalone source                   | `/estudio-de-credito-colombia.html`               | DO NOT CREATE   |
| Cómo mejorar historial y puntaje      | No standalone source                   | `/puntaje-crediticio-colombia.html`               | DO NOT CREATE   |
| Cuánto dura un reporte en Datacrédito | No standalone source                   | `/historial-crediticio-datacredito-colombia.html` | DO NOT CREATE   |
| Costos ocultos y comisiones           | `/costos-ocultos-creditos-online.html` | `/tasas-interes-creditos-colombia.html`           | 301 REDIRECT    |
| Pago anticipado / abono a capital     | No standalone source                   | `/tabla-amortizacion-credito.html`                | DO NOT CREATE   |
| Mora e intereses moratorios           | No standalone source                   | `/no-puedo-pagar-prestamo-que-hacer.html`         | DO NOT CREATE   |
| Cobranza y cobro jurídico             | No standalone source                   | `/no-puedo-pagar-prestamo-que-hacer.html`         | DO NOT CREATE   |

## Credit-efficient implementation sequence

1. **Foundation/migration batch:** final route registry; environment-controlled indexing; final sitemap filtering; WebPage schema composition; final breadcrumbs/internal-link validation; all nine non-conditional migration rules; provider namespace capability. This is the highest-leverage batch and should precede content creation.
2. **Existing P1 surfaces:** update home, offers, online-credit, reportados, consultar historial, tasa de usura and pensionados while reusing the current layouts/data. Consolidate fast-loans, rates/costs and simulator legacy content onto their final URLs during this batch.
3. **Missing P1 pages/tools:** libre inversión, libranza, historial/Datacrédito, puntaje, calculator, compra de cartera, then amortization (P2 but shares the calculator engine).
4. **Focused P2/P3 updates and missing pages:** independents, no-history, requirements, solo-cédula, no-bank-account, no-codeudor, debt and safety cluster pages, then apps/bajo-monto/microcredit.
5. **Conditional entity publication:** reverify Lineru, Doctor Peso and FINTERES last; retain only active/relevant profiles, then migrate or remove/noindex based on evidence.

### Exact recommended next implementation batch

Implement only the shared foundation and P1 route reconciliation first: add the final route registry; change indexing to environment-controlled behavior; make final URLs drive sitemap/canonical/breadcrumb/internal-link validation; add WebPage schema support; register one-hop redirects for fast loans, bajo monto, pensionados, study, rates+costs, simulator, verification, gota-a-gota and the provider directory namespace. Then update the three existing top-level pages (/, /ofertas-creditos.html, /creditos-online-colombia.html) to consume the registry. Do not create the remaining standalone content pages in that batch.

## Page-by-page records

### Homepage / préstamos en Colombia

- **Final URL:** `/`; **current URL:** `/`; **priority:** P1; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Transactional. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “CreditoColombia.co — Compara opciones de crédito en Colombia”; H1 “Compara opciones de crédito en Colombia”; canonical `https://creditocolombia.co/`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Commercial comparison CTA is present and appropriate.
- **Internal links:** Good links to offers/trust; several category and guide cards lack final-route links.
- **Structured data:** WebSite present; required WebPage/BreadcrumbList absent (homepage intentionally has no breadcrumb in current validator).
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add a real calculator; add explicit amounts/terms and stronger requirements, cost, safety and situation-link coverage; align title/H1 more directly to préstamos en Colombia.

### Ofertas de créditos

- **Final URL:** `/ofertas-creditos.html`; **current URL:** `/ofertas-creditos.html`; **priority:** P1; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Transactional. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Comparar opciones de crédito en Colombia | CreditoColombia.co”; H1 “Compara opciones de crédito con información organizada”; canonical `https://creditocolombia.co/ofertas-creditos.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Comparison CTA behavior is appropriate; disclosure is visible below the comparison workspace.
- **Internal links:** Links home and trust pages, but not the finalized product/situation cluster.
- **Structured data:** BreadcrumbList present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add intent-aligned H1/title, true filters, explicit amount/term/cost/requirements/speed treatments, sorting methodology, and final-cluster internal links.

### Créditos online Colombia

- **Final URL:** `/creditos-online-colombia.html`; **current URL:** `/creditos-online-colombia.html`; **priority:** P1; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Mixed. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Créditos online en Colombia: cómo entenderlos | CreditoColombia.co”; H1 “Cómo entender los créditos online en Colombia”; canonical `https://creditocolombia.co/creditos-online-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Appropriately routes readers to comparison after explaining the topic.
- **Internal links:** Some contextual links exist, but two point to legacy URLs and supporting-page coverage is incomplete.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Expand process, timing, cost, Datacrédito, safety and supporting-page sections; replace legacy links with final URLs; add reviewed/updated metadata.

### Préstamos rápidos e inmediatos

- **Final URL:** `/prestamos-rapidos-inmediatos-colombia.html`; **current URL:** `/prestamos-inmediatos-en-linea.html`; **priority:** P1; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Transactional. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Préstamos “inmediatos” en Colombia: qué significa”; H1 “Préstamos inmediatos en línea — qué esperar realmente”; canonical `https://creditocolombia.co/prestamos-inmediatos-en-linea.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current informational page links to comparison; final page needs a stronger transactional comparison CTA and nearby disclosure.
- **Internal links:** Current links point to the online-credit and offers pages.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /prestamos-inmediatos-en-linea.html → /prestamos-rapidos-inmediatos-colombia.html after content migration.
- **Exact missing work:** Move/rework the useful current content onto the final URL; add comparison, amounts, cost and realistic approval-vs-disbursement coverage; 301 the old URL and update all links.

### Préstamos de bajo monto

- **Final URL:** `/prestamos-bajo-monto-colombia.html`; **current URL:** `/prestamos-pequenos-montos-colombia.html`; **priority:** P2; **status:** MIGRATION_REQUIRED; **complexity:** MEDIUM.
- **Final intent:** Commercial. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Préstamos de montos pequeños en Colombia: costos y condiciones”; H1 “Préstamos de montos pequeños en Colombia — lo que debes saber”; canonical `https://creditocolombia.co/prestamos-pequenos-montos-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current page links to comparison but lacks the final commercial treatment.
- **Internal links:** Current links point to online credit and offers; parent hierarchy is not encoded.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /prestamos-pequenos-montos-colombia.html → /prestamos-bajo-monto-colombia.html after content migration.
- **Exact missing work:** Migrate to the final slug; distinguish bajo monto from microcrédito; add typical amounts/terms, requirements and alternatives; 301 the old URL and update links.

### Apps de préstamos

- **Final URL:** `/apps-prestamos-colombia.html`; **current URL:** `/apps-prestamos-colombia.html`; **priority:** P2; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Transactional. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the final commercial page with app/platform comparison, permissions/privacy and red-flag coverage, disclosure, breadcrumbs, schema and cluster links.
- **Implementation update:** Created the safety-first app/platform guide covering channel identity,
  flow, cost comparison, permissions, privacy, official download paths, advance-fee and
  impersonation alerts, with a bounded comparison CTA and canonical cluster links.

### Crédito de libre inversión

- **Final URL:** `/credito-libre-inversion-colombia.html`; **current URL at audit:** none; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Commercial / Transactional. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the P1 comparison page with verified bank/fintech facts, requirements, rates, calculator embed and disclosure; link it from the homepage and cost cluster.
- **Implementation update:** Created the product guide with requirements, provider-specific
  amount/term fallbacks, cost comparison, channel distinctions, application process, the shared
  calculator, disclosure and canonical product/cost links.

### Crédito de libranza

- **Final URL:** `/credito-libranza-colombia.html`; **current URL at audit:** none; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Mixed. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No final-page CTA exists.
- **Internal links:** Related pensioner articles exist, but no final hub link exists.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the mixed-intent hub; reuse only verified material from the pensioner/libranza article; cover pagaduría, limits, reportados and risks; avoid cannibalizing pensioner intent.
- **Implementation update:** Created the source-backed mechanism hub covering eligibility categories,
  pagaduría/RUNEOL, the statutory deduction boundary, costs, pensioner/reportados context,
  ordinary-credit differences, advantages, risks and a post-explanation comparison handoff.

### Microcréditos

- **Final URL:** `/microcreditos-colombia.html`; **current URL:** `/microcreditos-colombia.html`; **priority:** P2; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Informational. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the guide/comparison page and explicitly separate productive microcredit from consumer bajo-monto intent; add verified offer handling and disclosure.
- **Implementation update:** Created the source-backed productive-finance guide and explicitly
  separated microcredit from regulated consumer bajo-monto intent; no volatile amount or rate was
  presented as a universal current threshold.

### Préstamos para pensionados

- **Final URL:** `/prestamos-para-pensionados-colombia`; **current URL:** `/prestamos-para-pensionados-colombia.html`; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Commercial / Transactional. **Intent match:** partial. **Required sections substantially present:** partial.
- **Existing SEO:** title “Préstamos para pensionados en Colombia: requisitos y opciones”; H1 “Préstamos para pensionados en Colombia — guía completa”; canonical `https://creditocolombia.co/prestamos-para-pensionados-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** A comparison link exists; disclosure/commercial options are not presented in the final required pattern.
- **Internal links:** Links to four legacy pensioner support pages and offers, but current canonical direction conflicts with the final extensionless URL.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** Reverse canonical direction: serve the extensionless final URL as 200/self-canonical and 301 the current .html URL to it.
- **Exact missing work:** Reverse the current extensionless-to-.html redirect, make the extensionless URL canonical/200, redirect .html to it, update all links/sitemap/hreflang, and expand Colpensiones, age, comparison and affordability coverage.

### Préstamos para independientes

- **Final URL:** `/prestamos-para-independientes-colombia.html`; **current URL:** `/prestamos-para-independientes-colombia.html`; **priority:** P2; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Transactional. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Préstamos para independientes en Colombia: qué evaluar”; H1 “Préstamos online para trabajadores independientes en Colombia”; canonical `https://creditocolombia.co/prestamos-para-independientes-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** A comparison path exists but the page lacks offer-oriented treatment and nearby disclosure.
- **Internal links:** Links to online credit and offers; lacks finalized sibling/context links.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add explicit RUT/extract/declaration coverage, provider-type comparison, approval preparation, commercial module/disclosure and final cluster links.

### Préstamos para reportados

- **Final URL:** `/prestamo-reportado-datacredito.html`; **current URL:** `/prestamo-reportado-datacredito.html`; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Commercial / Transactional. **Intent match:** partial. **Required sections substantially present:** partial.
- **Existing SEO:** title “Reportado en DataCrédito: qué significa al pedir crédito”; H1 “Qué significa estar reportado en DataCrédito al solicitar crédito”; canonical `https://creditocolombia.co/prestamo-reportado-datacredito.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current page is cautious and informational; final intent requires a clearly bounded comparison CTA.
- **Internal links:** Links to two current supporting pages but not the missing final credit-history hub.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Reframe above the fold toward realistic available options; add libranza/low amount, provider types, cost, scams and alternatives; link to the final history hub and disclosure near choices.

### Primer crédito sin historial

- **Final URL:** `/credito-sin-historial-crediticio.html`; **current URL:** `/credito-sin-historial-crediticio.html`; **priority:** P2; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Informational / Commercial. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Crédito sin historial en Colombia: qué significa y cómo prepararse”; H1 “Crédito sin historial en Colombia — qué significa y cómo prepararse”; canonical `https://creditocolombia.co/credito-sin-historial-crediticio.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Educational CTA is safe, but the commercial secondary intent is under-served.
- **Internal links:** Links to reportados, consultation and a legacy study URL; missing final history hub.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add available options, small amounts, codeudor and chance-building sections; point to final history/study URLs and add a bounded comparison CTA with disclosure.

### Requisitos para crédito online

- **Final URL:** `/requisitos-credito-online-colombia.html`; **current URL:** `/requisitos-credito-online-colombia.html`; **priority:** P2; **status:** NEEDS_UPDATE; **complexity:** LOW.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Requisitos para crédito online en Colombia: categorías comunes”; H1 “Requisitos para pedir un préstamo online en Colombia”; canonical `https://creditocolombia.co/requisitos-credito-online-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Informational progression is appropriate.
- **Internal links:** Useful links exist but include the legacy study URL and omit several final supporting pages.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add distinct documents, checks, special cases and safety-checklist sections; update study link to final URL; strengthen parent/sibling links and reviewed metadata.

### Préstamo solo con cédula

- **Final URL:** `/prestamo-solo-con-cedula-colombia.html`; **current URL:** `/prestamo-solo-con-cedula-colombia.html`; **priority:** P2; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Transactional. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Préstamo solo con cédula en Colombia: qué significa”; H1 “Préstamos solo con cédula en Colombia — qué significa realmente”; canonical `https://creditocolombia.co/prestamo-solo-con-cedula-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current page is safety-led; add a bounded commercial comparison treatment with disclosure.
- **Internal links:** Links to online credit, offers and no-bank-account; hierarchy to requirements is missing.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add who offers it using verified data, realistic limits and additional-checks coverage; link up to requirements and replace generic claims with sourced facts.

### Crédito sin cuenta bancaria

- **Final URL:** `/credito-sin-cuenta-bancaria-colombia.html`; **current URL:** `/credito-sin-cuenta-bancaria-colombia.html`; **priority:** P3 — supporting / preservation; **status:** NEEDS_UPDATE; **complexity:** LOW.
- **Final intent:** Commercial / Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Crédito sin cuenta bancaria en Colombia: requisitos y medios de pago”; H1 “¿Se puede pedir un crédito online sin cuenta bancaria?”; canonical `https://creditocolombia.co/credito-sin-cuenta-bancaria-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current guidance is appropriate but does not satisfy the commercial secondary intent.
- **Internal links:** Links to online credit and requirements; lacks final hierarchy and options module.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add explicit wallet/disbursement methods, repayment and limitation sections; add a verified-options CTA/disclosure only where facts support it; retain cautious safety framing.

### Préstamos sin codeudor

- **Final URL:** `/prestamos-sin-codeudor-colombia.html`; **current URL:** `/prestamos-sin-codeudor-colombia.html`; **priority:** P2; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Commercial. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the commercial guide covering when a codeudor is required, alternatives, eligibility/risk and verified options; link from requirements and disclose commercial choices.
- **Implementation update:** Created the eligibility guide with requirements, evaluation, history,
  identity, possible guarantees, costs and alternatives. It makes no approval promise and labels no
  provider “sin codeudor” without product evidence.

### Estudio de crédito

- **Final URL:** `/estudio-de-credito-colombia.html`; **current URL:** `/que-es-estudio-de-credito.html`; **priority:** P2; **status:** MIGRATION_REQUIRED; **complexity:** MEDIUM.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Estudio de crédito en Colombia: qué evalúa y cómo funciona”; H1 “¿Qué es un estudio de crédito y cómo funciona en Colombia?”; canonical `https://creditocolombia.co/que-es-estudio-de-credito.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current informational CTA pattern is appropriate.
- **Internal links:** Current links use legacy history/supporting URLs and do not reflect the final hierarchy.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /que-es-estudio-de-credito.html → /estudio-de-credito-colombia.html.
- **Exact missing work:** Migrate the reviewed content to the final URL; add debt, score, capacity, timing, outcomes and rejection sections; merge the rejection intent; 301 the old URL and update links.

### Historial crediticio / Datacrédito

- **Final URL:** `/historial-crediticio-datacredito-colombia.html`; **current URL at audit:** none; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Informational. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** Several current pages need this missing parent hub.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the P1 hub including positive/negative data, bureaus, lender use, report duration and score; absorb the report-duration intent and link consultation, score and reportados pages.
- **Implementation update:** Created the final hub with source-backed retention distinctions,
  correction/privacy guidance, WebPage + Article + BreadcrumbList and canonical links to all five
  adjacent cluster pages.

### Consultar historial crediticio gratis

- **Final URL:** `/consultar-historial-crediticio-gratis.html`; **current URL:** `/consultar-historial-crediticio-gratis.html`; **priority:** P1; **status:** DONE; **complexity:** LOW.
- **Final intent:** Informational / Navigational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Consultar historial crediticio gratis en DataCrédito”; H1 “Cómo consultar tu historial crediticio gratis en Colombia”; canonical `https://creditocolombia.co/consultar-historial-crediticio-gratis.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** The official-channel CTA and non-commercial framing match intent.
- **Internal links:** Links to reportados and no-history; the final history hub does not exist.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add clearer report-interpretation, errors and security sections; link up to the final history hub; preserve official sources and cautious procedure language.

### Puntaje crediticio

- **Final URL:** `/puntaje-crediticio-colombia.html`; **current URL at audit:** none; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Informational. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the P1 score guide, merge improvement intent, avoid unsupported universal score thresholds, and link to history/consultation/reportados pages.
- **Implementation update:** Created the final score guide with model/factor boundaries, practical
  improvement steps, correction expectations, WebPage + Article + BreadcrumbList and canonical
  links across the credit-history cluster.

### Tasas de interés de créditos

- **Final URL:** `/tasas-interes-creditos-colombia.html`; **current URL:** `/tasas-interes-prestamos-online.html`; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Informational / Commercial. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Tasas de interés en préstamos: cómo compararlas”; H1 “Tasas de interés en préstamos online — cómo entenderlas”; canonical `https://creditocolombia.co/tasas-interes-prestamos-online.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current article uses an informational CTA; final mixed intent needs a compare-options step and disclosure.
- **Internal links:** Current links point to usury and the costs/simulator legacy URLs.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /tasas-interes-prestamos-online.html and /costos-ocultos-creditos-online.html → /tasas-interes-creditos-colombia.html.
- **Exact missing work:** Build the final consolidated rates page from the reviewed rates and hidden-cost content; add conversions and rate drivers; 301 both legacy rates/cost URLs to the final target and update links.

### Tasa de usura Colombia

- **Final URL:** `/tasa-de-usura-colombia.html`; **current URL:** `/tasa-de-usura-colombia.html`; **priority:** P1; **status:** DONE; **complexity:** LOW.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Tasa de usura en Colombia 2026: cálculo por modalidad”; H1 “Qué es la tasa de usura y cómo te protege en Colombia”; canonical `https://creditocolombia.co/tasa-de-usura-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Informational CTA and official-source emphasis match intent.
- **Internal links:** Links to legacy rates and rights; calculator/final-rates links are missing.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add explicit what-to-do-if-exceeded and historical/context sections; change related links to final rates/calculator URLs; preserve dated source handling and update cadence.

### Simulador y calculadora de crédito

- **Final URL:** `/simulador-credito-colombia.html`; **current URL:** `/simulador-credito-como-funciona.html`; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Transactional / Informational. **Intent match:** partial. **Required sections substantially present:** partial.
- **Existing SEO:** title “Simulador de crédito: cómo estimar y comparar”; H1 “Simuladores de crédito — cómo usarlos para comparar opciones”; canonical `https://creditocolombia.co/simulador-credito-como-funciona.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current page only explains simulators; the required primary tool CTA is absent.
- **Internal links:** Current links point to multiple legacy cost/rate routes.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /simulador-credito-como-funciona.html → /simulador-credito-colombia.html once the real tool is ready.
- **Exact missing work:** Implement a real accessible calculator at the final URL with amount/rate/term inputs, cuota/interest/total outputs and assumptions; migrate useful explanation, redirect old URL, add SoftwareApplication only after the tool exists.

### Tabla de amortización

- **Final URL:** `/tabla-amortizacion-credito.html`; **current URL:** `/tabla-amortizacion-credito.html`; **priority:** P2; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Informational / Tool. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No tool CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the generated amortization schedule and explanation; absorb prepayment/abono intent; link bidirectionally with calculator and rates; add tool schema only for the working tool.
- **Implementation update:** Extended the shared calculator presentation to render the complete
  requested schedule and added the fixed-payment method, field definitions, rate interpretation,
  rounding, exclusions and merged abono-a-capital intent. No unsupported application/product
  schema or chart dependency was added.

### No puedo pagar mi préstamo

- **Final URL:** `/no-puedo-pagar-prestamo-que-hacer.html`; **current URL:** `/no-puedo-pagar-prestamo-que-hacer.html`; **priority:** P2; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “No puedo pagar mi préstamo: pasos generales a considerar”; H1 “No puedo pagar mi préstamo — qué opciones tengo en Colombia”; canonical `https://creditocolombia.co/no-puedo-pagar-prestamo-que-hacer.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** The current non-aggressive help-first CTA matches intent.
- **Internal links:** Links rights and alternatives, but not the planned debt-resolution cluster.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add contact-lender, restructuring, payment agreement, consolidation, consequences, rights and insolvency-boundary sections; absorb mora and collection intents; link to new debt pages.

### Acuerdo de pago de deuda

- **Final URL:** `/acuerdo-pago-deuda-colombia.html`; **current URL:** none; **priority:** P2; **status:** MISSING; **complexity:** MEDIUM.
- **Final intent:** Informational. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the practical guide with negotiation scope, documents, reporting impact, settlement caveats and written-agreement checklist; link from the nonpayment hub.

### Compra de cartera

- **Final URL:** `/compra-de-cartera-colombia.html`; **current URL at audit:** none; **priority:** P1; **status:** DONE; **complexity:** HIGH.
- **Final intent:** Commercial / Informational. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the P1 mixed-intent page with verified comparison criteria, eligibility, calculator and risks; add disclosure around any commercial choices.
- **Implementation update:** Created the debt-transfer guide with eligible-debt caveats, process,
  requirements, cost/term comparison, source-dated product example, reportados context, risks,
  nonpayment path and explicitly limited reuse of the generic calculator.

### Refinanciar / reestructurar deuda

- **Final URL:** `/refinanciar-reestructurar-deuda.html`; **current URL:** none; **priority:** P2; **status:** MISSING; **complexity:** MEDIUM.
- **Final intent:** Informational / Commercial. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the comparison guide distinguishing refinancing, restructuring and compra de cartera; explain cost/report impact and negotiation timing.

### Insolvencia persona natural

- **Final URL:** `/insolvencia-persona-natural-colombia.html`; **current URL:** none; **priority:** P2; **status:** MISSING; **complexity:** HIGH.
- **Final intent:** Informational. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the legally reviewed guide with current primary sources, qualification/process/effects/costs and a strong legal-help boundary; link from nonpayment.

### Embargo por deudas

- **Final URL:** `/embargo-por-deudas-colombia.html`; **current URL:** none; **priority:** P2; **status:** MISSING; **complexity:** HIGH.
- **Final intent:** Informational. **Intent match:** no. **Required sections substantially present:** no.
- **Existing SEO:** title absent; H1 absent; canonical absent; indexability: not applicable — page absent.
- **CTA:** No CTA exists because the page is absent.
- **Internal links:** No final-page links exist.
- **Structured data:** Absent with the page.
- **Sitemap:** Final URL is absent from the sitemap.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Create the legally reviewed guide covering assets, process, notice, exemptions and response; link to insolvency and clearly state the legal-help boundary.

### Estafas de préstamos online

- **Final URL:** `/estafas-prestamos-online-colombia.html`; **current URL:** `/estafas-prestamos-online-colombia.html`; **priority:** P2; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Estafas de préstamos online en Colombia: cómo identificarlas”; H1 “Estafas de préstamos online — cómo identificarlas y protegerse”; canonical `https://creditocolombia.co/estafas-prestamos-online-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** The safety-first informational progression matches intent.
- **Internal links:** Links to legacy verification/gota URLs; parent security hierarchy is absent.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add fake-app/site and what-to-do/report sections; update links to final legal-verification and gota URLs; add online-credit/offers context links without aggressive commercial CTA.

### Cómo verificar si un prestamista es legal

- **Final URL:** `/verificar-prestamista-legal-colombia.html`; **current URL:** `/verificar-empresa-prestamos-legitima.html`; **priority:** P2; **status:** MIGRATION_REQUIRED; **complexity:** MEDIUM.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Cómo verificar una empresa de préstamos en Colombia”; H1 “Cómo verificar si una empresa de préstamos es legítima en Colombia”; canonical `https://creditocolombia.co/verificar-empresa-prestamos-legitima.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** The current verification-first CTA matches intent.
- **Internal links:** Links scams and rights, but uses the legacy URL and lacks final hierarchy.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /verificar-empresa-prestamos-legitima.html → /verificar-prestamista-legal-colombia.html.
- **Exact missing work:** Move reviewed content to the final URL; add NIT/company, domain/contact, contract, advance-payment and verification-limit coverage; 301 the old URL and update all links.

### Gota a gota

- **Final URL:** `/gota-a-gota-colombia.html`; **current URL:** `/peligros-gota-gota-colombia.html`; **priority:** P2; **status:** MIGRATION_REQUIRED; **complexity:** MEDIUM.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Peligros del gota a gota en Colombia: riesgos y señales”; H1 “Gota a gota y préstamos informales — riesgos que debes conocer”; canonical `https://creditocolombia.co/peligros-gota-gota-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** The safety-first CTA matches intent.
- **Internal links:** Current links use legacy verification paths; final hierarchy is absent.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /peligros-gota-gota-colombia.html → /gota-a-gota-colombia.html.
- **Exact missing work:** Move reviewed content to the final URL; add digital gota-a-gota and threatened-person guidance with verified emergency/legal boundaries; 301 the old URL and update links.

### Derechos del consumidor financiero

- **Final URL:** `/derechos-consumidor-financiero-colombia.html`; **current URL:** `/derechos-consumidor-financiero-colombia.html`; **priority:** P3 — supporting / preservation; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Derechos del consumidor financiero en Colombia: guía básica”; H1 “Derechos del consumidor financiero en Colombia — lo básico”; canonical `https://creditocolombia.co/derechos-consumidor-financiero-colombia.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** The current complaint-oriented informational CTA matches intent.
- **Internal links:** Links nonpayment and legacy verification; parent security context is incomplete.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add fair-treatment, Defensor, SFC, abusive collection, contracts and data sections; update the verification link and add authoritative complaint channels.

### Crédito online vs banco tradicional

- **Final URL:** `/credito-online-vs-banco.html`; **current URL:** `/credito-online-vs-banco.html`; **priority:** P3 — supporting / preservation; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Informational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Crédito online vs. banco en Colombia: cómo comparar”; H1 “Crédito online vs. banco tradicional — diferencias clave”; canonical `https://creditocolombia.co/credito-online-vs-banco.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Comparison intent is present; add a bounded offers CTA with disclosure after the answer.
- **Internal links:** Links online credit and alternatives; offers link required by final spec is missing.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add explicit speed, amount, regulation, service and when-each-fits sections plus a comparison table; add final offers context link/disclosure.

### Alternativas a préstamos online

- **Final URL:** `/alternativas-prestamos-online.html`; **current URL:** `/alternativas-prestamos-online.html`; **priority:** P3 — supporting / preservation; **status:** NEEDS_UPDATE; **complexity:** MEDIUM.
- **Final intent:** Informational / Commercial. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Alternativas a los préstamos online en Colombia: qué evaluar”; H1 “Alternativas a los préstamos online en Colombia”; canonical `https://creditocolombia.co/alternativas-prestamos-online.html`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** The current decision-first CTA is responsible; commercial secondary choices need clearer boundaries.
- **Internal links:** Links legacy gota URL and responsible borrowing; online-credit/offers context links are missing.
- **Structured data:** BreadcrumbList present; Article present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is represented. Sitemap currently conflicts with global noindex.
- **Migration:** None beyond enabling final indexability and keeping links canonical.
- **Exact missing work:** Add explicit bank, cooperatives, employee funds, employer/family and refinancing sections; update gota URL and add final parent/context links with disclosure near commercial choices.

### Directorio de prestamistas

- **Final URL:** `/prestamistas/`; **current URL:** `/proveedores/`; **priority:** P1; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Commercial / Navigational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Directorio de proveedores y servicios | CreditoColombia.co”; H1 “Proveedores y servicios de crédito”; canonical `https://creditocolombia.co/proveedores/`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Directory cards and disclosure support comparison intent.
- **Internal links:** Links offers/methodology; all entity links use the obsolete /proveedores/ namespace.
- **Structured data:** BreadcrumbList present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** 301 /proveedores/ → /prestamistas/ and profile-level one-hop redirects.
- **Exact missing work:** Move the directory to /prestamistas/, add filters and explicit safety/methodology/review sections, redirect /proveedores/ and every profile one hop, and update cards/navigation/sitemap/canonicals.

### Perfil Lineru

- **Final URL:** `/prestamistas/lineru/`; **current URL:** `/proveedores/lineru/`; **priority:** P2 — only while lender is active/relevant; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Navigational / Commercial. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Lineru en Colombia: información verificada”; H1 “Lineru”; canonical `https://creditocolombia.co/proveedores/lineru/`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current profile offers safe comparison/outbound handling; CTA availability is data-driven.
- **Internal links:** Links the current provider directory, offers and trust pages.
- **Structured data:** BreadcrumbList present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** Conditional namespace migration /proveedores/lineru/ → /prestamistas/lineru/ if retained.
- **Exact missing work:** Reverify active/relevant status; if retained, migrate to /prestamistas/lineru/, add requirements/application/payments/pros-limits/alternatives and redirect the current URL; otherwise noindex/remove from sitemap and redirect appropriately.
- **Implementation update:** Activated the final profile using the maintained direct-provider data,
  added cautious requirements/process/payments/safety/alternatives treatment, linked it from the
  directory and activated the one-hop legacy redirect.

### Perfil Doctor Peso

- **Final URL:** `/prestamistas/doctor-peso/`; **current URL:** `/proveedores/doctor-peso/`; **priority:** P2 — only while lender is active/relevant; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Navigational / Commercial. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “Doctor Peso en Colombia: información verificada”; H1 “Doctor Peso”; canonical `https://creditocolombia.co/proveedores/doctor-peso/`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** No verified outbound destination is currently exposed; this is appropriately cautious.
- **Internal links:** Links the current provider directory, offers and trust pages.
- **Structured data:** BreadcrumbList present; required WebPage is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** Conditional namespace migration /proveedores/doctor-peso/ → /prestamistas/doctor-peso/ if retained.
- **Exact missing work:** Reverify active/relevant status and official destination; if retained, migrate namespace and complete verified conditions/process/cost/safety/alternatives; otherwise noindex/remove and redirect appropriately.
- **Implementation update:** Activated the informational direct-provider profile from existing
  project sources. Unverified commercial fields remain unavailable; no outbound offer or regulatory
  claim was invented.

### Perfil Finteres

- **Final URL:** `/prestamistas/finteres/`; **current URL:** `/proveedores/finteres/`; **priority:** P2 — only while lender is active/relevant; **status:** DONE; **complexity:** MEDIUM.
- **Final intent:** Navigational. **Intent match:** yes. **Required sections substantially present:** partial.
- **Existing SEO:** title “FINTERES en Colombia: información verificada”; H1 “FINTERES”; canonical `https://creditocolombia.co/proveedores/finteres/`; indexability: noindex, nofollow, noarchive (global siteConfig.indexingEnabled=false).
- **CTA:** Current intermediary treatment is appropriately non-aggressive and discloses affiliate handling.
- **Internal links:** Links the current provider directory, offers and trust pages.
- **Structured data:** BreadcrumbList present; required WebPage is absent; required Article is absent.
- **Sitemap:** Current URL is in the generated sitemap; final URL is absent. Sitemap currently conflicts with global noindex.
- **Migration:** Conditional namespace migration /proveedores/finteres/ → /prestamistas/finteres/ if retained.
- **Exact missing work:** Reverify active/relevant status; if retained, migrate namespace, add eligibility/process/safety/alternatives and Article schema required by the final spec; otherwise noindex/remove and redirect appropriately.
- **Implementation update:** Activated FINTERES as an intermediary/comparison service with its
  maintained affiliate CTA and disclosure. Third-party lender conditions remain explicitly outside
  FINTERES and no lender-specific schema was introduced.

## Validation evidence and caveats

- `bun run build` passed on 2026-08-18.
- `bun run validate:seo` passed: 28 legacy redirects, 15 directory-normalization redirects, 71 sitemap URLs, 1 WebSite block, 70 BreadcrumbList blocks and 50 Article blocks; duplicate title/description/H1 checks passed.
- The validator explicitly expects temporary global noindex and a fully blocking robots file. That is valid for a protected development state but fails the FINAL requirement for indexable target pages until launch configuration changes.
- Current lender records say Lineru, Doctor Peso and FINTERES are active and were verified on 2026-08-11, but the FINAL plan explicitly makes publication conditional. The audit therefore does not make the business decision to retain them without a fresh market check.
