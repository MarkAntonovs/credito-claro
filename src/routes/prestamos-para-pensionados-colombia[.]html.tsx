import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/prestamos-para-pensionados-colombia.html",
  title: "Préstamos para pensionados en Colombia: requisitos y opciones",
  description:
    "Guía para comparar créditos para pensionados: modalidad de pago, libranza, tasa, costos, plazo, cuota, requisitos y entidad responsable.",
} as const;

export const Route = createFileRoute("/prestamos-para-pensionados-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/prestamos-para-pensionados-colombia")).article,
  component: PrestamosParaPensionadosColombiaPage,
});

function PrestamosParaPensionadosColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
