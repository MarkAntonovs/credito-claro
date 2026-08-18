import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Callout } from "@/components/site/primitives";
import { editorialIdentity } from "@/config/editorial";
import { publicRoutes } from "@/config/routes";
import { officialSources } from "@/data/migration/official-sources";
import { getFinalSeoRouteByName, getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const routeDefinition = publicRoutes.commercial.onlineCredit;
const title = "Créditos online en Colombia: cómo funcionan y cómo comparar";
const description =
  "Guía de créditos online en Colombia: proceso, requisitos, tiempos, costos, Datacrédito, seguridad y criterios para comparar opciones documentadas.";
const heading = "Créditos online en Colombia: cómo funcionan y qué comparar";
const reviewedAt = "2026-08-18";
const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error(`Missing implemented SEO route: ${pageName}`);
  return route.finalUrl;
};

export const Route = createFileRoute("/creditos-online-colombia.html")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title,
      description,
      robotsIntent: routeDefinition.futureIndexability,
      openGraphType: "article",
    }),
  component: OnlineCreditPage,
});

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium text-foreground underline decoration-accent underline-offset-4"
    >
      {children}
    </a>
  );
}

function OnlineCreditPage() {
  const sources = [officialSources.sicFintechInstructions, officialSources.sicDigitalCreditCourse];
  return (
    <>
      <StructuredData
        data={[
          createWebPageStructuredData({
            name: heading,
            description,
            path: routeDefinition.path,
            siteName: siteConfig.siteName,
          }),
          createArticleStructuredData({
            headline: heading,
            description,
            path: routeDefinition.path,
            language: "es-CO",
            dateModified: reviewedAt,
            authorName: editorialIdentity.name,
          }),
        ]}
      />
      <ArticleLayout
        breadcrumbs={
          getSeoBreadcrumbs(routeDefinition.path) ?? [
            { label: "Inicio", href: "/" },
            { label: routeDefinition.label },
          ]
        }
        title={heading}
        intro="Un crédito online se solicita y gestiona total o parcialmente por internet. Para decidir si encaja, identifica quién presta o intermedia, revisa requisitos, tasa, cargos, plazo y contrato, y separa el tiempo de solicitud del de aprobación y desembolso. El canal digital no garantiza una decisión favorable."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Comparar ofertas", href: routeFor("Ofertas de créditos") },
          { label: "Apps de préstamos", href: routeFor("Apps de préstamos") },
          { label: "Préstamos sin codeudor", href: routeFor("Préstamos sin codeudor") },
          { label: "Préstamos rápidos", href: routeFor("Préstamos rápidos e inmediatos") },
          {
            label: "Requisitos de crédito online",
            href: routeFor("Requisitos para crédito online"),
          },
          { label: "Crédito para reportados", href: routeFor("Préstamos para reportados") },
          { label: "Tasas y costos", href: routeFor("Tasas de interés de créditos") },
          { label: "Simular una cuota", href: routeFor("Simulador y calculadora de crédito") },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Cómo funciona un crédito online">
          <p>
            El canal puede usarse para mostrar información, recibir datos y documentos, verificar
            identidad, comunicar una decisión, firmar y coordinar el desembolso. El orden exacto
            depende del producto. Una simulación, preevaluación o formulario completado no equivale
            a una aprobación ni a una oferta contractual.
          </p>
        </ContentSection>

        <ContentSection title="Tipos de proveedor y servicio">
          <p>
            Un proveedor directo ofrece el producto y toma la decisión. Un broker, agregador o
            generador de contactos puede remitir datos o presentar alternativas de terceros sin
            prestar el dinero. Antes de continuar, confirma la razón social, la función del sitio y
            quién recibirá tu información.
          </p>
        </ContentSection>

        <ContentSection title="Requisitos habituales y cómo confirmarlos">
          <p>
            Pueden solicitar identidad, contacto, información de ingresos, gastos, actividad,
            historia crediticia y un medio de desembolso. No existe una lista universal. Consulta la
            guía de{" "}
            <InlineLink href={routeFor("Requisitos para crédito online")}>requisitos</InlineLink> y
            confirma la lista vigente del producto antes de enviar documentos.
          </p>
        </ContentSection>

        <ContentSection title="Solicitud, aprobación y desembolso son etapas distintas">
          <p>
            Un formulario puede ser breve y aun así requerir validaciones posteriores. La decisión
            depende del análisis del proveedor; después pueden existir firma, comprobaciones y pasos
            bancarios antes de recibir fondos. La guía de{" "}
            <InlineLink href={routeFor("Préstamos rápidos e inmediatos")}>
              préstamos rápidos
            </InlineLink>{" "}
            explica qué preguntar cuando la velocidad es decisiva.
          </p>
        </ContentSection>

        <ContentSection title="Tasa, cargos y costo total">
          <p>
            Compara tasas expresadas en el mismo periodo, monto neto recibido, plazo, número de
            cuotas, seguros, comisiones y total previsto de pagos. Una cuota menor no significa por
            sí sola menor costo. Revisa la guía de{" "}
            <InlineLink href={routeFor("Tasas de interés de créditos")}>tasas y costos</InlineLink>{" "}
            y prueba escenarios en el{" "}
            <InlineLink href={routeFor("Simulador y calculadora de crédito")}>simulador</InlineLink>
            .
          </p>
        </ContentSection>

        <ContentSection title="Datacrédito e historia crediticia">
          <p>
            Un proveedor puede consultar o valorar información crediticia conforme a su producto y
            autorizaciones, pero no todos aplican los mismos criterios. Un reporte no permite
            predecir automáticamente el resultado. Si esa es tu situación, revisa las expectativas
            realistas para{" "}
            <InlineLink href={routeFor("Préstamos para reportados")}>
              solicitar estando reportado
            </InlineLink>
            .
          </p>
        </ContentSection>

        <ContentSection title="Seguridad antes de compartir datos o dinero">
          <p>
            Comprueba entidad legal, dominio, política de datos y contrato. No compartas claves,
            PIN, códigos de autenticación ni acceso remoto al dispositivo. Detente ante presión,
            suplantación o un pago previo inesperado para supuestamente liberar un desembolso.
          </p>
        </ContentSection>

        <ContentSection title="Cuándo puede ser apropiado y cuándo detenerse">
          <p>
            El canal online puede ser útil si entiendes al responsable, puedes verificar las
            condiciones y la cuota cabe en tu presupuesto. Conviene detenerse si el costo no está
            claro, no puedes identificar quién contrata, dependes de un desembolso prometido para
            una fecha exacta o la nueva cuota desplazaría gastos esenciales.
          </p>
        </ContentSection>

        <ContentSection title="Compara opciones solo después de entenderlas">
          <Callout variant="neutral" title="La comparación está separada de esta guía">
            En <InlineLink href={routeFor("Ofertas de créditos")}>ofertas de crédito</InlineLink>{" "}
            puedes filtrar proveedores y servicios documentados. No es un ranking ni una promesa de
            disponibilidad o aprobación; confirma siempre las condiciones finales.
          </Callout>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
