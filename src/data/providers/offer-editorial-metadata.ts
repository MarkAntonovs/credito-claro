import type { ProviderOfferMetadata } from "@/types/provider";
import type { VerifiedProviderSlug } from "./providers";

const reviewedAt = "2026-08-19";

function entry(
  confidence: string,
  conflictFlag: boolean,
  limitsAndCautions: string,
  internalNotes: string,
): ProviderOfferMetadata {
  return {
    source: "user_provided_offer_master",
    confidence,
    conflictFlag,
    limitsAndCautions,
    internalNotes,
    reviewedAt,
  };
}

/** Editorial/compliance provenance. Never import this registry into browser-rendered components. */
export const OFFER_EDITORIAL_METADATA = {
  credito365: entry(
    "High for affiliate fields / Medium for descriptive claims",
    true,
    "Research section says max COP 1,000,000 and age 18–65, while affiliate section says max COP 1,500,000 and age 18–70.",
    "Do not hardcode 34.68% E.A. as current without date/source review.",
  ),
  crezu: entry(
    "High for affiliate fields / Medium for research claims",
    true,
    "Research says up to COP 10,000,000; affiliate section says max COP 3,000,000. Partner lender sets final terms/cost.",
    "Do not present 0–36% E.A. as a universal Crezu rate; it depends on partner lender.",
  ),
  finteres: entry(
    "High for affiliate fields / Medium for descriptive claims",
    true,
    "Research says 91–120 days and mentions a possible first-loan promotion; affiliate data says 90–2160 days and first amount free = no.",
    "Keep intermediary wording; do not portray FINTERES as the lender.",
  ),
  raplo: entry(
    "Medium",
    false,
    "No structured affiliate amount/term/age block in the provided file.",
    "Legal entity details remain internal pending verification before prominent display.",
  ),
  soscredit: entry(
    "Medium",
    false,
    "Maximum APR and sample calculations are research-derived and require a dated source review.",
    "Avoid hardcoding an APR without a current source and date.",
  ),
  binixo: entry(
    "Low-Medium",
    true,
    "The source block contains foreign-market and foreign-currency contamination that must not be used for Colombia.",
    "Remove all foreign-market and foreign-currency text from public Colombia content.",
  ),
  solcredito: entry(
    "High for affiliate amount/age / Medium otherwise",
    true,
    "Research says max COP 1,500,000 and 3–48 months; affiliate data says COP 100,000–1,000,000 and age 18–70.",
    "Do not turn affiliate targeting preferences into eligibility requirements.",
  ),
  credy: entry(
    "Medium",
    true,
    "Promotional and rapid-transfer wording is partner-dependent and not universal.",
    "Do not present rapid transfer or 0% as guaranteed.",
  ),
  zaimoo: entry(
    "Low-Medium",
    true,
    "Rate and promotional claims are research-derived, partner-dependent and high-risk for public display.",
    "Avoid displaying unreviewed rate ranges.",
  ),
  lineru: entry(
    "Medium-High",
    false,
    "Fee examples vary by profile and must remain clearly contextualized.",
    "Processing value is a lower-bound indication, not a guarantee.",
  ),
  "doctor-peso": entry(
    "Medium",
    true,
    "The cited legal-cap figure is time-sensitive and must not be copied as current.",
    "Do not publish a time-sensitive E.A. figure without current verification.",
  ),
  rayo: entry(
    "High for affiliate fields / Medium otherwise",
    true,
    "Research pre-approval timing differs from the supplied deposit timing.",
    "Do not use minutes as disbursement time.",
  ),
  odiru: entry(
    "Medium",
    true,
    "The affiliate data flags the one-month maximum for confirmation.",
    "Keep the maximum term flagged until confirmed.",
  ),
  creditify: entry(
    "Low-Medium",
    true,
    "The unusually low display minimum comes only from the supplied research text.",
    "Operator details remain internal pending verification.",
  ),
  finpug: entry(
    "Low-Medium",
    true,
    "Promotional, no-verification and no-hidden-fee claims are not suitable as generic guaranteed facts.",
    "Keep not-a-direct-lender wording prominent.",
  ),
  "nice-credit": entry(
    "Medium-High for compliance / Medium for commercial fields",
    true,
    "Affiliate compliance prohibits presenting Creditnice as a microfinance company or an official/login website.",
    "Brand, domain, favicon, title and traffic-source restrictions remain internal-only controls.",
  ),
} satisfies Record<VerifiedProviderSlug, ProviderOfferMetadata>;
