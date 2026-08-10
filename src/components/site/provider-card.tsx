import type { Provider } from "@/data/sample-providers";
import { ProviderTypeBadge } from "./provider-type-badge";
import { DataValue, LastReviewed, UnknownValue } from "./primitives";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-0.5 border-t border-border py-2.5 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4 sm:py-3">
      <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground sm:text-[0.6875rem] sm:pt-0.5">
        {label}
      </dt>
      <dd className="min-w-0 text-sm leading-relaxed">{children}</dd>
    </div>
  );
}

export function ProviderCard({ provider }: { provider: Provider }) {
  const isBroker = provider.type === "comparacion";

  return (
    <article className="flex flex-col rounded-lg border border-border-strong bg-card">
      <header className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 p-4 sm:p-5">
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-md border border-border bg-surface text-sm font-semibold tracking-tight"
        >
          {provider.monogram}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-lg leading-tight">{provider.name}</h3>
          <div className="mt-1.5">
            <ProviderTypeBadge type={provider.type} />
          </div>
        </div>
      </header>

      {isBroker ? (
        <p className="mx-4 mb-1 rounded-sm bg-notice px-3 py-2 text-xs leading-relaxed text-notice-foreground sm:mx-5">
          No otorga el crédito directamente. Envía tu solicitud a otras entidades.
        </p>
      ) : null}

      <dl className="px-4 pb-1 sm:px-5">
        <Row label="Producto">
          {provider.product ? provider.product : <UnknownValue />}
        </Row>
        <Row label="Monto">
          <DataValue value={provider.amount} />
        </Row>
        <Row label={isBroker ? "Elegibilidad" : "Plazo"}>
          <DataValue value={provider.term} />
        </Row>
        <Row label="Requisitos">
          {provider.requirements.length > 0 ? (
            <ul className="space-y-1">
              {provider.requirements.map((req, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{req ?? "No disponible"}</span>
                </li>
              ))}
            </ul>
          ) : (
            <UnknownValue />
          )}
        </Row>
        <Row label="Tasas y costos">
          <DataValue value={provider.cost} />
        </Row>
      </dl>

      <div className="mt-auto flex flex-col gap-3 border-t border-border p-4 sm:p-5">
        <LastReviewed date={provider.lastReviewed} />
        <div className="grid gap-2 sm:grid-cols-2">
          <a
            href="#comparar"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-strong bg-card px-4 text-sm font-medium transition-colors hover:bg-surface"
          >
            Ver detalles de {provider.name}
          </a>
          <a
            href="#comparar"
            rel="sponsored nofollow"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Ir al proveedor
          </a>
        </div>
      </div>
    </article>
  );
}
