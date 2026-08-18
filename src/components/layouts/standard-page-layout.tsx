import type { ReactNode } from "react";

import type { Crumb } from "@/components/site/breadcrumbs";
import {
  ContentGrid,
  PageHero,
  PageShell,
  type InternalLink,
} from "@/components/layouts/page-shell";

export function StandardPageLayout({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  lastReviewed,
  meta,
  relatedLinks,
  children,
}: {
  breadcrumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro: string;
  lastReviewed?: string | null;
  meta?: ReactNode;
  relatedLinks?: InternalLink[];
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        lastReviewed={lastReviewed}
        meta={meta}
      />
      <ContentGrid relatedLinks={relatedLinks}>{children}</ContentGrid>
    </PageShell>
  );
}
