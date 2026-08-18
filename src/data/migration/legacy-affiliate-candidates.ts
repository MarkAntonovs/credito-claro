import type { AffiliateLinkStatus } from "@/data/providers/affiliate-links";

export interface LegacyAffiliateCandidate {
  providerSlug: string;
  legacyAffiliateUrl: string;
  legacySourceFile: "ofertas-creditos.html" | "en/loan-offers.html";
  verificationStatus: AffiliateLinkStatus;
  verifiedAt: string;
  observedDestination?: string;
  notes?: string;
}

const repeatedInEnglish = "El mismo destino también aparece en en/loan-offers.html.";
const verifiedAt = "2026-08-11";

export const LEGACY_AFFILIATE_CANDIDATES: LegacyAffiliateCandidate[] = [
  {
    providerSlug: "lineru",
    legacyAffiliateUrl: "https://murtov.com/1jru",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "unverified_redirect_chain",
    verifiedAt,
    observedDestination: "Cadena de seguimiento en alprestamo.lnjmp.com",
    notes: `${repeatedInEnglish} El destino final específico del proveedor no fue verificado de forma independiente; no está autorizado para renderizado.`,
  },
  {
    providerSlug: "credito365",
    legacyAffiliateUrl: "https://go.goodaff.eu/credito365.co/9is4591jin",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "verified_provider_destination",
    verifiedAt,
    observedDestination: "https://credito365.co/",
    notes: `${repeatedInEnglish} Redirección observada con parámetros de atribución de Goodaff; autorizado para CTA comercial.`,
  },
  {
    providerSlug: "doctor-peso",
    legacyAffiliateUrl: "https://murtov.com/jjru",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "dead",
    verifiedAt,
    observedDestination: "HTTP 404 Not Found",
    notes: `${repeatedInEnglish} El enlace devolvió 404; no está autorizado para renderizado.`,
  },
  {
    providerSlug: "rayo",
    legacyAffiliateUrl: "https://murtov.com/qjru",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "unverified_redirect_chain",
    verifiedAt,
    observedDestination: "Cadena de seguimiento en alprestamo.lnjmp.com",
    notes: `${repeatedInEnglish} El destino final específico del proveedor no fue verificado de forma independiente; no está autorizado para renderizado.`,
  },
  {
    providerSlug: "odiru",
    legacyAffiliateUrl: "https://murtov.com/4jru",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "unverified_redirect_chain",
    verifiedAt,
    observedDestination: "Cadena de seguimiento en alprestamo.lnjmp.com",
    notes: `${repeatedInEnglish} El destino final específico del proveedor no fue verificado de forma independiente; no está autorizado para renderizado.`,
  },
  {
    providerSlug: "crezu",
    legacyAffiliateUrl: "https://go.goodaff.eu/crezu.co/9is4591jin",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "verified_provider_destination",
    verifiedAt,
    observedDestination: "https://crezu.co/",
    notes: `${repeatedInEnglish} Redirección observada con parámetros de atribución de Goodaff; autorizado para CTA comercial.`,
  },
  {
    providerSlug: "soscredit",
    legacyAffiliateUrl: "https://go.goodaff.eu/soscredit.co/9is4591jin",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "verified_provider_destination",
    verifiedAt,
    observedDestination: "https://www.soscredit.co/es",
    notes: `${repeatedInEnglish} Redirección observada con parámetros de atribución de Goodaff; autorizado para CTA comercial.`,
  },
  {
    providerSlug: "finteres",
    legacyAffiliateUrl: "https://go.goodaff.eu/finteres.co/9is4591jin",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "verified_provider_destination",
    verifiedAt,
    observedDestination: "https://finteres.co/",
    notes: `${repeatedInEnglish} Redirección observada con parámetros de atribución de Goodaff; autorizado para CTA comercial.`,
  },
  {
    providerSlug: "finpug",
    legacyAffiliateUrl: "https://murtov.com/Ajru",
    legacySourceFile: "ofertas-creditos.html",
    verificationStatus: "unverified_redirect_chain",
    verifiedAt,
    observedDestination: "Cadena de seguimiento de afiliación de Livornica",
    notes: `${repeatedInEnglish} El destino final específico del proveedor no fue verificado de forma independiente; no está autorizado para renderizado.`,
  },
];

export const PROVIDER_INVESTIGATION_SLUGS = ["zaimoo", "creditify", "creditnice"] as const;
