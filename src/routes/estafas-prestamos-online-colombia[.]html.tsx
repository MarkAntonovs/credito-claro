import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/estafas-prestamos-online-colombia.html",
  title: "Estafas de préstamos online en Colombia: cómo identificarlas",
  description:
    "Señales de alerta en ofertas de crédito: suplantación, dominios falsos, presión, pagos inesperados y contratos o responsables poco claros.",
} as const;

export const Route = createFileRoute("/estafas-prestamos-online-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/estafas-prestamos-online-colombia")).article,
  component: EstafasPrestamosOnlineColombiaPage,
});

function EstafasPrestamosOnlineColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
