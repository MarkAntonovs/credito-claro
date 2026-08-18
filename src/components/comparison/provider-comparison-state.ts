import {
  formatProviderAmount,
  isIntermediaryProvider,
  providerMatchesSearch,
} from "@/lib/provider-display";
import type { Provider } from "@/types/provider";

export type ServiceFilter = "all" | "direct" | "intermediary" | "credit-service";
export type ProviderSort = "name-asc" | "name-desc" | "amount-max";

export interface ProviderFilterState {
  query: string;
  serviceType: ServiceFilter;
  onlyWithAmount: boolean;
  sort: ProviderSort;
}

export const defaultProviderFilters: ProviderFilterState = {
  query: "",
  serviceType: "all",
  onlyWithAmount: false,
  sort: "name-asc",
};

export function filterAndSortProviders(
  providers: readonly Provider[],
  filters: ProviderFilterState,
): Provider[] {
  return providers
    .filter((provider) => providerMatchesSearch(provider, filters.query))
    .filter((provider) => {
      if (filters.serviceType === "direct") {
        return provider.providerType === "direct_credit_provider";
      }
      if (filters.serviceType === "intermediary") {
        return isIntermediaryProvider(provider);
      }
      if (filters.serviceType === "credit-service") {
        return provider.providerType === "credit_service";
      }
      return true;
    })
    .filter((provider) => !filters.onlyWithAmount || formatProviderAmount(provider) !== null)
    .sort((first, second) => {
      if (filters.sort === "name-desc") {
        return second.name.localeCompare(first.name, "es-CO", { sensitivity: "base" });
      }
      if (filters.sort === "amount-max") {
        const firstAmount = first.amountMax ?? first.amountMin;
        const secondAmount = second.amountMax ?? second.amountMin;
        if (firstAmount !== undefined && secondAmount !== undefined) {
          return secondAmount - firstAmount;
        }
        if (firstAmount !== undefined) return -1;
        if (secondAmount !== undefined) return 1;
      }
      return first.name.localeCompare(second.name, "es-CO", { sensitivity: "base" });
    });
}

export function toggleProviderSelection(current: ReadonlySet<string>, slug: string): Set<string> {
  const next = new Set(current);
  if (next.has(slug)) {
    next.delete(slug);
  } else if (next.size < 3) {
    next.add(slug);
  }
  return next;
}
