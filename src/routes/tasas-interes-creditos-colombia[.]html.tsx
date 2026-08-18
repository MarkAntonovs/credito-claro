import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { ContentSection } from "@/components/layouts/page-shell";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/tasas-interes-creditos-colombia.html";
const description =
  "Cómo comparar tasas de interés y costo total de créditos en Colombia: E.A., tasa mensual, seguros, comisiones, usura y simulación de cuotas.";

export const Route = createFileRoute("/tasas-interes-creditos-colombia.html")({
  loader: async () =>
    (await import("@/data/migration/articles/tasas-interes-prestamos-online")).article,
  head: () =>
    createMigratedRouteMetadata({
      path,
      title: "Tasas de interés de créditos en Colombia: costo total",
      description,
    }),
  component: Page,
});

function Page() {
  return (
    <MigratedLegacyPage
      article={Route.useLoaderData()}
      canonicalPath={path}
      heading="Tasas de interés y costo total de créditos en Colombia"
      description={description}
      afterContent={
        <ContentSection title="Pasa de la tasa a una estimación comparable">
          <p>
            Usa el <a href="/simulador-credito-colombia.html">simulador de crédito</a> con el mismo
            monto y plazo para comparar escenarios. Añade por separado solo seguros, comisiones u
            otros cargos confirmados en cada oferta; la calculadora no los inventa ni los incluye
            automáticamente.
          </p>
        </ContentSection>
      }
    />
  );
}
