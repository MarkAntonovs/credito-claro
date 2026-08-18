import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/tasas-interes-prestamos-online.html",
  title: "Tasas de interés en préstamos: cómo compararlas",
  description:
    "Aprende a comparar tasas nominales y efectivas en periodos equivalentes, identificar la modalidad y revisar el costo total del crédito.",
} as const;

export const Route = createFileRoute("/tasas-interes-prestamos-online.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/tasas-interes-prestamos-online")).article,
  component: TasasInteresPrestamosOnlinePage,
});

function TasasInteresPrestamosOnlinePage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
