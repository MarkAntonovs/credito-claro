import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { ContentSection } from "@/components/layouts/page-shell";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/prestamo-reportado-datacredito.html",
  title: "Préstamos para reportados en Colombia: opciones y límites",
  description:
    "Opciones realistas al solicitar un préstamo estando reportado: evaluación, requisitos, costos, libranza cuando aplica y alertas de estafa.",
} as const;

export const Route = createFileRoute("/prestamo-reportado-datacredito.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/prestamo-reportado-datacredito")).article,
  component: PrestamoReportadoDatacreditoPage,
});

function PrestamoReportadoDatacreditoPage() {
  const article = Route.useLoaderData();
  return (
    <MigratedLegacyPage
      article={article}
      heading="Préstamos para reportados: opciones realistas y qué revisar"
      description={metadata.description}
      afterContent={
        <>
          <ContentSection title="Opciones realistas según la situación">
            <p>
              No existe una categoría universal de crédito “para reportados”. Puede haber productos
              ordinarios sujetos a estudio, libranza cuando la persona y el pagador cumplen las
              condiciones, o alternativas para reorganizar obligaciones. Ninguna vía elimina la
              evaluación ni garantiza aprobación.
            </p>
          </ContentSection>
          <ContentSection title="Requisitos, costos y alertas de estafa">
            <p>
              Confirma identidad, ingresos, soportes, cuenta o medio de pago y cualquier requisito
              del producto concreto. Compara tasa, cargos, plazo, cuota y total previsto. Desconfía
              de la aprobación garantizada, de frases como “sin consulta” sin respaldo y de pagos
              anticipados para liberar fondos.
            </p>
            <p>
              Antes de otra solicitud,{" "}
              <a href="/consultar-historial-crediticio-gratis.html">
                consulta tu historia crediticia
              </a>{" "}
              y corrige por los canales oficiales cualquier dato que no reconozcas.
            </p>
          </ContentSection>
        </>
      }
    />
  );
}
