import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/credito-online-vs-banco.html",
  title: "Crédito online vs. banco en Colombia: cómo comparar",
  description:
    "Compara crédito online y bancario por tasa, costo, requisitos, contrato y entidad responsable, sin asumir ventajas por el canal utilizado.",
} as const;

export const Route = createFileRoute("/credito-online-vs-banco.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () => (await import("@/data/migration/articles/credito-online-vs-banco")).article,
  component: CreditoOnlineVsBancoPage,
});

function CreditoOnlineVsBancoPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
