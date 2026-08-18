import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/peligros-gota-gota-colombia.html",
  title: "Peligros del gota a gota en Colombia: riesgos y señales",
  description:
    "Riesgos de préstamos informales: contratos y costos poco claros, presión de cobro, uso de datos y posibles consecuencias para la seguridad.",
} as const;

export const Route = createFileRoute("/peligros-gota-gota-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/peligros-gota-gota-colombia")).article,
  component: PeligrosGotaGotaColombiaPage,
});

function PeligrosGotaGotaColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
