import type { Provider } from "@/data/sample-providers";
import { ProviderTypeBadge } from "./provider-type-badge";
import { DataValue } from "./primitives";

/**
 * Dense comparison view for future category pages. Scrolls horizontally on
 * small screens so financial values are never truncated.
 */
export function ComparisonTable({ providers }: { providers: Provider[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-strong bg-card">
      <table className="w-full min-w-[46rem] text-sm">
        <caption className="sr-only">
          Comparación de proveedores con datos de ejemplo
        </caption>
        <thead>
          <tr className="border-b border-border text-left">
            {["Proveedor", "Tipo", "Producto", "Monto", "Tasas y costos"].map((h) => (
              <th key={h} scope="col" className="eyebrow px-4 py-3 text-muted-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {providers.map((p) => (
            <tr key={p.id} className="border-b border-border last:border-0">
              <th scope="row" className="px-4 py-4 text-left font-medium">
                {p.name}
              </th>
              <td className="px-4 py-4">
                <ProviderTypeBadge type={p.type} />
              </td>
              <td className="px-4 py-4 text-muted-foreground">{p.product ?? "No disponible"}</td>
              <td className="px-4 py-4">
                <DataValue value={p.amount} />
              </td>
              <td className="px-4 py-4">
                <DataValue value={p.cost} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
