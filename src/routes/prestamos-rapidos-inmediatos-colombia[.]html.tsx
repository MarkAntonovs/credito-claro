import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { ContentSection } from "@/components/layouts/page-shell";
import { Callout } from "@/components/site/primitives";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/prestamos-rapidos-inmediatos-colombia.html";
const heading = "Préstamos rápidos en Colombia: tiempos, costos y opciones";
const description =
  "Compara opciones de préstamos rápidos en Colombia entendiendo solicitud, aprobación, desembolso, requisitos, costos y señales de riesgo.";

export const Route = createFileRoute("/prestamos-rapidos-inmediatos-colombia.html")({
  loader: async () =>
    (await import("@/data/migration/articles/prestamos-inmediatos-en-linea")).article,
  head: () =>
    createMigratedRouteMetadata({
      path,
      title: "Préstamos rápidos en Colombia: qué esperar y comparar",
      description,
    }),
  component: Page,
});

function Page() {
  return (
    <MigratedLegacyPage
      article={Route.useLoaderData()}
      canonicalPath={path}
      heading={heading}
      description={description}
      afterContent={
        <>
          <ContentSection title="Requisitos, montos y tiempos que debes confirmar">
            <p>
              Confirma los documentos, el monto disponible para tu perfil, el plazo y el medio de
              desembolso con cada proveedor. Si una ficha no publica uno de esos datos, trátalo como
              “No disponible”: no lo deduzcas de una promesa general de rapidez.
            </p>
          </ContentSection>
          <ContentSection title="Compara opciones sin convertir rapidez en una promesa">
            <Callout variant="neutral" title="Dos pasos útiles">
              Primero revisa la guía general de{" "}
              <a
                href="/creditos-online-colombia.html"
                className="font-medium underline decoration-accent underline-offset-4"
              >
                créditos online
              </a>
              . Después usa la{" "}
              <a
                href="/ofertas-creditos.html"
                className="font-medium underline decoration-accent underline-offset-4"
              >
                comparación de ofertas
              </a>{" "}
              para contrastar solo datos verificados. Ninguna opción se presenta como desembolso
              garantizado o “en cinco minutos”.
            </Callout>
          </ContentSection>
        </>
      }
    />
  );
}
