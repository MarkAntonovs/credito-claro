import type { MigratedLegacyArticle } from "../types";

export const article = {
  path: "/tasa-de-usura-colombia.html",
  legacySourceFile: "tasa-de-usura-colombia.html",
  pageType: "article",
  layout: "article",
  title: "Tasa de usura en Colombia 2026: cálculo por modalidad",
  description:
    "Tasa de usura en Colombia: entiende el IBC, la modalidad aplicable y el cálculo de referencia con el ejemplo oficial de agosto de 2026.",
  h1: "Qué es la tasa de usura y cómo te protege en Colombia",
  intro: "Conocerla te ayuda a identificar préstamos abusivos y proteger tus finanzas.",
  legacyUpdatedAt: "2026-02-01",
  bodyHtml:
    '<section>\n<h2 id="tipos-credito">Tasas según el tipo de crédito</h2>\n<h3>Crédito de vivienda</h3>\n<p>Para compra de inmuebles.</p>\n<h3>Tarjetas de crédito</h3>\n<p>Nota: Estos valores son ejemplos.</p>\n</section>\n<section>\n<h2 id="que-hacer">Qué hacer si te cobran más del límite</h2>\n<h3>Reúne evidencia</h3>\n<ul>\n<li>Tabla de amortización</li>\n<li>Estados de cuenta o comprobantes de pago</li>\n</ul>\n<p>Antes de escalar el caso, intenta resolver directamente. Puede ser un error administrativo.</p>\n</section>\n<section>\n<h2 id="enlaces-heading">Información relacionada</h2>\n<h3>Guía principal</h3>\n<ul>\n<li><a href="/creditos-online-colombia.html">Créditos online en Colombia — guía completa</a></li>\n</ul>\n<h3>Costos y condiciones</h3>\n<ul>\n<li><a href="/costos-ocultos-creditos-online.html">Costos ocultos en créditos online</a></li>\n</ul>\n<h3>Comparar opciones</h3>\n<ul>\n<li><a href="/credito-online-vs-banco.html">Crédito online vs. banco tradicional</a></li>\n</ul>\n</section>',
  authorityReferences: ["Superintendencia Financiera de Colombia"],
  reviewFlags: [
    {
      type: "current_rate_or_usury",
      status: "pending",
      note: "Verificar tasas, topes y periodicidad contra una fuente oficial vigente.",
    },
    {
      type: "lender_or_product_claim",
      status: "pending",
      note: "Verificar cualquier afirmación sobre entidades, productos o condiciones.",
    },
    {
      type: "regulatory_or_legal_claim",
      status: "pending",
      note: "Revisión legal y verificación contra normativa oficial vigente.",
    },
    {
      type: "government_or_authority_procedure",
      status: "pending",
      note: "Verificar el procedimiento y los canales oficiales de la autoridad mencionada.",
    },
    {
      type: "market_availability",
      status: "pending",
      note: "Verificar que la opción o servicio siga disponible en Colombia.",
    },
    {
      type: "source_link_verification",
      status: "pending",
      note: "Añadir y comprobar enlaces oficiales antes de publicar.",
    },
    {
      type: "numeric_example",
      status: "pending",
      note: "Revisar supuestos, cifras y resultados del ejemplo antes de publicar.",
    },
  ],
  relatedRoutes: [
    {
      label: "Entender las tasas de interés",
      path: "/tasas-interes-prestamos-online.html",
    },
    {
      label: "Derechos del consumidor financiero",
      path: "/derechos-consumidor-financiero-colombia.html",
    },
  ],
} as const satisfies MigratedLegacyArticle;
