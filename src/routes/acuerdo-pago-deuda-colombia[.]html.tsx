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

const path = "/acuerdo-pago-deuda-colombia.html";
const title = "Acuerdo de pago de deuda en Colombia: guía práctica";
const description =
  "Cómo proponer, revisar y documentar un acuerdo de pago: cuotas, fechas, costos, cobranza, comprobantes y pasos si el acuerdo deja de ser sostenible.";
const heading = "Cómo negociar y documentar un acuerdo de pago de deuda";
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

export const Route = createFileRoute("/acuerdo-pago-deuda-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: PaymentAgreementPage,
});

function PaymentAgreementPage() {
  const nonpaymentPath = routeFor("No puedo pagar mi préstamo");
  const refinancePath = routeFor("Refinanciar / reestructurar deuda");
  const insolvencyPath = routeFor("Insolvencia persona natural");
  const rightsPath = routeFor("Derechos del consumidor financiero");
  const sources = [
    officialSources.sfcCreditFaq,
    officialSources.respectfulCollectionsLaw,
    officialSources.financialConsumerLaw,
    officialSources.colombiaCreditDataLaw,
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
          getSeoBreadcrumbs(path) ?? [{ label: "Inicio", href: "/" }, { label: "Acuerdo de pago" }]
        }
        title={heading}
        intro="Un acuerdo de pago es un compromiso documentado entre acreedor y deudor para atender una obligación bajo condiciones aceptadas por ambos. Puede considerarse antes o durante la mora, pero no existe un derecho general a que el acreedor acepte una oferta concreta: monto, cuotas, fechas y costos dependen de la negociación y de la deuda original."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Primeros pasos si no puedes pagar", href: nonpaymentPath },
          { label: "Refinanciar o reestructurar", href: refinancePath },
          { label: "Insolvencia de persona natural", href: insolvencyPath },
          { label: "Derechos y reclamaciones", href: rightsPath },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Cuándo contactar al acreedor">
          <p>
            Hazlo tan pronto identifiques que no podrás cumplir la fecha o cuota pactada. Usa el
            canal indicado en el contrato o en el sitio oficial, explica el cambio de forma concreta
            y pide que cualquier alternativa quede por escrito. Una llamada o mensaje informal no
            modifica por sí solo la obligación.
          </p>
          <p>
            Si ya hay cobranza, verifica la identidad del gestor y su autorización para recibir
            pagos o negociar. La Ley 2300 de 2023 regula canales, horarios, periodicidad y trato
            respetuoso en la cobranza, pero no obliga al acreedor a conceder una reestructuración
            específica.
          </p>
        </ContentSection>

        <ContentSection title="Información que conviene preparar">
          <ul className="list-disc space-y-2 pl-5">
            <li>Contrato, estado de cuenta y saldo discriminado que puedas verificar.</li>
            <li>Ingresos disponibles, gastos esenciales y otras obligaciones.</li>
            <li>
              La cantidad y fecha que realmente puedes sostener, no el mejor escenario posible.
            </li>
            <li>Comprobantes de pagos anteriores y comunicaciones con acreedor o cobrador.</li>
            <li>
              Preguntas sobre intereses, cargos, aplicación de pagos y reporte de información.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="Qué puede contener el acuerdo">
          <p>
            El documento puede identificar la obligación, saldo reconocido, pago inicial, número y
            valor de cuotas, fechas, medio de pago, tratamiento de intereses y costos, imputación de
            cada abono y consecuencias de un nuevo incumplimiento. También debe identificar quién
            acepta el acuerdo y con qué facultad actúa.
          </p>
          <Callout variant="notice" title="Una reducción no debe suponerse">
            Una quita, condonación de intereses o descuento de capital solo existe si el acreedor la
            ofrece y queda definida. Comprueba qué parte de la obligación se extingue con el pago y
            qué saldo, si alguno, permanecería.
          </Callout>
        </ContentSection>

        <ContentSection title="Checklist del acuerdo escrito">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Razón social, acreedor actual y obligación identificada.</li>
            <li>Saldo y conceptos incluidos, con fecha de corte.</li>
            <li>Monto de cada pago, fechas y canal oficial.</li>
            <li>Intereses, costos y forma de aplicar cada abono.</li>
            <li>Efecto del cumplimiento total y documento que lo acreditará.</li>
            <li>Consecuencias de retrasarse o incumplir el nuevo calendario.</li>
            <li>Canal para resolver diferencias y copia completa aceptada por las partes.</li>
          </ol>
        </ContentSection>

        <ContentSection title="Pagos, recibos y paz y salvo">
          <p>
            Paga únicamente por el canal confirmado y conserva recibos con fecha, valor, referencia
            y destinatario. Revisa que el siguiente estado de cuenta aplique el abono como fue
            acordado. Al terminar, solicita el documento que corresponda sobre el estado de la
            obligación; su nombre y alcance pueden variar.
          </p>
        </ContentSection>

        <ContentSection title="Historia crediticia: lo que el acuerdo no promete">
          <p>
            Negociar o pagar no produce eliminación automática de información ni garantiza aumento
            del puntaje. La actualización y permanencia de datos se rigen por las reglas de habeas
            data y por el estado real de la obligación. Si detectas una inconsistencia, utiliza el
            canal de reclamo de la central correspondiente y conserva los soportes.
          </p>
        </ContentSection>

        <ContentSection title="Si el acuerdo deja de ser sostenible">
          <p>
            Contacta de nuevo al acreedor antes de acumular incumplimientos y no prometas una cuota
            que ya sabes que no podrás pagar. Revisa las consecuencias escritas y vuelve al panorama
            completo en la guía de{" "}
            <InlineLink href={nonpaymentPath}>
              primeros pasos ante una dificultad de pago
            </InlineLink>
            .
          </p>
          <p>
            Una nueva estructura puede evaluarse en{" "}
            <InlineLink href={refinancePath}>refinanciación o reestructuración</InlineLink>. Si
            varias obligaciones son insostenibles y una negociación individual no basta, consulta el
            marco formal de{" "}
            <InlineLink href={insolvencyPath}>insolvencia de persona natural</InlineLink> y busca
            orientación jurídica para tu caso.
          </p>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
