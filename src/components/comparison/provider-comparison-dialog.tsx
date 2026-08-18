import { CheckCircle2 } from "lucide-react";

import { CommercialOutboundLink } from "@/components/site/commercial-outbound-link";
import { getFinalProviderProfilePath } from "@/data/providers/providers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  formatProviderAmount,
  formatProviderReviewDate,
  getProviderCostInformation,
  getProviderAge,
  getProviderProcessingTime,
  getProviderRequirements,
  getProviderTerm,
  getProviderTypeLabel,
  isIntermediaryProvider,
} from "@/lib/provider-display";
import type { Provider } from "@/types/provider";

interface ComparisonRow {
  label: string;
  value: (provider: Provider) => string;
}

const rows: ComparisonRow[] = [
  { label: "Tipo", value: getProviderTypeLabel },
  { label: "Producto", value: (provider) => provider.productType ?? "—" },
  { label: "Monto", value: (provider) => formatProviderAmount(provider) ?? "—" },
  { label: "Plazo", value: (provider) => getProviderTerm(provider) ?? "—" },
  { label: "Edad", value: (provider) => getProviderAge(provider) ?? "—" },
  { label: "Tiempo indicado", value: (provider) => getProviderProcessingTime(provider) ?? "—" },
  {
    label: "Requisitos indicados",
    value: (provider) => getProviderRequirements(provider) ?? "—",
  },
  { label: "Operador", value: (provider) => provider.legalEntity ?? "—" },
  {
    label: "¿Otorga el crédito directamente?",
    value: (provider) =>
      provider.providerType === "direct_credit_provider"
        ? "Sí"
        : isIntermediaryProvider(provider)
          ? "No"
          : "No confirmado",
  },
  {
    label: "Información de costos",
    value: (provider) =>
      getProviderCostInformation(provider) ??
      (provider.providerType === "direct_credit_provider"
        ? "Consulta las condiciones finales antes de aceptar."
        : isIntermediaryProvider(provider)
          ? "Las condiciones pertenecen al proveedor correspondiente."
          : "Consulta las condiciones finales antes de continuar."),
  },
  {
    label: "Última verificación",
    value: (provider) => formatProviderReviewDate(provider.verifiedAt) ?? "—",
  },
];

function ProviderActions({ provider }: { provider: Provider }) {
  const profileHref = getFinalProviderProfilePath(provider.slug);
  return (
    <div className="grid gap-2">
      {profileHref ? (
        <a
          href={profileHref}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary px-3 text-center text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Ver detalles
        </a>
      ) : null}
      <CommercialOutboundLink provider={provider} className="px-3" />
    </div>
  );
}

export function ProviderComparisonDialog({
  providers,
  open,
  onOpenChange,
}: {
  providers: readonly Provider[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bottom-0 left-0 top-auto max-h-[92dvh] max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-lg p-0 data-[state=closed]:animate-none data-[state=open]:animate-none sm:bottom-auto sm:left-[50%] sm:top-[50%] sm:max-w-6xl sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-lg sm:data-[state=closed]:animate-out sm:data-[state=open]:animate-in">
        <DialogHeader className="sticky top-0 z-10 border-b border-border bg-background px-5 py-5 pr-14 sm:px-6">
          <DialogTitle>Comparación seleccionada</DialogTitle>
          <DialogDescription>
            Revisa la información publicada de {providers.length} proveedores. Un guion indica que
            el dato comparable no está disponible.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 p-4 sm:hidden">
          {providers.map((provider) => (
            <section key={provider.id} className="rounded-md border border-border-strong bg-card">
              <header className="flex items-center gap-3 border-b border-border p-4">
                {provider.logo ? (
                  <span className="grid size-12 place-items-center rounded-md border border-border bg-white p-2">
                    <img
                      src={provider.logo}
                      alt={`Logo de ${provider.name}`}
                      className="size-full object-contain"
                    />
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-12 place-items-center rounded-md border border-border bg-surface text-xs font-semibold"
                  >
                    {provider.name
                      .split(/\s+/)
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                )}
                <div>
                  <h3 className="text-lg">{provider.name}</h3>
                  <p className="text-xs text-muted-foreground">{getProviderTypeLabel(provider)}</p>
                </div>
              </header>
              <dl className="px-4">
                {rows.slice(1).map((row) => (
                  <div key={row.label} className="border-b border-border py-3 last:border-b-0">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">{row.value(provider)}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-border p-4">
                <ProviderActions provider={provider} />
              </div>
            </section>
          ))}
        </div>

        <div className="hidden overflow-x-auto p-6 sm:block">
          <table className="w-full min-w-[48rem] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-52 border-b border-border p-3 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  Dato
                </th>
                {providers.map((provider) => (
                  <th
                    key={provider.id}
                    className="border-b border-border p-3 text-left align-bottom"
                  >
                    <span className="flex items-center gap-2">
                      {provider.logo ? (
                        <span className="grid size-10 place-items-center rounded-md border border-border bg-white p-1.5">
                          <img
                            src={provider.logo}
                            alt={`Logo de ${provider.name}`}
                            className="size-full object-contain"
                          />
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="grid size-10 place-items-center rounded-md border border-border bg-surface text-xs font-semibold"
                        >
                          {provider.name
                            .split(/\s+/)
                            .slice(0, 2)
                            .map((word) => word[0])
                            .join("")
                            .toUpperCase()}
                        </span>
                      )}
                      <span>{provider.name}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th scope="row" className="p-3 text-left align-top font-medium">
                    {row.label}
                  </th>
                  {providers.map((provider) => (
                    <td key={provider.id} className="max-w-72 p-3 align-top leading-relaxed">
                      {row.label === "Última verificación" ? (
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <CheckCircle2 aria-hidden="true" className="size-3.5 text-accent" />
                          {row.value(provider)}
                        </span>
                      ) : (
                        row.value(provider)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row" className="p-3 text-left align-top font-medium">
                  Acciones
                </th>
                {providers.map((provider) => (
                  <td key={provider.id} className="p-3 align-top">
                    <ProviderActions provider={provider} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
