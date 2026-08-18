import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/credito-sin-cuenta-bancaria-colombia.html",
  title: "Crédito sin cuenta bancaria en Colombia: requisitos y medios de pago",
  description:
    "Cómo revisar si un crédito requiere cuenta bancaria y qué confirmar sobre desembolso, pagos, datos financieros y condiciones del proveedor.",
} as const;

export const Route = createFileRoute("/credito-sin-cuenta-bancaria-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/credito-sin-cuenta-bancaria-colombia")).article,
  component: CreditoSinCuentaBancariaColombiaPage,
});

function CreditoSinCuentaBancariaColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
