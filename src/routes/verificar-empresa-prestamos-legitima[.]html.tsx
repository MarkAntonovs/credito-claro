import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/verificar-empresa-prestamos-legitima.html",
  title: "Cómo verificar una empresa de préstamos en Colombia",
  description:
    "Checklist para verificar identidad legal, dominio, contrato, costos y afirmaciones de supervisión de una empresa de préstamos en Colombia.",
} as const;

export const Route = createFileRoute("/verificar-empresa-prestamos-legitima.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/verificar-empresa-prestamos-legitima")).article,
  component: VerificarEmpresaPrestamosLegitimaPage,
});

function VerificarEmpresaPrestamosLegitimaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
