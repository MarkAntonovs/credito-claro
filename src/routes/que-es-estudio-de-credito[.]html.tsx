import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/que-es-estudio-de-credito.html",
  title: "Estudio de crédito en Colombia: qué evalúa y cómo funciona",
  description:
    "Conoce el propósito de un estudio de crédito y las categorías generales que un proveedor puede evaluar, sin promesas de aprobación.",
} as const;

export const Route = createFileRoute("/que-es-estudio-de-credito.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () => (await import("@/data/migration/articles/que-es-estudio-de-credito")).article,
  component: QueEsEstudioDeCreditoPage,
});

function QueEsEstudioDeCreditoPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
