import type { MigratedLegacyArticle } from "../types";

export const article = {
  path: "/consultar-historial-crediticio-gratis.html",
  legacySourceFile: "consultar-historial-crediticio-gratis.html",
  pageType: "article",
  layout: "article",
  title: "Consultar historial crediticio gratis en DataCrédito",
  description:
    "Conoce el canal oficial para registrarte y consultar gratis tu historia de crédito en DataCrédito, además de sus canales de habeas data.",
  h1: "Cómo consultar tu historial crediticio gratis en Colombia",
  intro: "Conoce tu situación financiera antes de solicitar un crédito.",
  legacyUpdatedAt: "2026-02-01",
  bodyHtml:
    '<section>\n<h2 id="por-que-heading">Por qué consultar tu historial crediticio</h2>\n<ul>\n<li>Saber si tienes reportes negativos que puedan afectar tu solicitud</li>\n<li>Identificar deudas que hayas olvidado</li>\n<li>Evitar sorpresas al momento de solicitar crédito</li>\n<li>Prepararte mejor para cumplir los <a href="/requisitos-credito-online-colombia.html">requisitos de un crédito online</a></li>\n</ul>\n</section>\n<section>\n<h2 id="centrales-heading">Centrales de riesgo en Colombia</h2>\n<p>Es posible que tu información varíe entre ellas, por lo que idealmente deberías consultar las tres.</p>\n</section>\n<section>\n<h2 id="datacredito-heading">Cómo consultar Datacrédito gratis</h2>\n<ol>\n<li>Recibe el documento impreso o digital</li>\n</ol>\n<p>Advertencia: Asegúrate de usar el sitio oficial. Aprende a verificar si una empresa es legítima antes de proporcionar tus datos.</p>\n</section>\n<section>\n<h2 id="transunion-heading">Cómo consultar TransUnion</h2>\n<ol>\n<li>Proporciona tu información de identificación</li>\n<li>Completa el proceso de verificación</li>\n</ol>\n</section>\n<section>\n<h2 id="interpretar-heading">Entender tu reporte crediticio</h2>\n<h3>Información personal</h3>\n<p>Datos de identificación, dirección, teléfono y correo electrónico registrados.</p>\n<h3>Consultas realizadas</h3>\n<p>Un número que representa tu riesgo crediticio. Mientras más alto, mejor tu perfil.</p>\n</section>\n<section>\n<h2 id="errores-heading">Qué hacer si encuentras errores</h2>\n<h3>Identifica el error específico</h3>\n<ul>\n<li>Deuda que no es tuya</li>\n<li>Monto incorrecto</li>\n<li>Estado de pago equivocado</li>\n<li>Información personal incorrecta</li>\n</ul>\n<p>Si el error proviene de información enviada por un banco o entidad financiera, también debes contactarlos directamente.</p>\n<h3>Documenta todo</h3>\n<p>Guarda copias de todos los documentos, comunicaciones y comprobantes relacionados con tu reclamo.</p>\n<h3>Escala si es necesario</h3>\n<p>Conoce todos tus derechos como consumidor financiero para hacer valer tus reclamos.</p>\n</section>\n<section>\n<h2 id="enlaces-heading">Información relacionada</h2>\n<h3>Guía principal</h3>\n<ul>\n<li><a href="/creditos-online-colombia.html">Créditos online en Colombia — guía completa</a></li>\n</ul>\n<h3>Herramientas y evaluación</h3>\n<ul>\n<li><a href="/que-es-estudio-de-credito.html">Qué es un estudio de crédito</a> — cómo te evalúan</li>\n<li><a href="/simulador-credito-como-funciona.html">Simuladores de crédito</a> — calcula antes de solicitar</li>\n</ul>\n<h3>Tus derechos</h3>\n<ul>\n<li><a href="/derechos-consumidor-financiero-colombia.html">Derechos del consumidor financiero</a></li>\n<li><a href="/requisitos-credito-online-colombia.html">Requisitos para préstamos online</a></li>\n</ul>\n</section>',
  authorityReferences: ["Datacrédito", "TransUnion", "Experian"],
  reviewFlags: [
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
      label: "Guía para personas reportadas",
      path: "/prestamo-reportado-datacredito.html",
    },
    {
      label: "Crédito sin historial crediticio",
      path: "/credito-sin-historial-crediticio.html",
    },
    {
      label: "Entender el puntaje crediticio",
      path: "/puntaje-crediticio-colombia.html",
    },
  ],
} as const satisfies MigratedLegacyArticle;
