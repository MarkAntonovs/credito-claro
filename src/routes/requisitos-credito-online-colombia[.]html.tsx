import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/requisitos-credito-online-colombia.html",
  title: "Requisitos para crédito online en Colombia: categorías comunes",
  description:
    "Categorías que un proveedor puede requerir para crédito online: identidad, capacidad legal, residencia, ingresos, contacto, cuenta y evaluación.",
} as const;

export const Route = createFileRoute("/requisitos-credito-online-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/requisitos-credito-online-colombia")).article,
  component: RequisitosCreditoOnlineColombiaPage,
});

function RequisitosCreditoOnlineColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
