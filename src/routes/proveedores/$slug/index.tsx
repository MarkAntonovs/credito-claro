import { notFound } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

import { ProviderProfileLayout } from "@/components/layouts/provider-profile-layout";
import { CommercialOutboundLink } from "@/components/site/commercial-outbound-link";
import { Callout, DataValue } from "@/components/site/primitives";
import { publicRoutes } from "@/config/routes";
import { getProviderProfileContent } from "@/data/providers/profile-content";
import { getProviderBySlug } from "@/data/providers/providers";
import { createRouteMetadata } from "@/lib/seo";
import {
  getProviderAge,
  getProviderProcessingTime,
  getProviderTerm,
  isIntermediaryProvider,
} from "@/lib/provider-display";
import type { Provider } from "@/types/provider";

const copFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export const Route = createFileRoute("/proveedores/$slug/")({
  loader: ({ params }) => {
    const provider = getProviderBySlug(params.slug);
    if (!provider || !getProviderProfileContent(provider.slug)) throw notFound();
    return provider;
  },
  head: ({ loaderData }) => {
    const provider = loaderData;
    if (!provider) {
      return createRouteMetadata({
        path: publicRoutes.providers.directory.path,
        title: "Perfil de proveedor | CreditoColombia.co",
      });
    }
    const content = getProviderProfileContent(provider.slug);
    if (!content) return {};
    return createRouteMetadata({
      path: `/proveedores/${provider.slug}/`,
      title: `${provider.name} en Colombia: información verificada`,
      description: content.metaDescription,
      robotsIntent: publicRoutes.providers.profile.futureIndexability,
    });
  },
  component: ProviderProfilePage,
});

function formatAmount(provider: Provider): string | null {
  if (provider.amountMin === undefined && provider.amountMax === undefined) return null;
  if (provider.amountMin !== undefined && provider.amountMax !== undefined) {
    return `${copFormatter.format(provider.amountMin)} – ${copFormatter.format(provider.amountMax)}`;
  }
  if (provider.amountMin !== undefined) return `Desde ${copFormatter.format(provider.amountMin)}`;
  return `Hasta ${copFormatter.format(provider.amountMax as number)}`;
}

function yesOrUnknown(value: boolean | undefined): string | null {
  return value === true ? "Sí" : value === false ? "No" : null;
}

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="border-t border-border-strong pt-3">
      <dt className="text-xs font-semibold uppercase tracking-wide">{label}</dt>
      <dd className="mt-1">
        <DataValue value={value} />
      </dd>
    </div>
  );
}

function ProviderProfilePage() {
  const provider = Route.useLoaderData();
  return <ProviderProfileContentPage provider={provider} />;
}

export function ProviderProfileContentPage({ provider }: { provider: Provider }) {
  const content = getProviderProfileContent(provider.slug);
  if (!content) throw new Error(`Missing profile content for ${provider.slug}`);
  const intermediary = isIntermediaryProvider(provider);

  return (
    <ProviderProfileLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: "Prestamistas", href: publicRoutes.providers.directory.path },
        { label: provider.name },
      ]}
      provider={provider}
      intro={content.intro}
      productSummary={
        <div className="space-y-4">
          {intermediary ? (
            <Callout variant="notice" title="Servicio de intermediación">
              {content.directness}
            </Callout>
          ) : null}
          <h3 className="text-lg text-foreground">Qué es {provider.name}</h3>
          <p>{content.overview}</p>
          {!intermediary ? <p>{content.directness}</p> : null}
        </div>
      }
      conditions={
        <div className="space-y-7">
          <dl className="grid gap-4 sm:grid-cols-2">
            <Field label="Tipo de producto o servicio" value={provider.productType} />
            <Field
              label={intermediary ? "Rango comercial mostrado" : "Monto mostrado"}
              value={formatAmount(provider)}
            />
            <Field label="Edad indicada" value={getProviderAge(provider)} />
            <Field
              label="Cuenta bancaria requerida"
              value={yesOrUnknown(provider.bankAccountRequired)}
            />
            <Field
              label="Ciudadanía colombiana requerida"
              value={yesOrUnknown(provider.colombianCitizenshipRequired)}
            />
            <Field label="Plazo mostrado" value={getProviderTerm(provider)} />
            <Field label="Tiempo indicado" value={getProviderProcessingTime(provider)} />
            <Field label="Tasa" value={provider.rateText} />
            <Field label="Costos adicionales" value={provider.additionalCostsText} />
          </dl>
          {provider.eligibilityNotes ? (
            <div>
              <h3 className="text-lg text-foreground">Elegibilidad o alcance verificado</h3>
              <p className="mt-2">{provider.eligibilityNotes}</p>
            </div>
          ) : null}
          {provider.requirements?.length ? (
            <div>
              <h3 className="text-lg text-foreground">Requisitos indicados</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {provider.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {provider.cardCaution ? (
            <Callout variant="notice" title="Dato que debes confirmar">
              {provider.cardCaution}
            </Callout>
          ) : null}
          {content.requirementsAndProcess ? (
            <div>
              <h3 className="text-lg text-foreground">Requisitos y proceso</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {content.requirementsAndProcess.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {content.paymentsAndCosts ? (
            <div>
              <h3 className="text-lg text-foreground">Pagos y costos</h3>
              <p className="mt-2">{content.paymentsAndCosts}</p>
            </div>
          ) : null}
          {content.safety ? (
            <div>
              <h3 className="text-lg text-foreground">Seguridad</h3>
              <p className="mt-2">{content.safety}</p>
            </div>
          ) : null}
          {content.limitsAndAlternatives ? (
            <div>
              <h3 className="text-lg text-foreground">Límites y alternativas</h3>
              <p className="mt-2">{content.limitsAndAlternatives}</p>
            </div>
          ) : null}
          <div>
            <h3 className="text-lg text-foreground">Qué debes confirmar antes de continuar</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {content.confirm.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      }
      outboundCta={<CommercialOutboundLink provider={provider} showUnavailable />}
    />
  );
}
