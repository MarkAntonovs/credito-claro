import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { ContentSection } from "@/components/layouts/page-shell";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/prestamos-para-pensionados-colombia";

export const Route = createFileRoute("/prestamos-para-pensionados-colombia")({
  loader: async () =>
    (await import("@/data/migration/articles/prestamos-para-pensionados-colombia")).article,
  head: ({ loaderData }) => createMigratedRouteMetadata(loaderData!, path),
  component: Page,
});

function Page() {
  return (
    <MigratedLegacyPage
      article={Route.useLoaderData()}
      canonicalPath={path}
      afterContent={
        <ContentSection title="Historia crediticia, comparación y capacidad de pago">
          <p>
            Un reporte puede formar parte del análisis, pero no permite anticipar por sí solo una
            decisión. Consulta qué significa{" "}
            <a href="/prestamo-reportado-datacredito.html">pedir un crédito estando reportado</a> y
            compara únicamente condiciones documentadas en la{" "}
            <a href="/ofertas-creditos.html">página de ofertas</a>.
          </p>
          <p>
            Antes de aceptar una cuota o descuento, réstalo de la mesada neta junto con otras
            obligaciones y gastos esenciales. La facilidad del descuento no convierte una deuda en
            asequible.
          </p>
        </ContentSection>
      }
    />
  );
}
