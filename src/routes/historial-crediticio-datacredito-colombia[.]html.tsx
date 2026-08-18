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

const path = "/historial-crediticio-datacredito-colombia.html";
const title = "Historial crediticio y Datacrédito en Colombia: guía clara";
const description =
  "Qué contiene el historial crediticio en Colombia, cómo intervienen DataCrédito y TransUnion, cuánto permanece un reporte y cómo corregir datos.";
const heading = "Historial crediticio y Datacrédito en Colombia";
const reviewedAt = "2026-08-18";

const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error("Missing implemented SEO route: " + pageName);
  return route.finalUrl;
};

export const Route = createFileRoute("/historial-crediticio-datacredito-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: CreditHistoryPage,
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

function CreditHistoryPage() {
  const consultationPath = routeFor("Consultar historial crediticio gratis");
  const scorePath = routeFor("Puntaje crediticio");
  const reportedPath = routeFor("Préstamos para reportados");
  const noHistoryPath = routeFor("Primer crédito sin historial");
  const studyPath = routeFor("Estudio de crédito");
  const sources = [
    officialSources.colombiaCreditDataLaw,
    officialSources.dataCreditoFreeHistory,
    officialSources.dataCreditoHabeasData,
    officialSources.transUnionFreeReport,
    officialSources.transUnionNaturalPersonRequests,
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
            { label: "Historial crediticio / Datacrédito" },
          ]
        }
        title={heading}
        intro="El historial crediticio es el registro de obligaciones y de cómo se han atendido. Puede contener información positiva y negativa comunicada a centrales como DataCrédito Experian y TransUnion. Un prestamista puede usarla dentro de su estudio, junto con otros datos; por sí sola no garantiza aprobación ni rechazo."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Consultar el historial gratis", href: consultationPath },
          { label: "Entender el puntaje crediticio", href: scorePath },
          { label: "Opciones para personas reportadas", href: reportedPath },
          { label: "Crédito sin historial", href: noHistoryPath },
          { label: "Cómo funciona un estudio de crédito", href: studyPath },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Qué es y qué información puede contener">
          <p>
            La historia de crédito reúne datos sobre obligaciones financieras, crediticias,
            comerciales o de servicios reportadas por las fuentes autorizadas. Puede mostrar la
            entidad que informó, el tipo de obligación, su estado y el comportamiento de pago que
            figure en el registro. No es una lista pública: su tratamiento está sujeto a reglas de
            habeas data.
          </p>
          <p>
            Tener historia no equivale a tener un reporte negativo. Una persona puede aparecer por
            obligaciones atendidas normalmente; también puede tener poca o ninguna información si
            todavía no ha usado productos que generen registro.
          </p>
        </ContentSection>

        <ContentSection title="DataCrédito, TransUnion y las centrales de información">
          <p>
            DataCrédito Experian y TransUnion operan servicios de información crediticia en
            Colombia. Reciben datos de fuentes, los organizan y ofrecen canales para que cada
            titular conozca y reclame su propia información. Los contenidos, fechas de actualización
            y modelos pueden diferir entre centrales.
          </p>
          <p>
            Para la tarea detallada, usa la guía para{" "}
            <InlineLink href={consultationPath}>consultar tu historial gratis</InlineLink>, que
            separa los canales oficiales, los pasos de acceso y qué revisar en el reporte.
          </p>
        </ContentSection>

        <ContentSection title="Información positiva, información negativa y estar reportado">
          <p>
            La información positiva refleja, entre otros datos, obligaciones atendidas conforme a lo
            reportado. La negativa se relaciona con mora, incumplimiento y su estado. La Ley 2157 de
            2021 distingue expresamente su permanencia; por eso “estar reportado” no debe usarse
            como sinónimo automático de estar en mora.
          </p>
          <p>
            Un dato negativo puede influir en una evaluación, pero no permite predecir la decisión
            de todos los proveedores. Si necesitas entender alternativas de solicitud en esa
            situación, consulta la guía específica de{" "}
            <InlineLink href={reportedPath}>préstamos para reportados</InlineLink>.
          </p>
        </ContentSection>

        <ContentSection title="Cómo pueden usar el historial los prestamistas">
          <p>
            Un proveedor puede considerar el comportamiento registrado para estimar riesgo, sujeto a
            las autorizaciones y reglas aplicables. También puede evaluar ingresos, obligaciones
            vigentes, capacidad de pago, identidad y criterios propios del producto. La central de
            información no toma por esa sola consulta la decisión de prestar.
          </p>
          <p>
            El proceso completo y sus posibles resultados se explican en{" "}
            <InlineLink href={studyPath}>cómo funciona un estudio de crédito</InlineLink>.
          </p>
        </ContentSection>

        <ContentSection title="Cuánto dura un reporte en Datacrédito">
          <Callout variant="notice" title="No existe un único plazo para todos los datos">
            La duración depende de si la información es positiva, si la mora ya fue pagada o la
            obligación fue extinguida, y de cuánto duró el incumplimiento.
          </Callout>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Información positiva:</strong> la Ley 2157 dispone que permanece de manera
              indefinida en los bancos de datos.
            </li>
            <li>
              <strong>Mora pagada u obligación extinguida:</strong> la información negativa
              permanece por el doble del tiempo de la mora, con un máximo de cuatro años contados
              desde el pago de las cuotas vencidas o la extinción de la obligación.
            </li>
            <li>
              <strong>Obligación que continúa en mora:</strong> la misma ley establece la caducidad
              del dato negativo a los ocho años contados desde el momento en que la obligación entró
              en mora.
            </li>
          </ul>
          <p>
            Estos son plazos de permanencia de información en la base de datos; no responden por sí
            solos si una deuda existe, fue pagada, se extinguió o prescribió. Verifica las fechas y
            el estado concretos en tu reporte y busca orientación jurídica si la discusión es sobre
            la obligación, no solo sobre el dato.
          </p>
        </ContentSection>

        <ContentSection title="Historial y puntaje no son lo mismo">
          <p>
            El historial es el conjunto de información registrada. El puntaje es una estimación
            numérica producida con un modelo a partir de información disponible. Puede variar entre
            centrales y no existe un umbral universal que garantice un crédito. La guía de{" "}
            <InlineLink href={scorePath}>puntaje crediticio</InlineLink> explica factores, modelos y
            acciones prácticas sin inventar rangos de aprobación.
          </p>
        </ContentSection>

        <ContentSection title="Corrección de datos, privacidad y seguridad">
          <p>
            La Ley 1266, modificada por la Ley 2157, reconoce al titular la posibilidad de conocer,
            actualizar y rectificar su información mediante consultas y reclamos. Si una obligación
            no es tuya, el estado parece incorrecto o falta una actualización, identifica el dato,
            reúne soportes y usa el canal oficial de la central y, cuando corresponda, de la fuente
            que lo reportó.
          </p>
          <p>
            Entra escribiendo o comprobando el dominio oficial. No compartas contraseñas, códigos de
            acceso, respuestas de validación ni documentos con intermediarios que prometan “borrar”
            información legítima a cambio de dinero. Presentar un reclamo permite revisar un dato;
            no asegura que se elimine si es exacto y permanece dentro del plazo legal.
          </p>
        </ContentSection>

        <ContentSection title="Siguiente paso según tu situación">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Si quieres ver qué figura a tu nombre, empieza por la{" "}
              <InlineLink href={consultationPath}>consulta del historial</InlineLink>.
            </li>
            <li>
              Si ya revisaste los datos y quieres fortalecer tu perfil, lee la guía de{" "}
              <InlineLink href={scorePath}>puntaje y mejora crediticia</InlineLink>.
            </li>
            <li>
              Si todavía no tienes registros, revisa qué significa pedir un{" "}
              <InlineLink href={noHistoryPath}>primer crédito sin historial</InlineLink>.
            </li>
          </ul>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
