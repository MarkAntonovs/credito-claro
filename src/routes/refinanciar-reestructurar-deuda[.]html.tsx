import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Callout } from "@/components/site/primitives";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { officialSources } from "@/data/migration/official-sources";
import { getFinalSeoRouteByName, getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const path = "/refinanciar-reestructurar-deuda.html";
const title = "Refinanciar o reestructurar una deuda en Colombia";
const description =
  "Diferencias entre refinanciación, reestructuración, compra de cartera y acuerdo de pago; cómo comparar cuota, plazo, tasa, costo total y riesgos.";
const heading = "Refinanciar o reestructurar una deuda: diferencias y costos";
const reviewedAt = "2026-08-18";

const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error("Missing implemented SEO route: " + pageName);
  return route.finalUrl;
};

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium text-foreground underline decoration-accent underline-offset-4"
    >
      {children}
    </a>
  );
}

export const Route = createFileRoute("/refinanciar-reestructurar-deuda.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: RefinanceRestructurePage,
});

function RefinanceRestructurePage() {
  const nonpaymentPath = routeFor("No puedo pagar mi préstamo");
  const agreementPath = routeFor("Acuerdo de pago de deuda");
  const purchasePath = routeFor("Compra de cartera");
  const ratesPath = routeFor("Tasas de interés de créditos");
  const simulatorPath = routeFor("Simulador y calculadora de crédito");
  const sources = [
    officialSources.sfcCreditFaq,
    officialSources.sfcRatesDashboard,
    officialSources.financialConsumerLaw,
    officialSources.colombiaCreditDataLaw,
    officialSources.bancolombiaPurchasePortfolio,
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
            { label: "Refinanciar o reestructurar" },
          ]
        }
        title={heading}
        intro="Refinanciar suele implicar reemplazar o renovar financiación bajo nuevas condiciones; reestructurar suele modificar la forma de atender una obligación existente por una dificultad de pago. Los nombres contractuales varían y no son intercambiables automáticamente. Ninguna opción garantiza ahorro: hay que comparar plazo, tasa, cargos y costo total."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Si no puedes pagar", href: nonpaymentPath },
          { label: "Acuerdo de pago", href: agreementPath },
          { label: "Compra de cartera", href: purchasePath },
          { label: "Tasas y costo total", href: ratesPath },
          { label: "Simulador de crédito", href: simulatorPath },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Cuatro opciones que no deben confundirse">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Opción</th>
                  <th>Qué cambia</th>
                  <th>Quién interviene</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Refinanciación</td>
                  <td>
                    Se reemplaza o renueva financiación bajo una nueva operación o condiciones
                    documentadas.
                  </td>
                  <td>Puede intervenir el mismo acreedor u otro, según el producto.</td>
                </tr>
                <tr>
                  <td>Reestructuración</td>
                  <td>
                    Se modifica la forma de atender una obligación, normalmente por cambio en
                    capacidad de pago.
                  </td>
                  <td>El acreedor evalúa y acepta o rechaza la propuesta.</td>
                </tr>
                <tr>
                  <td>Compra de cartera</td>
                  <td>
                    Otra operación paga o traslada deudas identificadas y crea una nueva obligación.
                  </td>
                  <td>Intervienen el nuevo proveedor y los acreedores anteriores.</td>
                </tr>
                <tr>
                  <td>Acuerdo de pago</td>
                  <td>Las partes documentan un calendario o condiciones para atender la deuda.</td>
                  <td>Acreedor, deudor y, si existe, gestor autorizado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentSection>

        <ContentSection title="Qué condiciones pueden cambiar">
          <p>
            Una propuesta puede modificar plazo, cuota, tasa, frecuencia, garantías, seguros o
            tratamiento de valores vencidos. Nada de ello debe asumirse: pide una oferta que muestre
            el saldo incorporado, monto adicional si existe, calendario, cargos y total previsto.
          </p>
          <p>
            El acreedor puede realizar un nuevo estudio y no está obligado de forma general a
            aprobar una modificación concreta. Evita intermediarios que prometan aceptación
            garantizada o soliciten anticipos inesperados.
          </p>
        </ContentSection>

        <ContentSection title="Cuota menor no significa deuda más barata">
          <Callout variant="notice" title="Compara el total, no solo el alivio mensual">
            Extender el plazo puede reducir la cuota y aumentar el total de intereses y cargos. Una
            tasa menor tampoco prueba ahorro si el nuevo plazo, seguros o comisiones cambian.
          </Callout>
          <p>
            Compara saldos desde la misma fecha de corte y tasas en periodos equivalentes. La guía
            de <InlineLink href={ratesPath}>tasas y costo total</InlineLink> y el{" "}
            <InlineLink href={simulatorPath}>simulador</InlineLink> sirven para explorar una deuda
            nueva documentada; no calculan automáticamente el efecto de cerrar obligaciones previas.
          </p>
        </ContentSection>

        <ContentSection title="Cuándo suelen considerarse">
          <ul className="list-disc space-y-2 pl-5">
            <li>Cuando cambió el ingreso y la cuota actual dejó de ser sostenible.</li>
            <li>Cuando existe una propuesta verificable con menor costo total restante.</li>
            <li>Cuando agrupar pagos reduce errores sin crear deuda adicional innecesaria.</li>
            <li>Antes de que la mora avance, si el acreedor admite estudiar alternativas.</li>
          </ul>
          <p>
            Empieza con la guía{" "}
            <InlineLink href={nonpaymentPath}>no puedo pagar mi préstamo</InlineLink>
            para preparar presupuesto, documentos y contacto con el acreedor.
          </p>
        </ContentSection>

        <ContentSection title="Checklist para comparar una propuesta">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Identifica qué deuda se modifica, cancela o reemplaza.</li>
            <li>Compara saldo, tasa, plazo, cuota, cargos y costo total restante.</li>
            <li>Separa cualquier dinero adicional del valor usado para pagar deudas.</li>
            <li>Pregunta cómo se aplicarán pagos y valores vencidos.</li>
            <li>Confirma garantías, seguros y consecuencias de otro incumplimiento.</li>
            <li>Comprueba quién cerrará o actualizará las obligaciones anteriores.</li>
            <li>Conserva oferta, contrato, comprobantes y confirmación final.</li>
          </ol>
        </ContentSection>

        <ContentSection title="Historia crediticia y reporte">
          <p>
            Una modificación no elimina automáticamente información previa ni garantiza mejora del
            puntaje. La entidad puede reportar el estado real conforme a la relación contractual y
            las reglas de habeas data. Pide que expliquen cómo quedarán identificadas la obligación
            anterior y la nueva, sin asumir un resultado uniforme entre productos.
          </p>
        </ContentSection>

        <ContentSection title="Riesgos y alternativas">
          <ul className="list-disc space-y-2 pl-5">
            <li>Alargar repetidamente el plazo y mantener el mismo déficit mensual.</li>
            <li>Recibir dinero adicional que aumenta el principal.</li>
            <li>Dejar cupos abiertos y volver a usarlos sin presupuesto.</li>
            <li>Firmar una garantía o codeuda que no se entiende.</li>
            <li>Confundir una simulación con aprobación o desembolso.</li>
          </ul>
          <p>
            Compara por separado una <InlineLink href={purchasePath}>compra de cartera</InlineLink>{" "}
            y un <InlineLink href={agreementPath}>acuerdo de pago</InlineLink>. Si ninguna
            estructura es sostenible, busca orientación cualificada antes de asumir otra obligación.
          </p>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
