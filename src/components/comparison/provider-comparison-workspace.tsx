"use client";

import { useMemo, useState } from "react";
import { Filter, LayoutGrid, Search, SlidersHorizontal, Table2, X } from "lucide-react";

import { ProviderCard } from "@/components/site/provider-card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Provider } from "@/types/provider";
import { ProviderComparisonDialog } from "./provider-comparison-dialog";
import {
  defaultProviderFilters,
  filterAndSortProviders,
  toggleProviderSelection,
  type ProviderFilterState,
  type ProviderSort,
  type ServiceFilter,
} from "./provider-comparison-state";
import { ProviderComparisonTable } from "./provider-comparison-table";

type ViewMode = "cards" | "table";

function FilterFields({
  filters,
  onChange,
  idPrefix,
}: {
  filters: ProviderFilterState;
  onChange: (filters: ProviderFilterState) => void;
  idPrefix: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-end">
      <label htmlFor={`${idPrefix}-service-type`} className="grid gap-1.5 text-sm font-medium">
        Tipo de servicio
        <select
          id={`${idPrefix}-service-type`}
          value={filters.serviceType}
          onChange={(event) =>
            onChange({ ...filters, serviceType: event.target.value as ServiceFilter })
          }
          className="min-h-11 rounded-md border border-border-strong bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="all">Todos</option>
          <option value="direct">Proveedor directo</option>
          <option value="intermediary">Intermediario</option>
          <option value="credit-service">Servicio con rol no confirmado</option>
        </select>
      </label>

      <label htmlFor={`${idPrefix}-sort`} className="grid gap-1.5 text-sm font-medium">
        Ordenar por
        <select
          id={`${idPrefix}-sort`}
          value={filters.sort}
          onChange={(event) => onChange({ ...filters, sort: event.target.value as ProviderSort })}
          className="min-h-11 rounded-md border border-border-strong bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="name-asc">Nombre A–Z</option>
          <option value="name-desc">Nombre Z–A</option>
          <option value="amount-max">Monto máximo (solo datos disponibles)</option>
        </select>
      </label>

      <label className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-border-strong bg-card px-3 text-sm font-medium hover:bg-surface">
        <input
          type="checkbox"
          checked={filters.onlyWithAmount}
          onChange={(event) => onChange({ ...filters, onlyWithAmount: event.target.checked })}
          className="size-5 rounded border-border-strong accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        Información de monto disponible
      </label>
    </div>
  );
}

export function ProviderComparisonWorkspace({ providers }: { providers: readonly Provider[] }) {
  const [filters, setFilters] = useState<ProviderFilterState>(defaultProviderFilters);
  const [view, setView] = useState<ViewMode>("cards");
  const [selectedSlugs, setSelectedSlugs] = useState<Set<string>>(() => new Set());
  const [comparisonOpen, setComparisonOpen] = useState(false);

  const visibleProviders = useMemo(
    () => filterAndSortProviders(providers, filters),
    [filters, providers],
  );
  const selectedProviders = providers.filter((provider) => selectedSlugs.has(provider.slug));
  const activeFilterCount = Number(filters.serviceType !== "all") + Number(filters.onlyWithAmount);

  function toggleProvider(slug: string) {
    setSelectedSlugs((current) => toggleProviderSelection(current, slug));
  }

  function clearComparison() {
    setSelectedSlugs(new Set());
    setComparisonOpen(false);
  }

  function clearFilters() {
    setFilters(defaultProviderFilters);
  }

  return (
    <div
      data-comparison-workspace
      className={cn("space-y-5", selectedSlugs.size >= 2 && "pb-24 sm:pb-20")}
    >
      <div className="rounded-lg border border-border-strong bg-card p-4 shadow-sm sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <label className="grid gap-1.5 text-sm font-medium" htmlFor="provider-search">
            Buscar proveedor
            <span className="relative block">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                id="provider-search"
                type="search"
                value={filters.query}
                onChange={(event) => setFilters({ ...filters, query: event.target.value })}
                placeholder="Nombre, operador o producto"
                className="min-h-11 w-full rounded-md border border-border-strong bg-background py-2 pl-10 pr-3 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-sm"
              />
            </span>
          </label>

          <div>
            <span className="mb-1.5 block text-sm font-medium">Vista</span>
            <div className="inline-grid grid-cols-2 rounded-md border border-border-strong bg-surface p-1">
              <button
                type="button"
                aria-pressed={view === "cards"}
                onClick={() => setView("cards")}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  view === "cards" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground",
                )}
              >
                <LayoutGrid aria-hidden="true" className="size-4" />
                Tarjetas
              </button>
              <button
                type="button"
                aria-pressed={view === "table"}
                onClick={() => setView("table")}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  view === "table" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground",
                )}
              >
                <Table2 aria-hidden="true" className="size-4" />
                Tabla
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 hidden border-t border-border pt-4 md:block">
          <FilterFields filters={filters} onChange={setFilters} idPrefix="desktop" />
        </div>

        <div className="mt-4 border-t border-border pt-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-border-strong bg-card px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Filter aria-hidden="true" className="size-4" />
                Filtros y orden
                {activeFilterCount > 0 ? (
                  <span className="grid size-5 place-items-center rounded-full bg-primary text-xs text-primary-foreground">
                    {activeFilterCount}
                  </span>
                ) : null}
              </button>
            </SheetTrigger>
            <SheetContent className="w-[90%] overflow-y-auto sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Filtros y orden</SheetTitle>
                <SheetDescription>
                  Filtra únicamente por información respaldada en las fichas actuales.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <FilterFields filters={filters} onChange={setFilters} idPrefix="mobile" />
              </div>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-primary px-4 text-sm font-medium"
              >
                Limpiar filtros
              </button>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <aside className="grid gap-3 rounded-md border-l-2 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed sm:grid-cols-2 sm:gap-6">
        <p>
          <strong>Proveedor directo</strong> → ofrece el producto de crédito.
        </p>
        <p>
          <strong>Intermediario</strong> → ayuda a encontrar o comparar opciones, pero no otorga el
          crédito directamente.
        </p>
      </aside>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          {visibleProviders.length} de {providers.length} proveedores visibles
        </p>
        {(filters.query || activeFilterCount > 0) && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium underline decoration-border-strong underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X aria-hidden="true" className="size-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      {visibleProviders.length === 0 ? (
        <div className="rounded-lg border border-border-strong bg-card px-5 py-10 text-center">
          <SlidersHorizontal aria-hidden="true" className="mx-auto size-7 text-accent" />
          <h3 className="mt-3 text-lg">No encontramos proveedores con estos filtros.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Ajusta la búsqueda o vuelve a mostrar el conjunto completo.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Limpiar filtros
          </button>
        </div>
      ) : view === "cards" ? (
        <div className="grid items-start gap-4 xl:grid-cols-2">
          {visibleProviders.map((provider) => {
            const selected = selectedSlugs.has(provider.slug);
            return (
              <ProviderCard
                key={provider.id}
                provider={provider}
                comparison={{
                  selected,
                  disabled: selectedSlugs.size >= 3 && !selected,
                  onToggle: () => toggleProvider(provider.slug),
                }}
              />
            );
          })}
        </div>
      ) : (
        <ProviderComparisonTable
          providers={visibleProviders}
          selectedSlugs={selectedSlugs}
          onToggle={toggleProvider}
        />
      )}

      {selectedSlugs.size >= 2 ? (
        <div className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-2xl rounded-lg border border-primary/25 bg-primary px-4 py-3 text-primary-foreground shadow-xl sm:bottom-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold" role="status" aria-live="polite">
              {selectedSlugs.size} proveedores seleccionados
            </p>
            <span className="text-xs text-primary-foreground/70">Máximo 3</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-0 sm:flex">
            <button
              type="button"
              onClick={() => setComparisonOpen(true)}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary-foreground px-4 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Comparar ahora
            </button>
            <button
              type="button"
              onClick={clearComparison}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary-foreground/35 px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Limpiar
            </button>
          </div>
        </div>
      ) : null}

      <ProviderComparisonDialog
        providers={selectedProviders}
        open={comparisonOpen}
        onOpenChange={setComparisonOpen}
      />
    </div>
  );
}
