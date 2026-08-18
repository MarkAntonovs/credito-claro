import type { Provider } from "@/types/provider";
import { DataValue } from "./primitives";
import { ProviderTypeBadge } from "./provider-type-badge";

const copFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

function formatAmount(provider: Provider): string | null {
  if (provider.amountMin === undefined && provider.amountMax === undefined) return null;
  if (provider.amountMin !== undefined && provider.amountMax !== undefined) {
    return `${copFormatter.format(provider.amountMin)} – ${copFormatter.format(provider.amountMax)}`;
  }
  if (provider.amountMin !== undefined) return `Desde ${copFormatter.format(provider.amountMin)}`;
  return `Hasta ${copFormatter.format(provider.amountMax as number)}`;
}

/**
 * Dense comparison view for future category pages. Scrolls horizontally on
 * small screens so financial values are never truncated.
 */
export function ComparisonTable({ providers }: { providers: Provider[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-strong bg-card">
      <table className="w-full min-w-[46rem] text-sm">
        <caption className="sr-only">Comparación de proveedores con datos de ejemplo</caption>
        <thead>
          <tr className="border-b border-border text-left">
            {["Proveedor", "Tipo", "Producto", "Monto", "Tasas y costos"].map((heading) => (
              <th key={heading} scope="col" className="eyebrow px-4 py-3 text-muted-foreground">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.id} className="border-b border-border last:border-0">
              <th scope="row" className="px-4 py-4 text-left font-medium">
                {provider.name}
              </th>
              <td className="px-4 py-4">
                <ProviderTypeBadge type={provider.providerType} />
              </td>
              <td className="px-4 py-4 text-muted-foreground">
                {provider.productType ?? "No disponible"}
              </td>
              <td className="px-4 py-4">
                <DataValue value={formatAmount(provider)} />
              </td>
              <td className="px-4 py-4">
                <DataValue value={provider.rateText ?? provider.additionalCostsText} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
