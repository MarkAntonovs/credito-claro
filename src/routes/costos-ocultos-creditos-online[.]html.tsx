import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/costos-ocultos-creditos-online.html",
  title: "Costos adicionales en créditos online: qué revisar",
  description:
    "Revisa intereses, cargos, seguros aplicables, servicios opcionales y consecuencias de mora en la oferta y el contrato de crédito.",
} as const;

export const Route = createFileRoute("/costos-ocultos-creditos-online.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/costos-ocultos-creditos-online")).article,
  component: CostosOcultosCreditosOnlinePage,
});

function CostosOcultosCreditosOnlinePage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
