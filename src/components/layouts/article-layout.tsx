import type { ReactNode } from "react";

import type { Crumb } from "@/components/site/breadcrumbs";
import { ArticleAuthor, SourceLink } from "@/components/site/primitives";
import { ResponsibleBorrowingNotice } from "@/components/site/responsible-borrowing-notice";
import type { ContentAuthor, Source } from "@/types/content";
import { ContentGrid, ContentSection, PageHero, PageShell, type InternalLink } from "./page-shell";

export function ArticleLayout({
  breadcrumbs,
  title,
  intro,
  author,
  publishedAt,
  reviewedAt,
  sources,
  relatedGuides,
  showResponsibleBorrowingNotice = false,
  children,
}: {
  breadcrumbs: Crumb[];
  title: string;
  intro: string;
  author?: ContentAuthor;
  publishedAt?: string;
  reviewedAt?: string;
  sources: Source[];
  relatedGuides?: InternalLink[];
  showResponsibleBorrowingNotice?: boolean;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Guía"
        title={title}
        intro={intro}
        lastReviewed={reviewedAt}
        meta={
          <div className="flex flex-wrap items-center gap-5">
            {author ? (
              <ArticleAuthor name={author.name} role={author.role} date={publishedAt ?? null} />
            ) : null}
            {publishedAt ? (
              <p className="text-xs text-muted-foreground">
                Publicado: <time dateTime={publishedAt}>{publishedAt}</time>
              </p>
            ) : null}
          </div>
        }
      />
      <ContentGrid relatedLinks={relatedGuides}>
        <article className="space-y-10">{children}</article>
        {sources.length > 0 ? (
          <ContentSection title="Fuentes">
            <ul className="space-y-2">
              {sources.map((source) => (
                <li key={source.id}>
                  <SourceLink href={source.url}>{source.label}</SourceLink>
                  {source.publisher ? ` — ${source.publisher}` : null}
                </li>
              ))}
            </ul>
          </ContentSection>
        ) : null}
        {showResponsibleBorrowingNotice ? <ResponsibleBorrowingNotice /> : null}
      </ContentGrid>
    </PageShell>
  );
}
