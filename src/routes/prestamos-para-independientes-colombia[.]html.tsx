import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/prestamos-para-independientes-colombia.html",
  title: "Préstamos para independientes en Colombia: qué evaluar",
  description:
    "Cómo preparar y comparar una solicitud de crédito como independiente: ingresos variables, posibles soportes, costo, plazo y capacidad de pago.",
} as const;

export const Route = createFileRoute("/prestamos-para-independientes-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/prestamos-para-independientes-colombia")).article,
  component: PrestamosParaIndependientesColombiaPage,
});

function PrestamosParaIndependientesColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
