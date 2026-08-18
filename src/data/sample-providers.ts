/**
 * SAMPLE / PLACEHOLDER DATA — design prototype only.
 *
 * These records exercise the production-oriented Provider V1 shape without
 * representing real companies, products, eligibility rules, rates, or claims.
 */

import type { Provider } from "@/types/provider";

export const SAMPLE_PROVIDERS: Provider[] = [
  {
    id: "sample-provider-a",
    slug: "sample-provider-a",
    name: "Proveedor de muestra A",
    providerType: "direct_credit_provider",
    productType: "[tipo de producto de muestra]",
    currency: "COP",
    eligibilityNotes: "[requisitos de muestra por verificar]",
    termNotes: "[plazo de muestra por verificar]",
    rateText: "[tasa de muestra por verificar]",
    additionalCostsText: "[costos de muestra por verificar]",
    superfinancieraStatus: "unknown",
    officialSources: [],
    claimProvenance: [],
    featured: true,
    active: false,
  },
  {
    id: "sample-service-b",
    slug: "sample-service-b",
    name: "Servicio de muestra B",
    providerType: "aggregator",
    productType: "[servicio de comparación de muestra]",
    currency: "COP",
    eligibilityNotes: "[criterios definidos por cada proveedor]",
    termNotes: "[condiciones definidas por cada proveedor]",
    superfinancieraStatus: "not_applicable",
    officialSources: [],
    claimProvenance: [],
    featured: true,
    active: false,
  },
  {
    id: "sample-provider-c",
    slug: "sample-provider-c",
    name: "Proveedor de muestra C",
    providerType: "direct_credit_provider",
    productType: "[tipo de producto de muestra]",
    currency: "COP",
    eligibilityNotes: "[requisitos de muestra por verificar]",
    superfinancieraStatus: "unknown",
    officialSources: [],
    claimProvenance: [],
    featured: false,
    active: false,
  },
];
