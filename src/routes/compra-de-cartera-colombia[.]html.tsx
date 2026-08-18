import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Callout } from "@/components/site/primitives";
import { LoanCalculator } from "@/components/site/loan-calculator";
import { ProductComparisonCta } from "@/components/site/product-comparison-cta";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { officialSources } from "@/data/migration/official-sources";
import { getFinalSeoRouteByName, getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const path = "/compra-de-cartera-colombia.html";
const title = "Compra de cartera en Colombia: cómo comparar y calcular";
const description =
  "Qué es una compra de cartera, qué deudas puede admitir, proceso, requisitos, evaluación, tasas, cambios de plazo y riesgos del menor pago mensual.";
const heading = "Compra de cartera en Colombia: cómo funciona y cuándo conviene";
const reviewedAt = "2026-08-18";

const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error("Missing implemented SEO route: " + pageName);
  return route.finalUrl;
};

export const Route = createFileRoute("/compra-de-cartera-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: PurchasePortfolioPage,
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

function PurchasePortfolioPage() {
  const ratesPath = routeFor("Tasas de interés de créditos");
  const simulatorPath = routeFor("Simulador y calculadora de crédito");
  const nonpaymentPath = routeFor("No puedo pagar mi préstamo");
  const offersPath = routeFor("Ofertas de créditos");
  const reportedPath = routeFor("Préstamos para reportados");
  const refinancePath = routeFor("Refinanciar / reestructurar deuda");
  const sources = [
    officialSources.bancolombiaPurchasePortfolio,
    officialSources.sfcCreditFaq,
    officialSources.sfcRatesDashboard,
    officialSources.dataCreditoFreeHistory,
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
            { label: "Compra de cartera" },
          ]
        }
        title={heading}
        intro="La compra de cartera es una operación en la que una entidad asume una o varias deudas que tienes con otros acreedores y crea una nueva obligación bajo condiciones acordadas. Busca trasladar o agrupar cartera; no es simplemente recibir dinero adicional ni garantiza ahorro, menor tasa o aprobación."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Inicio", href: "/" },
          { label: "Tasas y costo total", href: ratesPath },
          { label: "Simulador de crédito", href: simulatorPath },
          { label: "Si no puedes pagar", href: nonpaymentPath },
          { label: "Comparar opciones", href: offersPath },
          { label: "Crédito para reportados", href: reportedPath },
          { label: "Refinanciar o reestructurar", href: refinancePath },
          { label: "Tabla de amortización", href: "/tabla-amortizacion-credito.html" },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Qué problema intenta resolver">
          <p>
            Puede servir para concentrar pagos, cambiar tasa o modificar el plazo de obligaciones
            existentes. El resultado útil debe medirse contra lo que todavía pagarías en los
            créditos actuales, incluyendo seguros, comisiones, costos de cancelación permitidos y
            cualquier cargo del nuevo producto.
          </p>
          <p>
            Si la nueva operación entrega dinero adicional, separa ese valor de la deuda trasladada:
            aumentar el principal puede ocultar que no estás comparando únicamente una compra de
            cartera.
          </p>
          <p>
            Para comparar una modificación con el mismo acreedor, consulta las diferencias entre{" "}
            <InlineLink href={refinancePath}>refinanciar y reestructurar una deuda</InlineLink>.
          </p>
        </ContentSection>

        <ContentSection title="Qué deudas pueden ser elegibles">
          <p>
            Depende del producto. Puede haber modalidades para tarjetas, créditos de consumo,
            libranzas o cartera hipotecaria, cada una con reglas distintas. Como ejemplo actual
            verificado el 18 de agosto de 2026, Bancolombia publica alternativas separadas para
            tarjetas, créditos de consumo mediante libre inversión y libranza; esto no convierte
            esas categorías en una lista universal.
          </p>
          <p>
            Pide a la entidad que identifique por escrito qué acreedores, productos, saldos, estados
            de pago y titulares admite. No marques una deuda como elegible solo porque aparece en
            una publicidad genérica.
          </p>
        </ContentSection>

        <ContentSection title="Proceso típico sin prometer aprobación">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Solicitas o consultas una oferta para las obligaciones identificadas.</li>
            <li>La entidad verifica identidad, saldos, estados y realiza su estudio.</li>
            <li>Recibes, si procede, condiciones de la nueva obligación.</li>
            <li>La entidad define cómo se paga o cancela la cartera anterior.</li>
            <li>Confirmas que cada saldo anterior quedó aplicado correctamente.</li>
          </ol>
          <p>
            El mecanismo de giro varía. No asumas que siempre recibirás el dinero, que el pago será
            directo al acreedor ni que la cancelación será inmediata.
          </p>
        </ContentSection>

        <ContentSection title="Requisitos y evaluación de la entidad">
          <p>
            Pueden solicitar documento de identidad, información de ingresos y gastos, soportes de
            cada deuda, certificaciones de saldo, extractos y autorizaciones de consulta. El banco o
            proveedor puede evaluar capacidad de pago, historia crediticia, estado de las
            obligaciones y sus políticas internas.
          </p>
          <p>
            No existe un conjunto universal de documentos, nivel de ingreso o antigüedad. Confirma
            también quién debe pedir la cancelación, paz y salvo o cierre de productos anteriores.
          </p>
        </ContentSection>

        <ContentSection title="Cómo comparar tasa, plazo y costo total">
          <p>
            Compara la nueva tasa en el mismo periodo que la actual, el saldo trasladado, el nuevo
            plazo, la cuota, los seguros, cargos y el total restante. No enfrentes la suma original
            de los créditos con el nuevo principal: usa los saldos y pagos pendientes desde la misma
            fecha de corte.
          </p>
          <p>
            Una cuota menor puede venir de una tasa menor, un plazo más largo o ambos. Extender el
            plazo puede aumentar el total aunque libere flujo mensual. Consulta la guía de{" "}
            <InlineLink href={ratesPath}>tasas y costo total</InlineLink>.
          </p>
        </ContentSection>

        <ContentSection title="Calculadora: qué puede y qué no puede mostrar">
          <Callout variant="notice" title="No es una calculadora de refinanciación">
            Esta herramienta estima una sola deuda nueva con cuotas mensuales iguales. No importa
            automáticamente los cronogramas de tus créditos actuales ni calcula un ahorro real entre
            ambas situaciones.
          </Callout>
          <p>
            Úsala con el saldo, tasa y plazo de una propuesta documentada para estimar cuota,
            intereses y total. Después compárala manualmente con todos los pagos pendientes
            actuales. El <InlineLink href={simulatorPath}>simulador completo</InlineLink> explica
            los supuestos.
          </p>
          <p>
            Los valores iniciales son ejemplos editables; no corresponden a una oferta ni a una tasa
            vigente de compra de cartera.
          </p>
          <LoanCalculator compact />
        </ContentSection>

        <ContentSection title="Cuándo puede ayudar">
          <ul className="list-disc space-y-2 pl-5">
            <li>Cuando reduce el costo total restante bajo supuestos comparables.</li>
            <li>Cuando simplifica pagos sin aumentar una deuda innecesariamente.</li>
            <li>Cuando la nueva cuota cabe en el presupuesto y el plazo sigue siendo razonable.</li>
            <li>Cuando el proceso de cancelación de las obligaciones anteriores queda claro.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Riesgos y señales para detenerse">
          <ul className="list-disc space-y-2 pl-5">
            <li>Elegir solo por una cuota menor sin calcular el total.</li>
            <li>Añadir dinero de libre uso sin separar su costo.</li>
            <li>Dejar abiertas tarjetas o cupos y volver a utilizarlos sin presupuesto.</li>
            <li>Pagar anticipos inesperados para supuestamente liberar la operación.</li>
            <li>Firmar sin saber quién paga cada deuda y cómo se comprobará la cancelación.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Historia crediticia y personas reportadas">
          <p>
            La compra de cartera sigue sujeta a evaluación. Una obligación en mora o un dato
            negativo puede influir, pero no permite anticipar una decisión universal. Revisa primero
            tu información y evita solicitudes sucesivas basadas en promesas de aprobación.
          </p>
          <p>
            La guía para <InlineLink href={reportedPath}>personas reportadas</InlineLink> explica
            ese contexto sin afirmar que una modalidad acepte todos los perfiles.
          </p>
        </ContentSection>

        <ContentSection title="Compra de cartera, refinanciación y reestructuración">
          <p>
            La compra de cartera normalmente traslada obligaciones hacia una nueva operación. Una
            refinanciación o reestructuración puede modificar condiciones con el acreedor actual o
            reorganizar la deuda de otra forma. Esta página no desarrolla esa futura guía separada
            ni enlaza a una ruta todavía no implementada.
          </p>
          <p>
            Si ya tienes dificultades para cubrir la próxima cuota, no esperes una aprobación como
            única salida. Revisa{" "}
            <InlineLink href={nonpaymentPath}>qué hacer si no puedes pagar</InlineLink> y contacta
            al acreedor por sus canales oficiales.
          </p>
        </ContentSection>

        <ProductComparisonCta
          title="Cómo comparar una compra de cartera"
          description="No publicamos rankings ni ahorro garantizado; verifica que la opción admita tus deudas y compara una oferta escrita contra los pagos que aún debes."
        />
      </ArticleLayout>
    </>
  );
}
