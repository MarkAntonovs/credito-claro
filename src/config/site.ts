const seoDeploymentEnvironment = import.meta.env["VITE_SEO_DEPLOYMENT_ENV"] ?? "development";
const seoIndexingOptIn = import.meta.env["VITE_SEO_INDEXING_ENABLED"] === "true";

export const siteConfig = {
  siteName: "CreditoColombia.co",
  siteUrl: "https://creditocolombia.co",
  defaultLocale: "es-CO",
  defaultTitle: "CreditoColombia.co — Compara opciones de crédito en Colombia",
  defaultDescription:
    "Sitio informativo independiente para comparar proveedores de crédito en Colombia: requisitos, montos y condiciones. No somos una entidad financiera y no otorgamos créditos.",
  seoDeploymentEnvironment,
  indexingEnabled: seoDeploymentEnvironment === "production" && seoIndexingOptIn,
} as const;
