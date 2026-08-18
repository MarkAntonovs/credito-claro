import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/prestamos-pequenos-montos-colombia.html",
  title: "Préstamos de montos pequeños en Colombia: costos y condiciones",
  description:
    "Qué revisar en un préstamo de monto pequeño: tasa, cargos, plazo, cuota, total previsto y riesgos de acumular obligaciones repetidas.",
} as const;

export const Route = createFileRoute("/prestamos-pequenos-montos-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/prestamos-pequenos-montos-colombia")).article,
  component: PrestamosPequenosMontosColombiaPage,
});

function PrestamosPequenosMontosColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
