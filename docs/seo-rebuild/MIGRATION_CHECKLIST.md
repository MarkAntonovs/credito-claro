# Final URL Migration Checklist

## Safety rules

- Redirects are permanent 301 responses handled before TanStack rendering.
- Query strings are preserved.
- Legacy aliases are flattened to the final destination, avoiding chains.
- Redirect sources are excluded from the final sitemap.
- Rendered internal links are canonicalized away from known redirect sources.
- Every active destination is a 200 response with one production self-canonical.
- Conditional lender redirects are not activated without a separate relevance decision.

## Nine migration decisions

| Decision                    | Source                                       | Destination                                   | State                                                                        |
| --------------------------- | -------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------- |
| Fast loans                  | `/prestamos-inmediatos-en-linea.html`        | `/prestamos-rapidos-inmediatos-colombia.html` | Active 301; final 200 route reuses reviewed content.                         |
| Low amount                  | `/prestamos-pequenos-montos-colombia.html`   | `/prestamos-bajo-monto-colombia.html`         | Active 301; final 200 route reuses reviewed content.                         |
| Pensioners                  | `/prestamos-para-pensionados-colombia.html`  | `/prestamos-para-pensionados-colombia`        | Active 301; canonical direction reversed to the FINAL extensionless URL.     |
| Credit study                | `/que-es-estudio-de-credito.html`            | `/estudio-de-credito-colombia.html`           | Active 301; final 200 route reuses reviewed content.                         |
| Interest/cost consolidation | `/tasas-interes-prestamos-online.html`       | `/tasas-interes-creditos-colombia.html`       | Active 301.                                                                  |
| Interest/cost consolidation | `/costos-ocultos-creditos-online.html`       | `/tasas-interes-creditos-colombia.html`       | Active 301 exactly as the merge CSV specifies; source excluded from sitemap. |
| Simulator                   | `/simulador-credito-como-funciona.html`      | `/simulador-credito-colombia.html`            | Active 301; explanatory content and the tested calculator are implemented.   |
| Lender verification         | `/verificar-empresa-prestamos-legitima.html` | `/verificar-prestamista-legal-colombia.html`  | Active 301.                                                                  |
| Gota a gota                 | `/peligros-gota-gota-colombia.html`          | `/gota-a-gota-colombia.html`                  | Active 301.                                                                  |
| Directory namespace         | `/proveedores/`                              | `/prestamistas/`                              | Active 301; `/proveedores` also resolves directly to the final URL.          |

There are nine architecture decisions and ten active source redirects because the interest-rate
decision consolidates two legacy URLs.

All implemented destinations in this checklist now substantially meet their final content/SEO
specifications and are classified `DONE`. Redirect activation derives from authoritative legacy
URLs and implementation state, not from the mutable page-status label.

## Conditional profile migrations — prepared, not active

| Source                      | Prepared destination         | Current safety state                                             | Verification needed                                                               |
| --------------------------- | ---------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `/proveedores/lineru/`      | `/prestamistas/lineru/`      | Both return 200; final route is noindex and absent from sitemap. | Current activity, official destination, product/terms and source freshness.       |
| `/proveedores/doctor-peso/` | `/prestamistas/doctor-peso/` | Both return 200; final route is noindex and absent from sitemap. | Current activity, official destination, verified conditions and source freshness. |
| `/proveedores/finteres/`    | `/prestamistas/finteres/`    | Both return 200; final route is noindex and absent from sitemap. | Current activity, intermediary role, destination and source freshness.            |

## Pre-activation checks for any conditional profile

- [ ] Reverify the entity is active and relevant in Colombia.
- [ ] Reverify the legal operator, role and official domain.
- [ ] Reverify the current affiliate destination separately; do not change it in this step.
- [ ] Review visible conditions and sources for freshness.
- [ ] Change registry implementation state from conditional only with recorded evidence.
- [ ] Activate one-hop legacy redirect.
- [ ] Update directory/profile links to the final URL.
- [ ] Confirm final profile is index/follow only in enabled production.
- [ ] Confirm final profile is in the production sitemap and old URL is excluded.
- [ ] Run protected and production SEO validation.

## Validation commands

Protected/default build:

```sh
bun run build
bun run validate:seo
```

Explicit production-indexing build:

```sh
VITE_SEO_DEPLOYMENT_ENV=production VITE_SEO_INDEXING_ENABLED=true bun run build
VITE_SEO_DEPLOYMENT_ENV=production VITE_SEO_INDEXING_ENABLED=true bun run validate:seo
```
