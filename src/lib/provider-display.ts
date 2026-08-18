import type { Provider, ProviderType } from "@/types/provider";

const copFormatter = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 0,
});

const shortMonthNames = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sept",
  "oct",
  "nov",
  "dic",
] as const;

export function formatProviderAmount(provider: Provider): string | null {
  const { amountMin, amountMax } = provider;
  if (amountMin === undefined && amountMax === undefined) return null;
  if (amountMin !== undefined && amountMax !== undefined) {
    return `COP ${copFormatter.format(amountMin)} – ${copFormatter.format(amountMax)}`;
  }
  if (amountMin !== undefined) return `Desde COP ${copFormatter.format(amountMin)}`;
  return `Hasta COP ${copFormatter.format(amountMax as number)}`;
}

export function formatProviderReviewDate(date: string | undefined): string | null {
  if (!date) return null;
  const parsed = new Date(`${date}T00:00:00Z`);
  return `${parsed.getUTCDate()} ${shortMonthNames[parsed.getUTCMonth()]} ${parsed.getUTCFullYear()}`;
}

export function getProviderTypeLabel(provider: Provider): string {
  const labels: Record<ProviderType, string> = {
    direct_credit_provider: "Proveedor directo",
    credit_service: "Servicio de crédito",
    broker: "Intermediario",
    aggregator: "Servicio de comparación",
    lead_generator: "Servicio de contacto",
  };
  return labels[provider.providerType];
}

export function isIntermediaryProvider(provider: Pick<Provider, "providerType">): boolean {
  return ["broker", "aggregator", "lead_generator"].includes(provider.providerType);
}

export function getProviderRequirements(provider: Provider): string | null {
  if (provider.requirements?.length) return provider.requirements.join(" · ");
  const requirements: string[] = [];
  if (provider.minAge !== undefined) requirements.push(`Edad mínima: ${provider.minAge} años`);
  if (provider.colombianCitizenshipRequired) requirements.push("Ciudadanía colombiana");
  if (provider.colombianResidencyRequired) requirements.push("Residencia en Colombia");
  if (provider.bankAccountRequired) requirements.push("Cuenta bancaria");
  if (requirements.length > 0) return requirements.join(" · ");
  return provider.eligibilityNotes ?? null;
}

export function getProviderAge(provider: Provider): string | null {
  if (provider.minAge !== undefined && provider.maxAge !== undefined) {
    return `${provider.minAge}–${provider.maxAge} años`;
  }
  if (provider.minAge !== undefined) return `Desde ${provider.minAge} años`;
  if (provider.maxAge !== undefined) return `Hasta ${provider.maxAge} años`;
  return null;
}

export function getProviderProcessingTime(provider: Provider): string | null {
  const minutes = provider.processingTimeMinutes;
  if (minutes === undefined) return null;
  if (minutes % 1440 === 0) return `Desde ${minutes / 1440} ${minutes === 1440 ? "día" : "días"}`;
  if (minutes % 60 === 0) return `Desde ${minutes / 60} ${minutes === 60 ? "hora" : "horas"}`;
  return `Desde ${minutes} minutos`;
}

export function getProviderCostInformation(provider: Provider): string | null {
  return [provider.rateText, provider.additionalCostsText].filter(Boolean).join(" · ") || null;
}

export function getProviderTerm(provider: Provider): string | null {
  if (provider.termNotes) return provider.termNotes;
  if (provider.termMinDays !== undefined && provider.termMaxDays !== undefined) {
    return `${provider.termMinDays}–${provider.termMaxDays} días`;
  }
  if (provider.termMinDays !== undefined) return `Desde ${provider.termMinDays} días`;
  if (provider.termMaxDays !== undefined) return `Hasta ${provider.termMaxDays} días`;
  return null;
}

export function getProviderTiming(provider: Provider): string | null {
  return (
    [provider.applicationTimeClaim, provider.decisionTimeClaim, provider.fundingTimeClaim]
      .filter(Boolean)
      .join(" · ") || null
  );
}

export function providerMatchesSearch(provider: Provider, query: string): boolean {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return true;
  return normalizeSearchText(
    [provider.name, provider.legalEntity, provider.productType, provider.slogan]
      .filter(Boolean)
      .join(" "),
  ).includes(normalizedQuery);
}

function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-CO")
    .trim();
}
