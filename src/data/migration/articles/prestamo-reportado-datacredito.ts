import type { MigratedLegacyArticle } from "../types";

export const article = {
  path: "/prestamo-reportado-datacredito.html",
  legacySourceFile: "prestamo-reportado-datacredito.html",
  pageType: "pillar",
  layout: "standard",
  title: "Reportado en DataCrédito: qué significa al pedir crédito",
  description:
    "Conoce qué significa estar reportado en DataCrédito, cómo revisar tu historia y por qué el reporte no determina la decisión de todos los proveedores.",
  h1: "Qué significa estar reportado en DataCrédito al solicitar crédito",
  intro:
    "Los pagos anticipados son una señal de advertencia de posible estafa. Si le piden pago anticipado, es recomendable buscar otras opciones.",
  bodyHtml:
    '<section>\n<h2 id="puntos-clave-heading">Puntos clave a tener en cuenta</h2>\n<ul>\n<li><strong>Alternativas no tradicionales:</strong> Considere opciones como cooperativas, cajas de compensación o préstamos respaldados por garantías.</li>\n</ul>\n</section>\n<section>\n<h2 id="riesgos-heading">Riesgos y advertencias</h2>\n<p>Es importante reconocer las situaciones de riesgo.</p>\n<h3>Situaciones que requieren especial atención</h3>\n<ul>\n<li><strong>Pagos anticipados:</strong> Nunca pague dinero por adelantado como requisito para obtener un préstamo.</li>\n<li>Conoce tus derechos como consumidor financiero para protegerte.</li>\n</ul>\n<h3>Señales de alerta</h3>\n<p>Tenga precaución si encuentra alguna de estas situaciones al buscar crédito:</p>\n<ul>\n<li>Comunicación únicamente por redes sociales o WhatsApp sin canales oficiales</li>\n<li>Solicitud de dinero por adelantado para "gastos de trámite" o "seguros"</li>\n<li>Negativa a proporcionar información escrita sobre tasas y condiciones</li>\n<li>Presión para decidir en el mismo día o en pocas horas</li>\n<li>Ausencia de documentos formales o contratos legales</li>\n</ul>\n</section>\n<section>\n<h2 id="checklist-heading">Checklist antes de tomar una decisión</h2>\n<h3>Antes de proceder</h3>\n<ul>\n<li>Calcule si puede pagar las cuotas sin comprometer gastos esenciales</li>\n<li>Lea completamente el contrato antes de firmar cualquier documento</li>\n<li>Confirme que no existen pagos anticipados requeridos</li>\n<li>Tenga claros todos los costos adicionales: seguros, comisiones, penalidades</li>\n<li>Asegúrese de entender las consecuencias del incumplimiento</li>\n</ul>\n<h3>Preguntas que debe poder responder</h3>\n<ul>\n<li>¿Cuál es el costo total del crédito (intereses y costos adicionales)?</li>\n<li>¿Qué documentos específicos necesita presentar con su cédula?</li>\n<li>¿Cuáles son exactamente los costos adicionales al capital e intereses?</li>\n<li>¿Qué sucede si tiene dificultades para pagar una cuota a tiempo?</li>\n</ul>\n</section>\n<section>\n<h2 id="faq-heading">Preguntas frecuentes</h2>\n<details>\n<summary>¿Por qué me piden pagar dinero por adelantado para tramitar el préstamo?</summary>\n<p>Los pagos anticipados son una señal de advertencia de posible estafa. Si le piden pago anticipado, es recomendable buscar otras opciones.</p>\n</details>\n<details>\n<summary>¿Los préstamos para reportados siempre tienen tasas más altas?</summary>\n<p>Es importante comparar opciones y verificar que las tasas estén dentro de los límites legales.</p>\n</details>\n</section>\n<section>\n<h2 id="enlaces-heading">Información relacionada</h2>\n<h3>Guía principal</h3>\n<ul>\n<li><a href="/creditos-online-colombia.html">Créditos online en Colombia — guía completa</a></li>\n</ul>\n<h3>Evita problemas adicionales</h3>\n<ul>\n<li><a href="/estafas-prestamos-online-colombia.html">Estafas de préstamos online</a> — las personas reportadas son blanco frecuente</li>\n<li><a href="/verificar-empresa-prestamos-legitima.html">Cómo verificar si una empresa es legítima</a></li>\n</ul>\n<h3>Requisitos</h3>\n<ul>\n<li><a href="/requisitos-credito-online-colombia.html">Requisitos para préstamos online</a> — qué te pedirán realmente</li>\n</ul>\n</section>',
  authorityReferences: ["Datacrédito"],
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
      type: "regulatory_or_legal_claim",
      status: "pending",
      note: "Revisión legal y verificación contra normativa oficial vigente.",
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
  ],
  relatedRoutes: [
    {
      label: "Crédito sin historial crediticio",
      path: "/credito-sin-historial-crediticio.html",
    },
    {
      label: "Consultar el historial crediticio",
      path: "/consultar-historial-crediticio-gratis.html",
    },
    {
      label: "Entender el puntaje crediticio",
      path: "/puntaje-crediticio-colombia.html",
    },
    {
      label: "Cómo funciona el crédito de libranza",
      path: "/credito-libranza-colombia.html",
    },
  ],
} as const satisfies MigratedLegacyArticle;
