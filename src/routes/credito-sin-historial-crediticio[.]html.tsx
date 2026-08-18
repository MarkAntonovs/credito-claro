import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/credito-sin-historial-crediticio.html",
  title: "Crédito sin historial en Colombia: qué significa y cómo prepararse",
  description:
    "Diferencias entre historia limitada y negativa, evaluación del proveedor, consulta de información y aspectos que conviene comparar.",
} as const;

export const Route = createFileRoute("/credito-sin-historial-crediticio.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/credito-sin-historial-crediticio")).article,
  component: CreditoSinHistorialCrediticioPage,
});

function CreditoSinHistorialCrediticioPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
