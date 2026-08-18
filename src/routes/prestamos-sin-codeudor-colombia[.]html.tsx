import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { ProductComparisonCta } from "@/components/site/product-comparison-cta";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { officialSources } from "@/data/migration/official-sources";
import { getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const path = "/prestamos-sin-codeudor-colombia.html";
const title = "Préstamos sin codeudor en Colombia: requisitos y evaluación";
const description =
  "Qué significa pedir un préstamo sin codeudor, qué puede evaluar el proveedor y cómo comparar requisitos, costos, garantías y alternativas en Colombia.";
const heading = "Préstamos sin codeudor en Colombia: opciones y requisitos reales";
const reviewedAt = "2026-08-18";
const links = {
  requirements: "/requisitos-credito-online-colombia.html",
  study: "/estudio-de-credito-colombia.html",
  history: "/historial-crediticio-datacredito-colombia.html",
  reported: "/prestamo-reportado-datacredito.html",
  offers: "/ofertas-creditos.html",
  online: "/creditos-online-colombia.html",
};
function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="font-medium underline decoration-accent underline-offset-4" href={href}>
      {children}
    </a>
  );
}

export const Route = createFileRoute("/prestamos-sin-codeudor-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: SinCodeudorPage,
});

function SinCodeudorPage() {
  const sources = [
    officialSources.sfcCreditFaq,
    officialSources.financialConsumerLaw,
    officialSources.dataCreditoHabeasData,
  ];
  return (
    <>
      <StructuredData
        data={[
          createWebPageStructuredData({
            name: heading,
            description,
            path,
            siteName: siteConfig.siteName,
          }),
          createArticleStructuredData({
            headline: heading,
            description,
            path,
            language: "es-CO",
            dateModified: reviewedAt,
            authorName: editorialIdentity.name,
          }),
        ]}
      />
      <ArticleLayout
        breadcrumbs={
          getSeoBreadcrumbs(path) ?? [
            { label: "Inicio", href: "/" },
            { label: "Requisitos", href: links.requirements },
            { label: "Préstamos sin codeudor" },
          ]
        }
        title={heading}
        intro="Un préstamo sin codeudor no exige que otra persona responda solidariamente por la deuda, pero sí puede incluir estudio de crédito, verificación de ingresos, consulta de historia, garantías u otras condiciones. La exigencia depende del producto y del riesgo evaluado; “sin codeudor” nunca significa aprobación sin controles."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Requisitos de crédito", href: links.requirements },
          { label: "Estudio de crédito", href: links.study },
          { label: "Créditos online", href: links.online },
          { label: "Comparar opciones", href: links.offers },
          { label: "Historia crediticia", href: links.history },
          { label: "Opciones estando reportado", href: links.reported },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Cuándo puede pedir un proveedor un codeudor">
          <p>
            Puede solicitarlo cuando su política de riesgo, el producto, el monto, los ingresos
            demostrables, la estabilidad o la garantía disponible no bastan para aprobar al
            solicitante individual. No existe una regla universal que obligue o exima a todos los
            créditos.
          </p>
          <p>
            Codeudor, fiador, avalista y garantía no siempre producen las mismas obligaciones. Antes
            de aceptar, identifica la figura contractual y busca orientación independiente si no
            entiendes su alcance.
          </p>
        </ContentSection>
        <ContentSection title="Qué significa realmente un producto sin codeudor">
          <p>
            Significa que la oferta concreta no condiciona el crédito a incorporar otra persona como
            responsable. Puede seguir siendo un crédito de consumo, libranza, libre inversión,
            tarjeta u otra modalidad, cada una con reglas y costos distintos.
          </p>
          <p>
            No clasificamos un proveedor como “sin codeudor” por una frase genérica, ni presentamos
            un listado de aprobaciones garantizadas. La condición debe confirmarse en los requisitos
            y contrato vigentes.
          </p>
        </ContentSection>
        <ContentSection title="Requisitos y verificaciones que pueden reemplazar esa condición">
          <p>
            El proveedor puede revisar identidad, edad y capacidad legal, residencia, contacto,
            ingresos, gastos, deudas, actividad laboral o económica, cuenta de desembolso y
            autorizaciones. Consulta las categorías de{" "}
            <InlineLink href={links.requirements}>requisitos para crédito online</InlineLink>.
          </p>
          <p>
            También puede pedir soportes adicionales o limitar monto y plazo. Entregar documentos
            completos no obliga a aprobar.
          </p>
        </ContentSection>
        <ContentSection title="Cómo influyen ingresos, historia e identidad">
          <p>
            El <InlineLink href={links.study}>estudio de crédito</InlineLink> puede combinar
            capacidad de pago, comportamiento anterior, nivel de endeudamiento, señales de fraude y
            política interna. Ningún puntaje aislado representa una decisión universal.
          </p>
          <p>
            Consulta tu <InlineLink href={links.history}>historia crediticia</InlineLink> para
            detectar errores, pero no asumas que tener historial o no estar reportado garantiza
            aprobación. Si ya existe un reporte, revisa opciones realistas para{" "}
            <InlineLink href={links.reported}>solicitantes reportados</InlineLink> sin ocultar
            información.
          </p>
        </ContentSection>
        <ContentSection title="Garantías y otras condiciones posibles">
          <p>
            La ausencia de codeudor no excluye libranza, garantía mobiliaria, depósito, seguro,
            débito automático u otra condición cuando sea legal y esté informada. Confirma quién
            asume cada costo y qué sucede ante mora.
          </p>
          <p>
            Desconfía si te piden un anticipo para “eliminar” el codeudor o liberar el desembolso.
            Verifica la entidad y el canal antes de pagar o entregar datos.
          </p>
        </ContentSection>
        <ContentSection title="Costos y riesgos del crédito sin codeudor">
          <p>
            Una evaluación individual puede traducirse en condiciones diferentes, pero no afirmamos
            que siempre sea más costosa. Compara tasa, comisiones, seguros, plazo, cuota y total de
            la oferta escrita, además de cobros por mora.
          </p>
          <p>
            El principal riesgo es aceptar una cuota insostenible por evitar pedir apoyo a otra
            persona. La deuda y sus consecuencias siguen siendo del titular según el contrato.
          </p>
        </ContentSection>
        <ContentSection title="Alternativas si exigen codeudor o rechazan la solicitud">
          <ul className="list-disc space-y-2 pl-5">
            <li>Solicitar un monto menor o esperar mientras mejora el presupuesto.</li>
            <li>Presentar soportes válidos adicionales si el proveedor los acepta.</li>
            <li>
              Comparar otra modalidad adecuada, sin enviar solicitudes simultáneas indiscriminadas.
            </li>
            <li>Ahorrar, negociar el gasto o buscar una alternativa sin deuda.</li>
          </ul>
          <p>
            En <InlineLink href={links.online}>créditos online</InlineLink> puedes revisar el
            proceso completo antes de comparar opciones documentadas.
          </p>
        </ContentSection>
        <ProductComparisonCta
          title="Compara condiciones, no promesas de aprobación"
          description="La comparación no identifica una opción como préstamo sin codeudor salvo que esa condición esté respaldada para el producto concreto."
        />
      </ArticleLayout>
    </>
  );
}
