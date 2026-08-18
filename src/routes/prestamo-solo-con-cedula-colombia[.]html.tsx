import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/prestamo-solo-con-cedula-colombia.html",
  title: "Préstamo solo con cédula en Colombia: qué significa",
  description:
    "Qué puede significar “solo con cédula” y qué verificaciones, condiciones, costos y medidas de protección aún pueden formar parte del proceso.",
} as const;

export const Route = createFileRoute("/prestamo-solo-con-cedula-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/prestamo-solo-con-cedula-colombia")).article,
  component: PrestamoSoloConCedulaColombiaPage,
});

function PrestamoSoloConCedulaColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
