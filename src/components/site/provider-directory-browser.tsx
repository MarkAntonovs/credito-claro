import { useMemo, useState } from "react";

import { ProviderCard } from "@/components/site/provider-card";
import { isIntermediaryProvider, providerMatchesSearch } from "@/lib/provider-display";
import type { Provider } from "@/types/provider";

type DirectoryType = "all" | "direct" | "intermediary" | "credit-service";

export function ProviderDirectoryBrowser({ providers }: { providers: readonly Provider[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<DirectoryType>("all");
  const visible = useMemo(
    () =>
      providers.filter(
        (provider) =>
          providerMatchesSearch(provider, query) &&
          (type === "all" ||
            (type === "direct" && provider.providerType === "direct_credit_provider") ||
            (type === "intermediary" && isIntermediaryProvider(provider)) ||
            (type === "credit-service" && provider.providerType === "credit_service")),
      ),
    [providers, query, type],
  );

  return (
    <div className="space-y-5">
      <div className="grid gap-4 rounded-lg border border-border-strong bg-card p-4 sm:grid-cols-2 sm:p-5">
        <label className="text-sm font-medium">
          Buscar por nombre, operador o producto
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-1.5 min-h-11 w-full rounded-md border border-border-strong bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </label>
        <label className="text-sm font-medium">
          Tipo de registro
          <select
            value={type}
            onChange={(event) => setType(event.target.value as DirectoryType)}
            className="mt-1.5 min-h-11 w-full rounded-md border border-border-strong bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="all">Todos</option>
            <option value="direct">Prestamista directo</option>
            <option value="intermediary">Intermediario o comparador</option>
            <option value="credit-service">Servicio con rol no confirmado</option>
          </select>
        </label>
      </div>
      <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
        {visible.length} de {providers.length} registros activos visibles
      </p>
      {visible.length ? (
        <div className="grid items-start gap-4 xl:grid-cols-2">
          {visible.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      ) : (
        <p className="rounded-md border border-border-strong bg-surface p-5 text-sm">
          No hay registros que coincidan con estos filtros.
        </p>
      )}
    </div>
  );
}
