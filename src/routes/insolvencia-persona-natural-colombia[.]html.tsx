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

const path = "/insolvencia-persona-natural-colombia.html";
const title = "Insolvencia de persona natural en Colombia: Ley 2445";
const description =
  "Guía general sobre la insolvencia de persona natural bajo la Ley 2445 de 2025: ámbito, cesación de pagos, negociación, efectos y liquidación patrimonial.";
const heading = "Insolvencia de persona natural en Colombia: marco vigente";
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

export const Route = createFileRoute("/insolvencia-persona-natural-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: NaturalPersonInsolvencyPage,
});

function NaturalPersonInsolvencyPage() {
  const nonpaymentPath = routeFor("No puedo pagar mi préstamo");
  const agreementPath = routeFor("Acuerdo de pago de deuda");
  const embargoPath = routeFor("Embargo por deudas");
  const rightsPath = routeFor("Derechos del consumidor financiero");
  const sources = [
    officialSources.colombiaNaturalPersonInsolvencyLaw,
    officialSources.minJusticeDebtNegotiation,
    officialSources.colombiaCivilProcedureEmbargo,
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
            { label: "Insolvencia de persona natural" },
          ]
        }
        title={heading}
        intro="La insolvencia de persona natural es un marco legal para normalizar relaciones con acreedores mediante negociación de deudas, convalidación de ciertos acuerdos privados o liquidación patrimonial. Desde febrero de 2025, la Ley 2445 reformó el régimen colombiano. Su aplicación y la vía correcta dependen de la categoría del deudor, sus obligaciones, procesos, bienes y circunstancias individuales."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Primeros pasos si no puedes pagar", href: nonpaymentPath },
          { label: "Acuerdo de pago", href: agreementPath },
          { label: "Embargo por deudas", href: embargoPath },
          { label: "Derechos y reclamaciones", href: rightsPath },
        ]}
      >
        <Callout variant="notice" title="Información general, no asesoría jurídica">
          Esta guía explica el marco verificado al 18 de agosto de 2026. No determina si una persona
          cumple los requisitos, no representa a deudores o acreedores y no sustituye la revisión
          del expediente, contratos, garantías y procesos por un profesional competente.
        </Callout>

        <ContentSection title="Qué busca el régimen">
          <p>
            La Ley 2445 de 2025 señala como finalidad reintegrar a la actividad productiva a la
            persona que sufrió un quebranto económico y normalizar sus relaciones crediticias. El
            régimen contempla negociación con acreedores, convalidación de acuerdos privados bajo
            sus requisitos y liquidación del patrimonio embargable.
          </p>
          <p>
            No es una eliminación administrativa de deudas ni un trámite para ocultar bienes. Exige
            información completa y de buena fe, y preserva la expectativa legítima de los acreedores
            de recibir pago hasta donde sea posible.
          </p>
        </ContentSection>

        <ContentSection title="A quién puede aplicar el marco vigente">
          <p>
            El título reformado se aplica a personas naturales no comerciantes y a personas
            naturales comerciantes que la ley denomina pequeñas comerciantes: aquellas con activos
            totales inferiores a 1.000 salarios mínimos mensuales, excluyendo del cálculo la
            vivienda de su familia y el vehículo usado como instrumento de trabajo. La clasificación
            y valoración deben verificarse en cada caso.
          </p>
          <p>
            Comerciantes que no entren en esa definición y determinados controlantes de sociedades
            pueden estar sujetos a regímenes diferentes. No basta con no estar matriculado o con
            describirse informalmente como independiente para elegir el procedimiento.
          </p>
        </ContentSection>

        <ContentSection title="Cesación de pagos: condición que debe comprobarse">
          <p>
            La Ley 2445 define la cesación de pagos, para este régimen, cuando la persona como
            deudor o garante incumple dos o más obligaciones frente a dos o más acreedores durante
            más de 90 días, o cuando se han iniciado en su contra dos o más procedimientos públicos
            o privados de cobro, ejecución especial o restitución por mora en cánones.
          </p>
          <p>
            Aplicar esa definición requiere revisar qué cuenta como obligación, acreedor,
            incumplimiento o procedimiento en el caso concreto. Esta página no convierte la regla en
            un diagnóstico automático de elegibilidad.
          </p>
        </ContentSection>

        <ContentSection title="Dónde empieza la negociación">
          <p>
            La negociación de deudas y la convalidación se tramitan ante centros de conciliación
            expresamente autorizados por el Ministerio de Justicia o ante notarías con conciliadores
            inscritos, conforme a las reglas de competencia. El Ministerio mantiene información
            sobre centros autorizados; un abogado no puede asumir directamente la función de
            conciliador fuera de la designación institucional prevista.
          </p>
          <p>
            La solicitud debe revelar la situación económica, acreedores, obligaciones, procesos,
            ingresos y bienes con los soportes exigibles. La información se entiende rendida bajo
            juramento, por lo que una relación incompleta o imprecisa puede tener consecuencias.
          </p>
        </ContentSection>

        <ContentSection title="Etapas generales">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Revisión de categoría, cesación de pagos, competencia y documentos.</li>
            <li>Presentación y examen de la solicitud ante el operador competente.</li>
            <li>
              Aceptación, comunicaciones y aplicación de los efectos legales correspondientes.
            </li>
            <li>Audiencia y participación de acreedores para discutir la propuesta.</li>
            <li>Acuerdo conforme a las mayorías y reglas legales, o declaración de fracaso.</li>
            <li>Seguimiento del acuerdo o paso a liquidación patrimonial cuando proceda.</li>
          </ol>
          <p>
            Los plazos, incidentes y actuaciones dependen del expediente. Verifica cada comunicación
            del conciliador o juez en lugar de usar este resumen como calendario procesal.
          </p>
        </ContentSection>

        <ContentSection title="Efectos de la aceptación">
          <p>
            La aceptación produce efectos legales sobre cobros, procesos y formas de pago automático
            relacionadas con obligaciones anteriores. La ley también exige comunicar el inicio a
            autoridades, empresas, pagadores y particulares que adelanten cobro. El alcance exacto
            depende de la obligación y del proceso; no ignores una actuación ni asumas que todo
            cobro quedó detenido sin verificar el expediente.
          </p>
          <p>
            Las obligaciones posteriores y los gastos necesarios durante el procedimiento reciben
            tratamiento distinto. Deben revisarse con el operador o asesor para evitar crear nuevas
            moras mientras se negocian las anteriores.
          </p>
        </ContentSection>

        <ContentSection title="Acuerdo y participación de acreedores">
          <p>
            La propuesta puede tratar cuantía, plazo, tasa y forma de pago dentro de las reglas de
            prelación y votación. Las quitas de capital o cambios en garantías requieren los
            consentimientos que la ley establece. Un{" "}
            <InlineLink href={agreementPath}>acuerdo individual de pago</InlineLink> fuera del
            procedimiento no debe confundirse con el acuerdo concursal que puede vincular a
            acreedores bajo reglas legales.
          </p>
        </ContentSection>

        <ContentSection title="Si la negociación fracasa o el acuerdo se incumple">
          <p>
            El fracaso puede llevar a que las actuaciones se remitan al juez civil para abrir la
            liquidación patrimonial. El incumplimiento de un acuerdo también tiene un procedimiento
            específico y puede terminar en liquidación. No significa una venta instantánea de todo:
            existe un proceso judicial de inventario, valoración, acuerdos posibles y adjudicación.
          </p>
          <p>
            La liquidación integra los bienes y derechos previstos por la ley, respetando bienes
            inembargables y prelación. Consulta la guía sobre{" "}
            <InlineLink href={embargoPath}>embargo por deudas</InlineLink> para distinguir medidas
            cautelares de adjudicación o venta.
          </p>
        </ContentSection>

        <ContentSection title="Costos y acceso">
          <p>
            La Ley 2445 prevé gratuidad para negociación y convalidación ante centros autorizados de
            consultorios jurídicos y entidades públicas, con implementación legal desde 2026. Otros
            centros o notarías pueden generar tarifas y servicios profesionales pueden tener
            honorarios. Confirma autorización, tarifa, conceptos y recibos antes de pagar.
          </p>
        </ContentSection>

        <ContentSection title="Garantías, codeudores e historia crediticia">
          <p>
            El efecto sobre garantías, codeudores, acreedores alimentarios y obligaciones con reglas
            especiales no puede resumirse de manera universal. Tampoco debe prometerse borrado de
            reportes: la información crediticia se rige por su marco propio y por el estado real de
            las obligaciones. Estos puntos justifican asesoría individual antes de presentar o
            aceptar una propuesta.
          </p>
        </ContentSection>

        <ContentSection title="Cuándo buscar orientación profesional">
          <p>
            Busca ayuda temprana si existen demandas, garantías sobre vivienda o vehículo,
            obligaciones alimentarias o fiscales, actividad comercial, posibles actos sobre bienes,
            codeudores o dudas sobre qué régimen aplica. También puedes empezar con{" "}
            <InlineLink href={nonpaymentPath}>
              las acciones generales ante una dificultad de pago
            </InlineLink>
            , sin dejar vencer plazos de actuaciones oficiales.
          </p>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
