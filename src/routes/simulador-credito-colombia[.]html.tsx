import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { ContentSection } from "@/components/layouts/page-shell";
import { LoanCalculator } from "@/components/site/loan-calculator";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/simulador-credito-colombia.html";
const description =
  "Simula una cuota mensual, total pagado e intereses estimados por monto, tasa efectiva y plazo, con supuestos visibles y vista de amortización.";

export const Route = createFileRoute("/simulador-credito-colombia.html")({
  loader: async () =>
    (await import("@/data/migration/articles/simulador-credito-como-funciona")).article,
  head: () =>
    createMigratedRouteMetadata({
      path,
      title: "Simulador de crédito en Colombia: cuota e intereses",
      description,
    }),
  component: Page,
});

function Page() {
  return (
    <MigratedLegacyPage
      article={Route.useLoaderData()}
      canonicalPath={path}
      heading="Simulador de crédito en Colombia"
      description={description}
      intro="Ingresa monto, tasa y plazo para estimar una cuota mensual, el total pagado y los intereses. Puedes interpretar la tasa como efectiva anual o efectiva mensual. El cálculo usa cuotas iguales y no incluye cargos que no hayas confirmado."
      leadContent={
        <ContentSection title="Calculadora de cuota, total e intereses">
          <LoanCalculator />
        </ContentSection>
      }
    />
  );
}
