import type { Provider, ProviderType } from "@/types/provider";
import { isIntermediaryProvider } from "@/lib/provider-display";

const typeLabels: Record<ProviderType, string> = {
  direct_credit_provider: "Direct credit provider",
  credit_service: "Credit service — role not confirmed",
  broker: "Broker / intermediary",
  aggregator: "Aggregator / comparison service",
  lead_generator: "Lead-generation service",
};

const copFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

function amount(provider: Provider): string {
  if (provider.amountMin !== undefined && provider.amountMax !== undefined) {
    return `${copFormatter.format(provider.amountMin)}–${copFormatter.format(provider.amountMax)}`;
  }
  if (provider.amountMin !== undefined) return `From ${copFormatter.format(provider.amountMin)}`;
  if (provider.amountMax !== undefined) return `Up to ${copFormatter.format(provider.amountMax)}`;
  return "Not available";
}

export function EnglishProviderCard({ provider }: { provider: Provider }) {
  const intermediary = isIntermediaryProvider(provider);

  return (
    <article className="flex flex-col rounded-lg border border-border-strong bg-card p-5">
      <div className="flex items-start gap-3">
        {provider.logo ? (
          <img
            src={provider.logo}
            alt={`${provider.name} logo`}
            className="size-11 rounded-md border border-border bg-white object-contain p-1"
          />
        ) : null}
        <div>
          <h3 className="text-lg leading-tight">{provider.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {typeLabels[provider.providerType]}
          </p>
        </div>
      </div>
      {intermediary ? (
        <p className="mt-4 rounded-sm bg-notice px-3 py-2 text-xs leading-relaxed text-notice-foreground">
          This service does not issue the credit directly. Final conditions belong to the lender or
          provider involved.
        </p>
      ) : null}
      <dl className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Product or service
          </dt>
          <dd className="mt-1">{provider.productType ?? "Not available"}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Published amount
          </dt>
          <dd className="mt-1 num">{amount(provider)}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Eligibility context
          </dt>
          <dd className="mt-1">{provider.eligibilityNotes ?? "Not available"}</dd>
        </div>
      </dl>
      <p className="mt-auto border-t border-border pt-4 text-xs text-muted-foreground">
        Information only · No English commercial action is enabled
      </p>
    </article>
  );
}
