# CreditoColombia.co — Homepage prototype + design system

Original scope for this stage: one polished homepage at `/` plus the reusable visual system behind it. No migration, no extra pages, no real financial data.

## 1. Visual direction

An editorial-financial product: quiet paper-like surfaces, ruled dividers, strong type hierarchy, structured data blocks. Restraint over decoration — thin borders and subtle elevation instead of gradients or glass. Information density is achieved with alignment and spacing, not boxes inside boxes.

## 2. Color philosophy

- Background: warm off-white (paper), with a slightly deeper warm neutral for alternating bands.
- Text/primary: deep ink navy for headings and financial figures; muted slate for secondary text.
- Accent: a single restrained Colombian-inspired tone — muted emerald/jade (Colombian emerald), used only for CTAs, active states and small markers. No flag palette, no neon.
- Semantic support tones only where meaning requires it: neutral badge for "Proveedor directo", a distinct amber-tinted badge for "Servicio de comparación", plus a warning tone reserved for the responsible-borrowing notice.
- All values defined as oklch tokens in `src/styles.css`, light and dark, so future pages inherit them.

## 3. Typography

- Headings: an editorial serif-adjacent or high-contrast grotesque with character, tight tracking, generous scale steps.
- Body and all financial data: a highly legible neutral sans, comfortable line-height, tabular numerals for amounts and rates.
- Fixed scale (display / h1–h4 / body / small / caption) so all future pages reuse it.
- Loaded via `<link>` in the root route head.

## 4. Homepage hierarchy

Single H1 in the hero. Sections in the requested order:

1. Header — brand, 5 links, "Comparar opciones" CTA, mobile sheet nav.
2. Hero — "Compara opciones de crédito en Colombia", supporting copy, primary + secondary CTA, compact on mobile.
3. Non-lender notice directly under the hero — informational, not alarmist.
4. Trust/transparency strip — three short claims, no badges or certifications.
5. Category navigation — 4 situation-led entries (online, pensionados, reportados, independientes) as an editorial list/split layout, not four identical SaaS cards.
6. Comparison preview — 3 ProviderCards with clearly labelled sample data, including one intermediary.
7. Affiliate disclosure — visible, readable, links to methodology.
8. How comparison works — 3 numbered steps.
9. Qué revisar antes de solicitar — 5 checkpoints.
10. Responsible borrowing notice.
11. Guides — editorial preview list, 5 topics.
12. Methodology / editorial trust — links to Metodología, Política editorial, Divulgación de afiliados.
13. Footer — full future architecture + not-a-lender disclaimer.

## 5. Comparison card approach

`ProviderCard` is data-driven and tolerant of missing fields: any absent value renders "No disponible" rather than collapsing the layout. Structure: logo + name + type badge in the header; a labelled key–value block for producto, monto, plazo/elegibilidad, requisitos, tasas y costos; a "Información verificada: [fecha]" line; then secondary "Ver detalles" and primary "Ir al proveedor". Intermediaries get a different badge tone plus an explicit "No otorga el crédito directamente." line inside the card, so they cannot be mistaken for lenders. Every value is marked as sample data at the section level.

On mobile the card becomes a stacked definition list with label/value rows, CTAs full-width at the bottom, nothing truncated.

## 6. Trust & transparency treatment

Transparency is structural, not a badge row: the non-lender statement sits near the hero, the affiliate disclosure sits adjacent to the commercial component, verification dates live inside each card, and the methodology section closes the page. Tone is factual, no urgency, no approval language.

## 7. Mobile approach

Mobile-first layouts, not scaled-down desktop. Short hero (no full-viewport block), single-column sections, sheet-based navigation, sticky-free CTAs, grid-based header rows with `min-w-0`/`shrink-0`/`truncate` so nothing clips, tap targets ≥44px, and cards that stay scannable.

## 8. Reusable component system

Built now and used on the homepage: `Header`, `Footer`, `ProviderCard`, `ProviderTypeBadge`, `AffiliateDisclosure`, `TrustNotice`, `LastReviewed`, `SourceLink`, `GuideCard`, `CategoryNavigation`, `Callout`, `ResponsibleBorrowingNotice`, `SectionHeading`.

Built as system primitives, ready but not necessarily all shown on the homepage: `Breadcrumbs`, `FAQ`, `ComparisonTable`, `ArticleAuthor`.

## Technical notes

- TanStack Start; the homepage replaces `src/routes/index.tsx` with its own `head()` (Spanish title/description/og/twitter).
- Components under `src/components/`, sample data in a separate typed module (`src/data/sample-providers.ts`) with an explicit `SAMPLE` marker, so real data can swap in later.
- Tailwind v4 tokens only in `src/styles.css` — no hardcoded color utilities in components.
- Semantic HTML, one H1, descriptive links, visible focus rings, contrast-checked pairs, content rendered server-side with no animation-gated text; animation limited to subtle fade/hover.
- No backend, no forms submitting anywhere in this stage.
