import type { LegacyReviewFlag, LegacyReviewFlagType } from "./types";

const reviewFlagNotes: Record<LegacyReviewFlagType, string> = {
  current_rate_or_usury: "Verificar tasas, topes y periodicidad contra una fuente oficial vigente.",
  lender_or_product_claim:
    "Verificar cualquier afirmación sobre entidades, productos o condiciones.",
  approval_or_funding_time: "Verificar cualquier plazo de estudio, decisión o desembolso.",
  age_or_eligibility: "Verificar edades, requisitos y criterios de elegibilidad por producto.",
  zero_percent_or_promotion: "Verificar promociones o afirmaciones de costo cero.",
  regulatory_or_legal_claim: "Revisión legal y verificación contra normativa oficial vigente.",
  government_or_authority_procedure:
    "Verificar el procedimiento y los canales oficiales de la autoridad mencionada.",
  credit_bureau_claim:
    "Verificar información y procedimientos relacionados con centrales de riesgo.",
  market_availability: "Verificar que la opción o servicio siga disponible en Colombia.",
  source_link_verification: "Añadir y comprobar enlaces oficiales antes de publicar.",
  numeric_example: "Revisar supuestos, cifras y resultados del ejemplo antes de publicar.",
};

export function pendingReviewFlags(types: LegacyReviewFlagType[]): LegacyReviewFlag[] {
  return [...new Set(types)].map((type) => ({
    type,
    status: "pending" as const,
    note: reviewFlagNotes[type],
  }));
}
