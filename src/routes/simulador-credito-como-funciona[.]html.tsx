import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/simulador-credito-como-funciona.html",
  title: "Simulador de crédito: cómo estimar y comparar",
  description:
    "Cómo funciona un simulador de crédito: principal, tasa, plazo, cuota estimada, costos omitidos y diferencias frente a la oferta y el contrato.",
} as const;

export const Route = createFileRoute("/simulador-credito-como-funciona.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/simulador-credito-como-funciona")).article,
  component: SimuladorCreditoComoFuncionaPage,
});

function SimuladorCreditoComoFuncionaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
