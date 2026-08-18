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

const path = "/embargo-por-deudas-colombia.html";
const title = "Embargo por deudas en Colombia: proceso y protecciones";
const description =
  "Qué significa un embargo por deudas en Colombia, cómo se relaciona con el proceso ejecutivo, qué bienes pueden afectarse, protecciones y pasos ante una orden.";
const heading = "Embargo por deudas en Colombia: qué significa y cómo actuar";
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

export const Route = createFileRoute("/embargo-por-deudas-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: DebtAttachmentPage,
});

function DebtAttachmentPage() {
  const insolvencyPath = routeFor("Insolvencia persona natural");
  const nonpaymentPath = routeFor("No puedo pagar mi préstamo");
  const agreementPath = routeFor("Acuerdo de pago de deuda");
  const rightsPath = routeFor("Derechos del consumidor financiero");
  const sources = [
    officialSources.colombiaCivilProcedureEmbargo,
    officialSources.colombiaLaborCodeSalaryEmbargo,
    officialSources.constitutionalCourtPetAssetProtection,
    officialSources.minJusticeExecutiveDebtCollection,
    officialSources.colombiaNaturalPersonInsolvencyLaw,
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
            { label: "Embargo por deudas" },
          ]
        }
        title={heading}
        intro="El embargo es una medida cautelar que afecta jurídicamente bienes o derechos para asegurar el resultado de un cobro. Un acreedor privado no puede simplemente tomar bienes por su cuenta: debe existir una orden dentro de un proceso judicial o de la autoridad competente. El tipo de deuda, proceso, bien e ingreso determina qué puede afectarse y qué protección aplica."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Insolvencia de persona natural", href: insolvencyPath },
          { label: "Primeros pasos si no puedes pagar", href: nonpaymentPath },
          { label: "Acuerdo de pago", href: agreementPath },
          { label: "Derechos y reclamaciones", href: rightsPath },
        ]}
      >
        <Callout variant="notice" title="Información general, no defensa jurídica">
          Esta guía no interpreta una orden concreta ni calcula términos procesales. Si recibiste
          una demanda, mandamiento de pago, oficio bancario o diligencia, revisa el expediente y
          busca asesoría cuanto antes: los plazos y defensas dependen del proceso.
        </Callout>

        <ContentSection title="De la deuda al proceso ejecutivo">
          <p>
            El incumplimiento no convierte automáticamente todos los bienes en propiedad del
            acreedor. Para cobrar forzadamente, normalmente debe existir un título que permita
            acudir al proceso correspondiente. El juez examina la demanda y puede ordenar pago y
            medidas cautelares conforme al Código General del Proceso.
          </p>
          <p>
            También existen cobros administrativos y deudas con procedimientos especiales. Por eso
            debes identificar autoridad, radicado, partes, obligación y clase de proceso antes de
            asumir qué reglas aplican.
          </p>
        </ContentSection>

        <ContentSection title="Embargo, secuestro y remate no son lo mismo">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Embargo:</strong> limita jurídicamente la disposición del bien o derecho.
            </li>
            <li>
              <strong>Secuestro:</strong> puede separar la administración o custodia del bien bajo
              las reglas procesales.
            </li>
            <li>
              <strong>Remate o adjudicación:</strong> son etapas posteriores que pueden convertir el
              valor del bien en pago o transferirlo bajo decisión judicial.
            </li>
          </ul>
          <p>
            Un registro de embargo no equivale por sí solo a venta inmediata. El proceso incluye
            actuaciones, valoración y decisiones que deben consultarse en el expediente.
          </p>
        </ContentSection>

        <ContentSection title="Bienes y derechos que pueden verse afectados">
          <p>
            Según el caso, una orden puede dirigirse a inmuebles, vehículos, dinero o créditos a
            favor del deudor, cuentas, salarios dentro de sus límites, participaciones y bienes
            muebles. El artículo 593 del Código General del Proceso establece cómo se comunica o
            perfecciona la medida para distintas categorías.
          </p>
          <p>
            Que una categoría pueda embargarse no significa que cualquier bien de ese tipo
            pertenezca al demandado, cubra la deuda o carezca de protección. Los registros,
            titularidad, garantías, copropiedad y excepciones deben comprobarse.
          </p>
        </ContentSection>

        <ContentSection title="Bienes legalmente protegidos">
          <p>
            El artículo 594 del Código General del Proceso y leyes especiales declaran inembargables
            diversas categorías. Entre ellas hay recursos públicos y de seguridad social, ciertos
            depósitos de ahorro hasta el monto que determine la autoridad, bienes necesarios para la
            subsistencia familiar, herramientas indispensables para la profesión u oficio bajo sus
            condiciones, derechos personalísimos y otras protecciones específicas.
          </p>
          <p>
            La Sentencia C-408 de 2024 condicionó la norma para incluir animales domésticos de
            compañía y soporte emocional dentro de la protección. Ninguna lista resumida sustituye
            revisar el texto vigente y las circunstancias del bien.
          </p>
        </ContentSection>

        <ContentSection title="Salario: regla general y excepciones">
          <p>
            Para deudas ordinarias, el Código Sustantivo del Trabajo protege el salario mínimo legal
            o convencional y permite embargar solo una quinta parte del excedente sobre el mínimo.
            La misma norma contempla un régimen excepcional —hasta el cincuenta por ciento— para
            obligaciones alimentarias y a favor de cooperativas legalmente autorizadas.
          </p>
          <p>
            La nómina puede incluir conceptos con tratamientos diferentes al salario. No apliques
            esos porcentajes a toda suma recibida sin revisar la naturaleza del pago y la orden.
          </p>
        </ContentSection>

        <ContentSection title="Cuentas bancarias y depósitos">
          <p>
            El Código protege depósitos de ahorro hasta un monto determinado por la autoridad
            competente, con excepciones legales. Esa protección no debe trasladarse automáticamente
            a cuentas corrientes, todos los productos o cualquier origen de fondos. El tope se
            actualiza y el banco debe responder a una orden concreta; por eso esta página no publica
            una cifra que podría quedar desactualizada o aplicarse fuera de contexto.
          </p>
        </ContentSection>

        <ContentSection title="Qué hacer al recibir una notificación u oficio">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Verifica juzgado o autoridad, radicado, partes y canales oficiales.</li>
            <li>
              Obtén la demanda, el auto y las constancias del expediente; no dependas de una captura
              aislada.
            </li>
            <li>Anota la fecha y forma de notificación sin calcular plazos por intuición.</li>
            <li>Reúne contrato, pagos, extractos, soportes de titularidad y comunicaciones.</li>
            <li>Consulta de inmediato qué actuación, oposición, excepción o solicitud procede.</li>
            <li>No transfieras bienes ni alteres información para eludir a acreedores.</li>
          </ol>
        </ContentSection>

        <ContentSection title="Negociación y acuerdo de pago">
          <p>
            Un <InlineLink href={agreementPath}>acuerdo de pago</InlineLink> puede explorarse antes
            o durante el cobro si el acreedor está dispuesto, pero no levanta automáticamente una
            medida. El documento debe indicar qué ocurre con el proceso y quién solicitará al juez o
            autoridad la suspensión o terminación que corresponda.
          </p>
          <p>
            La guía <InlineLink href={nonpaymentPath}>no puedo pagar mi préstamo</InlineLink> ayuda
            a preparar presupuesto y contacto, sin sustituir la respuesta procesal.
          </p>
        </ContentSection>

        <ContentSection title="Relación con la insolvencia">
          <p>
            La aceptación de un procedimiento de{" "}
            <InlineLink href={insolvencyPath}>insolvencia de persona natural</InlineLink> produce
            efectos legales sobre cobros y procesos anteriores. No presentes una solicitud solo para
            intentar detener un embargo: primero debe cumplirse el régimen vigente y revelarse la
            situación completa de buena fe.
          </p>
        </ContentSection>

        <ContentSection title="Cuándo buscar asistencia jurídica">
          <p>
            Es especialmente importante cuando existe vivienda o vehículo con garantía, salario o
            pensión afectada, copropiedad, alimentos, obligaciones fiscales, bienes de terceros,
            múltiples procesos o una diligencia próxima. ColombiaCrédito no representa a las partes
            ni puede decidir qué defensa corresponde al expediente.
          </p>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
