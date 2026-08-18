import type { PageType, RelatedRoute, Source } from "@/types/content";

export type LegacyLanguage = "es" | "en";

export type LegacyPageType = PageType | "error" | "draft";

export type LegacyAliasType = "extensionless_rewrite" | "index_file_alias" | "directory_index";

export type MigrationStatus =
  "preserve" | "migrate" | "migrated" | "redirect" | "investigate" | "noindex" | "remove_later";

export interface LegacyRouteRecord {
  legacyPath: string;
  canonicalPath: string;
  language: LegacyLanguage;
  pageType: LegacyPageType;
  legacySourceFile: string;
  indexableLegacy: boolean;
  sitemapLegacy: boolean;
  aliasOf?: string;
  legacyAliasType?: LegacyAliasType;
  migrationStatus: MigrationStatus;
  targetPath: string;
  notes: string;
}

export type LegacyReviewFlagType =
  | "current_rate_or_usury"
  | "lender_or_product_claim"
  | "approval_or_funding_time"
  | "age_or_eligibility"
  | "zero_percent_or_promotion"
  | "regulatory_or_legal_claim"
  | "government_or_authority_procedure"
  | "credit_bureau_claim"
  | "market_availability"
  | "source_link_verification"
  | "numeric_example";

export interface LegacyReviewFlag {
  type: LegacyReviewFlagType;
  status: "pending";
  note: string;
}

export interface MigratedLegacyArticle {
  path: string;
  legacySourceFile: string;
  pageType: "pillar" | "article";
  layout: "standard" | "article";
  title: string;
  description: string;
  h1: string;
  intro: string;
  legacyUpdatedAt?: string;
  bodyHtml: string;
  authorityReferences: string[];
  reviewFlags: LegacyReviewFlag[];
  relatedRoutes: RelatedRoute[];
}

export interface ClaimProvenance {
  claim: string;
  sourceIds: string[];
}

export interface EditorialReview {
  intro?: string;
  bodyHtml: string;
  bodyHtmlAppend?: string;
  reviewedAt: string;
  sources: Source[];
  claimProvenance: ClaimProvenance[];
  reviewFlags: LegacyReviewFlag[];
}
