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

const path = "/microcreditos-colombia.html";
const title = "Microcréditos en Colombia: uso productivo, requisitos y costos";
const description =
  "Qué es un microcrédito en Colombia, cómo se diferencia del crédito de consumo de bajo monto y qué revisar en requisitos, tasas, costos y riesgos.";
const heading = "Microcréditos en Colombia: qué son y cuándo tienen sentido";
const reviewedAt = "2026-08-18";

const links = {
  low: "/prestamos-bajo-monto-colombia.html",
  rates: "/tasas-interes-creditos-colombia.html",
  requirements: "/requisitos-credito-online-colombia.html",
  offers: "/ofertas-creditos.html",
};
function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="font-medium underline decoration-accent underline-offset-4" href={href}>
      {children}
    </a>
  );
}

export const Route = createFileRoute("/microcreditos-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: MicrocreditosPage,
});

function MicrocreditosPage() {
  const sources = [
    officialSources.colombiaProductiveCreditRules,
    officialSources.sfcRatesDashboard,
    officialSources.sfcCreditFaq,
    officialSources.financialConsumerLaw,
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
          getSeoBreadcrumbs(path) ?? [{ label: "Inicio", href: "/" }, { label: "Microcréditos" }]
        }
        title={heading}
        intro="El microcrédito financia una microempresa o actividad económica de pequeña escala. Su destino productivo es la diferencia central: no es simplemente cualquier préstamo pequeño para gastos personales. En Colombia conviven reglas de microcrédito y modalidades de crédito productivo, por lo que hay que confirmar la clasificación, el destino y el costo de cada oferta."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Crédito de bajo monto", href: links.low },
          { label: "Tasas y costo total", href: links.rates },
          { label: "Requisitos de crédito", href: links.requirements },
          { label: "Comparar opciones", href: links.offers },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Definición y marco actual en Colombia">
          <p>
            El microcrédito se vincula con el financiamiento de microempresas. Desde 2023, el
            Decreto 455 también organiza modalidades de crédito productivo para la certificación del
            interés bancario corriente según actividad económica, ubicación y rango del monto.
          </p>
          <p>
            La Superintendencia Financiera ha aclarado que esa clasificación para certificar tasas
            no eliminó el microcrédito. Por eso esta guía no usa ambos nombres como sinónimos
            automáticos ni asigna una modalidad sin revisar el contrato y la finalidad.
          </p>
        </ContentSection>
        <ContentSection title="Microcrédito no es crédito de consumo de bajo monto">
          <p>
            El microcrédito o crédito productivo se relaciona con una actividad económica: por
            ejemplo, inventario, herramientas, insumos o capital de trabajo. El{" "}
            <InlineLink href={links.low}>crédito de consumo de bajo monto</InlineLink> es una
            modalidad regulada para personas naturales y necesidades de consumo; que el valor sea
            pequeño no lo convierte en microcrédito.
          </p>
          <p>
            Esta página responde a la financiación del negocio. La guía de bajo monto responde a una
            categoría de consumo. Mantener esa frontera evita comparar tasas, requisitos o topes de
            modalidades distintas.
          </p>
        </ContentSection>
        <ContentSection title="A quién puede estar dirigido y cómo se evalúa">
          <p>
            Puede estar dirigido a una persona natural con actividad económica, micronegocio o
            microempresa. El proveedor puede evaluar antigüedad y funcionamiento de la actividad,
            ventas, flujo de caja, gastos, deudas, experiencia, destino de los recursos y capacidad
            de pago.
          </p>
          <p>
            La informalidad laboral no implica ausencia de evaluación. Tampoco presentar evidencia
            del negocio garantiza aprobación.
          </p>
        </ContentSection>
        <ContentSection title="Requisitos y documentos posibles">
          <p>
            Pueden solicitar identidad, ubicación de la actividad, registros o soportes disponibles,
            facturas, extractos, referencias, evidencia de ventas y presupuesto del uso productivo.
            La lista cambia por entidad, modalidad y perfil.
          </p>
          <p>
            Consulta las categorías generales de{" "}
            <InlineLink href={links.requirements}>requisitos de crédito</InlineLink> y confirma
            directamente cuáles aplican antes de compartir datos sensibles.
          </p>
        </ContentSection>
        <ContentSection title="Montos: no hay un umbral universal para toda oferta">
          <p>
            Las normas utilizan rangos para fines concretos, pero el monto disponible depende además
            del producto, la evaluación y la fecha. No publicamos una cifra universal ni convertimos
            límites regulatorios en promesa comercial.
          </p>
          <p>
            Verifica el monto neto recibido, el principal registrado, el destino permitido y si la
            deuda total con la entidad afecta la clasificación aplicable.
          </p>
        </ContentSection>
        <ContentSection title="Tasas, comisiones y costo total">
          <p>
            Las certificaciones oficiales varían por modalidad y periodo. Compara la tasa efectiva
            anual vigente que corresponda, junto con honorarios o comisiones permitidos, seguros,
            impuestos, cuota y total. Un cargo separado no debe ignorarse al estimar el costo.
          </p>
          <p>
            Usa la guía de <InlineLink href={links.rates}>tasas de interés en Colombia</InlineLink>{" "}
            para llevar ofertas al mismo periodo y consulta la fuente oficial actual en vez de
            reutilizar una cifra histórica.
          </p>
        </ContentSection>
        <ContentSection title="Uso productivo y capacidad de pago del negocio">
          <p>
            Define qué compra o necesidad operativa financiarás y cómo generará recursos para pagar.
            Contrasta la cuota con el flujo de caja conservador, no solo con una venta esperada, y
            conserva margen para variaciones de ingresos y gastos esenciales.
          </p>
          <p>
            No uses la etiqueta “microcrédito” para cubrir consumo personal sin confirmar el destino
            contractual. Si el uso es mixto, pide que el proveedor explique la modalidad.
          </p>
        </ContentSection>
        <ContentSection title="Riesgos y alternativas">
          <p>
            Los principales riesgos son una cuota incompatible con ventas variables, costos no
            comparados, refinanciación repetida, garantías o cobros no comprendidos y desviar el
            dinero a un gasto que no produce el flujo previsto.
          </p>
          <p>
            Antes de endeudarte, considera ahorrar por etapas, negociar plazo con proveedores,
            ajustar inventario o consultar programas formales aplicables. Si comparas opciones,
            confirma que cada una ofrezca realmente la modalidad productiva.
          </p>
        </ContentSection>
        <ProductComparisonCta
          title="Compara solo microcréditos documentados"
          description="No etiquetamos préstamos de consumo o fichas genéricas como microcrédito sin evidencia del destino y la modalidad del proveedor."
        />
      </ArticleLayout>
    </>
  );
}
