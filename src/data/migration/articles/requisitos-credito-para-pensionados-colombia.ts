import type { MigratedLegacyArticle } from "../types";

export const article = {
  path: "/requisitos-credito-para-pensionados-colombia.html",
  legacySourceFile: "requisitos-credito-para-pensionados-colombia.html",
  pageType: "article",
  layout: "article",
  title: "Requisitos para crédito de pensionados en Colombia: guía clara",
  description:
    "Revisa qué documentos y condiciones debes confirmar al solicitar crédito como pensionado, especialmente si el producto utiliza libranza.",
  h1: "Requisitos para solicitar un crédito siendo pensionado en Colombia",
  intro:
    "Para encontrar condiciones adecuadas, compara opciones entre entidades y revisa tasas, plazos y costos antes de autorizar un descuento por nómina o pensión.",
  legacyUpdatedAt: "febrero 2026",
  bodyHtml:
    '<section>\n<h2 id="documentacion">Documentación requerida</h2>\n<ul>\n<li>Muestran el valor bruto, los descuentos y el neto recibido.</li>\n</ul>\n<h3>Para créditos de libranza específicamente</h3>\n<ul>\n<li>Autorización firmada de descuento directo de la mesada.</li>\n<li>En algunos casos, carta de la entidad pagadora confirmando que aceptará el nuevo descuento.</li>\n</ul>\n<ul>\n<li>Factura de servicios públicos reciente (como prueba de domicilio).</li>\n</ul>\n</section>\n<section>\n<h2 id="ingresos">Nivel mínimo de ingresos</h2>\n<p>Este rango abre más opciones.</p>\n<h3>¿Cómo se calcula la capacidad de endeudamiento?</h3>\n<ol>\n<li>Restan los descuentos de ley (salud, si aplica).</li>\n<li>Restan las cuotas de libranzas existentes.</li>\n</ol>\n</section>\n<section>\n<h2 id="errores">Errores que reducen la aprobación</h2>\n<p>Presentar desprendibles de meses anteriores a los solicitados o extractos bancarios incompletos genera retrasos o rechazo directo.</p>\n<h3>Reportes negativos sin resolver</h3>\n<p>Antes de solicitar, revisa tu situación crediticia y, si hay reportes, intenta resolverlos o al menos conocer su impacto.</p>\n</section>\n<section>\n<h2 id="donde-solicitar-credito-pensionados">¿Dónde comparar opciones de crédito para pensionados?</h2>\n<h3>Cuándo NO conviene</h3>\n<ul>\n<li>Si tu margen de descuento es bajo y quedarías sin capacidad para gastos básicos.</li>\n<li>Si no puedes sostener la cuota todos los meses (en libranza no hay meses de “pausa”).</li>\n</ul>\n<p>Si quieres empezar por opciones digitales, puedes <a href="/ofertas-creditos.html">comparar ofertas de crédito</a>.</p>\n</section>\n<section>\n<h2 id="faq">Preguntas frecuentes</h2>\n<details>\n<summary>¿Cuántas veces puedo solicitar si me rechazan?</summary>\n<p>Múltiples consultas en poco tiempo pueden reducir tu score crediticio temporalmente.</p>\n</details>\n<details>\n<summary>¿Los requisitos son los mismos para crédito online y presencial?</summary>\n<p>Para una visión más amplia de las opciones, consulta la guía completa de préstamos para pensionados .</p>\n</details>\n</section>',
  authorityReferences: [
    "Superintendencia Financiera de Colombia",
    "Datacrédito",
    "TransUnion",
    "Colpensiones",
    "Ley 1527 de 2012",
  ],
  reviewFlags: [
    {
      type: "lender_or_product_claim",
      status: "pending",
      note: "Verificar cualquier afirmación sobre entidades, productos o condiciones.",
    },
    {
      type: "approval_or_funding_time",
      status: "pending",
      note: "Verificar cualquier plazo de estudio, decisión o desembolso.",
    },
    {
      type: "age_or_eligibility",
      status: "pending",
      note: "Verificar edades, requisitos y criterios de elegibilidad por producto.",
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
      type: "credit_bureau_claim",
      status: "pending",
      note: "Verificar información y procedimientos relacionados con centrales de riesgo.",
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
      label: "Guía de préstamos para pensionados",
      path: "/prestamos-para-pensionados-colombia.html",
    },
    {
      label: "Descuento automático para pensionados",
      path: "/descuento-automatico-pensionados-colombia.html",
    },
  ],
} as const satisfies MigratedLegacyArticle;
