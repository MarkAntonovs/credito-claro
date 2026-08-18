import { Check } from "lucide-react";

import { CommercialOutboundLink } from "@/components/site/commercial-outbound-link";
import { ProviderTypeBadge } from "@/components/site/provider-type-badge";
import { getFinalProviderProfilePath } from "@/data/providers/providers";
import {
  formatProviderAmount,
  formatProviderReviewDate,
  getProviderAge,
  getProviderProcessingTime,
  getProviderRequirements,
  getProviderTerm,
  isIntermediaryProvider,
} from "@/lib/provider-display";
import { cn } from "@/lib/utils";
import type { Provider } from "@/types/provider";

export function ProviderComparisonTable({
  providers,
  selectedSlugs,
  onToggle,
}: {
  providers: readonly Provider[];
  selectedSlugs: ReadonlySet<string>;
  onToggle: (slug: string) => void;
}) {
  const selectionFull = selectedSlugs.size >= 3;

  return (
    <div className="overflow-hidden rounded-lg border border-border-strong bg-card">
      <div className="overflow-x-auto" tabIndex={0} aria-label="Tabla comparativa desplazable">
        <table className="w-full min-w-[94rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            Comparación de proveedores y servicios de crédito con información revisada
          </caption>
          <thead className="bg-surface text-xs uppercase tracking-[0.06em] text-muted-foreground">
            <tr>
              {[
                "Proveedor",
                "Tipo",
                "Producto",
                "Monto",
                "Plazo",
                "Edad",
                "Requisitos clave",
                "Tiempos",
                "Operador",
                "Verificación",
                "Acciones",
              ].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="border-b border-border px-4 py-3 font-semibold"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {providers.map((provider) => {
              const selected = selectedSlugs.has(provider.slug);
              const disabled = selectionFull && !selected;
              const intermediary = isIntermediaryProvider(provider);
              const profileHref = getFinalProviderProfilePath(provider.slug);

              return (
                <tr
                  key={provider.id}
                  data-selected={selected || undefined}
                  className="border-b border-border last:border-b-0 data-[selected=true]:bg-accent-soft/45"
                >
                  <th scope="row" className="px-4 py-4 align-top font-medium">
                    <div className="flex min-w-40 items-center gap-3">
                      {provider.logo ? (
                        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-white p-1.5">
                          <img
                            src={provider.logo}
                            alt={`Logo de ${provider.name}`}
                            className="size-full object-contain"
                          />
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-xs font-semibold"
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
                    </div>
                  </th>
                  <td className="px-4 py-4 align-top">
                    <ProviderTypeBadge type={provider.providerType} />
                    {intermediary ? (
                      <span className="mt-2 block max-w-36 text-xs leading-relaxed text-notice-foreground">
                        Intermediario · No presta directamente
                      </span>
                    ) : null}
                  </td>
                  <td className="max-w-52 px-4 py-4 align-top leading-relaxed">
                    {provider.productType ?? "—"}
                  </td>
                  <td className="num whitespace-nowrap px-4 py-4 align-top font-medium">
                    {formatProviderAmount(provider) ?? "—"}
                  </td>
                  <td className="max-w-48 px-4 py-4 align-top leading-relaxed">
                    {getProviderTerm(provider) ?? "—"}
                  </td>
                  <td className="max-w-56 px-4 py-4 align-top leading-relaxed">
                    {getProviderAge(provider) ?? "—"}
                  </td>
                  <td className="max-w-60 px-4 py-4 align-top leading-relaxed">
                    {getProviderRequirements(provider) ?? "—"}
                  </td>
                  <td className="max-w-52 px-4 py-4 align-top leading-relaxed">
                    {getProviderProcessingTime(provider) ?? "—"}
                  </td>
                  <td className="max-w-48 px-4 py-4 align-top leading-relaxed">
                    {provider.legalEntity ?? "—"}
                  </td>
                  <td className="num whitespace-nowrap px-4 py-4 align-top text-xs text-muted-foreground">
                    {formatProviderReviewDate(provider.verifiedAt) ?? "—"}
                  </td>
                  <td className="px-4 py-4 align-top">
                    <div className="w-40 space-y-2">
                      <label
                        className={cn(
                          "flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-3 font-medium focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                          selected
                            ? "border-primary bg-accent-soft text-accent-soft-foreground"
                            : "border-border-strong hover:bg-surface",
                          disabled && "cursor-not-allowed opacity-55",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "grid size-5 place-items-center rounded-sm border",
                            selected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border-strong",
                          )}
                        >
                          {selected ? <Check className="size-3.5" /> : null}
                        </span>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selected}
                          disabled={disabled}
                          onChange={() => onToggle(provider.slug)}
                          aria-label={`${selected ? "Quitar" : "Añadir"} ${provider.name} ${selected ? "de la" : "a la"} comparación`}
                        />
                        {selected ? "Seleccionado" : "Comparar"}
                      </label>
                      {profileHref ? (
                        <a
                          href={profileHref}
                          className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-primary px-3 font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          Ver detalles
                        </a>
                      ) : null}
                      <CommercialOutboundLink provider={provider} className="px-3" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="border-t border-border px-4 py-3 text-xs text-muted-foreground md:hidden">
        Desliza horizontalmente para revisar todas las columnas.
      </p>
    </div>
  );
}
