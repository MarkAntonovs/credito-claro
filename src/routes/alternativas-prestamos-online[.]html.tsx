import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/alternativas-prestamos-online.html",
  title: "Alternativas a los préstamos online en Colombia: qué evaluar",
  description:
    "Alternativas a los préstamos online: compara opciones formales, espera, ahorro, acuerdos de pago y riesgos antes de asumir una deuda nueva.",
} as const;

export const Route = createFileRoute("/alternativas-prestamos-online.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/alternativas-prestamos-online")).article,
  component: AlternativasPrestamosOnlinePage,
});

function AlternativasPrestamosOnlinePage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
