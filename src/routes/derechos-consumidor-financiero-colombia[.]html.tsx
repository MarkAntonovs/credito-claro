import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/derechos-consumidor-financiero-colombia.html",
  title: "Derechos del consumidor financiero en Colombia: guía básica",
  description:
    "Guía básica para revisar información contractual, identificar al proveedor y preparar una reclamación según la entidad y actividad aplicables.",
} as const;

export const Route = createFileRoute("/derechos-consumidor-financiero-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/derechos-consumidor-financiero-colombia")).article,
  component: DerechosConsumidorFinancieroColombiaPage,
});

function DerechosConsumidorFinancieroColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
