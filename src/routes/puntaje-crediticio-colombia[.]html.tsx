import { createFileRoute } from "@tanstack/react-router";

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

const path = "/puntaje-crediticio-colombia.html";
const title = "Puntaje crediticio en Colombia: qué es y cómo mejorarlo";
const description =
  "Entiende el puntaje crediticio en Colombia, su diferencia con el historial, qué puede influir, por qué varía y cómo fortalecer tu perfil.";
const heading = "Puntaje crediticio en Colombia: qué significa y cómo mejorarlo";
const reviewedAt = "2026-08-18";

const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error("Missing implemented SEO route: " + pageName);
  return route.finalUrl;
};

export const Route = createFileRoute("/puntaje-crediticio-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: CreditScorePage,
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

function CreditScorePage() {
  const historyPath = routeFor("Historial crediticio / Datacrédito");
  const consultationPath = routeFor("Consultar historial crediticio gratis");
  const studyPath = routeFor("Estudio de crédito");
  const reportedPath = routeFor("Préstamos para reportados");
  const sources = [
    officialSources.transUnionCreditScore,
    officialSources.colombiaCreditDataLaw,
    officialSources.dataCreditoFreeHistory,
    officialSources.dataCreditoHabeasData,
    officialSources.transUnionFreeReport,
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
            { label: "Historial crediticio", href: historyPath },
            { label: "Puntaje crediticio" },
          ]
        }
        title={heading}
        intro="El puntaje crediticio es una estimación numérica calculada por una central o por otro modelo de riesgo a partir de información disponible. Resume aspectos del comportamiento crediticio, pero no reemplaza el historial completo ni decide por sí solo una solicitud. El modelo y la política de cada prestamista pueden ser distintos."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Guía del historial crediticio", href: historyPath },
          { label: "Consultar el historial gratis", href: consultationPath },
          { label: "Cómo funciona un estudio de crédito", href: studyPath },
          { label: "Opciones para personas reportadas", href: reportedPath },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Qué es el puntaje crediticio">
          <p>
            Un score condensa en un número la estimación que hace un modelo sobre el riesgo
            crediticio. TransUnion explica que lo calcula analizando información de créditos y que
            puede usarse junto con el reporte. Es una señal estadística, no una calificación moral
            ni una promesa sobre la decisión de una entidad.
          </p>
        </ContentSection>

        <ContentSection title="Puntaje e historial: cuál es la diferencia">
          <p>
            El <InlineLink href={historyPath}>historial crediticio</InlineLink> contiene los datos
            registrados sobre obligaciones y comportamiento. El puntaje es un resultado calculado
            con un modelo a partir de parte de esa información. Corregir el historial cuando hay un
            error es un derecho; exigir que una corrección produzca una cantidad específica de
            puntos no lo es, porque el cálculo depende del modelo.
          </p>
        </ContentSection>

        <ContentSection title="Quién lo calcula y por qué puede variar">
          <p>
            Las centrales pueden calcular sus propios puntajes y los prestamistas pueden emplear
            modelos internos. TransUnion advierte que las principales centrales colombianas usan
            métodos diferentes, y que la información disponible también puede variar según quién
            reporta y cuándo actualiza. Por eso una persona puede ver resultados distintos sin que
            uno sea necesariamente un error.
          </p>
        </ContentSection>

        <ContentSection title="Factores que pueden influir">
          <p>
            En su explicación oficial, TransUnion identifica el historial de pagos, el tiempo de
            administración de las cuentas, la recencia de pagos, y los tipos y cantidad de créditos
            como elementos de su score. La ponderación exacta no debe extrapolarse a todos los
            modelos.
          </p>
          <p>
            Una entidad que estudia una solicitud puede combinar el puntaje o el reporte con datos
            distintos, como ingresos, gastos, obligaciones y requisitos del producto. Revisa el{" "}
            <InlineLink href={studyPath}>estudio de crédito</InlineLink> para entender esa decisión
            más amplia.
          </p>
        </ContentSection>

        <ContentSection title="Rangos y puntaje necesario para un crédito">
          <Callout variant="notice" title="No hay un umbral universal de aprobación">
            Esta guía no clasifica una cifra concreta como “buena” ni promete aprobación a partir de
            puntos. Las escalas, modelos, productos y políticas del prestamista pueden diferir.
          </Callout>
          <p>
            Si una central muestra un rango, interprétalo con la descripción y la escala de ese
            producto específico. Si un prestamista publica un requisito, comprueba que corresponda
            al crédito que estás evaluando y recuerda que puede haber criterios adicionales.
          </p>
        </ContentSection>

        <ContentSection title="Cómo conocer la información relevante">
          <p>
            Empieza por revisar los datos que figuran en tus reportes oficiales. La{" "}
            <InlineLink href={consultationPath}>guía de consulta gratuita</InlineLink> explica los
            canales de DataCrédito Experian y TransUnion y las precauciones de seguridad. La
            consulta gratuita del reporte no implica necesariamente que todo producto adicional de
            monitoreo o puntaje sea gratuito.
          </p>
        </ContentSection>

        <ContentSection title="Cómo mejorar el historial y el puntaje de forma responsable">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong>Comprueba los datos.</strong> Identifica obligaciones, estados y fechas que no
              reconoces o que parecen desactualizados.
            </li>
            <li>
              <strong>Corrige errores por canales oficiales.</strong> Presenta un reclamo específico
              con soportes; no pagues a terceros que prometan borrar información exacta.
            </li>
            <li>
              <strong>Cumple las obligaciones acordadas.</strong> Prioriza pagos oportunos y, si
              tienes dificultades, contacta al acreedor antes de asumir otra deuda.
            </li>
            <li>
              <strong>Revisa tu carga total.</strong> Reducir compromisos que no caben en el
              presupuesto puede fortalecer la capacidad de pago, aunque no permite predecir un
              cambio exacto del score.
            </li>
            <li>
              <strong>Solicita con propósito.</strong> No abras productos ni envíes múltiples
              solicitudes únicamente para perseguir puntos. Compara primero y acepta solo una cuota
              sostenible.
            </li>
          </ol>
        </ContentSection>

        <ContentSection title="Errores, actualización y expectativas de tiempo">
          <p>
            La Ley 2157 exige actualizar la información negativa o desfavorable asociada a
            calificaciones y scores cuando se retira el dato negativo o cesa el hecho que causó la
            disminución. Esto no significa que todas las centrales muestren la misma cifra ni que
            exista un aumento fijo: el resultado posterior depende de la información vigente y del
            modelo aplicable.
          </p>
          <p>
            Fortalecer un perfil es un proceso de comportamiento sostenido, no un trámite con plazo
            garantizado. Revisa periódicamente la exactitud del reporte y evalúa avances con la
            escala del mismo servicio, sin solicitar crédito solo para comprobar si cambió.
          </p>
        </ContentSection>

        <ContentSection title="Si ya aparece información negativa">
          <p>
            Primero confirma que el dato sea correcto y conoce su estado. Si además estás buscando
            financiación, la guía para{" "}
            <InlineLink href={reportedPath}>personas reportadas</InlineLink> explica opciones y
            límites sin prometer aprobación ni recomendar pagos anticipados.
          </p>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
