import { Check, CheckCircle2 } from "lucide-react";

import { getVerifiedAffiliateLink } from "@/data/providers/affiliate-links";
import { getFinalProviderProfilePath } from "@/data/providers/providers";
import {
  formatProviderAmount,
  formatProviderReviewDate,
  getProviderAge,
  getProviderCostInformation,
  getProviderProcessingTime,
  getProviderTerm,
  isIntermediaryProvider,
} from "@/lib/provider-display";
import { cn } from "@/lib/utils";
import type { Provider } from "@/types/provider";
import { CommercialOutboundLink } from "./commercial-outbound-link";
import { ProviderTypeBadge } from "./provider-type-badge";

interface CardFact {
  label: string;
  value: string;
  emphasis?: boolean;
}

function FactRow({ label, value, emphasis = false }: CardFact) {
  return (
    <div className="grid grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] gap-3 border-t border-border py-2.5">
      <dt className="text-[0.6875rem] font-semibold uppercase leading-relaxed tracking-[0.06em] text-muted-foreground">
        {label}
      </dt>
      <dd
        className={
          emphasis
            ? "num min-w-0 text-sm font-semibold leading-relaxed text-foreground"
            : "min-w-0 text-sm leading-relaxed text-foreground"
        }
      >
        {value}
      </dd>
    </div>
  );
}

function getMonogram(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function providerFacts(provider: Provider): CardFact[] {
  const facts: CardFact[] = [];
  const term = getProviderTerm(provider);
  const age = getProviderAge(provider);
  const processing = getProviderProcessingTime(provider);
  const cost = getProviderCostInformation(provider);
  if (term) facts.push({ label: "Plazo", value: term });
  if (age) facts.push({ label: "Edad", value: age });
  if (processing) facts.push({ label: "Tiempo indicado", value: processing });
  if (provider.legalEntity) {
    facts.push({
      label: isIntermediaryProvider(provider) ? "Operador" : "Entidad",
      value: provider.legalEntity,
    });
  }
  if (cost) facts.push({ label: "Información de costos", value: cost });

  return facts;
}

function CompactList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section>
      <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-2 space-y-1.5 text-sm leading-snug">
        {items.slice(0, 4).map((item) => (
          <li key={item} className="flex gap-2">
            <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export interface ProviderCardComparisonControl {
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
}

export function ProviderCard({
  provider,
  comparison,
  profileHref,
}: {
  provider: Provider;
  comparison?: ProviderCardComparisonControl;
  profileHref?: string | null;
}) {
  const resolvedProfileHref =
    profileHref === undefined ? getFinalProviderProfilePath(provider.slug) : profileHref;
  const isIntermediary = isIntermediaryProvider(provider);
  const isNeutralService = provider.providerType === "credit_service";
  const hasCommercialLink = getVerifiedAffiliateLink(provider.slug) !== undefined;
  const facts = providerFacts(provider);
  const amount = formatProviderAmount(provider);
  const reviewDate = formatProviderReviewDate(provider.verifiedAt);

  return (
    <article
      data-provider-card
      data-provider-slug={provider.slug}
      data-selected={comparison?.selected || undefined}
      className={cn(
        "flex min-w-0 flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow",
        comparison?.selected
          ? "border-primary ring-2 ring-primary/20"
          : "border-border-strong hover:shadow-md",
      )}
    >
      <header className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 px-4 pb-3 pt-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-5 sm:pt-5">
        {provider.logo ? (
          <span className="grid size-14 shrink-0 place-items-center rounded-md border border-border bg-white p-2">
            <img
              src={provider.logo}
              alt={`Logo de ${provider.name}`}
              className="size-full object-contain"
            />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="grid size-14 shrink-0 place-items-center rounded-md border border-border bg-surface text-sm font-semibold tracking-tight"
          >
            {getMonogram(provider.name)}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="text-xl leading-tight">{provider.name}</h3>
          <p className="mt-1 text-sm font-medium leading-snug text-muted-foreground">
            {provider.productType ?? "Consulta el tipo de servicio en la ficha del proveedor."}
          </p>
          {provider.slogan ? <p className="mt-1 text-sm leading-snug">{provider.slogan}</p> : null}
        </div>
        <ProviderTypeBadge
          type={provider.providerType}
          className="col-start-2 mt-1 sm:col-start-3 sm:mt-0"
        />
      </header>

      <div className="px-4 pb-3 sm:px-5">
        {amount ? (
          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
              {isIntermediary ? "Rango mostrado" : "Monto mostrado"}
            </p>
            <p className="num mt-1 text-xl font-semibold tracking-tight">{amount}</p>
          </div>
        ) : null}
        {isIntermediary ? (
          <p
            className={cn(
              "border-l-2 border-notice-border pl-2.5 text-sm font-medium leading-relaxed text-notice-foreground",
              amount && "mt-3",
            )}
          >
            No otorga el crédito directamente.
          </p>
        ) : null}
        {isNeutralService ? (
          <p
            className={cn(
              "border-l-2 border-border-strong pl-2.5 text-sm leading-relaxed text-muted-foreground",
              amount && "mt-3",
            )}
          >
            La fuente comercial no confirma si actúa como prestamista o intermediario.
          </p>
        ) : null}
      </div>

      {facts.length > 0 ? (
        <dl className="px-4 sm:px-5">
          {facts.map((fact) => (
            <FactRow key={fact.label} {...fact} />
          ))}
        </dl>
      ) : null}

      {provider.benefits?.length || provider.requirements?.length ? (
        <div className="grid gap-4 border-t border-border px-4 py-4 sm:grid-cols-2 sm:px-5">
          {provider.benefits?.length ? (
            <CompactList title="Aspectos destacados" items={provider.benefits} />
          ) : null}
          {provider.requirements?.length ? (
            <CompactList title="Requisitos indicados" items={provider.requirements} />
          ) : null}
        </div>
      ) : null}

      {provider.cardCaution ? (
        <p className="mx-4 mb-4 rounded-sm bg-notice px-3 py-2 text-xs leading-relaxed text-notice-foreground sm:mx-5">
          <strong>Ten en cuenta:</strong> {provider.cardCaution}
        </p>
      ) : null}

      {provider.officialSources.length > 0 ? (
        <details className="mx-4 mb-4 border-t border-border pt-3 text-sm sm:mx-5">
          <summary className="min-h-11 cursor-pointer py-2 font-medium text-foreground">
            Fuentes consultadas ({provider.officialSources.length})
          </summary>
          <ul className="space-y-2 pb-2 text-xs leading-relaxed text-muted-foreground">
            {provider.officialSources.map((source) => (
              <li key={source.id}>
                <a
                  href={source.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline decoration-border-strong underline-offset-4"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ) : null}

      <footer className="mt-auto border-t border-border bg-surface/45 px-4 py-3.5 sm:px-5">
        {reviewDate ? (
          <p className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle2 aria-hidden="true" className="size-3.5 text-accent" />
            <span>Información revisada · </span>
            <time dateTime={provider.verifiedAt} className="num">
              {reviewDate}
            </time>
          </p>
        ) : null}
        {comparison ? (
          <label
            className={cn(
              "mb-3 flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
              comparison.selected
                ? "border-primary bg-accent-soft text-accent-soft-foreground"
                : "border-border-strong bg-card hover:bg-surface",
              comparison.disabled && "cursor-not-allowed opacity-55",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "grid size-5 shrink-0 place-items-center rounded-sm border",
                comparison.selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border-strong bg-card",
              )}
            >
              {comparison.selected ? <Check className="size-3.5" /> : null}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={comparison.selected}
              disabled={comparison.disabled}
              onChange={comparison.onToggle}
              aria-label={`${comparison.selected ? "Quitar" : "Añadir"} ${provider.name} ${comparison.selected ? "de la" : "a la"} comparación`}
            />
            {comparison.selected ? "Seleccionado" : "Comparar"}
          </label>
        ) : null}
        <div
          className={
            hasCommercialLink && resolvedProfileHref ? "grid gap-2 sm:grid-cols-2" : undefined
          }
        >
          {resolvedProfileHref ? (
            <a
              href={resolvedProfileHref}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-primary px-3 text-center text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Ver detalles
            </a>
          ) : null}
          <CommercialOutboundLink provider={provider} className="px-3" />
        </div>
      </footer>
    </article>
  );
}
