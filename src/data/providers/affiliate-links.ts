import type { VerifiedProviderSlug } from "./providers";

export type AffiliateLinkStatus =
  | "verified_provider_destination"
  | "user_provided_commercial_destination"
  | "unverified_redirect_chain"
  | "dead"
  | "inactive";

export interface AffiliateLinkRecord {
  providerSlug: VerifiedProviderSlug;
  affiliateUrl: string;
  status: AffiliateLinkStatus;
  affiliateNetwork: "GoodAff" | "Murtov";
  reviewedAt: string;
  observedDestination?: string;
  notes?: string;
}

const reviewedAt = "2026-08-19";
const status = "user_provided_commercial_destination" as const;

/**
 * User-provided monetization destinations from ColombiaCredito_Offer_Master_Codex.csv.
 * Network and review metadata stay in the data layer and are not consumer-facing copy.
 */
export const AFFILIATE_LINKS = [
  {
    providerSlug: "credito365",
    affiliateUrl: "https://go.goodaff.eu/credito365.co/9is4591jin",
    affiliateNetwork: "GoodAff",
    status,
    reviewedAt,
  },
  {
    providerSlug: "crezu",
    affiliateUrl: "https://go.goodaff.eu/crezu.co/9is4591jin",
    affiliateNetwork: "GoodAff",
    status,
    reviewedAt,
  },
  {
    providerSlug: "finteres",
    affiliateUrl: "https://go.goodaff.eu/finteres.co/9is4591jin",
    affiliateNetwork: "GoodAff",
    status,
    reviewedAt,
  },
  {
    providerSlug: "raplo",
    affiliateUrl: "https://go.goodaff.eu/raplo.co/9is4591jin",
    affiliateNetwork: "GoodAff",
    status,
    reviewedAt,
  },
  {
    providerSlug: "soscredit",
    affiliateUrl: "https://go.goodaff.eu/soscredit.co/9is4591jin",
    affiliateNetwork: "GoodAff",
    status,
    reviewedAt,
  },
  {
    providerSlug: "binixo",
    affiliateUrl: "https://murtov.com/2cbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "solcredito",
    affiliateUrl: "https://murtov.com/8cbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "credy",
    affiliateUrl: "https://murtov.com/Zcbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "zaimoo",
    affiliateUrl: "https://murtov.com/Xcbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "lineru",
    affiliateUrl: "https://murtov.com/Fcbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "doctor-peso",
    affiliateUrl: "https://murtov.com/acbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "rayo",
    affiliateUrl: "https://murtov.com/0cbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "odiru",
    affiliateUrl: "https://murtov.com/Ecbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "creditify",
    affiliateUrl: "https://murtov.com/ocbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "finpug",
    affiliateUrl: "https://murtov.com/pcbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
  {
    providerSlug: "nice-credit",
    affiliateUrl: "https://murtov.com/ccbu",
    affiliateNetwork: "Murtov",
    status,
    reviewedAt,
  },
] as const satisfies readonly AffiliateLinkRecord[];

export function getAffiliateLink(providerSlug: string): AffiliateLinkRecord | undefined {
  return AFFILIATE_LINKS.find((record) => record.providerSlug === providerSlug);
}

export function getVerifiedAffiliateLink(providerSlug: string): AffiliateLinkRecord | undefined {
  const record = getAffiliateLink(providerSlug);
  return record?.status === "verified_provider_destination" ||
    record?.status === "user_provided_commercial_destination"
    ? record
    : undefined;
}
