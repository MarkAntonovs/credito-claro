import type { ReactNode } from "react";

import type { Crumb } from "@/components/site/breadcrumbs";
import { AffiliateDisclosure } from "@/components/site/affiliate-disclosure";
import { Callout } from "@/components/site/primitives";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/config/site";
import { PageHero, PageShell, RelatedNavigation, type InternalLink } from "./page-shell";

export function CommercialPageLayout({
  breadcrumbs,
  title,
  intro,
  meta,
  comparisonTitle,
  comparisonDescription,
  comparison,
  trustLinks,
  children,
}: {
  breadcrumbs: Crumb[];
  title: string;
  intro: string;
  meta?: ReactNode;
  comparisonTitle: string;
  comparisonDescription: string;
  comparison: ReactNode;
  trustLinks: InternalLink[];
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Información y comparación"
        title={title}
        intro={intro}
        meta={meta}
      />

      <section className="py-8">
        <Container>
          <Callout variant="accent" title={`${siteConfig.siteName} no es una entidad financiera`}>
            No otorgamos créditos ni aprobamos solicitudes. Las condiciones finales las define cada
            proveedor y deben confirmarse directamente con él.
          </Callout>
        </Container>
      </section>

      <Section tone="surface" labelledBy="comparison-title">
        <SectionHeading
          id="comparison-title"
          eyebrow="Comparación"
          title={comparisonTitle}
          description={comparisonDescription}
        />
        <div className="mt-8">{comparison}</div>
        <div className="mt-6">
          <AffiliateDisclosure />
        </div>
      </Section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
            <div className="max-w-3xl space-y-10">{children}</div>
            <RelatedNavigation title="Transparencia" links={trustLinks} />
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
