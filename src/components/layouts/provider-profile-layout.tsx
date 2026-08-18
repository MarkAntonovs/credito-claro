import type { ReactNode } from "react";

import type { Crumb } from "@/components/site/breadcrumbs";
import { AffiliateDisclosure } from "@/components/site/affiliate-disclosure";
import { Callout, DataValue, SourceLink } from "@/components/site/primitives";
import { ProviderTypeBadge } from "@/components/site/provider-type-badge";
import { ResponsibleBorrowingNotice } from "@/components/site/responsible-borrowing-notice";
import { publicRoutes } from "@/config/routes";
import type { Provider } from "@/types/provider";
import { ContentGrid, ContentSection, PageHero, PageShell } from "./page-shell";

const REGULATORY_LABELS = {
  verified: "Verificado",
  not_verified: "No verificado",
  not_applicable: "No aplica",
  unknown: "Desconocido",
} as const;

const verifiedDateFormatter = new Intl.DateTimeFormat("es-CO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatVerifiedDate(date: string | undefined): string {
  if (!date) return "No disponible";
  return verifiedDateFormatter.format(new Date(`${date}T00:00:00Z`));
}

export function ProviderProfileLayout({
  breadcrumbs,
  provider,
  intro,
  productSummary,
  conditions,
  outboundCta,
}: {
  breadcrumbs: Crumb[];
  provider: Provider;
  intro: string;
  productSummary: ReactNode;
  conditions: ReactNode;
  outboundCta?: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Perfil de proveedor"
        title={provider.name}
        intro={intro}
        meta={
          <div className="flex flex-wrap items-center gap-4">
            {provider.logo ? (
              <img
                src={provider.logo}
                alt={`Logo de ${provider.name}`}
                className="size-14 rounded-md border border-border bg-white object-contain p-1"
              />
            ) : null}
            <div>
              <ProviderTypeBadge type={provider.providerType} />
              <p className="mt-2 text-xs text-muted-foreground">
                Última verificación:{" "}
                {provider.verifiedAt ? (
                  <time dateTime={provider.verifiedAt}>
                    {formatVerifiedDate(provider.verifiedAt)}
                  </time>
                ) : (
                  "No disponible"
                )}
              </p>
            </div>
          </div>
        }
      />
      <ContentGrid
        relatedLinks={[
          { label: "Directorio de prestamistas", href: publicRoutes.providers.directory.path },
          { label: "Comparar opciones", href: publicRoutes.commercial.offers.path },
          {
            label: "Cómo funciona el crédito online",
            href: publicRoutes.commercial.onlineCredit.path,
          },
          { label: "Verificar un prestamista", href: "/verificar-prestamista-legal-colombia.html" },
          { label: "Metodología", href: publicRoutes.trust.methodology.path },
          { label: "Divulgación de afiliados", href: publicRoutes.trust.affiliateDisclosure.path },
        ]}
      >
        <Callout variant="notice" title="Sitio de comparación independiente">
          CreditoColombia.co es un sitio informativo independiente: no es este proveedor, no concede
          créditos y no decide sobre solicitudes. La inclusión de una ficha no constituye una
          recomendación, licencia ni garantía de aprobación.
        </Callout>
        <ContentSection title="Identidad legal">
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide">Entidad legal</dt>
              <dd className="mt-1">
                <DataValue value={provider.legalEntity} />
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide">NIT</dt>
              <dd className="mt-1">
                <DataValue value={provider.nit} />
              </dd>
            </div>
          </dl>
        </ContentSection>
        <ContentSection title="Resumen del producto">{productSummary}</ContentSection>
        <ContentSection title="Condiciones y datos">{conditions}</ContentSection>
        <ContentSection title="Información regulatoria">
          <p>Estado registrado: {REGULATORY_LABELS[provider.superfinancieraStatus]}.</p>
          <DataValue value={provider.regulatoryNotes} />
        </ContentSection>
        <ContentSection title="Fuentes">
          {provider.officialSources.length > 0 ? (
            <ul className="space-y-2">
              {provider.officialSources.map((source) => (
                <li key={source.id}>
                  <SourceLink href={source.url}>{source.label}</SourceLink>
                  {source.publisher ? ` — ${source.publisher}` : null}
                </li>
              ))}
            </ul>
          ) : (
            <DataValue value={null} />
          )}
        </ContentSection>
        <AffiliateDisclosure />
        <ResponsibleBorrowingNotice />
        {outboundCta ? <div>{outboundCta}</div> : null}
      </ContentGrid>
    </PageShell>
  );
}
