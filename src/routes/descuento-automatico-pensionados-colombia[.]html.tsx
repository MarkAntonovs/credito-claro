import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/descuento-automatico-pensionados-colombia.html",
  title: "Créditos para pensionados con libranza: cómo funciona",
  description:
    "Entiende el descuento automático por libranza, el papel del pagador y qué costos, autorización y contrato revisar antes de aceptar.",
} as const;

export const Route = createFileRoute("/descuento-automatico-pensionados-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/descuento-automatico-pensionados-colombia")).article,
  component: DescuentoAutomaticoPensionadosColombiaPage,
});

function DescuentoAutomaticoPensionadosColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
