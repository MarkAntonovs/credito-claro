import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/prestamos-inmediatos-en-linea.html",
  title: "Préstamos “inmediatos” en Colombia: qué significa",
  description:
    "Qué significa “inmediato” en un crédito online y por qué solicitud, evaluación, decisión, contrato y desembolso pueden tener tiempos distintos.",
} as const;

export const Route = createFileRoute("/prestamos-inmediatos-en-linea.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/prestamos-inmediatos-en-linea")).article,
  component: PrestamosInmediatosEnLineaPage,
});

function PrestamosInmediatosEnLineaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
