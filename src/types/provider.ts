export type ProviderType =
  "direct_credit_provider" | "credit_service" | "broker" | "aggregator" | "lead_generator";

export type SuperfinancieraStatus = "verified" | "not_verified" | "not_applicable" | "unknown";

import type { Source } from "./content";

export type ProviderClaimField =
  | "providerType"
  | "legalEntity"
  | "nit"
  | "officialUrl"
  | "productType"
  | "currency"
  | "amount"
  | "eligibility"
  | "ageRequirement"
  | "residencyRequirement"
  | "citizenshipRequirement"
  | "bankAccountRequirement"
  | "term"
  | "rate"
  | "additionalCosts"
  | "promotion"
  | "applicationTime"
  | "decisionTime"
  | "fundingTime"
  | "regulatoryStatus";

export interface ProviderClaimProvenance {
  field: ProviderClaimField;
  sourceIds: string[];
  checkedAt?: string;
  note?: string;
}

export interface ProviderOfferMetadata {
  source: "user_provided_offer_master";
  confidence: string;
  conflictFlag: boolean;
  limitsAndCautions?: string;
  internalNotes?: string;
  reviewedAt: string;
}

export interface Provider {
  id: string;
  slug: string;
  name: string;
  providerType: ProviderType;
  legalEntity?: string;
  nit?: string;
  officialUrl?: string;
  logo?: string;
  productType?: string;
  slogan?: string;
  benefits?: string[];
  requirements?: string[];
  cardCaution?: string;
  amountMin?: number;
  amountMax?: number;
  currency: "COP";
  minAge?: number;
  maxAge?: number;
  colombianResidencyRequired?: boolean;
  colombianCitizenshipRequired?: boolean;
  bankAccountRequired?: boolean;
  eligibilityNotes?: string;
  termMinDays?: number;
  termMaxDays?: number;
  termNotes?: string;
  rateText?: string;
  additionalCostsText?: string;
  promotionText?: string;
  firstAmountFree?: boolean;
  processingTimeMinutes?: number;
  applicationTimeClaim?: string;
  decisionTimeClaim?: string;
  fundingTimeClaim?: string;
  superfinancieraStatus: SuperfinancieraStatus;
  regulatoryNotes?: string;
  officialSources: Source[];
  claimProvenance: ProviderClaimProvenance[];
  verifiedAt?: string;
  featured: boolean;
  active: boolean;
}
