import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/consultar-historial-crediticio-gratis.html",
  title: "Consultar historial crediticio gratis en Colombia: guía oficial",
  description:
    "Consulta gratis tu historial en los canales oficiales de DataCrédito y TransUnion, revisa la información, detecta errores y protege tus datos.",
} as const;

export const Route = createFileRoute("/consultar-historial-crediticio-gratis.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/consultar-historial-crediticio-gratis")).article,
  component: ConsultarHistorialCrediticioGratisPage,
});

function ConsultarHistorialCrediticioGratisPage() {
  const article = Route.useLoaderData();
  return (
    <MigratedLegacyPage
      article={article}
      heading="Cómo consultar tu historial crediticio gratis en Colombia"
      description={metadata.description}
    />
  );
}
