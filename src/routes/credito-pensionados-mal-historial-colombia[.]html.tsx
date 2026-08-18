import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/credito-pensionados-mal-historial-colombia.html",
  title: "Crédito para pensionados con mal historial en Colombia: opciones",
  description:
    "Qué debe revisar un pensionado con historial adverso: criterios variables, historia crediticia, libranza y condiciones finales del producto.",
} as const;

export const Route = createFileRoute("/credito-pensionados-mal-historial-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/credito-pensionados-mal-historial-colombia")).article,
  component: CreditoPensionadosMalHistorialColombiaPage,
});

function CreditoPensionadosMalHistorialColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
