import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/cuanto-credito-puede-pedir-un-pensionado-colombia.html",
  title: "Cuánto crédito puede pedir un pensionado: factores a evaluar",
  description:
    "Factores para evaluar un monto de crédito como pensionado: capacidad de pago, deducciones, plazo, cuota, libranza y políticas del proveedor.",
} as const;

export const Route = createFileRoute("/cuanto-credito-puede-pedir-un-pensionado-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/cuanto-credito-puede-pedir-un-pensionado-colombia"))
      .article,
  component: CuantoCreditoPuedePedirUnPensionadoColombiaPage,
});

function CuantoCreditoPuedePedirUnPensionadoColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
