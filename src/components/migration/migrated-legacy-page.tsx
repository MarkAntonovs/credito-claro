import type { ReactNode } from "react";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { Callout, SourceLink } from "@/components/site/primitives";
import { ArticleAuthor } from "@/components/site/primitives";
import { AffiliateDisclosure } from "@/components/site/affiliate-disclosure";
import { ProductComparisonCta } from "@/components/site/product-comparison-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { publicRoutes } from "@/config/routes";
import { reviewedLegacyArticles } from "@/data/migration/reviewed-articles";
import type { MigratedLegacyArticle } from "@/data/migration/types";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";
import {
  canonicalizeInternalHref,
  getImplementedSeoLinks,
  getSeoBreadcrumbs,
  getFinalSeoRoute,
  rewriteKnownRedirectLinks,
} from "@/data/seo/routes";

const boundedComparisonRoutes = new Set([
  "/alternativas-prestamos-online.html",
  "/credito-online-vs-banco.html",
  "/credito-sin-cuenta-bancaria-colombia.html",
  "/credito-sin-historial-crediticio.html",
  "/prestamo-solo-con-cedula-colombia.html",
  "/prestamos-bajo-monto-colombia.html",
  "/prestamos-para-independientes-colombia.html",
]);

export function MigratedLegacyPage({
  article,
  canonicalPath = article.path,
  heading = article.h1,
  intro: introOverride,
  description = article.description,
  leadContent,
  afterContent,
}: {
  article: MigratedLegacyArticle;
  canonicalPath?: string;
  heading?: string;
  intro?: string;
  description?: string;
  leadContent?: ReactNode;
  afterContent?: ReactNode;
}) {
  const review = reviewedLegacyArticles[article.path];
  const intro = introOverride ?? review?.intro ?? article.intro;
  const bodyHtml = rewriteKnownRedirectLinks(
    review ? `${review.bodyHtml}${review.bodyHtmlAppend ?? ""}` : article.bodyHtml,
  ).replace(
    "Esta página explica el concepto; no incorpora una calculadora ni promete reproducir el cálculo de un proveedor.",
    "La calculadora de esta página usa cuotas mensuales iguales y supuestos visibles; no promete reproducir el cálculo de un proveedor.",
  );
  const sources = review?.sources ?? [];
  const breadcrumbs = getSeoBreadcrumbs(canonicalPath) ?? [
    { label: "Inicio", href: publicRoutes.commercial.home.path },
    { label: article.h1 },
  ];
  const relatedLinks = [
    ...article.relatedRoutes.map(({ label, path }) => ({
      label,
      href: canonicalizeInternalHref(path),
    })),
    ...getImplementedSeoLinks(canonicalPath).map(({ label, href }) => ({ label, href })),
  ].filter(
    (link, index, links) =>
      link.href !== canonicalPath &&
      links.findIndex((candidate) => candidate.href === link.href) === index,
  );
  const finalRoute = getFinalSeoRoute(canonicalPath);
  const needsCommercialDisclosure =
    finalRoute?.finalIntent.includes("Commercial") ||
    finalRoute?.finalIntent.includes("Transactional") ||
    false;
  const author = {
    name: editorialIdentity.name,
    role: editorialIdentity.spanishRole,
  };
  const structuredData = createArticleStructuredData({
    headline: heading,
    description,
    path: canonicalPath,
    language: "es-CO",
    ...(review ? { dateModified: review.reviewedAt } : {}),
    authorName: editorialIdentity.name,
  });
  const webPageStructuredData = createWebPageStructuredData({
    name: heading,
    description,
    path: canonicalPath,
    siteName: siteConfig.siteName,
  });
  const content = (
    <>
      {leadContent}
      {!review ? (
        <Callout variant="notice" title="Contenido legado en revisión">
          Esta página conserva explicaciones educativas del sitio anterior. Los datos actuales,
          regulatorios o vinculados a productos permanecen pendientes de revisión editorial.
        </Callout>
      ) : null}
      {!review && article.legacyUpdatedAt ? (
        <p className="text-xs text-muted-foreground">
          Fecha indicada en el contenido legado: {article.legacyUpdatedAt}. No equivale a una nueva
          verificación editorial.
        </p>
      ) : null}
      <div className="legacy-article-content" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      {boundedComparisonRoutes.has(canonicalPath) ? (
        <ProductComparisonCta
          title="Compare únicamente opciones documentadas"
          description="Verifique que la modalidad, los requisitos y el medio de desembolso coincidan con su situación."
        />
      ) : null}
      {afterContent}
      {needsCommercialDisclosure && !boundedComparisonRoutes.has(canonicalPath) ? (
        <AffiliateDisclosure />
      ) : null}
      {!review && article.authorityReferences.length > 0 ? (
        <section className="border-t border-border pt-6" aria-labelledby="legacy-references">
          <h2 id="legacy-references" className="text-xl sm:text-2xl">
            Referencias mencionadas en el contenido legado
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {article.authorityReferences.join(", ")}. Sus enlaces y vigencia están pendientes de
            verificación antes de publicación.
          </p>
        </section>
      ) : null}
      {review && article.layout === "standard" ? (
        <section className="border-t border-border pt-6" aria-labelledby="official-sources">
          <h2 id="official-sources" className="text-xl sm:text-2xl">
            Fuentes
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {sources.map((source) => (
              <li key={source.id}>
                <SourceLink href={source.url}>{source.label}</SourceLink>
                {source.publisher ? ` — ${source.publisher}` : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );

  if (article.layout === "standard") {
    return (
      <>
        <StructuredData data={[webPageStructuredData, structuredData]} />
        <StandardPageLayout
          breadcrumbs={breadcrumbs}
          eyebrow="Guía principal"
          title={heading}
          intro={intro}
          meta={<ArticleAuthor name={author.name} role={author.role} date={null} />}
          {...(review ? { lastReviewed: review.reviewedAt } : {})}
          relatedLinks={relatedLinks}
        >
          {content}
        </StandardPageLayout>
      </>
    );
  }

  return (
    <>
      <StructuredData data={[webPageStructuredData, structuredData]} />
      <ArticleLayout
        breadcrumbs={breadcrumbs}
        title={heading}
        intro={intro}
        author={author}
        {...(review ? { reviewedAt: review.reviewedAt } : {})}
        sources={sources}
        relatedGuides={relatedLinks}
        showResponsibleBorrowingNotice
      >
        {content}
      </ArticleLayout>
    </>
  );
}
